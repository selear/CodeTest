package com.selear.common.util;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

public class PropertyWriter {

	public PropertyWriter() {
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		Properties prop = new Properties();
		
		String am_on = "1987-10-26 08:30:00";
		String am_off = "1987-10-26 11:30:00";
		String fm_on = "1987-10-26 13:30:00";
		String fm_off = "1987-10-26 17:30:00";
		
		prop.setProperty("am_on", am_on);
		prop.setProperty("am_off", am_off);
		prop.setProperty("fm_on", fm_on);
		prop.setProperty("fm_off", fm_off);
		
		try {
			prop.store(new FileOutputStream("src/resource/config.properties"), null);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}

}
