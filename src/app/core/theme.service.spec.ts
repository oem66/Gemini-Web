import { DAY_ENDS_AT, DAY_STARTS_AT, resolveTheme } from './theme.service';

describe('resolveTheme', () => {
  it('honours a pinned choice whatever the time or system', () => {
    expect(resolveTheme('light', 23, true)).toBe('light');
    expect(resolveTheme('dark', 12, false)).toBe('dark');
  });

  it('follows the daylight in auto', () => {
    expect(resolveTheme('auto', DAY_STARTS_AT, false)).toBe('light');
    expect(resolveTheme('auto', DAY_ENDS_AT - 1, false)).toBe('light');
    expect(resolveTheme('auto', DAY_ENDS_AT, false)).toBe('dark');
    expect(resolveTheme('auto', DAY_STARTS_AT - 1, false)).toBe('dark');
  });

  it('lets a dark operating system dim the page by day', () => {
    expect(resolveTheme('auto', 12, true)).toBe('dark');
  });
});
