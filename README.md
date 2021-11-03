## 项目预览
根目录下运行如下代码：
```
parcel src/index.html
```

## 打包发布
parcel正常打包预览，页面路径会有问题，完整打包代码如下：
```
parcel build src/index.html --no-minify --public-url ./
```
