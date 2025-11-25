export const base = {
  spacing: {
    xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '24px',
  },
  radius: { sm: '8px', md: '12px' },
  grid: { minCardWidth: '280px' },
  typography: {
    h1: '1.5rem', h2: '1.125rem', body: '0.95rem', small: '0.85rem',
  },
};

export const lightTheme = {
  ...base,
  colors: {
    bg: '#f7f8fa',
    card: '#ffffff',
    text: '#1b1f24',
    subtext: '#4f5965',
    border: '#e6e9ee',
    primary: '#2563eb',
    danger: '#dc2626',
    inputBg: '#ffffff',
  },
};

export const darkTheme = {
  ...base,
  colors: {
    bg: '#0f141b',
    card: '#141a21',
    text: '#e6edf3',
    subtext: '#9aa7b2',
    border: '#1f2937',
    primary: '#60a5fa',
    danger: '#f87171',
    inputBg: '#0f141b',
  },
};
