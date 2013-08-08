package com.test.singleton.example.p0100;

/**
 * 单例模式(懒汉, 线程不安全)
 * @author selear
 */

public class Singleton {
	
	private static Singleton instance;
	
	private Singleton() {
	}
	
	public static Singleton getInstance() {
		if(instance == null) {
			instance = new Singleton();
		}
		return instance;
	}
}
