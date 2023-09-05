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
    if(网站=="github")//
    {   
        switch(参数1)//
        {
            case "游戏牌": 
                return 'https://raw.githubusercontent.com/lolisix/shoupai/main/';
            case "武将A":
                return 'https://raw.githubusercontent.com/lolisix/wujiangA/main/';
            case "武将B1-2":
                return 'https://raw.githubusercontent.com/lolisix/wujiangB1-2/main/';
            case "武将B3":
                return 'https://raw.githubusercontent.com/lolisix/wujiangB3/main/';
            case "":
                return 'https://raw.githubusercontent.com/lolisix/Sanguoshatuchuang/main/'
            default:
                window.alert(参数1错误)
                return '';
        }
    }
    else if(网站=="file"||网站=="files")//
    {
        图片路径 = "file:///E://个人主页/";
        switch(参数1)//
        {
            case "游戏牌": 
                return 图片路径 + '三国杀民间扩展包/游戏牌/';
            case "武将牌A":
                return 图片路径 + '三国杀民间扩展包/武将牌A/';
            case "武将牌B1-2":
                return 图片路径 + '三国杀民间扩展包/武将牌B1-2/';
            case "武将牌B3":
                return 图片路径 + '三国杀民间扩展包/武将牌B3/';
            case "":
                return 图片路径 + '三国杀民间扩展包/'
            default:
                window.alert(参数1错误)
                return '';
        }
    }
}

function 默认位置()//
{  
    if(是否包含( decodeURI(window.location.href), "file:///" ))
    {  
        auto = "file";
    }
    else
    {
        auto = "github";
    }

    function 是否包含(字符串, 子字符串)//
    {   
        return new RegExp(子字符串).test(字符串);
    }
}