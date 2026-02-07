// Application-level constants (not domain-specific)

export const APP_CONSTANTS = {
  LOADING_TEXT: 'Loading...',
  DEFAULT_PAGE_SIZE: 20,
  TOAST_DURATION: 5000,
  DEBOUNCE_DELAY: 300,
  STALE_TIME: 1000 * 60 * 5, // 5 minutes
  GC_TIME: 1000 * 60 * 30, // 30 minutes
} as const;
