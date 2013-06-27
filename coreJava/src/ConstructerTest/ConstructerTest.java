package ConstructerTest;

import java.util.Random;

public class ConstructerTest {

	public static void main(String[] args) {
		Employee[] stuff = new Employee[3];

		stuff[0] = new Employee("Harry", 40000);
		stuff[1] = new Employee(50000);
		stuff[2] = new Employee();

		for (Employee e : stuff) {
			System.out.println(e.getId() + ", " + e.getName() + ", "
					+ e.getSalary());
		}
	}

}

class Employee {

	public Employee(String n, double s) {
		name = n;
		salary = s;
	}

	public Employee(double s) {
		this("Employee #" + nextId, s);
	}

	public Employee() {
		// name initializied to "" --see blow
		// salary not explicitly set --initialized to 0
		// id initialized in initialization block
	}

	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	public int getId() {
		return id;
	}

	private static int nextId;

	private int id;
	private String name = "";
	private double salary;

	static {
		Random generator = new Random();
		nextId = generator.nextInt(10000);
	}

	{
		id = nextId;
		nextId++;
	}

}
