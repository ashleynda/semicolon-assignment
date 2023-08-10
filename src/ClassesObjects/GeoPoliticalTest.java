package ClassesObjects;

import java.util.Scanner;

import static ClassesObjects.GeoPolitical.getStatesZone;
import static java.lang.System.in;

public class GeoPoliticalTest {
    public static void main(String[] args) {
        Scanner input = new Scanner(in);
        GeoPolitical geoPolitical = GeoPolitical.getStatesZone("zone");

        System.out.println("Enter your state:  ");
        String state = input.nextLine();

        System.out.println("Your local government is  " + getStatesZone(state));



//        if (state.equals(GeoPolitical.valueOf("SOUTH-SOUTH"))){

        }


    }

//        GeoPolitical.values()



















