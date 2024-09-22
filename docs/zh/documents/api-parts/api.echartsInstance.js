window.__EC_DOC_api_echartsInstance = {
  group: { desc: '<p>图表的分组，用于<a href="#echarts.connect">联动</a></p>\n' },
  setOption: {
    desc: '<pre><code class="lang-ts">(option: Object, notMerge?: boolean, lazyUpdate?: boolean)\nor\n(option: Object, opts?: {\n    notMerge?: boolean;\n    replaceMerge?: string | string[];\n    lazyUpdate?: boolean;\n})\n</code></pre>\n<p>设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 <code class="codespan">setOption</code> 完成，ECharts 会合并新的参数和数据，然后刷新图表。如果开启<a href="option.html#option.animation" target="_blank">动画</a>的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。</p>\n<p><strong>如下示例：</strong></p>\n<iframe data-src="../../examples/zh/view.html?c=dynamic-data&reset=1&edit=1" width="500" height="400" ></iframe>\n\n\n\n<p><strong>参数：</strong></p>\n<p>调用方式举例：</p>\n<pre><code class="lang-ts">chart.setOption(option, notMerge, lazyUpdate);\n</code></pre>\n<p>或者</p>\n<pre><code class="lang-ts">chart.setOption(option, {\n    notMerge: ...,\n    lazyUpdate: ...,\n    silent: ...\n});\n</code></pre>\n<p>或者</p>\n<pre><code class="lang-ts">chart.setOption(option, {\n    replaceMerge: [&#39;xAxis&#39;, &#39;yAxis&#39;, &#39;series&#39;]\n});\n</code></pre>\n<ul>\n<li><p><code class="codespan">option</code>: <code class="codespan">ECOption</code></p>\n<p>  图表的配置项和数据，具体见<a href="option.html" target="_blank">配置项手册</a>。</p>\n</li>\n<li><p>opts</p>\n<ul>\n<li><code class="codespan">notMerge</code> 可选。是否不跟之前设置的 <code class="codespan">option</code> 进行合并。默认为 <code class="codespan">false</code>。即表示合并。合并的规则，详见 <strong>组件合并模式</strong>。如果为 <code class="codespan">true</code>，表示所有组件都会被删除，然后根据新 <code class="codespan">option</code> 创建所有新组件。</li>\n<li><code class="codespan">replaceMerge</code> 可选。用户可以在这里指定一个或多个组件，如：<code class="codespan">xAxis</code>, <code class="codespan">series</code>，这些指定的组件会进行 &quot;replaceMerge&quot;。如果用户想删除部分组件，也可使用 &quot;replaceMerge&quot;。详见 <strong>组件合并模式</strong>。</li>\n<li><code class="codespan">lazyUpdate</code> 可选。在设置完 <code class="codespan">option</code> 后是否不立即更新图表，默认为 <code class="codespan">false</code>，即同步立即更新。如果为 <code class="codespan">true</code>，则会在下一个 animation frame 中，才更新图表。</li>\n<li><code class="codespan">silent</code> 可选。阻止调用 <code class="codespan">setOption</code> 时抛出事件，默认为 <code class="codespan">false</code>，即抛出事件。</li>\n</ul>\n</li>\n</ul>\n<h4>组件合并模式</h4>\n\n<p>对于一种类型的组件（如：<code class="codespan">xAxis</code>, <code class="codespan">series</code>）：</p>\n<ul>\n<li>如果设置<code class="codespan">opts.notMerge</code>为<code class="codespan">true</code>，那么旧的组件会被完全移除，新的组件会根据<code class="codespan">option</code>创建。</li>\n<li>如果设置<code class="codespan">opts.notMerge</code>为<code class="codespan">false</code>，或者没有设置 <code class="codespan">opts.notMerge</code>：<ul>\n<li>如果在<code class="codespan">opts.replaceMerge</code>里指定组件类型，这类组件会进行<code class="codespan">替换合并</code>。</li>\n<li>否则，会进行<code class="codespan">普通合并</code>。</li>\n</ul>\n</li>\n</ul>\n<p>什么是<code class="codespan">普通合并</code>和<code class="codespan">替换合并</code>？</p>\n<h5>普通合并</h5>\n\n<p>对于一种类型的组件（如：<code class="codespan">xAxis</code>, <code class="codespan">series</code>），新来的 <code class="codespan">option</code> 中的每个“组件描述”（如：<code class="codespan">{type: &#39;xAxis&#39;, id: &#39;xx&#39;, name: &#39;kk&#39;, ...}</code>）会被尽量合并到已存在的组件中。剩余的情况，会在组件列表尾部创建新的组件。整体规则细节如下：</p>\n<ul>\n<li>先依次对 <code class="codespan">option</code> 中每个有声明 <code class="codespan">id</code> 或者 <code class="codespan">name</code> 的“组件描述”，寻找能匹配其 <code class="codespan">id</code> 或者 <code class="codespan">name</code> 的已有的组件，找到的话则合并。</li>\n<li>再依次对 <code class="codespan">option</code> 中剩余的“组件描述”，寻找还未执行过前一条的已有组件，找到的话则合并。</li>\n<li>其他 <code class="codespan">option</code> 中剩余的“组件描述”，用于在组件列表尾部创建新组件。</li>\n</ul>\n<p>特点：</p>\n<ul>\n<li>永远不会删除已存在的组件。也就是说，只支持增加，或者更新组件。</li>\n<li>组件的索引（componentIndex）永远不会改变。</li>\n<li>如果 <code class="codespan">id</code> 和 <code class="codespan">name</code> 没有在 <code class="codespan">option</code> 中被指定（这是经常出现的情况），组件会按照它在 <code class="codespan">option</code> 中的顺序一一合并到已有组件中。这种设定比较符合直觉。</li>\n</ul>\n<p>例子：</p>\n<pre><code class="lang-ts">// 已有组件：\n{\n    xAxis: [\n        { id: &#39;m&#39;, interval: 5 },\n        { id: &#39;n&#39;, name: &#39;nnn&#39;, interval: 6 }\n        { id: &#39;q&#39;, interval: 7 }\n    ]\n}\n// 新来的 option ：\nchart.setOption({\n    xAxis: [\n        // id 没有指定。会寻找到第一个没有进行过合并的已有组件，进行合并。\n        // 即合并到 `id: &#39;q&#39;`。\n        { interval: 77 },\n        // id 没有指定。最终会创建新组件。\n        { interval: 88 },\n        // id 没有指定，但是 name 指定了。会被合并到已有的 `name: &#39;nnn&#39;` 组件。\n        { name: &#39;nnn&#39;, interval: 66 },\n        // id 指定了，会被合并到已有的 `id: &#39;m&#39;` 组件。\n        { id: &#39;m&#39;, interval: 55 }\n    ]\n});\n// 结果组件：\n{\n    xAxis: [\n        { id: &#39;m&#39;, interval: 55 },\n        { id: &#39;n&#39;, name: &#39;nnn&#39;, interval: 66 },\n        { id: &#39;q&#39;, interval: 77 },\n        { interval: 88 }\n    ]\n}\n</code></pre>\n<h5>替换合并</h5>\n\n<p>对于一种类型的组件（如：<code class="codespan">xAxis</code>, <code class="codespan">series</code>），只有 <code class="codespan">option</code> 中指定了 <code class="codespan">id</code> 并且已有组件中有此 <code class="codespan">id</code> 时，已有组件会和 <code class="codespan">option</code> 相应组件描述进行合并。否则，已有组件都会删除，新组件会被根据 <code class="codespan">option</code> 创建。细节规则如下：</p>\n<ul>\n<li>先依次对 <code class="codespan">option</code> 中每个有声明 <code class="codespan">id</code> 的“组件描述”，寻找能匹配其 <code class="codespan">id</code> 或者 <code class="codespan">name</code> 的已有的组件，找到的话则合并。</li>\n<li>删除其他没匹配到的已有组件。</li>\n<li>依次对 <code class="codespan">option</code> 中剩余的“组件描述”，创建新组件，填入刚因删除而空出来的位置上，或者增加到末尾。</li>\n</ul>\n<p>特点：</p>\n<ul>\n<li>与 <code class="codespan">普通合并</code> 相比，支持了组件删除。</li>\n<li>已有组件的索引永远不会变。这是为了保证，<code class="codespan">option</code> 或者 API 中的 index 引用（例如：<code class="codespan">xAxisIndex: 2</code>）仍能正常一致得使用。</li>\n<li>整个处理过程结束后，可能存在一些“洞”，也就是说，在组件列表中的某些 index 上，并没有组件存在（被删除了）。但是这是可以被开发者预期和控制的。</li>\n</ul>\n<p>例子：</p>\n<pre><code class="lang-ts">// 已有组件：\n{\n    xAxis: [\n        { id: &#39;m&#39;, interval: 5, min: 1000 },\n        { id: &#39;n&#39;, name: &#39;nnn&#39;, interval: 6, min: 1000 }\n        { id: &#39;q&#39;, interval: 7, min: 1000 }\n    ]\n}\n// 新来的 option :\nchart.setOption({\n    xAxis: [\n        { interval: 111 },\n        // id 已经指定了。因此会被合并进已有的组件 `id: &#39;q&#39;`。\n        { id: &#39;q&#39;, interval: 77 },\n        // id 已经指定了。但是已有组件没有此 id 。\n        { id: &#39;t&#39;, interval: 222 },\n        { interval: 333 }\n    ]\n}, { replaceMerge: &#39;xAxis&#39; });\n// 结果组件：\n{\n    xAxis: [\n        // 原来的 id 为 &#39;m&#39; 的组件，被移除。\n        // 替换为新的组件。新组件中，并没有原来的 `min: 1000` 了。\n        { interval: 111 },\n        // 原来的 id 为 &#39;n&#39; 的组件，被移除。\n        // 替换为新的组件。新组件中，并没有原来的 `min: 1000` 了。\n        { id: &#39;t&#39;, interval: 222 },\n        // 原来的组件没有被移除，而是和 option 中的组件描述进行了合并。\n        // 所以 `min: 1000` 被保留了。\n        { id: &#39;q&#39;, interval: 77, min: 1000 },\n        // 新添加的组件。\n        { interval: 333 }\n    ]\n}\n</code></pre>\n<h5>删除组件</h5>\n\n<p>有两种方法能删除组件：</p>\n<ul>\n<li>删除所有：使用 <code class="codespan">notMerge: true</code>，则所有组件都被删除。</li>\n<li>删除部分：使用 <code class="codespan">replaceMerge: [...]</code>，被指定的组件类型，会根据 replaceMerge 的规则：如果 id 匹配就合并（ merge ），否则旧组件被删除，新组件被创建。“部分删除” 有助于，在删除该删除的组件时，保留其他组件的状态（如高亮、动画、选中状态）。</li>\n</ul>\n',
  },
  getWidth: { desc: '<pre><code class="lang-ts">() =&gt; number\n</code></pre>\n<p>获取 ECharts 实例容器的宽度。</p>\n' },
  getHeight: { desc: '<pre><code class="lang-ts">() =&gt; number\n</code></pre>\n<p>获取 ECharts 实例容器的高度。</p>\n' },
  getDom: {
    desc: '<pre><code class="lang-ts">() =&gt; HTMLCanvasElement|HTMLDivElement\n</code></pre>\n<p>获取 ECharts 实例容器的 dom 节点。</p>\n',
  },
  getOption: {
    desc: '<pre><code class="lang-ts">() =&gt; Object\n</code></pre>\n<p>获取当前实例中维护的 <code class="codespan">option</code> 对象，返回的 <code class="codespan">option</code> 对象中包含了用户多次 <code class="codespan">setOption</code> 合并得到的配置项和数据，也记录了用户交互的状态，例如图例的开关，数据区域缩放选择的范围等等。所以从这份 <code class="codespan">option</code> 可以恢复或者得到一个新的一模一样的实例。</p>\n<p><strong>注意：</strong>返回的 option 每个组件的属性值都统一是一个数组，不管 <code class="codespan">setOption</code> 传进来的时候是单个组件的对象还是多个组件的数组。如下形式：</p>\n<pre><code class="lang-ts">{\n    title: [{...}],\n    legend: [{...}],\n    grid: [{...}]\n}\n</code></pre>\n<p>另外<strong>不推荐</strong>下面这种写法：</p>\n<pre><code class="lang-ts">var option = myChart.getOption();\noption.visualMap[0].inRange.color = ...;\nmyChart.setOption(option);\n</code></pre>\n<p>因为 <code class="codespan">getOption</code> 获取的是已经合并过默认值了的，所以在修改了某些配置项后会导致原本是根据这些配置项值去设置的默认值失效。</p>\n<p>因此我们更<strong>推荐</strong>通过<code class="codespan">setOption</code>去修改部分配置。</p>\n<pre><code class="lang-ts">myChart.setOption({\n    visualMap: {\n        inRange: {\n            color: ...\n        }\n    }\n})\n</code></pre>\n',
  },
  resize: {
    desc: '<pre><code class="lang-ts">(opts?: {\n    width?: number|string,\n    height?: number|string,\n    silent?: boolean,\n    animation?: {\n        duration?: number\n        easing?: string\n    }\n}) =&gt; ECharts\n</code></pre>\n<p>改变图表尺寸，在容器大小发生改变时需要手动调用。</p>\n<p><strong>参数解释</strong></p>\n<ul>\n<li><p><code class="codespan">opts</code></p>\n<p>  opts 可缺省。有下面几个属性：</p>\n<ul>\n<li><code class="codespan">width</code> 可显式指定实例宽度，单位为像素。如果传入值为 <code class="codespan">null</code>/<code class="codespan">undefined</code>/<code class="codespan">&#39;auto&#39;</code>，则表示自动取 <code class="codespan">dom</code>（实例容器）的宽度。</li>\n<li><code class="codespan">height</code> 可显式指定实例高度，单位为像素。如果传入值为 <code class="codespan">null</code>/<code class="codespan">undefined</code>/<code class="codespan">&#39;auto&#39;</code>，则表示自动取 <code class="codespan">dom</code>（实例容器）的高度。</li>\n<li><code class="codespan">silent</code> 是否禁止抛出事件。默认为 <code class="codespan">false</code>。</li>\n<li><code class="codespan">animation</code> resize 的时候是否应用过渡动画，包含时长<code class="codespan">duration</code>和缓动<code class="codespan">easing</code>两个配置，默认<code class="codespan">duration</code>为 0，即不应用过渡动画。</li>\n</ul>\n</li>\n</ul>\n<p><strong>Tip:</strong> 有时候图表会放在多个标签页里，那些初始隐藏的标签在初始化图表的时候因为获取不到容器的实际高宽，可能会绘制失败，因此在切换到该标签页时需要手动调用 <code class="codespan">resize</code> 方法获取正确的高宽并且刷新画布，或者在 <code class="codespan">opts</code> 中显示指定图表高宽。</p>\n',
  },
  renderToSVGString: {
    desc: '<blockquote>\n<p>从 <code class="codespan">5.3.0</code> 开始支持</p>\n</blockquote>\n<pre><code class="lang-ts">(opts?: {\n    useViewBox?: boolean\n}) =&gt; string\n</code></pre>\n<p>渲染得到 SVG 字符串。在设置<code class="codespan">renderer: &#39;svg&#39;</code>使用 SVG 渲染模式有效。</p>\n<p>如果在<code class="codespan">echarts.init</code>的时候通过<code class="codespan">ssr</code>参数开启了服务端渲染模式</p>\n<p><strong>参数解释</strong></p>\n<ul>\n<li><p><code class="codespan">opts</code></p>\n<p>  opts 可缺省。有下面几个属性：</p>\n<ul>\n<li><code class="codespan">useViewBox</code> 是否在生成的 SVG 字符串中带入 <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox" target="_blank">viewBox</a></li>\n</ul>\n</li>\n</ul>\n',
  },
  dispatchAction: {
    desc: '<pre><code class="lang-ts">(payload: Object)\n</code></pre>\n<p>触发图表行为，例如图例开关<code class="codespan">legendToggleSelect</code>, 数据区域缩放<code class="codespan">dataZoom</code>，显示提示框<code class="codespan">showTip</code>等等，更多见 <a href="#action">action</a> 和 <a href="#events">events</a> 的文档。</p>\n<p><code class="codespan">payload</code> 参数可以通过<code class="codespan">batch</code>属性同时触发多个行为。</p>\n<p><strong>注：</strong>在 ECharts 2.x 是通过 <code class="codespan">myChart.component.tooltip.showTip</code> 这种形式调用相应的接口触发图表行为，入口很深，而且涉及到内部组件的组织。因此在 ECharts 3 里统一改为 <code class="codespan">dispatchAction</code> 的形式。</p>\n<p><strong>示例</strong></p>\n<pre><code class="lang-ts">myChart.dispatchAction({\n    type: &#39;dataZoom&#39;,\n    start: 20,\n    end: 30\n});\n// 可以通过 batch 参数批量分发多个 action\nmyChart.dispatchAction({\n    type: &#39;dataZoom&#39;,\n    batch: [{\n        // 第一个 dataZoom 组件\n        start: 20,\n        end: 30\n    }, {\n        // 第二个 dataZoom 组件\n        dataZoomIndex: 1,\n        start: 10,\n        end: 20\n    }]\n})\n</code></pre>\n',
  },
  on: {
    desc: '<pre><code class="lang-ts">(\n    eventName: string,\n    handler: Function,\n    context?: Object\n)\n(\n    eventName: string,\n    query: string|Object,\n    handler: Function,\n    context?: Object\n)\n</code></pre>\n<p>绑定事件处理函数。</p>\n<p>ECharts 中的事件有两种，一种是鼠标事件，在鼠标点击某个图形上会触发，还有一种是 调用 <a href="#echartsInstance.dispatchAction">dispatchAction</a> 后触发的事件。每个 action 都会有对应的事件，具体见 <a href="#action">action</a> 和 <a href="#events">events</a> 的文档。</p>\n<p>如果事件是外部 <a href="#echartsInstance.dispatchAction">dispatchAction</a> 后触发，并且 action 中有 batch 属性触发批量的行为，则相应的响应事件参数里也会把属性都放在 batch 属性中。</p>\n<p><strong>参数：</strong></p>\n<ul>\n<li><p><code class="codespan">eventName</code></p>\n<p>  事件名称，全小写，例如<code class="codespan">&#39;click&#39;</code>，<code class="codespan">&#39;mousemove&#39;</code>, <code class="codespan">&#39;legendselected&#39;</code></p>\n<p>  <strong>注：</strong> ECharts 2.x 中会使用 <code class="codespan">config</code> 对象中的 <code class="codespan">CLICK</code> 等属性作为事件名称。在 ECharts 3 中统一使用跟 dom 事件一样的全小写字符串作为事件名。</p>\n</li>\n<li><p><code class="codespan">query</code></p>\n<p>  可选的过滤条件，能够只在指定的组件或者元素上进行响应。可为 <code class="codespan">string</code> 或者 <code class="codespan">Object</code>。</p>\n<p>  如果为 <code class="codespan">string</code> 表示组件类型。格式可以是 &#39;mainType&#39; 或者 &#39;mainType.subType&#39;。例如：</p>\n<pre><code class="lang-ts">  chart.on(&#39;click&#39;, &#39;series&#39;, function () {...});\n  chart.on(&#39;click&#39;, &#39;series.line&#39;, function () {...});\n  chart.on(&#39;click&#39;, &#39;xAxis.category&#39;, function () {...});\n</code></pre>\n<p>  如果为 <code class="codespan">Object</code>，可以包含以下一个或多个属性，每个属性都是可选的：</p>\n<pre><code class="lang-ts">  {\n      &lt;mainType&gt;Index: number // 组件 index\n      &lt;mainType&gt;Name: string // 组件 name\n      &lt;mainType&gt;Id: string // 组件 id\n      dataIndex: number // 数据项 index\n      name: string // 数据项 name\n      dataType: string // 数据项 type，如关系图中的 &#39;node&#39;, &#39;edge&#39;\n      element: string // 自定义系列中的 el 的 name\n  }\n</code></pre>\n<p>  例如：</p>\n<pre><code class="lang-ts">  chart.setOption({\n      // ...\n      series: [{\n          name: &#39;uuu&#39;\n          // ...\n      }]\n  });\n  chart.on(&#39;mouseover&#39;, {seriesName: &#39;uuu&#39;}, function () {\n      // series name 为 &#39;uuu&#39; 的系列中的图形元素被 &#39;mouseover&#39; 时，此方法被回调。\n  });\n</code></pre>\n<p>  例如：</p>\n<pre><code class="lang-ts">  chart.setOption({\n      // ...\n      series: [{\n          // ...\n      }, {\n          // ...\n          data: [\n              {name: &#39;xx&#39;, value: 121},\n              {name: &#39;yy&#39;, value: 33}\n          ]\n      }]\n  });\n  chart.on(&#39;mouseover&#39;, {seriesIndex: 1, name: &#39;xx&#39;}, function () {\n      // series index 1 的系列中的 name 为 &#39;xx&#39; 的元素被 &#39;mouseover&#39; 时，此方法被回调。\n  });\n</code></pre>\n<p>  例如：</p>\n<pre><code class="lang-ts">  chart.setOption({\n      // ...\n      series: [{\n          type: &#39;graph&#39;,\n          nodes: [{name: &#39;a&#39;, value: 10}, {name: &#39;b&#39;, value: 20}],\n          edges: [{source: 0, target: 1}]\n      }]\n  });\n  chart.on(&#39;click&#39;, {dataType: &#39;node&#39;}, function () {\n      // 关系图的节点被点击时此方法被回调。\n  });\n  chart.on(&#39;click&#39;, {dataType: &#39;edge&#39;}, function () {\n      // 关系图的边被点击时此方法被回调。\n  });\n</code></pre>\n<p>  例如：</p>\n<pre><code class="lang-ts">  chart.setOption({\n      // ...\n      series: {\n          // ...\n          type: &#39;custom&#39;,\n          renderItem: function (params, api) {\n              return {\n                  type: &#39;group&#39;,\n                  children: [{\n                      type: &#39;circle&#39;,\n                      name: &#39;my_el&#39;,\n                      // ...\n                  }, {\n                      // ...\n                  }]\n              }\n          },\n          data: [[12, 33]]\n      }\n  })\n  chart.on(&#39;mouseup&#39;, {element: &#39;my_el&#39;}, function () {\n      // name 为 &#39;my_el&#39; 的元素被 &#39;mouseup&#39; 时，此方法被回调。\n  });\n</code></pre>\n</li>\n<li><p><code class="codespan">handler</code></p>\n<p>  事件处理函数。格式为:</p>\n<pre><code class="lang-ts">  (event: Object)\n</code></pre>\n</li>\n<li><p><code class="codespan">context</code></p>\n<p>  可选。回调函数内部的<code class="codespan">context</code>，即<code class="codespan">this</code>的指向。</p>\n</li>\n</ul>\n',
  },
  off: {
    desc: '<pre><code class="lang-ts">(eventName: string, handler?: Function)\n</code></pre>\n<p>解绑事件处理函数。</p>\n<p><strong>参数：</strong></p>\n<ul>\n<li><p><code class="codespan">eventName</code></p>\n<p>  事件名称。</p>\n</li>\n<li><p><code class="codespan">handler</code></p>\n<p>  可选，可以传入需要解绑的处理函数，不传的话解绑所有该类型的事件函数。</p>\n</li>\n</ul>\n',
  },
  convertToPixel: {
    desc: '<pre><code class="lang-ts">(\n    // finder 用于指示『使用哪个坐标系进行转换』。\n    // 通常地，可以使用 index 或者 id 或者 name 来定位。\n    finder: {\n        seriesIndex?: number,\n        seriesId?: string,\n        seriesName?: string,\n        geoIndex?: number,\n        geoId?: string,\n        geoName?: string,\n        xAxisIndex?: number,\n        xAxisId?: string,\n        xAxisName?: string,\n        yAxisIndex?: number,\n        yAxisId?: string,\n        yAxisName?: string,\n        gridIndex?: number,\n        gridId?: string,\n        gridName?: string\n    },\n    // 要被转换的值。\n    value: Array|number\n    // 转换的结果为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。\n) =&gt; Array|number\n</code></pre>\n<p>转换坐标系上的点到像素坐标值。</p>\n<p>例：</p>\n<p>在地理坐标系（<a href="option.html#geo" target="_blank">geo</a>）上，把某个点的经纬度坐标转换成为像素坐标：</p>\n<pre><code class="lang-ts">// [128.3324, 89.5344] 表示 [经度，纬度]。\n// 使用第一个 geo 坐标系进行转换：\nchart.convertToPixel(&#39;geo&#39;, [128.3324, 89.5344]); // 参数 &#39;geo&#39; 等同于 {geoIndex: 0}\n// 使用第二个 geo 坐标系进行转换：\nchart.convertToPixel({geoIndex: 1}, [128.3324, 89.5344]);\n// 使用 id 为 &#39;bb&#39; 的 geo 坐标系进行转换：\nchart.convertToPixel({geoId: &#39;bb&#39;}, [128.3324, 89.5344]);\n</code></pre>\n<p>在直角坐标系（cartesian，<a href="option.html#grid" target="_blank">grid</a>）上，把某个点的坐标转换成为像素坐标：</p>\n<pre><code class="lang-ts">// [300, 900] 表示该点 x 轴上对应刻度值 300，y 轴上对应刻度值 900。\n// 注意，一个 grid 可能含有多个 xAxis 和多个 yAxis，任何一对 xAxis-yAxis 形成一个 cartesian。\n// 使用第三个 xAxis 和 id 为 &#39;y1&#39; 的 yAxis 形成的 cartesian 进行转换：\nchart.convertToPixel({xAxisIndex: 2, yAxisId: &#39;y1&#39;}, [300, 900]);\n// 使用 id 为 &#39;g1&#39; 的 grid 的第一个 cartesian 进行转换：\nchart.convertToPixel({gridId: &#39;g1&#39;}, [300, 900]);\n</code></pre>\n<p>把某个坐标轴的点转换成像素坐标：</p>\n<pre><code class="lang-ts">// id 为 &#39;x0&#39; 的 xAxis 的刻度 3000 位置所对应的横向像素位置：\nchart.convertToPixel({xAxisId: &#39;x0&#39;}, 3000); // 返回一个 number。\n// 第二个 yAxis 的刻度 600 位置所对应的纵向像素位置：\nchart.convertToPixel({yAxisIndex: 1}, 600); // 返回一个 number。\n</code></pre>\n<p>把关系图（<a href="option.html#series-graph" target="_blank">graph</a>）的点转换成像素坐标：</p>\n<pre><code class="lang-ts">// 因为每个 graph series 自己持有一个坐标系，所以我们直接在 finder 中指定 series：\nchart.convertToPixel({seriesIndex: 0}, [2000, 3500]);\nchart.convertToPixel({seriesId: &#39;k2&#39;}, [100, 500]);\n</code></pre>\n<p>在某个系列所在的坐标系（无论是 cartesian、geo、graph 等）中，转换某点成像素坐标：</p>\n<pre><code class="lang-ts">// 使用第一个系列对应的坐标系：\nchart.convertToPixel({seriesIndex: 0}, [128.3324, 89.5344]);\n// 使用 id 为 &#39;k2&#39; 的系列所对应的坐标系：\nchart.convertToPixel({seriesId: &#39;k2&#39;}, [128.3324, 89.5344]);\n</code></pre>\n',
  },
  convertFromPixel: {
    desc: '<pre><code class="lang-ts">(\n    // finder 用于指示『使用哪个坐标系进行转换』。\n    // 通常地，可以使用 index 或者 id 或者 name 来定位。\n    finder: {\n        seriesIndex?: number,\n        seriesId?: string,\n        seriesName?: string,\n        geoIndex?: number,\n        geoId?: string,\n        geoName?: string,\n        xAxisIndex?: number,\n        xAxisId?: string,\n        xAxisName?: string,\n        yAxisIndex?: number,\n        yAxisId?: string,\n        yAxisName?: string,\n        gridIndex?: number,\n        gridId?: string,\n        gridName?: string\n    },\n    // 要被转换的值，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。\n    value: Array|number\n    // 转换的结果，为逻辑坐标值。\n) =&gt; Array|number\n</code></pre>\n<p>转换像素坐标值到逻辑坐标系上的点。是 <a href="#echartsInstance.convertToPixel">convertToPixel</a> 的逆运算。\n具体实例可参考 <a href="#echartsInstance.convertToPixel">convertToPixel</a>。</p>\n',
  },
  containPixel: {
    desc: '<pre><code class="lang-ts">(\n    // finder 用于指示『在哪个坐标系或者系列上判断』。\n    // 通常地，可以使用 index 或者 id 或者 name 来定位。\n    finder: {\n        seriesIndex?: number,\n        seriesId?: string,\n        seriesName?: string,\n        geoIndex?: number,\n        geoId?: string,\n        geoName?: string,\n        xAxisIndex?: number,\n        xAxisId?: string,\n        xAxisName?: string,\n        yAxisIndex?: number,\n        yAxisId?: string,\n        yAxisName?: string,\n        gridIndex?: number,\n        gridId?: string,\n        gridName?: string\n    },\n    // 要被判断的点，为像素坐标值，以 echarts 实例的 dom 节点的左上角为坐标 [0, 0] 点。\n    value: Array\n) =&gt; boolean\n</code></pre>\n<p>判断给定的点是否在指定的坐标系或者系列上。</p>\n<p>目前支持在这些坐标系和系列上进行判断：<a href="option.html#grid" target="_blank">grid</a>, <a href="option.html#polar" target="_blank">polar</a>, <a href="option.html#geo" target="_blank">geo</a>, <a href="option.html#series-map" target="_blank">series-map</a>, <a href="option.html#series-graph" target="_blank">series-graph</a>, <a href="option.html#series-pie" target="_blank">series-pie</a>。</p>\n<p>例：</p>\n<pre><code class="lang-ts">// 判断 [23, 44] 点是否在 geoIndex 为 0 的 geo 坐标系上。\nchart.containPixel(&#39;geo&#39;, [23, 44]); // &#39;geo&#39; 等同于 {geoIndex: 0}\n// 判断 [23, 44] 点是否在 gridId 为 &#39;z&#39; 的 grid 上。\nchart.containPixel({gridId: &#39;z&#39;}, [23, 44]);\n// 判断 [23, 44] 点是否在 index 为 1，4，5 的系列上。\nchart.containPixel({seriesIndex: [1, 4, 5]}, [23, 44]);\n// 判断 [23, 44] 点是否在 index 为 1，4，5 的系列或者 gridName 为 &#39;a&#39; 的 grid 上。\nchart.containPixel({seriesIndex: [1, 4, 5], gridName: &#39;a&#39;}, [23, 44]);\n</code></pre>\n',
  },
  showLoading: {
    desc: '<pre><code class="lang-ts">(type?: string, opts?: Object)\n</code></pre>\n<p>显示加载动画效果。可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 <a href="#echartsInstance.hideLoading">hideLoading</a> 隐藏加载动画。</p>\n<p><strong>参数：</strong></p>\n<ul>\n<li><p><code class="codespan">type</code></p>\n<p>  可选，加载动画类型，目前只有一种<code class="codespan">&#39;default&#39;</code></p>\n</li>\n<li><p><code class="codespan">opts</code></p>\n<p>  可选，加载动画配置项，跟<code class="codespan">type</code>有关，下面是默认配置项：</p>\n<pre><code class="lang-ts">default: {\n  text: &#39;loading&#39;,\n  color: &#39;#c23531&#39;,\n  textColor: &#39;#000&#39;,\n  maskColor: &#39;rgba(255, 255, 255, 0.8)&#39;,\n  zlevel: 0,\n\n  // 字体大小。从 `v4.8.0` 开始支持。\n  fontSize: 12,\n  // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。\n  showSpinner: true,\n  // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。\n  spinnerRadius: 10,\n  // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。\n  lineWidth: 5,\n  // 字体粗细。从 `v5.0.1` 开始支持。\n  fontWeight: &#39;normal&#39;,\n  // 字体风格。从 `v5.0.1` 开始支持。\n  fontStyle: &#39;normal&#39;,\n  // 字体系列。从 `v5.0.1` 开始支持。\n  fontFamily: &#39;sans-serif&#39;\n}\n</code></pre>\n</li>\n</ul>\n',
  },
  hideLoading: { desc: "<p>隐藏动画加载效果。</p>\n" },
  getDataURL: {
    desc: '<pre><code class="lang-ts">(opts: {\n    // 导出的格式，可选 png, jpg, svg\n    // 注意：png, jpg 只有在 canvas 渲染器的时候可使用，svg 只有在使用 svg 渲染器的时候可用\n    type?: string,\n    // 导出的图片分辨率比例，默认为 1。\n    pixelRatio?: number,\n    // 导出的图片背景色，默认使用 option 里的 backgroundColor\n    backgroundColor?: string,\n    // 忽略组件的列表，例如要忽略 toolbox 就是 [&#39;toolbox&#39;]\n    excludeComponents?: Array.&lt;string&gt;\n}) =&gt; string\n</code></pre>\n<p>导出图表图片，返回一个 base64 的 URL，可以设置为<code class="codespan">Image</code>的<code class="codespan">src</code>。</p>\n<p><strong>示例：</strong></p>\n<pre><code class="lang-ts">var img = new Image();\nimg.src = myChart.getDataURL({\n    pixelRatio: 2,\n    backgroundColor: &#39;#fff&#39;\n});\n</code></pre>\n',
  },
  getConnectedDataURL: {
    desc: '<pre><code class="lang-ts">(opts: {\n    // 导出的格式，可选 png, jpeg\n    type?: string,\n    // 导出的图片分辨率比例，默认为 1。\n    pixelRatio?: number,\n    // 导出的图片背景色，默认使用 option 里的 backgroundColor\n    backgroundColor?: string,\n    // 忽略组件的列表，例如要忽略 toolbox 就是 [&#39;toolbox&#39;]\n    excludeComponents?: Array.&lt;string&gt;\n}) =&gt; string\n</code></pre>\n<p>导出联动的图表图片，返回一个 base64 的 url，可以设置为<code class="codespan">Image</code>的<code class="codespan">src</code>。导出图片中每个图表的相对位置跟容器的相对位置有关。</p>\n',
  },
  appendData: {
    desc: '<pre><code class="lang-ts">(opts: {\n    // 要增加数据的系列序号。\n    seriesIndex?: number,\n    // 增加的数据。\n    data?: Array|TypedArray\n}) =&gt; string\n</code></pre>\n<p>此接口用于，在大数据量（百万以上）的渲染场景，分片加载数据和增量渲染。在大数据量的场景下（例如地理数的打点），就算数据使用二进制格式，也会有几十或上百兆，在互联网环境下，往往需要分片加载。<code class="codespan">appendData</code> 接口提供了分片加载后增量渲染的能力，渲染新加入的数据块时不会清除原有已经渲染的部分。</p>\n<p>注意：</p>\n<ul>\n<li>现在不支持 <a href="option.html#series" target="_blank">系列（series）</a> 使用 <a href="option.html#dataset" target="_blank">dataset</a> 同时使用 <code class="codespan">appendData</code>，只支持系列使用自己的 <a href="option.html#series.data" target="_blank">series.data</a> 时使用 <code class="codespan">appendData</code>。</li>\n<li>目前并非所有的图表都支持分片加载时的增量渲染。目前支持的图有：ECharts 基础版本的 <a href="option.html#series-scatter" target="_blank">散点图（scatter）</a> 和 <a href="option-gl.html#series-linesGL" target="_blank">线图（lines）</a>。ECharts GL 的 <a href="option-gl.html#series-scatterGL" target="_blank">散点图（scatterGL）</a>、<a href="option-gl.html#series-lines3D" target="_blank">线图（linesGL）</a> 和 <a href="option-gl.html#series-polygons3D" target="_blank">可视化建筑群（polygons3D）</a>。</li>\n</ul>\n',
  },
  clear: { desc: "<p>清空当前实例，会移除实例中所有的组件和图表。</p>\n" },
  isDisposed: { desc: '<pre><code class="lang-ts">() =&gt; boolean\n</code></pre>\n<p>当前实例是否已经被释放。</p>\n' },
  dispose: { desc: "<p>销毁实例，销毁后实例无法再被使用。</p>\n" },
};
