var config = {
    port: 8888,
    site_logo: '/images/cnodejs_light.svg',  
    site_static_host: '',    
    debug: true,     // debug 为 true 时，用于本地调试
    get mini_assets() { return !this.debug; }     // 是否启用静态文件的合并压缩，详见视图中的Loader
};

module.exports = config;