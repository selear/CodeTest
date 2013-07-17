package treeSetTest;

import java.util.SortedSet;
import java.util.TreeSet;

public class TreeSetTest {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		SortedSet<Item> parts = new TreeSet<Item>();
		parts.add(new Item("Toaster", 1234));
		parts.add(new Item("Widget", 4562));
		parts.add(new Item("Modem", 9912));
		
		System.out.println(parts);
	}

}

/**
 * 重写的方法有: toString(), equals(), hashCode(), compareTo()
 * 在System.out.print()调用对象的时候, 会自动调用toString()方法; 在equals()调用的时候,
 * 最自动调用hashCode()方法
 * 
 * @author joylee
 * 
 */
class Item implements Comparable<Item> {

	/**
	 * Constructs an item.
	 * 
	 * @param aDescription
	 *            the item's description
	 * @param aPartNumber
	 *            the item's partnumber
	 */
	public Item(String aDescription, int aPartNumber) {
		description = aDescription;
		partNumber = aPartNumber;
	}

	public String getDescription() {
		return description;
	}

	@Override
	public String toString() {
		return "[description = " + description + ", partNumber = " + partNumber
				+ "]";
	}

	@Override
	public boolean equals(Object otherObject) {
		if (this == otherObject)
			return true;
		if (otherObject == null)
			return false;
		if (getClass() != otherObject.getClass())
			return false;

		Item other = (Item) otherObject;
		return description.equals(other.description)
				&& partNumber == other.partNumber;
	}

	@Override
	public int hashCode() {

		return 13 * description.hashCode() + 17 * partNumber;
	}

	@Override
	public int compareTo(Item other) {

		return this.partNumber - other.partNumber;
	}

	private String description;
	private int partNumber;

}