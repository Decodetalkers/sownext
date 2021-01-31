var app1 = new Vue({
    el: '#app',
    data: function() {
        return {
            message: ["下载", "Download"],
            url: [{ location: "index.html", name: "主页" },
                { location: "https://www.deepinos.org", name: "博客" },
                { location: "https://www.deepinos.org", name: "论坛" },
                { location: "about.html", name: "关于" }

            ],
            url_name: [
                ["主页", "博客", "论坛", "关于"],
                ["HOME", "BLOCK", "DISCUSS", "ABOUT"]
            ],
            name: '下载',
            counter: 0,
        }
    },
    methods: {
        change: function() {

            let isChange = 1 - this.counter;
            localStorage.setItem('counter', isChange)
            this.counter = isChange
            this.name = this.message[isChange];
            for (let index in this.url) {
                this.url[index].name = this.url_name[isChange][index]

            }

        },
    },
    created() {
        let that = this
        let language = localStorage.getItem('counter')
        if (language == null) {
            localStorage.setItem('counter', 0)
            that.counter = 0
            return
        }
        that.counter = 1 - language
        that.change()
    }

});