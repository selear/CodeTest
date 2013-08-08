package com.test.singleton.example.p0200;

/**
 * 第二种(懒汉, 线程安全)
 * @author selear
 * 本类在多线程中也能够很好的工作, 但是效率很低
 */
public class Singleton {

	private static Singleton instance;
	
	private Singleton() {
	}

	public static synchronized Singleton getInstance() {
		if(instance == null) {
			instance = new Singleton();
		}
		return instance;
	}
}
