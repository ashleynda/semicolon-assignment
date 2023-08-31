package chapter7;

import java.util.Scanner;

import static java.lang.System.in;

public class CommandLineArguments {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        System.out.println("Enter java initArray:  ");
        int init = input.nextInt();

        if (args.length != 3) {
            System.out.printf("Error: Please re-enter the entire command, including%n" +
                    "array size, initial value and increment value.%n");
        }
        else {
            int arrayLength = Integer.parseInt(args[0]);
            int[] array = new int[arrayLength];

            int initialValue = Integer.parseInt(args[1]);
            int incrementValue = Integer.parseInt(args[2]);

            for (int counter = 0; counter < array.length; counter++){
                array[counter] = initialValue + incrementValue * counter;
            }
            System.out.printf("%s%8s%n", "Index", "Value");

            for (int counter = 0; counter < array.length; counter++){
                System.out.printf("%5d%8d%n", counter, array[counter]);
            }
        }
    }
}
