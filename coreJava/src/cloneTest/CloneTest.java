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

	// Cloneable�ӿ���һ������Խӿ�, ��˲�һ����Ҫ��д�÷���
	@Override
	public Employee clone() throws CloneNotSupportedException {
		Employee cloned = (Employee) super.clone();
		cloned.hireDay = (Date) hireDay.clone();
		return cloned;
	}

	public void setHireDay(int year, int month, int day) {
		Date newHireDay = new GregorianCalendar(year, month - 1, day).getTime(); // �������������µ�����,
																					// ��û�н�������
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
