# React App Shell

A React + Vite app scaffold with `Navbar`, `Sidebar`, `Footer`, and a `MainLayout`
that wires them together around a routed content area.

## Structure

```
src/
  components/
    Navbar.jsx / Navbar.css
    Sidebar.jsx / Sidebar.css
    Footer.jsx / Footer.css
  layouts/
    MainLayout.jsx / MainLayout.css
  pages/
    Dashboard.jsx
    Projects.jsx
    Settings.jsx
  App.jsx
  main.jsx
  index.css        <- design tokens (colors, type, layout) live here
```

- **Sidebar** — collapsible, dark, with active-route highlighting (react-router `NavLink`).
- **Navbar** — sticky top bar with page title, search, and avatar.
- **Footer** — sticky-bottom-of-content bar with links.
- **MainLayout** — composes Sidebar + Navbar + `<Outlet />` + Footer, and derives the
  navbar title from the current route.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Customizing

- Colors/fonts/spacing: edit the CSS variables at the top of `src/index.css`.
- Nav items: edit the `NAV_ITEMS` array in `src/components/Sidebar.jsx`.
- Add a page: create it in `src/pages/`, add a `<Route>` in `App.jsx`, and add an
  entry to `PAGE_META` in `src/layouts/MainLayout.jsx` for its navbar title.
