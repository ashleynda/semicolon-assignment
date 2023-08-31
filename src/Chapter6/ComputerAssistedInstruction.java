package Chapter6;

import java.security.SecureRandom;
import java.util.Scanner;

import static java.lang.System.in;

//public class ComputerAssistedInstruction {
//    public static void main(String[] args) {
//        generateRandomNumbers();
//
//    }
//
//    private static void generateRandomNumbers() {
//        SecureRandom randomNumbers = new SecureRandom();
//        Scanner input = new Scanner(in);
//        int q1 = randomNumbers.nextInt(9) + 1;
//        int q2 = randomNumbers.nextInt(9) + 1;
//        formQuestions(q1,q2);
//    }
//
//    private static void formQuestions(int q1, int q2) {
//        Scanner input = new Scanner(in);
//        System.out.print("what is  " + q1 + " x " + q2 +"  ?");
//        int answer = input.nextInt();
//
//        if (answer == (q1*q2)){
//            System.out.println("Very good!");
//            generateRandomNumbers();
//        }
//        else {
//            System.out.println("No.Please try again.");
//            formQuestions(q1, q2);
//        }
//
//    }
//}
