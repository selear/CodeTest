package notHelloWorld;

import java.awt.EventQueue;
import java.awt.Graphics;

import javax.swing.JComponent;
import javax.swing.JFrame;

public class NotHelloWorld {

	public NotHelloWorld() {
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			
			public void run() {
				NotHelloWorldFrame frame = new NotHelloWorldFrame();
				frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
				frame.setVisible(true);
			}
		});
	}

}

class NotHelloWorldFrame extends JFrame {
	
	public NotHelloWorldFrame() {
		
		setTitle("NotHelloWorld");
		setSize(DEFAULT_WIDTH, DEFAULT_HEIGHT);
		NotHelloWorldComponent comp = new NotHelloWorldComponent();
		add(comp);
	}
	
	public static final int DEFAULT_WIDTH = 300;
	public static final int DEFAULT_HEIGHT = 200;
}

class NotHelloWorldComponent extends JComponent {
	
	//该方法会在系统事件发生之后由程序自行调用, 因此不需要程序员来手动指定调用的时机
	public void paintComponent(Graphics g) {
		g.drawString("Not a Hello, World program.", MESSAGE_X, MESSAGE_Y);
	}
	
	public static final int MESSAGE_X = 75;
	public static final int MESSAGE_Y = 100;
	
}