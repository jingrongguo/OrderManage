module.exports = {
    lintOnSave: false,//去掉prettier编译警告
    // devServer: {
    //   host: '0.0.0.0',
    //   disableHostCheck: true, //  新增该配置项
    //   port: 4000,
    //   // 设置代理
    //   proxy: {
    //     "/api": {
    //       // target: "http://10.136.0.68:5102/admin", // 域名
    //       target:"http://10.136.0.160:38000/v1/issc",
    //       // ws: true, // 是否启用websockets
    //       changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //       pathRewrite: {
    //         "^/api": ""
    //       }
    //     }
    //   } 
    // }
  };