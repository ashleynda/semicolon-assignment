package tdd;


import DiaryApp.Diaries;
import DiaryApp.Diary;

import javax.swing.*;
import java.util.Scanner;

import static java.lang.System.in;


public class DiaryMain {
    private static Scanner input = new Scanner(in);
    private static Diaries diaries = new Diaries();
    private static String userName;
    public static void main(String... args) {
       displayMethod("""
                1. Register
                2. Login""");
        String option = inputMethod("Enter option:  ");
        if (option.equalsIgnoreCase("1"))
            Register();
        if (option.equalsIgnoreCase("2"))
            Login();

    }

    private static String inputMethod(String prompt){
        return JOptionPane.showInputDialog(null, prompt);
    }

    private static void Register() {
        try{
            String userInput = inputMethod("Enter user name:  ");
            String password = inputMethod("Enter password:  ");
            diaries.addDiary(userInput, password);
            displayMethod("Added Successfully");

            main();
        } catch (IllegalArgumentException Error) {
            displayMethod(Error.getMessage());
        }
    }
    private static void Login() {
        try{
            String userInput = inputMethod("Enter user name:  ");
            userName = userInput;
            String password = inputMethod("Enter password:  ");
            diaries.validatePassword(userInput, password);
            userEntry();
        } catch (IllegalArgumentException Error) {
            displayMethod(Error.getMessage());
        }


    }

    private static void newEntry() {
        try {
            String title = inputMethod("Enter title of entry:  ");
            String body = inputMethod("Enter the contents:  ");
            diaries.findByUsername(userName).createEntry(title, body);
        } catch (IllegalArgumentException Error) {
            displayMethod(Error.getMessage());
        }
    }

    private static void updateEntry() {
        try {
            String id = inputMethod("Enter id number:  ");
            String title = inputMethod("Enter title of entry:  ");
            String body = inputMethod("Enter the contents:  ");
            diaries.findByUsername(userName).updateEntry(id, title, body);
        } catch (IllegalArgumentException Error) {
            displayMethod(Error.getMessage());
        }
    }

    private static void deleteEntry() {
        try {
            String id = inputMethod("Enter id number:  ");
            diaries.findByUsername(userName).deleteEntry(id);
        } catch (IllegalArgumentException Error) {
            displayMethod(Error.getMessage());
        }
    }


    private static void userEntry() {

        displayMethod("""
                
                1. New Entry
                2. Update Entry
                3. Delete Entry""");
        String option = inputMethod("Enter option:  ");
        if (option.equalsIgnoreCase("1"))
            newEntry();
        if (option.equalsIgnoreCase("2"))
            updateEntry();
        if (option.equalsIgnoreCase("3"))
            deleteEntry();
    }

    private static void displayMethod(String message) {
        JOptionPane.showMessageDialog(null, message);
    }


}
