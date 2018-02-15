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
    var iframe = document.getElementById('myIframe');
    if(iframe){
        iframe.addEventListener('click' ,this.refrescarIframe ,true);
    }
  },
  
  handleConnectionChange: function(evt){
    var iframeContent = document.querySelector('#app');
    if(event.type == "offline"){
        iframeContent.innerHTML = "NO CONEXION :(";
    }
    if(event.type == "online"){
        iframeContent.innerHTML = "<iframe id='myIframe' height='650px' src='https://mangoapp.co/' frameborder=0  scrolling='yes' width=100%></iframe>";
    }
    alert(new Date(event.timeStamp));
  },

  refrescarIframe: function() {
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this.handleConnectionChange);
  },
};

if ('addEventListener' in document) {
  document.addEventListener("deviceready", function() {
    app.inicio();
  }, false);
};
