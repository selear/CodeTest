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
	
	//��˼·�Ͽ�, ���Ȼ�ȡ������Ϣ, ͬʱȷ������͵��µ�����;		d, today, month
	//������, ��λ�����µĵ�һ��, ͬ�»�ȡ���µ�һ���������ڼ�; 	d, weekday
	//�������ڼ���������������, ֱ���������ȷ��Ҫ�����Ĳ㼶;		d, firstDayOfWeek
}
