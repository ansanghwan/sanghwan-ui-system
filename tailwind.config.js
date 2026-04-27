/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // --- Existing semantic tokens (shadcn-style, HSL) ---
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--color-primary-foreground) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--color-accent-foreground) / <alpha-value>)',
        point: 'hsl(var(--color-point) / <alpha-value>)',
        'point-foreground': 'hsl(var(--color-point-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--color-destructive) / <alpha-value>)',
        'destructive-foreground': 'hsl(var(--color-destructive-foreground) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--color-card-foreground) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--color-muted-foreground) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',

        // --- Figma BSS Admin Design System tokens ---
        // bg-surface-page, bg-surface-card, bg-surface-subtle ...
        surface: {
          page:            'var(--color-bg-page)',
          card:            'var(--color-bg-surface)',
          subtle:          'var(--color-bg-subtle)',
          primary:         'var(--color-bg-primary)',
          'primary-hover': 'var(--color-bg-primary-hover)',
          success:         'var(--color-bg-success)',
          warning:         'var(--color-bg-warning)',
          error:           'var(--color-bg-error)',
          info:            'var(--color-bg-info)',
        },
        // text-ink-primary, text-ink-secondary, text-ink-inverse ...
        ink: {
          primary:    'var(--color-text-primary)',
          secondary:  'var(--color-text-secondary)',
          disabled:   'var(--color-text-disabled)',
          inverse:    'var(--color-text-on-primary)',
          success:    'var(--color-text-success)',
          warning:    'var(--color-text-warning)',
          error:      'var(--color-text-error)',
          info:       'var(--color-text-info)',
        },
        // border-line, border-line-focus, border-line-error
        line: {
          DEFAULT: 'var(--color-border-default)',
          focus:   'var(--color-border-focus)',
          error:   'var(--color-border-error)',
        },
        // bg-action-primary, hover:bg-action-primary-hover
        action: {
          primary:       'var(--color-interactive-primary)',
          'primary-hover': 'var(--color-interactive-primary-hover)',
        },
      },

      spacing: {
        // Existing tokens
        'token-1': 'var(--space-1)',
        'token-2': 'var(--space-2)',
        'token-3': 'var(--space-3)',
        'token-4': 'var(--space-4)',
        'token-6': 'var(--space-6)',
        'token-8': 'var(--space-8)',
        // Figma BSS tokens — p-pad, px-comp, gap-comp-gap, mb-sec, p-lay
        'pad-sm':   'var(--spacing-component-padding-sm)',
        'pad':      'var(--spacing-component-padding)',
        'comp-gap': 'var(--spacing-component-gap)',
        'sec':      'var(--spacing-section-gap)',
        'lay':      'var(--spacing-layout-gap)',
      },

      borderRadius: {
        // Existing tokens
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        // Figma BSS tokens — rounded-btn, rounded-crd, rounded-inp, rounded-bdg, rounded-mdl
        btn: 'var(--radius-button)',
        crd: 'var(--radius-card)',
        inp: 'var(--radius-input)',
        bdg: 'var(--radius-badge)',
        mdl: 'var(--radius-modal)',
      },

      // text-page-title, text-sec-title, text-info-title, text-body-md, text-body-sm ...
      fontSize: {
        'page-title': ['var(--typo-page-title-size)', { lineHeight: 'var(--typo-page-title-height)', fontWeight: 'var(--typo-page-title-weight)' }],
        'section-title': ['var(--typo-section-title-size)', { lineHeight: 'var(--typo-section-title-height)', fontWeight: 'var(--typo-section-title-weight)' }],
        'sec-title':  ['var(--typo-section-title-size)',  { lineHeight: 'var(--typo-section-title-height)',  fontWeight: 'var(--typo-section-title-weight)' }],
        'info-title': ['var(--typo-info-title-size)', { lineHeight: 'var(--typo-info-title-height)', fontWeight: 'var(--typo-info-title-weight)' }],
        body:         ['var(--typo-body-size)',        { lineHeight: 'var(--typo-body-height)',        fontWeight: 'var(--typo-body-weight)' }],
        'body-md':    ['var(--typo-body-size)',        { lineHeight: 'var(--typo-body-height)',        fontWeight: 'var(--typo-body-weight)' }],
        'body-sm':    ['var(--typo-body-sm-size)',     { lineHeight: 'var(--typo-body-sm-height)',     fontWeight: 'var(--typo-body-sm-weight)' }],
        'list-title': ['var(--typo-list-title-size)', { lineHeight: 'var(--typo-list-title-height)', fontWeight: 'var(--typo-list-title-weight)' }],
        'list-ttl':   ['var(--typo-list-ttl-size)',   { lineHeight: 'var(--typo-list-ttl-height)',   fontWeight: 'var(--typo-list-ttl-weight)' }],
        'list-body':  ['var(--typo-list-body-size)',  { lineHeight: 'var(--typo-list-body-height)',  fontWeight: 'var(--typo-list-body-weight)' }],
      },

      boxShadow: {
        card: '0 18px 40px -24px rgb(15 23 42 / 0.35), 0 10px 18px -16px rgb(15 23 42 / 0.18)',
      },
    },
  },
  plugins: [],
};
