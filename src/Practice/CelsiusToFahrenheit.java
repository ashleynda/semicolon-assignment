package Practice;

import java.util.Scanner;

public class CelsiusToFahrenheit {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        System.out.println("Enter a degree in celsius:  ");
        double celsius = input.nextDouble();

        double fahrenheit = (double)celsius * 1.8 + 32;

        System.out.printf("Fahrenheit is %.1f ", fahrenheit);
    }
}
