package PackagePractice;

import java.util.Scanner;

public class RestartProgram {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int sum = 0;


        for (int counter = 1; counter < 11;) {
            System.out.println("Enter scores:  ");
            int scores = input.nextInt();

            if (scores <= 100 && scores >= 0){
                sum = sum + scores;
                counter++;
            }
            if(scores == 30){
                sum= 0;
                counter = 1;
                System.out.println("Restart Program");
            }
        }
        System.out.printf("The sum of valid numbers is %d:  ", sum);

    }
}
