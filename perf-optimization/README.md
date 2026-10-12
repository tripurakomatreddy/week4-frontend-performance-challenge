# Frontend Performance Optimization Challenge – Week 4

## How to Use

### Before (Unoptimized)
1. Open `before/index.html` in a browser (preferably Chrome).
2. Open DevTools → Lighthouse → generate a report (Mobile).
3. Observe poor scores caused by blocking scripts, large images, and heavy JS.

### After (Optimized)
1. Open `after/index.html` in a browser.
2. Run Lighthouse again.
3. Compare the dramatically improved scores.

## Key Optimizations Applied
- Critical CSS inlined
- Deferred & minified JavaScript
- Lazy loading + responsive images (`srcset`, `sizes`, `width`/`height`)
- Removed render-blocking fonts & scripts
- Resource hints (`preconnect`, `preload`)
- Minified CSS & elimination of unused code

See `PERFORMANCE_REPORT.md` for the full before/after analysis.
