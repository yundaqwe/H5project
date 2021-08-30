 function WebSocketTest(value)
         {
			 if(confirm("do you want to connect to the server?"))
        
               // alert(value)
               // 打开一个 web socket
               var ws = new WebSocket(value);
                
               ws.onopen = function()
               {
                  // Web Socket 已连接上，使用 send() 方法发送数据
                  ws.send("发送数据");
                  alert("connect successfully 已经与服务器建立了连接rn当前连接状态："+this.readyState);
               };
                
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  alert("数据已接收...");
               };
                
               ws.onclose = function()
               { 
                  // 关闭 websocket
                  alert("连接已关闭..."); 
               };
            }