$().ready(function() {

			/** *加个登录图片鼠标放上去移走的操作** */
			$("#submitBtn").mouseover(function() {
						this.src = "images/login_submitBtn2.gif";
					}).mouseout(function() {
						this.src = "images/login_submitBtn1.gif";
					}).click(function() {
						submitForm();
					});

			// 定位验证码图片框
			var oVCode = $("input[name=vcode]");
			var pos = getAbsPosition(oVCode);
			// alert(pos);

			var left = pos.left;
			var top = pos.top + oVCode[0].offsetHeight + 2;

			$("div.validateCodeDiv").css("top", top).css("left", left);

			// 设置验证码图片框显隐
			showHideVcodeImg();

			// 绑定验证码图片框单击事件实现更换验证码
			$("div.validateCodeDiv").click(function(event) {
						changeCode();
						event.stopPropagation();
					});
		});

// 验证码的显示情况
function showHideVcodeImg() {
	$("input[name=account], input[name=passwd], #submitBtn").click(function() {
				$("div.validateCodeDiv").css("display", "none");
			}).focus(function() {
				$("div.validateCodeDiv").css("display", "none");
			});

	$("input[name=vcode]").click(function(event) {
				$("div.validateCodeDiv").css("display", "block");
				event.stopPropagation();
			}).focus(function() {
				$("div.validateCodeDiv").css("display", "block");
			});

	$(document).click(function() {
				$("div.validateCodeDiv").css("display", "none");
			});
}