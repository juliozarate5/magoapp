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
    iframeContent.addEventListener('click' ,this.refrescarIframe ,true);
  },
  
  refrescarIframe: function() {
    var online = navigator.onLine;
    if (online == true) {
    var iframeContent = document.querySelector('#app');
    iframeContent.innerHTML = "<iframe id='myIframe' src='https://mangoapp.co/' frameborder=0  scrolling='yes' width=100%></iframe>";
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

