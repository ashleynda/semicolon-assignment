package Practice;

import java.util.Scanner;

public class While {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number = 3;

        System.out.println("Enter product:  ");
        int product = input.nextInt();
        while (product <= 100) {
            product = 3 * product;

            System.out.println(product + " ");

            //else if (product <= 100) System.out.println("product is higher than 100");
        }
    }
}
