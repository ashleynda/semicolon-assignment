package tdd;

import java.util.Scanner;

public class CornFlakes1 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int totalScore = 0;
        for(int counter = 1;
            counter <= 20;
            counter++) {
            System.out.print("Enter the score for student " + counter +": ");
            int score = input.nextInt();
            totalScore += score;
        }

        double averageScore = (double) totalScore / 20;
        System.out.println("**************************************************************************");
        System.out.println("Aso Rock Secondary School, Abuja Nigeria");
        System.out.println("**************************************************************************");
        System.out.println("Class: SSS 3");
        System.out.println("Number of students in class: 20");
        System.out.println("Total Score:" + totalScore);
        System.out.println("Average Score:" + averageScore);
        System.out.println("**************************************************************************");
    }
}
