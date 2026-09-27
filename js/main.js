/*
 * Area 7 — renders content from js/data.js into the pages and wires up
 * the hub peek, mobile nav and menu tabs. No dependencies.
 */
(function () {
  "use strict";

  var D = window.AREA7;
  if (!D) return;

  var DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  var DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  /* ---------- Icons (flat cream line style, matching the logo) ---------- */
  var ICONS = {
    carwash:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="9" r="3"/><circle cx="23.5" cy="7" r="3.6"/><circle cx="31" cy="9" r="3"/><circle cx="37" cy="12.5" r="2.2"/><circle cx="10.5" cy="12.5" r="2.2"/><path d="M9 29l3.6-8.6A3 3 0 0 1 15.4 18.5h17.2a3 3 0 0 1 2.8 1.9L39 29"/><rect x="6" y="29" width="36" height="9" rx="3"/><path d="M14.5 28l1.8-5.5h15.4l1.8 5.5"/><circle cx="12.5" cy="33.5" r="1.8"/><circle cx="35.5" cy="33.5" r="1.8"/><rect x="19" y="32" width="10" height="3.5" rx="1"/><path d="M10 38v3.5h5V38M33 38v3.5h5V38"/></svg>',
    kebab:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="20"/><path d="M18 13v8M15 13v7a3 3 0 0 0 6 0v-7M18 23v13"/><ellipse cx="30.5" cy="18" rx="3.4" ry="5.2"/><path d="M30.5 23.2V36"/></svg>',
    dessert:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11.5l1.2-3.5h11.6l1.2 3.5"/><path d="M12.5 11.5h23l-1 4.5h-21z"/><path d="M14.5 16l3 25h13l3-25"/><path d="M15.6 24h16.8l-1.1 9H16.7z"/><path d="M24 26.5c-1.6 1.2-1.6 3.8 0 5M24 26.5c1.6 1.2 1.6 3.8 0 5"/></svg>',
    pizza:
      '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M24 43L7.5 12.5C17.5 5.5 30.5 5.5 40.5 12.5z"/><path d="M10.6 18.2c8.4-5 18.4-5 26.8 0"/><circle cx="19.5" cy="22" r="2.6"/><circle cx="28.5" cy="23.5" r="2.6"/><circle cx="24" cy="31.5" r="2.3"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5L19.5 7"/></svg>',
    star:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5l2.6 7.9 7.9 2.6-7.9 2.6L12 22.5l-2.6-7.9L1.5 12l7.9-2.6z"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    pin:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.5 2"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4v3.2h2.8v8z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'
  };

  function icon(name, cls) {
    return '<span class="icon' + (cls ? " " + cls : "") + '" aria-hidden="true">' + (ICONS[name] || "") + "</span>";
  }

  /* ---------- Helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function getBiz(id) {
    for (var i = 0; i < D.businesses.length; i++) if (D.businesses[i].id === id) return D.businesses[i];
    return null;
  }
  function ext(url) { return ' href="' + esc(url) + '" target="_blank" rel="noopener"'; }

  function formatPrice(price, biz) {
    if (price == null) return "";
    var fixed = biz && biz.priceFormat === "fixed2";
    var whole = Math.round(price * 100) % 100 === 0;
    return "$" + (fixed || !whole ? price.toFixed(2) : String(Math.round(price)));
  }

  /* ---------- Hours ---------- */
  function toMin(t) { var p = t.split(":"); return +p[0] * 60 + +p[1]; }
  function formatTime(t) {
    var m = toMin(t), h = Math.floor(m / 60), mm = m % 60;
    var suffix = h >= 12 ? "pm" : "am";
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (mm ? ":" + (mm < 10 ? "0" : "") + mm : "") + " " + suffix;
  }
  function hoursText(day) { return day ? formatTime(day[0]) + " – " + formatTime(day[1]) : "Closed"; }

  // Current day index (0 = Monday) and minutes past midnight, in Melbourne time.
  function melbourneNow() {
    try {
      var parts = new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Melbourne", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23"
      }).formatToParts(new Date());
      var o = {};
      parts.forEach(function (p) { o[p.type] = p.value; });
      var idx = DAYS.indexOf(String(o.weekday).slice(0, 3).toLowerCase());
      if (idx >= 0) return { day: idx, min: (+o.hour % 24) * 60 + +o.minute };
    } catch (e) { /* fall through to local time */ }
    var d = new Date();
    return { day: (d.getDay() + 6) % 7, min: d.getHours() * 60 + d.getMinutes() };
  }

  function openStatus(hours) {
    var now = melbourneNow();
    var today = hours[DAYS[now.day]];
    var yest = hours[DAYS[(now.day + 6) % 7]];
    var o, c;
    if (yest) {
      o = toMin(yest[0]); c = toMin(yest[1]);
      if (c <= o && now.min < c) return { open: true, text: "Open now · closes " + formatTime(yest[1]) };
    }
    if (today) {
      o = toMin(today[0]); c = toMin(today[1]);
      if (c <= o) c += 1440;
      if (now.min >= o && now.min < c) return { open: true, text: "Open now · closes " + formatTime(today[1]) };
      if (now.min < o) return { open: false, text: "Closed · opens " + formatTime(today[0]) + " today" };
    }
    for (var i = 1; i <= 7; i++) {
      var d = (now.day + i) % 7, h = hours[DAYS[d]];
      if (h) return { open: false, text: "Closed · opens " + (i === 1 ? "tomorrow" : DAY_NAMES[d]) + " " + formatTime(h[0]) };
    }
    return { open: false, text: "Closed" };
  }

  function statusHtml(biz, cls) {
    var s = openStatus(biz.hours);
    return '<span class="' + cls + (s.open ? " is-open" : "") + '"><span class="status-dot" aria-hidden="true"></span>' + esc(s.text) + "</span>";
  }

  /* ---------- Shared bits ---------- */
  function fillIcons(root) {
    $all("[data-icon-slot]", root).forEach(function (el) {
      el.innerHTML = ICONS[el.getAttribute("data-icon-slot")] || "";
    });
    $all(".media[data-icon] .media__fallback", root).forEach(function (el) {
      el.innerHTML = ICONS[el.parentNode.getAttribute("data-icon")] || "";
    });
  }

  function mediaHtml(biz) {
    var base = biz.heroImage.replace(/\.(jpe?g|png|webp)$/i, "");
    return '<div class="media" data-icon="' + biz.icon + '"><picture>' +
      '<source srcset="' + esc(base) + '.webp" type="image/webp">' +
      '<img src="' + esc(base) + '.jpg" alt="" width="1200" height="800" loading="lazy" decoding="async" onerror="a7ImgFail(this)">' +
      '</picture><span class="media__fallback" aria-hidden="true">' + (ICONS[biz.icon] || "") + "</span></div>";
  }

  function tagsHtml(item) {
    var out = "";
    if (item.label) out += '<span class="pill pill--label">' + esc(item.label) + "</span>";
    (item.tags || []).forEach(function (t) {
      if (t === "vegetarian") out += '<span class="pill pill--veg" title="Vegetarian">V<span class="visually-hidden">egetarian</span></span>';
      else if (t === "popular") out += '<span class="pill pill--popular" title="Most popular">★<span class="visually-hidden"> Most popular</span></span>';
      else if (t === "new") out += '<span class="pill pill--new">New</span>';
      else if (t === "best-value") out += '<span class="pill pill--best">Best value</span>';
      else if (t === "halal") out += '<span class="pill pill--veg">Halal</span>';
    });
    return out;
  }

  /* ---------- Menu ---------- */
  function itemHtml(item, biz) {
    var price = item.priceLabel || formatPrice(item.price, biz);
    var name = esc(item.name);
    if (item.link) name = '<a href="' + esc(item.link) + '">' + name + "</a>";
    return '<li class="item' + (item.available === false ? " is-unavailable" : "") + '" data-item-id="' + esc(item.id) + '" data-business="' + biz.id + '">' +
      '<div class="item__row">' +
        (item.number ? '<span class="item__num">' + item.number + ".</span>" : "") +
        '<span class="item__name">' + name + tagsHtml(item) + "</span>" +
        (price ? '<span class="item__leader" aria-hidden="true"></span><span class="item__price">' + esc(price) + "</span>" : "") +
      "</div>" +
      (item.description ? '<p class="item__desc">' + esc(item.description) + "</p>" : "") +
      (item.available === false ? '<p class="item__desc">Currently unavailable</p>' : "") +
      "</li>";
  }

  function comboCardHtml(item, biz) {
    var featured = (item.tags || []).indexOf("best-value") >= 0;
    return '<article class="card' + (featured ? " card--featured" : "") + '" data-item-id="' + esc(item.id) + '" data-business="' + biz.id + '">' +
      (featured ? '<span class="card__ribbon pill pill--best">Best value</span>' : "") +
      "<h3>" + esc(item.name) + "</h3>" +
      '<p class="muted">' + esc(item.description) + "</p>" +
      '<p class="card__price"><span class="item__price">' + esc(item.priceLabel || formatPrice(item.price, biz)) + "</span></p>" +
      "</article>";
  }

  function renderMenu(biz, container) {
    var sections = biz.categories.map(function (c) {
      return { id: c.id, name: c.name, note: c.note, body: '<ul class="items">' + c.items.map(function (i) { return itemHtml(i, biz); }).join("") + "</ul>" };
    });
    var callout = "";
    if (biz.combos && biz.combos.length === 1) {
      var cb = biz.combos[0];
      callout = '<div class="callout" data-item-id="' + esc(cb.id) + '" data-business="' + biz.id + '"><div><strong>' + esc(cb.name) + '</strong><p class="muted">' + esc(cb.description) + '</p></div><span class="item__price">' + esc(cb.priceLabel || formatPrice(cb.price, biz)) + "</span></div>";
    } else if (biz.combos && biz.combos.length) {
      sections.push({ id: biz.id + "-combos", name: "Combos & Deals", note: "", body: '<div class="cards">' + biz.combos.map(function (i) { return comboCardHtml(i, biz); }).join("") + "</div>" });
    }
    if (biz.extras && biz.extras.length) {
      sections.push({ id: biz.id + "-extras", name: "Extras", note: "", body: '<ul class="items extras">' + biz.extras.map(function (i) { return itemHtml(i, biz); }).join("") + "</ul>" });
    }

    var multi = sections.length > 1;
    var html = '<div class="menu-layout' + (multi ? " has-nav" : "") + '">';
    if (multi) {
      html += '<nav class="menu-jump" aria-label="Menu categories">' + sections.map(function (s) {
        return '<a href="#' + s.id + '">' + esc(s.name) + "</a>";
      }).join("") + "</nav>";
    }
    html += "<div>" + callout;
    if (multi) {
      html += '<div class="menu-tabs" aria-label="Menu categories">' + sections.map(function (s, i) {
        return '<button type="button" id="tab-' + s.id + '" data-panel="' + s.id + '">' + esc(s.name) + "</button>";
      }).join("") + "</div>";
    }
    html += sections.map(function (s) {
      return '<section class="cat menu-panel" id="' + s.id + '" aria-labelledby="' + s.id + '-title">' +
        '<h3 class="cat__title" id="' + s.id + '-title">' + esc(s.name) + "</h3>" +
        (s.note ? '<p class="cat__note">' + esc(s.note) + "</p>" : "") + s.body + "</section>";
    }).join("");
    html += "</div></div>";
    container.innerHTML = html;
    if (multi) initMenuTabs(container);
  }

  function renderPackages(biz, container) {
    var cat = biz.categories[0];
    container.innerHTML =
      (cat.note ? '<p class="section__intro">' + esc(cat.note) + "</p>" : "") +
      '<div class="packages" role="list">' + cat.items.map(function (p) {
        var best = (p.tags || []).indexOf("best-value") >= 0;
        return '<article role="listitem" class="card' + (best ? " card--featured" : "") + '" data-item-id="' + esc(p.id) + '" data-business="' + biz.id + '">' +
          (best ? '<span class="card__ribbon pill pill--best">Best value</span>' : "") +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="card__price"><small>Starts from</small><span class="item__price">' + formatPrice(p.price, biz) + "</span></p>" +
          '<p class="card__slogan">' + esc(p.description) + "</p>" +
          '<ul class="card__list">' + (p.includes || []).map(function (x) { return "<li>" + icon("check") + "<span>" + esc(x) + "</span></li>"; }).join("") + "</ul>" +
          "</article>";
      }).join("") + "</div>";
  }

  // Mobile: ARIA tablist. Desktop: all categories stacked with a sticky jump nav.
  function initMenuTabs(root) {
    var tablist = $(".menu-tabs", root);
    var tabs = $all('[data-panel]', tablist);
    var panels = $all(".menu-panel", root);
    var mq = window.matchMedia("(max-width: 899px)");
    var current = panels[0].id;

    var hash = (location.hash || "").slice(1);
    if (hash && panels.some(function (p) { return p.id === hash; })) current = hash;

    function select(id, focus) {
      current = id;
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-panel") === id;
        t.setAttribute("aria-selected", on ? "true" : "false");
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
        if (on && t.scrollIntoView) t.scrollIntoView({ block: "nearest", inline: "nearest" });
      });
      panels.forEach(function (p) { p.hidden = p.id !== id; });
    }

    function apply() {
      if (mq.matches) {
        tablist.setAttribute("role", "tablist");
        tabs.forEach(function (t) {
          t.setAttribute("role", "tab");
          t.setAttribute("aria-controls", t.getAttribute("data-panel"));
        });
        panels.forEach(function (p) {
          p.setAttribute("role", "tabpanel");
          p.setAttribute("aria-labelledby", "tab-" + p.id);
          p.tabIndex = 0;
        });
        select(current, false);
      } else {
        tablist.removeAttribute("role");
        tabs.forEach(function (t) { t.removeAttribute("role"); t.removeAttribute("aria-controls"); t.removeAttribute("aria-selected"); });
        panels.forEach(function (p) {
          p.removeAttribute("role"); p.hidden = false; p.removeAttribute("tabindex");
          p.setAttribute("aria-labelledby", p.id + "-title");
        });
      }
    }

    tablist.addEventListener("click", function (e) {
      var t = e.target.closest("[data-panel]");
      if (t) select(t.getAttribute("data-panel"), false);
    });
    tablist.addEventListener("keydown", function (e) {
      if (!mq.matches) return;
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var n = null;
      if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
      else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === "Home") n = 0;
      else if (e.key === "End") n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(tabs[n].getAttribute("data-panel"), true); }
    });
    if (mq.addEventListener) mq.addEventListener("change", apply); else mq.addListener(apply);
    apply();

    // Highlight the current category in the desktop jump nav.
    var links = $all(".menu-jump a", root);
    if ("IntersectionObserver" in window && links.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a) { a.classList.toggle("is-current", a.getAttribute("href") === "#" + en.target.id); });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      panels.forEach(function (p) { io.observe(p); });
    }
  }

  /* ---------- Page sections ---------- */
  function renderBadges(biz, el) {
    el.innerHTML = '<ul class="wrap">' + biz.badges.map(function (b) {
      return "<li>" + icon("star") + esc(b) + "</li>";
    }).join("") + "</ul>";
  }

  function renderFeatures(biz, el) {
    el.innerHTML = (biz.features || []).map(function (f) {
      if (f.status === "live" && f.url) {
        return '<a class="btn btn--ghost" data-feature="' + esc(f.type) + '"' + ext(f.url) + ">" + esc(f.label) + icon("external") + '<span class="visually-hidden"> (opens in a new tab)</span></a>';
      }
      return '<button type="button" class="btn" aria-disabled="true" data-feature="' + esc(f.type) + '">' + esc(f.label) + ' <span class="soon">Coming soon</span></button>';
    }).join("");
  }

  function renderRating(biz, el) {
    if (!biz.rating) { el.remove(); return; }
    var r = biz.rating;
    el.innerHTML = '<p class="rating"><span class="rating__stars" aria-hidden="true">★★★★★</span>' +
      "<span>Rated " + r.value + "★ on " + esc(r.source) + ", " + r.count + " reviews</span>" +
      (biz.reviewUrl ? "<a" + ext(biz.reviewUrl) + ">" + esc(biz.reviewPrompt) + "</a>" : "") + "</p>";
  }

  function renderStatus(biz, el) { el.innerHTML = statusHtml(biz, "status"); }

  function renderFind(biz, el) {
    var now = melbourneNow();
    var rows = DAYS.map(function (d, i) {
      return '<tr' + (i === now.day ? ' class="is-today"' : "") + '><th scope="row">' + DAY_NAMES[i] +
        (i === now.day ? ' <span class="visually-hidden">(today)</span>' : "") + "</th><td>" + hoursText(biz.hours[d]) + "</td></tr>";
    }).join("");
    var social = "";
    if (biz.social && biz.social.instagram) social += '<a class="btn btn--ghost btn--small"' + ext(biz.social.instagram) + ">" + icon("instagram") + "Instagram</a>";
    if (biz.social && biz.social.facebook) social += '<a class="btn btn--ghost btn--small"' + ext(biz.social.facebook) + ">" + icon("facebook") + "Facebook</a>";

    el.innerHTML =
      '<div class="find__grid">' +
        '<div class="find__info">' +
          '<div class="find__row">' + icon("pin") + '<div><span class="find__label">Address</span>' + esc(D.site.address.display) + "</div></div>" +
          '<div class="find__row">' + icon("phone") + '<div><span class="find__label">Phone</span><a href="' + biz.phoneHref + '">' + esc(biz.phone) + "</a></div></div>" +
          '<div class="find__row">' + icon("clock") + '<div style="flex:1"><span class="find__label">Opening hours</span>' + statusHtml(biz, "status") +
            '<table class="hours"><caption class="visually-hidden">Opening hours for ' + esc(biz.shortName) + "</caption><tbody>" + rows + "</tbody></table></div></div>" +
          '<div class="find__actions">' +
            '<a class="btn btn--primary btn--small"' + ext(biz.mapsUrl) + ">Get directions</a>" +
            (biz.reviewUrl ? '<a class="btn btn--ghost btn--small"' + ext(biz.reviewUrl) + ">" + esc(biz.reviewPrompt) + "</a>" : "") +
            social +
          "</div>" +
        "</div>" +
        '<div class="map"><iframe src="' + esc(biz.mapsEmbedUrl) + '" title="Map showing ' + esc(biz.shortName) + ' at 218/220 Ballarat Road, Maidstone" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>' +
      "</div>";
  }

  function renderCrossPromo(biz, el) {
    var others = D.businesses.filter(function (b) { return b.id !== biz.id; });
    el.innerHTML = '<div class="wrap section">' +
      '<p class="promo__lead">' + esc(biz.crossPromo) + "</p>" +
      '<div class="promo__grid">' + others.map(function (b) {
        return '<a class="promo-card" href="' + b.page + '" data-business="' + b.id + '">' + mediaHtml(b) +
          '<span class="quad__icon" aria-hidden="true">' + ICONS[b.icon] + "</span>" +
          "<h3>" + esc(b.shortName) + "</h3><p>" + esc(b.preview[0]) + '</p><span class="go" aria-hidden="true">Visit →</span></a>';
      }).join("") + "</div></div>";
  }

  function renderFooter(el, isHub) {
    var s = D.site;
    var social = "";
    if (s.social.facebook) social += "<a" + ext(s.social.facebook) + ' aria-label="Area 7 on Facebook (opens in a new tab)">' + icon("facebook") + "</a>";
    if (s.social.instagram) social += "<a" + ext(s.social.instagram) + ' aria-label="Area 7 on Instagram (opens in a new tab)">' + icon("instagram") + "</a>";
    var logo = '<picture class="logo"><source srcset="assets/area7-logo.webp" type="image/webp"><img src="assets/area7-logo.png" alt="" width="72" height="72" loading="lazy" onerror="a7ImgFail(this)"></picture>';
    el.innerHTML = '<div class="wrap">' +
      '<div class="footer__grid">' +
        '<div class="footer__brand">' + logo + '<div><p class="footer__tag' + (isHub ? " script" : "") + '">' + esc(s.tagline) + '</p><p class="muted">Car wash, kebabs, desserts &amp; pizza, all in one stop.</p></div></div>' +
        '<div class="footer__col"><h2>Find us</h2><ul><li>' + esc(s.address.display) + "</li><li>Open 7 days</li><li><a" + ext(s.mapsUrl) + ">Google Maps</a></li></ul></div>" +
        '<div class="footer__col"><h2>Our spots</h2><ul>' + D.businesses.map(function (b) {
          return '<li><a href="' + b.page + '">' + esc(b.shortName) + "</a></li>";
        }).join("") + "</ul></div>" +
        '<div class="footer__col"><h2>Follow us</h2><div class="social">' + social + "</div></div>" +
      "</div>" +
      '<div class="footer__legal"><span>© ' + new Date().getFullYear() + " Area 7 Maidstone</span><span>Booking &amp; online ordering coming soon</span></div>" +
      "</div>";
  }

  /* ---------- Structured data (LocalBusiness JSON-LD) ---------- */
  function addressLd() {
    var a = D.site.address;
    return { "@type": "PostalAddress", streetAddress: a.street, addressLocality: a.locality, addressRegion: a.region, postalCode: a.postcode, addressCountry: a.country };
  }
  function bizLd(biz) {
    var url = D.site.url + "/" + biz.page;
    var ld = {
      "@context": "https://schema.org",
      "@type": biz.schemaType,
      "@id": url + "#business",
      name: biz.name,
      url: url,
      telephone: "+61 " + biz.phone.replace(/^0/, ""),
      image: D.site.url + "/" + biz.heroImage,
      logo: D.site.url + "/assets/area7-logo.png",
      address: addressLd(),
      geo: { "@type": "GeoCoordinates", latitude: biz.geo.lat, longitude: biz.geo.lng },
      hasMap: biz.mapsUrl,
      priceRange: "$",
      openingHoursSpecification: DAYS.filter(function (d) { return biz.hours[d]; }).map(function (d) {
        var h = biz.hours[d];
        return { "@type": "OpeningHoursSpecification", dayOfWeek: DAY_NAMES[DAYS.indexOf(d)], opens: h[0], closes: h[1] === "00:00" ? "23:59" : h[1] };
      }),
      parentOrganization: { "@type": "Organization", name: "Area 7", url: D.site.url }
    };
    if (biz.alternateName) ld.alternateName = biz.alternateName;
    if (biz.servesCuisine) ld.servesCuisine = biz.servesCuisine;
    if (biz.schemaType === "Restaurant") ld.hasMenu = url + "#menu";
    var same = [biz.mapsUrl, biz.social && biz.social.instagram, biz.social && biz.social.facebook].filter(Boolean);
    if (same.length) ld.sameAs = same;
    return ld;
  }
  function hubLd() {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": D.site.url + "/#area7",
      name: "Area 7 — Your Local Pit Stop",
      url: D.site.url + "/",
      logo: D.site.url + "/assets/area7-logo.png",
      image: D.site.url + "/assets/area7-logo.png",
      address: addressLd(),
      geo: { "@type": "GeoCoordinates", latitude: D.site.geo.lat, longitude: D.site.geo.lng },
      hasMap: D.site.mapsUrl,
      sameAs: [D.site.social.facebook, D.site.social.instagram].filter(Boolean),
      department: D.businesses.map(function (b) { return { "@id": D.site.url + "/" + b.page + "#business" }; })
    };
  }
  function injectLd(obj) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  /* ---------- Hub ---------- */
  function initHub() {
    var hub = $(".hub");
    if (!hub) return;
    var quads = $all(".quad", hub);

    quads.forEach(function (q) {
      var biz = getBiz(q.getAttribute("data-business"));
      var peek = $(".quad__peek-inner", q);
      if (!biz || !peek) return;
      peek.innerHTML =
        '<div class="quad__preview">' + biz.preview.map(function (l) { return "<p>" + esc(l) + "</p>"; }).join("") + "</div>" +
        statusHtml(biz, "quad__status") +
        '<div class="quad__badges">' + biz.badges.slice(0, 3).map(function (b) { return '<span class="pill">' + esc(b) + "</span>"; }).join("") + "</div>" +
        '<span class="btn btn--primary btn--small quad__enter" aria-hidden="true">Enter →</span>';
    });

    var wide = window.matchMedia("(min-width: 600px)");
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    var timer = null;

    function setActive(id) {
      clearTimeout(timer);
      if (id) hub.setAttribute("data-active", id); else hub.removeAttribute("data-active");
      quads.forEach(function (q) { q.classList.toggle("is-active", q.getAttribute("data-business") === id); });
    }
    function later(id) {
      clearTimeout(timer);
      timer = setTimeout(function () { setActive(id); }, 80); // hover intent
    }

    quads.forEach(function (q) {
      q.addEventListener("pointerenter", function (e) {
        if (e.pointerType === "mouse" && wide.matches && finePointer.matches) later(q.getAttribute("data-business"));
      });
      q.addEventListener("focus", function () {
        if (wide.matches) setActive(q.getAttribute("data-business"));
      });
    });
    hub.addEventListener("pointerleave", function (e) {
      if (e.pointerType === "mouse" && !hub.contains(document.activeElement)) later(null);
    });
    hub.addEventListener("focusout", function (e) {
      if (!hub.contains(e.relatedTarget)) setActive(null);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setActive(null);
    });
  }

  /* ---------- Subpage nav ---------- */
  function initNav() {
    var btn = $(".menu-toggle");
    var list = $("#site-nav");
    if (!btn || !list) return;
    function close(focusBtn) {
      list.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      if (focusBtn) btn.focus();
    }
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) { var first = $("a", list); if (first) first.focus(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("is-open")) close(true);
    });
    document.addEventListener("click", function (e) {
      if (list.classList.contains("is-open") && !e.target.closest(".topbar__nav")) close(false);
    });
  }

  /* ---------- Boot ---------- */
  var body = document.body;
  var isHub = body.getAttribute("data-page") === "hub";
  var biz = getBiz(body.getAttribute("data-business"));

  if (isHub) {
    initHub();
    injectLd(hubLd());
  } else if (biz) {
    var map = {
      menu: function (el) { (biz.layout === "packages" ? renderPackages : renderMenu)(biz, el); },
      badges: function (el) { renderBadges(biz, el); },
      features: function (el) { renderFeatures(biz, el); },
      rating: function (el) { renderRating(biz, el); },
      status: function (el) { renderStatus(biz, el); },
      find: function (el) { renderFind(biz, el); },
      "cross-promo": function (el) { renderCrossPromo(biz, el); }
    };
    $all("[data-render]").forEach(function (el) {
      var fn = map[el.getAttribute("data-render")];
      if (fn) fn(el);
    });
    initNav();
    injectLd(bizLd(biz));
  }

  var footer = $("[data-render='footer']");
  if (footer) renderFooter(footer, isHub);

  fillIcons(document);

  // Re-scroll to a deep link (e.g. dessert.html#milkshakes) once the menu exists.
  if (location.hash && !isHub) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) window.addEventListener("load", function () {
      // With mobile tabs the chosen panel is already selected, so land at the tab row.
      var tabs = target.closest(".menu-layout") && $(".menu-tabs[role='tablist']");
      (tabs ? target.closest(".menu-layout") : target).scrollIntoView({ behavior: "instant" });
    });
  }
})();
