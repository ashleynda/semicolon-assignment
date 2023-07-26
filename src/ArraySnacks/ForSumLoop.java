package ArraySnacks;

public class ForSumLoop {
    public static void main(String[] args) {

        int[] numbers = new int[]{100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        forSumLoop(numbers);
    }

    private static void forSumLoop(int[] numbers){
        int total = 0;
        for (int counter = 0; counter < numbers.length; counter++) {
            total += numbers[counter];
        }
        System.out.println(total + " ");

    }
}


