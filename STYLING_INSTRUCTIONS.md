# Styling Instructions: Black and Yellow Theme

Use this guide for all visual updates in this calculator app.

## Theme Goals
- Keep a high-contrast black and yellow look.
- Preserve readability and accessibility.
- Keep styling clean and minimal for a calculator interface.

## Color Palette
Use these colors consistently:
- Primary background (app/page): `#0D0D0D`
- Card/container background: `#1A1A1A`
- Primary accent (yellow): `#FFD400`
- Accent hover (darker yellow): `#E6BF00`
- Text on dark backgrounds: `#F5F5F5`
- Text on yellow buttons: `#111111`
- Borders/dividers: `#2A2A2A`
- Focus outline: `#FFEA70`

## Typography
- Font stack: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`
- Base font color: light text (`#F5F5F5`) on dark areas.
- Use bold weight for key actions (`=` and operators).

## Layout and Surface
- `body`
  - Center calculator both vertically and horizontally.
  - Use `#0D0D0D` background.
- `.calculator`
  - Use `#1A1A1A` background.
  - Keep rounded corners and add a subtle dark shadow.
  - Add a thin border using `#2A2A2A`.

## Display Styling
- `.display`
  - Dark background (`#111111`) with yellow text (`#FFD400`).
  - Right-aligned value.
  - Border color `#2A2A2A`.
  - Slightly larger font than buttons.

## Button Styling
Apply to `.button` unless noted otherwise:
- Default numeric buttons:
  - Background: `#FFD400`
  - Text: `#111111`
- Operator buttons (`+`, `-`, `*`, `/`, `%`):
  - Background: `#E6BF00`
  - Font weight: `700`
- Equal button (`=`):
  - Background: `#FFC300`
  - Slightly stronger visual emphasis (font weight or subtle scale).
- Clear button (`C`):
  - Background: `#333333`
  - Text: `#FFD400`

## Interactive States
- Hover: darken yellow buttons slightly (`#E6BF00`).
- Active/pressed: apply a small downward transform (for example `translateY(1px)`).
- Focus-visible:
  - Use `outline: 2px solid #FFEA70`.
  - Keep outline offset for clear keyboard visibility.

## Spacing and Sizing
- Keep button grid as 4 columns.
- Use consistent gaps between keys.
- Maintain touch-friendly size (minimum ~44px button height).

## Accessibility Rules
- Maintain strong contrast between text and background.
- Ensure keyboard focus is always visible.
- Do not remove focus styles.
- Keep text readable at zoom levels up to 200%.

## Implementation Notes for Current Files
- Add these styles in `calculator.css`.
- Reuse existing classes in `calculator.html` (`.calculator`, `.display`, `.buttons`, `.button`).
- If needed, add modifier classes in HTML for special keys:
  - `.button--operator`
  - `.button--equals`
  - `.button--clear`

## Optional CSS Variable Setup
You can centralize theme values in `:root`:

```css
:root {
  --bg-page: #0D0D0D;
  --bg-card: #1A1A1A;
  --bg-display: #111111;
  --accent-yellow: #FFD400;
  --accent-yellow-hover: #E6BF00;
  --text-light: #F5F5F5;
  --text-dark: #111111;
  --border-dark: #2A2A2A;
  --focus-ring: #FFEA70;
}
```

Use these variables consistently to keep the black and yellow theme maintainable.
