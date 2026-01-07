# Vyooma Design System (v1)

## 0. Principles
- **Predictable Layers**: No random z-indexes.
- **Accessible by Default**: WCAG AA/AAA compliance as a baseline.
- **Butter-Smooth Motion**: No layout thrashing (transition-all).
- **Hardened Hierarchy**: Responsive typography with Inter.

---

## 1. Typography (Inter)
- **Base Font**: Inter, Sans-Serif.
- **Weights**: 400 (Regular), 700 (Bold), 900 (Black).
- **Scale**:
  - `heading-1`: 4xl / 900 (Core pages)
  - `heading-2`: 2xl / 700 (Sections)
  - `heading-3`: xl / 700 (Widgets)

---

## 2. Layering (Z-Index Scale)
| Variable | Value | Usage |
| :--- | :--- | :--- |
| `sidebar` | 40 | Navigation Shell |
| `top-nav` | 30 | Sticky Headers |
| `dropdown` | 35 | Popovers/Selects |
| `modal-backdrop` | 50 | Overlay Dim |
| `modal` | 60 | Dialogs |
| `toast` | 70 | System Notifications |
| `tooltip` | 80 | Quick Info |

---

## 3. Performance Guidelines
### Animations
- **No `transition-all`**: Always specify properties (e.g., `transition-[background-color,transform]`).
- **Hardware Acceleration**: Use `will-change: transform, opacity` for heavy animations.
- **Duration**: `200ms` for micro-interactions, `300ms` for layout transitions.

---

## 4. Accessibility Check
- **Focus**: Global `focus-visible` ring in `primary` color.
- **Contrast**:
  - Background/Foreground: **4.5:1 min**.
  - Interactive elements: **3:1 min**.
- **Skip Links**: All layouts MUST include `SkipToContent` component.
