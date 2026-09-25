import { useEffect } from 'react';

const SITE_NAME = 'ToasterCat Studios';

/**
 * Sets the document title for the lifetime of a route, restoring the
 * site default on unmount so back-navigation doesn't strand a stale title.
 */
export default function useDocumentTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${SITE_NAME} - ${pageTitle}` : SITE_NAME;

    return () => {
      document.title = SITE_NAME;
    };
  }, [pageTitle]);
}
