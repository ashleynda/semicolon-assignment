package PackagePractice;

import java.util.Scanner;

public class PasswordValidator {
    public static void main(String[] args) {
        validator();
    }


    public static void validator() {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter password:  ");
        String password = input.nextLine();

        if (password.length() < 8) {
            System.out.println("Make sure password is at least 8 or more characters");
            validator();
        }
        if (!password.matches(".*[A-Z].*")) {
            System.out.println("Make sure password has at least a capital letter in it");
            validator();
        }
        if (!password.matches(".*[a-z].*")) {
            System.out.println("Make sure password has at least a small letter in it");
            validator();
        }
        if (!password.matches(".*[0-9].*")) {
            System.out.println("Make sure password has at least a digit in it");
            validator();
        }
        if (!password.matches(".*[#?!@$%^&*-].*")) {
            System.out.println("Make sure password has a special character");
            validator();
        }

        else {
            System.out.println("Valid password");
            System.out.println("Thank you");
        }

//        return password_validator()
//
//
//        valid_password = password_validator()
//        print("Valid password", valid_password)
    }
}

