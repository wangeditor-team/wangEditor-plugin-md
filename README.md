# wangEditor markdown 插件

[English documentation](./README-en.md)

## 介绍

在 [wangEditor](https://www.wangeditor.com/) 中使用基本的 markdown 语法。

- 标题
  - `#`
  - `##`
  - `###`
  - `####`
  - `#####`
- 列表 `-` `+` `*`
- 引用 `>`
- 分割线 `---`
- 代码块 ```js

## 安装

```sh
yarn add @wangeditor/plugin-md
```

## 使用

要在创建编辑器之前注册，且只能注册一次，不可重复注册。

```js
import { Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'

Boot.registerModule(markdownModule)

// Then create editor and toolbar
```
