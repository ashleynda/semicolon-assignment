package tdd;

import java.util.Scanner;

public class NokiaMenu {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("""
               1. Phone book
               2. Messages
               3. Chat
               4. Call register
               5. Tones
               6. Settings
               7. Call divert
               8. Games
               9. Calculator
               10. Reminders
               11. Clock
               12. Profiles
               13. SIM services""");
        System.out.println("Enter option:  ");
        int option = input.nextInt();


            System.out.println("""
                    1. Search
                    2. Service Nos. 1
                    3. Add name
                    4. Erase
                    5. Edit
                    6. Assign tone
                    7. Send b’card
                    8. Options
                    1. Type of view
                    2. Memory status
                    9. Speed dials
                    10. Voice tags""");
            if(option == 1){

            }






    }
}
