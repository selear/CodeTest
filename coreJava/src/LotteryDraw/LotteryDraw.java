package LotteryDraw;

public class LotteryDraw {

	public static void main(String[] args) {
		LotteryDraw ld = new LotteryDraw();

//		System.out
//				.println("Please Input the number how many digits would you like select? ");
//		Scanner sc = new Scanner(System.in);
//		int selected = sc.nextInt();
//
//		System.out
//				.println("Please Input how many numbers it has in the pool? ");
//		int size = sc.nextInt();
		
		int selected = 7;
		int size = 15;

		ld.method1(selected, size);
	}

	public void method1(int selected, int size) {

		int[] pool = new int[size];
		int[] result = new int[selected];

		for (int i = 0; i < pool.length; i++) {
			pool[i] = i + 1;
		}

		for (int i = 0; i < result.length; i++) {
			int index = (int) (Math.random() * size);
			result[i] = pool[index];
			pool[index] = pool[size - 1];
			size--;
		}

//		Arrays.sort(result);

		for (int num : result) {
			System.out.println(num);
		}
	}
}
