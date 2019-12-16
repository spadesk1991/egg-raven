'use strict';
const raven = require("raven");
/**
 * @param {Egg.Application} app egg application
 */
module.exports = app =>{
    // 获取配置
    app.addSingleton('raven', initRaven)

    function initRaven(){
    const { url } = app.config.raven;
    raven.config(url, { autoBreadcrumbs: true }).install();
    return  raven;
    }
    app.ctx.raven =raven;
}