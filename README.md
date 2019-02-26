##### 项目介绍
    react_webpack后台 // 待优化

##### 文件结构  
    |——bin                        // 启动文件
        |——www
    |——api                        // 接口
        |——user.js                // 登录验证并返回token
    |——config
        |——mysql.js               // 数据库配置文件
        |——sql-com.js             // 接口通用方法，失败或成功返回前台数据格式化以及数据库连接
        |——sql-mapping.js         // sql语句
    |——database
        |——qwerty.sql             // 数据库脚本
    |——public                     // 静态资源
    |——routes                     // 路由配置
        |——api.js                 // 后台接口url
        |——index.js               // 前台页面路由
    |——views                      // 视图文件（前台打包文件放的位置）
    |——app.js                     // express  配置文件----模板使用html
    |——package.json               
##### usage
    1. 安装mysql,node
    2. 新建数据库，账号root,密码root,导入default.sql
    3. git clone 'path/to/git/url'  
    4. npm install
    5. npm start
