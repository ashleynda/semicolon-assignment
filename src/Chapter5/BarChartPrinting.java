package Chapter5;

import java.util.Scanner;

import static java.lang.System.in;

public class BarChartPrinting {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        for (int counter = 1; counter <= 5; counter++){
            System.out.println("Enter numbers between 1 and 30:  ");
            int number = input.nextInt();
            while (number == counter){
                System.out.println("*");
              counter++;
            }
            System.out.println();
        }

    }
}
