# React Admin Template
## 常用命令
### 运行
```
cd www
npm start
```
### 构建
```
cd www
npm build
```

## 怎么用
### [路由和菜单](https://pro.ant.design/docs/router-and-nav-cn)路由和菜单是同一段代码配置的。
* 路由不在菜单中显示，配置： hideInMenu 为true。 
* 如果菜单从服务器获取。  src/layouts/BasicLayout.tsx 中修改 menuDataRender。并在代码中发起 http 请求。

在 `/config/config.js` 的 routers 字段中配置。

路由api用 umi 的[history](https://umijs.org/api#history)。如
```js
import { history } from 'umi'

history.push('/list')
history.goBack()
```

## 框架
* [Ant Design Pro 4.x](https://pro.ant.design/index-cn/)