package Chapter5;

public class IntegersDivisibleBy3 {
    public static void main(String[] args) {
        int odd = 3;
        for (int counter = 1; counter <= 30; counter = counter / 3 ) {
            System.out.printf(counter + " ");
            if (counter % 2 != 0)
                    odd = odd + counter;

        }
        System.out.printf("%nThe sum of the integers divisible by 3: %d%n", odd);
    }
}
