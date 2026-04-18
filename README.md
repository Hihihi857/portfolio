# Yejee Portfolio

A Next.js portfolio landing page with a large editorial greeting and a scroll-linked cinematic panel transition.

## Run

```bash
npm install
npm run dev
```

The hand asset lives at `public/hand.png`.

## Animation Notes

The scroll interaction is implemented in `components/ScrollViewport.tsx`.

- The outer section is taller than the viewport.
- The inner frame is `sticky` and remains fixed while the user scrolls through that section.
- Framer Motion `useScroll` maps section scroll progress to transform values.
- A black panel moves from `x: -102%` to `x: 0%`.
- The white content shifts slightly to the right at the same time, creating a pushed-viewport feeling.
- `useSpring` smooths the raw scroll progress to avoid jitter.

## Tweak Points

Most high-level motion values live in `components/animationConfig.ts`.

- `sectionHeight`: total scroll distance for the cinematic transition.
- `desktopPush`: how far the white content is pushed sideways.
- `textLift`: subtle vertical parallax on the intro text.
- `imageDrift`: subtle vertical drift on the supporting paragraph.

Hero spacing and hand alignment are in `components/Hero.tsx`.
