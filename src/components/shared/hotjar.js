window.hjSiteSettings = window.hjSiteSettings || {
  site_id: 3170670,
  r: 1.0,
  rec_value: 1.0,
  state_change_listen_mode: "automatic",
  record: true,
  continuous_capture_enabled: true,
  recording_capture_keystrokes: true,
  anonymize_digits: true,
  anonymize_emails: true,
  suppress_all: false,
  suppress_text: false,
  suppress_location: false,
  user_attributes_enabled: false,
  legal_name: "Jay Bittner LLC",
  privacy_policy_url: "",
  deferred_page_contents: [
    {
      id: 29077952,
      targeting: [
        {
          component: "url",
          match_operation: "simple",
          pattern: "https://www.jaybittner.com/",
          negate: false,
        },
        {
          component: "device",
          match_operation: "exact",
          pattern: "tablet",
          negate: false,
        },
      ],
    },
  ],
  record_targeting_rules: [],
  feedback_widgets: [],
  heatmaps: [
    {
      id: 9225488,
      created_epoch_time: 1663878731,
      targeting: [
        {
          component: "url",
          match_operation: "simple",
          pattern: "https://www.jaybittner.com/",
          negate: false,
        },
      ],
      selector_version: 2,
      capture_type: "SNAPSHOT_1000",
    },
  ],
  polls: [],
  integrations: {
    optimizely: { tag_recordings: false },
    google_optimize: { tag_recordings: false },
  },
  features: [
    "client_script.safe_date",
    "feedback.widgetV2",
    "heatmap.continuous.manual_retaker",
    "settings.billing_v2",
  ],
};

!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var a = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            o,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 252));
})({
  252: function (e, t) {
    (window.hjBootstrap =
      window.hjBootstrap ||
      function (e, t, n) {
        var o = [
            "bot",
            "google",
            "headless",
            "baidu",
            "bing",
            "msn",
            "duckduckbot",
            "teoma",
            "slurp",
            "yandex",
            "phantomjs",
            "pingdom",
            "ahrefsbot",
          ].join("|"),
          a = new RegExp(o, "i"),
          i = window.navigator || { userAgent: "unknown" },
          r = i.userAgent ? i.userAgent : "unknown";
        if (a.test(r))
          console.warn("Hotjar not launching due to suspicious userAgent:", r);
        else {
          var s = "http:" === window.location.protocol,
            d = Boolean(window._hjSettings.preview);
          if (!s || d) {
            var l = function (e, t, n) {
              (window.hjBootstrapCalled = (
                window.hjBootstrapCalled || []
              ).concat(n)),
                window.hj &&
                  window.hj._init &&
                  window.hj._init._verifyInstallation &&
                  hj._init._verifyInstallation();
            };
            l(0, 0, n);
            var p,
              _,
              c,
              u,
              h = window.document,
              j = h.head || h.getElementsByTagName("head")[0];
            h.addEventListener &&
              ((hj.scriptDomain = e),
              ((p = h.createElement("script")).async = 1),
              (p.src = hj.scriptDomain + t),
              (p.charset = "utf-8"),
              j.appendChild(p),
              (u = [
                "iframe#_hjRemoteVarsFrame {",
                "display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;",
                "}",
              ]),
              ((_ = h.createElement("style")).type = "text/css"),
              _.styleSheet
                ? (_.styleSheet.cssText = u.join(""))
                : _.appendChild(h.createTextNode(u.join(""))),
              j.appendChild(_),
              ((c = h.createElement("iframe")).style.cssText = u[1]),
              (c.name = "_hjRemoteVarsFrame"),
              (c.title = "_hjRemoteVarsFrame"),
              (c.id = "_hjRemoteVarsFrame"),
              (c.src =
                "https://" +
                (window._hjSettings.varsHost || "vars.hotjar.com") +
                "/box-69edcc3187336f9b0a3fbb4c73be9fe6.html"),
              (c.onload = function () {
                (l.varsLoaded = !0),
                  "undefined" != typeof hj &&
                    hj.event &&
                    hj.event.signal &&
                    hj.event.signal("varsLoaded");
              }),
              (l.varsJar = c),
              "interactive" === h.readyState ||
              "complete" === h.readyState ||
              "loaded" === h.readyState
                ? f()
                : h.addEventListener("DOMContentLoaded", f),
              (l.revision = "5cde9722926e"),
              (window.hjBootstrap = l));
          } else
            console.warn(
              "For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047"
            );
        }
        function f() {
          setTimeout(function () {
            h.body.appendChild(c);
          }, 50);
        }
      }),
      window.hjBootstrap(
        "https://script.hotjar.com/",
        "modules.01a02f6e8b126e8c8358.js",
        "3170670"
      ),
      (window.hjLazyModules = window.hjLazyModules || {
        SURVEY_V2: { js: "survey-v2.16ffa86e6b2d687a26aa.js" },
        SURVEY_BOOTSTRAPPER: {
          js: "survey-bootstrapper.31003f1dbcf448db0873.js",
        },
        SURVEY_ISOLATED: { js: "survey-isolated.98e5e6893427fc9cb404.js" },
        HEATMAP_SCREENSHOTTER: {
          js: "heatmap-screenshotter.95b86d690c34c575f4c3.js",
        },
        HEATMAP_VIEWER: { js: "heatmap-viewer.6c183f46c8aa752d4206.js" },
        HEATMAP_DYNAMIC_VIEW: {
          js: "heatmap-dynamic-view.090f7af857c058ab40b4.js",
        },
        HEATMAP_RETAKER: { js: "heatmap-retaker.225c734d7a89a148f485.js" },
        SURVEY_INVITATION: { js: "survey-invitation.3204edd02b478dc20e2c.js" },
        NOTIFICATION: { js: "notification.ccbf2aa5ee2ba6372c95.js" },
        INCOMING_FEEDBACK: { js: "incoming-feedback.3158c58e0a49e6582fd1.js" },
        PREACT_INCOMING_FEEDBACK: {
          js: "preact-incoming-feedback.57abc3782b6aa30a609f.js",
        },
        SENTRY: { js: "sentry.e95bba5e2a0c6c545fe3.js" },
      });
  },
});
s;
