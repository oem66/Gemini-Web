import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const distRoot = join(projectRoot, 'dist');
const angularOutput = join(distRoot, 'digital-solutions', 'browser');
const clientOutput = join(distRoot, 'client');
const serverOutput = join(distRoot, 'server');

rmSync(clientOutput, { recursive: true, force: true });
rmSync(serverOutput, { recursive: true, force: true });
mkdirSync(serverOutput, { recursive: true });
cpSync(angularOutput, clientOutput, { recursive: true });

writeFileSync(
  join(serverOutput, 'index.js'),
  `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get('accept')?.includes('text/html');

    if (response.status !== 404 || request.method !== 'GET' || !acceptsHtml) {
      return response;
    }

    const fallbackUrl = new URL('/index.html', request.url);
    return env.ASSETS.fetch(new Request(fallbackUrl, request));
  },
};

export default worker;
`
);
