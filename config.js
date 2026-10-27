// One place for every link. Fill these in before publishing (see README.md).
window.DD = {
  base: "rileyi.github.io/investor-brain", // GitHub Pages address (no https://); repo github.com/Rileyi/investor-brain
  skool: "https://www.skool.com/business-bakery-9093/about", // the $99/month Skool tier page
  teardownId: "",                   // YouTube id of the Hylee deck teardown (both pages); empty = placeholder
  substack: "https://rileygikni.substack.com", // email signup (embedded on the report page)
  seatsLeft: 80,                    // update by hand as members join; the founding offer caps at seatsTotal
  seatsTotal: 100,
};

DD.fillSeats = function () {
  document.querySelectorAll(".seats").forEach(function (el) { el.textContent = DD.seatsLeft + " of " + DD.seatsTotal; });
};

// Shared helpers
DD.prompt = function () {
  return "Read https://" + DD.base + "/skill.md and follow it exactly: run Riley's Investor Brain diagnosis on my pitch deck. I'm attaching the PDF.";
};
DD.claudeLink = function () {
  return "https://claude.ai/new?q=" + encodeURIComponent(DD.prompt());
};
DD.youtube = function (box, id, title) {
  if (!id) return;
  box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
    '?rel=0" title="' + title + '" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe>';
};
