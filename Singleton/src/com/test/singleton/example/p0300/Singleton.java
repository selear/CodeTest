package com.test.singleton.example.p0300;

/**
 * 第三种(饿汉)
 * @author joylee
 */
public class Singleton {
	
	private static Singleton instance = new Singleton();
	
	private Singleton () {
	}
	
	public static Singleton getInstance() {
		return instance;
	}
}