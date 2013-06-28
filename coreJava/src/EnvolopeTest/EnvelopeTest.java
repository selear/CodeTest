package envolopeTest;
import java.util.Date;
import java.util.GregorianCalendar;

public class EnvelopeTest {

	public static void main(String[] args) {
		Employee harry = new Employee("harry", 1000);
		Date d = harry.getHireDay();
		double tenYearsInMilliSeconds = 10 * 365 * 24 * 3600 * 1000;
		d.setTime(d.getTime() - (long) tenYearsInMilliSeconds);
		System.out.println(d.toString());
	}

}

class Employee {

	Employee(String n, double s) {
		name = n;
		salary = s;
		GregorianCalendar calendar = new GregorianCalendar();
		hireDay = calendar.getTime();
	}

	Employee(String n, double s, int year, int month, int day) {
		name = n;
		salary = s;
		GregorianCalendar calendar = new GregorianCalendar(year, month - 1, day);
		hireDay = calendar.getTime();
	}

	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	public Date getHireDay() {
		return hireDay;
	}

	public void raiseSalary(double byPercent) {
		double raise = salary * byPercent / 100;
		salary += raise;
	}

	private String name;
	private double salary;
	private Date hireDay;

}
