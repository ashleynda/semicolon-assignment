package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class CreatingAComparator {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        System.out.println("Enter a number:  ");
        int num = input.nextInt();
        System.out.println("Enter another number:  ");
        int num2 = input.nextInt();

        if (num == num2){
            System.out.println("Show 0 when numbers are equal");
        } else if (num > num2) {
            System.out.println("First number is greater than second number");
        } else if (num2 > num) {
            System.out.println("Show -1 when second number is greater than first number");

        }
    }
}
