package Practice;

import java.util.Scanner;

public class SeparatingIntegers {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            int num1 = 0;

            System.out.println("Enter digits:  ");
            int digits = input.nextInt();

            int number1 = num1 % 10;
            int number2 = (num1 / 10)%10;
            int number3 = (num1 / 100)%10;
            int number4 = (num1 / 1000)%10;
            int number5 = (num1 / 10000)%10;

            System.out.printf("Digits, %d\t%d\t%d\t%d\t%d  ", digits);


//        System.out.printf("Digits %d\t%d\t%d\t%d\t%d  ", digits);
        }
    }


