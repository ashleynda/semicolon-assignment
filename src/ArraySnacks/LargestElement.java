package ArraySnacks;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;

public class LargestElement {
    public static void main(String[] args) {
        int[] numbers = new int[]{30, 50, 200, 60, 77, 10};
        largestElement(numbers);

    }
    private static void largestElement(int[] numbers){
        int maximum = numbers[0];
        for (int num = 0; num < numbers.length; num++) {
            if (numbers[num] > maximum)
                maximum = numbers[num];
        }
        System.out.printf("Largest element is: %d", maximum);


    }
}
