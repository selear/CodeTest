package calendarTest;
import java.text.DateFormatSymbols;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Locale;

public class OutputMonthCalendars {

	public static void main(String[] args) {
		OutputMonthCalendars omc = new OutputMonthCalendars();

		omc.method1();
	}

	public void method1() {

		//Construct d as current date;
		GregorianCalendar d = new GregorianCalendar();

		Locale.setDefault(Locale.ENGLISH);

		//save today and month data;
		int today = d.get(Calendar.DAY_OF_MONTH);
		int month = d.get(Calendar.MONTH);

		//set d to start date of month
		d.set(Calendar.DAY_OF_MONTH, 1);
		int weekday = d.get(Calendar.DAY_OF_WEEK);

		//set first day of week;
		int firstDayOfWeek = d.getFirstDayOfWeek();
		
		//determine the required indentation for the first line;
		int indent = 0;
		while (weekday != firstDayOfWeek) {
			indent++;
			d.add(Calendar.DAY_OF_MONTH, -1);
			weekday = d.get(Calendar.DAY_OF_WEEK);
		}

		//print weekday names;
		String[] weekdayNames = new DateFormatSymbols().getShortWeekdays();
		do {
			System.out.printf("%4s", weekdayNames[weekday]);
			d.add(Calendar.DAY_OF_MONTH, 1);
			weekday = d.get(Calendar.DAY_OF_WEEK);
		} while (weekday != firstDayOfWeek);
		System.out.println();
		
		for (int i = 1; i <= indent; i++)
			System.out.print("    ");
		
		d.set(Calendar.DAY_OF_MONTH, 1);
		do {
			//print day;
			int day = d.get(Calendar.DAY_OF_MONTH);
			System.out.printf("%3d", day);

			//mark current day with *;
			if (day == today)
				System.out.print("*");
			else
				System.out.print(" ");

			//advance d to the next day;
			d.add(Calendar.DAY_OF_MONTH, 1);
			weekday = d.get(Calendar.DAY_OF_WEEK);
			
			//start a new lint at the start of the week;
			if (weekday == firstDayOfWeek)
				System.out.println();

		} while (d.get(Calendar.MONTH) == month);
	}
	
	//从思路上看, 首先获取当天信息, 同时确定今天和当月的数据;		d, today, month
	//接下来, 定位到当月的第一天, 同事获取当月第一天属于星期几; 	d, weekday
	//根据星期几来增加增加缩进, 直到推算出正确需要缩进的层级;		d, firstDayOfWeek
}
