function 图片相对路径(默认路径)
{
    全图片 = document.getElementsByClassName("图片")
    for(var i=0; i<全图片.length; i++)
    {
        全图片[i].src=默认路径 + 全图片[i].dataset.路径
    }
    
}