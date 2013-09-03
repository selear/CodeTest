package com.selear.common.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertyReader {

	public PropertyReader() {
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Properties prop = new Properties();
		
		try {
			prop.load(new FileInputStream("src/resource/config.properties"));
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		System.out.println(prop.getProperty("am_on"));
		System.out.println(prop.getProperty("am_off"));
		System.out.println(prop.getProperty("fm_on"));
		System.out.println(prop.getProperty("fm_off"));
	}

}
