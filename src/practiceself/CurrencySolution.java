package practiceself;

import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

public class CurrencySolution {
    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner input = new Scanner(System.in);

        double payment = input.nextDouble();
        NumberFormat formatter= NumberFormat.getCurrencyInstance(Locale.US);
        String us=formatter.format(payment);
        NumberFormat formatter1= NumberFormat.getCurrencyInstance(new Locale("en","IN"));
        String india=formatter1.format(payment);
        NumberFormat formatter2= NumberFormat.getCurrencyInstance(Locale.CHINA);
        String china=formatter2.format(payment);
        NumberFormat formatter3= NumberFormat.getCurrencyInstance(Locale.FRANCE);
        String france=formatter3.format(payment);

        System.out.println("US: " + us);
        System.out.println("India: " + india);
        System.out.println("China: " + china);
        System.out.println("France: " + france);
    }
}
