(function () {
  "use strict";

  var config = window.FIBER_SITE_ANALYTICS || {};
  var ga4Id = String(config.ga4MeasurementId || "").trim();
  var baiduId = String(config.baiduTongjiId || "").trim();

  if (/^G-[A-Z0-9]+$/i.test(ga4Id)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ga4Id, { anonymize_ip: true });

    var gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(ga4Id);
    document.head.appendChild(gaScript);
  }

  if (/^[a-f0-9]{32}$/i.test(baiduId)) {
    window._hmt = window._hmt || [];
    var baiduScript = document.createElement("script");
    baiduScript.async = true;
    baiduScript.src = "https://hm.baidu.com/hm.js?" + encodeURIComponent(baiduId);
    document.head.appendChild(baiduScript);
  }
})();
