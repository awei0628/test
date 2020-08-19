
     window.onload=Main;
    //全局坐标变量
     var x="";
     var y="";
     //定位图片位置
     function GetMouse(oEvent)
     {
       x=oEvent.clientX;
       y=oEvent.clientY;
     document.getElementById("img1").style.left=parseInt(x)+"px";
     document.getElementById("img1").style.top=y-100+"px";
//   document.getElementById("img2").style.left=parseInt(x)+"px";
     document.getElementById("img2").style.top=y-200+"px";
    }
   //入口
   function Main()
   {
     var ele=document.getElementById("weixin1");
     
     //注册鼠标覆盖事件
     ele.onmouseenter =function(){
     	GetMouse(event);
     document.getElementById("img1").style.display="block";
     }
      
     // 注册鼠标离开事件
   ele.onmouseleave =function(){document.getElementById("img1").style.display="none";}
   
   
   var ele2=document.getElementById("weixin2");
     
     //注册鼠标覆盖事件
     ele2.onmouseenter =function(){
     	GetMouse(event);
     document.getElementById("img2").style.display="block";
     }
      
     // 注册鼠标离开事件
   ele2.onmouseleave =function(){document.getElementById("img2").style.display="none";}
   
   
   
   
   
    }
