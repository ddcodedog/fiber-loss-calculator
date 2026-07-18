# 光纤链路损耗计算器

中文单页光纤链路损耗与 PON 光功率预算工具，适配电脑、手机及微信内置浏览器。

## 功能

- 通用链路损耗和安全余量计算
- GPON、XGS-PON 光功率预算判断
- 光纤、熔接点、连接器和两级分光器损耗
- 预计接收光功率、可用预算及剩余功率裕量
- 响应式移动端界面、结果复制和参数重置
- favicon、分享封面、结构化数据、robots.txt 和 sitemap.xml

## 访问统计

在 `analytics-config.js` 中填写统计 ID：

```js
window.FIBER_SITE_ANALYTICS = {
  ga4MeasurementId: "",
  baiduTongjiId: ""
};
```

填写 GA4 衡量 ID 或百度统计站点 ID 后，对应统计脚本才会加载。两个字段留空时不会加载任何第三方统计脚本。

## 部署

项目为纯静态文件，可直接部署到 GitHub Pages。发布源使用 `main` 分支的 `/(root)` 目录。

线上地址：<https://ddcodedog.github.io/fiber-loss-calculator/>

## 说明

计算结果仅供工程估算与学习参考，现场应以设计文件、设备规格书和仪表实测结果为准。
