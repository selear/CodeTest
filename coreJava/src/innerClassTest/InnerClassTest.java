package innerClassTest;

import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Date;

import javax.swing.JOptionPane;
import javax.swing.Timer;

public class InnerClassTest {

	public InnerClassTest() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		
		TalkingClock clock = new TalkingClock(1000, true);
		clock.start();
		
		JOptionPane.showMessageDialog(null, "Quit Program?");
		System.exit(0);
	}

}

class TalkingClock {
	public TalkingClock(int interval, boolean beep) {
		this.interval = interval;
		this.beep = beep;
	}

	public void start() {
		ActionListener listener = new TimePrinter();
		Timer t = new Timer(interval, listener);
		t.start();
	}

	private int interval;
	private boolean beep;

	class TimePrinter implements ActionListener {

		@Override
		public void actionPerformed(ActionEvent arg0) {
			Date now = new Date();
			System.out.println("At the tone, the time is " + now);
			Toolkit.getDefaultToolkit().beep();
		}
	}

}
