var obj ={
    message:["下载","Download"],
    url:[ { location:"index.html",              name:"主页"},
          { location:"https://www.deepinos.org",name:"博客"},
          { location:"https://www.deepinos.org",name:"论坛"},
          { location:"about.html",              name:"关于"}
        ],
    url_name:[["主页","博客","论坛","关于"],["HOME","BLOCK","DISCUSS","ABOUT"]],
    name:'下载',
    counter:0,
};
var app1 = new Vue({
    el: '#app',
    data:obj,
    methods:{
        change:function(){
            if(this.counter==0)
            {
                this.counter=1;
                this.name=this.message[1];
                this.url.name=this.url_name[1];
            }
            else{
                this.counter=0;
                this.name=this.message[0];
                this.url.name=this.url_name[0];
            }
        },
    },

});
