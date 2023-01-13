const loadTableauScript = (callback, version) => {
  const existingScript = __CLIENT__ && document.getElementById(`tableauJS`);
  //replace script loaded on each version change
  if (existingScript) {
    existingScript.setAttribute(
      'src',
      `https://public.tableau.com/javascripts/api/tableau-${version}.min.js`,
    );
  }
  if (!existingScript && __CLIENT__) {
    const script = document.createElement('script');
    script.src = `https://public.tableau.com/javascripts/api/tableau-${version}.min.js`;
    script.id = `tableauJS`;
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) callback();
    };
  }
  //callback, if needed
  if (existingScript && callback) callback();

  const tableau = isMyScriptLoaded(version) && __CLIENT__ ? window.tableau : '';
  return tableau;
};

const isMyScriptLoaded = (version) => {
  //check for loaded Tableau script in dom scripts
  var scripts = __CLIENT__ && document.getElementsByTagName('script');
  if (scripts) {
    for (var i = scripts.length; i--; ) {
      // eslint-disable-next-line eqeqeq
      if (
        scripts[i].src ===
        `https://public.tableau.com/javascripts/api/tableau-${version}.min.js`
      )
        return true;
    }
  }
  return false;
};

export { loadTableauScript, isMyScriptLoaded };

//script url for each version. In case you might need to add them in the load balancer
// https://public.tableau.com/javascripts/api/tableau-2.8.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.7.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.6.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.5.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.4.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.3.0.min.js
// https://public.tableau.com/javascripts/api/tableau-2.2.2.min.js
// https://public.tableau.com/javascripts/api/tableau-2.1.2.min.js
// https://public.tableau.com/javascripts/api/tableau-2.0.3.min.js
