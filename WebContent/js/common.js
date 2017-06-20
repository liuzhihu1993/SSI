/** *查找某个对象的绝对定位*** */
function getAbsPosition(o) {
	// 是jquery,不做改变，不是jquery，转变为jquery对象
	o = $(o);

	if (o.length == 0) {
		return false;
	}
	o = o[0];

	// 定义两个参数，左边距，与顶边距
	var left, top;

	// o[0]:原生对象
	left = o.offsetLeft;
	top = o.offsetTop;

	// 找到当前对象的父对象,也就是父容器
	// o = o[0].offsetParent;

	while (o = o.offsetParent) {
		left = left + o.offsetLeft;
		top = top + o.offsetTop;
	}

	// 返回
	return {
		left : left,
		top : top
	};

}
