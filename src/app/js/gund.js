// JavaScript Document
function bMove(box01, box02)
{	
	var oBox=document.getElementById(box01);	
	var oUl=document.getElementById(box02);
	var aLi=oUl.getElementsByTagName('li');
	var aSpan=oBox.getElementsByTagName('span');
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	
	var timer=null;
	var speed=-2;
	function move()
	{
		if(oUl.offsetLeft<-oUl.offsetWidth/2)
		{
			oUl.style.left='0';
		}else if(oUl.offsetLeft>0)
		{
			oUl.style.left=-oUl.offsetWidth/2+'px';
		}
			oUl.style.left=oUl.offsetLeft+speed+'px';	
	}
	timer=setInterval(move,30);
	aSpan[0].onclick=function()
	{
		speed=-2;	
	}
	aSpan[1].onclick=function()
	{
		speed=2;	
	}
	oUl.onmouseover=function(){
		//alert("sdfdsfdsfdsf");
		clearInterval(timer);	
	}
	oUl.onmouseout=function(){
		timer=setInterval(move,30);	
	}
}
