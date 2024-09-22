(window.webpackJsonp = window.webpackJsonp || []).push([
  [57],
  {
    355: function (n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          "# Stacked Line Chart\n\nSimilar to the [Stacked Bar Chart](${lang}/how-to/chart-types/bar/stacked-bar/index.html), Stacked Line Chart use the `'stack'` in `series` to decide which series should be stacked together.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 43, 49],\n      type: 'line',\n      stack: 'x'\n    },\n    {\n      data: [5, 4, 3, 5, 10],\n      type: 'line',\n      stack: 'x'\n    }\n  ]\n};\n```\n\nHowever, without clarification, it is hard for us to judge whether it is a stacked line chart or normal line chart. Therefore, filling color for the area under the line is recommended to indicate for a stacked line chart.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 43, 49],\n      type: 'line',\n      stack: 'x',\n      areaStyle: {}\n    },\n    {\n      data: [5, 4, 3, 5, 10],\n      type: 'line',\n      stack: 'x',\n      areaStyle: {}\n    }\n  ]\n};\n```\n");
    },
  },
]);
