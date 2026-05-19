/** Prepend the Vite base path so images resolve correctly on GitHub Pages. */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
