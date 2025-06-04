import { useEffect } from 'react';

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
