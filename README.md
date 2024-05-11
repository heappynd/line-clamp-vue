# Line Clamp Vue

Vue 实现多行文本省略功能

## 安装

```bash
npm install line-clamp-vue --save
```

## 使用

```js
import LineClampVue from "line-clamp-vue";

app.use(LineClampVue);
```

```vue
<template>
  <div>
    <line-clamp-vue text="多行文本" :maxLines="2" />
  </div>
</template>
```

## 参数

| 参数名   | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |
| maxLines | Number |        | 最大行数 |
| text     | String |        | 省略文本 |
