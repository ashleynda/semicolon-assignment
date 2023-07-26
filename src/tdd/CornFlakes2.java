package tdd;

import java.util.Scanner;

public class CornFlakes2 {

        public static void main(String[] args) {
            int total = 0;
            int counter = 0;

            Scanner input = new Scanner(System.in);
            System.out.print("Enter your score: ");
            int score = input.nextInt();

            while (score != -25) {
                System.out.print("Enter your score: ");
                score = input.nextInt();

                total = total += score;
                counter = counter + 1;
            }
            int average = total / counter;
            System.out.println("**************************************************************************");
            System.out.println("Aso Rock Secondary School, Abuja Nigeria");
            System.out.println("**************************************************************************");
            System.out.println("Class: SSS 3");
            System.out.println("Number of students in class: 20");
            System.out.println("Total Score:" + total);
            System.out.println("Average Score:" + average);
            System.out.println("**************************************************************************");


        }
    }


