package assignment;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Scanner;


public class CheckOutApp {
    private String customerName;
    private String cashierName;

    private LocalDateTime time = LocalDateTime.now();
    private ArrayList<String> product = new ArrayList<>();
    private ArrayList<Integer> productNumber = new ArrayList<>();
    private ArrayList<Double> productAmount = new ArrayList<>();
    private ArrayList<Double> totalProductNumber = new ArrayList<>();
    private ArrayList<String> itemsName = new ArrayList<>();

    private Double amountGiven;
    private static Scanner input = new Scanner(System.in);
    private double discountAmount;
    private double subTotal;

    public static void main(String[] args) {
        CheckOutApp customerName = new CheckOutApp();
        customerName.customerName();

//        System.out.println("""
//                SEMICOLON STORES
//                MAIN BRANCH
//                LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.");
//                TEL: 03293828343
//                DATE:
//                Cashier: """);

    }

    public void storeAddress() {
        System.out.println("""
                SEMICOLON STORES
                MAIN BRANCH
                LOCATION: 312, HERBERT MACAULAY WAY, SABO YABA, LAGOS.");
                TEL: 03293828343
                DATE: 
                Cashier: """);
        System.out.println("cashier: " + cashierName);
    }

    public void customerName() {
        System.out.println("What is the customer's name?  ");
        String customerName = input.nextLine();
        if (customerName.matches("^\\D+$*")) {
            items();
        } else {
            System.out.println("Invalid input");
            customerName();
        }
    }

    public void items() {
        System.out.println("What did the user buy?  ");
        String item = input.nextLine();
        if (item.matches("^\\D+$*")) {
            itemsName.add(item);
            quantity();
        } else {
            System.out.print("Invalid input");
            items();
        }
    }

    public void quantity() {
        System.out.println("How many pieces?  ");
        String quantity = input.nextLine();
        if (quantity.matches("^\\d+$*")) {
            productNumber.add(Integer.valueOf(quantity));
            priceUnit();
        } else {
            System.out.print("Invalid input");
            priceUnit();
        }

    }

    public void priceUnit() {
        System.out.println("How much per unit?  ");
        String priceUnit = input.nextLine();
        if (priceUnit.matches("^\\d+$*")) {
            productAmount.add(Double.valueOf(priceUnit));
            addItems();
        } else {
            System.out.println("Invalid input");
            addItems();
        }
    }

    public void addItems() {
        System.out.println("Add more items?" + "\nif yes enter \"Yes\" else enter \"No\"");
        String addItems = input.nextLine();

        boolean isYes = addItems.equalsIgnoreCase("yes");
        boolean isNo = addItems.equalsIgnoreCase("no");
        if (addItems.matches("^\\D+$*")) {

            if (isYes) {
                items();
            } else if (isNo) {
                cashierName();
            }
        } else {
            System.out.println("\nInvalid Entry");
            addItems();
        }
    }

    public void cashierName() {
        System.out.println("What is the Cashier's name:  ");
        String cashierNameT = input.nextLine();
        if (cashierNameT.matches("\\D+$*")) {
            discount();
            this.cashierName = cashierNameT;
        } else {
            System.out.println("Invalid input");
            cashierName();
        }
    }

    public void discount() {
        System.out.println("How much discount will he get?  ");
        String discount = input.nextLine();
        discountAmount = Double.parseDouble(discount);


        if (discount.matches("\\d*")) {
            invoiceReceipt();
        } else {
            System.out.println("Invalid input");
            discount();
        }
    }

    public void amountGiven() {
        System.out.println("How much did the customer give you?  ");
        String amount = input.nextLine();
        amountGiven = Double.valueOf(amount);
        if (amount.matches("\\d*")) {
            displayReciept();
        } else {
            System.out.println("Kindly pay full amount, money no complete");
            amountGiven();
        }
    }
    public void invoiceReceipt() {
        System.out.println("=".repeat(60));
        System.out.printf("%10s%9s%10s%10s", "ITEM", "QTY", "PRICE", "\t TOTAL(NGN)");
        System.out.print("\n" + "-".repeat(60));
        for (int counter = 0; counter < itemsName.size(); counter++) {
            double total = productNumber.get(counter) * productAmount.get(counter);
            System.out.printf("%n%10s%9d%11.2f%11.2f", itemsName.get(counter), productNumber.get(counter), productAmount.get(counter), total);
            subTotal += total;
        }
        System.out.println("\n" + "-".repeat(60));

        double discount = (discountAmount * subTotal) / 100;{
        double vat = (subTotal * 17.50) / 100;
        System.out.printf("%n%30s%11.2f%n%30s%11.2f%n%30s%11.2f", "Sub Total: ", subTotal, "Discount: ", discount,
                "VAT @ 17.50%: ", vat);
        System.out.println("\n" + "=".repeat(60));
        double billTotal = (subTotal - discount + vat);
        System.out.printf("%n%30s%11.2f", "Bill Total: ", billTotal);
        System.out.println("\n" + "=".repeat(60));
        System.out.printf("%s%.2f", "THIS IS NOT A RECEIPT KINDLY PAY ", billTotal);
        System.out.println("\n" + "=".repeat(60));
    }
        amountGiven();

}
    public void displayReciept() {
        System.out.println("=".repeat(60));
        System.out.printf("%10s%9s%10s%10s", "ITEM", "QTY", "PRICE", "\t TOTAL(NGN)");
        System.out.print("\n" + "-".repeat(60));
        for (int counter = 0; counter < itemsName.size(); counter++){
            double total = productNumber.get(counter) * productAmount.get(counter);
            System.out.printf("%n%10s%9d%11.2f%11.2f", itemsName.get(counter), productNumber.get(counter),productAmount.get(counter), total);
            subTotal += total;
        }
        System.out.println("\n" + "-".repeat(60));

        double discount = (discountAmount * subTotal) / 100;
        double vat = (subTotal * 17.50) / 100;
        System.out.printf("%n%30s%11.2f%n%30s%11.2f%n%30s%11.2f", "Sub Total: ",subTotal, "Discount: ", discount,
                "VAT @ 17.50%: ", vat);
        System.out.println("\n" + "=".repeat(60));
        double billTotal = (subTotal - discount + vat);
        System.out.printf("%n%30s%11.2f", "Bill Total: ", billTotal);
        amountGiven();
        System.out.printf("%n%30s%11.2f", "Amount Paid: ", amountGiven);
        double balance = billTotal - amountGiven;
        System.out.printf("%n%30s%11.2f", "Balance: ", balance);
        System.out.println("\n" + "=".repeat(60));
        System.out.printf("%s%.2f", "THANK YOU FOR YOUR PATRONAGE");
        System.out.println("\n" + "=".repeat(60));
    }

    }








