package cloneTest;

import java.util.Date;
import java.util.GregorianCalendar;

public class CloneTest {

	public CloneTest() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {

	}
}

class Employee implements Cloneable {

	public Employee(String n, double s) {
		name = n;
		salary = s;
		hireDay = new Date();
	}

	// Cloneable接口是一个标记性接口, 因此不一定需要重写该方法
	@Override
	public Employee clone() throws CloneNotSupportedException {
		Employee cloned = (Employee) super.clone();
		cloned.hireDay = (Date) hireDay.clone();
		return cloned;
	}

	public void setHireDay(int year, int month, int day) {
		Date newHireDay = new GregorianCalendar(year, month - 1, day).getTime(); // 这里仅仅获得了新的日期,
																					// 并没有进行设置
		hireDay.setTime(newHireDay.getTime());
	}

	public void setName(String n) {
		name = n;
	}

	public void setSalary(double s) {
		salary = s;
	}

	private String name;
	private double salary;
	private Date hireDay;
}
