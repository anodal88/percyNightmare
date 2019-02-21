exports.environment ={
    baseUrl:"https://qa2-web.ncl.com",
    widths: [300, 600, 1280],
    authPath:"/booking-quote/authUser",
    creadentials:{ username: "bgesun", password: "ncl2011" },
    getConfig:function(){
        return {
            show:false,
            waitTimeout:120000,
            gotoTimeout:120000,
            loadTimeout:120000,
            executionTimeout:120000
        }
    }
}