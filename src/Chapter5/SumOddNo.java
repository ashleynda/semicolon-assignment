package Chapter5;

import java.util.Scanner;

public class SumOddNo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int odd = 0;
        for (int count = 1; count <= 99; count+=2) {
            System.out.printf(count + " ");
            if (count % 2 != 0)
                odd = odd + count;
        }
            System.out.printf("%nThe sum of the integers: %d%n", odd);

    }
}
