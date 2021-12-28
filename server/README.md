
## 分支

- **[main] => NestJS + TypeOrm + Mysql + Swagger => NestJS + Swagger

## 目录结构

```
├── LICENSE
├── README.md
├── commitlint.config.ts          // commitlint 配置文件
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── app                       // 存放 App Module 相关文件的文件夹
│   ├── common
│   │   ├── decorators            // 存放装饰器的文件夹
│   │   ├── filters               // 存放过滤器的文件夹
│   │   ├── interceptors          // 存放拦截器的文件夹
│   │   ├── middleware            // 存放中间件的文件夹
│   │   └── pipes                 // 存放管道的文件夹
│   ├── configs                   // 用来存放各种依赖的配置文件
│   │   ├── swagger.config.ts     // Swagger 配置文件
│   │   └── typeorm.config.ts     // TypeOrm 配置文件
│   ├── constants                 // 存放常量的文件夹
│   ├── main.ts                   // 应用主入口
│   ├── modules                   // 存放各种 Module 的文件夹
│   └── utils                     // 存放工具文件的文件夹
├── tsconfig.build.json
└── tsconfig.json
```

## 相关配置

### 数据库

**初次使用时**请在 `/src/configs/typeorm.config.ts` 中修改数据库的相关参数，否则无法正常与数据库建立连接。

Starter 使用了 Repository pattern，相关使用方式可查看 [官方文档](https://docs.nestjs.com/techniques/database#repository-pattern)。

### Swagger

配置 Swagger 页面信息请在 `/src/configs/swagger.config.ts` 中进行配置。

### CORS & CSRF

默认配置了跨域以及 CSRF，如需关闭请在 `/src/main.ts` 中将相应配置注释即可。

### commit 信息

已配置 commitlint，建议使用 `npm run commit` 进行代码提交。

提交信息可在 `.cz-config.js` 中进行配置
