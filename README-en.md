# wangEditor markdown plugin

[中文文档](./README.md)

## Introduction

Use basic markdown syntax in [wangEditor](https://www.wangeditor.com/en/).

- Header
  - `#`
  - `##`
  - `###`
  - `####`
  - `#####`
- List `-` `+` `*`
- Blockquote `>`
- Divider `---`
- Codeblock ```js

## Installation

```sh
yarn add @wangeditor/plugin-md
```

## Usage

You should register plugin before create editor, and register only once (not repeatedly).

```js
import { Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'

Boot.registerModule(markdownModule)

// Then create editor and toolbar
```
