package action;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;

public class LoginAction implements Action {

	private String username;
	private String password;

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
		
		if(getUsername().equals("test") && getPassword().equals("adminPass")) {
			ActionContext.getContext().getSession().put("user", getUsername());
			return SUCCESS;
		} else {
			return ERROR;
		}
	}
}
