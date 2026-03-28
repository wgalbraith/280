(function () {
  function renderKaTeX() {
    if (typeof renderMathInElement !== "function") return;

    renderMathInElement(document.body, {
      delimiters: [
        // Display
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },

        // Inline
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false,
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
    });
  }

  // initial render
  document.addEventListener("DOMContentLoaded", renderKaTeX);

  // MkDocs Material instant navigation
  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(renderKaTeX);
  }
})();
