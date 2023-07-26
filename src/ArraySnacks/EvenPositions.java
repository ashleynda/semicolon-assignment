package ArraySnacks;

public class EvenPositions {
    public static void main(String[] args) {
        int[] numbers = new int[]{100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        System.out.println("Elements of a given array:  ");
        evenPositions(numbers);
    }

    private static void evenPositions(int[] numbers){
        for (int num = 0; num < numbers.length; num = num + 2) {
            System.out.println(numbers[num]);
        }
        }

    }











