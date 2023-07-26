package Practice;

import java.util.Scanner;

public class Grades {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int total = 0;
        int gradeCounter = 1;


        while (gradeCounter <= 10) {

            System.out.println("Enter the next grade:  ");
            int grade = input.nextInt();

            total += grade;

            gradeCounter++;
        }
            int average = total / 10;

        System.out.printf("%nTotal of all grades is %d%n  ",  total);
        System.out.printf("The class average is %d%n  ",  average);


    }
}
