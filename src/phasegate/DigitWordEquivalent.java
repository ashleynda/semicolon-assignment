package phasegate;

import java.util.Scanner;

import static java.lang.System.in;

public class DigitWordEquivalent {
    public static void main(String[] args) {
        DigitAndWord();
    }

   public static void DigitAndWord() {
        Scanner input = new Scanner(in);
        System.out.println("Enter a digit:  ");
        int digit = input.nextInt();

//        for (int index = 0; index <= 10; index++) {
            if (digit == 1) {
                System.out.println("One");
            } else if (digit == 2) {
                System.out.println("Two");
            } else if (digit == 3) {
                System.out.println("Three");
            } else if (digit == 4) {
                System.out.println("Four");
            } else if (digit == 5) {
                System.out.println("Five");
            } else if (digit == 6) {
                System.out.println("Six");
            } else if (digit == 7) {
                System.out.println("Seven");
            } else if (digit == 8) {
                System.out.println("Eight");
            } else if (digit == 9) {
                System.out.println("Nine");
            } else if (digit == 10) {
                System.out.println("Ten");
            } else {
                System.out.println("Invalid output");
                DigitAndWord();
            }
        }
    }





