package phasegate;

import java.util.Scanner;

import static java.lang.System.in;

public class PromptName {
    public static void main(String[] args) {
        userEntry();
    }
        public static String userEntry(){
            Scanner input = new Scanner(in);
            System.out.println("Enter your name: ");
            String name = input.next();
            if (name.matches("^\\D+$*")){
                System.out.printf("Hello " + name);
            }
            else {
                System.out.println("Invalid input");
                userEntry();
            }
            return name;
        }




    }

