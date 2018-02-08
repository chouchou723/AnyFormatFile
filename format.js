<meta name="viewport" content="width=device-width">
	var scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';

window.onresize=function (){
        var scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';   
    }

rem 解决方案。


body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
a{color:#2d374b;text-decoration:none}
a:hover{color:#cd0200;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
	  
css web初始。

body,div,form,ul,ol,dl,dt,dd {margin: 0; padding: 0; border: 0; width: 100%}/*ul等don't need width:100%*/

img{width: 10rem;display: block;} /*display:block to resolve the fact that there has a blank under the image*/
a:link {color: #ffffff; text-decoration:none;}
a:visited {color: #ffffff;text-decoration:none;}
a:hover {color: #ffffff; text-decoration:underline;}
a:active {color: #ffffff;}
ul{
	list-style: none
}
css mobile 初始（不完全）
