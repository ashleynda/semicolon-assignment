package Chapter4;

import java.util.Scanner;

public class FindLargestNumber {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);


        int largest = 0;
        int counter = 0;

        while (counter < 10) {
            System.out.println("Enter values:  ");
            int values = input.nextInt();

            if (values >= largest){
                largest = values;
            }
            counter++;
        }
        System.out.printf("The Largest is %d\n", largest);



    }
}
