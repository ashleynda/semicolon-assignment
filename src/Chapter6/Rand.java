package Chapter6;

import java.security.SecureRandom;
import java.util.Scanner;

import static java.lang.System.in;

public class Rand {
    public static void main(String[] args) {
        generateRandomNumbers();
    }

    private static void generateRandomNumbers() {
        SecureRandom rand = new SecureRandom();
        Scanner input = new Scanner(in);
        int n1 = rand.nextInt(9) + 1;
        int n2 = rand.nextInt(9) + 1;
        createNumbers(n1,n2);
    }

    private static void createNumbers(int n1, int n2) {
        Scanner input = new Scanner(in);
        System.out.println("What is " + n1 + " x " + n2 +"  ?");
        int num = input.nextInt();

        if (num == (n1*n2)){
            System.out.println("Very Good!");
            generateRandomNumbers();
        }
        else {
            System.out.println("No. Please try again.");
            createNumbers(n1, n2);
        }


    }
}
