package com.test.singleton.example.p0500;

/**
 * 第五种(静态内部类)
 * @author selear
 * 实现了延迟加载, 保证在加载了该类, 但没有调用getInstance()方法的时候, 不会进行实例化
 */
public class Singleton {

	private static class SingletonHolder {
		private static final Singleton INSTANCE = new Singleton();
	}
	
	private Singleton() {}
	
	public static final Singleton getInstance() {
		return SingletonHolder.INSTANCE;
	}
}
