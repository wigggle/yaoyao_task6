/**
 * Created by mshuang on 2017/6/15.
 */
//获取元素
//var button = document.getElementById('click');
var box = document.getElementById('box');
var mask = document.getElementById('mask');

function showTips(){
    box.style.display = "block";
    mask.style.display = "none";
}
function hideTips(){
    box.style.display = "none";
    mask.style.display = "none";
}

var head = document.getElementsByTagName('h1')[0];
head.onmousedown = function(ev){
//鼠标按下的函数
    var oEvent = ev || event;
    //求出鼠标和box的位置差值
    var x = oEvent.clientX - box.offsetLeft;
    var y = oEvent.clientY - box.offsetTop;
    //鼠标移动的函数:把事件加在document上：解决因为鼠标移动太快没有拖拽效果的问题
    document.onmousemove = function (ev) {
        var oEvent = ev || event;
        //保证拖拽不出浏览器范围
        //我的box对象的样式有-250 和 -150 的margin-left margin-top
        var l = oEvent.clientX - x - 250;
        var t = oEvent .clientY - y - 150;
        if(l<250){
            l = 250;
        }else if(l > document.documentElement.clientWidth - box.offsetWidth -250 ){
            l = document.documentElement.clientWidth - box.offsetWidth + 250;
        }
        if(t<150){
            t = 0 + 150;
        }else if(t > document.documentElement.clientHeight - box.offsetHeight -150){
            t = document.documentElement.clientHeight - box.offsetHeight + 150;
        }
        box.style.left = l + "px";
        box.style.top = t + "px";
    }
    //鼠标抬起的函数
    document.onmouseup = function(){
        document.onmousedown = null;
        document.onmousemove = null;
    }

    //解决火狐浏览拖拽空div时会出现的bug
    //return false 阻止默认时间 解决火狐bug
    return false;
}

