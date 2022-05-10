# SCM-Web

> 软件配置管理：执行对相关程序的管理控制

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ npm run start
$ yarn run start

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```



## 编码规范

> 涉及的技术栈均采用当前最新的版本和语法：

1. 涉及的技术栈均采用当前最新的版本和语法

   - 采用create-react-app版本V5.0 构建
   - 遵循ES6 + Eslit 语法
   - React版本V17.0.2
   - React-router-dom版本V6.2.1
   - Antd版本V4.18.2

2. 命名

   - css选择器名以 `_` 分割

   - `components` & `pages`  **下首个文件夹名** ：大驼峰

     **其之内** 的文件/文件夹命名：小驼峰



![img](http://vue.wuliwu.top/upload/20220509142926501.jpg)



## React项目创建流程

> 使用 create-react-app 脚手架创建
>
> 全局安装脚手架：npm i -g create-react-app

1. `npx create-react-app <项目名>` 

   或者`yarn create react-app <项目名>`

2. 使用 yarn 包管理器

   必须 **Node >= 14** 如遇报错: `The engine "node" is incompatible with this module`

   执行：`yarn config set ignore-engines true` 忽略版本不兼容的问题

3. 依赖包对应版本

   ```js
   // 最新版本对应
   "dependencies": {
       "@craco/craco": "^6.4.3",
       "@testing-library/jest-dom": "^5.16.1",
    	"@testing-library/react": "^12.1.2",
       "@testing-library/user-event": "^13.5.0",
    	"antd": "^4.18.2",
       "craco-antd": "^1.19.0",
       "craco-less": "^2.0.0",
       "react": "^17.0.2",
       "react-dom": "^17.0.2",
       "react-router-dom": "^6.2.1",
       "react-scripts": "5.0.0",
       "web-vitals": "^2.1.3"
     },
   devDependencies： {
       "less": "^4.1.2",
       "less-loader": "^10.2.0",
     }
       
   ```
   





## 文件目录Pages

### Generator

> 表单设计器

**整个表单视图: 左中右分块视图**





### TableDesign

> 表格设计



### Playground

> 编码运行实时展现页面







## 插件

> 拖拽中的王者: [DndKit](https://docs.dndkit.com/presets/sortable)