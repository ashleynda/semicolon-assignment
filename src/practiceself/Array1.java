package practiceself;

public class Array1 {
    public static void main(String[] args) {
//        int[] array = new int[]{32, 27, 64, 18, 95, 14, 90, 70, 60, 37};
//
//        System.out.printf("%s%8s%n", "Index", "Value");
//
//        for (int i = 0; i < array.length; i++){
//            System.out.printf("%5d%8d%n", i , array[i]);
//        }

//        final int ARRAY_LENGTH = 10;
//        int[] array = new int[ARRAY_LENGTH];
//
//        for (int counter = 0; counter < array.length; counter++){
//            array[counter] = 2 + 2 * counter;
//        }
//        System.out.printf("%s%8s%n", "Index", "Value");
//
//        for (int counter = 0; counter < array.length; counter++){
//            System.out.printf("%5d%8d%n", counter, array[counter]);
//        }

        int[] array = {87, 68, 94, 100, 83, 78, 85, 91, 76, 87};
        int total = 0;

        for (int counter = 0; counter < array.length; counter++){
            total += array[counter];
        }
        System.out.printf("The total is: %d%n", total);
    }
}
