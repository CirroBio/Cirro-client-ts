import { useEffect } from 'react';

/**
 * Custom hook to set the document title based on the provided title.
 */
export function usePageTitle(title: string, titlePrefix = 'Cirro'): void {
  useEffect(() => {
    if (title.includes(' | ')) {
      const reversedCrumbs = title.split(' | ').reverse();
      document.title = reversedCrumbs.join(' | ');
    } else {
      document.title = `${titlePrefix} | ${title}`;
    }
  }, [title]);
}
