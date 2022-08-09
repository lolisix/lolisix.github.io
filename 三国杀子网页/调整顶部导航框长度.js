function 调整顶部导航框长度()//
{   长度 = 300*window.screen.availHeight/window.screen.availWidth;
// alert(长度.toString()+"em")
    document.getElementById("顶部导言框").height = 长度.toString()+"em"
}