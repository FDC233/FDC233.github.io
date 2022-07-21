hljs.highlightAll();
var pre_blocks = document.getElementsByTagName("pre");
for (var i = 0; i < pre_blocks.length; i++) {
    var code_block_class = pre_blocks[i].firstChild.className;
    var language = code_block_class;
    if (language == "") language = "Text";
    var language_html = "<div class='language'>" + language + "</div>";
    pre_blocks[i].innerHTML += language_html;
}
const App = Vue.createApp({
    data() {
        return {
            show_page: false,
            menu_show: false,
            card_top: 100,
            bar_local: 0,
        };
    },
    mounted() {
        if (document.getElementById("home-head"))
            document.getElementById("menu").className += " menu-color";
        if (document.getElementsByClassName("article")[0])
            document.body.style.backgroundColor = "#fff";
        window.addEventListener("scroll", this.handleScroll, true);
    },
    created() {
        var that = this;
        window.onload = function () {
            that.show_page = true;
            document.getElementById("loading").style.opacity = 0;
            setTimeout(function () {
                document.getElementById("loading").style.display = "none";
            }, 300);
        };
    },
    methods: {
        home_click() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        },
        handleScroll() {
            var new_local = document.documentElement.scrollTop;
            var menu = document.getElementById("menu");
            var that = this;
            if (this.bar_local < new_local) {
                menu.className = "hidden-menu";
                that.menu_show = false;
            } else menu.className = "show-menu";
            if (document.getElementById("home-posts-wrap"))
                if (new_local <= window.innerHeight - 100)
                    menu.className += " menu-color";
            this.bar_local = new_local;
        },
    },
});
App.mount("#layout");
