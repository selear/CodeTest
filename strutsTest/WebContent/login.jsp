<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="css/script01.css"><!-- 如果使用"/css/script01.css"表示从网站域名的根目录开始查找 -->
<script type="text/javascript" src="jscript/script01.js"></script>
</head>
<body>
	<form id="loginForm" name="login" action="">
		<table>
			<tbody>
				<tr>
					<td><label for="username">user:</label></td>
					<td><input type="text" id="username" name="username"></td>
				</tr>
				<tr>
					<td><label for="password">pass:</label></td>
					<td><input type="password" id="password" name="password"></td>
				</tr>
				<tr>
					<td>
						<input type="button" id="" name="regist" value="注册">
					</td>
					<td>
						<!-- 按钮中的id和name, 一般情况下不要设置为submit或reset, 否则会导致冲突从而使得javascript中的submit()方法无效 -->
						<span class="left"><input type="button" id="" name="login" value="登录"></span>
						<span class="right"><input type="reset" id="" name="" value="重置"></span>
					</td>
				</tr>
			</tbody>
		</table>
	</form>
</body>
</html>