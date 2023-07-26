package tdd;

import java.util.Arrays;

public class Fibonacci {
    public int[] fibonacci(int numbers) {
        int[] fibonacci = new int[numbers];
        int firstNum  = 0;
        int secondNum = 1;

        for (int i = 0; i < numbers; i++) {
            fibonacci[i] = firstNum;
            int nextNum = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = nextNum;
        }
        return fibonacci;
    }


//    public int[] fibonacci(int number) {
//        int[] fibonacci = new int[number];
//        int firstNum = 0;
//        int secondNum = 1;
//
//        for (int i = 0; i < number; i++) {
//            fibonacci[i] = firstNum;
//            int nextNum = firstNum + secondNum;
//            firstNum = secondNum;
//            secondNum = nextNum;
//        }
//        return fibonacci;
//    }

}
