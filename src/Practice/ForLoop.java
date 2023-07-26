package Practice;

import java.util.Scanner;

public class ForLoop {
    public static void main(String[] args) {

//        for (int i = 1; i <= 100; i++){
//            System.out.println(i + " ");
//        }
//        for (int i = 100; i  >= 1; i--){
//            System.out.println(i + " ");
//        }
//        for (int i = 7; i <= 77; i+=7){
//            System.out.println(i + " ");
//        }
//        for (int i = 10; i >= 2; i-=2){
//            System.out.println(i + " ");
//        }
//        for (int i = 99; i >=0; i -=11){
//            System.out.println(i + " ");
//        }
//        int total = 0;
//        for (int number =2; number <= 20; number += 2){
//            total += number;
//        }
//        System.out.printf("Sum is %d%n", total);
        Scanner input = new Scanner(System.in);
        double principal = 1000.0;
        double rate = 0.05;



        System.out.printf("%s%20s%n", "Year", "Amount on deposit");


        for (int year = 1; year <= 10; ++year){
            double amount = principal * Math.pow(1 + rate, year);

            System.out.printf("%4d%,20.2f%n", year, amount);
        }
//


    }
}
