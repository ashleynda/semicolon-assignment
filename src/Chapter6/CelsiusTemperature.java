package Chapter6;

import java.util.Scanner;

import static java.lang.System.in;

public class CelsiusTemperature {
    public static void main(String[] args) {
        sportsRecommender();
    }
    public static void sportsRecommender(){
        Scanner input = new Scanner(in);
        System.out.println("Enter celsius temperature:  ");
        int temp = input.nextInt();

        if (temp == 20 || temp == 30){
            System.out.println("Its reasonable weather for sports today.");
        } else if (temp == 10 || temp == 40) {
            System.out.println("Please exercise with care today, watch out for the weather!");

        }

    }
}
