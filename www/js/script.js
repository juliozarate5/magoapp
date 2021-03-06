var app = {
    inicio: function () {
        this.iniciaFastClick();
        this.iniciaBotones();
        this.refrescarIframe();
        this.resizeIframe();
    },

    iniciaFastClick: function () {
        FastClick.attach(document.body);
    },

    resizeIframe: function (obj) {
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    },

    iniciaBotones: function () {
        //var iframeContent = document.querySelectorAll();

        document.body.addEventListener('click' ,this.refrescarIframe ,false);
 
    },

    checkNetConnection: function () {
        var xhr = new XMLHttpRequest();
        var file = "https://www.mangoapp.co/a-recursos/img/sis/favicon.ico";
        var r = Math.round(Math.random() * 10000);
        xhr.open('HEAD', file + '?subins=' + r, false);
        try {
            xhr.send();
            if (xhr.status >= 200 && xhr.status < 304) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },

    refrescarIframe: function () {
        var online = this.checkNetConnection();
       // alert(online);
        var iframeContent = document.querySelector('#app');
        if (online) {
            iframeContent.innerHTML = "<iframe id='myIframe' height='650px' src='https://mangoapp.co/' frameborder=0  scrolling='yes' width=100%></iframe>";
        } else {
            iframeContent.innerHTML = "NO HAY CONEXION <div id='botonRefresh'> - Toca para volver a cargar - </div>";
        }
    },
};

if ('addEventListener' in document) {
    document.addEventListener("deviceready", function () {
        app.inicio();
    }, false);
};
