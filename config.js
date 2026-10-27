// One place for every link. Fill these in before publishing (see README.md).
window.DD = {
  base: "rileyi.github.io/investor-brain", // GitHub Pages address (no https://); repo github.com/Rileyi/investor-brain
  skool: "https://www.skool.com/business-bakery-9093/about", // the $99/month Skool tier page
  teardownId: "_GuO4_DEzLc",                   // YouTube id of the Hylee deck teardown (both pages); empty = placeholder
  substack: "https://rileygikni.substack.com", // email signup (embedded on the report page)
  seatsLeft: 80,                    // update by hand as members join; the founding offer caps at seatsTotal
  seatsTotal: 100,
  goatcounter: "rileystartup",                  // GoatCounter site code shared by all of Riley's landing pages; empty = analytics off
  page: "investor-brain",           // prefix for this page's events, so several landing pages can share one counter
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

// Analytics (GoatCounter: no cookies, no consent banner). Page views count on their own; DD.track() sends named events.
DD.track = function (name) {
  if (!DD.goatcounter) return;
  name = DD.page + "/" + name;
  var send = function () { window.goatcounter.count({ path: name, title: name, event: true }); };
  if (window.goatcounter && window.goatcounter.count) send();
  else (DD._queue = DD._queue || []).push(send);
};
DD.trackClicks = function (map) {   // map: element id -> event name
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", function () { DD.track(map[id]); });
  });
};
(function () {
  if (!DD.goatcounter) return;
  var s = document.createElement("script");
  s.async = true; s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + DD.goatcounter + ".goatcounter.com/count");
  s.onload = function () { (DD._queue || []).forEach(function (f) { f(); }); DD._queue = []; };
  document.head.appendChild(s);
})();
