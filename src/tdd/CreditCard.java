package tdd;

import java.util.Objects;
import java.util.Scanner;

public class CreditCard {

    private String cardType;
    private int visaNo;
    private String validateStatus;
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        CreditCard creditCard = new CreditCard();
        System.out.println("Hello, kindly enter card details to verify:  ");
        String card = input.next();
        creditCard.getCardType(card);
        creditCard.getValidateStatus(card);


        System.out.println("Credit Card Type:  "+ creditCard.cardType);
        System.out.println("Credit Card Number:  "+ card);
        System.out.println("Credit Card Digit Length:  "+ card.length());
        System.out.println("Credit Card Validity Status:  "+ creditCard.validateStatus);


    }

    public String getCardType(String cardNumber) {
        cardType = "Invalid Card Type";

        if (cardNumber.length() >= 13 || cardNumber.length() <= 16){

            if (cardNumber.startsWith("4"))  cardType = "Visa Card";
            if (cardNumber.startsWith("5"))  cardType = "Master Card";
            if (cardNumber.startsWith("37"))  cardType = "American Express Card";
            if (cardNumber.startsWith("6"))  cardType = "Discover Card";

        }
        return cardType;
    }
    
    public String getValidateStatus(String cardNumber) {
        int evenTotal= 0;
        int oddTotal = 0;
        for (int counter = cardNumber.length()-1; counter >= 0; counter--)
            if (counter % 2 == 0){
                int ley = Integer.parseInt(String.valueOf(cardNumber.charAt(counter)));

                if (ley >= 10){
                    evenTotal += ley%10+ley/10;
                }
                else
                    evenTotal += ley;
            }
        for (int counter = cardNumber.length()-1; counter >= 0; counter--) {
            if (counter % 2 != 0) {
                int ash = Integer.parseInt(String.valueOf(cardNumber.charAt(counter)));

                oddTotal += ash;
            }
        }
       int nda = oddTotal += evenTotal;
        if (nda % 10 == 0){
            validateStatus = "Valid";
        }
        else
            validateStatus = "Invalid";
        return validateStatus;
    }








}
