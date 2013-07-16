package LogTest;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class LogTest {

	static Logger log = Logger.getLogger(LogTest.class);

	public LogTest() {
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		PropertyConfigurator.configure("log4j.properties");
		log.info("Entering application");
		Bar bar = new Bar();
		bar.doIt();
		
		String test = "中文字符测试\n";
		
		log.info("Exiting application");
	}

}

class Bar {
	
	static Logger logger = Logger.getLogger(Bar.class);

	public void doIt() {
		logger.debug("Did it again!");
	}
}
