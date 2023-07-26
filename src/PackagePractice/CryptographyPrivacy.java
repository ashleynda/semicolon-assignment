package PackagePractice;

import java.util.Arrays;
import java.util.Scanner;

public class CryptographyPrivacy {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        System.out.println("Enter a four digit number:  ");
        int digit = input.nextInt();

        String encryptedNumber = encryptInteger(digit);
        System.out.println(encryptedNumber);


    }

    public static String encryptInteger(int number) {
        int[] digits = new int[4];
        digits[3] = number % 10;
        number /= 10;
        digits[2] = number % 10;
        number /= 10;
        digits[1] = number % 10;
        number /= 10;
        digits[0] = number % 10;
        number /= 10;

        for (int i = 0; i < 4; i++) {
            digits[i] = (digits[i] + 7) % 10;


        }
        System.out.println(Arrays.toString(digits));
        int num = digits[0];
        digits[0] = digits[2];
        digits[2] = num;

        int swap = digits[1];
        digits[1] = digits[3];
        digits[3] = swap;

//        System.out.println(digits);

        String answer = "";
        for (int digit = 0; digit < 4; digit++) {
            answer = "" + String.valueOf(digit);

        }
        return answer;
    }


    }






//    digits[2] = number % 10;
//    number /= 10;
//    digits += 7;
//    digits[3] = number % 10;
//    number /= 10;
//    digits[0] = number % 10;
//    number /= 10;
//    digits[1] = number % 10;
//    number /= 10;
