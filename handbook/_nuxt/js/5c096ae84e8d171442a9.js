(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
  {
    374: function (n, e, t) {
      "use strict";
      t.r(e),
        (e.default =
          "# Apache ECharts 5.4.0 特性介绍\n\n## 智能指针吸附\n\n在图表中，部分可交互元素可能比较小，有时候用户不易准确地进行点击等操作，移动端尤其如此。因此，在 Apache ECharts 5.4.0 中，我们引入了“智能指针吸附”的概念。\n\n具体请参见[智能指针吸附](${lang}/how-to/interaction/coarse-pointer/index.html)。\n\n## 在更多坐标系中使用饼图\n\nApache ECharts 一个很强大的功能就是各种图表类型、坐标系、组件的组合。在这个版本中，我们为饼图增加了坐标系的配置项。\n\n于是，饼图可以出现在直角坐标系：\n\n![](images/5-4-0/pie-grid.png)\n\n日历坐标系：\n\n![](images/5-4-0/pie-calendar.png)\n\n地理坐标系：\n\n![](images/5-4-0/pie-geo.png)\n\n等等各种坐标系中，甚至可以和百度地图扩展联动，在地图上显示饼图：\n\n![](images/5-4-0/pie-bmap.png)\n\n![](images/5-4-0/pie-amap.png)\n\n这大大扩展了饼图的灵活性，让开发者可以使用 Apache ECharts 创作出更多图表的组合效果。\n\n## 新增乌克兰语翻译\n\n在这个版本中，我们支持了乌克兰语。**目前 Apache ECharts 已支持 17 种语言！**\n\n> 如果需要使用除中英文以外的语言，需要在初始化图表前，先调用 `echarts.registerLocale` 初始化，然后在 `init` 时候传入 `opts.locale` 修改图表语言。\n\n## 仪表盘文字旋转\n\n在这个版本中，我们支持了仪表盘的文字旋转。\n\n<md-example src=\"gauge-grade\" width=\"100%\" height=\"400\" />\n\n`axisLabel.rotate` 可以设为 `'tangential' | 'radial' | number`。如果是 `number` 类型，则表示标签的旋转角，从 -90 度到 90 度，正值是逆时针。除此之外，还可以是字符串 `'radial'` 表示径向旋转、`'tangential'` 表示切向旋转。\n\n## 完整更新记录\n\n查看[版本更新](${mainSitePath}/changelog.html#v5-4-0)\n");
    },
  },
]);
