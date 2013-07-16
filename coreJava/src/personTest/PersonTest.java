package personTest;

import java.util.Date;
import java.util.GregorianCalendar;

public class PersonTest {

	public PersonTest() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		Person[] people = new Person[2];
		
		people[0] = new Employee("Harry", 50000, 1987, 10, 26);
		people[1] = new Student("Maria", "computer science");
		
		for(Person p : people) {
			System.out.println(p.getName());
			System.out.println(p.getDescription());
		}
	}

}

abstract class Person {

	public Person() {

	}

	public Person(String n) {
		name = n;
	}

	abstract public String getDescription();

	public String getName() {
		return name;
	}

	private String name;

}

class Employee extends Person {

	Employee(String n, double s, int year, int month, int dayOfMonth) {
		super(n);
		salary = s;
		GregorianCalendar calendar = new GregorianCalendar(year, month - 1,
				dayOfMonth);
		hireDate = calendar.getTime();
	}

	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
		return String.format("an employee with a salary of $%.2f", salary);
	}

	public double getSalary() {
		return salary;
	}

	public Date getHireDate() {
		return hireDate;
	}

	public void raiseSalary(double byPercent) {
		double raise = salary * byPercent / 100;
		salary += raise;
	}

	private double salary;
	private Date hireDate;
}

class Student extends Person {

	public Student(String n, String m) {
		super(n);
		major = m;
	}

	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
		return "a student majoring in " + major;
	}

	private String major;

}
