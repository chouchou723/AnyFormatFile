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



 body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
 2 body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
 3 h1, h2, h3, h4, h5, h6{ font-size:100%; }
 4 address, cite, dfn, em, var { font-style:normal; }
 5 code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
 6 small{ font-size:12px; }
 7 ul, ol { list-style:none; }
 8 a { text-decoration:none; }
 9 a:hover { text-decoration:underline; }
10 sup { vertical-align:text-top; }
11 sub{ vertical-align:text-bottom; }
12 legend { color:#000; }
13 fieldset, img { border:0; }
14 button, input, select, textarea { font-size:100%; }
15 table { border-collapse:collapse; border-spacing:0; } 
	  
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
