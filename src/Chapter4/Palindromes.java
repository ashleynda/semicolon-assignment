package Chapter4;

import java.util.Scanner;

import static java.lang.System.in;

public class Palindromes {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);
        int original;
        int reversedNum = 0;
        int remainder;

        System.out.println("Enter a 5 digit integer:  ");
        int digit = input.nextInt();
        original = digit;

        while (digit != 0){
            remainder = digit % 10;
            reversedNum = (reversedNum * 10) + remainder;
            digit = digit / 10;
        }
        if (original != 5){
            System.out.println("Error: invalid length");
            System.out.println("Enter a 5 digit integer:  ");
            digit = input.nextInt();
        }
        if (original == reversedNum) {
            System.out.println(" Digit is a palindrome");
        }
        else {
            System.out.println("digit is not a palindrome.");
        }
    }
}
