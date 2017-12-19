//信息列表table控制隐藏弹出js



window.onload=function(){
	var collape=document.getElementsByClassName('sub-table-collape');
	for(var i=0;i<collape.length;i++){
		collape[i].addEventListener('click',function(){
//			this.parentNode:链接所在的父元素,也就是+所在表格
//			this.parentNode.parentNode:+所在表格的父元素,也就是tr
//			this.parentNode.parentNode.parentNode就是tr的父元素了,tbody

//			owIndex 属性返回某一行(rows )在表格的行集合中的位置（row index）。
//			先算出点击链接所在的行
			var rowindex=this.parentNode.parentNode.rowIndex;
			alert(this.parentNode.parentNode.nextSibling.nodeType);
//			if(document.getElementById('table-info-tbody').childNodes[rowindex+1].display="none"){
//				document.getElementById('table-info-tbody').childNodes[rowindex+1].display="block"
//			}
		},false);
	}
}
