export async function loadTableauScript(version) {
  return new Promise((resolve) => {
    if (!__CLIENT__) {
      resolve();
      return;
    }
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
      script.addEventListener('load', () => {
        window[`tableau_${version}`] = window.tableau;
        resolve(window[`tableau_${version}`]);
      });
    } else {
      resolve(window[`tableau_${version}`]);
    }
  });
}

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
