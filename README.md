# 简介

将文件内容挂载到 `window.__FILE_MAP__` 之下。

## 使用方式

```
npm install --save-dev karma-filemap-preprocessor
```

```
// karma config
module.exports = {
    // ...
    files: [
      'src/**/*',
      // ...
    ],
    preprocessors: {
        "src/**/*": ['filemap'],
        // ...
    },
    // ...
};
```

## 协议

MIT
