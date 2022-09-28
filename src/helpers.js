const loadTableauScript = (callback, version) => {
  const existingScript = document.getElementById(`tableauJS`);
  //replace script loaded on each version change
  if (existingScript) {
    existingScript.setAttribute(
      'src',
      `https://public.tableau.com/javascripts/api/tableau-${version}.min.js`,
    );
  }
  if (!existingScript) {
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
};

const isMyScriptLoaded = (id) => {
  //check for loaded Tableau script in dom scripts
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--; ) {
    // eslint-disable-next-line eqeqeq
    if (scripts[i].id == `tableauJS`) return true;
  }
  return false;
};

export { loadTableauScript, isMyScriptLoaded };
