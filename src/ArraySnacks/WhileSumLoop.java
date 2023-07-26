package ArraySnacks;

public class WhileSumLoop {
    public static void main(String[] args) {

        int[] numbers = new int[] {100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        int total = 0;
        int counter = 0;

        while (counter < numbers.length) {
            total += numbers[counter];
            counter += 1;
        }
        System.out.println(total + " ");


    }
}





