package Chapter6;

import java.security.SecureRandom;
import java.util.Scanner;

import static java.lang.System.in;

public class CrapsGameModification {
    private static final SecureRandom randomNumbers = new SecureRandom();
    private enum Status {CONTINUE, WON, LOST};
    private static final int SNAKE_EYES = 2;
    private static final int TREY = 3;
    private static final int SEVEN = 7;
    private static final int YO_LEVEN = 11;
    private static final int BOX_CARS = 12;
    private static final int bankBalance = 1000;

    public static void main(String[] args) {
        Scanner input = new Scanner(in);
        System.out.println("Enter a wager:  ");
        int wager = input.nextInt();

        if (wager <= bankBalance){
            System.out.println("You can play!!!!");
        }
        else {
            System.out.println("Wager lower than balance.");

        }

        int myPoint = 0;
        Status gameStatus;
        int sumOfDice = rollDice();

        switch (sumOfDice) {
            case SEVEN:
            case YO_LEVEN:
                gameStatus = Status.WON;
                break;
            case SNAKE_EYES:
            case TREY:
            case BOX_CARS:
                gameStatus = Status.LOST;
                break;
            default:
                gameStatus = Status.CONTINUE;
                myPoint = sumOfDice;
                System.out.printf("Point is %d%n", myPoint);
                break;
        }

        while (gameStatus == Status.CONTINUE) {
            sumOfDice = rollDice();

            if (sumOfDice == myPoint) {
                gameStatus = Status.WON;
            }
            else {
                if (sumOfDice == SEVEN) {
                    gameStatus = Status.LOST;
                }
            }
        }
        if (gameStatus == Status.WON) {
            System.out.println("Player wins");
        }
        else {
            System.out.println("Player loses");
        }
    }

    public static int rollDice() {
        int die1 = 1 + randomNumbers.nextInt(6);
        int die2 = 1 + randomNumbers.nextInt(6);
        int sum = die1 + die2;
        System.out.printf("Player rolled %d + %d = %d%n", die1, die2, sum);
        return sum;
    }


}

