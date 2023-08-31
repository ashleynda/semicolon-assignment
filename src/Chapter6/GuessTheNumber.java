package Chapter6;

import java.util.Random;
import java.util.Scanner;

import static java.lang.System.in;

public class GuessTheNumber {
    public static void main(String[] args) {
        generateRandom();
    }

    private static void generateRandom() {
        Random rand = new Random();
        Scanner input = new Scanner(in);
        int guess = rand.nextInt(1, 1000);
        guessNumbers(guess);
    }

    private static void guessNumbers(int guess) {
        Scanner input = new Scanner(in);
        System.out.println("Guess a number between 1 and 1000?  ");
        int number = input.nextInt();
        if (number == (guess)) {
            System.out.println("Congratulations. You guessed the number!");
            System.out.println("Do you want to play again?");
            generateRandom();
        }
        else {
            System.out.println("Too high. Try again.");
            guessNumbers(guess);
        }
    }


}
