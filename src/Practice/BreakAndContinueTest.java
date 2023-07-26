package Practice;

public class BreakAndContinueTest {
    public static void main(String[] args) {
        int counter;

        for (counter = 1; counter <= 10; counter++) {
            if (counter == 5) {
                break;
            }
            System.out.printf(counter + " ");
        }
        System.out.printf("%n The counter broke out of the loop at counter: %d%n  ", counter);

        for (counter = 1; counter <= 10; counter++) {
            if (counter == 5) {
                continue;
            }
            System.out.printf(counter + " ");
        }
        System.out.printf("%nThe counter used continue to skip printing 5: %d%n", counter);

    }
}
