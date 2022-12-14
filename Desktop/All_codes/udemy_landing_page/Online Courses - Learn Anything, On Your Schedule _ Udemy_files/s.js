/*
 Includes code from:
 CryptoJS
 code.google.com/p/crypto-js
 (c) 2009-2012 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 Includes code from:
 PluginDetect v0.9.1
 www.pinlady.net/PluginDetect/license/
 [ QuickTime Flash Shockwave WindowsMediaPlayer Silverlight VLC AdobeReader RealPlayer ]
 [ isMinVersion getVersion hasMimeType onDetectionDone onWindowLoaded ]
 [ AllowActiveX ]
 Includes code from:
 http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
 Includes code from:
 http://stackoverflow.com/questions/8253136/how-to-get-domain-name-only-using-javascript/8253221#8253221
 Includes code from:
 https://github.com/Valve/fingerprintjs2
 Copyright (c) 2018? Jonas Haag (jonas@lophus.org)
 Copyright (c) 2015? Valentin Vasilyev (valentin.vasilyev@outlook.com)
 Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
var _sift = _sift || [];
function __siftFlashCB(u) {
  _sift.push(["_setFlash", u]);
}
window.__siftFlashCB = __siftFlashCB;
var Sift =
  Sift ||
  (function () {
    function u(b, l) {
      for (var k = q(b), g = b.length; 0 < k.length && k.length > l; )
        (g = Math.floor(g / 2)), (k = q(b.substring(0, g)));
      return k;
    }
    function D(b) {
      var l = "",
        k = 0,
        g;
      for (g in b)
        if (b.hasOwnProperty(g)) {
          var i = b[g];
          void 0 === i ||
            null === i ||
            "undefined" === i ||
            "null" === i ||
            (0 < k && (l += "&"), (l += g + "=" + i), k++);
        }
      return l;
    }
    function J() {
      var b = window.location.hostname,
        l = b.split(".");
      if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(b)) return b;
      if (1 == l.length) return null;
      for (var b = "", k = 0; 2 > k; ) {
        k++;
        var g = l[l.length - k],
          b = g + (1 < k ? "." : "") + b;
        if (
          -1 !=
          ";ac;ad;ae;aero;af;ag;ai;al;am;an;ao;aq;ar;arpa;as;asia;at;au;aw;ax;az;ba;bb;bd;be;bf;bg;bh;bi;biz;bj;bm;bn;bo;br;bs;bt;bv;bw;by;bz;ca;cat;cc;cd;cf;cg;ch;ci;ck;cl;cm;cn;co;com;coop;cr;cu;cv;cx;cy;cz;de;dj;dk;dm;do;dz;ec;edu;ee;eg;er;es;et;eu;fi;fj;fk;fm;fo;fr;ga;gb;gd;ge;gf;gg;gh;gi;gl;gm;gn;gov;gp;gq;gr;gs;gt;gu;gw;gy;hk;hm;hn;hr;ht;hu;id;ie;il;im;in;info;int;io;iq;ir;is;it;je;jm;jo;jobs;jp;ke;kg;kh;ki;km;kn;kp;kr;kw;ky;kz;la;lb;lc;li;lk;lr;ls;lt;lu;lv;ly;ma;mc;md;me;mg;mh;mil;mk;ml;mm;mn;mo;mobi;mp;mq;mr;ms;mt;mu;museum;mv;mw;mx;my;mz;na;name;nc;ne;net;nf;ng;ni;nl;no;np;nr;nu;nz;om;org;pa;pe;pf;pg;ph;pk;pl;pm;pn;pr;pro;ps;pt;pw;py;qa;re;ro;rs;ru;rw;sa;sb;sc;sd;se;sg;sh;si;sj;sk;sl;sm;sn;so;sr;st;su;sv;sy;sz;tc;td;tel;tf;tg;th;tj;tk;tl;tm;tn;to;tp;tr;travel;tt;tv;tw;tz;ua;ug;uk;us;uy;uz;va;vc;ve;vg;vi;vn;vu;wf;ws;ye;yt;za;zm;zw;".indexOf(
            ";" + g + ";"
          )
        ) {
          b = l[l.length - k - 1] + "." + b;
          break;
        }
      }
      return b;
    }
    function K(b) {
      var l = new Image(1, 1);
      l.onload = function () {
        l.onload = null;
        l.onerror = null;
      };
      l.onerror = function () {
        l.onload = null;
        l.onerror = null;
      };
      var k = Math.ceil(1e6 * Math.random()).toString();
      l.src = "https://" + E + "/images/" + k + ".gif?" + b;
    }
    function s(b, l, k) {
      var g = PluginDetect.getVersion(k);
      g
        ? (b[l] = g)
        : -0.25 <= PluginDetect.isMinVersion(k, 0) && (b[l] = "unk");
    }
    function L(b, l) {
      function k() {
        var i = new Date().getTime(),
          h = !1;
        do
          if (g < b.length)
            window.SIFT_DEBUG &&
              window.performance &&
              window.performance.mark(b[g].toString().substring(0, 50)),
              b[g](),
              (g += 1),
              window.SIFT_DEBUG &&
                window.performance &&
                b[g] &&
                (window.performance.mark(b[g].toString().substring(0, 50)),
                window.performance.measure(
                  b[g - 1].toString().substring(0, 50),
                  b[g - 1].toString().substring(0, 50),
                  b[g].toString().substring(0, 50)
                ));
          else {
            h = !0;
            break;
          }
        while (100 > new Date().getTime() - i);
        h || setTimeout(k, l);
      }
      var g = 0;
      setTimeout(k, l);
    }
    function M() {
      var b = {
          random_: Math.ceil(1e9 * Math.random()),
          version_: N,
          beaconKey_: F,
        },
        l = {},
        k = !1;
      L(
        [
          function () {
            var g;
            a: {
              g = document.cookie;
              var i = G + "=",
                h = g.indexOf("; " + i);
              if (-1 == h) {
                if (((h = g.indexOf(i)), 0 !== h)) {
                  g = void 0;
                  break a;
                }
              } else h += 2;
              var m = g.indexOf(";", h);
              -1 == m && (m = g.length);
              g = O(g.substring(h + i.length, m));
            }
            if (!g || 15 > g.length || "undefined" === g || "null" === g) {
              i = g = void 0;
              g = (o && (o.crypto || o.msCrypto)) || {};
              if ("function" === typeof g.getRandomValues)
                for (
                  var i = "",
                    h = ["8", "9", "a", "b"],
                    m = new Uint8Array(1),
                    a = 0;
                  36 > a;
                  a += 1
                ) {
                  var c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".charAt(a);
                  "x" === c
                    ? (g.getRandomValues(m), (i += (m[0] % 16).toString(16)))
                    : "y" === c && (i += Math.floor(Math.random() * h.length));
                }
              else
                for (
                  i = g = "";
                  36 > g++;
                  i +=
                    (51 * g) & 52
                      ? (g ^ 15
                          ? 8 ^ (Math.random() * (g ^ 20 ? 16 : 4))
                          : 4
                        ).toString(16)
                      : "-"
                );
              g = i;
              h = g;
              m = new Date();
              m.setFullYear(m.getFullYear() + P);
              i = G;
              h = q(h);
              m = m.toGMTString();
              a = void 0 === y ? J() : y;
              document.cookie =
                i +
                "=" +
                h +
                (m ? ";expires=" + m : "") +
                ";path=/" +
                (a ? ";domain=." + a : "");
            }
            b.userUuid_ = g;
          },
          function () {
            var g;
            g = "";
            try {
              g = o.top.document.referrer;
            } catch (i) {
              if (o.parent)
                try {
                  g = o.parent.document.referrer;
                } catch (h) {
                  g = "";
                }
            }
            "" === g && (g = w.referrer);
            "" !== g && (b.referrer_ = u(g, 200));
          },
          function () {
            w &&
              ((b.title_ = u(w.title, Q)),
              (b.characterSet_ = q(w.characterSet || w.charset)));
          },
          function () {
            if (o) {
              b.url_ = u(o.location.href, 200);
              b.hostName_ = u(o.location.hostname, 200);
              try {
                b.sessionStorage_ = !!o.sessionStorage;
              } catch (g) {
                b.sessionStorage_ = !0;
              }
              try {
                b.localStorage_ = !!o.localStorage;
              } catch (i) {
                b.localStorage_ = !0;
              }
              try {
                b.indexedDB_ = !!o.indexedDB;
              } catch (h) {
                b.indexedDB_ = !0;
              }
              b.openDB_ = !0 == o.openDatabase;
            }
          },
          function () {
            r &&
              ((b.screenHeight_ = r.height),
              (b.screenWidth_ = r.width),
              (b.colorDepth_ = r.colorDepth));
          },
          function () {
            n &&
              ((b.platform_ = q(n.platform)),
              (b.language_ = q(n.language || n.browserLanguage)),
              (b.userAgent_ = u(n.userAgent, 200)),
              (b.cookieEnabled_ = n.cookieEnabled),
              (b.doNotTrack_ = n.doNotTrack),
              (b.maxTouchPoints_ = n.maxTouchPoints),
              (b.online_ = n.onLine),
              (b.product_ = q(n.product)),
              (b.productSub_ = q(n.productSub)),
              (b.vendor_ = q(n.vendor)),
              (b.vendorSub_ = q(n.vendorSub)),
              (b.hardwareConcurrency_ = n.hardwareConcurrency),
              (b.javaEnabled_ = n.javaEnabled()),
              (b.cpuClass_ = q(n.cpuClass)));
          },
          function () {
            var g = new Date();
            b.timezoneOffset_ = g.getTimezoneOffset();
            g.setDate(1);
            g.setMonth(6);
            var i = g.getTimezoneOffset();
            g.setMonth(12);
            g = g.getTimezoneOffset();
            b.dstOffset_ = Math.abs(Math.abs(g) - Math.abs(i));
          },
          function () {
            z && (b.userId_ = q(z));
          },
          function () {
            A
              ? (b.sessionId_ = t.MD5(A.toString()))
              : b.userUuid_ && (b.sessionId_ = t.MD5(b.userUuid_));
          },
          function () {
            B && (b.partnerUserId_ = q(B));
          },
          function () {
            for (
              var g = n.mimeTypes, i = g ? g.length : 0, h = "", m = 0;
              m < i;
              m++
            )
              h += g[m].type;
            b.numMimeTypes_ = i;
            b.mimeTypesHash_ = t.MD5(h);
          },
          function () {
            for (
              var g = n.plugins, i = g ? g.length : 0, h = "", m = 0;
              m < i;
              m++
            )
              var a = g[m],
                h = h + (a.name + a.description + a.filename + a.length);
            b.numPlugins_ = i;
            b.pluginsHash_ = t.MD5(h);
          },
          function () {
            PluginDetect.getVersion(".");
          },
          function () {
            s(l, "f", "flash");
          },
          function () {
            s(l, "sv", "shockwave");
          },
          function () {
            s(l, "q", "quicktime");
          },
          function () {
            s(l, "w", "windowsmediaplayer");
          },
          function () {
            s(l, "sl", "silverlight");
          },
          function () {
            (void 0 === H || 8 > H) && s(l, "vl", "vlc");
          },
          function () {
            s(l, "pd", "adobereader");
          },
          function () {
            s(l, "rp", "realplayer");
          },
          function () {
            if (n && n.languages) {
              try {
                if (
                  navigator.languages[0].substr(0, 2) !==
                  navigator.language.substr(0, 2)
                ) {
                  b.tamperedLanguage_ = !0;
                  return;
                }
              } catch (g) {
                b.tamperedLanguage_ = !0;
                return;
              }
              b.tamperedLanguage_ || (b.tamperedLanguage_ = !1);
            }
          },
          function () {
            r &&
              (b.tamperedResolution_ =
                r.width < r.availWidth || r.height < r.availHeight);
          },
          function () {
            if (n) {
              var g = n.userAgent.toLowerCase(),
                i = n.oscpu,
                h = n.platform.toLowerCase(),
                g =
                  0 <= g.indexOf("windows phone")
                    ? "Windows Phone"
                    : 0 <= g.indexOf("win")
                    ? "Windows"
                    : 0 <= g.indexOf("android")
                    ? "Android"
                    : 0 <= g.indexOf("linux")
                    ? "Linux"
                    : 0 <= g.indexOf("iphone") || 0 <= g.indexOf("ipad")
                    ? "iOS"
                    : 0 <= g.indexOf("mac")
                    ? "Mac"
                    : "Other";
              if (
                ("ontouchstart" in window ||
                  0 < n.maxTouchPoints ||
                  0 < n.msMaxTouchPoints) &&
                "Windows Phone" !== g &&
                "Android" !== g &&
                "iOS" !== g &&
                "Other" !== g
              )
                b.tamperedOS_ = !0;
              else {
                if ("undefined" !== typeof i) {
                  i = i.toLowerCase();
                  if (
                    0 <= i.indexOf("win") &&
                    "Windows" !== g &&
                    "Windows Phone" !== g
                  ) {
                    b.tamperedOS_ = !0;
                    return;
                  }
                  if (
                    0 <= i.indexOf("linux") &&
                    "Linux" !== g &&
                    "Android" !== g
                  ) {
                    b.tamperedOS_ = !0;
                    return;
                  }
                  if (0 <= i.indexOf("mac") && "Mac" !== g && "iOS" !== g) {
                    b.tamperedOS_ = !0;
                    return;
                  }
                  if (
                    (-1 === i.indexOf("win") &&
                      -1 === i.indexOf("linux") &&
                      -1 === i.indexOf("mac")) !==
                    ("Other" === g)
                  ) {
                    b.tamperedOS_ = !0;
                    return;
                  }
                }
                b.tamperedOS_ =
                  0 <= h.indexOf("win") &&
                  "Windows" !== g &&
                  "Windows Phone" !== g
                    ? !0
                    : (0 <= h.indexOf("linux") ||
                        0 <= h.indexOf("android") ||
                        0 <= h.indexOf("pike")) &&
                      "Linux" !== g &&
                      "Android" !== g
                    ? !0
                    : (0 <= h.indexOf("mac") ||
                        0 <= h.indexOf("ipad") ||
                        0 <= h.indexOf("ipod") ||
                        0 <= h.indexOf("iphone")) &&
                      "Mac" !== g &&
                      "iOS" !== g
                    ? !0
                    : (-1 === h.indexOf("win") &&
                        -1 === h.indexOf("linux") &&
                        -1 === h.indexOf("mac")) !==
                      ("Other" === g)
                    ? !0
                    : "undefined" === typeof n.plugins &&
                      "Windows" !== g &&
                      "Windows Phone" !== g
                    ? !0
                    : !1;
              }
            }
          },
          function () {
            var g = navigator.userAgent.toLowerCase(),
              i = navigator.productSub,
              g =
                0 <= g.indexOf("firefox")
                  ? "Firefox"
                  : 0 <= g.indexOf("opera") || 0 <= g.indexOf("opr")
                  ? "Opera"
                  : 0 <= g.indexOf("chrome")
                  ? "Chrome"
                  : 0 <= g.indexOf("safari")
                  ? "Safari"
                  : 0 <= g.indexOf("trident")
                  ? "Internet Explorer"
                  : "Other";
            if (
              ("Chrome" === g || "Safari" === g || "Opera" === g) &&
              "20030107" !== i
            )
              b.tamperedBrowser_ = !0;
            else if (
              ((i = eval.toString().length),
              37 === i && "Safari" !== g && "Firefox" !== g && "Other" !== g)
            )
              b.tamperedBrowser_ = !0;
            else if (39 === i && "Internet Explorer" !== g && "Other" !== g)
              b.tamperedBrowser_ = !0;
            else if (
              33 === i &&
              "Chrome" !== g &&
              "Opera" !== g &&
              "Other" !== g
            )
              b.tamperedBrowser_ = !0;
            else {
              var h;
              try {
                throw "a";
              } catch (m) {
                try {
                  m.toSource(), (h = !0);
                } catch (a) {
                  h = !1;
                }
              }
              b.tamperedBrowser_ =
                h && "Firefox" !== g && "Other" !== g ? !0 : !1;
            }
          },
          function () {
            var g = document.createElement("div");
            g.innerHTML = "&nbsp;";
            g.className = "adsbox";
            var i = !1;
            try {
              document.body.appendChild(g),
                (i =
                  0 ===
                  document.getElementsByClassName("adsbox")[0].offsetHeight),
                document.body.removeChild(g);
            } catch (h) {
              i = !1;
            }
            b.adBlock_ = i;
          },
          function () {
            var g = [],
              i = document.createElement("canvas");
            if (i.getContext && i.getContext("2d")) {
              i.width = 2e3;
              i.height = 200;
              i.style.display = "inline";
              var h = i.getContext("2d");
              h.rect(0, 0, 10, 10);
              h.rect(2, 2, 6, 6);
              g.push(
                "canvas winding:" +
                  (!1 === h.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
              );
              h.textBaseline = "alphabetic";
              h.fillStyle = "#f60";
              h.fillRect(125, 1, 62, 20);
              h.fillStyle = "#069";
              h.font = "11pt Arial";
              h.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15);
              h.fillStyle = "rgba(102, 204, 0, 0.2)";
              h.font = "18pt Arial";
              h.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45);
              h.globalCompositeOperation = "multiply";
              h.fillStyle = "rgb(255,0,255)";
              h.beginPath();
              h.arc(50, 50, 50, 0, 2 * Math.PI, !0);
              h.closePath();
              h.fill();
              h.fillStyle = "rgb(0,255,255)";
              h.beginPath();
              h.arc(100, 50, 50, 0, 2 * Math.PI, !0);
              h.closePath();
              h.fill();
              h.fillStyle = "rgb(255,255,0)";
              h.beginPath();
              h.arc(75, 100, 50, 0, 2 * Math.PI, !0);
              h.closePath();
              h.fill();
              h.fillStyle = "rgb(255,0,255)";
              h.arc(75, 75, 75, 0, 2 * Math.PI, !0);
              h.arc(75, 75, 25, 0, 2 * Math.PI, !0);
              h.fill("evenodd");
              i.toDataURL && g.push("canvas fp:" + i.toDataURL());
              b.canvasFingerprint_ = t.MD5(g.join("~"));
            }
          },
          function () {
            if (!k) {
              k = !0;
              if (null != v && "object" == typeof v) {
                for (var g in v) b[g] = v[g];
                if (v.flash_fontsArray_) {
                  var i = (g = v.flash_fontsArray_) ? g.length : 0;
                  b.numFonts_ = i;
                  for (var h = "", m = 0; m < i; m++) h += g[m];
                  b.fontsHash_ = t.MD5(h);
                }
              }
              b.time_ = new Date().getTime() - R;
              b = {
                bk: b.beaconKey_,
                tm: b.time_,
                r: b.random_,
                v: b.version_,
                cs: b.characterSet_,
                h: b.hostName_,
                l: b.language_,
                P: b.partnerUserId_,
                S: b.sessionId_,
                ui: b.userId_,
                uu: b.userUuid_,
                t: b.title_,
                u: b.url_,
                rf: b.referrer_,
                ua: b.userAgent_,
                nm: b.numMimeTypes_,
                mh: b.mimeTypesHash_,
                nf: b.numFonts_,
                fh: b.fontsHash_,
                np: b.numPlugins_,
                ph: b.pluginsHash_,
                sh: b.screenHeight_,
                sw: b.screenWidth_,
                cd: b.colorDepth_,
                p: b.platform_,
                to: b.timezoneOffset_,
                d: b.dstOffset_,
                ce: b.cookieEnabled_,
                dt: b.doNotTrack_,
                tp: b.maxTouchPoints_,
                ol: b.online_,
                pr: b.product_,
                ps: b.productSub_,
                vd: b.vendor_,
                vs: b.vendorSub_,
                hc: b.hardwareConcurrency_,
                je: b.javaEnabled_,
                ss: b.sessionStorage_,
                ls: b.localStorage_,
                in: b.indexedDB_,
                db: b.openDB_,
                cp: b.cpuClass_,
                tl: b.tamperedLanguage_,
                tr: b.tamperedResolution_,
                ts: b.tamperedOS_,
                tb: b.tamperedBrowser_,
                ab: b.adBlock_,
                cf: b.canvasFingerprint_,
                si: b.flash_SocketIP_,
                fu: b.flash_uuid_,
              };
              g = D(b);
              (i = D(l)) && (g += "&" + i);
              g += "&z=z";
              (i = w.getElementById("plugindetect")) &&
                i.parentNode.removeChild(i);
              K(g);
            }
          },
        ],
        S
      );
    }
    function I() {
      var b, l, k;
      for (b = 0; b < arguments.length; b += 1)
        (k = arguments[b]),
          (l = k.shift()),
          "string" === typeof l || l instanceof String
            ? x[l] && x[l].apply(x, k)
            : l.apply(x, k);
    }
    var t = {};
    (function () {
      var b = (t = {}),
        l = (b.util = {
          rotl: function (b, i) {
            return (b << i) | (b >>> (32 - i));
          },
          rotr: function (b, i) {
            return (b << (32 - i)) | (b >>> i);
          },
          endian: function (b) {
            if (b.constructor == Number)
              return (l.rotl(b, 8) & 16711935) | (l.rotl(b, 24) & 4278255360);
            for (var i = 0; i < b.length; i++) b[i] = l.endian(b[i]);
            return b;
          },
          randomBytes: function (b) {
            for (var i = []; 0 < b; b--)
              i.push(Math.floor(256 * Math.random()));
            return i;
          },
          bytesToWords: function (b) {
            for (var i = [], h = 0, m = 0; h < b.length; h++, m += 8)
              i[m >>> 5] |= (b[h] & 255) << (24 - (m % 32));
            return i;
          },
          wordsToBytes: function (b) {
            for (var i = [], h = 0; h < 32 * b.length; h += 8)
              i.push((b[h >>> 5] >>> (24 - (h % 32))) & 255);
            return i;
          },
          bytesToHex: function (b) {
            for (var i = [], h = 0; h < b.length; h++)
              i.push((b[h] >>> 4).toString(16)),
                i.push((b[h] & 15).toString(16));
            return i.join("");
          },
          hexToBytes: function (b) {
            for (var i = [], h = 0; h < b.length; h += 2)
              i.push(parseInt(b.substr(h, 2), 16));
            return i;
          },
          bytesToBase64: function (b) {
            if ("function" == typeof btoa) return btoa(k.bytesToString(b));
            for (var i = [], h = 0; h < b.length; h += 3)
              for (
                var m = (b[h] << 16) | (b[h + 1] << 8) | b[h + 2], a = 0;
                4 > a;
                a++
              )
                8 * h + 6 * a <= 8 * b.length
                  ? i.push(
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                        (m >>> (6 * (3 - a))) & 63
                      )
                    )
                  : i.push("=");
            return i.join("");
          },
          base64ToBytes: function (b) {
            if ("function" == typeof atob) return k.stringToBytes(atob(b));
            for (
              var b = b.replace(/[^A-Z0-9+\/]/gi, ""), i = [], h = 0, m = 0;
              h < b.length;
              m = ++h % 4
            )
              0 != m &&
                i.push(
                  (("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                    b.charAt(h - 1)
                  ) &
                    (Math.pow(2, -2 * m + 8) - 1)) <<
                    (2 * m)) |
                    ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(
                      b.charAt(h)
                    ) >>>
                      (6 - 2 * m))
                );
            return i;
          },
        }),
        b = (b.charenc = {});
      b.UTF8 = {
        stringToBytes: function (b) {
          return k.stringToBytes(unescape(encodeURIComponent(b)));
        },
        bytesToString: function (b) {
          return decodeURIComponent(escape(k.bytesToString(b)));
        },
      };
      var k = (b.Binary = {
        stringToBytes: function (b) {
          for (var i = [], h = 0; h < b.length; h++)
            i.push(b.charCodeAt(h) & 255);
          return i;
        },
        bytesToString: function (b) {
          for (var i = [], h = 0; h < b.length; h++)
            i.push(String.fromCharCode(b[h]));
          return i.join("");
        },
      });
    })();
    (function () {
      var b = t,
        l = b.util,
        k = b.charenc,
        g = k.UTF8,
        i = k.Binary,
        h = (b.MD5 = function (b, a) {
          var c = l.wordsToBytes(h._md5(b));
          return a && a.asBytes
            ? c
            : a && a.asString
            ? i.bytesToString(c)
            : l.bytesToHex(c);
        });
      h._md5 = function (b) {
        b.constructor == String && (b = g.stringToBytes(b));
        for (
          var a = l.bytesToWords(b),
            c = 8 * b.length,
            b = 1732584193,
            d = -271733879,
            e = -1732584194,
            f = 271733878,
            j = 0;
          j < a.length;
          j++
        )
          a[j] =
            (((a[j] << 8) | (a[j] >>> 24)) & 16711935) |
            (((a[j] << 24) | (a[j] >>> 8)) & 4278255360);
        a[c >>> 5] |= 128 << c % 32;
        a[(((c + 64) >>> 9) << 4) + 14] = c;
        for (
          var c = h._ff, i = h._gg, p = h._hh, k = h._ii, j = 0;
          j < a.length;
          j += 16
        )
          var T = b,
            n = d,
            o = e,
            q = f,
            b = c(b, d, e, f, a[j + 0], 7, -680876936),
            f = c(f, b, d, e, a[j + 1], 12, -389564586),
            e = c(e, f, b, d, a[j + 2], 17, 606105819),
            d = c(d, e, f, b, a[j + 3], 22, -1044525330),
            b = c(b, d, e, f, a[j + 4], 7, -176418897),
            f = c(f, b, d, e, a[j + 5], 12, 1200080426),
            e = c(e, f, b, d, a[j + 6], 17, -1473231341),
            d = c(d, e, f, b, a[j + 7], 22, -45705983),
            b = c(b, d, e, f, a[j + 8], 7, 1770035416),
            f = c(f, b, d, e, a[j + 9], 12, -1958414417),
            e = c(e, f, b, d, a[j + 10], 17, -42063),
            d = c(d, e, f, b, a[j + 11], 22, -1990404162),
            b = c(b, d, e, f, a[j + 12], 7, 1804603682),
            f = c(f, b, d, e, a[j + 13], 12, -40341101),
            e = c(e, f, b, d, a[j + 14], 17, -1502002290),
            d = c(d, e, f, b, a[j + 15], 22, 1236535329),
            b = i(b, d, e, f, a[j + 1], 5, -165796510),
            f = i(f, b, d, e, a[j + 6], 9, -1069501632),
            e = i(e, f, b, d, a[j + 11], 14, 643717713),
            d = i(d, e, f, b, a[j + 0], 20, -373897302),
            b = i(b, d, e, f, a[j + 5], 5, -701558691),
            f = i(f, b, d, e, a[j + 10], 9, 38016083),
            e = i(e, f, b, d, a[j + 15], 14, -660478335),
            d = i(d, e, f, b, a[j + 4], 20, -405537848),
            b = i(b, d, e, f, a[j + 9], 5, 568446438),
            f = i(f, b, d, e, a[j + 14], 9, -1019803690),
            e = i(e, f, b, d, a[j + 3], 14, -187363961),
            d = i(d, e, f, b, a[j + 8], 20, 1163531501),
            b = i(b, d, e, f, a[j + 13], 5, -1444681467),
            f = i(f, b, d, e, a[j + 2], 9, -51403784),
            e = i(e, f, b, d, a[j + 7], 14, 1735328473),
            d = i(d, e, f, b, a[j + 12], 20, -1926607734),
            b = p(b, d, e, f, a[j + 5], 4, -378558),
            f = p(f, b, d, e, a[j + 8], 11, -2022574463),
            e = p(e, f, b, d, a[j + 11], 16, 1839030562),
            d = p(d, e, f, b, a[j + 14], 23, -35309556),
            b = p(b, d, e, f, a[j + 1], 4, -1530992060),
            f = p(f, b, d, e, a[j + 4], 11, 1272893353),
            e = p(e, f, b, d, a[j + 7], 16, -155497632),
            d = p(d, e, f, b, a[j + 10], 23, -1094730640),
            b = p(b, d, e, f, a[j + 13], 4, 681279174),
            f = p(f, b, d, e, a[j + 0], 11, -358537222),
            e = p(e, f, b, d, a[j + 3], 16, -722521979),
            d = p(d, e, f, b, a[j + 6], 23, 76029189),
            b = p(b, d, e, f, a[j + 9], 4, -640364487),
            f = p(f, b, d, e, a[j + 12], 11, -421815835),
            e = p(e, f, b, d, a[j + 15], 16, 530742520),
            d = p(d, e, f, b, a[j + 2], 23, -995338651),
            b = k(b, d, e, f, a[j + 0], 6, -198630844),
            f = k(f, b, d, e, a[j + 7], 10, 1126891415),
            e = k(e, f, b, d, a[j + 14], 15, -1416354905),
            d = k(d, e, f, b, a[j + 5], 21, -57434055),
            b = k(b, d, e, f, a[j + 12], 6, 1700485571),
            f = k(f, b, d, e, a[j + 3], 10, -1894986606),
            e = k(e, f, b, d, a[j + 10], 15, -1051523),
            d = k(d, e, f, b, a[j + 1], 21, -2054922799),
            b = k(b, d, e, f, a[j + 8], 6, 1873313359),
            f = k(f, b, d, e, a[j + 15], 10, -30611744),
            e = k(e, f, b, d, a[j + 6], 15, -1560198380),
            d = k(d, e, f, b, a[j + 13], 21, 1309151649),
            b = k(b, d, e, f, a[j + 4], 6, -145523070),
            f = k(f, b, d, e, a[j + 11], 10, -1120210379),
            e = k(e, f, b, d, a[j + 2], 15, 718787259),
            d = k(d, e, f, b, a[j + 9], 21, -343485551),
            b = (b + T) >>> 0,
            d = (d + n) >>> 0,
            e = (e + o) >>> 0,
            f = (f + q) >>> 0;
        return l.endian([b, d, e, f]);
      };
      h._ff = function (b, a, c, d, e, f, j) {
        b = b + ((a & c) | (~a & d)) + (e >>> 0) + j;
        return ((b << f) | (b >>> (32 - f))) + a;
      };
      h._gg = function (b, a, c, d, e, f, j) {
        b = b + ((a & d) | (c & ~d)) + (e >>> 0) + j;
        return ((b << f) | (b >>> (32 - f))) + a;
      };
      h._hh = function (b, a, c, d, e, f, j) {
        b = b + (a ^ c ^ d) + (e >>> 0) + j;
        return ((b << f) | (b >>> (32 - f))) + a;
      };
      h._ii = function (b, a, c, d, e, f, j) {
        b = b + (c ^ (a | ~d)) + (e >>> 0) + j;
        return ((b << f) | (b >>> (32 - f))) + a;
      };
      h._blocksize = 16;
      h._digestsize = 16;
    })();
    (function () {
      var b = {
        version: "0.9.1",
        name: "PluginDetect",
        addPlugin: function (a, c) {
          a &&
            b.isString(a) &&
            c &&
            b.isFunc(c.getVersion) &&
            ((a = a.replace(/\s/g, "").toLowerCase()),
            (b.Plugins[a] = c),
            b.isDefined(c.getVersionDone) ||
              ((c.installed = null),
              (c.version = null),
              (c.version0 = null),
              (c.getVersionDone = null),
              (c.pluginName = a)));
        },
        uniqueName: function () {
          return b.name + "998";
        },
        openTag: "<",
        hasOwnPROP: {}.constructor.prototype.hasOwnProperty,
        hasOwn: function (a, c) {
          var d;
          try {
            d = b.hasOwnPROP.call(a, c);
          } catch (e) {}
          return !!d;
        },
        rgx: {
          str: /string/i,
          num: /number/i,
          fun: /function/i,
          arr: /array/i,
        },
        toString: {}.constructor.prototype.toString,
        isDefined: function (a) {
          return "undefined" != typeof a;
        },
        isArray: function (a) {
          return b.rgx.arr.test(b.toString.call(a));
        },
        isString: function (a) {
          return b.rgx.str.test(b.toString.call(a));
        },
        isNum: function (a) {
          return b.rgx.num.test(b.toString.call(a));
        },
        isStrNum: function (a) {
          return b.isString(a) && /\d/.test(a);
        },
        isFunc: function (a) {
          return b.rgx.fun.test(b.toString.call(a));
        },
        getNumRegx: /[\d][\d\.\_,\-]*/,
        splitNumRegx: /[\.\_,\-]/g,
        getNum: function (a, c) {
          var d = b.isStrNum(a)
            ? (c && b.isString(c) ? RegExp(c) : b.getNumRegx).exec(a)
            : null;
          return d ? d[0] : null;
        },
        compareNums: function (a, c, d) {
          var e = parseInt;
          if (b.isStrNum(a) && b.isStrNum(c)) {
            if (b.isDefined(d) && d.compareNums) return d.compareNums(a, c);
            a = a.split(b.splitNumRegx);
            c = c.split(b.splitNumRegx);
            for (d = 0; d < Math.min(a.length, c.length); d++) {
              if (e(a[d], 10) > e(c[d], 10)) return 1;
              if (e(a[d], 10) < e(c[d], 10)) return -1;
            }
          }
          return 0;
        },
        formatNum: function (a, c) {
          var d, e;
          if (!b.isStrNum(a)) return null;
          b.isNum(c) || (c = 4);
          c--;
          e = a
            .replace(/\s/g, "")
            .split(b.splitNumRegx)
            .concat(["0", "0", "0", "0"]);
          for (d = 0; 4 > d; d++)
            if (
              (/^(0+)(.+)$/.test(e[d]) && (e[d] = RegExp.$2),
              d > c || !/\d/.test(e[d]))
            )
              e[d] = "0";
          return e.slice(0, 4).join(",");
        },
        pd: {
          getPROP: function (a, b, d) {
            try {
              a && (d = a[b]);
            } catch (e) {
              this.errObj = e;
            }
            return d;
          },
          findNavPlugin: function (a) {
            if (a.dbug) return a.dbug;
            var c = null;
            if (window.navigator) {
              var d = {
                  Find: b.isString(a.find) ? RegExp(a.find, "i") : a.find,
                  Find2: b.isString(a.find2) ? RegExp(a.find2, "i") : a.find2,
                  Avoid: a.avoid
                    ? b.isString(a.avoid)
                      ? RegExp(a.avoid, "i")
                      : a.avoid
                    : 0,
                  Num: a.num ? /\d/ : 0,
                },
                e,
                f,
                j,
                g = navigator.mimeTypes,
                h = navigator.plugins;
              if (a.mimes && g) {
                j = b.isArray(a.mimes)
                  ? [].concat(a.mimes)
                  : b.isString(a.mimes)
                  ? [a.mimes]
                  : [];
                for (e = 0; e < j.length; e++) {
                  f = 0;
                  try {
                    b.isString(j[e]) &&
                      /[^\s]/.test(j[e]) &&
                      (f = g[j[e]].enabledPlugin);
                  } catch (i) {}
                  if (
                    f &&
                    ((f = this.findNavPlugin_(f, d)),
                    f.obj && (c = f.obj),
                    c && !b.dbug)
                  )
                    return c;
                }
              }
              if (a.plugins && h) {
                a = b.isArray(a.plugins)
                  ? [].concat(a.plugins)
                  : b.isString(a.plugins)
                  ? [a.plugins]
                  : [];
                for (e = 0; e < a.length; e++) {
                  f = 0;
                  try {
                    a[e] && b.isString(a[e]) && (f = h[a[e]]);
                  } catch (k) {}
                  if (
                    f &&
                    ((f = this.findNavPlugin_(f, d)),
                    f.obj && (c = f.obj),
                    c && !b.dbug)
                  )
                    return c;
                }
                a = h.length;
                if (b.isNum(a))
                  for (e = 0; e < a; e++) {
                    f = 0;
                    try {
                      f = h[e];
                    } catch (l) {}
                    if (
                      f &&
                      ((f = this.findNavPlugin_(f, d)),
                      f.obj && (c = f.obj),
                      c && !b.dbug)
                    )
                      break;
                  }
              }
            }
            return c;
          },
          findNavPlugin_: function (a, b) {
            var d = a.description || "",
              e = a.name || "",
              f = {};
            if (
              (b.Find.test(d) &&
                (!b.Find2 || b.Find2.test(e)) &&
                (!b.Num ||
                  b.Num.test(RegExp.leftContext + RegExp.rightContext))) ||
              (b.Find.test(e) &&
                (!b.Find2 || b.Find2.test(d)) &&
                (!b.Num ||
                  b.Num.test(RegExp.leftContext + RegExp.rightContext)))
            )
              if (!b.Avoid || (!b.Avoid.test(d) && !b.Avoid.test(e))) f.obj = a;
            return f;
          },
          getVersionDelimiter: ",",
          findPlugin: function (a) {
            var c = { status: -3, plugin: 0 };
            if (!b.isString(a)) return c;
            if (1 == a.length) return (this.getVersionDelimiter = a), c;
            a = a.toLowerCase().replace(/\s/g, "");
            a = b.Plugins[a];
            if (!a || !a.getVersion) return c;
            c.plugin = a;
            c.status = 1;
            return c;
          },
        },
        getPluginFileVersion: function (a, c, d, e) {
          var f,
            j = -1;
          if (!a) return c;
          e = e || "version";
          a[e] && (f = b.getNum(a[e] + "", d));
          if (!f || !c) return c || f || null;
          a = b.formatNum(c).split(b.splitNumRegx);
          d = b.formatNum(f).split(b.splitNumRegx);
          for (e = 0; e < a.length; e++)
            if (
              (-1 < j && e > j && "0" != a[e]) ||
              (d[e] != a[e] && (-1 == j && (j = e), "0" != a[e]))
            )
              return c;
          return f;
        },
        AXO: (function () {
          var a;
          try {
            a = new window.ActiveXObject();
          } catch (b) {}
          return a ? null : window.ActiveXObject;
        })(),
        getAXO: function (a) {
          var c = null;
          try {
            c = new b.AXO(a);
          } catch (d) {
            b.errObj = d;
          }
          c && (b.browser.ActiveXEnabled = !0);
          return c;
        },
        browser: {
          detectPlatform: function () {
            var a,
              c = window.navigator ? navigator.platform || "" : "";
            b.OS = 100;
            if (c) {
              var d = [
                "Win",
                1,
                "Mac",
                2,
                "Linux",
                3,
                "FreeBSD",
                4,
                "iPhone",
                21.1,
                "iPod",
                21.2,
                "iPad",
                21.3,
                "Win.*CE",
                22.1,
                "Win.*Mobile",
                22.2,
                "Pocket\\s*PC",
                22.3,
                "",
                100,
              ];
              for (a = d.length - 2; 0 <= a; a -= 2)
                if (d[a] && RegExp(d[a], "i").test(c)) {
                  b.OS = d[a + 1];
                  break;
                }
            }
          },
          detectIE: function () {
            var a = document,
              c,
              d = window.navigator ? navigator.userAgent || "" : "",
              e,
              f;
            this.ActiveXEnabled = this.ActiveXFilteringEnabled = !1;
            try {
              this.ActiveXFilteringEnabled =
                !!window.external.msActiveXFilteringEnabled();
            } catch (j) {}
            f = [
              "WMPlayer.OCX",
              "ShockwaveFlash.ShockwaveFlash",
              "AgControl.AgControl",
            ];
            e =
              "Msxml2.XMLHTTP Msxml2.DOMDocument Microsoft.XMLDOM TDCCtl.TDCCtl Shell.UIHelper HtmlDlgSafeHelper.HtmlDlgSafeHelper Scripting.Dictionary"
                .split(" ")
                .concat(f);
            for (c = 0; c < e.length && (!b.getAXO(e[c]) || b.dbug); c++);
            if (this.ActiveXEnabled && this.ActiveXFilteringEnabled)
              for (c = 0; c < f.length; c++)
                if (b.getAXO(f[c])) {
                  this.ActiveXFilteringEnabled = !1;
                  break;
                }
            c = a.documentMode;
            try {
              a.documentMode = "";
            } catch (g) {}
            this.isIE =
              (this.isIE = this.ActiveXEnabled) ||
              b.isNum(a.documentMode) ||
              /*@cc_on!@*/ !1;
            try {
              a.documentMode = c;
              if (!a.documentMode) delete a.documentMode;
            } catch (h) {}
            this.verIE = null;
            this.isIE &&
              (this.verIE =
                (b.isNum(a.documentMode) && 7 <= a.documentMode
                  ? a.documentMode
                  : 0) ||
                (/^(?:.*?[^a-zA-Z])??(?:MSIE|rv\s*\:)\s*(\d+\.?\d*)/i.test(d)
                  ? parseFloat(RegExp.$1, 10)
                  : 7));
          },
          detectNonIE: function () {
            var a = 0,
              c = window.navigator ? navigator : {},
              d = this.isIE ? "" : c.userAgent || "",
              e = c.vendor || "",
              c = c.product || "";
            this.isGecko = !a && /Gecko/i.test(c) && /Gecko\s*\/\s*\d/i.test(d);
            a = a || this.isGecko;
            this.verGecko = this.isGecko
              ? b.formatNum(
                  /rv\s*\:\s*([\.\,\d]+)/i.test(d) ? RegExp.$1 : "0.9"
                )
              : null;
            this.isOpera =
              !a &&
              /(OPR\s*\/|Opera\s*\/\s*\d.*\s*Version\s*\/|Opera\s*[\/]?)\s*(\d+[\.,\d]*)/i.test(
                d
              );
            a = a || this.isOpera;
            this.verOpera = this.isOpera ? b.formatNum(RegExp.$2) : null;
            this.isEdge = !a && /(Edge)\s*\/\s*(\d[\d\.]*)/i.test(d);
            a = a || this.isEdge;
            this.verEdgeHTML = this.isEdge ? b.formatNum(RegExp.$2) : null;
            this.isChrome = !a && /(Chrome|CriOS)\s*\/\s*(\d[\d\.]*)/i.test(d);
            a = a || this.isChrome;
            this.verChrome = this.isChrome ? b.formatNum(RegExp.$2) : null;
            this.verSafari =
              (this.isSafari =
                !a &&
                (/Apple/i.test(e) || !e) &&
                /Safari\s*\/\s*(\d[\d\.]*)/i.test(d)) &&
              /Version\s*\/\s*(\d[\d\.]*)/i.test(d)
                ? b.formatNum(RegExp.$1)
                : null;
          },
          init: function () {
            this.detectPlatform();
            this.detectIE();
            this.detectNonIE();
          },
        },
        init: {
          hasRun: 0,
          library: function () {
            window[b.name] = b;
            var a = document;
            b.win.init();
            b.head =
              a.getElementsByTagName("head")[0] ||
              a.getElementsByTagName("body")[0] ||
              a.body ||
              null;
            b.browser.init();
            this.hasRun = 1;
          },
        },
        ev: {
          addEvent: function (a, b, d) {
            a &&
              b &&
              d &&
              (a.addEventListener
                ? a.addEventListener(b, d, !1)
                : a.attachEvent
                ? a.attachEvent("on" + b, d)
                : (a["on" + b] = this.concatFn(d, a["on" + b])));
          },
          removeEvent: function (a, b, d) {
            a &&
              b &&
              d &&
              (a.removeEventListener
                ? a.removeEventListener(b, d, !1)
                : a.detachEvent && a.detachEvent("on" + b, d));
          },
          concatFn: function (a, b) {
            return function () {
              a();
              "function" == typeof b && b();
            };
          },
          handler: function (a, b, d, e, f) {
            return function () {
              a(b, d, e, f);
            };
          },
          handlerOnce: function (a, c, d, e) {
            return function () {
              var f = b.uniqueName();
              a[f] || ((a[f] = 1), a(c, d, e));
            };
          },
          handlerWait: function (a, b, d, e, f) {
            var j = this;
            return function () {
              j.setTimeout(j.handler(b, d, e, f), a);
            };
          },
          setTimeout: function (a, c) {
            (!b.win || !b.win.unload) && setTimeout(a, c);
          },
          fPush: function (a, c) {
            b.isArray(c) &&
              (b.isFunc(a) ||
                (b.isArray(a) && 0 < a.length && b.isFunc(a[0]))) &&
              c.push(a);
          },
          call0: function (a) {
            var c = b.isArray(a) ? a.length : -1;
            if (0 < c && b.isFunc(a[0]))
              a[0](b, 1 < c ? a[1] : 0, 2 < c ? a[2] : 0, 3 < c ? a[3] : 0);
            else b.isFunc(a) && a(b);
          },
          callArray0: function (a) {
            var c;
            if (b.isArray(a))
              for (; a.length; )
                (c = a[0]),
                  a.splice(0, 1),
                  (!b.win || !(b.win.unload && a !== b.win.unloadHndlrs)) &&
                    this.call0(c);
          },
          call: function (a) {
            this.call0(a);
            this.ifDetectDoneCallHndlrs();
          },
          callArray: function (a) {
            this.callArray0(a);
            this.ifDetectDoneCallHndlrs();
          },
          allDoneHndlrs: [],
          ifDetectDoneCallHndlrs: function () {
            var a, c;
            if (
              this.allDoneHndlrs.length &&
              (!b.win ||
                (b.win.loaded &&
                  !b.win.loadPrvtHndlrs.length &&
                  !b.win.loadPblcHndlrs.length))
            ) {
              if (b.Plugins)
                for (a in b.Plugins)
                  if (
                    b.hasOwn(b.Plugins, a) &&
                    (c = b.Plugins[a]) &&
                    b.isFunc(c.getVersion) &&
                    (3 == c.OTF ||
                      (c.DoneHndlrs && c.DoneHndlrs.length) ||
                      (c.BIHndlrs && c.BIHndlrs.length))
                  )
                    return;
              this.callArray0(this.allDoneHndlrs);
            }
          },
        },
        isMinVersion: function (a, c, d, e) {
          var f = b.pd.findPlugin(a),
            a = -1;
          if (0 > f.status) return f.status;
          f = f.plugin;
          c = b.formatNum(
            b.isNum(c) ? c.toString() : b.isStrNum(c) ? b.getNum(c) : "0"
          );
          1 != f.getVersionDone &&
            (f.getVersion(c, d, e),
            null === f.getVersionDone && (f.getVersionDone = 1));
          null !== f.installed &&
            (a =
              0.5 >= f.installed
                ? f.installed
                : 0.7 == f.installed
                ? 1
                : null === f.version
                ? 0
                : 0 <= b.compareNums(f.version, c, f)
                ? 1
                : -0.1);
          return a;
        },
        getVersion: function (a, c, d) {
          a = b.pd.findPlugin(a);
          if (0 > a.status) return null;
          a = a.plugin;
          1 != a.getVersionDone &&
            (a.getVersion(null, c, d),
            null === a.getVersionDone && (a.getVersionDone = 1));
          return (c = (c = a.version || a.version0)
            ? c.replace(b.splitNumRegx, b.pd.getVersionDelimiter)
            : c);
        },
        hasMimeType: function (a) {
          if (a && window.navigator && navigator.mimeTypes) {
            var c,
              d,
              e,
              f = navigator.mimeTypes,
              j = b.isArray(a) ? [].concat(a) : b.isString(a) ? [a] : [];
            e = j.length;
            for (d = 0; d < e; d++) {
              a = 0;
              try {
                b.isString(j[d]) && /[^\s]/.test(j[d]) && (a = f[j[d]]);
              } catch (g) {}
              if ((c = a ? a.enabledPlugin : 0) && (c.name || c.description))
                return a;
            }
          }
          return null;
        },
        onDetectionDone: function (a, c, d, e) {
          var f = b.pd.findPlugin(a);
          if (-3 == f.status) return -1;
          f = f.plugin;
          b.isArray(f.DoneHndlrs) || (f.DoneHndlrs = []);
          1 != f.getVersionDone &&
            (b.getVersion
              ? b.getVersion(a, d, e)
              : b.isMinVersion(a, "0", d, e));
          if (-0.5 != f.installed && 0.5 != f.installed) return b.ev.call(c), 1;
          b.ev.fPush(c, f.DoneHndlrs);
          return 0;
        },
        onWindowLoaded: function (a) {
          b.win.loaded ? b.ev.call(a) : b.ev.fPush(a, b.win.loadPblcHndlrs);
        },
        codebase: {
          isDisabled: function () {
            return b.browser.ActiveXEnabled &&
              b.isDefined(
                b.pd.getPROP(document.createElement("object"), "object")
              )
              ? 0
              : 1;
          },
          isMin: function (a, c, d) {
            var e = 0;
            if (!b.isStrNum(c) || this.isDisabled()) return e;
            this.init(a);
            if (
              !d ||
              this.isActiveXObject(a, b.formatNum(a.DIGITMIN.join(",")))
            ) {
              if (!a.L) {
                a.L = {};
                for (d = 0; d < a.Lower.length; d++)
                  if (this.isActiveXObject(a, a.Lower[d])) {
                    a.L = this.convert(a, a.Lower[d]);
                    break;
                  }
              }
              a.L.v &&
                ((d = this.convert(a, c, 1)),
                0 <= d.x &&
                  (e = (
                    a.L.x == d.x
                      ? this.isActiveXObject(a, d.v)
                      : 0 >= b.compareNums(c, a.L.v)
                  )
                    ? 1
                    : -1));
            }
            return e;
          },
          search: function (a, c) {
            var d = this,
              e = 0,
              f;
            f = a.searchHasRun || d.isDisabled() ? 1 : 0;
            a.searchHasRun = 1;
            if (f) return a.version || null;
            d.init(a);
            if (!c || d.isActiveXObject(a, b.formatNum(a.DIGITMIN.join(",")))) {
              var j,
                g = a.DIGITMAX,
                h,
                i,
                k = [0, 0, 0, 0],
                l = [0, 0, 0, 0],
                m = function (b, c) {
                  var f = [].concat(k);
                  f[b] = c;
                  (f = d.isActiveXObject(a, f.join(",")))
                    ? ((e = 1), (k[b] = c))
                    : (l[b] = c);
                  return f;
                };
              for (f = 0; f < l.length; f++) {
                k[f] = Math.floor(a.DIGITMIN[f]) || 0;
                h = k.join(",");
                i = k
                  .slice(0, f)
                  .concat([99999999, 99999999, 99999999, 99999999])
                  .slice(0, k.length)
                  .join(",");
                for (j = 0; j < g.length; j++)
                  b.isArray(g[j]) &&
                    (g[j].push(0),
                    g[j][f] > l[f] &&
                      0 <= b.compareNums(i, a.Lower[j]) &&
                      0 > b.compareNums(h, a.Upper[j]) &&
                      (l[f] = Math.floor(g[j][f])));
                for (j = 0; 30 > j; j++) {
                  if (16 >= l[f] - k[f]) {
                    for (j = l[f]; j >= k[f] + (f ? 1 : 0) && !m(f, j); j--);
                    break;
                  }
                  m(f, Math.round((l[f] + k[f]) / 2));
                }
                if (!e) break;
                l[f] = k[f];
              }
              e && (a.version = d.convert(a, k.join(",")).v);
            }
            return a.version || null;
          },
          emptyNode: function (a) {
            try {
              a.innerHTML = "";
            } catch (b) {}
          },
          HTML: [],
          len: 0,
          onUnload: function (a, b) {
            var d,
              e = b.HTML,
              f;
            for (d = 0; d < e.length; d++)
              if ((f = e[d]))
                (e[d] = 0),
                  b.emptyNode(f.span()),
                  (f.span = 0),
                  (f.spanObj = 0);
            b.iframe = 0;
          },
          init: function (a) {
            if (!this.iframe) {
              var c = b.DOM,
                d;
              this.iframe = d = c.iframe.insert(0, "$.codebase{ }");
              c.iframe.write(d, " ");
              c.iframe.close(d);
            }
            if (!a.init) {
              a.init = 1;
              b.ev.fPush([this.onUnload, this], b.win.unloadHndlrs);
              a.tagA =
                '<object width="1" height="1" style="display:none;" codebase="#version=';
              c = a.classID || a.$$.classID || "";
              a.tagB =
                '" ' +
                (/clsid\s*:/i.test(c) ? 'classid="' : 'type="') +
                c +
                '">' +
                (a.ParamTags ? a.ParamTags : "") +
                b.openTag +
                "/object>";
              for (c = 0; c < a.Lower.length; c++)
                (a.Lower[c] = b.formatNum(a.Lower[c])),
                  (a.Upper[c] = b.formatNum(a.Upper[c]));
            }
          },
          isActiveXObject: function (a, c) {
            var d = 0,
              e = (b.DOM.iframe.doc(this.iframe) || document).createElement(
                "span"
              );
            if (a.min && 0 >= b.compareNums(c, a.min)) return 1;
            if (a.max && 0 <= b.compareNums(c, a.max)) return 0;
            e.innerHTML = a.tagA + c + a.tagB;
            b.pd.getPROP(e.firstChild, "object") && (d = 1);
            d
              ? ((a.min = c), this.HTML.push({ spanObj: e, span: this.span }))
              : ((a.max = c), (e.innerHTML = ""));
            return d;
          },
          span: function () {
            return this.spanObj;
          },
          convert_: function (a, c, d, e) {
            return (a = a.convert[c])
              ? b.isFunc(a)
                ? b.formatNum(a(d.split(b.splitNumRegx), e).join(","))
                : d
              : a;
          },
          convert: function (a, c, d) {
            var e,
              f,
              j,
              c = b.formatNum(c);
            f = { v: c, x: -1 };
            if (c)
              for (e = 0; e < a.Lower.length; e++)
                if (
                  (j = this.convert_(a, e, a.Lower[e])) &&
                  0 <= b.compareNums(c, d ? j : a.Lower[e]) &&
                  (!e ||
                    0 >
                      b.compareNums(
                        c,
                        d ? this.convert_(a, e, a.Upper[e]) : a.Upper[e]
                      ))
                ) {
                  f.v = this.convert_(a, e, c, d);
                  f.x = e;
                  break;
                }
            return f;
          },
          z: 0,
        },
        win: {
          disable: function () {
            this.cancel = !0;
          },
          cancel: !1,
          loaded: !1,
          unload: !1,
          hasRun: 0,
          init: function () {
            this.hasRun ||
              ((this.hasRun = 1),
              /complete/i.test(document.readyState || "")
                ? (this.loaded = !0)
                : b.ev.addEvent(window, "load", this.onLoad),
              b.ev.addEvent(window, "unload", this.onUnload));
          },
          loadPrvtHndlrs: [],
          loadPblcHndlrs: [],
          unloadHndlrs: [],
          onUnload: function () {
            var a = b.win;
            a.unload ||
              ((a.unload = !0),
              b.ev.removeEvent(window, "load", a.onLoad),
              b.ev.removeEvent(window, "unload", a.onUnload),
              b.ev.callArray(a.unloadHndlrs));
          },
          onLoad: function () {
            var a = b.win;
            !a.loaded &&
              !a.unload &&
              !a.cancel &&
              ((a.loaded = !0),
              b.ev.callArray(a.loadPrvtHndlrs),
              b.ev.callArray(a.loadPblcHndlrs));
          },
        },
        DOM: {
          isEnabled: {
            objectTag: function () {
              var a = b.browser,
                c = a.isIE ? 0 : 1;
              a.ActiveXEnabled && (c = 1);
              return !!c;
            },
            objectTagUsingActiveX: function () {
              var a = 0;
              b.browser.ActiveXEnabled && (a = 1);
              return !!a;
            },
            objectProperty: function (a) {
              return a && a.tagName && b.browser.isIE
                ? /applet/i.test(a.tagName)
                  ? !this.objectTag() ||
                    b.isDefined(
                      b.pd.getPROP(document.createElement("object"), "object")
                    )
                    ? 1
                    : 0
                  : b.isDefined(
                      b.pd.getPROP(document.createElement(a.tagName), "object")
                    )
                  ? 1
                  : 0
                : 0;
            },
          },
          HTML: [],
          div: null,
          divID: "plugindetect",
          divWidth: 500,
          getDiv: function () {
            return this.div || document.getElementById(this.divID) || null;
          },
          initDiv: function () {
            var a;
            this.div ||
              ((a = this.getDiv())
                ? (this.div = a)
                : ((this.div = document.createElement("div")),
                  (this.div.id = this.divID),
                  this.setStyle(this.div, this.getStyle.div()),
                  this.insertDivInBody(this.div)),
              b.ev.fPush([this.onUnload, this], b.win.unloadHndlrs));
          },
          pluginSize: 1,
          iframeWidth: 40,
          iframeHeight: 10,
          altHTML: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
          emptyNode: function (a) {
            if (a && /div|span/i.test(a.tagName || "")) {
              b.browser.isIE && this.setStyle(a, ["display", "none"]);
              try {
                a.innerHTML = "";
              } catch (c) {}
            }
          },
          removeNode: function (a) {
            try {
              a && a.parentNode && a.parentNode.removeChild(a);
            } catch (b) {}
          },
          onUnload: function (a, b) {
            var d, e, f;
            d = b.HTML;
            if ((e = d.length))
              for (e -= 1; 0 <= e; e--)
                if ((f = d[e]))
                  (d[e] = 0),
                    b.emptyNode(f.span()),
                    b.removeNode(f.span()),
                    (f.span = 0),
                    (f.spanObj = 0),
                    (f.doc = 0),
                    (f.objectProperty = 0);
            d = b.getDiv();
            b.emptyNode(d);
            b.removeNode(d);
            b.div = 0;
          },
          span: function () {
            this.spanObj ||
              (this.spanObj = this.doc.getElementById(this.spanId));
            return this.spanObj || null;
          },
          width: function () {
            var a = this.span(),
              c;
            c = a && b.isNum(a.scrollWidth) ? a.scrollWidth : -1;
            a = a && b.isNum(a.offsetWidth) ? a.offsetWidth : -1;
            return 0 < a ? a : 0 < c ? c : Math.max(a, c);
          },
          obj: function () {
            var a = this.span();
            return a ? a.firstChild || null : null;
          },
          readyState: function () {
            return b.browser.isIE &&
              b.isDefined(b.pd.getPROP(this.span(), "readyState"))
              ? b.pd.getPROP(this.obj(), "readyState")
              : b.UNDEFINED;
          },
          objectProperty: function () {
            var a;
            this.DOM.isEnabled.objectProperty(this) &&
              (a = b.pd.getPROP(this.obj(), "object"));
            return a;
          },
          onLoadHdlr: function (a, b) {
            b.loaded = 1;
          },
          getTagStatus: function (a, c, d, e, f, j, g) {
            if (!a || !a.span()) return -2;
            var f = a.width(),
              j = a.obj() ? 1 : 0,
              h = a.readyState(),
              i = a.objectProperty();
            if (i) return 1.5;
            var k = /clsid\s*\:/i,
              l =
                d && k.test(d.outerHTML || "")
                  ? d
                  : e && k.test(e.outerHTML || "")
                  ? e
                  : 0,
              d =
                d && !k.test(d.outerHTML || "")
                  ? d
                  : e && !k.test(e.outerHTML || "")
                  ? e
                  : 0,
              d = a && k.test(a.outerHTML || "") ? l : d;
            if (!c || !c.span() || !d || !d.span()) return -2;
            e = d.width();
            k = c.width();
            l = d.readyState();
            if (0 > f || 0 > e || k <= this.pluginSize) return 0;
            g &&
              !a.pi &&
              b.isDefined(i) &&
              b.browser.isIE &&
              a.tagName == d.tagName &&
              a.time <= d.time &&
              f === e &&
              0 === h &&
              0 !== l &&
              (a.pi = 1);
            return e < k || !a.loaded || !c.loaded || !d.loaded
              ? a.pi
                ? -0.1
                : 0
              : f != k &&
                j &&
                f == this.pluginSize &&
                j &&
                (!b.isNum(h) || 4 === h)
              ? 1
              : a.pi
              ? -0.5
              : -1;
          },
          setStyle: function (a, b) {
            var d = a.style,
              e;
            if (d && b)
              for (e = 0; e < b.length; e += 2)
                try {
                  d[b[e]] = b[e + 1];
                } catch (f) {}
          },
          getStyle: {
            iframe: function () {
              return this.span();
            },
            span: function (a) {
              var c = b.DOM;
              return a
                ? this.plugin()
                : []
                    .concat(this.Default)
                    .concat([
                      "display",
                      "inline",
                      "fontSize",
                      c.pluginSize + 3 + "px",
                      "lineHeight",
                      c.pluginSize + 3 + "px",
                    ]);
            },
            div: function () {
              var a = b.DOM;
              return []
                .concat(this.Default)
                .concat([
                  "display",
                  "block",
                  "width",
                  a.divWidth + "px",
                  "height",
                  a.pluginSize + 3 + "px",
                  "fontSize",
                  a.pluginSize + 3 + "px",
                  "lineHeight",
                  a.pluginSize + 3 + "px",
                  "position",
                  "absolute",
                  "right",
                  "9999px",
                  "top",
                  "-9999px",
                ]);
            },
            plugin: function (a) {
              var c = b.DOM;
              return (
                "background-color:transparent;background-image:none;vertical-align:baseline;outline-style:none;border-style:none;padding:0px;margin:0px;visibility:" +
                (a ? "hidden;" : "visible;") +
                "display:inline;font-size:" +
                (c.pluginSize + 3) +
                "px;line-height:" +
                (c.pluginSize + 3) +
                "px;"
              );
            },
            Default:
              "backgroundColor transparent backgroundImage none verticalAlign baseline outlineStyle none borderStyle none padding 0px margin 0px visibility visible".split(
                " "
              ),
          },
          insertDivInBody: function (a, c) {
            var d = null,
              e = c ? window.top.document : window.document,
              f = e.getElementsByTagName("body")[0] || e.body;
            if ((f = e.getElementsByTagName("body")[0] || e.body))
              f.insertBefore(a, f.firstChild), d && f.removeChild(d);
          },
          iframe: {
            onLoad: function (a) {
              b.ev.callArray(a);
            },
            insert: function (a, c) {
              var d = b.DOM,
                e = document.createElement("iframe"),
                f;
              d.setStyle(e, d.getStyle.iframe());
              e.width = d.iframeWidth;
              e.height = d.iframeHeight;
              d.initDiv();
              d.getDiv().appendChild(e);
              try {
                this.doc(e).open();
              } catch (j) {}
              e[b.uniqueName()] = [];
              d = b.ev.handlerOnce(
                b.isNum(a) && 0 < a
                  ? b.ev.handlerWait(a, this.onLoad, e[b.uniqueName()], c)
                  : b.ev.handler(this.onLoad, e[b.uniqueName()], c)
              );
              b.ev.addEvent(e, "load", d);
              e.onload || (e.onload = d);
              f = this.win(e);
              b.ev.addEvent(f, "load", d);
              f && !f.onload && (f.onload = d);
              return e;
            },
            addHandler: function (a, c) {
              a && b.ev.fPush(c, a[b.uniqueName()]);
            },
            close: function (a) {
              try {
                this.doc(a).close();
              } catch (b) {}
            },
            write: function (a, b) {
              var d = this.doc(a),
                e = -1,
                f;
              try {
                (f = new Date().getTime()),
                  d.write(b),
                  (e = new Date().getTime() - f);
              } catch (j) {}
              return e;
            },
            win: function (a) {
              try {
                return a.contentWindow;
              } catch (b) {}
              return null;
            },
            doc: function (a) {
              var b;
              try {
                b = a.contentWindow.document;
              } catch (d) {}
              try {
                b || (b = a.contentDocument);
              } catch (e) {}
              return b || null;
            },
          },
          insert: function (a, c, d, e, f, j, g) {
            var h;
            g || (this.initDiv(), (g = this.getDiv()));
            g &&
              (/div/i.test(g.tagName) && (h = g.ownerDocument),
              /iframe/i.test(g.tagName) && (h = this.iframe.doc(g)));
            if (!h || !h.createElement) h = document;
            b.isDefined(e) || (e = "");
            if (b.isString(a) && /[^\s]/.test(a)) {
              for (
                var a = a.toLowerCase().replace(/\s/g, ""),
                  f = b.openTag + a + " ",
                  f = f + ('style="' + this.getStyle.plugin(j) + '" '),
                  i = 1,
                  k = 1,
                  j = 0;
                j < c.length;
                j += 2
              )
                /[^\s]/.test(c[j + 1]) && (f += c[j] + '="' + c[j + 1] + '" '),
                  /width/i.test(c[j]) && (i = 0),
                  /height/i.test(c[j]) && (k = 0);
              f +=
                (i ? 'width="' + this.pluginSize + '" ' : "") +
                (k ? 'height="' + this.pluginSize + '" ' : "");
              if ("embed" == a || "img" == a) f += " />";
              else {
                f += ">";
                for (j = 0; j < d.length; j += 2)
                  /[^\s]/.test(d[j + 1]) &&
                    (f +=
                      b.openTag +
                      'param name="' +
                      d[j] +
                      '" value="' +
                      d[j + 1] +
                      '" />');
                f += e + b.openTag + "/" + a + ">";
              }
            } else (a = ""), (f = e);
            a = {
              spanId: "",
              spanObj: null,
              span: this.span,
              loaded: null,
              tagName: a,
              outerHTML: f,
              DOM: this,
              time: new Date().getTime(),
              insertDomDelay: -1,
              width: this.width,
              obj: this.obj,
              readyState: this.readyState,
              objectProperty: this.objectProperty,
              doc: h,
            };
            if (g && g.parentNode)
              if (/iframe/i.test(g.tagName))
                this.iframe.addHandler(g, [this.onLoadHdlr, a]),
                  (a.loaded = 0),
                  (a.spanId = b.name + "Span" + this.HTML.length),
                  (h =
                    '<span id="' +
                    a.spanId +
                    '" style="' +
                    this.getStyle.span(1) +
                    '">' +
                    f +
                    "</span>"),
                  (a.time = new Date().getTime()),
                  (g = this.iframe.write(g, h)),
                  0 <= g && (a.insertDomDelay = g);
              else if (/div/i.test(g.tagName)) {
                h = h.createElement("span");
                this.setStyle(h, this.getStyle.span());
                g.appendChild(h);
                try {
                  (a.time = new Date().getTime()),
                    (h.innerHTML = f),
                    (a.insertDomDelay = new Date().getTime() - a.time);
                } catch (l) {}
                a.spanObj = h;
              }
            this.HTML.push(a);
            return a;
          },
        },
        file: {
          any: "fileStorageAny999",
          valid: "fileStorageValid999",
          save: function (a, c, d) {
            a &&
              b.isDefined(d) &&
              (a[this.any] || (a[this.any] = []),
              a[this.valid] || (a[this.valid] = []),
              a[this.any].push(d),
              (c = this.split(c, d)) && a[this.valid].push(c));
          },
          getValidLength: function (a) {
            return a && a[this.valid] ? a[this.valid].length : 0;
          },
          getAnyLength: function (a) {
            return a && a[this.any] ? a[this.any].length : 0;
          },
          getValid: function (a, b) {
            return a && a[this.valid] ? this.get(a[this.valid], b) : null;
          },
          getAny: function (a, b) {
            return a && a[this.any] ? this.get(a[this.any], b) : null;
          },
          get: function (a, c) {
            var d = a.length - 1,
              e = b.isNum(c) ? c : d;
            return 0 > e || e > d ? null : a[e];
          },
          split: function (a, c) {
            var d = null,
              e,
              a = a ? a.replace(".", "\\.") : "";
            e = RegExp("^(.*[^\\/])(" + a + "\\s*)$");
            b.isString(c) &&
              e.test(c) &&
              ((e = RegExp.$1.split("/")),
              (d = { name: e[e.length - 1], ext: RegExp.$2, full: c }),
              (e[e.length - 1] = ""),
              (d.path = e.join("/")));
            return d;
          },
        },
        Plugins: {},
      };
      b.init.library();
      var l = {
        setPluginStatus: function (a, c, d) {
          this.installed = (this.version = c ? b.formatNum(c, 3) : null)
            ? 1
            : d
            ? 0 < d
              ? 0.7
              : -0.1
            : a
            ? 0
            : -1;
          this.getVersionDone =
            0.7 == this.installed ||
            -0.1 == this.installed ||
            0 === this.nav.done
              ? 0
              : 1;
        },
        getVersion: function (a, c) {
          var d = null,
            e = 0,
            f,
            c = b.browser.isIE ? 0 : c;
          if ((!e || b.dbug) && this.nav.query(c).installed) e = 1;
          if ((!d || b.dbug) && this.nav.query(c).version) d = this.nav.version;
          if ((f = !d ? this.codebase.isMin(a) : 0))
            this.setPluginStatus(0, 0, f);
          else {
            if (!d || b.dbug)
              if ((f = this.codebase.search())) (e = 1), (d = f);
            if ((!e || b.dbug) && this.axo.query().installed) e = 1;
            if ((!d || b.dbug) && this.axo.query().version)
              d = this.axo.version;
            this.setPluginStatus(e, d);
          }
        },
        nav: {
          done: null,
          installed: 0,
          version: null,
          result: [0, 0],
          mimeType:
            "video/quicktime application/x-quicktimeplayer image/x-macpaint image/x-quicktime application/x-rtsp application/x-sdp application/sdp audio/vnd.qcelp video/sd-video audio/mpeg video/mp4 video/3gpp2 application/x-mpeg audio/x-m4b audio/x-aac video/flc".split(
              " "
            ),
          find: "QuickTime.*Plug-?in",
          find2: "QuickTime.*Plug-?in",
          find3filename: "QuickTime|QT",
          avoid:
            "Totem|VLC|RealPlayer|Helix|MPlayer|Windows\\s*Media\\s*Player",
          plugins: "QuickTime Plug-in",
          detect: function (a) {
            var c,
              d = { installed: 0, version: null, plugin: null };
            if (
              (a = b.pd.findNavPlugin({
                find: this.find,
                find2: a ? 0 : this.find2,
                avoid: a ? 0 : this.avoid,
                mimes: this.mimeType,
                plugins: this.plugins,
              }))
            )
              (d.plugin = a),
                (d.installed = 1),
                (c = RegExp(this.find, "i")),
                a.name &&
                  c.test(a.name + "") &&
                  (d.version = b.getNum(a.name + ""));
            return d;
          },
          query: function (a) {
            var c,
              d,
              a = a ? 1 : 0;
            if (null === this.done) {
              if (b.hasMimeType(this.mimeType)) {
                d = this.detect(1);
                d.installed &&
                  ((c = this.detect(0)),
                  (this.result = [c, c.installed ? c : d]));
                var e = this.result[0],
                  f = this.result[1];
                c = RegExp(this.avoid, "i");
                d = RegExp(this.find3filename, "i");
                e = e ? e.plugin : 0;
                f = f ? f.plugin : 0;
                if (
                  !e &&
                  f &&
                  f.name &&
                  (!f.description || /^[\s]*$/.test(f.description + "")) &&
                  !c.test(f.name + "")
                )
                  (e = (f.filename || "") + ""),
                    /^.*[\\\/]([^\\\/]*)$/.test(e) && (e = RegExp.$1),
                    e &&
                      d.test(e) &&
                      !c.test(e) &&
                      (this.result[0] = this.result[1]);
              }
              this.done = this.result[0] === this.result[1] ? 1 : 0;
            }
            this.result[a] &&
              ((this.installed = this.result[a].installed),
              (this.version = this.result[a].version));
            return this;
          },
        },
        codebase: {
          classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
          isMin: function (a) {
            var c = 0;
            this.$$ = l;
            b.isStrNum(a) &&
              ((a = a.split(b.splitNumRegx)),
              3 < a.length && 0 < parseInt(a[3], 10) && (a[3] = "9999"),
              (a = a.join(",")),
              (c = b.codebase.isMin(this, a)));
            return c;
          },
          search: function () {
            this.$$ = l;
            return b.codebase.search(this);
          },
          DIGITMAX: [[12, 11, 11], [7, 60], [7, 11, 11], 0, [7, 11, 11]],
          DIGITMIN: [5, 0, 0, 0],
          Upper: ["999", "7,60", "7,50", "7,6", "7,5"],
          Lower: ["7,60", "7,50", "7,6", "7,5", "0"],
          convert: [
            1,
            function (a, b) {
              return b
                ? [a[0], a[1] + a[2], a[3], "0"]
                : [a[0], a[1].charAt(0), a[1].charAt(1), a[2]];
            },
            1,
            0,
            1,
          ],
        },
        axo: {
          hasRun: 0,
          installed: 0,
          version: null,
          progID: [
            "QuickTimeCheckObject.QuickTimeCheck",
            "QuickTimeCheckObject.QuickTimeCheck.1",
          ],
          progID0: "QuickTime.QuickTime",
          query: function () {
            var a, c;
            c = this.hasRun || !b.browser.ActiveXEnabled;
            this.hasRun = 1;
            if (c) return this;
            for (c = 0; c < this.progID.length; c++)
              if ((a = b.getAXO(this.progID[c])))
                if (
                  ((this.installed = 1),
                  (a = b.pd.getPROP(a, "QuickTimeVersion")) && a.toString)
                )
                  if (
                    ((a = a.toString(16)),
                    (this.version =
                      parseInt(a.charAt(0) || "0", 16) +
                      "." +
                      parseInt(a.charAt(1) || "0", 16) +
                      "." +
                      parseInt(a.charAt(2) || "0", 16)),
                    !b.dbug)
                  )
                    break;
            return this;
          },
        },
      };
      b.addPlugin("quicktime", l);
      var k = {
        mimeType: "application/x-shockwave-flash",
        setPluginStatus: function (a, c, d) {
          this.installed = c ? 1 : a ? 0 : -1;
          this.precision = d;
          this.version = b.formatNum(c);
          this.getVersionDone = (a =
            (a = -1 == this.installed || this.instance.version) ||
            this.axo.version)
            ? 1
            : 0;
        },
        getPrecision: function (a) {
          if (b.isString(a)) {
            var c,
              d = ["\\d+", "\\d+", "\\d+", "\\d+"];
            for (c = 4; 0 < c; c--)
              if (RegExp(d.slice(0, c).join("[\\._,]")).test(a)) return c;
          }
          return 0;
        },
        getVersion: function (a, c) {
          var d = null,
            e = 0,
            f = 0;
          if ((!e || b.dbug) && this.navPlugin.query().installed) e = 1;
          if ((!d || b.dbug) && this.navPlugin.query().version)
            (d = this.navPlugin.version), (f = this.navPlugin.precision);
          if ((!e || b.dbug) && this.axo.query().installed) e = 1;
          if ((!d || b.dbug) && this.axo.query().version)
            (d = this.axo.version), (f = this.axo.precision);
          if (((!e && !d) || c || b.dbug) && this.instance.query().version)
            (e = 1), (d = this.instance.version), (f = this.instance.precision);
          this.setPluginStatus(e, d, f);
        },
        navPlugin: {
          hasRun: 0,
          installed: 0,
          precision: 0,
          version: null,
          getNum: function (a) {
            return !a
              ? null
              : (a = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(a))
              ? a[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "")
              : null;
          },
          query: function () {
            var a = k,
              c,
              d;
            d = this.hasRun || !b.hasMimeType(a.mimeType);
            this.hasRun = 1;
            if (d) return this;
            if (
              (d = b.pd.findNavPlugin({
                find: "Shockwave.*Flash",
                mimes: a.mimeType,
                plugins: ["Shockwave Flash"],
              }))
            )
              (this.installed = 1),
                d.description && (c = this.getNum(d.description));
            c && (c = b.getPluginFileVersion(d, c));
            c &&
              /(\d+[_,]\d+[_,]\d+[_,]\d+)[^\d]+$/.test(d.filename) &&
              (c = b.getPluginFileVersion(
                {
                  filename: RegExp.$1,
                  name: d.name,
                  description: d.description,
                },
                c,
                0,
                "filename"
              ));
            c && ((this.version = c), (this.precision = a.getPrecision(c)));
            return this;
          },
        },
        axo: {
          hasRun: 0,
          installed: 0,
          precision: 0,
          version: null,
          progID: "ShockwaveFlash.ShockwaveFlash",
          classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",
          query: function () {
            var a, c, d;
            a = this.hasRun;
            this.hasRun = 1;
            if (a) return this;
            for (c = 0; 10 > c; c++)
              if ((d = b.getAXO(this.progID + (c ? "." + c : "")))) {
                this.installed = 1;
                a = 0;
                try {
                  a = b.getNum(d.GetVariable("$version") + "");
                } catch (e) {}
                if (
                  a &&
                  ((this.version = a),
                  (this.precision = k.getPrecision(a)),
                  !b.dbug)
                )
                  break;
              }
            return this;
          },
        },
        instance: {
          hasRun: 0,
          precision: 0,
          version: null,
          HTML: null,
          HTML2: null,
          isEnabled: function () {
            var a = k,
              c = 1;
            if (
              this.hasRun ||
              b.DOM.isEnabled.objectTagUsingActiveX() ||
              !b.DOM.isEnabled.objectTag() ||
              !b.hasMimeType(a.mimeType)
            )
              c = 0;
            return c;
          },
          query: function () {
            var a = k,
              c,
              d = this.isEnabled();
            this.hasRun = 1;
            if (d) {
              this.HTML = b.DOM.insert(
                "object",
                ["type", a.mimeType],
                ["play", "false", "menu", "false"],
                "",
                a
              );
              try {
                (c = this.HTML.obj().GetVariable("$version") + ""),
                  (this.version = b.getNum(c));
              } catch (e) {}
              if (!this.version || b.dbug) {
                this.HTML2 = b.DOM.insert(
                  "embed",
                  ["type", a.mimeType, "play", "false", "menu", "false"],
                  [],
                  "",
                  a
                );
                try {
                  (c = this.HTML2.obj().GetVariable("$version") + ""),
                    (this.version = b.getNum(c));
                } catch (f) {}
              }
              this.precision = a.getPrecision(this.version);
            }
            return this;
          },
        },
      };
      b.addPlugin("flash", k);
      b.addPlugin("shockwave", {
        getVersion: function () {
          var a = null,
            c;
          if ((!c || b.dbug) && this.nav.query().installed) c = 1;
          if ((!a || b.dbug) && this.nav.query().version) a = this.nav.version;
          if ((!c || b.dbug) && this.axo.query().installed) c = 1;
          if ((!a || b.dbug) && this.axo.query().version) a = this.axo.version;
          this.installed = a ? 1 : c ? 0 : -1;
          this.version = b.formatNum(a);
        },
        nav: {
          hasRun: 0,
          installed: 0,
          version: null,
          mimeType: "application/x-director",
          query: function () {
            var a, c;
            c = this.hasRun || !b.hasMimeType(this.mimeType);
            this.hasRun = 1;
            if (c) return this;
            (c = b.pd.findNavPlugin({
              find: "Shockwave\\s*for\\s*Director",
              mimes: this.mimeType,
              plugins: "Shockwave for Director",
            })) &&
              c.description &&
              (a = b.getNum(c.description + ""));
            a && (a = b.getPluginFileVersion(c, a));
            c && (this.installed = 1);
            a && (this.version = a);
            return this;
          },
        },
        axo: {
          hasRun: 0,
          installed: null,
          version: null,
          progID:
            "SWCtl.SWCtl SWCtl.SWCtl.1 SWCtl.SWCtl.7 SWCtl.SWCtl.8 SWCtl.SWCtl.11 SWCtl.SWCtl.12".split(
              " "
            ),
          classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000",
          query: function () {
            var a, c, d, e;
            c = !this.hasRun;
            this.hasRun = 1;
            if (c)
              for (c = 0; c < this.progID.length; c++)
                if ((a = b.getAXO(this.progID[c]))) {
                  this.installed = 1;
                  e = "";
                  try {
                    e = a.ShockwaveVersion("") + "";
                  } catch (f) {}
                  /(\d[\d\.\,]*)(?:\s*r\s*(\d+))?/i.test(e) &&
                    ((a = RegExp.$2),
                    (d = b.formatNum(RegExp.$1)),
                    a &&
                      ((d = d.split(b.splitNumRegx)),
                      (d[3] = a),
                      (d = d.join(","))));
                  if (d && ((this.version = d), !b.dbug)) break;
                }
            return this;
          },
        },
      });
      var g = {
        setPluginStatus: function (a, c) {
          a && (this.version = b.formatNum(a));
          this.installed = this.version ? 1 : c ? 0 : -1;
          this.getVersionDone = 0 === this.installed ? 0 : 1;
        },
        getVersion: function (a, c) {
          var d,
            e = null;
          if ((!d || b.dbug) && this.nav.query().installed) d = 1;
          if ((!d || b.dbug) && this.axo.query().installed) d = 1;
          if ((!e || b.dbug) && this.axo.query().version) e = this.axo.version;
          if (((!d && !e) || c || b.dbug) && this.FirefoxPlugin.query().version)
            (d = 1), (e = this.FirefoxPlugin.version);
          this.setPluginStatus(e, d);
        },
        mimeType:
          "application/x-ms-wmp application/asx application/x-mplayer2 video/x-ms-asf video/x-ms-wm video/x-ms-asf-plugin".split(
            " "
          ),
        find: [
          "Microsoft.*Windows\\s*Media\\s*Player.*Firefox.*Plug-?in",
          "Windows\\s*Media\\s*Player\\s*Plug-?in\\s*Dynamic\\s*Link\\s*Library",
          "Flip4Mac.*Windows\\s*Media.*Plug-?in|Flip4Mac.*WMV.*Plug-?in",
        ],
        avoid: "Totem|VLC|RealPlayer|Helix",
        plugins: [
          "Microsoft" +
            String.fromCharCode(174) +
            " Windows Media Player Firefox Plugin",
          "Windows Media Player Plug-in Dynamic Link Library",
        ],
        nav: {
          hasRun: 0,
          installed: 0,
          query: function () {
            var a = g,
              c = this.hasRun || !b.hasMimeType(a.mimeType);
            this.hasRun = 1;
            if (c) return this;
            b.pd.findNavPlugin({
              find: a.find.join("|"),
              avoid: a.avoid,
              mimes: a.mimeType,
              plugins: a.plugins,
            }) && (this.installed = 1);
            return this;
          },
        },
        FirefoxPlugin: {
          hasRun: 0,
          version: null,
          isDisabled: function () {
            var a = g,
              c = b.browser;
            return this.hasRun ||
              (c.isGecko &&
                0 > b.compareNums(c.verGecko, b.formatNum("1.8"))) ||
              (c.isOpera && 0 > b.compareNums(c.verOpera, b.formatNum("10"))) ||
              b.DOM.isEnabled.objectTagUsingActiveX() ||
              !b.hasMimeType(a.mimeType) ||
              !b.pd.findNavPlugin({
                find: a.find[0],
                avoid: a.avoid,
                mimes: a.mimeType,
                plugins: a.plugins[0],
              })
              ? 1
              : 0;
          },
          query: function () {
            var a = g,
              c = this.isDisabled();
            this.hasRun = 1;
            if (c) return this;
            if (
              (a = b.pd.getPROP(
                b.DOM.insert(
                  "object",
                  ["type", b.hasMimeType(a.mimeType).type, "data", ""],
                  ["src", ""],
                  "",
                  a
                ).obj(),
                "versionInfo"
              ))
            )
              this.version = b.getNum(a);
            return this;
          },
        },
        axo: {
          hasRun: 0,
          installed: null,
          version: null,
          progID: ["WMPlayer.OCX", "WMPlayer.OCX.7"],
          classID: "clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",
          query: function () {
            var a, c;
            c = !this.hasRun;
            this.hasRun = 1;
            if (c)
              for (c = 0; c < this.progID.length; c++)
                if ((a = b.getAXO(this.progID[c])))
                  if (
                    ((this.installed = 1),
                    (a = b.pd.getPROP(a, "versionInfo", 0)) &&
                      (a = b.getNum(a)),
                    a && ((this.version = a), !b.dbug))
                  )
                    break;
            return this;
          },
        },
      };
      b.addPlugin("windowsmediaplayer", g);
      b.addPlugin("silverlight", {
        getVersion: function () {
          var a = null,
            c = 0;
          if ((!c || b.dbug) && this.nav.query().installed) c = 1;
          if ((!a || b.dbug) && this.nav.query().version) a = this.nav.version;
          if ((!c || b.dbug) && this.axo.query().installed) c = 1;
          if ((!a || b.dbug) && this.axo.query().version) a = this.axo.version;
          this.version = b.formatNum(a);
          this.installed = a ? 1 : c ? 0 : -1;
        },
        nav: {
          hasRun: 0,
          installed: 0,
          version: null,
          mimeType: [
            "application/x-silverlight",
            "application/x-silverlight-2",
          ],
          query: function () {
            var a, c;
            c = this.hasRun || !b.hasMimeType(this.mimeType);
            this.hasRun = 1;
            if (c) return this;
            if (
              (c = b.pd.findNavPlugin({
                find: "Silverlight.*Plug-?in",
                mimes: this.mimeType,
                plugins: "Silverlight Plug-In",
              }))
            )
              this.installed = 1;
            c &&
              c.description &&
              (a = b.formatNum(b.getNum(c.description + "")));
            a &&
              ((a = a.split(b.splitNumRegx)),
              2 > parseInt(a[0], 10) &&
                30226 <= parseInt(a[2], 10) &&
                (a[0] = "2"),
              (a = a.join(",")));
            a && (this.version = a);
            return this;
          },
        },
        axo: {
          hasRun: 0,
          installed: 0,
          version: null,
          progID: "AgControl.AgControl",
          maxdigit: [20, 10, 10, 100, 100, 10],
          mindigit: [0, 0, 0, 0, 0, 0],
          IsVersionSupported: function (a, c) {
            try {
              return this.testVersion
                ? 0 <=
                    b.compareNums(
                      b.formatNum(this.testVersion.join(",")),
                      b.formatNum(c.join(","))
                    )
                : a.IsVersionSupported(this.format(c));
            } catch (d) {}
            return 0;
          },
          format: function (a) {
            return (
              a[0] +
              "." +
              a[1] +
              "." +
              a[2] +
              this.make2digits(a[3]) +
              this.make2digits(a[4]) +
              "." +
              a[5]
            );
          },
          make2digits: function (a) {
            return (10 > a ? "0" : "") + a + "";
          },
          query: function () {
            var a, c;
            a = this.hasRun;
            this.hasRun = 1;
            if (a) return this;
            if ((c = b.getAXO(this.progID))) this.installed = 1;
            if (c && this.IsVersionSupported(c, this.mindigit)) {
              var d = [].concat(this.mindigit),
                e,
                f = 0;
              for (a = 0; a < this.maxdigit.length; a++) {
                for (e = 0; 1 < this.maxdigit[a] - this.mindigit[a] && 20 > e; )
                  e++,
                    f++,
                    (d[a] = Math.round(
                      (this.maxdigit[a] + this.mindigit[a]) / 2
                    )),
                    this.IsVersionSupported(c, d)
                      ? (this.mindigit[a] = d[a])
                      : (this.maxdigit[a] = d[a]);
                d[a] = this.mindigit[a];
              }
              this.version = this.format(d);
            }
            return this;
          },
        },
      });
      var i = {
        compareNums: function (a, c) {
          var d = a.split(b.splitNumRegx),
            e = c.split(b.splitNumRegx),
            f,
            g,
            h,
            i,
            k;
          for (f = 0; f < Math.min(d.length, e.length); f++) {
            /([\d]+)([a-z]?)/.test(d[f]);
            g = parseInt(RegExp.$1, 10);
            i = 2 == f && 0 < RegExp.$2.length ? RegExp.$2.charCodeAt(0) : -1;
            /([\d]+)([a-z]?)/.test(e[f]);
            h = parseInt(RegExp.$1, 10);
            k = 2 == f && 0 < RegExp.$2.length ? RegExp.$2.charCodeAt(0) : -1;
            if (g != h) return g > h ? 1 : -1;
            if (2 == f && i != k) return i > k ? 1 : -1;
          }
          return 0;
        },
        setPluginStatus: function (a, c, d) {
          this.installed = c ? 1 : d ? (0 < d ? 0.7 : -0.1) : a ? 0 : -1;
          c && (this.version = b.formatNum(c));
          this.getVersionDone =
            1 == this.installed || -1 == this.installed || this.instance.hasRun
              ? 1
              : 0;
        },
        getVersion: function (a, c) {
          var d,
            e = null,
            f;
          if ((!d || b.dbug) && this.nav.query().installed) d = 1;
          if ((!e || b.dbug) && this.nav.query().version) e = this.nav.version;
          if ((!d || b.dbug) && this.axo.query().installed) d = 1;
          if ((!e || b.dbug) && this.axo.query().version) e = this.axo.version;
          if (!e || b.dbug)
            if ((f = this.codebase.isMin(a))) {
              this.setPluginStatus(0, 0, f);
              return;
            }
          if (!e || b.dbug) if ((f = this.codebase.search())) (d = 1), (e = f);
          if ((!e && c) || b.dbug)
            if ((f = this.instance.query().version)) (d = 1), (e = f);
          this.setPluginStatus(d, e, 0);
        },
        nav: {
          hasRun: 0,
          installed: 0,
          version: null,
          mimeType:
            "application/x-vlc-plugin application/x-google-vlc-plugin application/mpeg4-muxcodetable application/x-matroska application/xspf+xml video/divx video/webm video/x-mpeg video/x-msvideo video/ogg audio/x-flac audio/amr audio/amr".split(
              " "
            ),
          find: "VLC.*Plug-?in",
          find2: "VLC|VideoLAN",
          avoid: "Totem|Helix",
          plugins: [
            "VLC Web Plugin",
            "VLC Multimedia Plug-in",
            "VLC Multimedia Plugin",
            "VLC multimedia plugin",
          ],
          query: function () {
            var a, c;
            c = this.hasRun || !b.hasMimeType(this.mimeType);
            this.hasRun = 1;
            if (c) return this;
            if (
              (c = b.pd.findNavPlugin({
                find: this.find,
                avoid: this.avoid,
                mimes: this.mimeType,
                plugins: this.plugins,
              }))
            )
              if (
                ((this.installed = 1),
                c.description &&
                  (a = b.getNum(c.description + "", "[\\d][\\d\\.]*[a-z]*")),
                (a = b.getPluginFileVersion(c, a)))
              )
                this.version = a;
            return this;
          },
        },
        instance: {
          hasRun: 0,
          installed: 0,
          version: null,
          mimeType: "application/x-vlc-plugin",
          HTML: 0,
          isDisabled: function () {
            var a = 1;
            this.hasRun ||
              (b.dbug
                ? (a = 0)
                : i.nav.installed && b.hasMimeType(this.mimeType) && (a = 0));
            return a;
          },
          query: function () {
            var a = b.DOM.altHTML,
              c = null,
              d = 0,
              d = this.isDisabled();
            this.hasRun = 1;
            if (d) return this;
            this.HTML = b.DOM.insert(
              "object",
              ["type", this.mimeType],
              "autoplay no loop no volume 0".split(" "),
              a,
              i
            );
            if ((d = this.HTML.obj())) {
              try {
                c || (c = b.getNum(d.VersionInfo));
              } catch (e) {}
              try {
                c || (c = b.getNum(d.versionInfo()));
              } catch (f) {}
            }
            c && ((this.version = c), (this.installed = 1));
            return this;
          },
        },
        axo: {
          hasRun: 0,
          installed: 0,
          version: null,
          progID: "VideoLAN.VLCPlugin",
          query: function () {
            var a;
            a = this.hasRun;
            this.hasRun = 1;
            if (a) return this;
            if ((a = b.getAXO(this.progID)))
              if (
                ((this.installed = 1),
                (a = b.getNum(
                  b.pd.getPROP(a, "VersionInfo"),
                  "[\\d][\\d\\.]*[a-z]*"
                )))
              )
                this.version = a;
            return this;
          },
        },
        codebase: {
          classID: "clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921",
          isMin: function (a) {
            this.$$ = i;
            return b.codebase.isMin(this, a);
          },
          search: function () {
            this.$$ = i;
            return b.codebase.search(this);
          },
          DIGITMAX: [[11, 11, 16]],
          DIGITMIN: [0, 0, 0, 0],
          Upper: ["999"],
          Lower: ["0"],
          convert: [1],
        },
      };
      b.addPlugin("vlc", i);
      var h = {
        OTF: null,
        setPluginStatus: function () {
          var a = this.OTF,
            c = this.nav.precision,
            d = this.nav.version,
            e = 0 < this.nav.detected,
            f = this.axo.detected,
            g = this.axo.version,
            h = this.axo.precision,
            i = this.doc.detected,
            k = this.doc.version,
            l = this.doc.precision,
            m = this.doc2.detected,
            n = this.doc2.precision,
            d = this.doc2.version || d || g || k,
            c = n || c || h || l,
            e = 0 < m || e || 0 < f || 0 < i,
            d = d || null;
          this.version = b.formatNum(d);
          this.precision = c;
          c = -1;
          if (3 == a) c = this.version ? 0.5 : -0.5;
          else if (d) c = 1;
          else if (e) c = 0;
          else if (-0.5 == f || -0.5 == i) c = -0.15;
          else if (
            b.browser.isIE &&
            (!b.browser.ActiveXEnabled || b.browser.ActiveXFilteringEnabled)
          )
            c = -1.5;
          this.installed = c;
          1 != this.getVersionDone &&
            ((a = 1),
            (this.verify && this.verify.isEnabled()) ||
            0.5 == this.installed ||
            -0.5 == this.installed
              ? (a = 0)
              : 1 == this.doc2.isDisabled() && (a = 0),
            (this.getVersionDone = a));
        },
        getVersion: function (a, c) {
          var d = 0,
            e = this.verify;
          null === this.getVersionDone && ((this.OTF = 0), e && e.init());
          b.file.save(this, ".pdf", c);
          if (0 !== this.getVersionDone) {
            if ((!d || b.dbug) && this.nav.query().version) d = 1;
            if ((!d || b.dbug) && this.axo.query().version) d = 1;
            (!d || b.dbug) && this.doc.query();
          }
          this.doc2.insertHTMLQuery();
          this.setPluginStatus();
        },
        getPrecision: function (a, c, d) {
          if (b.isString(a)) {
            var c = c || "",
              d = d || "",
              e,
              f = ["\\d+", "\\d+", "\\d+", "\\d+"];
            for (e = 4; 0 < e; e--)
              if (RegExp(c + f.slice(0, e).join("[\\.]") + d).test(a)) return e;
          }
          return 0;
        },
        nav: {
          detected: 0,
          version: null,
          precision: 0,
          mimeType: ["application/pdf", "application/vnd.adobe.pdfxml"],
          find: "Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in",
          plugins: [
            "Adobe Acrobat",
            "Adobe Acrobat and Reader Plug-in",
            "Adobe Reader Plugin",
          ],
          query: function () {
            var a,
              c = null;
            if (this.detected || !b.hasMimeType(this.mimeType)) return this;
            this.detected = (a = b.pd.findNavPlugin({
              find: this.find,
              mimes: this.mimeType,
              plugins: this.plugins,
            }))
              ? 1
              : -1;
            a &&
              ((c = b.getNum(a.description) || b.getNum(a.name)),
              (c = b.getPluginFileVersion(a, c)) || (c = this.attempt3()),
              c && ((this.version = c), (this.precision = h.getPrecision(c))));
            return this;
          },
          attempt3: function () {
            var a = null;
            1 == b.OS &&
              (b.hasMimeType("application/vnd.adobe.pdfxml")
                ? (a = "9")
                : b.hasMimeType("application/vnd.adobe.x-mars")
                ? (a = "8")
                : b.hasMimeType("application/vnd.adobe.xfdf") && (a = "6"));
            return a;
          },
        },
        activexQuery: function (a) {
          var c = "",
            d,
            e,
            f = { precision: 0, version: null };
          try {
            a && (c = a.GetVersions() + "");
          } catch (g) {}
          if (c && b.isString(c) && ((a = /\=\s*[\d\.]+/g), (e = c.match(a)))) {
            for (a = 0; a < e.length; a++)
              if (
                (d = b.formatNum(b.getNum(e[a]))) &&
                (!f.version || 0 < b.compareNums(d, f.version))
              )
                f.version = d;
            f.precision = h.getPrecision(c, "\\=\\s*");
          }
          return f;
        },
        axo: {
          detected: 0,
          version: null,
          precision: 0,
          progID: [
            "AcroPDF.PDF",
            "AcroPDF.PDF.1",
            "PDF.PdfCtrl",
            "PDF.PdfCtrl.5",
            "PDF.PdfCtrl.1",
          ],
          progID_dummy: "AcroDUMMY.DUMMY",
          query: function () {
            var a = h,
              c,
              d,
              e,
              f,
              g;
            if (this.detected) return this;
            this.detected = -1;
            c = b.getAXO(this.progID_dummy);
            c || (g = b.errObj);
            for (f = 0; f < this.progID.length; f++)
              if ((c = b.getAXO(this.progID[f]))) {
                if (
                  ((this.detected = 1),
                  (c = a.activexQuery(c)),
                  (d = c.version),
                  (e = c.precision),
                  !b.dbug && d)
                )
                  break;
              } else
                g &&
                  b.errObj &&
                  g !== b.errObj &&
                  g.message !== b.errObj.message &&
                  (this.detected = -0.5);
            d && (this.version = d);
            e && (this.precision = e);
            return this;
          },
        },
        doc: {
          detected: 0,
          version: null,
          precision: 0,
          classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
          classID_dummy: "clsid:CA8A9780-280D-11CF-A24D-BA9876543210",
          DummySpanTagHTML: 0,
          HTML: 0,
          DummyObjTagHTML1: 0,
          DummyObjTagHTML2: 0,
          isDisabled: function () {
            var a = 0;
            this.HTML
              ? (a = 1)
              : b.dbug || b.DOM.isEnabled.objectTagUsingActiveX() || (a = 1);
            return a;
          },
          query: function () {
            var a = h,
              c = b.DOM.altHTML,
              d;
            if (this.isDisabled()) return this;
            d = b.DOM.iframe.insert(99, "Adobe Reader");
            this.DummySpanTagHTML = b.DOM.insert("", [], [], c, a, 1, d);
            this.HTML = b.DOM.insert(
              "object",
              ["classid", this.classID],
              [],
              c,
              a,
              1,
              d
            );
            this.DummyObjTagHTML2 = b.DOM.insert(
              "object",
              ["classid", this.classID_dummy],
              [],
              c,
              a,
              1,
              d
            );
            b.DOM.iframe.close(d);
            c = b.DOM.getTagStatus(
              this.HTML,
              this.DummySpanTagHTML,
              this.DummyObjTagHTML1,
              this.DummyObjTagHTML2,
              0,
              0,
              1
            );
            d = a.activexQuery(this.HTML.obj());
            a = d.version;
            d = d.precision;
            this.detected = 0 < c || a ? 1 : -0.1 == c || -0.5 == c ? -0.5 : -1;
            a && (this.version = a);
            d && (this.precision = d);
            return this;
          },
        },
        doc2: {
          detected: 0,
          version: null,
          precision: 0,
          classID: "clsid:CA8A9780-280D-11CF-A24D-444553540000",
          mimeType: "application/pdf",
          HTML: 0,
          count: 0,
          count2: 0,
          time2: 0,
          intervalLength: 25,
          maxCount: 350,
          isDisabled: function () {
            var a = h,
              c = a.axo,
              d = a.nav,
              e = a.doc,
              f,
              g = 0;
            if (this.HTML) g = 2;
            else if (!b.dbug)
              if (b.DOM.isEnabled.objectTagUsingActiveX()) {
                if (
                  ((f =
                    (d ? d.version : 0) ||
                    (c ? c.version : 0) ||
                    (e ? e.version : 0) ||
                    0),
                  (c =
                    (d ? d.precision : 0) ||
                    (c ? c.precision : 0) ||
                    (e ? e.precision : 0) ||
                    0),
                  !f ||
                    !c ||
                    2 < c ||
                    0 > b.compareNums(b.formatNum(f), b.formatNum("11")))
                )
                  g = 2;
              } else g = 2;
            if (2 > g && ((a = b.file.getValid(a)), !a || !a.full)) g = 1;
            return g;
          },
          handlerSet: 0,
          onMessage: function () {
            var a = this;
            return function (c) {
              if (
                !a.version &&
                ((a.detected = 1),
                b.isArray(c) && (c = c[0]),
                (c = b.getNum(c + "")))
              )
                /^(\d+)[.,_]?$/.test(c)
                  ? ((c = RegExp.$1 + ",0,0,0"), (a.precision = 3))
                  : /^(\d+)[.,_](\d)(\d\d)$/.test(c) ||
                    /^(\d+)[.,_](\d\d\d)(\d\d\d\d\d)$/.test(c)
                  ? ((c = RegExp.$1 + "," + RegExp.$2 + "," + RegExp.$3 + ",0"),
                    (a.precision = 3))
                  : /^(\d+)[.,_](\d\d\d)(\d\d\d\d\d)(\d+)$/.test(c)
                  ? ((c =
                      RegExp.$1 +
                      "," +
                      RegExp.$2 +
                      "," +
                      RegExp.$3 +
                      "," +
                      RegExp.$4),
                    (a.precision = 4))
                  : /^(\d+)[.,_](\d)(\d)$/.test(c)
                  ? ((c = RegExp.$1 + "," + RegExp.$2 + "," + RegExp.$3 + ",0"),
                    (a.precision = 3))
                  : /^(\d+)[.,_](\d)$/.test(c) &&
                    ((c = RegExp.$1 + "," + RegExp.$2 + ",0,0"),
                    (a.precision = 3)),
                  (a.version = b.formatNum(c)),
                  h.setPluginStatus();
            };
          },
          isDefinedMsgHandler: function (a, b) {
            try {
              return a ? a.messageHandler !== b : 0;
            } catch (d) {}
            return 1;
          },
          queryObject: function () {
            var a = this.HTML;
            if ((a = a ? a.obj() : 0)) {
              if (!this.handlerSet && this.isDefinedMsgHandler(a)) {
                try {
                  a.messageHandler = { onMessage: this.onMessage() };
                } catch (b) {}
                this.handlerSet = 1;
                this.count2 = this.count;
                this.time2 = new Date().getTime();
              }
              this.detected ||
                (3 < this.count && !this.handlerSet
                  ? (this.detected = -1)
                  : this.time2 &&
                    this.count - this.count2 >= this.maxCount &&
                    new Date().getTime() - this.time2 >=
                      this.intervalLength * this.maxCount &&
                    (this.detected = -0.5));
            }
          },
          insertHTMLQuery: function () {
            var a = h,
              c = b.DOM.altHTML,
              d,
              e;
            if (this.isDisabled()) return this;
            2 > a.OTF && (a.OTF = 2);
            d = b.file.getValid(a).full;
            e = b.DOM.iframe.insert(0, "Adobe Reader");
            b.DOM.iframe.write(e, '<script type="text/javascript"></script>');
            this.HTML = b.DOM.insert(
              "object",
              ["data", d].concat(
                b.browser.isIE
                  ? ["classid", this.classID]
                  : ["type", this.mimeType]
              ),
              ["src", d],
              c,
              a,
              0,
              e
            );
            b.DOM.iframe.addHandler(e, this.onIntervalQuery);
            3 > a.OTF && this.HTML && (a.OTF = 3);
            b.DOM.iframe.close(e);
            return this;
          },
          onIntervalQuery: function () {
            var a = h,
              c = a.doc2;
            c.count++;
            3 == a.OTF && (c.queryObject(), c.detected && c.queryCompleted());
            3 == a.OTF && b.ev.setTimeout(c.onIntervalQuery, c.intervalLength);
          },
          queryCompleted: function () {
            var a = h;
            4 != a.OTF &&
              ((a.OTF = 4), a.setPluginStatus(), b.ev.callArray(a.DoneHndlrs));
          },
          z: 0,
        },
      };
      b.addPlugin("adobereader", h);
      var m = {
        mimeType: ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"],
        classID: "clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA",
        setPluginStatus: function (a, c) {
          var d;
          c && (this.version = b.formatNum(b.getNum(c)));
          this.installed = this.version ? 1 : a ? 0 : -1;
          this.getVersionDone = (d =
            (d = -1 == this.installed || this.instance.version) ||
            this.axo.version)
            ? 1
            : 0;
        },
        navObj: {
          hasRun: 0,
          installed: null,
          version: null,
          find: "RealPlayer.*Plug-?in",
          avoid: "Totem|QuickTime|Helix|VLC|Download",
          plugins: [
            "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit) ",
            "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (64-bit) ",
            "RealPlayer Plugin",
          ],
          query: function () {
            var a = m,
              c = !this.hasRun && b.hasMimeType(a.mimeType);
            this.hasRun = 1;
            if (
              c &&
              ((this.installed = (a = b.pd.findNavPlugin({
                find: this.find,
                avoid: this.avoid,
                mimes: a.mimeType,
                plugins: this.plugins,
              }))
                ? 1
                : 0),
              (a = b.getPluginFileVersion(a)) &&
                0 <= b.compareNums(b.formatNum(a), b.formatNum("15")))
            )
              this.version = a;
            return this;
          },
        },
        JS: {
          hasRun: 0,
          version: null,
          regStr: "RealPlayer.*Version.*Plug-?in",
          mimetype: "application/vnd.rn-realplayer-javascript",
          q1: [
            [11, 0, 0],
            [999],
            [663],
            [663],
            [663],
            [660],
            [468],
            [468],
            [468],
            [468],
            [468],
            [468],
            [431],
            [431],
            [431],
            [372],
            [180],
            [180],
            [172],
            [172],
            [167],
            [114],
            [0],
          ],
          q3: [
            [6, 0],
            [12, 99],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 69],
            [12, 46],
            [12, 46],
            [12, 46],
            [11, 3006],
            [11, 2806],
            [11, 2806],
            [11, 2804],
            [11, 2804],
            [11, 2799],
            [11, 2749],
            [11, 2700],
          ],
          compare: function (a, b) {
            var d,
              e = a.length,
              f = b.length,
              g,
              h;
            for (d = 0; d < Math.max(e, f); d++) {
              g = d < e ? a[d] : 0;
              h = d < f ? b[d] : 0;
              if (g > h) return 1;
              if (g < h) return -1;
            }
            return 0;
          },
          convertNum: function (a, c, d) {
            var e;
            if (!a || !(e = b.formatNum(a))) return null;
            e = e.split(b.splitNumRegx);
            for (a = 0; a < e.length; a++) e[a] = parseInt(e[a], 10);
            if (
              0 !==
              this.compare(e.slice(0, Math.min(c[0].length, e.length)), c[0])
            )
              return null;
            e = e.length > c[0].length ? e.slice(c[0].length) : [];
            if (
              0 < this.compare(e, c[1]) ||
              0 > this.compare(e, c[c.length - 1])
            )
              return null;
            for (
              a = c.length - 1;
              1 <= a &&
              1 != a &&
              !(
                0 === this.compare(c[a], e) &&
                0 === this.compare(c[a], c[a - 1])
              ) &&
              !(0 <= this.compare(e, c[a]) && 0 > this.compare(e, c[a - 1]));
              a--
            );
            return d[0].join(".") + "." + d[a].join(".");
          },
          isEnabled: function () {
            return !this.hasRun && 1 == b.OS && b.hasMimeType(this.mimetype)
              ? 1
              : 0;
          },
          query: function () {
            var a, c;
            c = this.isEnabled();
            this.hasRun = 1;
            if (
              c &&
              ((c = b.pd.findNavPlugin({
                find: this.regStr,
                mimes: this.mimetype,
              })) && (a = b.formatNum(b.getNum(c.description))),
              a)
            ) {
              var d = a.split(b.splitNumRegx);
              c = 1;
              0 > this.compare(d, [6, 0, 12, 200])
                ? (c = -1)
                : 0 >= this.compare(d, [6, 0, 12, 1739]) &&
                  0 <= this.compare(d, [6, 0, 12, 857]) &&
                  (c = -1);
              0 > c &&
                (this.version = (c = this.convertNum(a, this.q3, this.q1))
                  ? c
                  : a);
            }
            return this;
          },
        },
        instance: {
          hasRun: 0,
          version: null,
          HTML: null,
          isEnabled: function () {
            var a = m,
              c = 1;
            if (b.DOM.isEnabled.objectTag()) {
              if (
                !b.dbug &&
                (this.hasRun ||
                  b.DOM.isEnabled.objectTagUsingActiveX() ||
                  !b.hasMimeType(a.mimeType) ||
                  (b.browser.isGecko &&
                    0 >
                      b.compareNums(b.browser.verGecko, b.formatNum("1,8"))) ||
                  (b.browser.isOpera &&
                    0 > b.compareNums(b.browser.verOpera, b.formatNum("10"))))
              )
                c = 0;
            } else c = 0;
            return c;
          },
          query: function () {
            var a = m,
              c = this.isEnabled();
            this.hasRun = 1;
            if (c) {
              this.HTML = b.DOM.insert(
                "object",
                ["type", a.mimeType[0]],
                "src  autostart false imagestatus false controls stopbutton".split(
                  " "
                ),
                "",
                a
              );
              a = this.HTML.obj();
              try {
                this.version = b.getNum(a.GetVersionInfo());
              } catch (d) {}
              b.DOM.setStyle(a, ["display", "none"]);
            }
            return this;
          },
        },
        axo: {
          hasRun: 0,
          installed: null,
          version: null,
          progID: [
            "rmocx.RealPlayer G2 Control",
            "rmocx.RealPlayer G2 Control.1",
            "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
            "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
            "RealPlayer",
          ],
          query: function () {
            var a, c, d;
            if (!this.hasRun) {
              this.hasRun = 1;
              for (c = 0; c < this.progID.length; c++)
                if ((a = b.getAXO(this.progID[c]))) {
                  this.installed = 1;
                  d = 0;
                  try {
                    d = a.GetVersionInfo() + "";
                  } catch (e) {}
                  if (d && ((this.version = d), !b.dbug)) break;
                }
            }
            return this;
          },
        },
        getVersion: function (a, c) {
          var d = null,
            e = 0;
          if ((!e || b.dbug) && this.axo.query().installed) e = 1;
          if ((!d || b.dbug) && this.axo.query().version) d = this.axo.version;
          if ((!e || b.dbug) && this.navObj.query().installed) e = 1;
          if ((!d || b.dbug) && this.navObj.query().version)
            d = this.navObj.version;
          if ((!d || b.dbug) && this.JS.query().version)
            (e = 1), (d = this.JS.version);
          if (((!e && !d) || c || b.dbug) && this.instance.query().version)
            (e = 1), (d = this.instance.version);
          this.setPluginStatus(e, d);
        },
      };
      b.addPlugin("realplayer", m);
    })();
    for (
      var R = new Date().getTime(),
        w = document,
        n = navigator,
        r = screen,
        o = window,
        q = o.encodeURIComponent,
        O = o.decodeURIComponent,
        E = "hexagon-analytics.com",
        v,
        S = 0,
        G = "__ssid",
        A,
        B,
        z,
        F,
        y,
        P = 4,
        N = 105,
        Q = 100,
        H = (function () {
          for (
            var b = 3, l = document.createElement("b"), k = l.all || [];
            (l.innerHTML = "<!--[if gt IE " + ++b + "]><i><![endif]-->"), k[0];

          );
          return 4 < b ? b : document.documentMode;
        })(),
        x = {
          _trackPageview: function () {
            M();
          },
          _setAccount: function (b) {
            F = b;
          },
          _setUserId: function (b) {
            z = b;
          },
          _setPartnerUserId: function (b) {
            B = b;
          },
          _setSessionId: function (b) {
            A = b;
          },
          _setTrackerUrl: function (b) {
            E = b;
          },
          _setCookieDomain: function (b) {
            y = b;
          },
          _setFlash: function (b) {
            v = b;
          },
        },
        C = 0;
      C < _sift.length;
      C++
    )
      I(_sift[C]);
    _sift = { push: I };
  })();
//1585773938
