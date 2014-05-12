
function f(){}
window.console = window.console || { log:f, warn:f, error:f };

var config = {};
window.config = config;

config.require = {
    baseUrl: 'js',
    paths:{
        libs:'../libs',
        require: '../libs/require'
    },
    map:{
        
    },
    config:{},
    packages:[],
    shim:{
        
    }
};


