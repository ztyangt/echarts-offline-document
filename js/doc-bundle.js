!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("Vue"), require("CodeMirror"), require("beautifier")))
    : "function" == typeof define && define.amd
    ? define(["Vue", "CodeMirror", "beautifier"], t)
    : "object" == typeof exports
    ? (exports.echartsDoc = t(require("Vue"), require("CodeMirror"), require("beautifier")))
    : (e.echartsDoc = t(e.Vue, e.CodeMirror, e.beautifier));
})(window, function (e, t, n) {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var a = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
          for (var a in e)
            n.d(
              r,
              a,
              function (t) {
                return e[t];
              }.bind(null, a)
            );
        return r;
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
      n((n.s = 54))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      (function (n) {
        var r, a, i;
        (a = function (e) {
          var t = !1,
            r = [],
            a = Object.keys,
            i = Object.create(null),
            o = Object.create(null),
            s = !0,
            l = /^(no-?highlight|plain|text)$/i,
            c = /\blang(?:uage)?-([\w-]+)\b/i,
            u = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
            h = "Could not find the language '{}', did you forget to load/include a language module?",
            p = {
              hideUpgradeWarningAcceptNoSupportOrSecurityUpdates: !1,
              classPrefix: "hljs-",
              tabReplace: null,
              useBR: !1,
              languages: void 0,
            },
            f = "of and for in not or if then".split(" ");
          function d(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          function m(e) {
            return e.nodeName.toLowerCase();
          }
          function v(e) {
            return l.test(e);
          }
          function g(e) {
            var t,
              n = {},
              r = Array.prototype.slice.call(arguments, 1);
            for (t in e) n[t] = e[t];
            return (
              r.forEach(function (e) {
                for (t in e) n[t] = e[t];
              }),
              n
            );
          }
          function _(e) {
            var t = [];
            return (
              (function e(n, r) {
                for (var a = n.firstChild; a; a = a.nextSibling)
                  3 === a.nodeType
                    ? (r += a.nodeValue.length)
                    : 1 === a.nodeType &&
                      (t.push({ event: "start", offset: r, node: a }),
                      (r = e(a, r)),
                      m(a).match(/br|hr|img|input/) || t.push({ event: "stop", offset: r, node: a }));
                return r;
              })(e, 0),
              t
            );
          }
          function y(e) {
            return (
              e.variants &&
                !e.cached_variants &&
                (e.cached_variants = e.variants.map(function (t) {
                  return g(e, { variants: null }, t);
                })),
              e.cached_variants
                ? e.cached_variants
                : (function e(t) {
                    return !!t && (t.endsWithParent || e(t.starts));
                  })(e)
                ? [g(e, { starts: e.starts ? g(e.starts) : null })]
                : Object.isFrozen(e)
                ? [g(e)]
                : [e]
            );
          }
          function b(e, t) {
            return t ? Number(t) : ((n = e), -1 != f.indexOf(n.toLowerCase()) ? 0 : 1);
            var n;
          }
          function x(e) {
            function t(e) {
              return (e && e.source) || e;
            }
            function n(n, r) {
              return new RegExp(t(n), "m" + (e.case_insensitive ? "i" : "") + (r ? "g" : ""));
            }
            function r(e) {
              var r,
                a,
                i = {},
                o = [],
                s = {},
                l = 1;
              function c(e, t) {
                (i[l] = e),
                  o.push([e, t]),
                  (l +=
                    (function (e) {
                      return new RegExp(e.toString() + "|").exec("").length - 1;
                    })(t) + 1);
              }
              for (var u = 0; u < e.contains.length; u++) c((a = e.contains[u]), a.beginKeywords ? "\\.?(?:" + a.begin + ")\\.?" : a.begin);
              e.terminator_end && c("end", e.terminator_end), e.illegal && c("illegal", e.illegal);
              var h = o.map(function (e) {
                return e[1];
              });
              return (
                (r = n(
                  (function (e, n) {
                    for (var r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, a = 0, i = "", o = 0; o < e.length; o++) {
                      var s = (a += 1),
                        l = t(e[o]);
                      for (o > 0 && (i += n), i += "("; l.length > 0; ) {
                        var c = r.exec(l);
                        if (null == c) {
                          i += l;
                          break;
                        }
                        (i += l.substring(0, c.index)),
                          (l = l.substring(c.index + c[0].length)),
                          "\\" == c[0][0] && c[1] ? (i += "\\" + String(Number(c[1]) + s)) : ((i += c[0]), "(" == c[0] && a++);
                      }
                      i += ")";
                    }
                    return i;
                  })(h, "|"),
                  !0
                )),
                (s.lastIndex = 0),
                (s.exec = function (t) {
                  var n;
                  if (0 === o.length) return null;
                  r.lastIndex = s.lastIndex;
                  var a = r.exec(t);
                  if (!a) return null;
                  for (var l = 0; l < a.length; l++)
                    if (null != a[l] && null != i["" + l]) {
                      n = i["" + l];
                      break;
                    }
                  return (
                    "string" == typeof n ? ((a.type = n), (a.extra = [e.illegal, e.terminator_end])) : ((a.type = "begin"), (a.rule = n)), a
                  );
                }),
                s
              );
            }
            if (e.contains && -1 != e.contains.indexOf("self")) {
              if (!s) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
              e.contains = e.contains.filter(function (e) {
                return "self" != e;
              });
            }
            !(function i(o, s) {
              o.compiled ||
                ((o.compiled = !0),
                (o.keywords = o.keywords || o.beginKeywords),
                o.keywords &&
                  (o.keywords = (function (e, t) {
                    var n = {};
                    return (
                      "string" == typeof e
                        ? r("keyword", e)
                        : a(e).forEach(function (t) {
                            r(t, e[t]);
                          }),
                      n
                    );
                    function r(e, r) {
                      t && (r = r.toLowerCase()),
                        r.split(" ").forEach(function (t) {
                          var r = t.split("|");
                          n[r[0]] = [e, b(r[0], r[1])];
                        });
                    }
                  })(o.keywords, e.case_insensitive)),
                (o.lexemesRe = n(o.lexemes || /\w+/, !0)),
                s &&
                  (o.beginKeywords && (o.begin = "\\b(" + o.beginKeywords.split(" ").join("|") + ")\\b"),
                  o.begin || (o.begin = /\B|\b/),
                  (o.beginRe = n(o.begin)),
                  o.endSameAsBegin && (o.end = o.begin),
                  o.end || o.endsWithParent || (o.end = /\B|\b/),
                  o.end && (o.endRe = n(o.end)),
                  (o.terminator_end = t(o.end) || ""),
                  o.endsWithParent && s.terminator_end && (o.terminator_end += (o.end ? "|" : "") + s.terminator_end)),
                o.illegal && (o.illegalRe = n(o.illegal)),
                null == o.relevance && (o.relevance = 1),
                o.contains || (o.contains = []),
                (o.contains = Array.prototype.concat.apply(
                  [],
                  o.contains.map(function (e) {
                    return y("self" === e ? o : e);
                  })
                )),
                o.contains.forEach(function (e) {
                  i(e, o);
                }),
                o.starts && i(o.starts, s),
                (o.terminators = r(o)));
            })(e);
          }
          function E(e, r, a, o) {
            p.hideUpgradeWarningAcceptNoSupportOrSecurityUpdates ||
              ("object" == typeof n && "object" == typeof n.env && n.env.HLJS_HIDE_UPGRADE_WARNING) ||
              t ||
              ((t = !0),
              console.log(
                "Version 9 of Highlight.js has reached EOL and is no longer supported.\nPlease upgrade or ask whatever dependency you are using to upgrade.\nhttps://github.com/highlightjs/highlight.js/issues/2877"
              ));
            var l = r;
            function c(e, t) {
              var n = b.case_insensitive ? t[0].toLowerCase() : t[0];
              return e.keywords.hasOwnProperty(n) && e.keywords[n];
            }
            function u(e, t, n, r) {
              if (!n && "" === t) return "";
              if (!e) return t;
              var a = '<span class="' + (r ? "" : p.classPrefix);
              return (a += e + '">') + t + (n ? "" : "</span>");
            }
            function f() {
              (M +=
                null != O.subLanguage
                  ? (function () {
                      var e = "string" == typeof O.subLanguage;
                      if (e && !i[O.subLanguage]) return d(T);
                      var t = e ? E(O.subLanguage, T, !0, S[O.subLanguage]) : w(T, O.subLanguage.length ? O.subLanguage : void 0);
                      return O.relevance > 0 && (N += t.relevance), e && (S[O.subLanguage] = t.top), u(t.language, t.value, !1, !0);
                    })()
                  : (function () {
                      var e, t, n, r;
                      if (!O.keywords) return d(T);
                      for (r = "", t = 0, O.lexemesRe.lastIndex = 0, n = O.lexemesRe.exec(T); n; )
                        (r += d(T.substring(t, n.index))),
                          (e = c(O, n)) ? ((N += e[1]), (r += u(e[0], d(n[0])))) : (r += d(n[0])),
                          (t = O.lexemesRe.lastIndex),
                          (n = O.lexemesRe.exec(T));
                      return r + d(T.substr(t));
                    })()),
                (T = "");
            }
            function m(e) {
              (M += e.className ? u(e.className, "", !0) : ""), (O = Object.create(e, { parent: { value: O } }));
            }
            function v(e) {
              var t = e[0],
                n = e.rule;
              return (
                n && n.endSameAsBegin && (n.endRe = new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")),
                n.skip ? (T += t) : (n.excludeBegin && (T += t), f(), n.returnBegin || n.excludeBegin || (T = t)),
                m(n),
                n.returnBegin ? 0 : t.length
              );
            }
            function g(e) {
              var t = e[0],
                n = l.substr(e.index),
                r = (function e(t, n) {
                  if (
                    (function (e, t) {
                      var n = e && e.exec(t);
                      return n && 0 === n.index;
                    })(t.endRe, n)
                  ) {
                    for (; t.endsParent && t.parent; ) t = t.parent;
                    return t;
                  }
                  if (t.endsWithParent) return e(t.parent, n);
                })(O, n);
              if (r) {
                var a = O;
                a.skip ? (T += t) : (a.returnEnd || a.excludeEnd || (T += t), f(), a.excludeEnd && (T = t));
                do {
                  O.className && (M += "</span>"), O.skip || O.subLanguage || (N += O.relevance), (O = O.parent);
                } while (O !== r.parent);
                return r.starts && (r.endSameAsBegin && (r.starts.endRe = r.endRe), m(r.starts)), a.returnEnd ? 0 : t.length;
              }
            }
            var _ = {};
            function y(e, t) {
              var n = t && t[0];
              if (((T += e), null == n)) return f(), 0;
              if ("begin" == _.type && "end" == t.type && _.index == t.index && "" === n) return (T += l.slice(t.index, t.index + 1)), 1;
              if ("illegal" === _.type && "" === n) return (T += l.slice(t.index, t.index + 1)), 1;
              if (((_ = t), "begin" === t.type)) return v(t);
              if ("illegal" === t.type && !a) throw new Error('Illegal lexeme "' + n + '" for mode "' + (O.className || "<unnamed>") + '"');
              if ("end" === t.type) {
                var r = g(t);
                if (null != r) return r;
              }
              return (T += n), n.length;
            }
            var b = k(e);
            if (!b) throw (console.error(h.replace("{}", e)), new Error('Unknown language: "' + e + '"'));
            x(b);
            var C,
              O = o || b,
              S = {},
              M = "";
            for (C = O; C !== b; C = C.parent) C.className && (M = u(C.className, "", !0) + M);
            var T = "",
              N = 0;
            try {
              for (var A, I, R = 0; (O.terminators.lastIndex = R), (A = O.terminators.exec(l)); )
                (I = y(l.substring(R, A.index), A)), (R = A.index + I);
              for (y(l.substr(R)), C = O; C.parent; C = C.parent) C.className && (M += "</span>");
              return { relevance: N, value: M, illegal: !1, language: e, top: O };
            } catch (t) {
              if (t.message && -1 !== t.message.indexOf("Illegal")) return { illegal: !0, relevance: 0, value: d(l) };
              if (s) return { relevance: 0, value: d(l), language: e, top: O, errorRaised: t };
              throw t;
            }
          }
          function w(e, t) {
            t = t || p.languages || a(i);
            var n = { relevance: 0, value: d(e) },
              r = n;
            return (
              t
                .filter(k)
                .filter(T)
                .forEach(function (t) {
                  var a = E(t, e, !1);
                  (a.language = t), a.relevance > r.relevance && (r = a), a.relevance > n.relevance && ((r = n), (n = a));
                }),
              r.language && (n.second_best = r),
              n
            );
          }
          function C(e) {
            return p.tabReplace || p.useBR
              ? e.replace(u, function (e, t) {
                  return p.useBR && "\n" === e ? "<br>" : p.tabReplace ? t.replace(/\t/g, p.tabReplace) : "";
                })
              : e;
          }
          function O(e) {
            var t,
              n,
              a,
              i,
              s,
              l = (function (e) {
                var t,
                  n,
                  r,
                  a,
                  i = e.className + " ";
                if (((i += e.parentNode ? e.parentNode.className : ""), (n = c.exec(i)))) {
                  var o = k(n[1]);
                  return (
                    o || (console.warn(h.replace("{}", n[1])), console.warn("Falling back to no-highlight mode for this block.", e)),
                    o ? n[1] : "no-highlight"
                  );
                }
                for (t = 0, r = (i = i.split(/\s+/)).length; t < r; t++) if (v((a = i[t])) || k(a)) return a;
              })(e);
            v(l) ||
              (p.useBR
                ? ((t = document.createElement("div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n"))
                : (t = e),
              (s = t.textContent),
              (a = l ? E(l, s, !0) : w(s)),
              (n = _(t)).length &&
                (((i = document.createElement("div")).innerHTML = a.value),
                (a.value = (function (e, t, n) {
                  var a = 0,
                    i = "",
                    o = [];
                  function s() {
                    return e.length && t.length
                      ? e[0].offset !== t[0].offset
                        ? e[0].offset < t[0].offset
                          ? e
                          : t
                        : "start" === t[0].event
                        ? e
                        : t
                      : e.length
                      ? e
                      : t;
                  }
                  function l(e) {
                    i +=
                      "<" +
                      m(e) +
                      r.map
                        .call(e.attributes, function (e) {
                          return " " + e.nodeName + '="' + d(e.value).replace(/"/g, "&quot;") + '"';
                        })
                        .join("") +
                      ">";
                  }
                  function c(e) {
                    i += "</" + m(e) + ">";
                  }
                  function u(e) {
                    ("start" === e.event ? l : c)(e.node);
                  }
                  for (; e.length || t.length; ) {
                    var h = s();
                    if (((i += d(n.substring(a, h[0].offset))), (a = h[0].offset), h === e)) {
                      o.reverse().forEach(c);
                      do {
                        u(h.splice(0, 1)[0]), (h = s());
                      } while (h === e && h.length && h[0].offset === a);
                      o.reverse().forEach(l);
                    } else "start" === h[0].event ? o.push(h[0].node) : o.pop(), u(h.splice(0, 1)[0]);
                  }
                  return i + d(n.substr(a));
                })(n, _(i), s))),
              (a.value = C(a.value)),
              (e.innerHTML = a.value),
              (e.className = (function (e, t, n) {
                var r = t ? o[t] : n,
                  a = [e.trim()];
                return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim();
              })(e.className, l, a.language)),
              (e.result = { language: a.language, re: a.relevance }),
              a.second_best && (e.second_best = { language: a.second_best.language, re: a.second_best.relevance }));
          }
          function S() {
            if (!S.called) {
              S.called = !0;
              var e = document.querySelectorAll("pre code");
              r.forEach.call(e, O);
            }
          }
          var M = { disableAutodetect: !0 };
          function k(e) {
            return (e = (e || "").toLowerCase()), i[e] || i[o[e]];
          }
          function T(e) {
            var t = k(e);
            return t && !t.disableAutodetect;
          }
          return (
            (e.highlight = E),
            (e.highlightAuto = w),
            (e.fixMarkup = C),
            (e.highlightBlock = O),
            (e.configure = function (e) {
              p = g(p, e);
            }),
            (e.initHighlighting = S),
            (e.initHighlightingOnLoad = function () {
              window.addEventListener("DOMContentLoaded", S, !1), window.addEventListener("load", S, !1);
            }),
            (e.registerLanguage = function (t, n) {
              var r;
              try {
                r = n(e);
              } catch (e) {
                if ((console.error("Language definition for '{}' could not be registered.".replace("{}", t)), !s)) throw e;
                console.error(e), (r = M);
              }
              (i[t] = r),
                (r.rawDefinition = n.bind(null, e)),
                r.aliases &&
                  r.aliases.forEach(function (e) {
                    o[e] = t;
                  });
            }),
            (e.listLanguages = function () {
              return a(i);
            }),
            (e.getLanguage = k),
            (e.requireLanguage = function (e) {
              var t = k(e);
              if (t) return t;
              throw new Error("The '{}' language is required, but not loaded.".replace("{}", e));
            }),
            (e.autoDetection = T),
            (e.inherit = g),
            (e.debugMode = function () {
              s = !1;
            }),
            (e.IDENT_RE = "[a-zA-Z]\\w*"),
            (e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*"),
            (e.NUMBER_RE = "\\b\\d+(\\.\\d+)?"),
            (e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
            (e.BINARY_NUMBER_RE = "\\b(0b[01]+)"),
            (e.RE_STARTERS_RE =
              "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
            (e.BACKSLASH_ESCAPE = { begin: "\\\\[\\s\\S]", relevance: 0 }),
            (e.APOS_STRING_MODE = { className: "string", begin: "'", end: "'", illegal: "\\n", contains: [e.BACKSLASH_ESCAPE] }),
            (e.QUOTE_STRING_MODE = { className: "string", begin: '"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE] }),
            (e.PHRASAL_WORDS_MODE = {
              begin:
                /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
            }),
            (e.COMMENT = function (t, n, r) {
              var a = e.inherit({ className: "comment", begin: t, end: n, contains: [] }, r || {});
              return (
                a.contains.push(e.PHRASAL_WORDS_MODE),
                a.contains.push({ className: "doctag", begin: "(?:TODO|FIXME|NOTE|BUG|XXX):", relevance: 0 }),
                a
              );
            }),
            (e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$")),
            (e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/")),
            (e.HASH_COMMENT_MODE = e.COMMENT("#", "$")),
            (e.NUMBER_MODE = { className: "number", begin: e.NUMBER_RE, relevance: 0 }),
            (e.C_NUMBER_MODE = { className: "number", begin: e.C_NUMBER_RE, relevance: 0 }),
            (e.BINARY_NUMBER_MODE = { className: "number", begin: e.BINARY_NUMBER_RE, relevance: 0 }),
            (e.CSS_NUMBER_MODE = {
              className: "number",
              begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
              relevance: 0,
            }),
            (e.REGEXP_MODE = {
              className: "regexp",
              begin: /\//,
              end: /\/[gimuy]*/,
              illegal: /\n/,
              contains: [e.BACKSLASH_ESCAPE, { begin: /\[/, end: /\]/, relevance: 0, contains: [e.BACKSLASH_ESCAPE] }],
            }),
            (e.TITLE_MODE = { className: "title", begin: e.IDENT_RE, relevance: 0 }),
            (e.UNDERSCORE_TITLE_MODE = { className: "title", begin: e.UNDERSCORE_IDENT_RE, relevance: 0 }),
            (e.METHOD_GUARD = { begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE, relevance: 0 }),
            [
              e.BACKSLASH_ESCAPE,
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              e.PHRASAL_WORDS_MODE,
              e.COMMENT,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              e.HASH_COMMENT_MODE,
              e.NUMBER_MODE,
              e.C_NUMBER_MODE,
              e.BINARY_NUMBER_MODE,
              e.CSS_NUMBER_MODE,
              e.REGEXP_MODE,
              e.TITLE_MODE,
              e.UNDERSCORE_TITLE_MODE,
              e.METHOD_GUARD,
            ].forEach(function (e) {
              !(function e(t) {
                Object.freeze(t);
                var n = "function" == typeof t;
                return (
                  Object.getOwnPropertyNames(t).forEach(function (r) {
                    !t.hasOwnProperty(r) ||
                      null === t[r] ||
                      ("object" != typeof t[r] && "function" != typeof t[r]) ||
                      (n && ("caller" === r || "callee" === r || "arguments" === r)) ||
                      Object.isFrozen(t[r]) ||
                      e(t[r]);
                  }),
                  t
                );
              })(e);
            }),
            e
          );
        }),
          (i = ("object" == typeof window && window) || ("object" == typeof self && self)),
          t.nodeType
            ? i &&
              ((i.hljs = a({})),
              void 0 ===
                (r = function () {
                  return i.hljs;
                }.apply(t, [])) || (e.exports = r))
            : a(t);
      }).call(this, n(52));
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t) {
      function n(e, t, n) {
        Math.max(0, t), Math.max(0, n), e.self === e ? e.scrollTo(t, n) : ((e.scrollLeft = t), (e.scrollTop = n));
      }
      function r(e) {
        var t = e._scrollSettings;
        if (t) {
          var a = t.maxSynchronousAlignments,
            i = (function (e, t) {
              var n,
                r,
                a,
                i,
                o,
                s,
                l,
                c = e.align,
                u = e.target.getBoundingClientRect(),
                h = c && null != c.left ? c.left : 0.5,
                p = c && null != c.top ? c.top : 0.5,
                f = c && null != c.leftOffset ? c.leftOffset : 0,
                d = c && null != c.topOffset ? c.topOffset : 0,
                m = h,
                v = p;
              if (e.isWindow(t))
                (s = Math.min(u.width, t.innerWidth)),
                  (l = Math.min(u.height, t.innerHeight)),
                  (r = u.left + t.pageXOffset - t.innerWidth * m + s * m),
                  (a = u.top + t.pageYOffset - t.innerHeight * v + l * v),
                  (r -= f),
                  (a -= d),
                  (r = e.align.lockX ? t.pageXOffset : r),
                  (a = e.align.lockY ? t.pageYOffset : a),
                  (i = r - t.pageXOffset),
                  (o = a - t.pageYOffset);
              else {
                (s = u.width), (l = u.height), (n = t.getBoundingClientRect());
                var g = u.left - (n.left - t.scrollLeft),
                  _ = u.top - (n.top - t.scrollTop);
                (r = g + s * m - t.clientWidth * m),
                  (a = _ + l * v - t.clientHeight * v),
                  (r -= f),
                  (a -= d),
                  (r = Math.max(Math.min(r, t.scrollWidth - t.clientWidth), 0)),
                  (a = Math.max(Math.min(a, t.scrollHeight - t.clientHeight), 0)),
                  (r = e.align.lockX ? t.scrollLeft : r),
                  (a = e.align.lockY ? t.scrollTop : a),
                  (i = r - t.scrollLeft),
                  (o = a - t.scrollTop);
              }
              return { x: r, y: a, differenceX: i, differenceY: o };
            })(t, e),
            o = Date.now() - t.startTime,
            s = Math.min((1 / t.time) * o, 1);
          if (t.endIterations >= a) return n(e, i.x, i.y), (e._scrollSettings = null), t.end("complete");
          var l = 1 - t.ease(s);
          if ((n(e, i.x - i.differenceX * l, i.y - i.differenceY * l), o >= t.time))
            return t.endIterations++, t.scrollAncestor && r(t.scrollAncestor), void r(e);
          !(function (e) {
            if ("requestAnimationFrame" in window) return window.requestAnimationFrame(e);
            setTimeout(e, 16);
          })(r.bind(null, e));
        }
      }
      function a(e) {
        return e.self === e;
      }
      function i(e) {
        return (
          "pageXOffset" in e ||
          ((e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth) && "hidden" !== getComputedStyle(e).overflow)
        );
      }
      function o() {
        return !0;
      }
      function s(e) {
        if (e.assignedSlot) return s(e.assignedSlot);
        if (e.parentElement)
          return "body" === e.parentElement.tagName.toLowerCase()
            ? e.parentElement.ownerDocument.defaultView || e.parentElement.ownerDocument.ownerWindow
            : e.parentElement;
        if (e.getRootNode) {
          var t = e.getRootNode();
          if (11 === t.nodeType) return t.host;
        }
      }
      e.exports = function (e, t, n) {
        if (e) {
          "function" == typeof t && ((n = t), (t = null)),
            t || (t = {}),
            (t.time = isNaN(t.time) ? 1e3 : t.time),
            (t.ease =
              t.ease ||
              function (e) {
                return 1 - Math.pow(1 - e, e / 2);
              }),
            (t.align = t.align || {});
          var l = s(e),
            c = 1,
            u = t.validTarget || o,
            h = t.isScrollable;
          t.debug && (console.log("About to scroll to", e), l || console.error("Target did not have a parent, is it mounted in the DOM?"));
          for (var p = []; l; )
            if ((t.debug && console.log("Scrolling parent node", l), u(l, c) && (h ? h(l, i) : i(l)) && (c++, p.push(l)), !(l = s(l)))) {
              f("complete");
              break;
            }
          return p.reduce(
            (n, i, o) =>
              (function (e, t, n, i, o) {
                var s,
                  l = !t._scrollSettings,
                  c = t._scrollSettings,
                  u = Date.now(),
                  h = { passive: !0 };
                function p(e) {
                  (t._scrollSettings = null),
                    t.parentElement && t.parentElement._scrollSettings && t.parentElement._scrollSettings.end(e),
                    n.debug && console.log("Scrolling ended with type", e, "for", t),
                    o(e),
                    s && (t.removeEventListener("touchstart", s, h), t.removeEventListener("wheel", s, h));
                }
                c && c.end("canceled");
                var f = n.maxSynchronousAlignments;
                return (
                  null == f && (f = 3),
                  (t._scrollSettings = {
                    startTime: u,
                    endIterations: 0,
                    target: e,
                    time: n.time,
                    ease: n.ease,
                    align: n.align,
                    isWindow: n.isWindow || a,
                    maxSynchronousAlignments: f,
                    end: p,
                    scrollAncestor: i,
                  }),
                  ("cancellable" in n && !n.cancellable) ||
                    ((s = p.bind(null, "canceled")), t.addEventListener("touchstart", s, h), t.addEventListener("wheel", s, h)),
                  l && r(t),
                  s
                );
              })(e, i, t, p[o + 1], f),
            null
          );
        }
        function f(e) {
          --c || (n && n(e));
        }
      };
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.stringSimilarity = void 0);
      (t.stringSimilarity = function (e, t, n, r) {
        if (
          (void 0 === n && (n = 2),
          void 0 === r && (r = !1),
          r || ((e = e.toLowerCase()), (t = t.toLowerCase())),
          e.length < n || t.length < n)
        )
          return 0;
        for (var a = new Map(), i = 0; i < e.length - (n - 1); i++) {
          var o = e.substr(i, n);
          a.set(o, a.has(o) ? a.get(o) + 1 : 1);
        }
        for (var s = 0, l = 0; l < t.length - (n - 1); l++) {
          var c = t.substr(l, n),
            u = a.has(c) ? a.get(c) : 0;
          u > 0 && (a.set(c, u - 1), s++);
        }
        return (2 * s) / (e.length + t.length - 2 * (n - 1));
      }),
        (t.default = t.stringSimilarity);
    },
    ,
    function (e, t) {
      e.exports.getDocJSONPVarNname = function (e) {
        return (
          "__EC_DOC_" +
          (e = e
            .replace(/\.js$/, "")
            .replace(/\.json$/, "")
            .replace(/[-.\/]/g, "_"))
        );
      };
    },
    function (e, t, n) {
      var r, a;
      function i() {
        return (i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function o(e) {
        return (o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      !(function (i, s) {
        "object" === o(t) && void 0 !== e
          ? (e.exports = s())
          : void 0 === (a = "function" == typeof (r = s) ? r.call(t, n, t, e) : r) || (e.exports = a);
      })(0, function () {
        "use strict";
        var e = "undefined" != typeof window,
          t =
            (e && !("onscroll" in window)) ||
            ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
          n = e && "IntersectionObserver" in window,
          r = e && "classList" in document.createElement("p"),
          a = {
            elements_selector: "img",
            container: t || e ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_poster: "poster",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            callback_enter: null,
            callback_exit: null,
            callback_reveal: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            use_native: !1,
          },
          o = function (e, t) {
            var n,
              r = new e(t);
            try {
              n = new CustomEvent("LazyLoad::Initialized", { detail: { instance: r } });
            } catch (e) {
              (n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, { instance: r });
            }
            window.dispatchEvent(n);
          },
          s = function (e, t) {
            return e.getAttribute("data-" + t);
          },
          l = function (e, t, n) {
            var r = "data-" + t;
            null !== n ? e.setAttribute(r, n) : e.removeAttribute(r);
          },
          c = function (e) {
            return "true" === s(e, "was-processed");
          },
          u = function (e, t) {
            return l(e, "ll-timeout", t);
          },
          h = function (e) {
            return s(e, "ll-timeout");
          },
          p = function (e, t, n, r) {
            e && (void 0 === r ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, r));
          },
          f = function (e, t) {
            (e.loadingCount += t), 0 === e._elements.length && 0 === e.loadingCount && p(e._settings.callback_finish, e);
          },
          d = function (e) {
            for (var t, n = [], r = 0; (t = e.children[r]); r += 1) "SOURCE" === t.tagName && n.push(t);
            return n;
          },
          m = function (e, t, n) {
            n && e.setAttribute(t, n);
          },
          v = function (e, t) {
            m(e, "sizes", s(e, t.data_sizes)), m(e, "srcset", s(e, t.data_srcset)), m(e, "src", s(e, t.data_src));
          },
          g = {
            IMG: function (e, t) {
              var n = e.parentNode;
              n &&
                "PICTURE" === n.tagName &&
                d(n).forEach(function (e) {
                  v(e, t);
                }),
                v(e, t);
            },
            IFRAME: function (e, t) {
              m(e, "src", s(e, t.data_src));
            },
            VIDEO: function (e, t) {
              d(e).forEach(function (e) {
                m(e, "src", s(e, t.data_src));
              }),
                m(e, "poster", s(e, t.data_poster)),
                m(e, "src", s(e, t.data_src)),
                e.load();
            },
          },
          _ = function (e, t) {
            r ? e.classList.add(t) : (e.className += (e.className ? " " : "") + t);
          },
          y = function (e, t) {
            r
              ? e.classList.remove(t)
              : (e.className = e.className
                  .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                  .replace(/^\s+/, "")
                  .replace(/\s+$/, ""));
          },
          b = function (e, t, n) {
            e.addEventListener(t, n);
          },
          x = function (e, t, n) {
            e.removeEventListener(t, n);
          },
          E = function (e, t, n) {
            x(e, "load", t), x(e, "loadeddata", t), x(e, "error", n);
          },
          w = function (e, t, n) {
            var r = n._settings,
              a = t ? r.class_loaded : r.class_error,
              i = t ? r.callback_loaded : r.callback_error,
              o = e.target;
            y(o, r.class_loading), _(o, a), p(i, o, n), f(n, -1);
          },
          C = ["IMG", "IFRAME", "VIDEO"],
          O = function (e, t) {
            var n = t._observer;
            M(e, t), n && t._settings.auto_unobserve && n.unobserve(e);
          },
          S = function (e) {
            var t = h(e);
            t && (clearTimeout(t), u(e, null));
          },
          M = function (e, t, n) {
            var r = t._settings;
            (!n && c(e)) ||
              (C.indexOf(e.tagName) > -1 &&
                ((function (e, t) {
                  var n = function n(a) {
                      w(a, !0, t), E(e, n, r);
                    },
                    r = function r(a) {
                      w(a, !1, t), E(e, n, r);
                    };
                  !(function (e, t, n) {
                    b(e, "load", t), b(e, "loadeddata", t), b(e, "error", n);
                  })(e, n, r);
                })(e, t),
                _(e, r.class_loading)),
              (function (e, t) {
                var n,
                  r,
                  a = t._settings,
                  i = e.tagName,
                  o = g[i];
                if (o)
                  return (
                    o(e, a),
                    f(t, 1),
                    void (t._elements =
                      ((n = t._elements),
                      (r = e),
                      n.filter(function (e) {
                        return e !== r;
                      })))
                  );
                !(function (e, t) {
                  var n = s(e, t.data_src),
                    r = s(e, t.data_bg);
                  n && (e.style.backgroundImage = 'url("'.concat(n, '")')), r && (e.style.backgroundImage = r);
                })(e, a);
              })(e, t),
              (function (e) {
                l(e, "was-processed", "true");
              })(e),
              p(r.callback_reveal, e, t),
              p(r.callback_set, e, t));
          },
          k = function (e) {
            return (
              !!n &&
              ((e._observer = new IntersectionObserver(
                function (t) {
                  t.forEach(function (t) {
                    return (function (e) {
                      return e.isIntersecting || e.intersectionRatio > 0;
                    })(t)
                      ? (function (e, t, n) {
                          var r = n._settings;
                          p(r.callback_enter, e, t, n),
                            r.load_delay
                              ? (function (e, t) {
                                  var n = t._settings.load_delay,
                                    r = h(e);
                                  r ||
                                    ((r = setTimeout(function () {
                                      O(e, t), S(e);
                                    }, n)),
                                    u(e, r));
                                })(e, n)
                              : O(e, n);
                        })(t.target, t, e)
                      : (function (e, t, n) {
                          var r = n._settings;
                          p(r.callback_exit, e, t, n), r.load_delay && S(e);
                        })(t.target, t, e);
                  });
                },
                { root: (t = e._settings).container === document ? null : t.container, rootMargin: t.thresholds || t.threshold + "px" }
              )),
              !0)
            );
            var t;
          },
          T = ["IMG", "IFRAME"],
          N = function (e, t) {
            return (function (e) {
              return e.filter(function (e) {
                return !c(e);
              });
            })(
              ((n =
                e ||
                (function (e) {
                  return e.container.querySelectorAll(e.elements_selector);
                })(t)),
              Array.prototype.slice.call(n))
            );
            var n;
          },
          A = function (t, n) {
            var r;
            (this._settings = (function (e) {
              return i({}, a, e);
            })(t)),
              (this.loadingCount = 0),
              k(this),
              this.update(n),
              (r = this),
              e &&
                window.addEventListener("online", function (e) {
                  !(function (e) {
                    var t = e._settings;
                    t.container.querySelectorAll("." + t.class_error).forEach(function (e) {
                      y(e, t.class_error),
                        (function (e) {
                          l(e, "was-processed", null);
                        })(e);
                    }),
                      e.update();
                  })(r);
                });
          };
        return (
          (A.prototype = {
            update: function (e) {
              var n,
                r = this,
                a = this._settings;
              (this._elements = N(e, a)),
                !t && this._observer
                  ? ((function (e) {
                      return e.use_native && "loading" in HTMLImageElement.prototype;
                    })(a) &&
                      ((n = this)._elements.forEach(function (e) {
                        -1 !== T.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"), M(e, n));
                      }),
                      (this._elements = N(e, a))),
                    this._elements.forEach(function (e) {
                      r._observer.observe(e);
                    }))
                  : this.loadAll();
            },
            destroy: function () {
              var e = this;
              this._observer &&
                (this._elements.forEach(function (t) {
                  e._observer.unobserve(t);
                }),
                (this._observer = null)),
                (this._elements = null),
                (this._settings = null);
            },
            load: function (e, t) {
              M(e, this, t);
            },
            loadAll: function () {
              var e = this;
              this._elements.forEach(function (t) {
                O(t, e);
              });
            },
          }),
          e &&
            (function (e, t) {
              if (t)
                if (t.length) for (var n, r = 0; (n = t[r]); r += 1) o(e, n);
                else o(e, t);
            })(A, window.lazyLoadOptions),
          A
        );
      });
    },
    function (e, n) {
      e.exports = t;
    },
    function (e, t) {
      e.exports = n;
    },
    function (e, t, n) {
      var r,
        a = (function () {
          var e = String.fromCharCode,
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
            r = {};
          function a(e, t) {
            if (!r[e]) {
              r[e] = {};
              for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
            }
            return r[e][t];
          }
          var i = {
            compressToBase64: function (e) {
              if (null == e) return "";
              var n = i._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + "===";
                case 2:
                  return n + "==";
                case 3:
                  return n + "=";
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : i._decompress(e.length, 32, function (n) {
                    return a(t, e.charAt(n));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ""
                : i._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + " ";
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : i._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (var t = i.compress(e), n = new Uint8Array(2 * t.length), r = 0, a = t.length; r < a; r++) {
                var o = t.charCodeAt(r);
                (n[2 * r] = o >>> 8), (n[2 * r + 1] = o % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (t) {
              if (null == t) return i.decompress(t);
              for (var n = new Array(t.length / 2), r = 0, a = n.length; r < a; r++) n[r] = 256 * t[2 * r] + t[2 * r + 1];
              var o = [];
              return (
                n.forEach(function (t) {
                  o.push(e(t));
                }),
                i.decompress(o.join(""))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : i._compress(e, 6, function (e) {
                    return n.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : ((e = e.replace(/ /g, "+")),
                  i._decompress(e.length, 32, function (t) {
                    return a(n, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return i._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return "";
              var r,
                a,
                i,
                o = {},
                s = {},
                l = "",
                c = "",
                u = "",
                h = 2,
                p = 3,
                f = 2,
                d = [],
                m = 0,
                v = 0;
              for (i = 0; i < e.length; i += 1)
                if (
                  ((l = e.charAt(i)),
                  Object.prototype.hasOwnProperty.call(o, l) || ((o[l] = p++), (s[l] = !0)),
                  (c = u + l),
                  Object.prototype.hasOwnProperty.call(o, c))
                )
                  u = c;
                else {
                  if (Object.prototype.hasOwnProperty.call(s, u)) {
                    if (u.charCodeAt(0) < 256) {
                      for (r = 0; r < f; r++) (m <<= 1), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++;
                      for (a = u.charCodeAt(0), r = 0; r < 8; r++)
                        (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
                    } else {
                      for (a = 1, r = 0; r < f; r++) (m = (m << 1) | a), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a = 0);
                      for (a = u.charCodeAt(0), r = 0; r < 16; r++)
                        (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
                    }
                    0 == --h && ((h = Math.pow(2, f)), f++), delete s[u];
                  } else
                    for (a = o[u], r = 0; r < f; r++)
                      (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
                  0 == --h && ((h = Math.pow(2, f)), f++), (o[c] = p++), (u = String(l));
                }
              if ("" !== u) {
                if (Object.prototype.hasOwnProperty.call(s, u)) {
                  if (u.charCodeAt(0) < 256) {
                    for (r = 0; r < f; r++) (m <<= 1), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++;
                    for (a = u.charCodeAt(0), r = 0; r < 8; r++)
                      (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
                  } else {
                    for (a = 1, r = 0; r < f; r++) (m = (m << 1) | a), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a = 0);
                    for (a = u.charCodeAt(0), r = 0; r < 16; r++)
                      (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
                  }
                  0 == --h && ((h = Math.pow(2, f)), f++), delete s[u];
                } else
                  for (a = o[u], r = 0; r < f; r++)
                    (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
                0 == --h && ((h = Math.pow(2, f)), f++);
              }
              for (a = 2, r = 0; r < f; r++) (m = (m << 1) | (1 & a)), v == t - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (a >>= 1);
              for (;;) {
                if (((m <<= 1), v == t - 1)) {
                  d.push(n(m));
                  break;
                }
                v++;
              }
              return d.join("");
            },
            decompress: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : i._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, n, r) {
              var a,
                i,
                o,
                s,
                l,
                c,
                u,
                h = [],
                p = 4,
                f = 4,
                d = 3,
                m = "",
                v = [],
                g = { val: r(0), position: n, index: 1 };
              for (a = 0; a < 3; a += 1) h[a] = a;
              for (o = 0, l = Math.pow(2, 2), c = 1; c != l; )
                (s = g.val & g.position),
                  (g.position >>= 1),
                  0 == g.position && ((g.position = n), (g.val = r(g.index++))),
                  (o |= (s > 0 ? 1 : 0) * c),
                  (c <<= 1);
              switch (o) {
                case 0:
                  for (o = 0, l = Math.pow(2, 8), c = 1; c != l; )
                    (s = g.val & g.position),
                      (g.position >>= 1),
                      0 == g.position && ((g.position = n), (g.val = r(g.index++))),
                      (o |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  u = e(o);
                  break;
                case 1:
                  for (o = 0, l = Math.pow(2, 16), c = 1; c != l; )
                    (s = g.val & g.position),
                      (g.position >>= 1),
                      0 == g.position && ((g.position = n), (g.val = r(g.index++))),
                      (o |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  u = e(o);
                  break;
                case 2:
                  return "";
              }
              for (h[3] = u, i = u, v.push(u); ; ) {
                if (g.index > t) return "";
                for (o = 0, l = Math.pow(2, d), c = 1; c != l; )
                  (s = g.val & g.position),
                    (g.position >>= 1),
                    0 == g.position && ((g.position = n), (g.val = r(g.index++))),
                    (o |= (s > 0 ? 1 : 0) * c),
                    (c <<= 1);
                switch ((u = o)) {
                  case 0:
                    for (o = 0, l = Math.pow(2, 8), c = 1; c != l; )
                      (s = g.val & g.position),
                        (g.position >>= 1),
                        0 == g.position && ((g.position = n), (g.val = r(g.index++))),
                        (o |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (h[f++] = e(o)), (u = f - 1), p--;
                    break;
                  case 1:
                    for (o = 0, l = Math.pow(2, 16), c = 1; c != l; )
                      (s = g.val & g.position),
                        (g.position >>= 1),
                        0 == g.position && ((g.position = n), (g.val = r(g.index++))),
                        (o |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (h[f++] = e(o)), (u = f - 1), p--;
                    break;
                  case 2:
                    return v.join("");
                }
                if ((0 == p && ((p = Math.pow(2, d)), d++), h[u])) m = h[u];
                else {
                  if (u !== f) return null;
                  m = i + i.charAt(0);
                }
                v.push(m), (h[f++] = i + m.charAt(0)), (i = m), 0 == --p && ((p = Math.pow(2, d)), d++);
              }
            },
          };
          return i;
        })();
      void 0 ===
        (r = function () {
          return a;
        }.call(t, n, t, e)) || (e.exports = r);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n;
      }).call(this, n(44));
    },
    function (e, t) {
      e.exports = function (e) {
        var t = "<>",
          n = "</>",
          r = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/ },
          a = "[A-Za-z$_][0-9A-Za-z$_]*",
          i = {
            keyword:
              "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in:
              "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
          },
          o = {
            className: "number",
            variants: [{ begin: "\\b(0[bB][01]+)n?" }, { begin: "\\b(0[oO][0-7]+)n?" }, { begin: e.C_NUMBER_RE + "n?" }],
            relevance: 0,
          },
          s = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: i, contains: [] },
          l = { begin: "html`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, s], subLanguage: "xml" } },
          c = { begin: "css`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, s], subLanguage: "css" } },
          u = { className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, s] };
        s.contains = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, c, u, o, e.REGEXP_MODE];
        var h = s.contains.concat([e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]);
        return {
          aliases: ["js", "jsx", "mjs", "cjs"],
          keywords: i,
          contains: [
            { className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ },
            { className: "meta", begin: /^#!/, end: /$/ },
            e.APOS_STRING_MODE,
            e.QUOTE_STRING_MODE,
            l,
            c,
            u,
            e.C_LINE_COMMENT_MODE,
            e.COMMENT("/\\*\\*", "\\*/", {
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+",
                  contains: [
                    { className: "type", begin: "\\{", end: "\\}", relevance: 0 },
                    { className: "variable", begin: a + "(?=\\s*(-)|$)", endsParent: !0, relevance: 0 },
                    { begin: /(?=[^\n])\s/, relevance: 0 },
                  ],
                },
              ],
            }),
            e.C_BLOCK_COMMENT_MODE,
            o,
            {
              begin: /[{,\n]\s*/,
              relevance: 0,
              contains: [{ begin: a + "\\s*:", returnBegin: !0, relevance: 0, contains: [{ className: "attr", begin: a, relevance: 0 }] }],
            },
            {
              begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
              keywords: "return throw case",
              contains: [
                e.C_LINE_COMMENT_MODE,
                e.C_BLOCK_COMMENT_MODE,
                e.REGEXP_MODE,
                {
                  className: "function",
                  begin: "(\\(.*?\\)|" + a + ")\\s*=>",
                  returnBegin: !0,
                  end: "\\s*=>",
                  contains: [
                    {
                      className: "params",
                      variants: [
                        { begin: a },
                        { begin: /\(\s*\)/ },
                        { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: i, contains: h },
                      ],
                    },
                  ],
                },
                { className: "", begin: /\s/, end: /\s*/, skip: !0 },
                {
                  variants: [
                    { begin: t, end: n },
                    { begin: r.begin, end: r.end },
                  ],
                  subLanguage: "xml",
                  contains: [{ begin: r.begin, end: r.end, skip: !0, contains: ["self"] }],
                },
              ],
              relevance: 0,
            },
            {
              className: "function",
              beginKeywords: "function",
              end: /\{/,
              excludeEnd: !0,
              contains: [
                e.inherit(e.TITLE_MODE, { begin: a }),
                { className: "params", begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, contains: h },
              ],
              illegal: /\[|%/,
            },
            { begin: /\$[(.]/ },
            e.METHOD_GUARD,
            {
              className: "class",
              beginKeywords: "class",
              end: /[{;=]/,
              excludeEnd: !0,
              illegal: /[:"\[\]]/,
              contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE],
            },
            { beginKeywords: "constructor get set", end: /\{/, excludeEnd: !0 },
          ],
          illegal: /#(?!!)/,
        };
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = {
            keyword:
              "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
            literal: "true false null undefined NaN Infinity",
            built_in:
              "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise",
          },
          n = { className: "meta", begin: "@[A-Za-z$_][0-9A-Za-z$_]*" },
          r = { begin: "\\(", end: /\)/, keywords: t, contains: ["self", e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.NUMBER_MODE] },
          a = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: t,
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, r],
          },
          i = {
            className: "number",
            variants: [{ begin: "\\b(0[bB][01]+)n?" }, { begin: "\\b(0[oO][0-7]+)n?" }, { begin: e.C_NUMBER_RE + "n?" }],
            relevance: 0,
          },
          o = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: t, contains: [] },
          s = { begin: "html`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, o], subLanguage: "xml" } },
          l = { begin: "css`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, o], subLanguage: "css" } },
          c = { className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, o] };
        return (
          (o.contains = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, s, l, c, i, e.REGEXP_MODE]),
          {
            aliases: ["ts"],
            keywords: t,
            contains: [
              { className: "meta", begin: /^\s*['"]use strict['"]/ },
              e.APOS_STRING_MODE,
              e.QUOTE_STRING_MODE,
              s,
              l,
              c,
              e.C_LINE_COMMENT_MODE,
              e.C_BLOCK_COMMENT_MODE,
              i,
              {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [
                  e.C_LINE_COMMENT_MODE,
                  e.C_BLOCK_COMMENT_MODE,
                  e.REGEXP_MODE,
                  {
                    className: "function",
                    begin: "(\\(.*?\\)|" + e.IDENT_RE + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [
                      {
                        className: "params",
                        variants: [
                          { begin: e.IDENT_RE },
                          { begin: /\(\s*\)/ },
                          {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: t,
                            contains: ["self", e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                          },
                        ],
                      },
                    ],
                  },
                ],
                relevance: 0,
              },
              {
                className: "function",
                beginKeywords: "function",
                end: /[\{;]/,
                excludeEnd: !0,
                keywords: t,
                contains: ["self", e.inherit(e.TITLE_MODE, { begin: "[A-Za-z$_][0-9A-Za-z$_]*" }), a],
                illegal: /%/,
                relevance: 0,
              },
              { beginKeywords: "constructor", end: /[\{;]/, excludeEnd: !0, contains: ["self", a] },
              { begin: /module\./, keywords: { built_in: "module" }, relevance: 0 },
              { beginKeywords: "module", end: /\{/, excludeEnd: !0 },
              { beginKeywords: "interface", end: /\{/, excludeEnd: !0, keywords: "interface extends" },
              { begin: /\$[(.]/ },
              { begin: "\\." + e.IDENT_RE, relevance: 0 },
              n,
              r,
            ],
          }
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = { className: "symbol", begin: "&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;" },
          n = { begin: "\\s", contains: [{ className: "meta-keyword", begin: "#?[a-z_][a-z1-9_-]+", illegal: "\\n" }] },
          r = e.inherit(n, { begin: "\\(", end: "\\)" }),
          a = e.inherit(e.APOS_STRING_MODE, { className: "meta-string" }),
          i = e.inherit(e.QUOTE_STRING_MODE, { className: "meta-string" }),
          o = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [
              { className: "attr", begin: "[A-Za-z0-9\\._:-]+", relevance: 0 },
              {
                begin: /=\s*/,
                relevance: 0,
                contains: [
                  {
                    className: "string",
                    endsParent: !0,
                    variants: [{ begin: /"/, end: /"/, contains: [t] }, { begin: /'/, end: /'/, contains: [t] }, { begin: /[^\s"'=<>`]+/ }],
                  },
                ],
              },
            ],
          };
        return {
          aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
          case_insensitive: !0,
          contains: [
            {
              className: "meta",
              begin: "<![a-z]",
              end: ">",
              relevance: 10,
              contains: [
                n,
                i,
                a,
                r,
                { begin: "\\[", end: "\\]", contains: [{ className: "meta", begin: "<![a-z]", end: ">", contains: [n, r, i, a] }] },
              ],
            },
            e.COMMENT("\x3c!--", "--\x3e", { relevance: 10 }),
            { begin: "<\\!\\[CDATA\\[", end: "\\]\\]>", relevance: 10 },
            t,
            { className: "meta", begin: /<\?xml/, end: /\?>/, relevance: 10 },
            {
              begin: /<\?(php)?/,
              end: /\?>/,
              subLanguage: "php",
              contains: [
                { begin: "/\\*", end: "\\*/", skip: !0 },
                { begin: 'b"', end: '"', skip: !0 },
                { begin: "b'", end: "'", skip: !0 },
                e.inherit(e.APOS_STRING_MODE, { illegal: null, className: null, contains: null, skip: !0 }),
                e.inherit(e.QUOTE_STRING_MODE, { illegal: null, className: null, contains: null, skip: !0 }),
              ],
            },
            {
              className: "tag",
              begin: "<style(?=\\s|>)",
              end: ">",
              keywords: { name: "style" },
              contains: [o],
              starts: { end: "</style>", returnEnd: !0, subLanguage: ["css", "xml"] },
            },
            {
              className: "tag",
              begin: "<script(?=\\s|>)",
              end: ">",
              keywords: { name: "script" },
              contains: [o],
              starts: { end: "</script>", returnEnd: !0, subLanguage: ["actionscript", "javascript", "handlebars", "xml"] },
            },
            { className: "tag", begin: "</?", end: "/?>", contains: [{ className: "name", begin: /[^\/><\s]+/, relevance: 0 }, o] },
          ],
        };
      };
    },
    function (e, t, n) {
      /*!***************************************************
       * mark.js v8.11.1
       * https://markjs.io/
       * Copyright (c) 2014–2018, Julian Kühnel
       * Released under the MIT license https://git.io/vwTVl
       *****************************************************/
      e.exports = (function () {
        "use strict";
        var e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                },
          t = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          },
          n = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          a = (function () {
            function e(n) {
              var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5e3;
              t(this, e), (this.ctx = n), (this.iframes = r), (this.exclude = a), (this.iframesTimeout = i);
            }
            return (
              n(
                e,
                [
                  {
                    key: "getContexts",
                    value: function () {
                      var e = [];
                      return (
                        (void 0 !== this.ctx && this.ctx
                          ? NodeList.prototype.isPrototypeOf(this.ctx)
                            ? Array.prototype.slice.call(this.ctx)
                            : Array.isArray(this.ctx)
                            ? this.ctx
                            : "string" == typeof this.ctx
                            ? Array.prototype.slice.call(document.querySelectorAll(this.ctx))
                            : [this.ctx]
                          : []
                        ).forEach(function (t) {
                          var n =
                            e.filter(function (e) {
                              return e.contains(t);
                            }).length > 0;
                          -1 !== e.indexOf(t) || n || e.push(t);
                        }),
                        e
                      );
                    },
                  },
                  {
                    key: "getIframeContents",
                    value: function (e, t) {
                      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
                        r = void 0;
                      try {
                        var a = e.contentWindow;
                        if (((r = a.document), !a || !r)) throw new Error("iframe inaccessible");
                      } catch (e) {
                        n();
                      }
                      r && t(r);
                    },
                  },
                  {
                    key: "isIframeBlank",
                    value: function (e) {
                      var t = "about:blank",
                        n = e.getAttribute("src").trim();
                      return e.contentWindow.location.href === t && n !== t && n;
                    },
                  },
                  {
                    key: "observeIframeLoad",
                    value: function (e, t, n) {
                      var r = this,
                        a = !1,
                        i = null,
                        o = function o() {
                          if (!a) {
                            (a = !0), clearTimeout(i);
                            try {
                              r.isIframeBlank(e) || (e.removeEventListener("load", o), r.getIframeContents(e, t, n));
                            } catch (e) {
                              n();
                            }
                          }
                        };
                      e.addEventListener("load", o), (i = setTimeout(o, this.iframesTimeout));
                    },
                  },
                  {
                    key: "onIframeReady",
                    value: function (e, t, n) {
                      try {
                        "complete" === e.contentWindow.document.readyState
                          ? this.isIframeBlank(e)
                            ? this.observeIframeLoad(e, t, n)
                            : this.getIframeContents(e, t, n)
                          : this.observeIframeLoad(e, t, n);
                      } catch (e) {
                        n();
                      }
                    },
                  },
                  {
                    key: "waitForIframes",
                    value: function (e, t) {
                      var n = this,
                        r = 0;
                      this.forEachIframe(
                        e,
                        function () {
                          return !0;
                        },
                        function (e) {
                          r++,
                            n.waitForIframes(e.querySelector("html"), function () {
                              --r || t();
                            });
                        },
                        function (e) {
                          e || t();
                        }
                      );
                    },
                  },
                  {
                    key: "forEachIframe",
                    value: function (t, n, r) {
                      var a = this,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
                        o = t.querySelectorAll("iframe"),
                        s = o.length,
                        l = 0;
                      o = Array.prototype.slice.call(o);
                      var c = function () {
                        --s <= 0 && i(l);
                      };
                      s || c(),
                        o.forEach(function (t) {
                          e.matches(t, a.exclude)
                            ? c()
                            : a.onIframeReady(
                                t,
                                function (e) {
                                  n(t) && (l++, r(e)), c();
                                },
                                c
                              );
                        });
                    },
                  },
                  {
                    key: "createIterator",
                    value: function (e, t, n) {
                      return document.createNodeIterator(e, t, n, !1);
                    },
                  },
                  {
                    key: "createInstanceOnIframe",
                    value: function (t) {
                      return new e(t.querySelector("html"), this.iframes);
                    },
                  },
                  {
                    key: "compareNodeIframe",
                    value: function (e, t, n) {
                      if (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING) {
                        if (null === t) return !0;
                        if (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) return !0;
                      }
                      return !1;
                    },
                  },
                  {
                    key: "getIteratorNode",
                    value: function (e) {
                      var t = e.previousNode();
                      return { prevNode: t, node: (null === t || e.nextNode()) && e.nextNode() };
                    },
                  },
                  {
                    key: "checkIframeFilter",
                    value: function (e, t, n, r) {
                      var a = !1,
                        i = !1;
                      return (
                        r.forEach(function (e, t) {
                          e.val === n && ((a = t), (i = e.handled));
                        }),
                        this.compareNodeIframe(e, t, n)
                          ? (!1 !== a || i ? !1 === a || i || (r[a].handled = !0) : r.push({ val: n, handled: !0 }), !0)
                          : (!1 === a && r.push({ val: n, handled: !1 }), !1)
                      );
                    },
                  },
                  {
                    key: "handleOpenIframes",
                    value: function (e, t, n, r) {
                      var a = this;
                      e.forEach(function (e) {
                        e.handled ||
                          a.getIframeContents(e.val, function (e) {
                            a.createInstanceOnIframe(e).forEachNode(t, n, r);
                          });
                      });
                    },
                  },
                  {
                    key: "iterateThroughNodes",
                    value: function (e, t, n, r, a) {
                      for (
                        var i, o = this, s = this.createIterator(t, e, r), l = [], c = [], u = void 0, h = void 0;
                        (i = void 0), (i = o.getIteratorNode(s)), (h = i.prevNode), (u = i.node);

                      )
                        this.iframes &&
                          this.forEachIframe(
                            t,
                            function (e) {
                              return o.checkIframeFilter(u, h, e, l);
                            },
                            function (t) {
                              o.createInstanceOnIframe(t).forEachNode(
                                e,
                                function (e) {
                                  return c.push(e);
                                },
                                r
                              );
                            }
                          ),
                          c.push(u);
                      c.forEach(function (e) {
                        n(e);
                      }),
                        this.iframes && this.handleOpenIframes(l, e, n, r),
                        a();
                    },
                  },
                  {
                    key: "forEachNode",
                    value: function (e, t, n) {
                      var r = this,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
                        i = this.getContexts(),
                        o = i.length;
                      o || a(),
                        i.forEach(function (i) {
                          var s = function () {
                            r.iterateThroughNodes(e, i, t, n, function () {
                              --o <= 0 && a();
                            });
                          };
                          r.iframes ? r.waitForIframes(i, s) : s();
                        });
                    },
                  },
                ],
                [
                  {
                    key: "matches",
                    value: function (e, t) {
                      var n = "string" == typeof t ? [t] : t,
                        r =
                          e.matches ||
                          e.matchesSelector ||
                          e.msMatchesSelector ||
                          e.mozMatchesSelector ||
                          e.oMatchesSelector ||
                          e.webkitMatchesSelector;
                      if (r) {
                        var a = !1;
                        return (
                          n.every(function (t) {
                            return !r.call(e, t) || ((a = !0), !1);
                          }),
                          a
                        );
                      }
                      return !1;
                    },
                  },
                ]
              ),
              e
            );
          })(),
          i = (function () {
            function i(e) {
              t(this, i), (this.ctx = e), (this.ie = !1);
              var n = window.navigator.userAgent;
              (n.indexOf("MSIE") > -1 || n.indexOf("Trident") > -1) && (this.ie = !0);
            }
            return (
              n(i, [
                {
                  key: "log",
                  value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "debug",
                      r = this.opt.log;
                    this.opt.debug &&
                      "object" === (void 0 === r ? "undefined" : e(r)) &&
                      "function" == typeof r[n] &&
                      r[n]("mark.js: " + t);
                  },
                },
                {
                  key: "escapeStr",
                  value: function (e) {
                    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                  },
                },
                {
                  key: "createRegExp",
                  value: function (e) {
                    return (
                      "disabled" !== this.opt.wildcards && (e = this.setupWildcardsRegExp(e)),
                      (e = this.escapeStr(e)),
                      Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)),
                      (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)),
                      this.opt.diacritics && (e = this.createDiacriticsRegExp(e)),
                      (e = this.createMergedBlanksRegExp(e)),
                      (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.createJoinersRegExp(e)),
                      "disabled" !== this.opt.wildcards && (e = this.createWildcardsRegExp(e)),
                      (e = this.createAccuracyRegExp(e))
                    );
                  },
                },
                {
                  key: "createSynonymsRegExp",
                  value: function (e) {
                    var t = this.opt.synonyms,
                      n = this.opt.caseSensitive ? "" : "i",
                      r = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : "";
                    for (var a in t)
                      if (t.hasOwnProperty(a)) {
                        var i = t[a],
                          o = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(a) : this.escapeStr(a),
                          s = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(i) : this.escapeStr(i);
                        "" !== o &&
                          "" !== s &&
                          (e = e.replace(
                            new RegExp("(" + this.escapeStr(o) + "|" + this.escapeStr(s) + ")", "gm" + n),
                            r + "(" + this.processSynomyms(o) + "|" + this.processSynomyms(s) + ")" + r
                          ));
                      }
                    return e;
                  },
                },
                {
                  key: "processSynomyms",
                  value: function (e) {
                    return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), e;
                  },
                },
                {
                  key: "setupWildcardsRegExp",
                  value: function (e) {
                    return (e = e.replace(/(?:\\)*\?/g, function (e) {
                      return "\\" === e.charAt(0) ? "?" : "";
                    })).replace(/(?:\\)*\*/g, function (e) {
                      return "\\" === e.charAt(0) ? "*" : "";
                    });
                  },
                },
                {
                  key: "createWildcardsRegExp",
                  value: function (e) {
                    var t = "withSpaces" === this.opt.wildcards;
                    return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*");
                  },
                },
                {
                  key: "setupIgnoreJoinersRegExp",
                  value: function (e) {
                    return e.replace(/[^(|)\\]/g, function (e, t, n) {
                      var r = n.charAt(t + 1);
                      return /[(|)\\]/.test(r) || "" === r ? e : e + "\0";
                    });
                  },
                },
                {
                  key: "createJoinersRegExp",
                  value: function (e) {
                    var t = [],
                      n = this.opt.ignorePunctuation;
                    return (
                      Array.isArray(n) && n.length && t.push(this.escapeStr(n.join(""))),
                      this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"),
                      t.length ? e.split(/\u0000+/).join("[" + t.join("") + "]*") : e
                    );
                  },
                },
                {
                  key: "createDiacriticsRegExp",
                  value: function (e) {
                    var t = this.opt.caseSensitive ? "" : "i",
                      n = this.opt.caseSensitive
                        ? [
                            "aàáảãạăằắẳẵặâầấẩẫậäåāą",
                            "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                            "cçćč",
                            "CÇĆČ",
                            "dđď",
                            "DĐĎ",
                            "eèéẻẽẹêềếểễệëěēę",
                            "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                            "iìíỉĩịîïī",
                            "IÌÍỈĨỊÎÏĪ",
                            "lł",
                            "LŁ",
                            "nñňń",
                            "NÑŇŃ",
                            "oòóỏõọôồốổỗộơởỡớờợöøō",
                            "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                            "rř",
                            "RŘ",
                            "sšśșş",
                            "SŠŚȘŞ",
                            "tťțţ",
                            "TŤȚŢ",
                            "uùúủũụưừứửữựûüůū",
                            "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                            "yýỳỷỹỵÿ",
                            "YÝỲỶỸỴŸ",
                            "zžżź",
                            "ZŽŻŹ",
                          ]
                        : [
                            "aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ",
                            "cçćčCÇĆČ",
                            "dđďDĐĎ",
                            "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ",
                            "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ",
                            "lłLŁ",
                            "nñňńNÑŇŃ",
                            "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ",
                            "rřRŘ",
                            "sšśșşSŠŚȘŞ",
                            "tťțţTŤȚŢ",
                            "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ",
                            "yýỳỷỹỵÿYÝỲỶỸỴŸ",
                            "zžżźZŽŻŹ",
                          ],
                      r = [];
                    return (
                      e.split("").forEach(function (a) {
                        n.every(function (n) {
                          if (-1 !== n.indexOf(a)) {
                            if (r.indexOf(n) > -1) return !1;
                            (e = e.replace(new RegExp("[" + n + "]", "gm" + t), "[" + n + "]")), r.push(n);
                          }
                          return !0;
                        });
                      }),
                      e
                    );
                  },
                },
                {
                  key: "createMergedBlanksRegExp",
                  value: function (e) {
                    return e.replace(/[\s]+/gim, "[\\s]+");
                  },
                },
                {
                  key: "createAccuracyRegExp",
                  value: function (e) {
                    var t = this,
                      n = this.opt.accuracy,
                      r = "string" == typeof n ? n : n.value,
                      a = "string" == typeof n ? [] : n.limiters,
                      i = "";
                    switch (
                      (a.forEach(function (e) {
                        i += "|" + t.escapeStr(e);
                      }),
                      r)
                    ) {
                      case "partially":
                      default:
                        return "()(" + e + ")";
                      case "complementary":
                        return (
                          "()([^" +
                          (i = "\\s" + (i || this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"))) +
                          "]*" +
                          e +
                          "[^" +
                          i +
                          "]*)"
                        );
                      case "exactly":
                        return "(^|\\s" + i + ")(" + e + ")(?=$|\\s" + i + ")";
                    }
                  },
                },
                {
                  key: "getSeparatedKeywords",
                  value: function (e) {
                    var t = this,
                      n = [];
                    return (
                      e.forEach(function (e) {
                        t.opt.separateWordSearch
                          ? e.split(" ").forEach(function (e) {
                              e.trim() && -1 === n.indexOf(e) && n.push(e);
                            })
                          : e.trim() && -1 === n.indexOf(e) && n.push(e);
                      }),
                      {
                        keywords: n.sort(function (e, t) {
                          return t.length - e.length;
                        }),
                        length: n.length,
                      }
                    );
                  },
                },
                {
                  key: "isNumeric",
                  value: function (e) {
                    return Number(parseFloat(e)) == e;
                  },
                },
                {
                  key: "checkRanges",
                  value: function (e) {
                    var t = this;
                    if (!Array.isArray(e) || "[object Object]" !== Object.prototype.toString.call(e[0]))
                      return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(e), [];
                    var n = [],
                      r = 0;
                    return (
                      e
                        .sort(function (e, t) {
                          return e.start - t.start;
                        })
                        .forEach(function (e) {
                          var a = t.callNoMatchOnInvalidRanges(e, r),
                            i = a.start,
                            o = a.end;
                          a.valid && ((e.start = i), (e.length = o - i), n.push(e), (r = o));
                        }),
                      n
                    );
                  },
                },
                {
                  key: "callNoMatchOnInvalidRanges",
                  value: function (e, t) {
                    var n = void 0,
                      r = void 0,
                      a = !1;
                    return (
                      e && void 0 !== e.start
                        ? ((r = (n = parseInt(e.start, 10)) + parseInt(e.length, 10)),
                          this.isNumeric(e.start) && this.isNumeric(e.length) && r - t > 0 && r - n > 0
                            ? (a = !0)
                            : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(e)), this.opt.noMatch(e)))
                        : (this.log("Ignoring invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)),
                      { start: n, end: r, valid: a }
                    );
                  },
                },
                {
                  key: "checkWhitespaceRanges",
                  value: function (e, t, n) {
                    var r = void 0,
                      a = !0,
                      i = n.length,
                      o = t - i,
                      s = parseInt(e.start, 10) - o;
                    return (
                      (r = (s = s > i ? i : s) + parseInt(e.length, 10)) > i &&
                        ((r = i), this.log("End range automatically set to the max value of " + i)),
                      s < 0 || r - s < 0 || s > i || r > i
                        ? ((a = !1), this.log("Invalid range: " + JSON.stringify(e)), this.opt.noMatch(e))
                        : "" === n.substring(s, r).replace(/\s+/g, "") &&
                          ((a = !1), this.log("Skipping whitespace only range: " + JSON.stringify(e)), this.opt.noMatch(e)),
                      { start: s, end: r, valid: a }
                    );
                  },
                },
                {
                  key: "getTextNodes",
                  value: function (e) {
                    var t = this,
                      n = "",
                      r = [];
                    this.iterator.forEachNode(
                      NodeFilter.SHOW_TEXT,
                      function (e) {
                        r.push({ start: n.length, end: (n += e.textContent).length, node: e });
                      },
                      function (e) {
                        return t.matchesExclude(e.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                      },
                      function () {
                        e({ value: n, nodes: r });
                      }
                    );
                  },
                },
                {
                  key: "matchesExclude",
                  value: function (e) {
                    return a.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"]));
                  },
                },
                {
                  key: "wrapRangeInTextNode",
                  value: function (e, t, n) {
                    var r = this.opt.element ? this.opt.element : "mark",
                      a = e.splitText(t),
                      i = a.splitText(n - t),
                      o = document.createElement(r);
                    return (
                      o.setAttribute("data-markjs", "true"),
                      this.opt.className && o.setAttribute("class", this.opt.className),
                      (o.textContent = a.textContent),
                      a.parentNode.replaceChild(o, a),
                      i
                    );
                  },
                },
                {
                  key: "wrapRangeInMappedTextNode",
                  value: function (e, t, n, r, a) {
                    var i = this;
                    e.nodes.every(function (o, s) {
                      var l = e.nodes[s + 1];
                      if (void 0 === l || l.start > t) {
                        if (!r(o.node)) return !1;
                        var c = t - o.start,
                          u = (n > o.end ? o.end : n) - o.start,
                          h = e.value.substr(0, o.start),
                          p = e.value.substr(u + o.start);
                        if (
                          ((o.node = i.wrapRangeInTextNode(o.node, c, u)),
                          (e.value = h + p),
                          e.nodes.forEach(function (t, n) {
                            n >= s && (e.nodes[n].start > 0 && n !== s && (e.nodes[n].start -= u), (e.nodes[n].end -= u));
                          }),
                          (n -= u),
                          a(o.node.previousSibling, o.start),
                          !(n > o.end))
                        )
                          return !1;
                        t = o.end;
                      }
                      return !0;
                    });
                  },
                },
                {
                  key: "wrapMatches",
                  value: function (e, t, n, r, a) {
                    var i = this,
                      o = 0 === t ? 0 : t + 1;
                    this.getTextNodes(function (t) {
                      t.nodes.forEach(function (t) {
                        t = t.node;
                        for (var a = void 0; null !== (a = e.exec(t.textContent)) && "" !== a[o]; )
                          if (n(a[o], t)) {
                            var s = a.index;
                            if (0 !== o) for (var l = 1; l < o; l++) s += a[l].length;
                            (t = i.wrapRangeInTextNode(t, s, s + a[o].length)), r(t.previousSibling), (e.lastIndex = 0);
                          }
                      }),
                        a();
                    });
                  },
                },
                {
                  key: "wrapMatchesAcrossElements",
                  value: function (e, t, n, r, a) {
                    var i = this,
                      o = 0 === t ? 0 : t + 1;
                    this.getTextNodes(function (t) {
                      for (var s = void 0; null !== (s = e.exec(t.value)) && "" !== s[o]; ) {
                        var l = s.index;
                        if (0 !== o) for (var c = 1; c < o; c++) l += s[c].length;
                        var u = l + s[o].length;
                        i.wrapRangeInMappedTextNode(
                          t,
                          l,
                          u,
                          function (e) {
                            return n(s[o], e);
                          },
                          function (t, n) {
                            (e.lastIndex = n), r(t);
                          }
                        );
                      }
                      a();
                    });
                  },
                },
                {
                  key: "wrapRangeFromIndex",
                  value: function (e, t, n, r) {
                    var a = this;
                    this.getTextNodes(function (i) {
                      var o = i.value.length;
                      e.forEach(function (e, r) {
                        var s = a.checkWhitespaceRanges(e, o, i.value),
                          l = s.start,
                          c = s.end;
                        s.valid &&
                          a.wrapRangeInMappedTextNode(
                            i,
                            l,
                            c,
                            function (n) {
                              return t(n, e, i.value.substring(l, c), r);
                            },
                            function (t) {
                              n(t, e);
                            }
                          );
                      }),
                        r();
                    });
                  },
                },
                {
                  key: "unwrapMatches",
                  value: function (e) {
                    for (var t = e.parentNode, n = document.createDocumentFragment(); e.firstChild; )
                      n.appendChild(e.removeChild(e.firstChild));
                    t.replaceChild(n, e), this.ie ? this.normalizeTextNode(t) : t.normalize();
                  },
                },
                {
                  key: "normalizeTextNode",
                  value: function (e) {
                    if (e) {
                      if (3 === e.nodeType)
                        for (; e.nextSibling && 3 === e.nextSibling.nodeType; )
                          (e.nodeValue += e.nextSibling.nodeValue), e.parentNode.removeChild(e.nextSibling);
                      else this.normalizeTextNode(e.firstChild);
                      this.normalizeTextNode(e.nextSibling);
                    }
                  },
                },
                {
                  key: "markRegExp",
                  value: function (e, t) {
                    var n = this;
                    (this.opt = t), this.log('Searching with expression "' + e + '"');
                    var r = 0,
                      a = "wrapMatches";
                    this.opt.acrossElements && (a = "wrapMatchesAcrossElements"),
                      this[a](
                        e,
                        this.opt.ignoreGroups,
                        function (e, t) {
                          return n.opt.filter(t, e, r);
                        },
                        function (e) {
                          r++, n.opt.each(e);
                        },
                        function () {
                          0 === r && n.opt.noMatch(e), n.opt.done(r);
                        }
                      );
                  },
                },
                {
                  key: "mark",
                  value: function (e, t) {
                    var n = this;
                    this.opt = t;
                    var r = 0,
                      a = "wrapMatches",
                      i = this.getSeparatedKeywords("string" == typeof e ? [e] : e),
                      o = i.keywords,
                      s = i.length,
                      l = this.opt.caseSensitive ? "" : "i";
                    this.opt.acrossElements && (a = "wrapMatchesAcrossElements"),
                      0 === s
                        ? this.opt.done(r)
                        : (function e(t) {
                            var i = new RegExp(n.createRegExp(t), "gm" + l),
                              c = 0;
                            n.log('Searching with expression "' + i + '"'),
                              n[a](
                                i,
                                1,
                                function (e, a) {
                                  return n.opt.filter(a, t, r, c);
                                },
                                function (e) {
                                  c++, r++, n.opt.each(e);
                                },
                                function () {
                                  0 === c && n.opt.noMatch(t), o[s - 1] === t ? n.opt.done(r) : e(o[o.indexOf(t) + 1]);
                                }
                              );
                          })(o[0]);
                  },
                },
                {
                  key: "markRanges",
                  value: function (e, t) {
                    var n = this;
                    this.opt = t;
                    var r = 0,
                      a = this.checkRanges(e);
                    a && a.length
                      ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(a)),
                        this.wrapRangeFromIndex(
                          a,
                          function (e, t, r, a) {
                            return n.opt.filter(e, t, r, a);
                          },
                          function (e, t) {
                            r++, n.opt.each(e, t);
                          },
                          function () {
                            n.opt.done(r);
                          }
                        ))
                      : this.opt.done(r);
                  },
                },
                {
                  key: "unmark",
                  value: function (e) {
                    var t = this;
                    this.opt = e;
                    var n = this.opt.element ? this.opt.element : "*";
                    (n += "[data-markjs]"),
                      this.opt.className && (n += "." + this.opt.className),
                      this.log('Removal selector "' + n + '"'),
                      this.iterator.forEachNode(
                        NodeFilter.SHOW_ELEMENT,
                        function (e) {
                          t.unwrapMatches(e);
                        },
                        function (e) {
                          var r = a.matches(e, n),
                            i = t.matchesExclude(e);
                          return !r || i ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                        },
                        this.opt.done
                      );
                  },
                },
                {
                  key: "opt",
                  set: function (e) {
                    this._opt = r(
                      {},
                      {
                        element: "",
                        className: "",
                        exclude: [],
                        iframes: !1,
                        iframesTimeout: 5e3,
                        separateWordSearch: !0,
                        diacritics: !0,
                        synonyms: {},
                        accuracy: "partially",
                        acrossElements: !1,
                        caseSensitive: !1,
                        ignoreJoiners: !1,
                        ignoreGroups: 0,
                        ignorePunctuation: [],
                        wildcards: "disabled",
                        each: function () {},
                        noMatch: function () {},
                        filter: function () {
                          return !0;
                        },
                        done: function () {},
                        debug: !1,
                        log: window.console,
                      },
                      e
                    );
                  },
                  get: function () {
                    return this._opt;
                  },
                },
                {
                  key: "iterator",
                  get: function () {
                    return new a(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
                  },
                },
              ]),
              i
            );
          })();
        return function (e) {
          var t = this,
            n = new i(e);
          return (
            (this.mark = function (e, r) {
              return n.mark(e, r), t;
            }),
            (this.markRegExp = function (e, r) {
              return n.markRegExp(e, r), t;
            }),
            (this.markRanges = function (e, r) {
              return n.markRanges(e, r), t;
            }),
            (this.unmark = function (e) {
              return n.unmark(e), t;
            }),
            this
          );
        };
      })();
    },
    function (e, t, n) {
      "use strict";
      var r = n(2);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(3);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(4);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(5);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(6);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(7);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(8);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(9);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(10);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(11);
      n.n(r).a;
    },
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      "use strict";
      var r = n(12);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(13);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(14);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(15);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(16);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(17);
      n.n(r).a;
    },
    function (e, t, n) {
      "use strict";
      var r = n(18);
      n.n(r).a;
    },
    function (e, t) {
      var n,
        r,
        a = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i;
        } catch (e) {
          n = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          r = o;
        }
      })();
      var l,
        c = [],
        u = !1,
        h = -1;
      function p() {
        u && l && ((u = !1), l.length ? (c = l.concat(c)) : (h = -1), c.length && f());
      }
      function f() {
        if (!u) {
          var e = s(p);
          u = !0;
          for (var t = c.length; t; ) {
            for (l = c, c = []; ++h < t; ) l && l[h].run();
            (h = -1), (t = c.length);
          }
          (l = null),
            (u = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === o || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function d(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new d(e, t)), 1 !== c.length || u || s(f);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (a.title = "browser"),
        (a.browser = !0),
        (a.env = {}),
        (a.argv = []),
        (a.version = ""),
        (a.versions = {}),
        (a.on = m),
        (a.addListener = m),
        (a.once = m),
        (a.off = m),
        (a.removeListener = m),
        (a.removeAllListeners = m),
        (a.emit = m),
        (a.prependListener = m),
        (a.prependOnceListener = m),
        (a.listeners = function (e) {
          return [];
        }),
        (a.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (a.cwd = function () {
          return "/";
        }),
        (a.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (a.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "init", function () {
          return Br;
        });
      var r = n(0),
        a = n.n(r),
        i = [
          "style",
          "currency",
          "currencyDisplay",
          "useGrouping",
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits",
          "localeMatcher",
          "formatMatcher",
          "unit",
        ];
      function o(e, t) {
        "undefined" != typeof console && (console.warn("[vue-i18n] " + e), t && console.warn(t.stack));
      }
      var s = Array.isArray;
      function l(e) {
        return null !== e && "object" == typeof e;
      }
      function c(e) {
        return "string" == typeof e;
      }
      var u = Object.prototype.toString;
      function h(e) {
        return "[object Object]" === u.call(e);
      }
      function p(e) {
        return null == e;
      }
      function f() {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = null,
          r = null;
        return (
          1 === e.length
            ? l(e[0]) || Array.isArray(e[0])
              ? (r = e[0])
              : "string" == typeof e[0] && (n = e[0])
            : 2 === e.length && ("string" == typeof e[0] && (n = e[0]), (l(e[1]) || Array.isArray(e[1])) && (r = e[1])),
          { locale: n, params: r }
        );
      }
      function d(e) {
        return JSON.parse(JSON.stringify(e));
      }
      function m(e, t) {
        return !!~e.indexOf(t);
      }
      var v = Object.prototype.hasOwnProperty;
      function g(e, t) {
        return v.call(e, t);
      }
      function _(e) {
        for (var t = arguments, n = Object(e), r = 1; r < arguments.length; r++) {
          var a = t[r];
          if (null != a) {
            var i = void 0;
            for (i in a) g(a, i) && (l(a[i]) ? (n[i] = _(n[i], a[i])) : (n[i] = a[i]));
          }
        }
        return n;
      }
      function y(e, t) {
        if (e === t) return !0;
        var n = l(e),
          r = l(t);
        if (!n || !r) return !n && !r && String(e) === String(t);
        try {
          var a = Array.isArray(e),
            i = Array.isArray(t);
          if (a && i)
            return (
              e.length === t.length &&
              e.every(function (e, n) {
                return y(e, t[n]);
              })
            );
          if (a || i) return !1;
          var o = Object.keys(e),
            s = Object.keys(t);
          return (
            o.length === s.length &&
            o.every(function (n) {
              return y(e[n], t[n]);
            })
          );
        } catch (e) {
          return !1;
        }
      }
      var b = {
          beforeCreate: function () {
            var e = this.$options;
            if (((e.i18n = e.i18n || (e.__i18n ? {} : null)), e.i18n))
              if (e.i18n instanceof Q) {
                if (e.__i18n)
                  try {
                    var t = {};
                    e.__i18n.forEach(function (e) {
                      t = _(t, JSON.parse(e));
                    }),
                      Object.keys(t).forEach(function (n) {
                        e.i18n.mergeLocaleMessage(n, t[n]);
                      });
                  } catch (e) {
                    0;
                  }
                (this._i18n = e.i18n), (this._i18nWatcher = this._i18n.watchI18nData());
              } else if (h(e.i18n)) {
                var n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof Q ? this.$root.$i18n : null;
                if (
                  (n &&
                    ((e.i18n.root = this.$root),
                    (e.i18n.formatter = n.formatter),
                    (e.i18n.fallbackLocale = n.fallbackLocale),
                    (e.i18n.formatFallbackMessages = n.formatFallbackMessages),
                    (e.i18n.silentTranslationWarn = n.silentTranslationWarn),
                    (e.i18n.silentFallbackWarn = n.silentFallbackWarn),
                    (e.i18n.pluralizationRules = n.pluralizationRules),
                    (e.i18n.preserveDirectiveContent = n.preserveDirectiveContent)),
                  e.__i18n)
                )
                  try {
                    var r = {};
                    e.__i18n.forEach(function (e) {
                      r = _(r, JSON.parse(e));
                    }),
                      (e.i18n.messages = r);
                  } catch (e) {
                    0;
                  }
                var a = e.i18n.sharedMessages;
                a && h(a) && (e.i18n.messages = _(e.i18n.messages, a)),
                  (this._i18n = new Q(e.i18n)),
                  (this._i18nWatcher = this._i18n.watchI18nData()),
                  (void 0 === e.i18n.sync || e.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()),
                  n && n.onComponentInstanceCreated(this._i18n);
              } else 0;
            else
              this.$root && this.$root.$i18n && this.$root.$i18n instanceof Q
                ? (this._i18n = this.$root.$i18n)
                : e.parent && e.parent.$i18n && e.parent.$i18n instanceof Q && (this._i18n = e.parent.$i18n);
          },
          beforeMount: function () {
            var e = this.$options;
            (e.i18n = e.i18n || (e.__i18n ? {} : null)),
              e.i18n
                ? (e.i18n instanceof Q || h(e.i18n)) && (this._i18n.subscribeDataChanging(this), (this._subscribing = !0))
                : ((this.$root && this.$root.$i18n && this.$root.$i18n instanceof Q) ||
                    (e.parent && e.parent.$i18n && e.parent.$i18n instanceof Q)) &&
                  (this._i18n.subscribeDataChanging(this), (this._subscribing = !0));
          },
          beforeDestroy: function () {
            if (this._i18n) {
              var e = this;
              this.$nextTick(function () {
                e._subscribing && (e._i18n.unsubscribeDataChanging(e), delete e._subscribing),
                  e._i18nWatcher && (e._i18nWatcher(), e._i18n.destroyVM(), delete e._i18nWatcher),
                  e._localeWatcher && (e._localeWatcher(), delete e._localeWatcher);
              });
            }
          },
        },
        x = {
          name: "i18n",
          functional: !0,
          props: {
            tag: { type: [String, Boolean], default: "span" },
            path: { type: String, required: !0 },
            locale: { type: String },
            places: { type: [Array, Object] },
          },
          render: function (e, t) {
            var n = t.data,
              r = t.parent,
              a = t.props,
              i = t.slots,
              o = r.$i18n;
            if (o) {
              var s = a.path,
                l = a.locale,
                c = a.places,
                u = i(),
                h = o.i(
                  s,
                  l,
                  (function (e) {
                    var t;
                    for (t in e) if ("default" !== t) return !1;
                    return Boolean(t);
                  })(u) || c
                    ? (function (e, t) {
                        var n = t
                          ? (function (e) {
                              0;
                              return Array.isArray(e) ? e.reduce(w, {}) : Object.assign({}, e);
                            })(t)
                          : {};
                        if (!e) return n;
                        var r = (e = e.filter(function (e) {
                          return e.tag || "" !== e.text.trim();
                        })).every(C);
                        0;
                        return e.reduce(r ? E : w, n);
                      })(u.default, c)
                    : u
                ),
                p = (a.tag && !0 !== a.tag) || !1 === a.tag ? a.tag : "span";
              return p ? e(p, n, h) : h;
            }
          },
        };
      function E(e, t) {
        return t.data && t.data.attrs && t.data.attrs.place && (e[t.data.attrs.place] = t), e;
      }
      function w(e, t, n) {
        return (e[n] = t), e;
      }
      function C(e) {
        return Boolean(e.data && e.data.attrs && e.data.attrs.place);
      }
      var O,
        S = {
          name: "i18n-n",
          functional: !0,
          props: {
            tag: { type: [String, Boolean], default: "span" },
            value: { type: Number, required: !0 },
            format: { type: [String, Object] },
            locale: { type: String },
          },
          render: function (e, t) {
            var n = t.props,
              r = t.parent,
              a = t.data,
              o = r.$i18n;
            if (!o) return null;
            var s = null,
              u = null;
            c(n.format)
              ? (s = n.format)
              : l(n.format) &&
                (n.format.key && (s = n.format.key),
                (u = Object.keys(n.format).reduce(function (e, t) {
                  var r;
                  return m(i, t) ? Object.assign({}, e, (((r = {})[t] = n.format[t]), r)) : e;
                }, null)));
            var h = n.locale || o.locale,
              p = o._ntp(n.value, h, s, u),
              f = p.map(function (e, t) {
                var n,
                  r = a.scopedSlots && a.scopedSlots[e.type];
                return r ? r((((n = {})[e.type] = e.value), (n.index = t), (n.parts = p), n)) : e.value;
              }),
              d = (n.tag && !0 !== n.tag) || !1 === n.tag ? n.tag : "span";
            return d ? e(d, { attrs: a.attrs, class: a.class, staticClass: a.staticClass }, f) : f;
          },
        };
      function M(e, t, n) {
        N(e, n) && A(e, t, n);
      }
      function k(e, t, n, r) {
        if (N(e, n)) {
          var a = n.context.$i18n;
          ((function (e, t) {
            var n = t.context;
            return e._locale === n.$i18n.locale;
          })(e, n) &&
            y(t.value, t.oldValue) &&
            y(e._localeMessage, a.getLocaleMessage(a.locale))) ||
            A(e, t, n);
        }
      }
      function T(e, t, n, r) {
        if (n.context) {
          var a = n.context.$i18n || {};
          t.modifiers.preserve || a.preserveDirectiveContent || (e.textContent = ""),
            (e._vt = void 0),
            delete e._vt,
            (e._locale = void 0),
            delete e._locale,
            (e._localeMessage = void 0),
            delete e._localeMessage;
        } else o("Vue instance does not exists in VNode context");
      }
      function N(e, t) {
        var n = t.context;
        return n
          ? !!n.$i18n || (o("VueI18n instance does not exists in Vue instance"), !1)
          : (o("Vue instance does not exists in VNode context"), !1);
      }
      function A(e, t, n) {
        var r,
          a,
          i = (function (e) {
            var t, n, r, a;
            c(e) ? (t = e) : h(e) && ((t = e.path), (n = e.locale), (r = e.args), (a = e.choice));
            return { path: t, locale: n, args: r, choice: a };
          })(t.value),
          s = i.path,
          l = i.locale,
          u = i.args,
          p = i.choice;
        if (s || l || u)
          if (s) {
            var f = n.context;
            (e._vt = e.textContent =
              null != p ? (r = f.$i18n).tc.apply(r, [s, p].concat(I(l, u))) : (a = f.$i18n).t.apply(a, [s].concat(I(l, u)))),
              (e._locale = f.$i18n.locale),
              (e._localeMessage = f.$i18n.getLocaleMessage(f.$i18n.locale));
          } else o("`path` is required in v-t directive");
        else o("value type not supported");
      }
      function I(e, t) {
        var n = [];
        return e && n.push(e), t && (Array.isArray(t) || h(t)) && n.push(t), n;
      }
      function R(e) {
        R.installed = !0;
        (O = e).version && Number(O.version.split(".")[0]);
        (function (e) {
          e.prototype.hasOwnProperty("$i18n") ||
            Object.defineProperty(e.prototype, "$i18n", {
              get: function () {
                return this._i18n;
              },
            }),
            (e.prototype.$t = function (e) {
              for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
              var r = this.$i18n;
              return r._t.apply(r, [e, r.locale, r._getMessages(), this].concat(t));
            }),
            (e.prototype.$tc = function (e, t) {
              for (var n = [], r = arguments.length - 2; r-- > 0; ) n[r] = arguments[r + 2];
              var a = this.$i18n;
              return a._tc.apply(a, [e, a.locale, a._getMessages(), this, t].concat(n));
            }),
            (e.prototype.$te = function (e, t) {
              var n = this.$i18n;
              return n._te(e, n.locale, n._getMessages(), t);
            }),
            (e.prototype.$d = function (e) {
              for (var t, n = [], r = arguments.length - 1; r-- > 0; ) n[r] = arguments[r + 1];
              return (t = this.$i18n).d.apply(t, [e].concat(n));
            }),
            (e.prototype.$n = function (e) {
              for (var t, n = [], r = arguments.length - 1; r-- > 0; ) n[r] = arguments[r + 1];
              return (t = this.$i18n).n.apply(t, [e].concat(n));
            });
        })(O),
          O.mixin(b),
          O.directive("t", { bind: M, update: k, unbind: T }),
          O.component(x.name, x),
          O.component(S.name, S),
          (O.config.optionMergeStrategies.i18n = function (e, t) {
            return void 0 === t ? e : t;
          });
      }
      var L = function () {
        this._caches = Object.create(null);
      };
      L.prototype.interpolate = function (e, t) {
        if (!t) return [e];
        var n = this._caches[e];
        return (
          n ||
            ((n = (function (e) {
              var t = [],
                n = 0,
                r = "";
              for (; n < e.length; ) {
                var a = e[n++];
                if ("{" === a) {
                  r && t.push({ type: "text", value: r }), (r = "");
                  var i = "";
                  for (a = e[n++]; void 0 !== a && "}" !== a; ) (i += a), (a = e[n++]);
                  var o = "}" === a,
                    s = D.test(i) ? "list" : o && P.test(i) ? "named" : "unknown";
                  t.push({ value: i, type: s });
                } else "%" === a ? "{" !== e[n] && (r += a) : (r += a);
              }
              return r && t.push({ type: "text", value: r }), t;
            })(e)),
            (this._caches[e] = n)),
          (function (e, t) {
            var n = [],
              r = 0,
              a = Array.isArray(t) ? "list" : l(t) ? "named" : "unknown";
            if ("unknown" === a) return n;
            for (; r < e.length; ) {
              var i = e[r];
              switch (i.type) {
                case "text":
                  n.push(i.value);
                  break;
                case "list":
                  n.push(t[parseInt(i.value, 10)]);
                  break;
                case "named":
                  "named" === a && n.push(t[i.value]);
                  break;
                case "unknown":
                  0;
              }
              r++;
            }
            return n;
          })(n, t)
        );
      };
      var D = /^(?:\d)+/,
        P = /^(?:\w)+/;
      var $ = [];
      ($[0] = { ws: [0], ident: [3, 0], "[": [4], eof: [7] }),
        ($[1] = { ws: [1], ".": [2], "[": [4], eof: [7] }),
        ($[2] = { ws: [2], ident: [3, 0], 0: [3, 0], number: [3, 0] }),
        ($[3] = { ident: [3, 0], 0: [3, 0], number: [3, 0], ws: [1, 1], ".": [2, 1], "[": [4, 1], eof: [7, 1] }),
        ($[4] = { "'": [5, 0], '"': [6, 0], "[": [4, 2], "]": [1, 3], eof: 8, else: [4, 0] }),
        ($[5] = { "'": [4, 0], eof: 8, else: [5, 0] }),
        ($[6] = { '"': [4, 0], eof: 8, else: [6, 0] });
      var j = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
      function F(e) {
        if (null == e) return "eof";
        switch (e.charCodeAt(0)) {
          case 91:
          case 93:
          case 46:
          case 34:
          case 39:
            return e;
          case 95:
          case 36:
          case 45:
            return "ident";
          case 9:
          case 10:
          case 13:
          case 160:
          case 65279:
          case 8232:
          case 8233:
            return "ws";
        }
        return "ident";
      }
      function V(e) {
        var t,
          n,
          r,
          a = e.trim();
        return (
          ("0" !== e.charAt(0) || !isNaN(e)) &&
          ((r = a),
          j.test(r) ? ((n = (t = a).charCodeAt(0)) !== t.charCodeAt(t.length - 1) || (34 !== n && 39 !== n) ? t : t.slice(1, -1)) : "*" + a)
        );
      }
      var z = function () {
        this._cache = Object.create(null);
      };
      (z.prototype.parsePath = function (e) {
        var t = this._cache[e];
        return (
          t ||
            ((t = (function (e) {
              var t,
                n,
                r,
                a,
                i,
                o,
                s,
                l = [],
                c = -1,
                u = 0,
                h = 0,
                p = [];
              function f() {
                var t = e[c + 1];
                if ((5 === u && "'" === t) || (6 === u && '"' === t)) return c++, (r = "\\" + t), p[0](), !0;
              }
              for (
                p[1] = function () {
                  void 0 !== n && (l.push(n), (n = void 0));
                },
                  p[0] = function () {
                    void 0 === n ? (n = r) : (n += r);
                  },
                  p[2] = function () {
                    p[0](), h++;
                  },
                  p[3] = function () {
                    if (h > 0) h--, (u = 4), p[0]();
                    else {
                      if (((h = 0), void 0 === n)) return !1;
                      if (!1 === (n = V(n))) return !1;
                      p[1]();
                    }
                  };
                null !== u;

              )
                if ((c++, "\\" !== (t = e[c]) || !f())) {
                  if (((a = F(t)), 8 === (i = (s = $[u])[a] || s.else || 8))) return;
                  if (((u = i[0]), (o = p[i[1]]) && ((r = void 0 === (r = i[2]) ? t : r), !1 === o()))) return;
                  if (7 === u) return l;
                }
            })(e)) &&
              (this._cache[e] = t)),
          t || []
        );
      }),
        (z.prototype.getPathValue = function (e, t) {
          if (!l(e)) return null;
          var n = this.parsePath(t);
          if (0 === n.length) return null;
          for (var r = n.length, a = e, i = 0; i < r; ) {
            var o = a[n[i]];
            if (void 0 === o) return null;
            (a = o), i++;
          }
          return a;
        });
      var U,
        B = /<\/?[\w\s="/.':;#-\/]+>/,
        H = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
        W = /^@(?:\.([a-z]+))?:/,
        q = /[()]/g,
        G = {
          upper: function (e) {
            return e.toLocaleUpperCase();
          },
          lower: function (e) {
            return e.toLocaleLowerCase();
          },
          capitalize: function (e) {
            return "" + e.charAt(0).toLocaleUpperCase() + e.substr(1);
          },
        },
        K = new L(),
        Q = function (e) {
          var t = this;
          void 0 === e && (e = {}), !O && "undefined" != typeof window && window.Vue && R(window.Vue);
          var n = e.locale || "en-US",
            r = !1 !== e.fallbackLocale && (e.fallbackLocale || "en-US"),
            a = e.messages || {},
            i = e.dateTimeFormats || {},
            o = e.numberFormats || {};
          (this._vm = null),
            (this._formatter = e.formatter || K),
            (this._modifiers = e.modifiers || {}),
            (this._missing = e.missing || null),
            (this._root = e.root || null),
            (this._sync = void 0 === e.sync || !!e.sync),
            (this._fallbackRoot = void 0 === e.fallbackRoot || !!e.fallbackRoot),
            (this._formatFallbackMessages = void 0 !== e.formatFallbackMessages && !!e.formatFallbackMessages),
            (this._silentTranslationWarn = void 0 !== e.silentTranslationWarn && e.silentTranslationWarn),
            (this._silentFallbackWarn = void 0 !== e.silentFallbackWarn && !!e.silentFallbackWarn),
            (this._dateTimeFormatters = {}),
            (this._numberFormatters = {}),
            (this._path = new z()),
            (this._dataListeners = []),
            (this._componentInstanceCreatedListener = e.componentInstanceCreatedListener || null),
            (this._preserveDirectiveContent = void 0 !== e.preserveDirectiveContent && !!e.preserveDirectiveContent),
            (this.pluralizationRules = e.pluralizationRules || {}),
            (this._warnHtmlInMessage = e.warnHtmlInMessage || "off"),
            (this._postTranslation = e.postTranslation || null),
            (this.getChoiceIndex = function (e, n) {
              var r = Object.getPrototypeOf(t);
              if (r && r.getChoiceIndex) return r.getChoiceIndex.call(t, e, n);
              var a, i;
              return t.locale in t.pluralizationRules
                ? t.pluralizationRules[t.locale].apply(t, [e, n])
                : ((a = e), (i = n), (a = Math.abs(a)), 2 === i ? (a ? (a > 1 ? 1 : 0) : 1) : a ? Math.min(a, 2) : 0);
            }),
            (this._exist = function (e, n) {
              return !(!e || !n) && (!p(t._path.getPathValue(e, n)) || !!e[n]);
            }),
            ("warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage) ||
              Object.keys(a).forEach(function (e) {
                t._checkLocaleMessage(e, t._warnHtmlInMessage, a[e]);
              }),
            this._initVM({ locale: n, fallbackLocale: r, messages: a, dateTimeFormats: i, numberFormats: o });
        },
        J = {
          vm: { configurable: !0 },
          messages: { configurable: !0 },
          dateTimeFormats: { configurable: !0 },
          numberFormats: { configurable: !0 },
          availableLocales: { configurable: !0 },
          locale: { configurable: !0 },
          fallbackLocale: { configurable: !0 },
          formatFallbackMessages: { configurable: !0 },
          missing: { configurable: !0 },
          formatter: { configurable: !0 },
          silentTranslationWarn: { configurable: !0 },
          silentFallbackWarn: { configurable: !0 },
          preserveDirectiveContent: { configurable: !0 },
          warnHtmlInMessage: { configurable: !0 },
          postTranslation: { configurable: !0 },
        };
      (Q.prototype._checkLocaleMessage = function (e, t, n) {
        var r = function (e, t, n, a) {
          if (h(n))
            Object.keys(n).forEach(function (i) {
              var o = n[i];
              h(o) ? (a.push(i), a.push("."), r(e, t, o, a), a.pop(), a.pop()) : (a.push(i), r(e, t, o, a), a.pop());
            });
          else if (Array.isArray(n))
            n.forEach(function (n, i) {
              h(n)
                ? (a.push("[" + i + "]"), a.push("."), r(e, t, n, a), a.pop(), a.pop())
                : (a.push("[" + i + "]"), r(e, t, n, a), a.pop());
            });
          else if (c(n)) {
            if (B.test(n)) {
              var i =
                "Detected HTML in message '" +
                n +
                "' of keypath '" +
                a.join("") +
                "' at '" +
                t +
                "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
              "warn" === e
                ? o(i)
                : "error" === e &&
                  (function (e, t) {
                    "undefined" != typeof console && (console.error("[vue-i18n] " + e), t && console.error(t.stack));
                  })(i);
            }
          }
        };
        r(t, e, n, []);
      }),
        (Q.prototype._initVM = function (e) {
          var t = O.config.silent;
          (O.config.silent = !0), (this._vm = new O({ data: e })), (O.config.silent = t);
        }),
        (Q.prototype.destroyVM = function () {
          this._vm.$destroy();
        }),
        (Q.prototype.subscribeDataChanging = function (e) {
          this._dataListeners.push(e);
        }),
        (Q.prototype.unsubscribeDataChanging = function (e) {
          !(function (e, t) {
            if (e.length) {
              var n = e.indexOf(t);
              if (n > -1) e.splice(n, 1);
            }
          })(this._dataListeners, e);
        }),
        (Q.prototype.watchI18nData = function () {
          var e = this;
          return this._vm.$watch(
            "$data",
            function () {
              for (var t = e._dataListeners.length; t--; )
                O.nextTick(function () {
                  e._dataListeners[t] && e._dataListeners[t].$forceUpdate();
                });
            },
            { deep: !0 }
          );
        }),
        (Q.prototype.watchLocale = function () {
          if (!this._sync || !this._root) return null;
          var e = this._vm;
          return this._root.$i18n.vm.$watch(
            "locale",
            function (t) {
              e.$set(e, "locale", t), e.$forceUpdate();
            },
            { immediate: !0 }
          );
        }),
        (Q.prototype.onComponentInstanceCreated = function (e) {
          this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(e, this);
        }),
        (J.vm.get = function () {
          return this._vm;
        }),
        (J.messages.get = function () {
          return d(this._getMessages());
        }),
        (J.dateTimeFormats.get = function () {
          return d(this._getDateTimeFormats());
        }),
        (J.numberFormats.get = function () {
          return d(this._getNumberFormats());
        }),
        (J.availableLocales.get = function () {
          return Object.keys(this.messages).sort();
        }),
        (J.locale.get = function () {
          return this._vm.locale;
        }),
        (J.locale.set = function (e) {
          this._vm.$set(this._vm, "locale", e);
        }),
        (J.fallbackLocale.get = function () {
          return this._vm.fallbackLocale;
        }),
        (J.fallbackLocale.set = function (e) {
          (this._localeChainCache = {}), this._vm.$set(this._vm, "fallbackLocale", e);
        }),
        (J.formatFallbackMessages.get = function () {
          return this._formatFallbackMessages;
        }),
        (J.formatFallbackMessages.set = function (e) {
          this._formatFallbackMessages = e;
        }),
        (J.missing.get = function () {
          return this._missing;
        }),
        (J.missing.set = function (e) {
          this._missing = e;
        }),
        (J.formatter.get = function () {
          return this._formatter;
        }),
        (J.formatter.set = function (e) {
          this._formatter = e;
        }),
        (J.silentTranslationWarn.get = function () {
          return this._silentTranslationWarn;
        }),
        (J.silentTranslationWarn.set = function (e) {
          this._silentTranslationWarn = e;
        }),
        (J.silentFallbackWarn.get = function () {
          return this._silentFallbackWarn;
        }),
        (J.silentFallbackWarn.set = function (e) {
          this._silentFallbackWarn = e;
        }),
        (J.preserveDirectiveContent.get = function () {
          return this._preserveDirectiveContent;
        }),
        (J.preserveDirectiveContent.set = function (e) {
          this._preserveDirectiveContent = e;
        }),
        (J.warnHtmlInMessage.get = function () {
          return this._warnHtmlInMessage;
        }),
        (J.warnHtmlInMessage.set = function (e) {
          var t = this,
            n = this._warnHtmlInMessage;
          if (((this._warnHtmlInMessage = e), n !== e && ("warn" === e || "error" === e))) {
            var r = this._getMessages();
            Object.keys(r).forEach(function (e) {
              t._checkLocaleMessage(e, t._warnHtmlInMessage, r[e]);
            });
          }
        }),
        (J.postTranslation.get = function () {
          return this._postTranslation;
        }),
        (J.postTranslation.set = function (e) {
          this._postTranslation = e;
        }),
        (Q.prototype._getMessages = function () {
          return this._vm.messages;
        }),
        (Q.prototype._getDateTimeFormats = function () {
          return this._vm.dateTimeFormats;
        }),
        (Q.prototype._getNumberFormats = function () {
          return this._vm.numberFormats;
        }),
        (Q.prototype._warnDefault = function (e, t, n, r, a, i) {
          if (!p(n)) return n;
          if (this._missing) {
            var o = this._missing.apply(null, [e, t, r, a]);
            if (c(o)) return o;
          } else 0;
          if (this._formatFallbackMessages) {
            var s = f.apply(void 0, a);
            return this._render(t, i, s.params, t);
          }
          return t;
        }),
        (Q.prototype._isFallbackRoot = function (e) {
          return !e && !p(this._root) && this._fallbackRoot;
        }),
        (Q.prototype._isSilentFallbackWarn = function (e) {
          return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(e) : this._silentFallbackWarn;
        }),
        (Q.prototype._isSilentFallback = function (e, t) {
          return this._isSilentFallbackWarn(t) && (this._isFallbackRoot() || e !== this.fallbackLocale);
        }),
        (Q.prototype._isSilentTranslationWarn = function (e) {
          return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(e) : this._silentTranslationWarn;
        }),
        (Q.prototype._interpolate = function (e, t, n, r, a, i, o) {
          if (!t) return null;
          var s,
            l = this._path.getPathValue(t, n);
          if (Array.isArray(l) || h(l)) return l;
          if (p(l)) {
            if (!h(t)) return null;
            if (!c((s = t[n]))) return null;
          } else {
            if (!c(l)) return null;
            s = l;
          }
          return (s.indexOf("@:") >= 0 || s.indexOf("@.") >= 0) && (s = this._link(e, t, s, r, "raw", i, o)), this._render(s, a, i, n);
        }),
        (Q.prototype._link = function (e, t, n, r, a, i, o) {
          var s = n,
            l = s.match(H);
          for (var c in l)
            if (l.hasOwnProperty(c)) {
              var u = l[c],
                h = u.match(W),
                p = h[0],
                f = h[1],
                d = u.replace(p, "").replace(q, "");
              if (m(o, d)) return s;
              o.push(d);
              var v = this._interpolate(e, t, d, r, "raw" === a ? "string" : a, "raw" === a ? void 0 : i, o);
              if (this._isFallbackRoot(v)) {
                if (!this._root) throw Error("unexpected error");
                var g = this._root.$i18n;
                v = g._translate(g._getMessages(), g.locale, g.fallbackLocale, d, r, a, i);
              }
              (v = this._warnDefault(e, d, v, r, Array.isArray(i) ? i : [i], a)),
                this._modifiers.hasOwnProperty(f) ? (v = this._modifiers[f](v)) : G.hasOwnProperty(f) && (v = G[f](v)),
                o.pop(),
                (s = v ? s.replace(u, v) : s);
            }
          return s;
        }),
        (Q.prototype._render = function (e, t, n, r) {
          var a = this._formatter.interpolate(e, n, r);
          return a || (a = K.interpolate(e, n, r)), "string" !== t || c(a) ? a : a.join("");
        }),
        (Q.prototype._appendItemToChain = function (e, t, n) {
          var r = !1;
          return (
            m(e, t) || ((r = !0), t && ((r = "!" !== t[t.length - 1]), (t = t.replace(/!/g, "")), e.push(t), n && n[t] && (r = n[t]))), r
          );
        }),
        (Q.prototype._appendLocaleToChain = function (e, t, n) {
          var r,
            a = t.split("-");
          do {
            var i = a.join("-");
            (r = this._appendItemToChain(e, i, n)), a.splice(-1, 1);
          } while (a.length && !0 === r);
          return r;
        }),
        (Q.prototype._appendBlockToChain = function (e, t, n) {
          for (var r = !0, a = 0; a < t.length && "boolean" == typeof r; a++) {
            var i = t[a];
            c(i) && (r = this._appendLocaleToChain(e, i, n));
          }
          return r;
        }),
        (Q.prototype._getLocaleChain = function (e, t) {
          if ("" === e) return [];
          this._localeChainCache || (this._localeChainCache = {});
          var n = this._localeChainCache[e];
          if (!n) {
            t || (t = this.fallbackLocale), (n = []);
            for (var r, a = [e]; s(a); ) a = this._appendBlockToChain(n, a, t);
            (a = c((r = s(t) ? t : l(t) ? (t.default ? t.default : null) : t)) ? [r] : r) && this._appendBlockToChain(n, a, null),
              (this._localeChainCache[e] = n);
          }
          return n;
        }),
        (Q.prototype._translate = function (e, t, n, r, a, i, o) {
          for (var s, l = this._getLocaleChain(t, n), c = 0; c < l.length; c++) {
            var u = l[c];
            if (!p((s = this._interpolate(u, e[u], r, a, i, o, [r])))) return s;
          }
          return null;
        }),
        (Q.prototype._t = function (e, t, n, r) {
          for (var a, i = [], o = arguments.length - 4; o-- > 0; ) i[o] = arguments[o + 4];
          if (!e) return "";
          var s = f.apply(void 0, i),
            l = s.locale || t,
            c = this._translate(n, l, this.fallbackLocale, e, r, "string", s.params);
          if (this._isFallbackRoot(c)) {
            if (!this._root) throw Error("unexpected error");
            return (a = this._root).$t.apply(a, [e].concat(i));
          }
          return (
            (c = this._warnDefault(l, e, c, r, i, "string")), this._postTranslation && null != c && (c = this._postTranslation(c, e)), c
          );
        }),
        (Q.prototype.t = function (e) {
          for (var t, n = [], r = arguments.length - 1; r-- > 0; ) n[r] = arguments[r + 1];
          return (t = this)._t.apply(t, [e, this.locale, this._getMessages(), null].concat(n));
        }),
        (Q.prototype._i = function (e, t, n, r, a) {
          var i = this._translate(n, t, this.fallbackLocale, e, r, "raw", a);
          if (this._isFallbackRoot(i)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n.i(e, t, a);
          }
          return this._warnDefault(t, e, i, r, [a], "raw");
        }),
        (Q.prototype.i = function (e, t, n) {
          return e ? (c(t) || (t = this.locale), this._i(e, t, this._getMessages(), null, n)) : "";
        }),
        (Q.prototype._tc = function (e, t, n, r, a) {
          for (var i, o = [], s = arguments.length - 5; s-- > 0; ) o[s] = arguments[s + 5];
          if (!e) return "";
          void 0 === a && (a = 1);
          var l = { count: a, n: a },
            c = f.apply(void 0, o);
          return (
            (c.params = Object.assign(l, c.params)),
            (o = null === c.locale ? [c.params] : [c.locale, c.params]),
            this.fetchChoice((i = this)._t.apply(i, [e, t, n, r].concat(o)), a)
          );
        }),
        (Q.prototype.fetchChoice = function (e, t) {
          if (!e && !c(e)) return null;
          var n = e.split("|");
          return n[(t = this.getChoiceIndex(t, n.length))] ? n[t].trim() : e;
        }),
        (Q.prototype.tc = function (e, t) {
          for (var n, r = [], a = arguments.length - 2; a-- > 0; ) r[a] = arguments[a + 2];
          return (n = this)._tc.apply(n, [e, this.locale, this._getMessages(), null, t].concat(r));
        }),
        (Q.prototype._te = function (e, t, n) {
          for (var r = [], a = arguments.length - 3; a-- > 0; ) r[a] = arguments[a + 3];
          var i = f.apply(void 0, r).locale || t;
          return this._exist(n[i], e);
        }),
        (Q.prototype.te = function (e, t) {
          return this._te(e, this.locale, this._getMessages(), t);
        }),
        (Q.prototype.getLocaleMessage = function (e) {
          return d(this._vm.messages[e] || {});
        }),
        (Q.prototype.setLocaleMessage = function (e, t) {
          ("warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage) ||
            this._checkLocaleMessage(e, this._warnHtmlInMessage, t),
            this._vm.$set(this._vm.messages, e, t);
        }),
        (Q.prototype.mergeLocaleMessage = function (e, t) {
          ("warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage) ||
            this._checkLocaleMessage(e, this._warnHtmlInMessage, t),
            this._vm.$set(this._vm.messages, e, _({}, this._vm.messages[e] || {}, t));
        }),
        (Q.prototype.getDateTimeFormat = function (e) {
          return d(this._vm.dateTimeFormats[e] || {});
        }),
        (Q.prototype.setDateTimeFormat = function (e, t) {
          this._vm.$set(this._vm.dateTimeFormats, e, t), this._clearDateTimeFormat(e, t);
        }),
        (Q.prototype.mergeDateTimeFormat = function (e, t) {
          this._vm.$set(this._vm.dateTimeFormats, e, _(this._vm.dateTimeFormats[e] || {}, t)), this._clearDateTimeFormat(e, t);
        }),
        (Q.prototype._clearDateTimeFormat = function (e, t) {
          for (var n in t) {
            var r = e + "__" + n;
            this._dateTimeFormatters.hasOwnProperty(r) && delete this._dateTimeFormatters[r];
          }
        }),
        (Q.prototype._localizeDateTime = function (e, t, n, r, a) {
          for (var i = t, o = r[i], s = this._getLocaleChain(t, n), l = 0; l < s.length; l++) {
            var c = s[l];
            if (((i = c), !p((o = r[c])) && !p(o[a]))) break;
          }
          if (p(o) || p(o[a])) return null;
          var u = o[a],
            h = i + "__" + a,
            f = this._dateTimeFormatters[h];
          return f || (f = this._dateTimeFormatters[h] = new Intl.DateTimeFormat(i, u)), f.format(e);
        }),
        (Q.prototype._d = function (e, t, n) {
          if (!n) return new Intl.DateTimeFormat(t).format(e);
          var r = this._localizeDateTime(e, t, this.fallbackLocale, this._getDateTimeFormats(), n);
          if (this._isFallbackRoot(r)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n.d(e, n, t);
          }
          return r || "";
        }),
        (Q.prototype.d = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
          var r = this.locale,
            a = null;
          return (
            1 === t.length
              ? c(t[0])
                ? (a = t[0])
                : l(t[0]) && (t[0].locale && (r = t[0].locale), t[0].key && (a = t[0].key))
              : 2 === t.length && (c(t[0]) && (a = t[0]), c(t[1]) && (r = t[1])),
            this._d(e, r, a)
          );
        }),
        (Q.prototype.getNumberFormat = function (e) {
          return d(this._vm.numberFormats[e] || {});
        }),
        (Q.prototype.setNumberFormat = function (e, t) {
          this._vm.$set(this._vm.numberFormats, e, t), this._clearNumberFormat(e, t);
        }),
        (Q.prototype.mergeNumberFormat = function (e, t) {
          this._vm.$set(this._vm.numberFormats, e, _(this._vm.numberFormats[e] || {}, t)), this._clearNumberFormat(e, t);
        }),
        (Q.prototype._clearNumberFormat = function (e, t) {
          for (var n in t) {
            var r = e + "__" + n;
            this._numberFormatters.hasOwnProperty(r) && delete this._numberFormatters[r];
          }
        }),
        (Q.prototype._getNumberFormatter = function (e, t, n, r, a, i) {
          for (var o = t, s = r[o], l = this._getLocaleChain(t, n), c = 0; c < l.length; c++) {
            var u = l[c];
            if (((o = u), !p((s = r[u])) && !p(s[a]))) break;
          }
          if (p(s) || p(s[a])) return null;
          var h,
            f = s[a];
          if (i) h = new Intl.NumberFormat(o, Object.assign({}, f, i));
          else {
            var d = o + "__" + a;
            (h = this._numberFormatters[d]) || (h = this._numberFormatters[d] = new Intl.NumberFormat(o, f));
          }
          return h;
        }),
        (Q.prototype._n = function (e, t, n, r) {
          if (!Q.availabilities.numberFormat) return "";
          if (!n) return (r ? new Intl.NumberFormat(t, r) : new Intl.NumberFormat(t)).format(e);
          var a = this._getNumberFormatter(e, t, this.fallbackLocale, this._getNumberFormats(), n, r),
            i = a && a.format(e);
          if (this._isFallbackRoot(i)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n.n(e, Object.assign({}, { key: n, locale: t }, r));
          }
          return i || "";
        }),
        (Q.prototype.n = function (e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; ) t[n] = arguments[n + 1];
          var r = this.locale,
            a = null,
            o = null;
          return (
            1 === t.length
              ? c(t[0])
                ? (a = t[0])
                : l(t[0]) &&
                  (t[0].locale && (r = t[0].locale),
                  t[0].key && (a = t[0].key),
                  (o = Object.keys(t[0]).reduce(function (e, n) {
                    var r;
                    return m(i, n) ? Object.assign({}, e, (((r = {})[n] = t[0][n]), r)) : e;
                  }, null)))
              : 2 === t.length && (c(t[0]) && (a = t[0]), c(t[1]) && (r = t[1])),
            this._n(e, r, a, o)
          );
        }),
        (Q.prototype._ntp = function (e, t, n, r) {
          if (!Q.availabilities.numberFormat) return [];
          if (!n) return (r ? new Intl.NumberFormat(t, r) : new Intl.NumberFormat(t)).formatToParts(e);
          var a = this._getNumberFormatter(e, t, this.fallbackLocale, this._getNumberFormats(), n, r),
            i = a && a.formatToParts(e);
          if (this._isFallbackRoot(i)) {
            if (!this._root) throw Error("unexpected error");
            return this._root.$i18n._ntp(e, t, n, r);
          }
          return i || [];
        }),
        Object.defineProperties(Q.prototype, J),
        Object.defineProperty(Q, "availabilities", {
          get: function () {
            if (!U) {
              var e = "undefined" != typeof Intl;
              U = { dateTimeFormat: e && void 0 !== Intl.DateTimeFormat, numberFormat: e && void 0 !== Intl.NumberFormat };
            }
            return U;
          },
        }),
        (Q.install = R),
        (Q.version = "8.18.2");
      var X = Q,
        Z = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "el-container",
            { class: ["ec-doc", "ec-doc-" + e.shared.docType, "ec-doc-locale-" + e.shared.locale] },
            [
              n(
                "el-aside",
                { staticStyle: { height: "100%" }, attrs: { width: "300px" } },
                [
                  n("div", { staticClass: "doc-type-nav" }, [
                    n("a", { class: { selected: "option" === e.shared.docType }, attrs: { href: "option.html#title" } }, [
                      e._v(e._s(e.$t("nav.option"))),
                    ]),
                    e._v(" "),
                    n("a", { class: { selected: "api" === e.shared.docType }, attrs: { href: "api.html#echarts" } }, [
                      e._v(e._s(e.$t("nav.API"))),
                    ]),
                    e._v(" "),
                    n("a", { class: { selected: "option-gl" === e.shared.docType }, attrs: { href: "option-gl.html" } }, [
                      e._v(e._s(e.$t("nav.optionGL"))),
                    ]),
                    e._v(" "),
                    n(
                      "a",
                      {
                        staticClass: "handbook-link",
                        attrs: { href: "https://echarts.apache.org/handbook/" + e.shared.locale + "/get-started", target: "blank" },
                      },
                      [e._v(e._s(e.$t("nav.tutorial")))]
                    ),
                  ]),
                  e._v(" "),
                  n("Search"),
                  e._v(" "),
                  n("DocNav"),
                ],
                1
              ),
              e._v(" "),
              n("el-main", [e.shared.fuzzySearch ? n("SearchResult") : n("DocContent", { key: e.pagePath })], 1),
            ],
            1
          );
        };
      Z._withStripped = !0;
      var Y = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { directives: [{ name: "loading", rawName: "v-loading", value: e.loading, expression: "loading" }], staticClass: "doc-nav" },
          [
            e.isOption ? n("h3", [e._v(e._s(e.title))]) : e._e(),
            e._v(" "),
            n("div", { staticClass: "toolbox" }, [
              e.isOption
                ? n("span", { staticClass: "item", on: { click: e.collapseAll } }, [
                    n("i", { staticClass: "el-icon-s-fold" }),
                    e._v(e._s(e.$t("nav.collapseAll"))),
                  ])
                : e._e(),
            ]),
            e._v(" "),
            n("el-tree", {
              ref: "tree",
              attrs: {
                "node-key": "path",
                "empty-text": "",
                props: e.props,
                lazy: "",
                "default-expanded-keys": e.expandedKeys,
                indent: 10,
                "expand-on-click-node": !1,
                load: e.loadTreeNode,
                data: e.treeData,
                "current-node-key": e.initialSelectedNode,
              },
              on: { "current-change": e.onSelectNode },
              scopedSlots: e._u(
                [
                  {
                    key: "default",
                    fn: function (t) {
                      var r = t.node,
                        a = t.data;
                      return "tutorial" !== e.shared.docType
                        ? n("div", { staticClass: "doc-nav-item" }, [
                            n("span", [e._v(e._s((r.expanded && a.labelExpanded) || a.label))]),
                            e._v(" "),
                            null != a.defaultValue
                              ? n("span", { staticClass: "default-value" }, [e._v(e._s(a.defaultValue))])
                              : r.isLeaf
                              ? n("span", { staticClass: "default-value" }, [e._v("...")])
                              : e._e(),
                            e._v(" "),
                            a.isRoot || r.expanded ? e._e() : n("span", [e._v(",")]),
                          ])
                        : n("div", { staticClass: "doc-nav-item" }, [n("span", [e._v(e._s(a.label))])]);
                    },
                  },
                ],
                null,
                !0
              ),
            }),
          ],
          1
        );
      };
      Y._withStripped = !0;
      var ee,
        te,
        ne,
        re,
        ae = n(20),
        ie = n(22);
      function oe(e) {
        return (oe =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var se,
        le,
        ce = {},
        ue = {},
        he = [];
      function pe(e) {
        return new Promise(function (t, n) {
          var r = Object(ie.getDocJSONPVarNname)(e),
            a = "".concat(ee, "/").concat(e, "?").concat(ne),
            i = document.createElement("script");
          (i.async = !0),
            (i.onload = function () {
              window[r] ? t(window[r]) : n("Load failed. ".concat(r));
            }),
            (i.src = a),
            document.body.appendChild(i);
        });
      }
      function fe(e) {
        return "doc-content-" + e.replace(/[\. <>]/g, "-");
      }
      function de() {
        if (!re) throw new Error("Preload json with url first");
        return re;
      }
      function me(e, t, n, r) {
        return (
          e,
          (ee = t),
          (te = n),
          (ne = r || "1"),
          re ||
            (re = pe("".concat(te, "-outline.js")).then(function (e) {
              return (function (e) {
                function t(e, t, n) {
                  return e ? e + n + t : t;
                }
                function n(e, r) {
                  e.type || (e.type = oe(e.default)), e.type instanceof Array || (e.type = [e.type]);
                  for (var a = 0; a < e.type.length; a++) "*" === e.type[a] && (e.type[a] = "any");
                  if ((e.arrayItemType ? (e.path = t(r.path, e.arrayItemType, "-")) : (e.path = t(r.path, e.prop, ".")), e.children)) {
                    e.path.indexOf(".") < 0 && !e.children[0].arrayItemType && (se[e.path] = e);
                    for (var i = 0; i < e.children.length; i++) n(e.children[i], e);
                  }
                  ue[e.path] = e;
                }
                e, (se = {});
                for (var r = 0; r < e.children.length; r++) n(e.children[r], {});
                return (e.isRoot = !0), (he = Object.keys(ue)), e;
              })(e);
            })),
          re
        );
      }
      function ve(e) {
        if (!se) throw new Error("Outline data is not loaded.");
        var t = e.split(".")[0],
          n = se[t] && e ? te + "." + t : te;
        if (!ce[n]) {
          var r = pe("".concat(n, ".js"));
          (ce[n] = { fetcher: r }),
            r.then(function (e) {
              ce[n].indexer = (function (e, t) {
                var n,
                  r = [];
                for (var a in e)
                  r.push({ path: t ? t + "." + a : a, content: e[a].desc, text: ((n = e[a].desc), n.replace(/<[^>]*>?/gm, "")) });
                return {
                  search: function (e) {
                    var t = [],
                      n = e
                        .split(/[ +,]/)
                        .filter(function (e) {
                          return !!e;
                        })
                        .map(function (e) {
                          return new RegExp(e, "i");
                        });
                    if (!n.length) return t;
                    for (var a = 0; a < r.length; a++) {
                      for (var i = !0, o = 0; o < n.length; o++)
                        if (!n[o].test(r[a].text) && !n[o].test(r[a].path)) {
                          i = !1;
                          break;
                        }
                      i && t.push(r[a]);
                    }
                    return t;
                  },
                };
              })(e, t);
            });
        }
        return ce[n];
      }
      function ge(e) {
        return ve(e).fetcher;
      }
      function _e(e) {
        return ue[e];
      }
      function ye(e) {
        if (!e) return Object.keys(se)[0];
        if (_e(e.replace("[i]", ""))) return e.replace("[i]", "");
        var t,
          n = e.split(".").map(function (e) {
            var t = _e(e),
              n = t && t.children && t && t.children[0];
            return n && n.arrayItemType ? e + "-" + n.arrayItemType : e;
          });
        if (_e(n.join("."))) return n.join(".");
        for (var r = -1 / 0, a = 0; a < he.length; a++) {
          var i = he[a],
            o = Object(ae.stringSimilarity)(e, i);
          o > r && ((r = o), (t = i));
        }
        return t;
      }
      function be(e) {
        return (be =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      var xe = ["auto", "top", "bottom", "right"];
      function Ee(e) {
        (Se.computedOptionExampleLayout = "auto" === e ? (window.innerWidth < 1400 ? "bottom" : "right") : e),
          (Se.optionExampleLayout = e),
          window.localStorage && window.localStorage.setItem("_ec_option_example_layout", e);
      }
      var we,
        Ce,
        Oe =
          ((we = {}),
          !(Ce = window.localStorage && window.localStorage.getItem("_ec_option_example_layout")) || "auto" === Ce || xe.indexOf(Ce) < 0
            ? ((we.mode = "auto"), (we.computedMode = window.innerWidth < 1400 ? "bottom" : "right"))
            : (we.mode = we.computedMode = Ce),
          we),
        Se = {
          docType: "",
          currentPath: "",
          fuzzySearch: !1,
          searchQuery: "",
          isMobile: !1,
          locale: "zh",
          showOptionExample: !1,
          allOptionExamples: null,
          cleanMode: !1,
          currentExampleName: "",
          currentExampleOption: "",
          optionExampleLayout: Oe.mode,
          computedOptionExampleLayout: Oe.computedMode,
        };
      function Me() {
        if (Se.isMobile) {
          var e = Se.currentPath.split("."),
            t = _e(Se.currentPath);
          return t && (!t.children || !t.children.length) && e.length > 1 && e.pop(), e.join(".");
        }
        return Se.currentPath.split(".")[0];
      }
      function ke() {
        return "option" === Se.docType || "option-gl" === Se.docType;
      }
      var Te = ["markPoint", "markLine", "markArea", "tooltip", "axisPointer"];
      function Ne(e, t, n) {
        function r(e, t, a, i) {
          var o = t.shift();
          if (
            ((i = (i ? i + "." : "") + o),
            "data" !== a || ("object" === be(e) && !Array.isArray(e)) || (e = { value: e }),
            (e = Object.assign({}, e)),
            !t.length)
          )
            return void 0 === n ? (delete e[o], e) : ((e[o] = n), e);
          var s = o.split("-"),
            l = s[0],
            c = s[1];
          if (null == e[l]) {
            var u = _e(i);
            e[l] =
              (function (e) {
                return "markPoint" === e
                  ? { data: [{ type: "max" }] }
                  : "markLine" === e
                  ? { data: [{ type: "average" }] }
                  : "markArea" === e
                  ? { data: [[{ type: "min" }, { type: "max" }]] }
                  : void 0;
              })(l) || (u && u.isArray ? [] : {});
          }
          var h = e[l];
          return (
            Array.isArray(h)
              ? "series" === l
                ? (e[l] = h.map(function (e, n) {
                    return c && e.type !== c ? e : r(e, t.slice(), l, i);
                  }))
                : ((e[l] = h.slice()), (e[l][0] = r(e[l][0] || {}, t.slice(), l, i)))
              : (c && h.type !== c && (e[l] = h), (e[l] = r(h, t.slice(), l, i))),
            e
          );
        }
        var a = t.split(".")[0];
        return "timeline" === a && e.baseOption
          ? Object.assign({}, e, { baseOption: r(e.baseOption, t.split("."), "", "") })
          : Te.indexOf(a) >= 0
          ? (function e(n, a) {
              if (n[a]) return r(n, t.split("."), "", "");
              if (Array.isArray(n)) {
                for (var i = [], o = 0; o < n.length; o++) i.push(e(n[o], a));
                return i;
              }
              if ("object" === be(n)) {
                var s = {};
                for (var l in n) n.hasOwnProperty(l) && (s[l] = e(n[l], a));
                return s;
              }
              return n;
            })(e, a)
          : r(e, t.split("."), "", "");
      }
      function Ae() {
        var e = decodeURIComponent(window.location.hash.slice(1));
        if (e.startsWith("/search/")) {
          var t = e.substr("/search/".length);
          (Se.fuzzySearch = !0), (Se.searchQuery = t);
        } else e && ((Se.currentPath = e), (Se.fuzzySearch = !1));
      }
      function Ie(e) {
        window.location.hash = "#" + encodeURIComponent(e);
      }
      var Re = n(19),
        Le = n.n(Re);
      function De(e, t) {
        var n = [];
        return (
          t.children &&
            t.children.forEach(function (e) {
              var t, r;
              n.push(
                (((r = { path: (t = e).path }).path = t.path),
                t.arrayItemType
                  ? ((r.label = "{type: ".concat(t.arrayItemType, ", ...}")), (r.labelExpanded = "{"))
                  : null != t.default
                  ? ((r.defaultValue = t.default), (r.label = t.prop + ": "), (r.leaf = !0))
                  : t.isArray
                  ? ((r.label = t.prop + ": [{...}]"), (r.labelExpanded = t.prop + ": [{"))
                  : t.isObject
                  ? ((r.label = t.prop + ": {...}"), (r.labelExpanded = t.prop + ": {"))
                  : ((r.label = t.prop), (r.leaf = !0)),
                (r.$source = Object.freeze(t)),
                r)
              );
            }),
          n
        );
      }
      var Pe = {
        data: function () {
          return {
            props: { isLeaf: "leaf" },
            title: "setOption({",
            treeData: [],
            expandedKeys: [],
            loading: !0,
            shared: Se,
            initialSelectedNode: Se.currentPath,
          };
        },
        created: function () {
          this.updateTreeSelectionAndExpand();
        },
        computed: {
          isOption: function () {
            return ke();
          },
        },
        methods: {
          updateTreeSelectionAndExpand: function () {
            this.expandedKeys = [];
            for (var e, t = this.shared.currentPath; (e = t.lastIndexOf(".")) >= 0 || (e = t.lastIndexOf("-")) >= 0; )
              (t = t.substr(0, e)), this.expandedKeys.push(t);
          },
          loadTreeNode: function (e, t) {
            var n = this;
            0 === e.level
              ? ((this.loading = !1),
                de().then(function (r) {
                  t(De(e.data, r)),
                    setTimeout(function () {
                      n.scrollToCurrentTreeNode();
                    }, 200);
                }))
              : e.data.children && e.data.children.length
              ? t(e.data.children)
              : e.data.$source
              ? t(De(e.data, e.data.$source))
              : t([]);
          },
          onSelectNode: function (e, t) {
            this.shared.currentPath = e.path;
          },
          scrollToCurrentTreeNode: function () {
            var e = this.$el.querySelector(".el-tree-node.is-current");
            if (e) {
              var t = e.getBoundingClientRect(),
                n = this.$el.getBoundingClientRect();
              (t.top > n.bottom || t.bottom < n.top) && Le()(e, { time: 500, align: { top: 0.1 } });
            }
          },
          manualSelectNode: function (e) {
            var t = this;
            this.updateTreeSelectionAndExpand(),
              setTimeout(function () {
                t.$refs.tree.setCurrentKey(null),
                  t.$refs.tree.setCurrentKey(e),
                  setTimeout(function () {
                    t.scrollToCurrentTreeNode();
                  }, 200);
              }, 50);
          },
          collapseAll: function () {
            for (var e in this.$refs.tree.store.nodesMap) this.$refs.tree.store.nodesMap[e].expanded = !1;
          },
        },
        watch: {
          "shared.currentPath": function (e) {
            Ie(e), this.manualSelectNode(e);
          },
        },
      };
      n(32);
      function $e(e, t, n, r, a, i, o, s) {
        var l,
          c = "function" == typeof e ? e.options : e;
        if (
          (t && ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          i && (c._scopeId = "data-v-" + i),
          o
            ? ((l = function (e) {
                (e =
                  e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (e = __VUE_SSR_CONTEXT__),
                  a && a.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(o);
              }),
              (c._ssrRegister = l))
            : a &&
              (l = s
                ? function () {
                    a.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
                  }
                : a),
          l)
        )
          if (c.functional) {
            c._injectStyles = l;
            var u = c.render;
            c.render = function (e, t) {
              return l.call(t), u(e, t);
            };
          } else {
            var h = c.beforeCreate;
            c.beforeCreate = h ? [].concat(h, l) : [l];
          }
        return { exports: e, options: c };
      }
      var je = $e(Pe, Y, [], !1, null, null, null);
      je.options.__file = "src/components/DocNav.vue";
      var Fe = je.exports,
        Ve = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { directives: [{ name: "loading", rawName: "v-loading", value: e.loading, expression: "loading" }], staticClass: "doc-main" },
            [
              n(
                "div",
                {
                  ref: "docContentDom",
                  class: [
                    "doc-content",
                    e.shared.showOptionExample ? "option-example-actived" : "",
                    "option-example-" + e.shared.computedOptionExampleLayout + "-layout",
                  ],
                },
                [
                  n("h2", { attrs: { id: e.pageId } }, [e._v(e._s(e.pageTitle))]),
                  e._v(" "),
                  e.pageDesc
                    ? n("div", {
                        directives: [{ name: "highlight", rawName: "v-highlight" }],
                        staticClass: "page-description",
                        domProps: { innerHTML: e._s(e.pageDesc) },
                      })
                    : e._e(),
                  e._v(" "),
                  e.pageDisplayOutline.children && e.pageDisplayOutline.children && 1 <= e.maxDepth
                    ? n(
                        "div",
                        [
                          n("h3", [e._v(e._s(e.$t("content.properties")))]),
                          e._v(" "),
                          e._l(e.pageDisplayOutline.children, function (t) {
                            return n("DocContentItemCard", {
                              key: t.path,
                              attrs: { "node-data": t, "desc-map": e.pageDescMap, "max-depth": e.maxDepth, depth: 1 },
                              on: { "scroll-to-self": e.scrollTo, "toggle-expanded": e.handleCardExpandToggle },
                            });
                          }),
                        ],
                        2
                      )
                    : e._e(),
                ]
              ),
              e._v(" "),
              e.showLiveExample
                ? [
                    e.shared.showOptionExample
                      ? n("LiveExample", { ref: "liveExample" })
                      : n("div", { staticClass: "open-option-example", on: { click: e.openOptionExample } }, [
                          n("i", { staticClass: "el-icon-data-line" }),
                          e._v(" " + e._s(e.$t("example.titleShort")) + "\n        "),
                        ]),
                  ]
                : e._e(),
            ],
            2
          );
        };
      Ve._withStripped = !0;
      var ze = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          {
            class: [
              "doc-content-item-card",
              "level-" + e.depth,
              e.isLeaf ? "leaf" : "",
              e.shared.currentPath === e.nodeData.path ? "current" : "",
            ],
            attrs: { id: e.itemId },
          },
          [
            e.expanded ? n("div", { staticClass: "hierarchy-line" }) : e._e(),
            e._v(" "),
            n("h4", [
              e.depth > 1 ? n("span", { staticClass: "guider" }) : e._e(),
              e._v(" "),
              e.supportsExpandable
                ? n("i", {
                    staticClass: "expand-toggle",
                    class: e.expanded ? "el-icon-remove-outline" : "el-icon-circle-plus-outline",
                    on: { click: e.toggleExpanded },
                  })
                : e._e(),
              e._v(" "),
              e.shared.isMobile
                ? e._e()
                : n(
                    "span",
                    { staticClass: "path-parent" },
                    e._l(e.parentPath, function (t) {
                      return n("a", { key: t.link, attrs: { href: "#" + t.link } }, [e._v(e._s(t.text) + ".")]);
                    }),
                    0
                  ),
              e._v(" "),
              n("span", { staticClass: "path-base" }, [n("a", { attrs: { href: "#" + e.baseName.link } }, [e._v(e._s(e.baseName.text))])]),
              e._v(" "),
              e.shared.currentPath === e.nodeData.path
                ? n("span", { staticClass: "current-flag" }, [n("i", { staticClass: "el-icon-caret-left" })])
                : e._e(),
              e._v(" "),
              e.nodeData.default && "*" !== e.nodeData.default
                ? n("span", { staticClass: "default-value" }, [e._v(" = " + e._s(e.nodeData.default))])
                : e._e(),
              e._v(" "),
              e.uiControl && e.shared.allOptionExamples && !e.shared.isMobile
                ? n("span", { class: ["control-toggle", e.enableUIControl ? "active" : ""], on: { click: e.toggleUIControl } }, [
                    n("i", [e._v("")]),
                    e._v(" " + e._s(e.$t("example.tryDesc")) + "\n            "),
                  ])
                : e._e(),
            ]),
            e._v(" "),
            n(
              "div",
              { staticClass: "prop-types" },
              e._l(e.nodeData.type, function (t) {
                return n("span", { key: t, class: ["prop-type", "prop-type-" + t.toLowerCase()] }, [e._v(e._s(t))]);
              }),
              0
            ),
            e._v(" "),
            e.enableUIControl ? n("OptionControl", { attrs: { controlConfig: e.uiControl, optionPath: e.nodeData.path } }) : e._e(),
            e._v(" "),
            n("div", {
              directives: [{ name: "highlight", rawName: "v-highlight" }],
              staticClass: "item-description",
              domProps: { innerHTML: e._s(e.desc) },
            }),
            e._v(" "),
            e.supportsExpandable && e.expanded
              ? n(
                  "div",
                  { staticClass: "children" },
                  e._l(e.nodeData.children, function (t) {
                    return n("DocContentItemCard", {
                      key: t.path,
                      attrs: { "node-data": t, "desc-map": e.descMap, depth: e.depth + 1, "max-depth": e.maxDepth },
                      on: { "toggle-expanded": e.bubbleEventToggleExapndedEvent, "scroll-to-self": e.bubbleScrollToSelfEvent },
                    });
                  }),
                  1
                )
              : e._e(),
            e._v(" "),
            (e.expanded && !e.shared.isMobile) || e.isLeaf
              ? e._e()
              : n("PropertiesList", { attrs: { nodeData: e.nodeData, descMap: e.descMap } }),
          ],
          1
        );
      };
      ze._withStripped = !0;
      var Ue = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "properties-list-panel" }, [
          n("h5", [e._v(e._s(e.$t("content.properties")))]),
          e._v(" "),
          n(
            "div",
            { staticClass: "properties-list" },
            [
              e._v("\n        {\n        "),
              e._l(e.displayedProperties, function (t, r) {
                return n(
                  "span",
                  { key: t.path },
                  [
                    e.shared.isMobile
                      ? n("span", [
                          n("a", { attrs: { slot: "reference", href: "#" + t.path }, slot: "reference" }, [e._v(e._s(e.getName(t.path)))]),
                        ])
                      : n(
                          "el-popover",
                          {
                            attrs: { title: e.getName(t.path), "close-delay": 400, "open-delay": 200, placement: "top", trigger: "hover" },
                          },
                          [
                            n("div", {
                              directives: [{ name: "highlight", rawName: "v-highlight" }],
                              staticClass: "property-popup-desc",
                              domProps: { innerHTML: e._s(e.getDesc(t.path)) },
                            }),
                            e._v(" "),
                            n("a", { attrs: { slot: "reference", href: "#" + t.path }, slot: "reference" }, [
                              e._v(e._s(e.getName(t.path))),
                            ]),
                          ]
                        ),
                    e._v(" "),
                    r < e.displayedProperties.length - 1 ? n("span", [e._v(", ")]) : e._e(),
                  ],
                  1
                );
              }),
              e._v("\n        }\n    "),
            ],
            2
          ),
        ]);
      };
      Ue._withStripped = !0;
      var Be = {
          props: ["nodeData", "descMap"],
          data: function () {
            return { shared: Se };
          },
          computed: {
            displayedProperties: function () {
              return this.nodeData.children;
            },
          },
          methods: {
            getDesc: function (e) {
              return this.descMap[e] && this.descMap[e].desc;
            },
            getName: function (e) {
              return e.split(".").pop();
            },
          },
        },
        He = (n(33), $e(Be, Ue, [], !1, null, null, null));
      He.options.__file = "src/components/PropertiesList.vue";
      var We = He.exports,
        qe = function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t(
            "div",
            { staticClass: "option-control" },
            [
              t(
                this.uiComponent,
                this._b(
                  { tag: "component", attrs: { value: this.defaultValue }, on: { change: this.onValueChange } },
                  "component",
                  this.uiAttrs,
                  !1
                )
              ),
            ],
            1
          );
        };
      qe._withStripped = !0;
      var Ge = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "control-color" },
          [
            n("el-color-picker", {
              attrs: { "show-alpha": !0 },
              on: { change: e.onValueChange, "active-change": e.onActiveChange },
              model: {
                value: e.innerValue,
                callback: function (t) {
                  e.innerValue = t;
                },
                expression: "innerValue",
              },
            }),
            e._v(" "),
            n("span", { style: { color: e.innerValue || "#aaa" } }, [
              e._v("\n    " + e._s(e.innerValue || e.$t("example.defaultColor")) + "\n"),
            ]),
          ],
          1
        );
      };
      Ge._withStripped = !0;
      var Ke = {
          props: ["value"],
          data: function () {
            return { innerValue: this.value };
          },
          watch: {
            value: function (e) {
              this.innerValue = e;
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", this.innerValue);
            },
            onActiveChange: function (e) {},
          },
        },
        Qe = (n(34), $e(Ke, Ge, [], !1, null, null, null));
      Qe.options.__file = "src/controls/ControlColor.vue";
      var Je = Qe.exports,
        Xe = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-boolean" },
            [
              n("el-switch", {
                attrs: { "active-text": e.$t("example.booleanDesc") },
                on: { change: e.onValueChange },
                model: {
                  value: e.innerValue,
                  callback: function (t) {
                    e.innerValue = t;
                  },
                  expression: "innerValue",
                },
              }),
            ],
            1
          );
        };
      Xe._withStripped = !0;
      var Ze = $e(
        {
          props: ["value"],
          data: function () {
            return { innerValue: "true" === this.value };
          },
          watch: {
            value: function (e) {
              this.innerValue = e;
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", this.innerValue);
            },
          },
        },
        Xe,
        [],
        !1,
        null,
        null,
        null
      );
      Ze.options.__file = "src/controls/ControlBoolean.vue";
      var Ye = Ze.exports,
        et = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-number" },
            [
              n("el-input-number", {
                attrs: {
                  "controls-position": "right",
                  min: null == e.min ? -1e4 : +e.min,
                  max: null == e.max ? 1e4 : +e.max,
                  step: null == e.step ? 1 : +e.step,
                  size: "mini",
                },
                on: { change: e.onValueChange },
                model: {
                  value: e.innerValue,
                  callback: function (t) {
                    e.innerValue = t;
                  },
                  expression: "innerValue",
                },
              }),
            ],
            1
          );
        };
      et._withStripped = !0;
      var tt = {
          props: ["value", "min", "max", "step"],
          data: function () {
            return { innerValue: this.value };
          },
          watch: {
            value: function (e) {
              this.innerValue = e;
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", this.innerValue);
            },
          },
        },
        nt = (n(35), $e(tt, et, [], !1, null, null, null));
      nt.options.__file = "src/controls/ControlNumber.vue";
      var rt = nt.exports,
        at = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-vector" },
            [
              n("el-switch", {
                attrs: { "active-text": e.$t("example.vectorSetSeparate") },
                model: {
                  value: e.innerSeparate,
                  callback: function (t) {
                    e.innerSeparate = t;
                  },
                  expression: "innerSeparate",
                },
              }),
              e._v(" "),
              e.innerSeparate
                ? n(
                    "div",
                    { staticClass: "control-vector-group" },
                    e._l(e.dimsArr, function (t, r) {
                      return n(
                        "div",
                        { key: r },
                        [
                          n("label", [e._v(e._s(t))]),
                          e._v(" "),
                          n("el-input-number", {
                            attrs: {
                              "controls-position": "right",
                              min: null == e.min ? -1e4 : +e.min,
                              max: null == e.max ? 1e4 : +e.max,
                              step: null == e.step ? 1 : +e.step,
                              size: "mini",
                            },
                            on: { change: e.onValueChange },
                            model: {
                              value: e.innerValueArr[r],
                              callback: function (t) {
                                e.$set(e.innerValueArr, r, t);
                              },
                              expression: "innerValueArr[index]",
                            },
                          }),
                        ],
                        1
                      );
                    }),
                    0
                  )
                : n("el-input-number", {
                    attrs: {
                      "controls-position": "right",
                      size: "mini",
                      min: null == e.min ? -1e4 : +e.min,
                      max: null == e.max ? 1e4 : +e.max,
                      step: null == e.step ? 1 : +e.step,
                    },
                    on: { change: e.onValueChange },
                    model: {
                      value: e.innerValueArr[0],
                      callback: function (t) {
                        e.$set(e.innerValueArr, 0, t);
                      },
                      expression: "innerValueArr[0]",
                    },
                  }),
            ],
            1
          );
        };
      at._withStripped = !0;
      var it = {
          props: ["value", "separate", "min", "max", "step", "dims"],
          data: function () {
            return {
              innerSeparate: "true" === this.separate,
              innerValueArr: this.value.split(",").map(function (e) {
                return +e.trim();
              }),
            };
          },
          computed: {
            dimsArr: function () {
              return this.dims.split(",").map(function (e) {
                return e.trim();
              });
            },
          },
          watch: {
            value: function (e) {
              this.innerValueArr = this.value.split(",").map(function (e) {
                return +e.trim();
              });
            },
          },
          methods: {
            onValueChange: function () {
              if (!this.innerSeparate) for (var e = 1; e < this.innerValueArr.length; e++) this.innerValueArr[e] = this.innerValueArr[0];
              this.$emit("change", this.innerValueArr.slice());
            },
          },
        },
        ot = (n(36), $e(it, at, [], !1, null, null, null));
      ot.options.__file = "src/controls/ControlVector.vue";
      var st = ot.exports,
        lt = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-enum" },
            [
              n(
                "el-select",
                {
                  attrs: { size: "mini" },
                  on: { change: e.onValueChange },
                  model: {
                    value: e.innerValue,
                    callback: function (t) {
                      e.innerValue = t;
                    },
                    expression: "innerValue",
                  },
                },
                e._l(e.optionsArr, function (t) {
                  return n("el-option", { key: t, class: { "control-enum-special": null != e.specialValues[t] }, attrs: { value: t } }, [
                    e._v(e._s(t)),
                  ]);
                }),
                1
              ),
            ],
            1
          );
        };
      lt._withStripped = !0;
      var ct = { true: !0, false: !1 },
        ut = {
          props: ["value", "options"],
          computed: {
            optionsArr: function () {
              return this.options.split(",").map(function (e) {
                return e.trim();
              });
            },
            specialValues: function () {
              return ct;
            },
          },
          data: function () {
            return { innerValue: this.value };
          },
          watch: {
            value: function (e) {
              this.innerValue = e;
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", ct.hasOwnProperty(this.innerValue) ? ct[this.innerValue] : this.innerValue);
            },
          },
        },
        ht = (n(37), $e(ut, lt, [], !1, null, null, null));
      ht.options.__file = "src/controls/ControlEnum.vue";
      var pt = ht.exports,
        ft = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-percent" },
            [
              n(
                "el-radio-group",
                {
                  attrs: { size: "mini" },
                  model: {
                    value: e.mode,
                    callback: function (t) {
                      e.mode = t;
                    },
                    expression: "mode",
                  },
                },
                [
                  n("el-radio-button", { attrs: { label: "absolute" } }, [e._v(e._s(e.$t("example.absoluteMode")))]),
                  e._v(" "),
                  n("el-radio-button", { attrs: { label: "percent" } }, [e._v(e._s(e.$t("example.percentMode")))]),
                ],
                1
              ),
              e._v(" "),
              "absolute" === e.mode
                ? n("el-input-number", {
                    attrs: {
                      "controls-position": "right",
                      size: "mini",
                      min: null == e.min ? -1e4 : +e.min,
                      max: null == e.max ? 1e4 : +e.max,
                      step: null == e.step ? 1 : +e.step,
                    },
                    on: { change: e.onValueChange },
                    model: {
                      value: e.absoluteValue,
                      callback: function (t) {
                        e.absoluteValue = t;
                      },
                      expression: "absoluteValue",
                    },
                  })
                : n(
                    "div",
                    [
                      n("el-slider", {
                        attrs: { min: 0, max: 100, step: 1, "format-tooltip": e.formatTooltip },
                        on: { change: e.onValueChange },
                        model: {
                          value: e.percentValue,
                          callback: function (t) {
                            e.percentValue = t;
                          },
                          expression: "percentValue",
                        },
                      }),
                      e._v(" "),
                      n("el-input-number", {
                        attrs: { "controls-position": "right", size: "mini", min: 0, max: 100, step: 1 },
                        on: { change: e.onValueChange },
                        model: {
                          value: e.percentValue,
                          callback: function (t) {
                            e.percentValue = t;
                          },
                          expression: "percentValue",
                        },
                      }),
                    ],
                    1
                  ),
            ],
            1
          );
        };
      ft._withStripped = !0;
      var dt = {
          props: ["value", "min", "max", "step"],
          data: function () {
            var e = this.value.indexOf("%") < 0;
            return {
              percentValue: e ? 50 : +this.value.replace("%", ""),
              absoluteValue: e ? +this.value : 0,
              mode: e ? "absolute" : "percent",
            };
          },
          watch: {
            value: function (e) {
              "absolute" === this.mode ? (this.absoluteValue = +e) : (this.percentValue = +e.replace("%", ""));
            },
            mode: function () {
              this.onValueChange();
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", "absolute" === this.mode ? this.absoluteValue : this.percentValue + "%");
            },
            formatTooltip: function (e) {
              return e + "%";
            },
          },
        },
        mt = (n(38), $e(dt, ft, [], !1, null, null, null));
      mt.options.__file = "src/controls/ControlPercent.vue";
      var vt = mt.exports,
        gt = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-percent-vector" },
            e._l(e.dimsArr, function (t, r) {
              return n(
                "div",
                { key: r },
                [
                  n("label", [e._v(e._s(t))]),
                  e._v(" "),
                  n("ControlPercent", {
                    attrs: {
                      value: e.innerValueArr[r],
                      "controls-position": "right",
                      min: null == e.min ? -1e4 : +e.min,
                      max: null == e.max ? 1e4 : +e.max,
                      step: null == e.step ? 1 : +e.step,
                    },
                    on: {
                      change: function (t) {
                        return e.onValueChange(r, t);
                      },
                    },
                  }),
                ],
                1
              );
            }),
            0
          );
        };
      gt._withStripped = !0;
      var _t = {
          components: { ControlPercent: vt },
          props: ["value", "min", "max", "step", "dims"],
          data: function () {
            return {
              innerValueArr: this.value.split(",").map(function (e) {
                return e.trim();
              }),
            };
          },
          computed: {
            dimsArr: function () {
              return this.dims.split(",").map(function (e) {
                return e.trim();
              });
            },
          },
          watch: {
            value: function (e) {
              this.innerValueArr = this.value.split(",").map(function (e) {
                return e.trim();
              });
            },
          },
          methods: {
            onValueChange: function (e, t) {
              (this.innerValueArr[e] = t), this.$emit("change", this.innerValueArr.slice());
            },
          },
        },
        yt = (n(39), $e(_t, gt, [], !1, null, null, null));
      yt.options.__file = "src/controls/ControlPercentVector.vue";
      var bt = yt.exports,
        xt = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-text" },
            [
              n("el-input", {
                attrs: { size: "mini", placeholder: e.$t("example.inputPlaceholder") },
                on: { change: e.onValueChange },
                model: {
                  value: e.innerValue,
                  callback: function (t) {
                    e.innerValue = t;
                  },
                  expression: "innerValue",
                },
              }),
            ],
            1
          );
        };
      xt._withStripped = !0;
      var Et = $e(
        {
          props: ["value"],
          data: function () {
            return { innerValue: this.value };
          },
          watch: {
            value: function (e) {
              this.innerValue = e;
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", this.innerValue);
            },
          },
        },
        xt,
        [],
        !1,
        null,
        null,
        null
      );
      Et.options.__file = "src/controls/ControlText.vue";
      var wt = Et.exports,
        Ct = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "control-icon" },
            [
              n(
                "el-select",
                {
                  attrs: { size: "mini" },
                  on: { change: e.onValueChange },
                  model: {
                    value: e.innerValue,
                    callback: function (t) {
                      e.innerValue = t;
                    },
                    expression: "innerValue",
                  },
                },
                e._l(e.optionsArr, function (t) {
                  return n("el-option", { key: t, attrs: { value: t } }, [e._v(e._s(t))]);
                }),
                1
              ),
              e._v(" "),
              n("el-button", { attrs: { size: "mini", type: "primary" }, on: { click: e.chooseFile } }, [
                e._v(e._s(e.$t("example.upload"))),
              ]),
            ],
            1
          );
        };
      function Ot(e) {
        return (Ot =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
      }
      (Ct._withStripped = !0),
        (SVGElement.prototype.getTransformToElement =
          SVGElement.prototype.getTransformToElement ||
          function (e) {
            return e.getScreenCTM().inverse().multiply(this.getScreenCTM());
          });
      var St = /,?([achlmqrstvxz]),?/gi,
        Mt = function (e) {
          return e.join(",").replace(St, "$1");
        };
      function kt(e, t, n, r, a) {
        if (e)
          if (
            (void 0 === r && (r = !1),
            void 0 === t && (t = !1),
            void 0 === n && (n = !1),
            void 0 === a && (a = !1),
            e && e.children && e.children.length)
          ) {
            for (var i = 0, o = e.children.length; i < o; i++) kt(e.children[i], t, n, r, a);
            e.removeAttribute("transform");
          } else if (
            e instanceof SVGCircleElement ||
            e instanceof SVGRectElement ||
            e instanceof SVGEllipseElement ||
            e instanceof SVGLineElement ||
            e instanceof SVGPolygonElement ||
            e instanceof SVGPolylineElement ||
            e instanceof SVGPathElement
          ) {
            var s,
              l = (function (e, t) {
                if (!e) return;
                for (
                  var n = document.createElementNS(e.ownerSVGElement.namespaceURI, "path"),
                    r = [
                      "requiredFeatures",
                      "requiredExtensions",
                      "systemLanguage",
                      "id",
                      "xml:base",
                      "xml:lang",
                      "xml:space",
                      "onfocusin",
                      "onfocusout",
                      "onactivate",
                      "onclick",
                      "onmousedown",
                      "onmouseup",
                      "onmouseover",
                      "onmousemove",
                      "onmouseout",
                      "onload",
                      "alignment-baseline",
                      "baseline-shift",
                      "clip",
                      "clip-path",
                      "clip-rule",
                      "color",
                      "color-interpolation",
                      "color-interpolation-filters",
                      "color-profile",
                      "color-rendering",
                      "cursor",
                      "direction",
                      "display",
                      "dominant-baseline",
                      "enable-background",
                      "fill",
                      "fill-opacity",
                      "fill-rule",
                      "filter",
                      "flood-color",
                      "flood-opacity",
                      "font-family",
                      "font-size",
                      "font-size-adjust",
                      "font-stretch",
                      "font-style",
                      "font-variant",
                      "font-weight",
                      "glyph-orientation-horizontal",
                      "glyph-orientation-vertical",
                      "image-rendering",
                      "kerning",
                      "letter-spacing",
                      "lighting-color",
                      "marker-end",
                      "marker-mid",
                      "marker-start",
                      "mask",
                      "opacity",
                      "overflow",
                      "pointer-events",
                      "shape-rendering",
                      "stop-color",
                      "stop-opacity",
                      "stroke",
                      "stroke-dasharray",
                      "stroke-dashoffset",
                      "stroke-linecap",
                      "stroke-linejoin",
                      "stroke-miterlimit",
                      "stroke-opacity",
                      "stroke-width",
                      "text-anchor",
                      "text-decoration",
                      "text-rendering",
                      "unicode-bidi",
                      "visibility",
                      "word-spacing",
                      "writing-mode",
                      "class",
                      "style",
                      "externalResourcesRequired",
                      "transform",
                      "d",
                      "pathLength",
                    ],
                    a = 0,
                    i = r.length;
                  a < i;
                  a++
                ) {
                  var o,
                    s = r[a];
                  (o = e.getAttribute(s)) && n.setAttribute(s, o);
                }
                var l = "",
                  c = function (e) {
                    return !("number" != typeof e || e == 1 / 0 || e < 0);
                  },
                  u = 1.81,
                  h = e.tagName;
                switch (h) {
                  case "ellipse":
                  case "circle":
                    var p = +e.getAttribute("rx"),
                      f = +e.getAttribute("ry"),
                      d = +e.getAttribute("cx"),
                      m = +e.getAttribute("cy");
                    "circle" == h && (p = f = +e.getAttribute("r")),
                      (l += Mt([
                        ["M", d - p, m],
                        ["C", d - p, m - f / u, d - p / u, m - f, d, m - f],
                        ["C", d + p / u, m - f, d + p, m - f / u, d + p, m],
                        ["C", d + p, m + f / u, d + p / u, m + f, d, m + f],
                        ["C", d - p / u, m + f, d - p, m + f / u, d - p, m],
                        ["Z"],
                      ]));
                    break;
                  case "path":
                    l = e.getAttribute("d");
                    break;
                  case "line":
                    var v = e.getAttribute("x1"),
                      g = e.getAttribute("y1");
                    (x2 = e.getAttribute("x2")), (y2 = e.getAttribute("y2")), (l = "M" + v + "," + g + "L" + x2 + "," + y2);
                    break;
                  case "polyline":
                    l = "M" + e.getAttribute("points");
                    break;
                  case "polygon":
                    l = "M" + e.getAttribute("points") + "Z";
                    break;
                  case "rect":
                    (p = +e.getAttribute("rx")), (f = +e.getAttribute("ry"));
                    var _ = e.getBBox(),
                      y = _.x,
                      b = _.y,
                      x = _.width,
                      E = _.height;
                    if (
                      (c(p) || c(f)
                        ? c(p) && !c(f)
                          ? (f = p)
                          : c(f) && !c(p)
                          ? (p = f)
                          : (p > x / 2 && (p = x / 2), f > E / 2 && (f = E / 2))
                        : (p = f = 0),
                      p || f)
                    )
                      if (t)
                        l += Mt([
                          ["M", y + p, b],
                          ["H", y + x - p],
                          ["A", p, f, 0, 0, 1, y + x, b + f],
                          ["V", b + E - f],
                          ["A", p, f, 0, 0, 1, y + x - p, b + E],
                          ["H", y + p],
                          ["A", p, f, 0, 0, 1, y, b + E - f],
                          ["V", b + f],
                          ["A", p, f, 0, 0, 1, y + p, b],
                        ]);
                      else {
                        f || (f = p),
                          (l += Mt([
                            ["M", y, b + f],
                            ["C", y, b + f / (u = 2.19), y + p / u, b, y + p, b],
                            ["L", y + x - p, b],
                            ["C", y + x - p / u, b, y + x, b + f / u, y + x, b + f],
                            ["L", y + x, b + E - f],
                            ["C", y + x, b + E - f / u, y + x - p / u, b + E, y + x - p, b + E],
                            ["L", y + p, b + E],
                            ["C", y + p / u, b + E, y, b + E - f / u, y, b + E - f],
                            ["L", y, b + f],
                            ["Z"],
                          ]));
                      }
                    else l += Mt([["M", y, b], ["L", y + x, b], ["L", y + x, b + E], ["L", y, b + E], ["L", y, b], ["Z"]]);
                }
                l && n.setAttribute("d", l);
                return e.parentNode.replaceChild(n, e), n;
              })(e, r);
            if (!l || "" == l.getAttribute(u)) return "M 0 0";
            a || 0 === a ? (a > 15 ? (a = 15) : a < 0 && (a = 0)) : (a = !1);
            var c = l,
              u = c.getAttribute("d").trim();
            if (t) h = s = Yt(u);
            else {
              var h = (s = Gt(u));
              s = Kt(s);
            }
            var p,
              f,
              d = c.ownerSVGElement,
              m = c.getTransformToElement(d),
              v = ((i = 0), s.length),
              g = "",
              _ = "",
              y = 0,
              b = 0,
              x = [],
              E = d.createSVGPoint(),
              w = {},
              C = 0,
              O = 0;
            for (w.x = null, w.y = null; i < v; i++) {
              if (((g = s[i][0].toUpperCase()), (_ = h[i][0]), (x[i] = []), (x[i][0] = s[i][0]), "A" == g))
                (y = s[i][6]),
                  (b = s[i][7]),
                  (E.x = s[i][6]),
                  (E.y = s[i][7]),
                  (x[i] = Tt(s[i][1], s[i][2], s[i][3], s[i][4], s[i][5], E, m)),
                  (x[i][1] = x[i][1]),
                  (x[i][2] = x[i][2]),
                  (x[i][3] = x[i][3]),
                  (x[i][6] = x[i][6]),
                  (x[i][7] = x[i][7]);
              else if ("Z" != g)
                for (p = 1; p < s[i].length; p += 2)
                  "V" == g ? (b = s[i][p]) : "H" == g ? (y = s[i][p]) : ((y = s[i][p]), (b = s[i][p + 1])),
                    (E.x = y),
                    (E.y = b),
                    (f = E.matrixTransform(m)),
                    "V" == g || "H" == g ? ((x[i][0] = "L"), (x[i][p] = f.x), (x[i][p + 1] = f.y)) : ((x[i][p] = f.x), (x[i][p + 1] = f.y));
              (("Z" != g && null === w.x) || "M" == g) && ((w.x = y), (w.y = b)), "Z" == g && ((y = w.x), (b = w.y));
            }
            var S = 0,
              M = 0;
            for (w.x = "", i = 0; i < x.length; i++) {
              if ("A" == (_ = h[i][0]) || "M" == _ || "L" == _ || "C" == _ || "S" == _ || "Q" == _ || "T" == _ || "H" == _ || "V" == _) {
                var k = (T = x[i].length);
                if ("A" == _) (x[i][6] = N(x[i][6])), (x[i][7] = N(x[i][7]));
                else for (k--; --k; ) x[i][k] = N(x[i][k]);
                (C = x[i][T - 2]), (O = x[i][T - 1]);
              } else if ("a" == _)
                (S = x[i][6]), (M = x[i][7]), (x[i][0] = _), (x[i][6] = N(x[i][6] - C)), (x[i][7] = N(x[i][7] - O)), (C = S), (O = M);
              else if ("m" == _ || "l" == _ || "c" == _ || "s" == _ || "q" == _ || "t" == _ || "h" == _ || "v" == _) {
                var T = x[i].length;
                for (S = x[i][T - 2], M = x[i][T - 1], p = 1; p < T; p += 2)
                  (x[i][0] = "h" == _ || "v" == _ ? "l" : _), (x[i][p] = N(x[i][p] - C)), (x[i][p + 1] = N(x[i][p + 1] - O));
                (C = S), (O = M);
              }
              (("z" != _.toLowerCase() && "" == w.x) || "m" == _.toLowerCase()) && ((w.x = C), (w.y = O)),
                "z" == _.toLowerCase() && ((C = w.x), (O = w.y));
            }
            n && (x = Kt(x)), l.setAttribute("d", Mt(x)), l.removeAttribute("transform");
          }
        function N(e) {
          return !1 !== a ? Math.round(e * Math.pow(10, a)) / Math.pow(10, a) : e;
        }
      }
      function Tt(e, t, n, r, a, i, o, s) {
        function l(e) {
          return Math.abs(e) < 1e-16;
        }
        var c,
          u,
          h,
          p,
          f,
          d,
          m,
          v,
          g,
          _,
          y,
          b = [];
        if (
          ((c = e),
          (u = t),
          (h = n *= Math.PI / 180),
          (p = parseFloat(Math.sin(h))),
          (f = parseFloat(Math.cos(h))),
          (b[0] = o.a * +c * f + o.c * c * p),
          (b[1] = o.b * +c * f + o.d * c * p),
          (b[2] = o.a * -u * p + o.c * u * f),
          (b[3] = o.b * -u * p + o.d * u * f),
          (g = (d = b[0] * b[0] + b[2] * b[2]) - (v = b[1] * b[1] + b[3] * b[3])),
          l((m = 2 * (b[0] * b[1] + b[2] * b[3]))))
        )
          (n = 0), (_ = d), (y = v);
        else if (l(g)) (_ = d + 0.5 * m), (y = d - 0.5 * m), (n = Math.PI / 4);
        else {
          var x = 1 + (m * m) / (g * g);
          (_ = 0.5 * (d + v + (x = x < 0 ? 0 : Math.sqrt(x)) * g)), (y = 0.5 * (d + v - x * g)), (n = 0.5 * Math.atan2(m, g));
        }
        return (
          (_ = _ < 0 ? 0 : Math.sqrt(_)),
          (y = y < 0 ? 0 : Math.sqrt(y)),
          g <= 0 ? ((t = _), (e = y)) : ((t = y), (e = _)),
          o.a * o.d - o.b * o.c < 0 && (a = a ? 0 : 1),
          (i = i.matrixTransform(o)),
          ["A", e, t, (n = (180 * n) / Math.PI), r, a, i.x, i.y]
        );
      }
      var Nt = {},
        At = "hasOwnProperty",
        It = String,
        Rt = { NaN: 1, Infinity: 1, "-Infinity": 1 },
        Lt = It.prototype.toLowerCase,
        Dt = It.prototype.toUpperCase,
        Pt = Object.prototype.toString,
        $t = "concat",
        jt = Math,
        Ft = jt.max,
        Vt = (jt.min, jt.abs, jt.pow, jt.PI),
        zt = (jt.round, parseFloat),
        Ut =
          (parseInt,
          (St = /,?([achlmqrstvxz]),?/gi),
          /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi),
        Bt =
          /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi;
      (Nt.is = function (e, t) {
        return "finite" == (t = Lt.call(t))
          ? !Rt[At](+e)
          : "array" == t
          ? e instanceof Array
          : ("null" == t && null === e) ||
            (t == Ot(e) && null !== e) ||
            ("object" == t && e === Object(e)) ||
            ("array" == t && Array.isArray && Array.isArray(e)) ||
            Pt.call(e).slice(8, -1).toLowerCase() == t;
      }),
        (Nt._path2string = function () {
          return this.join(",").replace(St, "$1");
        });
      var Ht = function (e) {
          var t = (function e(t) {
            if (Object(t) !== t) return t;
            var n = new t.constructor();
            for (var r in t) t[At](r) && (n[r] = e(t[r]));
            return n;
          })(e);
          return (t.toString = Nt._path2string), t;
        },
        Wt = function e(t) {
          var n = (e.ps = e.ps || {});
          return (
            n[t] ? (n[t].sleep = 100) : (n[t] = { sleep: 100 }),
            setTimeout(function () {
              for (var e in n) n[At](e) && e != t && (n[e].sleep--, !n[e].sleep && delete n[e]);
            }),
            n[t]
          );
        };
      function qt(e, t) {
        for (var n = [], r = 0, a = e.length; a - 2 * !t > r; r += 2) {
          var i = [
            { x: +e[r - 2], y: +e[r - 1] },
            { x: +e[r], y: +e[r + 1] },
            { x: +e[r + 2], y: +e[r + 3] },
            { x: +e[r + 4], y: +e[r + 5] },
          ];
          t
            ? r
              ? a - 4 == r
                ? (i[3] = { x: +e[0], y: +e[1] })
                : a - 2 == r && ((i[2] = { x: +e[0], y: +e[1] }), (i[3] = { x: +e[2], y: +e[3] }))
              : (i[0] = { x: +e[a - 2], y: +e[a - 1] })
            : a - 4 == r
            ? (i[3] = i[2])
            : r || (i[0] = { x: +e[r], y: +e[r + 1] }),
            n.push([
              "C",
              (-i[0].x + 6 * i[1].x + i[2].x) / 6,
              (-i[0].y + 6 * i[1].y + i[2].y) / 6,
              (i[1].x + 6 * i[2].x - i[3].x) / 6,
              (i[1].y + 6 * i[2].y - i[3].y) / 6,
              i[2].x,
              i[2].y,
            ]);
        }
        return n;
      }
      var Gt = function (e) {
        if (!e) return null;
        var t = Wt(e);
        if (t.arr) return Ht(t.arr);
        var n = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 },
          r = [];
        return (
          Nt.is(e, "array") && Nt.is(e[0], "array") && (r = Ht(e)),
          r.length ||
            It(e).replace(Ut, function (e, t, a) {
              var i = [],
                o = t.toLowerCase();
              if (
                (a.replace(Bt, function (e, t) {
                  t && i.push(+t);
                }),
                "m" == o && i.length > 2 && (r.push([t][$t](i.splice(0, 2))), (o = "l"), (t = "m" == t ? "l" : "L")),
                "r" == o)
              )
                r.push([t][$t](i));
              else for (; i.length >= n[o] && (r.push([t][$t](i.splice(0, n[o]))), n[o]); );
            }),
          (r.toString = Nt._path2string),
          (t.arr = Ht(r)),
          r
        );
      };
      var Kt = Qt(function (e) {
        if (((Nt.is(e, "array") && Nt.is(e && e[0], "array")) || (e = Gt(e)), !e || !e.length)) return [["M", 0, 0]];
        var t = [],
          n = 0,
          r = 0,
          a = 0,
          i = 0,
          o = 0;
        "M" == e[0][0] && ((a = n = +e[0][1]), (i = r = +e[0][2]), o++, (t[0] = ["M", n, r]));
        for (
          var s,
            l,
            c = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(),
            u = o,
            h = e.length;
          u < h;
          u++
        ) {
          if ((t.push((s = [])), (l = e[u])[0] != Dt.call(l[0])))
            switch (((s[0] = Dt.call(l[0])), s[0])) {
              case "A":
                (s[1] = l[1]), (s[2] = l[2]), (s[3] = l[3]), (s[4] = l[4]), (s[5] = l[5]), (s[6] = +(l[6] + n)), (s[7] = +(l[7] + r));
                break;
              case "V":
                s[1] = +l[1] + r;
                break;
              case "H":
                s[1] = +l[1] + n;
                break;
              case "R":
                for (var p = [n, r][$t](l.slice(1)), f = 2, d = p.length; f < d; f++) (p[f] = +p[f] + n), (p[++f] = +p[f] + r);
                t.pop(), (t = t[$t](qt(p, c)));
                break;
              case "M":
                (a = +l[1] + n), (i = +l[2] + r);
              default:
                for (f = 1, d = l.length; f < d; f++) s[f] = +l[f] + (f % 2 ? n : r);
            }
          else if ("R" == l[0]) (p = [n, r][$t](l.slice(1))), t.pop(), (t = t[$t](qt(p, c))), (s = ["R"][$t](l.slice(-2)));
          else for (var m = 0, v = l.length; m < v; m++) s[m] = l[m];
          switch (s[0]) {
            case "Z":
              (n = a), (r = i);
              break;
            case "H":
              n = s[1];
              break;
            case "V":
              r = s[1];
              break;
            case "M":
              (a = s[s.length - 2]), (i = s[s.length - 1]);
            default:
              (n = s[s.length - 2]), (r = s[s.length - 1]);
          }
        }
        return (t.toString = Nt._path2string), t;
      });
      function Qt(e, t, n) {
        return function r() {
          var a = Array.prototype.slice.call(arguments, 0),
            i = a.join("␀"),
            o = (r.cache = r.cache || {}),
            s = (r.count = r.count || []);
          if (o.hasOwnProperty(i)) {
            for (var l = 0, c = s.length; l < c; l++) s[l] === i && s.push(s.splice(l, 1)[0]);
            return n ? n(o[i]) : o[i];
          }
          return s.length >= 1e3 && delete o[s.shift()], s.push(i), (o[i] = e.apply(t, a)), n ? n(o[i]) : o[i];
        };
      }
      var Jt = function (e, t, n, r) {
          return [e, t, n, r, n, r];
        },
        Xt = function (e, t, n, r, a, i) {
          return [(1 / 3) * e + (2 / 3) * n, (1 / 3) * t + (2 / 3) * r, (1 / 3) * a + (2 / 3) * n, (1 / 3) * i + (2 / 3) * r, a, i];
        },
        Zt = Qt(function (e, t, n, r, a, i, o, s, l, c) {
          var u,
            h = (120 * Vt) / 180,
            p = (Vt / 180) * (+a || 0),
            f = [],
            d = Qt(function (e, t, n) {
              return { x: e * Math.cos(n) - t * Math.sin(n), y: e * Math.sin(n) + t * Math.cos(n) };
            });
          if (c) (w = c[0]), (C = c[1]), (x = c[2]), (E = c[3]);
          else {
            (e = (u = d(e, t, -p)).x), (t = u.y), (s = (u = d(s, l, -p)).x), (l = u.y);
            Math.cos((Vt / 180) * a), Math.sin((Vt / 180) * a);
            var m = (e - s) / 2,
              v = (t - l) / 2,
              g = (m * m) / (n * n) + (v * v) / (r * r);
            g > 1 && ((n *= g = Math.sqrt(g)), (r *= g));
            var _ = n * n,
              y = r * r,
              b = (i == o ? -1 : 1) * Math.sqrt(Math.abs((_ * y - _ * v * v - y * m * m) / (_ * v * v + y * m * m))),
              x = (b * n * v) / r + (e + s) / 2,
              E = (b * -r * m) / n + (t + l) / 2,
              w = Math.asin(((t - E) / r).toFixed(9)),
              C = Math.asin(((l - E) / r).toFixed(9));
            (w = e < x ? Vt - w : w) < 0 && (w = 2 * Vt + w),
              (C = s < x ? Vt - C : C) < 0 && (C = 2 * Vt + C),
              o && w > C && (w -= 2 * Vt),
              !o && C > w && (C -= 2 * Vt);
          }
          var O = C - w;
          if (Math.abs(O) > h) {
            var S = C,
              M = s,
              k = l;
            (C = w + h * (o && C > w ? 1 : -1)),
              (s = x + n * Math.cos(C)),
              (l = E + r * Math.sin(C)),
              (f = Zt(s, l, n, r, a, 0, o, M, k, [C, S, x, E]));
          }
          O = C - w;
          var T = Math.cos(w),
            N = Math.sin(w),
            A = Math.cos(C),
            I = Math.sin(C),
            R = Math.tan(O / 4),
            L = (4 / 3) * n * R,
            D = (4 / 3) * r * R,
            P = [e, t],
            $ = [e + L * N, t - D * T],
            j = [s + L * I, l - D * A],
            F = [s, l];
          if ((($[0] = 2 * P[0] - $[0]), ($[1] = 2 * P[1] - $[1]), c)) return [$, j, F].concat(f);
          for (var V = [], z = 0, U = (f = [$, j, F].concat(f).join().split(",")).length; z < U; z++)
            V[z] = z % 2 ? d(f[z - 1], f[z], p).y : d(f[z], f[z + 1], p).x;
          return V;
        }),
        Yt = Qt(
          function (e, t) {
            var n = !t && Wt(e);
            if (!t && n.curve) return Ht(n.curve);
            for (
              var r = Kt(e),
                a = t && Kt(t),
                i = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                o = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null },
                s = function (e, t, n) {
                  var r, a;
                  if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
                  switch ((!(e[0] in { T: 1, Q: 1 }) && (t.qx = t.qy = null), e[0])) {
                    case "M":
                      (t.X = e[1]), (t.Y = e[2]);
                      break;
                    case "A":
                      e = ["C"][$t](Zt.apply(0, [t.x, t.y][$t](e.slice(1))));
                      break;
                    case "S":
                      "C" == n || "S" == n ? ((r = 2 * t.x - t.bx), (a = 2 * t.y - t.by)) : ((r = t.x), (a = t.y)),
                        (e = ["C", r, a][$t](e.slice(1)));
                      break;
                    case "T":
                      "Q" == n || "T" == n ? ((t.qx = 2 * t.x - t.qx), (t.qy = 2 * t.y - t.qy)) : ((t.qx = t.x), (t.qy = t.y)),
                        (e = ["C"][$t](Xt(t.x, t.y, t.qx, t.qy, e[1], e[2])));
                      break;
                    case "Q":
                      (t.qx = e[1]), (t.qy = e[2]), (e = ["C"][$t](Xt(t.x, t.y, e[1], e[2], e[3], e[4])));
                      break;
                    case "L":
                      e = ["C"][$t](Jt(t.x, t.y, e[1], e[2]));
                      break;
                    case "H":
                      e = ["C"][$t](Jt(t.x, t.y, e[1], t.y));
                      break;
                    case "V":
                      e = ["C"][$t](Jt(t.x, t.y, t.x, e[1]));
                      break;
                    case "Z":
                      e = ["C"][$t](Jt(t.x, t.y, t.X, t.Y));
                  }
                  return e;
                },
                l = function (e, t) {
                  if (e[t].length > 7) {
                    e[t].shift();
                    for (var n = e[t]; n.length; ) (u[t] = "A"), a && (h[t] = "A"), e.splice(t++, 0, ["C"][$t](n.splice(0, 6)));
                    e.splice(t, 1), (m = Ft(r.length, (a && a.length) || 0));
                  }
                },
                c = function (e, t, n, i, o) {
                  e &&
                    t &&
                    "M" == e[o][0] &&
                    "M" != t[o][0] &&
                    (t.splice(o, 0, ["M", i.x, i.y]),
                    (n.bx = 0),
                    (n.by = 0),
                    (n.x = e[o][1]),
                    (n.y = e[o][2]),
                    (m = Ft(r.length, (a && a.length) || 0)));
                },
                u = [],
                h = [],
                p = "",
                f = "",
                d = 0,
                m = Ft(r.length, (a && a.length) || 0);
              d < m;
              d++
            ) {
              r[d] && (p = r[d][0]),
                "C" != p && ((u[d] = p), d && (f = u[d - 1])),
                (r[d] = s(r[d], i, f)),
                "A" != u[d] && "C" == p && (u[d] = "C"),
                l(r, d),
                a &&
                  (a[d] && (p = a[d][0]),
                  "C" != p && ((h[d] = p), d && (f = h[d - 1])),
                  (a[d] = s(a[d], o, f)),
                  "A" != h[d] && "C" == p && (h[d] = "C"),
                  l(a, d)),
                c(r, a, i, o, d),
                c(a, r, o, i, d);
              var v = r[d],
                g = a && a[d],
                _ = v.length,
                y = a && g.length;
              (i.x = v[_ - 2]),
                (i.y = v[_ - 1]),
                (i.bx = zt(v[_ - 4]) || i.x),
                (i.by = zt(v[_ - 3]) || i.y),
                (o.bx = a && (zt(g[y - 4]) || o.x)),
                (o.by = a && (zt(g[y - 3]) || o.y)),
                (o.x = a && g[y - 2]),
                (o.y = a && g[y - 1]);
            }
            return a || (n.curve = Ht(r)), a ? [r, a] : r;
          },
          null,
          Ht
        );
      var en = $e(
        {
          props: ["value"],
          computed: {
            optionsArr: function () {
              return ["circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow", "none"];
            },
          },
          data: function () {
            return { innerValue: this.value };
          },
          watch: {
            value: function (e) {
              this.innerValue = e;
            },
          },
          methods: {
            onValueChange: function () {
              this.$emit("change", this.innerValue);
            },
            chooseFile: function () {
              var e = this,
                t = document.createElement("input");
              (t.type = "file"),
                (t.accept = ".jpg, .jpeg, .png, .svg"),
                t.addEventListener("change", function (t) {
                  var n = t.target.files[0];
                  if (n)
                    if (n.name.endsWith(".svg")) {
                      var r = new FileReader();
                      r.addEventListener("load", function () {
                        var t = (function (e) {
                          var t = new DOMParser().parseFromString(e, "text/xml");
                          for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType; )
                            t = t.nextSibling;
                          return t;
                        })(r.result);
                        try {
                          kt(t);
                        } catch (e) {
                          console.error("Unexpected error happens when handling the SVG."), console.error(e.toString());
                        }
                        for (var n = t.querySelectorAll("path"), a = [], i = 0; i < n.length; i++) a.push(n[i].getAttribute("d"));
                        e.$emit("change", "path://" + a.join(" "));
                      }),
                        r.readAsText(n);
                    } else {
                      var a = new FileReader();
                      a.addEventListener("load", function () {
                        e.$emit("change", "image://" + a.result);
                      }),
                        a.readAsDataURL(n);
                    }
                }),
                t.click();
            },
          },
        },
        Ct,
        [],
        !1,
        null,
        null,
        null
      );
      en.options.__file = "src/controls/ControlIcon.vue";
      var tn = {
          boolean: Ye,
          color: Je,
          number: rt,
          vector: st,
          enum: pt,
          angle: rt,
          percent: vt,
          percentvector: bt,
          text: wt,
          icon: en.exports,
        },
        nn = {
          boolean: function () {
            return !1;
          },
          color: function () {
            return null;
          },
          number: function () {
            return 0;
          },
          angle: function () {
            return 0;
          },
          percent: function () {
            return "50";
          },
          enum: function (e) {
            return e.options.split(",")[0].trim();
          },
          vector: function (e) {
            if (!e.dims) throw new Error("Must specify dims in vector");
            return e.dims
              .split(",")
              .map(function (e) {
                return 0;
              })
              .join(",");
          },
          percentvector: function (e) {
            if (!e.dims) throw new Error("Must specify dims in vector");
            return e.dims
              .split(",")
              .map(function (e) {
                return "50%";
              })
              .join(",");
          },
        };
      var rn = {
          name: "OptionControl",
          props: ["controlConfig", "optionPath"],
          data: function () {
            return { shared: Se };
          },
          computed: {
            uiComponent: function () {
              return tn[this.controlConfig.type];
            },
            uiAttrs: function () {
              return (function (e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && "type" !== n && "default" !== n && (t[n] = e[n]);
                return t;
              })(this.controlConfig);
            },
            defaultValue: function () {
              var e = this.controlConfig;
              return null != e.default ? e.default : nn[e.type] && nn[e.type](e);
            },
          },
          methods: {
            onValueChange: function (e) {
              (this.shared.cleanMode = this.controlConfig.clean),
                this.shared.currentExampleOption &&
                  (this.shared.currentExampleOption = Object.freeze(Ne(this.shared.currentExampleOption, this.optionPath, e)));
            },
          },
        },
        an = (n(40), $e(rn, qe, [], !1, null, null, null));
      an.options.__file = "src/components/OptionControl.vue";
      var on = an.exports,
        sn = ["data", "markPoint", "markLine", "markArea", "tooltip"],
        ln = {
          name: "DocContentItemCard",
          props: ["nodeData", "descMap", "maxDepth", "depth"],
          components: { PropertiesList: We, OptionControl: on },
          data: function () {
            return { manualExpanded: null, enableUIControl: !1, shared: Se };
          },
          watch: {
            enableUIControl: function (e) {
              e
                ? (this.shared.showOptionExample || this.$emit("scroll-to-self", this.nodeData.path, 300, 100),
                  (this.shared.showOptionExample = !0))
                : (this.shared.currentExampleOption = Object.freeze(Ne(this.shared.currentExampleOption, this.nodeData.path, void 0)));
            },
            "shared.currentExampleName": function (e, t) {
              e && t && (this.enableUIControl = !1);
            },
          },
          computed: {
            itemId: function () {
              return fe(this.nodeData.path);
            },
            expanded: function () {
              if (this.isLeaf) return !1;
              if (null != this.manualExpanded) return this.manualExpanded;
              var e = this.nodeData.path.split(".");
              return (this.depth < 2 && sn.indexOf(e.pop()) < 0) || Se.currentPath.indexOf(this.nodeData.path) >= 0;
            },
            isLeaf: function () {
              return !(this.nodeData.children && this.nodeData.children.length);
            },
            supportsExpandable: function () {
              return this.depth + 1 <= this.maxDepth && !this.isLeaf;
            },
            desc: function () {
              var e = this.descMap[this.nodeData.path];
              return e && e.desc;
            },
            uiControl: function () {
              var e = this.descMap[this.nodeData.path];
              return e && e.uiControl;
            },
            parentPath: function () {
              for (var e = this.nodeData.path.split("."), t = [], n = "", r = 0; r < e.length - 1; r++)
                (n += n ? "." + e[r] : e[r]), t.push({ text: e[r], link: n });
              return t;
            },
            baseName: function () {
              return { text: this.nodeData.path.split(".").pop(), link: this.nodeData.path };
            },
          },
          methods: {
            bubbleEventToggleExapndedEvent: function () {
              this.$emit("toggle-expanded");
            },
            toggleExpanded: function () {
              (this.manualExpanded = !this.expanded), this.$emit("toggle-expanded");
            },
            toggleUIControl: function () {
              this.enableUIControl = !this.enableUIControl;
            },
            bubbleScrollToSelfEvent: function (e, t, n) {
              this.$emit("scroll-to-self", e, t, n);
            },
          },
        },
        cn = (n(41), $e(ln, ze, [], !1, null, null, null));
      cn.options.__file = "src/components/DocContentItemCard.vue";
      var un = cn.exports,
        hn = n(23),
        pn = n.n(hn),
        fn = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { class: e.shared.computedOptionExampleLayout + "-layout", attrs: { id: "example-panel" } },
            [
              n("h2", [e._v(e._s(e.$t("example.title")))]),
              e._v(" "),
              n("p", { staticClass: "intro" }, [
                e._v(e._s(e.shared.allOptionExamples ? e.$t("example.intro") : e.$t("example.noExample"))),
              ]),
              e._v(" "),
              e.shared.currentExampleOption
                ? n(
                    "div",
                    { staticClass: "preview-and-code" },
                    [
                      n("div", {
                        directives: [{ name: "loading", rawName: "v-loading", value: e.isLoading, expression: "isLoading" }],
                        staticClass: "preview-main",
                      }),
                      e._v(" "),
                      n("div", { staticClass: "example-code" }, [
                        n(
                          "div",
                          { staticClass: "codemirror-main" },
                          [
                            n("el-link", {
                              staticClass: "btn-to-editor",
                              attrs: { icon: "el-icon-edit-outline", title: e.$t("example.toEditor") },
                              on: { click: e.toEditor },
                            }),
                          ],
                          1
                        ),
                      ]),
                      e._v(" "),
                      e.hasError ? n("el-alert", { attrs: { title: e.$t("example.setOptionError"), type: "error" } }) : e._e(),
                    ],
                    1
                  )
                : e._e(),
              e._v(" "),
              n(
                "div",
                { staticClass: "toolbar" },
                [
                  e.shared.allOptionExamples
                    ? n(
                        "el-select",
                        {
                          staticClass: "example-list",
                          attrs: { size: "mini", "popper-append-to-body": !1 },
                          model: {
                            value: e.shared.currentExampleName,
                            callback: function (t) {
                              e.$set(e.shared, "currentExampleName", t);
                            },
                            expression: "shared.currentExampleName",
                          },
                        },
                        e._l(e.shared.allOptionExamples, function (t) {
                          return n("el-option", {
                            key: t.name,
                            attrs: { value: t.name, label: "en" === e.shared.locale ? t["title-en"] : t.title },
                          });
                        }),
                        1
                      )
                    : e._e(),
                  e._v(" "),
                  e.shared.currentExampleOption
                    ? n("el-button", {
                        attrs: { type: "primary", icon: "el-icon-refresh", size: "mini", title: e.$t("example.refresh") },
                        on: { click: e.refreshForce },
                      })
                    : e._e(),
                  e._v(" "),
                  n("el-button", {
                    directives: [{ name: "popover", rawName: "v-popover:changeLayoutPopover", arg: "changeLayoutPopover" }],
                    staticStyle: { "margin-left": "0" },
                    attrs: { type: "primary", icon: "el-icon-s-operation", size: "mini", title: e.$t("example.changeLayout") },
                  }),
                  e._v(" "),
                  n("el-button", { attrs: { size: "mini", circle: "", icon: "el-icon-close" }, on: { click: e.closeExamplePanel } }),
                ],
                1
              ),
              e._v(" "),
              n(
                "el-popover",
                {
                  ref: "changeLayoutPopover",
                  attrs: { placement: "bottom", trigger: "click" },
                  model: {
                    value: e.showChangeLayoutPopover,
                    callback: function (t) {
                      e.showChangeLayoutPopover = t;
                    },
                    expression: "showChangeLayoutPopover",
                  },
                },
                [
                  n("div", { staticClass: "example-change-layout" }, [
                    n("div", { staticClass: "layout-title" }, [
                      n("i", { staticClass: "el-icon-s-operation" }),
                      e._v(e._s(e.$t("example.changeLayout"))),
                    ]),
                    e._v(" "),
                    n(
                      "div",
                      { staticClass: "layout-mode" },
                      [
                        n(
                          "el-radio-group",
                          {
                            attrs: { size: "mini" },
                            on: { change: e.changeLayout },
                            model: {
                              value: e.shared.optionExampleLayout,
                              callback: function (t) {
                                e.$set(e.shared, "optionExampleLayout", t);
                              },
                              expression: "shared.optionExampleLayout",
                            },
                          },
                          e._l(e.optionExampleLayouts, function (t) {
                            return n("el-radio-button", { key: t, attrs: { label: t } }, [e._v(e._s(e.$t("example.layout." + t)))]);
                          }),
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
            ],
            1
          );
        };
      fn._withStripped = !0;
      var dn = n(24),
        mn = n.n(dn),
        vn = (n(42), n(43), n(25)),
        gn = n.n(vn);
      var _n = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        },
        yn = n(27),
        bn = "object" == typeof self && self && self.Object === Object && self,
        xn = yn.a || bn || Function("return this")(),
        En = function () {
          return xn.Date.now();
        },
        wn = /\s/;
      var Cn = function (e) {
          for (var t = e.length; t-- && wn.test(e.charAt(t)); );
          return t;
        },
        On = /^\s+/;
      var Sn = function (e) {
          return e ? e.slice(0, Cn(e) + 1).replace(On, "") : e;
        },
        Mn = xn.Symbol,
        kn = Object.prototype,
        Tn = kn.hasOwnProperty,
        Nn = kn.toString,
        An = Mn ? Mn.toStringTag : void 0;
      var In = function (e) {
          var t = Tn.call(e, An),
            n = e[An];
          try {
            e[An] = void 0;
            var r = !0;
          } catch (e) {}
          var a = Nn.call(e);
          return r && (t ? (e[An] = n) : delete e[An]), a;
        },
        Rn = Object.prototype.toString;
      var Ln = function (e) {
          return Rn.call(e);
        },
        Dn = Mn ? Mn.toStringTag : void 0;
      var Pn = function (e) {
        return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : Dn && Dn in Object(e) ? In(e) : Ln(e);
      };
      var $n = function (e) {
        return null != e && "object" == typeof e;
      };
      var jn = function (e) {
          return "symbol" == typeof e || ($n(e) && "[object Symbol]" == Pn(e));
        },
        Fn = /^[-+]0x[0-9a-f]+$/i,
        Vn = /^0b[01]+$/i,
        zn = /^0o[0-7]+$/i,
        Un = parseInt;
      var Bn = function (e) {
          if ("number" == typeof e) return e;
          if (jn(e)) return NaN;
          if (_n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = _n(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = Sn(e);
          var n = Vn.test(e);
          return n || zn.test(e) ? Un(e.slice(2), n ? 2 : 8) : Fn.test(e) ? NaN : +e;
        },
        Hn = Math.max,
        Wn = Math.min;
      var qn = function (e, t, n) {
        var r,
          a,
          i,
          o,
          s,
          l,
          c = 0,
          u = !1,
          h = !1,
          p = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function f(t) {
          var n = r,
            i = a;
          return (r = a = void 0), (c = t), (o = e.apply(i, n));
        }
        function d(e) {
          return (c = e), (s = setTimeout(v, t)), u ? f(e) : o;
        }
        function m(e) {
          var n = e - l;
          return void 0 === l || n >= t || n < 0 || (h && e - c >= i);
        }
        function v() {
          var e = En();
          if (m(e)) return g(e);
          s = setTimeout(
            v,
            (function (e) {
              var n = t - (e - l);
              return h ? Wn(n, i - (e - c)) : n;
            })(e)
          );
        }
        function g(e) {
          return (s = void 0), p && r ? f(e) : ((r = a = void 0), o);
        }
        function _() {
          var e = En(),
            n = m(e);
          if (((r = arguments), (a = this), (l = e), n)) {
            if (void 0 === s) return d(l);
            if (h) return clearTimeout(s), (s = setTimeout(v, t)), f(l);
          }
          return void 0 === s && (s = setTimeout(v, t)), o;
        }
        return (
          (t = Bn(t) || 0),
          _n(n) &&
            ((u = !!n.leading), (i = (h = "maxWait" in n) ? Hn(Bn(n.maxWait) || 0, t) : i), (p = "trailing" in n ? !!n.trailing : p)),
          (_.cancel = function () {
            void 0 !== s && clearTimeout(s), (c = 0), (r = l = a = s = void 0);
          }),
          (_.flush = function () {
            return void 0 === s ? o : g(En());
          }),
          _
        );
      };
      var Gn = function (e, t, n) {
        var r = !0,
          a = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        return (
          _n(n) && ((r = "leading" in n ? !!n.leading : r), (a = "trailing" in n ? !!n.trailing : a)),
          qn(e, t, { leading: r, maxWait: t, trailing: a })
        );
      };
      function Kn(e, t, n, r, a) {
        for (var i = t.length, o = n.length, s = e.newPos, l = s - r, c = 0; s + 1 < i && l + 1 < o && a(t[s + 1], n[l + 1]); )
          s++, l++, c++;
        return c && e.components.push({ count: c, added: !1, removed: !1, indices: [] }), (e.newPos = s), l;
      }
      function Qn(e, t, n) {
        var r = e[e.length - 1];
        r && r.added === t && r.removed === n
          ? (e[e.length - 1] = { count: r.count + 1, added: t, removed: n, indices: [] })
          : e.push({ count: 1, added: t, removed: n, indices: [] });
      }
      function Jn(e) {
        for (var t = 0, n = e.length, r = 0, a = 0; t < n; t++) {
          var i = e[t];
          if (i.removed) {
            for (s = a; s < a + i.count; s++) i.indices.push(s);
            a += i.count;
          } else {
            for (var o = [], s = r; s < r + i.count; s++) o.push(s);
            (i.indices = o), (r += i.count), i.added || (a += i.count);
          }
        }
        return e;
      }
      function Xn(e, t, n) {
        return (function (e, t, n) {
          n ||
            (n = function (e, t) {
              return e === t;
            }),
            (e = e.slice());
          var r = (t = t.slice()).length,
            a = e.length,
            i = 1,
            o = r + a,
            s = [{ newPos: -1, components: [] }],
            l = Kn(s[0], t, e, 0, n);
          if (!a || !r || (s[0].newPos + 1 >= r && l + 1 >= a)) {
            for (var c = [], u = !r && a > 0, h = !a && r > 0, p = 0; p < (u ? e : t).length; p++) c.push(p);
            return [{ indices: c, count: c.length, added: h, removed: u }];
          }
          function f() {
            for (var o = -1 * i; o <= i; o += 2) {
              var l,
                c = s[o - 1],
                u = s[o + 1],
                h = (u ? u.newPos : 0) - o;
              c && (s[o - 1] = void 0);
              var p = c && c.newPos + 1 < r,
                f = u && 0 <= h && h < a;
              if (p || f) {
                if (
                  (!p || (f && c.newPos < u.newPos)
                    ? Qn((l = { newPos: (d = u).newPos, components: d.components.slice(0) }).components, !1, !0)
                    : ((l = c).newPos++, Qn(l.components, !0, !1)),
                  (h = Kn(l, t, e, o, n)),
                  l.newPos + 1 >= r && h + 1 >= a)
                )
                  return Jn(l.components);
                s[o] = l;
              } else s[o] = void 0;
            }
            var d;
            i++;
          }
          for (; i <= o; ) {
            var d = f();
            if (d) return d;
          }
        })(e, t, n);
      }
      var Zn,
        Yn = n(26);
      function er(e, t) {
        var n = this;
        if (this.shared.currentExampleName !== this.lastUpdateExampleName)
          return (this.lastUpdateExampleName = this.shared.currentExampleName), void this.refreshForce();
        var r = this.$el.querySelector(".preview-main");
        if (r) {
          if (((this.hasError = !1), "undefined" == typeof echarts))
            (this.isLoading = !0),
              (
                Zn ||
                (Zn = new Promise(function (e, t) {
                  var n = document.createElement("script");
                  (n.src =
                    "zh" === Se.locale ? "https://registry.npmmirror.com/echarts/latest/files/dist/echarts.min.js" : "/js/echarts.min.js"),
                    (n.async = !0),
                    (n.onload = function () {
                      (Zn = null), e();
                    }),
                    (n.onerror = function () {
                      (Zn = null), t("Failed to load echarts");
                    }),
                    document.body.appendChild(n);
                }))
              )
                .then(function () {
                  n.echartsInstance || (n.chartInstance = echarts.init(r)),
                    n.shared.cleanMode && n.chartInstance.clear(),
                    n.chartInstance.setOption(e, !0);
                })
                .finally(function () {
                  n.isLoading = !1;
                });
          else {
            this.echartsInstance || (this.chartInstance = echarts.init(r));
            try {
              this.shared.cleanMode && this.chartInstance.clear(), this.chartInstance.setOption(e, !0);
            } catch (e) {
              console.error(e), (this.hasError = !0);
            }
          }
          if (this.cmInstance) {
            var a = this.cmInstance.getValue(),
              i = this.formattedOptionCodeStr;
            this.oldHighlightedLines &&
              this.oldHighlightedLines.forEach(function (e) {
                n.cmInstance.removeLineClass(e, "wrap", "option-changed");
              }),
              t
                ? (this.cmInstance.setValue(i), (this.oldHighlightedLines = []))
                : (this.oldHighlightedLines = (function (e, t, n) {
                    for (var r = e.split(/\n/), a = t.split(/\n/), i = Xn(r, a), o = [], s = i.length - 1; s >= 0; s--) {
                      var l = i[s];
                      if (l.removed)
                        for (var c = l.count - 1; c >= 0; c--) {
                          var u = l.indices[c];
                          n.replaceRange("", { line: u, ch: 0 }, { line: u + 1, ch: 0 });
                        }
                    }
                    for (var h = 0; h < i.length; h++) {
                      var p = i[h];
                      if (p.added)
                        for (var f = 0; f < p.count; f++) {
                          var d = p.indices[f];
                          n.replaceRange(a[d] + "\n", { line: d, ch: 0 }), o.push(d);
                        }
                    }
                    return (
                      o.forEach(function (e) {
                        n.addLineClass(e, "wrap", "option-changed");
                      }),
                      i.length &&
                        setTimeout(function () {
                          n.scrollIntoView({ line: o[0], ch: 0 }, n.getWrapperElement().clientHeight - 50);
                        }, 20),
                      o
                    );
                  })(a, i, this.cmInstance));
          } else
            this.cmInstance = mn()(this.$el.querySelector(".codemirror-main"), {
              value: this.formattedOptionCodeStr,
              mode: "javascript",
              theme: "dracula",
              readOnly: !0,
            });
          this.lastUpdateExampleName = this.shared.currentExampleName;
        }
      }
      var tr = {
          data: function () {
            return {
              shared: Se,
              hasError: !1,
              lastUpdateExampleName: "",
              oldHighlightedLines: [],
              showChangeLayoutPopover: !1,
              optionExampleLayouts: xe,
              isLoading: !0,
            };
          },
          mounted: function () {
            (this.resize = this.resize.bind(this)),
              window.addEventListener("resize", this.resize),
              this.resize(),
              this.shared.currentExampleOption && this.updateOptionThrottled(this.shared.currentExampleOption),
              this.shared.allOptionExamples
                ? (this.shared.currentExampleName = this.shared.allOptionExamples[0].name)
                : (this.shared.currentExampleName = "");
          },
          destroyed: function () {
            this.chartInstance && (this.chartInstance.dispose(), (this.chartInstance = null)),
              window.removeEventListener("resize", this.resize);
          },
          watch: {
            "shared.currentExampleOption": function (e) {
              e && this.updateOptionThrottled(e);
            },
            "shared.allOptionExamples": function (e) {
              this.shared.currentExampleName = e ? e[0].name : "";
            },
            "shared.currentExampleName": function (e) {
              this.changeExample(e);
            },
          },
          methods: {
            updateOption: er,
            updateOptionThrottled: Gn(er, 300, { leading: !1 }),
            resize: function () {
              var e = this.$el;
              "right" !== this.shared.computedOptionExampleLayout
                ? ((e.style.height = 0.5 * window.innerHeight - 60 + "px"), (e.style.width = "auto"))
                : ((e.style.width = 0.45 * e.parentNode.clientWidth + "px"), (e.style.height = "auto")),
                this.chartInstance && this.chartInstance.resize();
            },
            refreshForce: function () {
              this.shared.currentExampleOption &&
                (this.chartInstance && (this.chartInstance.dispose(), (this.chartInstance = null)),
                this.updateOption(this.shared.currentExampleOption, !0));
            },
            closeExamplePanel: function () {
              this.shared.showOptionExample = !1;
            },
            changeExample: function (e) {
              var t =
                this.shared.allOptionExamples &&
                this.shared.allOptionExamples.find(function (t) {
                  return t.name === e;
                });
              if (!t) return (this.shared.currentExampleOption = null), !1;
              var n = t.code;
              try {
                var r = new Function(n + "\n return option");
                this.shared.currentExampleOption = Object.freeze(r());
              } catch (e) {
                console.error(e), console.log(n);
              }
            },
            changeLayout: function (e) {
              var t = this;
              (this.showChangeLayoutPopover = !1),
                Ee(e),
                this.$nextTick(function () {
                  t.resize();
                });
            },
            toEditor: function () {
              var e = Object(Yn.compressToBase64)(this.formattedOptionCodeStr).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
              window.open("https://echarts.apache.org/examples/editor.html?code=".concat(e, "&_source=echarts-doc-preview"), "_blank");
            },
          },
          computed: {
            optionCodeStr: function () {
              var e = JSON.stringify(this.shared.currentExampleOption, function (e, t) {
                return "function" == typeof t ? "__functionstart__" + t.toString().replace(/\n/g, "__newline__") + "__functionend__" : t;
              });
              return "option = ".concat(e);
            },
            formattedOptionCodeStr: function () {
              return gn.a.js(
                this.optionCodeStr
                  .replace(/"(\w+)"\s*:/g, "$1:")
                  .replace(/"__functionstart__/g, "")
                  .replace(/__functionend__"/g, "")
                  .replace(/__newline__/g, "\n"),
                { indent_size: 2 }
              );
            },
          },
        },
        nr = (n(45), $e(tr, fn, [], !1, null, null, null));
      nr.options.__file = "src/components/LiveExample.vue";
      var rr = nr.exports,
        ar = {
          components: { DocContentItemCard: un, LiveExample: rr },
          data: function () {
            return { loading: !1, pagePath: "", shared: Se, maxDepth: 1 / 0, rootPageDescMap: {}, pageOutline: {}, pageDescMap: {} };
          },
          computed: {
            pageTitle: function () {
              return this.pagePath;
            },
            pageId: function () {
              return fe(this.pagePath);
            },
            pageDesc: function () {
              var e = this.rootPageDescMap[this.pagePath] || this.pageDescMap[this.pagePath];
              return e && e.desc;
            },
            pageExamples: function () {
              var e = this.rootPageDescMap[this.pagePath] || this.pageDescMap[this.pagePath];
              return (e && e.exampleBaseOptions) || [];
            },
            pageDisplayOutline: function () {
              return this.shared.isMobile ? _e(Me()) : this.pageOutline;
            },
            showLiveExample: function () {
              return !this.shared.isMobile && ke();
            },
            needScrollOffset: function () {
              return this.shared.showOptionExample && !this.shared.isMobile && "top" === this.shared.computedOptionExampleLayout;
            },
          },
          created: function () {
            var e = this;
            ge("").then(function (t) {
              e.rootPageDescMap = Object.freeze(t);
            }),
              (this._lazyload = new pn.a({ elements_selector: "iframe", load_delay: 300 })),
              this.updateCurrentPath(this.shared.currentPath, !0),
              (this.resize = this.resize.bind(this)),
              window.addEventListener("resize", this.resize),
              this.resize();
          },
          destroyed: function () {
            window.removeEventListener("resize", this.resize);
          },
          methods: {
            resize: function () {
              var e = this;
              "auto" === this.shared.optionExampleLayout && Ee("auto"),
                a.a.nextTick(function () {
                  e.updateDocContentMargin();
                });
            },
            updateLazyload: function () {
              var e = this;
              a.a.nextTick(function () {
                e._lazyload.update();
              });
            },
            handleCardExpandToggle: function () {
              this.updateLazyload();
            },
            scrollTo: function (e, t, n) {
              var r = this;
              setTimeout(function () {
                var n = Se.isMobile ? 100 : 20;
                r.needScrollOffset && (n += r.$refs.liveExample.$el.offsetHeight),
                  Le()(document.getElementById(fe(e)), { time: t || 400, align: { top: 0, topOffset: n } });
              }, n || 0);
            },
            updateCurrentPath: function (e, t) {
              var n = this;
              if (e)
                if (_e(e)) {
                  var r,
                    a,
                    i = Me();
                  if (i !== this.pagePath)
                    (this.loading = !0),
                      (this.pagePath = i),
                      ((r = e),
                      (a = r.split(".")[0]),
                      de().then(function () {
                        return se[a] || de();
                      }))
                        .then(function (r) {
                          return (
                            r.isRoot ? (n.maxDepth = 0) : n.shared.isMobile ? (n.maxDepth = 1) : (n.maxDepth = 1 / 0),
                            ge(e).then(function (a) {
                              n.pageOutline = Object.freeze(Object.assign({}, r));
                              var i = {},
                                o = e.split(".")[0];
                              for (var s in a) i[o + "." + s] = a[s];
                              (n.pageDescMap = Object.freeze(i)), (n.loading = !1), n.scrollTo(e, 600, t ? 300 : 50), n.updateLazyload();
                            })
                          );
                        })
                        .catch(function (e) {
                          (n.pageOutline = {}), (n.loading = !1);
                        });
                  else this.scrollTo(e);
                } else Ie(ye(e));
              else Ie(ye());
            },
            openOptionExample: function () {
              this.shared.showOptionExample = !0;
            },
            updateDocContentMargin: function (e) {
              if ((this.$refs.liveExample || e) && ((this.$refs.docContentDom.style.margin = ""), !e)) {
                var t = this.shared.computedOptionExampleLayout;
                if ("right" !== t) {
                  var n = "margin" + t[0].toUpperCase() + t.slice(1),
                    r = this.$refs.liveExample.$el.clientHeight;
                  this.$refs.docContentDom.style[n] = r + "px";
                }
              }
            },
          },
          watch: {
            "shared.currentPath": function (e) {
              var t = this;
              this.updateCurrentPath(e),
                a.a.nextTick(function () {
                  t.updateDocContentMargin();
                });
            },
            pageExamples: function (e) {
              e && e.length ? (this.shared.allOptionExamples = Object.freeze(e)) : (this.shared.allOptionExamples = null);
            },
            "shared.computedOptionExampleLayout": function () {
              var e = this;
              a.a.nextTick(function () {
                e.updateDocContentMargin();
              });
            },
            "shared.showOptionExample": function (e) {
              var t = this;
              a.a.nextTick(function () {
                t.updateDocContentMargin(!e);
              });
            },
            loading: function (e) {
              this.$el.parentElement.style.overflow = e ? "hidden" : "";
            },
          },
        },
        ir = (n(46), $e(ar, Ve, [], !1, null, null, null));
      ir.options.__file = "src/components/DocContent.vue";
      var or = ir.exports,
        sr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "doc-search" },
            [
              n(
                "el-autocomplete",
                {
                  staticClass: "search-input",
                  attrs: {
                    "popper-class": "search-input-popper",
                    size: "small",
                    "fetch-suggestions": e.searchOptions,
                    debounce: 200,
                    placeholder: e.$t("search.placeholder"),
                  },
                  on: { select: e.selectPath },
                  nativeOn: {
                    keyup: function (t) {
                      return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.fuzzySearch(t);
                    },
                  },
                  scopedSlots: e._u([
                    {
                      key: "default",
                      fn: function (t) {
                        var r = t.item;
                        return [n("div", { staticClass: "doc-path-suggestion-item" }, [e._v(e._s(r.path))])];
                      },
                    },
                  ]),
                  model: {
                    value: e.queryString,
                    callback: function (t) {
                      e.queryString = t;
                    },
                    expression: "queryString",
                  },
                },
                [
                  e._v(" "),
                  n("el-button", {
                    attrs: { slot: "append", icon: "el-icon-search", type: "primary" },
                    on: { click: e.fuzzySearch },
                    slot: "append",
                  }),
                ],
                1
              ),
            ],
            1
          );
        };
      sr._withStripped = !0;
      var lr = {
          data: function () {
            return { queryString: Se.searchQuery, shared: Se };
          },
          computed: {},
          methods: {
            searchOptions: function (e, t) {
              e
                ? (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
                    return de().then(function () {
                      for (var n = [], r = 0; r < he.length; r++) {
                        if (n.length >= t) return n;
                        var a = he[r];
                        a.indexOf(e) >= 0 && n.push(_e(a));
                      }
                      if (n.length < t) {
                        le || (le = new Uint8Array(he.length));
                        for (var i = 0, o = 0; o < he.length; o++) (le[o] = 255 * Object(ae.stringSimilarity)(he[o], e)), le[o] > 50 && i++;
                        for (var s = {}, l = 0; n.length < t && i > 0; ) {
                          for (var c = 0, u = void 0, h = 0; h < le.length; h++) le[h] > c && !s[h] && ((u = h), (c = le[h]));
                          if ((c > 50 && ((s[u] = !0), n.push(_e(he[u])), i--), ++l > 200)) break;
                        }
                      }
                      return n;
                    });
                  })(e, 100).then(function (e) {
                    t(e);
                  })
                : t([]);
            },
            selectPath: function (e) {
              this.shared.currentPath = e.path;
            },
            fuzzySearch: function () {
              (this.shared.searchQuery = this.queryString), Ie("/search/" + this.shared.searchQuery);
            },
          },
        },
        cr = (n(47), $e(lr, sr, [], !1, null, null, null));
      cr.options.__file = "src/components/Search.vue";
      var ur = cr.exports,
        hr = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { staticClass: "doc-search-result" },
            [
              n("h3", [e._v(e._s(e.$t("search.resultTitle")))]),
              e._v(" "),
              n("el-input", {
                attrs: { "prefix-icon": "el-icon-search" },
                model: {
                  value: e.shared.searchQuery,
                  callback: function (t) {
                    e.$set(e.shared, "searchQuery", t);
                  },
                  expression: "shared.searchQuery",
                },
              }),
              e._v(" "),
              n("div", { staticClass: "result-summary" }, [
                e._v(
                  "\n        " + e._s(e.$t("search.foundCountBrief").replace("${searchResultCount}", e.searchResultCount)) + ",\n        "
                ),
                e.searchToken
                  ? n("span", { staticClass: "searching" }, [e._v("\n            搜索中"), n("i", { staticClass: "el-icon-loading" })])
                  : n("span", [
                      e._v(
                        "\n            " +
                          e._s(e.$t("search.displayCountBrief").replace("${displayResultCount}", e.displayResultCount)) +
                          "\n        "
                      ),
                    ]),
              ]),
              e._v(" "),
              e._l(e.searchResult, function (t) {
                return n("SearchResultItemCard", { key: t.path, attrs: { "item-data": t, "search-query": e.shared.searchQuery } });
              }),
            ],
            2
          );
        };
      hr._withStripped = !0;
      var pr = function () {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { class: { "doc-search-result-item-card": !0, "needs-show-more": e.needsShowMoreDesc } }, [
          n("h4", { directives: [{ name: "mark", rawName: "v-mark", value: e.searchQuery, expression: "searchQuery" }] }, [
            n("a", { staticClass: "path", attrs: { href: "#" + e.itemData.path } }, [e._v(e._s(e.itemData.path))]),
          ]),
          e._v(" "),
          e.itemData.similarPaths.length > 0
            ? n(
                "div",
                { staticClass: "other-result" },
                e._l(e.itemData.similarPaths, function (t) {
                  return n("div", { key: t }, [n("a", { attrs: { href: "#" + t } }, [e._v(e._s(t))])]);
                }),
                0
              )
            : e._e(),
          e._v(" "),
          n("div", { staticClass: "item-description" }, [
            n("div", {
              directives: [{ name: "mark", rawName: "v-mark", value: e.searchQuery, expression: "searchQuery" }],
              domProps: { innerHTML: e._s(e.itemData.content) },
            }),
          ]),
          e._v(" "),
          n(
            "div",
            { staticClass: "show-more-button" },
            [
              n("el-button", { attrs: { icon: "el-icon-more", size: "mini" }, on: { click: e.showMore } }, [
                e._v(e._s(e.$t("search.showMore"))),
              ]),
            ],
            1
          ),
        ]);
      };
      pr._withStripped = !0;
      var fr = {
          props: ["itemData", "searchQuery"],
          data: function () {
            return { needsShowMoreDesc: !0 };
          },
          methods: {
            showMore: function () {
              this.needsShowMoreDesc = !1;
            },
          },
          mounted: function () {
            var e = this;
            a.a.nextTick(function () {
              var t = e.$el.querySelector(".item-description");
              e.needsShowMoreDesc = t.scrollHeight !== t.clientHeight;
            });
          },
        },
        dr = (n(48), $e(fr, pr, [], !1, null, null, null));
      function mr(e) {
        var t = this;
        console.log("Searching, ", e),
          (this.searchResult = []),
          (this.searchResultCount = 0),
          (this.displayResultCount = 0),
          (this.static.searchResult.cache = {}),
          (this.searchToken = Date.now() + "");
        var n,
          r,
          a = this.searchToken;
        ((n = e),
        (r = function (e) {
          if (a === t.searchToken) {
            if (!t.noLimit && t.displayResultCount <= t.limitedResultCount) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n].text,
                  i = t.static.searchResult.cache[r];
                if (i) i.similarPaths.push(e[n].path);
                else {
                  var o = Object.freeze({ path: e[n].path, content: e[n].content, similarPaths: [] });
                  t.searchResult.push(o), (t.static.searchResult.cache[r] = o);
                }
              }
              t.displayResultCount += e.length;
            }
            t.searchResultCount += e.length;
          }
        }),
        de().then(function () {
          return new Promise(function (e) {
            var t = 0;
            function a() {
              --t || e();
            }
            function i(e) {
              var i = ve(e);
              i.indexer
                ? r(i.indexer.search(n))
                : (t++,
                  i.fetcher
                    .then(function () {
                      r(i.indexer.search(n)), a();
                    })
                    .catch(function (e) {
                      a();
                    }));
            }
            for (var o in (i(""), se)) i(o);
            t || e();
          });
        }))
          .then(function () {
            t.searchToken = "";
          })
          .catch(function () {
            t.searchToken = "";
          });
      }
      dr.options.__file = "src/components/SearchResultItemCard.vue";
      var vr = {
          components: { SearchResultItemCard: dr.exports },
          data: function () {
            return {
              searchResult: [],
              searchResultCount: 0,
              displayResultCount: 0,
              noLimit: !1,
              limitedResultCount: 200,
              searchToken: "",
              static: Object.freeze({ searchResult: { cache: null } }),
              shared: Se,
            };
          },
          created: function () {
            this.updateSearchResultsImmediate(this.shared.searchQuery);
          },
          methods: { updateSearchResultsImmediate: mr, updateSearchResults: Gn(mr, 500, { leading: !1 }) },
          watch: {
            "shared.searchQuery": function (e) {
              this.updateSearchResults(e), Ie("/search/" + this.shared.searchQuery);
            },
          },
        },
        gr = (n(49), $e(vr, hr, [], !1, null, null, null));
      gr.options.__file = "src/components/SearchResult.vue";
      var _r = gr.exports,
        yr = function () {
          var e = this.$createElement;
          return (this._self._c || e)("div");
        };
      yr._withStripped = !0;
      var br = $e({}, yr, [], !1, null, null, null);
      br.options.__file = "src/components/Home.vue";
      var xr = br.exports,
        Er = {
          props: ["docType"],
          data: function () {
            return { shared: Se };
          },
          computed: {
            pagePath: function () {
              return Me();
            },
          },
          components: { DocNav: Fe, DocContent: or, Search: ur, SearchResult: _r, LiveExample: rr, Home: xr },
        },
        wr = (n(50), $e(Er, Z, [], !1, null, null, null));
      wr.options.__file = "src/App.vue";
      var Cr = wr.exports,
        Or = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { class: ["ec-doc-mobile", "ec-doc-" + e.shared.docType] },
            [
              n("div", { staticClass: "top-bar" }, [
                n("div", { staticClass: "doc-type-nav" }, [
                  n("a", { class: { selected: "option" === e.shared.docType }, attrs: { href: "option.html#title" } }, [
                    e._v(e._s(e.$t("nav.option"))),
                  ]),
                  e._v(" "),
                  n("a", { class: { selected: "api" === e.shared.docType }, attrs: { href: "api.html#echarts" } }, [
                    e._v(e._s(e.$t("nav.API"))),
                  ]),
                  e._v(" "),
                  n("a", { class: { selected: "tutorial" === e.shared.docType }, attrs: { href: "tutorial.html" } }, [
                    e._v(e._s(e.$t("nav.tutorial"))),
                  ]),
                  e._v(" "),
                  n("a", { class: { selected: "option-gl" === e.shared.docType }, attrs: { href: "option-gl.html" } }, [
                    e._v(e._s(e.$t("nav.optionGL"))),
                  ]),
                ]),
                e._v(" "),
                n(
                  "div",
                  { staticClass: "doc-mobile-toolbar" },
                  [
                    n("el-button", { staticClass: "open-nav", attrs: { icon: "el-icon-menu", size: "mini" }, on: { click: e.showNav } }),
                    e._v(" "),
                    n("Search"),
                  ],
                  1
                ),
              ]),
              e._v(" "),
              n(
                "el-drawer",
                {
                  attrs: { direction: "ltr", size: "80%", visible: e.navShown, "show-close": !1 },
                  on: {
                    "update:visible": function (t) {
                      e.navShown = t;
                    },
                  },
                },
                [n("DocNav")],
                1
              ),
              e._v(" "),
              n("transition", [e.shared.fuzzySearch ? n("SearchResult") : n("DocContent", { key: e.pagePath })], 1),
              e._v(" "),
              e.pagePathParts.length > 1
                ? n(
                    "div",
                    { staticClass: "doc-breadcrumb" },
                    e._l(e.pagePathParts, function (t) {
                      return n("a", { key: t.link, attrs: { href: "#" + t.link } }, [e._v(e._s(t.text))]);
                    }),
                    0
                  )
                : e._e(),
            ],
            1
          );
        };
      Or._withStripped = !0;
      var Sr = {
          props: ["docType"],
          data: function () {
            return { navShown: !1, shared: Se };
          },
          computed: {
            pagePath: function () {
              return Me();
            },
            pagePathParts: function () {
              for (var e = this.pagePath.split("."), t = [], n = "", r = 0; r < e.length; r++)
                (n += n ? "." + e[r] : e[r]), t.push({ text: e[r] + (r === e.length - 1 ? "" : "."), link: n });
              return t;
            },
          },
          methods: {
            showNav: function () {
              this.navShown = !0;
            },
          },
          watch: {
            "shared.currentPath": function (e) {
              this.navShown = !1;
            },
          },
          components: { DocNav: Fe, DocContent: or, Search: ur, SearchResult: _r, Home: xr },
        },
        Mr = (n(51), $e(Sr, Or, [], !1, null, null, null));
      Mr.options.__file = "src/AppMobile.vue";
      var kr = Mr.exports,
        Tr = n(1),
        Nr = n.n(Tr),
        Ar = n(28),
        Ir = n.n(Ar),
        Rr = n(29),
        Lr = n.n(Rr),
        Dr = n(30),
        Pr = n.n(Dr);
      n(53);
      function $r(e) {
        e.querySelectorAll("pre code").forEach(function (e) {
          e.classList.contains("hljs") || Nr.a.highlightBlock(e);
        });
      }
      Nr.a.registerLanguage("javascript", Ir.a),
        Nr.a.registerLanguage("typescript", Lr.a),
        Nr.a.registerLanguage("xml", Pr.a),
        a.a.directive("highlight", {
          inserted: function (e) {
            $r(e);
          },
          update: function (e) {
            $r(e);
          },
        });
      var jr = n(31),
        Fr = n.n(jr);
      function Vr(e, t) {
        function n() {
          e.__markInstance.mark(t, { diacritics: !0, separateWordSearch: !0 });
        }
        e.__markInstance
          ? e.__markInstance.unmark({
              done: function () {
                n();
              },
            })
          : ((e.__markInstance = new Fr.a(e)), n());
      }
      function zr() {
        window.innerWidth < 600 ? (Se.isMobile = !0) : (Se.isMobile = !1);
      }
      a.a.directive("mark", {
        inserted: function (e, t) {
          (e.__doMarkDebounced = qn(Vr, 500, { trailing: !0, leading: !1 })), e.__doMarkDebounced(e, t.value);
        },
        update: function (e, t) {
          e.__doMarkDebounced(e, t.value);
        },
      });
      var Ur = {
        en: {
          nav: { option: "Option", API: "API", tutorial: "Tutorial", optionGL: "GL", collapseAll: "Collapse All" },
          search: {
            placeholder: "Search document",
            resultTitle: "Search Result",
            showMore: "Show more",
            foundCountBrief: "Found ${searchResultCount} items",
            displayCountBrief: "${displayResultCount} displayed",
          },
          content: { properties: "Properties" },
          example: {
            title: "Preview",
            titleShort: "Preview",
            intro: "Try different values of the option and preview!",
            noExample: "No example available for current component.",
            tryDesc: "Try It",
            defaultColor: "Default Color",
            booleanDesc: "Enable",
            vectorSetSeparate: "SEPARATE",
            absoluteMode: "ABSOLUTE",
            percentMode: "PERCENT",
            inputPlaceholder: "Input to change the text content",
            builtin: "Builtin",
            upload: "Upload SVG or PNG",
            setOptionError: "Something Unexpected Happerns. Click refresh to try again!",
            refresh: "Refresh",
            close: "Close",
            changeLayout: "Change Layout",
            layout: { auto: "Auto", right: "Right", top: "Top", bottom: "Bottom" },
            toEditor: "To Editor",
          },
        },
        zh: {
          nav: { option: "配置项", API: "API", tutorial: "教程", optionGL: "GL配置", collapseAll: "收起所有" },
          search: {
            placeholder: "搜索文档，回车查看更多结果",
            resultTitle: "文档搜索结果",
            showMore: "显示更多",
            foundCountBrief: "找到 ${searchResultCount} 条配置项",
            displayCountBrief: "显示 ${displayResultCount} 条",
          },
          content: { properties: "所有属性" },
          example: {
            title: "配置项效果预览",
            titleShort: "预览",
            intro: "调节控件可预览配置项不同取值的效果",
            noExample: "当前组件暂无可用示例",
            tryDesc: "试一试",
            defaultColor: "默认颜色",
            booleanDesc: "开启",
            vectorSetSeparate: "分别设置",
            absoluteMode: "绝对值",
            percentMode: "百分比",
            inputPlaceholder: "输入改变文本",
            builtin: "内置",
            upload: "上传 SVG 或 PNG",
            setOptionError: "发生了一些意料之外的错误，点击刷新再试试！",
            refresh: "刷新",
            close: "关闭",
            changeLayout: "切换布局",
            layout: { auto: "自动", right: "右侧", top: "顶部", bottom: "底部" },
            toEditor: "前往编辑器",
          },
        },
      };
      function Br(e, t) {
        window.addEventListener("resize", zr), zr();
        var n = t.cdnRoot || t.baseUrl;
        me(t.baseUrl, n, t.docType, t.version).then(function () {
          if (
            (window.addEventListener("hashchange", function (e) {
              Ae();
            }),
            Ae(),
            (Se.docType = t.docType),
            (Se.locale = t.locale),
            "string" == typeof e && (e = document.querySelector(e)),
            !e)
          )
            throw new Error("Can't find el.");
          var n = document.createElement("div");
          e.appendChild(n);
          var r = new X({ locale: t.locale, fallbackLocale: "en", messages: Ur });
          new a.a({
            i18n: r,
            el: n,
            render: function (e) {
              return Se.isMobile ? e(kr) : e(Cr);
            },
          });
        });
      }
    },
  ]);
});
