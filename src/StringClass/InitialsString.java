package StringClass;

import com.sun.jdi.ArrayReference;

import java.util.Arrays;
import java.util.Scanner;

import static java.lang.System.in;

public class InitialsString {
    public static void main(String[] args) {
        initialsReturn();
    }

    public static void initialsReturn() {
        Scanner input = new Scanner(in);

        System.out.println("Enter your full name:  ");
        String name = input.nextLine();
         String[] names =name.split(" ");

         String allNames = "";

        for (int i = 0; i < names.length-1; i++) {
            allNames += names[i].charAt(0) + " . ";
        }

            System.out.println(allNames + " ");


    }
}



