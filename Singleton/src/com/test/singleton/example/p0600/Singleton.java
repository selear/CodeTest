package com.test.singleton.example.p0600;

/**
 * 第六种(枚举)
 * @author selear
 * Effective Java作者提倡的方式, 不仅避免多线程同步问题, 而且还能方式反序列化重建对象
 */
public enum Singleton {
	INSTANCE;
	public void whatEverMethod() {}
}
