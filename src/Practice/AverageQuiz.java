package Practice;

import java.util.Scanner;

public class AverageQuiz {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int total = 0;
        int gradesCounter = 0;

        System.out.print("Enter quiz grades or -1 to terminate:  ");
        int grades = input.nextInt();

        while(grades != -1) {
            System.out.print("Enter quiz grades or -1 to terminate:  ");
            grades = input.nextInt();

            total += grades;
            gradesCounter++;

            System.out.print("Enter quiz grades or -1 to terminate:  ");
            grades = input.nextInt();
        }


            if (gradesCounter != 0) {
                double average = (double) total / gradesCounter;

                System.out.printf("%nThe total grades entered is %d%n:  ", total);
                System.out.printf("The average is %.2f%n  ", average);
            }
            else{
                System.out.println("No grades were entered");
        }
        


    }
}
