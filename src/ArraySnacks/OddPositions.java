package ArraySnacks;

public class OddPositions {
    public static void main(String[] args) {
        int[] numbers = new int[]{100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        System.out.println("Elements of a given array:  ");
        oddPositions(numbers);
    }

    private static void oddPositions(int[] numbers) {
        for (int num = 1; num < numbers.length; num = num + 2) {
            System.out.println(numbers[num]);

        }
    }
}
