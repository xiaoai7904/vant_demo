# vue3.0 + vant ui示例

[vw适配方案](./vant_vw)

* vw适配方案`postcss.config.js`配置如下:

```javascript
module.exports = ({ file }) => {
  let vwUnit;
  // 路径名称因为示例项目里面包含了vant,所以加/lib来区分vant包路径
  if (file && file.dirname && file.dirname.indexOf('vant/lib') > -1) {
    vwUnit = 375
  } else {
    vwUnit = 750
  }
  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: vwUnit,
        propList: ['*'],
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false, // 允许在媒体查询中转换`px`
      },
      'postcss-write-svg': { utf8: false },
    },
  };
};
```

[rem适配方案](./vant_rem)
* rem适配方案`postcss.config.js`配置如下:

```javascript
module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue ({ file }) {
          // // 路径名称因为示例项目里面包含了vant,所以加/lib来区分vant包路径
          return file.indexOf('vant/lib') !== -1 ? 37.5 : 75
        },
        propList: ['*']
      }
    }
  }
```

在`index.html`加载`rem.js`

```javascript
(function flexible(window, document) {
    var docEl = document.documentElement;
    var dpr = window.devicePixelRatio || 1;

    // adjust body font size
    function setBodyFontSize() {
      if (document.body) {
        document.body.style.fontSize = 12 * dpr + 'px';
      } else {
        document.addEventListener('DOMContentLoaded', setBodyFontSize);
      }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
      var rem = docEl.clientWidth > 750 ? 750 / 10 : docEl.clientWidth < 320 ? 320 / 10 : docEl.clientWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }

    setRemUnit();

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit);
    window.addEventListener('pageshow', function(e) {
      if (e.persisted) {
        setRemUnit();
      }
    });

    // detect 0.5px supports
    if (dpr >= 2) {
      var fakeBody = document.createElement('body');
      var testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines');
      }
      docEl.removeChild(fakeBody);
    }
  })(window, document);
```