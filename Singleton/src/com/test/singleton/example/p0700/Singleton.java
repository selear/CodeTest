package com.test.singleton.example.p0700;

/**
 * 第七种方式(双重校验锁)
 * 
 * @author selear
 * 
 */
public class Singleton {

	private volatile static Singleton singleton;

	private Singleton() {
	}

	public static Singleton getSingleton() {
		if (singleton == null) {
			synchronized (Singleton.class) {
				if (singleton == null) {
					singleton = new Singleton();
				}
			}
		}
		return singleton;
	}
}
