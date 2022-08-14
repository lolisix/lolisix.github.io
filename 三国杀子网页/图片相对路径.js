function 图片相对路径(默认路径)//
{
    全图片 = document.getElementsByClassName("图片")
    for(var i=0; i<全图片.length; i++)//
    {
        全图片[i].src=默认路径 + 全图片[i].dataset.路径
    }
}

function 图床函数(网站, 参数1)//
{
    if(网站="github")//
    {
        switch(参数1)//
        {
            case "手牌": 
                return 'https://raw.githubusercontent.com/lolisix/shoupai/main/';
            case "武将A":
                return 'https://raw.githubusercontent.com/lolisix/wujiangA/main/';
            case "武将B1-2":
                return 'https://raw.githubusercontent.com/lolisix/wujiangB1-2/main/';
            case "武将B3":
                return 'https://raw.githubusercontent.com/lolisix/wujiangB3/main/';
            default:
                window.alert(参数1错误)
                return '';
        }
    }
    else if(网站="file")//
    {
        switch(参数1)//
        {
            case "手牌": 
                return 'file:///E://个人主页/三国杀民间扩展包/手牌/';
            case "武将A":
                return 'file:///E://个人主页/三国杀民间扩展包/武将A/';
            case "武将B1-2":
                return 'file:///E://个人主页/三国杀民间扩展包/武将B1-2/';
            case "武将B3":
                return 'file:///E://个人主页/三国杀民间扩展包/武将B3/';
            default:
                window.alert(参数1错误)
                return '';
        }
    }
}
