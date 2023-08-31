package chapter7;

import java.util.Scanner;

import static java.lang.System.in;

public class AirlineReservationSystem {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        int[] seats = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        System.out.println("Please type 1 for first class and Please type 2 for Economy:  ");
        int classSeat = input.nextInt();

        if (classSeat == 1){
            System.out.println("Assign first class seat 1 to customer");
        }


    }
}
