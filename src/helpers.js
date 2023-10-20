import React from 'react';

export const loadTableauScript = (callback, version) => {
  if (!__CLIENT__) return;
  const source = `https://public.tableau.com/javascripts/api/tableau-${version}.min.js`;
  const existingScript = document.getElementById(`tableauJS-${version}`);
  const existingScriptSource =
    existingScript && existingScript.getAttribute('src');
  // Replace script loaded on each version change
  if (existingScript && existingScriptSource !== source) {
    existingScript.setAttribute('src', source);
  }
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = source;
    script.id = `tableauJS-${version}`;
    document.body.appendChild(script);
    script.onload = () => {
      window[`tableau_${version}`] = window.tableau;
      if (callback) callback();
    };
  }
  // Trigger callback
  if (existingScript && callback) callback();
};

// Script url for each version. In case you might need to add them in the load balancer
// https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.6.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.5.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.4.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.3.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.2.2.min.js
// https://public.tableau.com/javascripts/api/tableau-2.1.2.min.js
// https://public.tableau.com/javascripts/api/tableau-2.0.3.min.js

export const useCopyToClipboard = (text) => {
  const [copyStatus, setCopyStatus] = React.useState('inactive');
  const copy = React.useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus('copied'),
      () => setCopyStatus('failed'),
    );
  }, [text]);

  React.useEffect(() => {
    if (copyStatus === 'inactive') {
      return;
    }

    const timeout = setTimeout(() => setCopyStatus('inactive'), 3000);

    return () => clearTimeout(timeout);
  }, [copyStatus]);

  return [copyStatus, copy];
};
