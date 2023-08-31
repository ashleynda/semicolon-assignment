package Chapter5;

import java.util.Scanner;

import static java.lang.System.in;

public class FairTax {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);

        System.out.println("Enter housing expense:  ");
        int housing = input.nextInt();

        System.out.println("Enter food expense:  ");
        int food = input.nextInt();

        System.out.println("Enter clothing expense:  ");
        int clothing = input.nextInt();

        System.out.println("Enter transportation expense:  ");
        int transportation = input.nextInt();

        System.out.println("Enter education expense:  ");
        int education = input.nextInt();

        System.out.println("Enter health care expense:  ");
        int health = input.nextInt();

        System.out.println("Enter vacations expense:  ");
        int vacation = input.nextInt();



    }
}
