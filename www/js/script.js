var app={
    inicio: function(){
    this.iniciaFastClick();
    this.iniciaBotones();
    this.refrescarIframe();
    this.resizeIframe();
  },
  
  iniciaFastClick: function() {
    FastClick.attach(document.body);
  },
  
  resizeIframe: function(obj){
      obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  },
  
  iniciaBotones: function() {
    var iframeContent = document.querySelector('#app');
    iframeContent.addEventListener('click' ,this.refrescarIframe ,false);
  },
  
  refrescarIframe: function() {
    var online = navigator.onLine;
    alert(online);
    var iframeContent = document.querySelector('#app');
    if (online == true) {
    iframeContent.innerHTML = "<iframe id='myIframe' height='650px' src='https://mangoapp.co/' frameborder=0  scrolling='yes' width=100%></iframe>";
    } else {
    iframeContent.innerHTML ="NO HAY CONEXION A INTERNET :(";
    }
  },
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
};


