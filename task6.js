/**
 * Created by mshuang on 2017/6/15.
 */
//��ȡԪ��
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
//��갴�µĺ���
    var oEvent = ev || event;
    //�������box��λ�ò�ֵ
    var x = oEvent.clientX - box.offsetLeft;
    var y = oEvent.clientY - box.offsetTop;
    //����ƶ��ĺ���:���¼�����document�ϣ������Ϊ����ƶ�̫��û����קЧ��������
    document.onmousemove = function (ev) {
        var oEvent = ev || event;
        //��֤��ק�����������Χ
        //�ҵ�box�������ʽ��-250 �� -150 ��margin-left margin-top
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
    //���̧��ĺ���
    document.onmouseup = function(){
        document.onmousedown = null;
        document.onmousemove = null;
    }

    //�����������ק��divʱ����ֵ�bug
    //return false ��ֹĬ��ʱ�� ������bug
    return false;
}

