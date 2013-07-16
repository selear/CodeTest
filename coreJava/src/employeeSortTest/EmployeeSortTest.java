package employeeSortTest;

import java.util.Arrays;

public class EmployeeSortTest {

	public EmployeeSortTest() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		Employee[] staff = new Employee[3];
		
		staff[0] = new Employee("Harry Hacker", 35000);
		staff[1] = new Employee("Carl Cracker", 75000);
		staff[2] = new Employee("Tony Tester", 38000);
		
		Arrays.sort(staff);
		
		for(Employee e : staff) {
			System.out.println(e);
		}
	}
	
}

class Employee implements Comparable<Employee> {
	
	public Employee(String n, double s) {
		name = n;
		salary = s;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String n) {
		name = n;
	}
	
	public double getSalary() {
		return salary;
	}
	
	public void setSalary(double s) {
		salary = s;
	}
	
	public void raiseSalary(double byPercent) {
		double raise = salary * byPercent /100;
		salary += raise;
	}
	
	private String name;
	private double salary;
	
	@Override
	public int compareTo(Employee other) {
		
		if(salary > other.salary) return -1;
		if(salary < other.salary) return 1;
		return 0;
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("Name: ");
		sb.append(name.toString());
		sb.append("\t, Salary: ");
		sb.append(salary);
		return sb.toString();
	}
}
