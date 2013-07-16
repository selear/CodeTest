package pairTest1;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class PairTest1 {

	static Logger log = Logger.getLogger(PairTest1.class);
	
	public PairTest1() {
		
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		PropertyConfigurator.configure("log4j.properties");
		
		log.info("开始赋值字符串数组");
		String[] words = { "Mary", "had", "a", "little", "lamb" };
		log.info("字符串数组赋值完毕");
		log.info("获取字符串中的最短和最长的字符串");
		Pair<String> mm = ArrayAlg.minmax(words);
		log.info("minmax()方法执行完毕");
		System.out.println("min = " + mm.getFirst());
		System.out.println("max = " + mm.getSecond());
		
		System.out.println("Mary".compareTo("a"));
		System.out.println("M".compareTo("a"));	//说明直接使用方法compareTo()的时候, 将字符串首字母进行对比, 最后得出结果.
	}

}

class ArrayAlg {

	public static Pair<String> minmax(String[] a) {

		if (a == null || a.length == 0)
			return null;
		String min = a[0];
		String max = a[0];

		for (int i = 0; i < a.length; i++) {
			if (min.compareTo(a[i]) > 0)
				min = a[i];
			if (max.compareTo(a[i]) < 0)
				max = a[i];
			
			System.out.println("min.compareTo(a[i]) > 0" + min + " : " + a[i]);
			
		}

		return new Pair<String>(min, max);
	}

	public static <T> T getMidle(T[] a) {
		return a[a.length / 2];
	}

}

class Pair<T> {

	public Pair() {
		first = null;
		second = null;
	}

	public Pair(T first, T second) {
		this.first = first;
		this.second = second;
	}

	public T getFirst() {
		return first;
	}

	public T getSecond() {
		return second;
	}

	private T first;
	private T second;
}
