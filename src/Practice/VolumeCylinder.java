package Practice;

import java.util.Scanner;

public class VolumeCylinder {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("Enter radius of a cylinder:  ");
        double radius = input.nextDouble();

        System.out.println("Enter length of a cylinder:  ");
        int length = input.nextInt();

        double area = (double) radius * radius * Math.PI;
        double volume = (double) area * length;

        System.out.printf("%nThe area is %.3f%n  ", area);
        System.out.printf("The volume is %.1f  ", volume);
    }
}
