package Chapter5;

public class IntegersDivisibleBy3 {
    public static void main(String[] args) {
        int odd = 30;
        int sum = 0;
        for (int counter = 1; counter <= odd; counter++) {
            if (counter % 3 == 0){
                sum += counter;
            }
        }
        System.out.printf("%nThe sum of the integers divisible by 3: %d%n", sum);
    }
}
