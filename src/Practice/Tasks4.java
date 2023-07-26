package Practice;

import java.util.Scanner;

public class Tasks4 {
   public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int sum = 0;
        int x = 1;


        while(x<=10) {
            sum = sum + x;
            ++x;
        }
        System.out.printf("The sum is: %d%n", sum);
    }

//public static void main(String[] args) {
//    Scanner input = new Scanner(System.in);
//    int product =5;
//    int x = 5;
//
//    product *= x++;
//    System.out.printf("The product is %d  ", product);
//}
}
