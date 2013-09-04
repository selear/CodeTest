<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	本站访问次数: ${applicationScope.counter}<br/>
	${sessionScope.user}, 您已经登陆!<br/>
	${requestScope.tip}<br>
	
	从系统读取Cookie值: ${cookie.user.value}<br/><br>
	
	<a href="sessionValidate">Click Here to sessionValidate</a><br><br>
	
	<a href="logout">Click Here to logout</a>
</body>
</html>