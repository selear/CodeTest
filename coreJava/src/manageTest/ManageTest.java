package manageTest;

import java.util.Date;
import java.util.GregorianCalendar;

public class ManageTest {

	public ManageTest() {
	}
	
	public static void main(String[] args) {
		
		Manager boss = new Manager("Carl Cracker", 80000, 1987, 12, 15);
		boss.setBonus(5000);

		Employee[] staff = new Employee[3];

		staff[0] = boss;
		staff[1] = new Employee("Harry Hacker", 50000, 1989, 10, 1);
		staff[2] = new Employee("Tommy Tester", 40000, 1990, 3, 15);

		for (Employee e : staff) {
			System.out.println("name: " + e.getName() + " , salary: "
					+ e.getSalary());
		}
	}
	
	
}

class Employee {

	Employee() {

	}

	Employee(String n, double s, int year, int month, int dayOfMonth) {
		name = n;
		salary = s;
		GregorianCalendar calendar = new GregorianCalendar(year, month,
				dayOfMonth);
		hireDate = calendar.getTime();
	}

	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	public void raiseSalary(double byPercent) {
		double raise = salary * byPercent / 100;
		salary += raise;
	}

	// 从业务逻辑上考虑, 雇佣日期可以获取, 但是输入之后不能进行修改
	public Date getHireDate() {
		return hireDate;
	}

	private String name;
	private double salary;
	private Date hireDate;
}

class Manager extends Employee {

	Manager(String n, double s, int year, int month, int dayOfMonth) {
		super(n, s, year, month, dayOfMonth);
		bonus = 0;
	}

	public double getSalary() {
		return super.getSalary() + bonus;
	}

	public void setBonus(double b) {
		bonus = b;
	}

	private double bonus;
}
