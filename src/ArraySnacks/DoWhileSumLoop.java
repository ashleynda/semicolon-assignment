package ArraySnacks;

public class DoWhileSumLoop {
    public static void main(String[] args) {
        int[] numbers = new int[]{100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        doWhileSumLoop(numbers);
    }

    private static void doWhileSumLoop(int[] numbers){
        int total = 0;
        int counter = 0;

        do {
            System.out.printf(total + " ");
            total += numbers[counter];
            counter += 1;
        }  while (counter < numbers.length);
        System.out.println();

    }
}








