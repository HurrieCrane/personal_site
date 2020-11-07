var app = new Vue({
    el: '#persona_site',
    computed: {
        liame: function() {
            var _0x3f14=['.me'];(function(_0x491390,_0x3f1411){var _0x37e480=function(_0x57b878){while(--_0x57b878){_0x491390['push'](_0x491390['shift']());}};_0x37e480(++_0x3f1411);}(_0x3f14,0x73));var _0x37e4=function(_0x491390,_0x3f1411){_0x491390=_0x491390-0x0;var _0x37e480=_0x3f14[_0x491390];return _0x37e480;};var _0x1249c9=_0x37e4,liame='hurriecrane'+'@'+'pm'+_0x1249c9('0x0');
            return liame;
        }
    },
    methods: {
        open_liame: function(event) {
            window.open("mailto://" + app.liame)
        }
    }
})