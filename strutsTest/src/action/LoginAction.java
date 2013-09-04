package action;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;

public class LoginAction implements Action, ServletResponseAware, ServletRequestAware {

	private String username;
	private String password;
	private HttpServletResponse response;

	private HttpServletRequest request;
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String execute() throws Exception {
		
		//在Application范围内添加变量
		ActionContext ctx = ActionContext.getContext();
		Integer counter = (Integer)ctx.getApplication().get("counter");
		if(counter == null) {
			counter = 1;
		} else {
			counter ++;
		}
		ctx.getApplication().put("counter", counter);
		
		//在Session范围添加属性
		ctx.getSession().put("user", getUsername());
		if(getUsername().equals("test") && getPassword().equals("adminPass")) {
			
			//通过Response添加Cookies
			Cookie c = new Cookie("user", getUsername());
			c.setMaxAge(60 * 60);
			response.addCookie(c);
			
			ctx.put("tip", "服务器提示: 您已经成功登录");
			return SUCCESS;
		} else {
			ctx.put("tip", "服务器提示: 登录失败");
			return ERROR;
		}
	}
	
	public String sessionValidate() throws Exception {
		
		ActionContext ctx = ActionContext.getContext();
		
		System.out.println("user:\t" + ctx.getSession().get("user"));
		
		return null;
	}
	
	public String logout() throws Exception {

			request.getSession().removeAttribute("user");
			request.getSession().invalidate();
			System.out.println(request.getSession().getAttribute("user"));
			response.sendRedirect("/strutsTest/login.jsp");
		
		return null;
	}
	
	@Override
	public void setServletResponse(HttpServletResponse response) {
		this.response = response;
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}
}
