// 转换表单
$(".info-item .btn").click(function() {
  $(".container").toggleClass("log-in");
});

$(".container-form .btn").click(function() {
  var isValid = true;
  var errorMessage = "";

  // 清除以前的错误消息
  $(".error-message").text("");

  // 登录表单验证
  if ($(this).attr('id') == "loginBtn") {
      var username = $("#loginUsername").val();
      var password = $("#loginPassword").val();

      if (username === "" || password === "") {
          errorMessage = "用户名和密码不能为空";
          $("#loginError").text(errorMessage);
          isValid = false;
      }
    }
  // 注册表单验证
   else if ($(this).attr('id') == "signupBtn") {
      var username = $("#signupUsername").val();
      var email = $("#signupEmail").val();
      var password = $("#signupPassword").val();
      var confirmPassword = $("#confirmPassword").val();

      if (username === "" || email === "" || password === "" || confirmPassword === "") {
          errorMessage = "所有字段都必须填写";
          $("#signupError").text(errorMessage);
          isValid = false;
      } else if (password !== confirmPassword) {
          errorMessage = "密码和确认密码不一致";
          $("#signupError").text(errorMessage);
          isValid = false;
      }
  }

  // 如果验证通过，跳转到首页
  if (isValid) {
    $(".container").addClass("active");
    setTimeout(function() {
        window.location.href = "shouye.html";
    }, 2000); // 2000毫秒 = 2秒
  }
});