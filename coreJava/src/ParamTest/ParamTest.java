package ParamTest;

public class ParamTest {

	public ParamTest() {
	}
	
	public static void main(String[] args) {
		Employee alice = new Employee("Alice", 70000);
		Employee bob = new Employee("Bob", 60000);
		System.out.println("Before of method: "+alice.getName());
		System.out.println("Before of method: "+bob.getName());
		method3(alice, bob);
		System.out.println("\nAfter of method: "+alice.getName());
		System.out.println("After of method: "+bob.getName());
	}
	
	public static void method1() {
		System.out.println("Testing tripleValue:");
		double percent = 10;
		System.out.println("Before: percent " + percent);
		tripleValue(percent);
		System.out.println("After: percent " + percent);
	}

	public static void method2() {
		System.out.println("Testing tripleSalary");
		Employee harry = new Employee("Harry", 10000);
		System.out.println("\nBefore: salary " + harry.getSalary());
		tripleSalary(harry);
		System.out.println("After: salary " + harry.getSalary());
	}
	
	public static void method3(Employee x, Employee y) {
		System.out.println("\nTesting Swap");
		Employee temp = x;
		x = y;
		y = temp;
		System.out.println("End of method: x=" + x.getName());
		System.out.println("End of method: y=" + y.getName());
	}
	
	public static void tripleValue(double percent) {
		percent = 3 * percent;
		
	}
	
	public static void tripleSalary(Employee harry) {
		harry.raiseSalary(200);
	}
}

class Employee {
	public Employee(String n, double s) {
		name = n;
		salary = s;
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
 
	private String name;
	private double salary;
}
