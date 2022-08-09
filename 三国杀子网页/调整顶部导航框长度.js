function 调整顶部导航框长度()//
{   长度 = 300*window.screen.availHeight/window.screen.availWidth;
// alert(Math.min(500, 长度))
    document.getElementById("顶部导言框").height = (Math.min(500, 长度)).toString()+"em"
}