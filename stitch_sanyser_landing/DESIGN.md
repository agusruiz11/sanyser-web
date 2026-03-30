# Design System Strategy: Industrial Precision

## 1. Overview & Creative North Star
The construction and plumbing industries are built on the principles of structural integrity, precision, and heavy-duty reliability. To reflect this, this design system is guided by the Creative North Star: **"The Industrial Architect."**

Unlike generic e-commerce templates, this system prioritizes an editorial, high-end feel that speaks to the professional expertise of architects and engineers. We achieve this through **Organic Brutalism**—combining the raw, high-contrast impact of industrial materials (navy and orange) with sophisticated, layered surfaces and generous whitespace. The layout should feel intentional and spacious, using asymmetry and overlapping elements to break the "grid-block" monotony often found in supply catalogs.

## 2. Colors & Tonal Architecture
The palette transitions from the deep authority of Navy to the high-visibility energy of Safety Orange.

### Palette Strategy
- **Primary (`#a63500`):** Our core "Action Orange." Use this sparingly for critical CTAs and brand identifiers.
- **Secondary (`#48607d`):** A professional slate blue that bridges the gap between the navy headers and light backgrounds.
- **Tertiary (`#005ea3`):** Reserved for technical data highlights or link states.
- **Surface Hierarchy:** Utilize the `surface-container` tiers to create depth.
    - `surface`: The base canvas.
    - `surface-container-low`: For secondary content sections.
    - `surface-container-highest`: For high-priority interactive cards.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. We define boundaries through background color shifts. A `surface-container-low` section sitting against a `surface` background creates a clean, sophisticated break that feels "designed" rather than "boxed."

### Glass & Gradient Signature
To elevate the industrial feel, apply a subtle gradient to primary buttons and hero backgrounds—moving from `primary` to `primary_container`. For floating navigation or overlays, use **Glassmorphism**: apply semi-transparent surface colors with a `backdrop-blur` (12px-20px) to allow the structural colors of the site to bleed through, creating a sense of layered transparency.

## 3. Typography: Editorial Authority
We pair a brutalist, geometric display face with a highly legible technical sans-serif to mirror blueprints and architectural plans.

*   **Display & Headlines (Space Grotesk):** This is our "Steel Frame." Use `display-lg` (3.5rem) for hero statements with tight letter spacing. It is bold, modern, and uncompromising.
*   **Body & Labels (Inter):** This is our "Precision Tooling." Inter provides maximum readability for technical specifications and product descriptions.
*   **The Hierarchy:** Use extreme scale contrast. Pairing a `display-lg` headline with a `body-md` description creates a high-end editorial rhythm that guides the eye efficiently through complex information.

## 4. Elevation & Depth: Tonal Layering
In "The Industrial Architect" system, depth is physical. We avoid traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift in lightness creates a "lift" that feels integrated into the UI’s architecture.
*   **Ambient Shadows:** Where a floating effect is required (e.g., a "Request Quote" modal), use a shadow with a large blur (32px+) and low opacity (max 6%). Tint the shadow with the `on-surface` color to ensure it looks like a natural occlusion of light, not a gray smudge.
*   **The Ghost Border:** For accessibility in form fields, use the `outline-variant` token at **20% opacity**. This provides a "hint" of a container without breaking the seamless, borderless aesthetic.

## 5. Components & Industrial Primitives

### Buttons: The "Solid State" Style
*   **Primary:** Solid `primary` background with a subtle linear gradient. Corner radius: `md` (0.75rem).
*   **Secondary:** `surface-container-highest` background with `on-secondary-container` text. No border.
*   **Interactions:** On hover, increase elevation via a subtle tonal shift rather than a heavy shadow.

### Input Fields: Technical Entry
*   **Style:** Forgo the four-sided box. Use a `surface-container-low` background with a `sm` (0.25rem) rounded top and a 2px `primary` bottom-bar highlight on focus.
*   **Labels:** Use `label-md` in `on-surface-variant` for a muted, professional look.

### Cards & Technical Lists
*   **No Dividers:** Forbid the use of horizontal lines between list items. Use the **Spacing Scale** (`3` or `4`) to create breathing room.
*   **The "Spec" Chip:** For product specs (e.g., "Piping," "PVC," "10mm"), use `secondary-container` chips with `on-secondary-container` text. These should feel like small, durable labels.

### Custom Component: The "Blueprint Overlay"
A specialized image component for plumbing parts. The product image sits on a `surface-container-lowest` card with an asymmetric `spaceGrotesk` headline overlapping the image edge, creating a signature, high-end editorial look.

## 6. Do’s and Don'ts

### Do:
*   **Do** use generous whitespace (Spacing `12` and `16`) between major thematic sections.
*   **Do** lean into asymmetry. Place text on the left and images slightly offset to the right.
*   **Do** use the `primary` orange as a "laser pointer"—only use it where you want the user to click or look immediately.

### Don’t:
*   **Don’t** use 100% black text. Use `on-surface` or `on-background` for a softer, more premium reading experience.
*   **Don’t** use standard 1px borders. If a container feels lost, use a tonal background shift.
*   **Don’t** use sharp 90-degree corners. Even in an industrial setting, our `DEFAULT` (0.5rem) or `md` (0.75rem) radius makes the technology feel approachable and modern.