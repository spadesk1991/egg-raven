'use strict';
const raven = require("raven");
module.exports = app =>{
    // 获取配置
    app.addSingleton('raven', initRaven)

    function initRaven(){
    const { url } = app.config.raven;
    raven.config(url, { autoBreadcrumbs: true }).install();
    return  raven;
    }
}