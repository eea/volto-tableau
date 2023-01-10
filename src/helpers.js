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

  //TODO: instead of replacing the tableau script  
  //   <script type="importmap">
  //   {
  //     "imports": {
  //       "tableau1": "https://example.com/shapes/tableau1.js",
  //       "tableau2": "https://example.com/shapes/tableau2.js",
  //       "tableau3": "https://example.com/shapes/tableau3.js",
  //     }
  //   }
  // </script>
  //try creating an importmap script with each different tableau version https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#importing_modules_with_importmap
};

const isMyScriptLoaded = (id) => {
  //check for loaded Tableau script in dom scripts
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--;) {
    // eslint-disable-next-line eqeqeq
    if (scripts[i].id == `tableauJS`) return true;
  }
  return false;
};

export { loadTableauScript, isMyScriptLoaded };
