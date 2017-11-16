## 项目启动

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# serve with hot reload at localhost:9000
npm run prod

# build for production and view the bundle analyzer report
npm run build --report
```

#开发注意

api的正确添加方法 : apis下有对应的模块文件，在文件export对象中 添加你的api ，如果是新的模块，需要自行添加模块文件夹，并且在apis/index.js中export ，所有的对应的api都会注入到 全局Vue $$api对象中。调用方法 ： this.$api.api_name （api_name生成规则是 module_method）

/apis/user/index.js
```
export default [
  {
    name: '登录',
    method: 'login',
    path: '/login/login',
    type: 'post'
  }
]
```
/apis/index.js
```
export default [{
  module: 'user',
  name: '用户管理',
  list: user
}]

```
