package chapter7;

public class Initializing {
    public static void main(String[] args) {


//        int[] c = new int[] {-45, 6, 0, 72, 1543, -89, 0, 62, -3, 1, 6453, 78};
//
//        int sum = c[0] + c[1] + c[2];
//        int x = c[6] / 2;
//        System.out.printf("the sum is:  %d", sum);
//        System.out.printf("\n the x is: %d", x);
//
//        int[] array = new int[10];
//        System.out.printf("%s%8s%n", "Index", "Value");
//        for (int counter = 0; counter < array.length; counter++){
//            System.out.printf("%5d%8d%n", counter, array[counter]);
//        }

//        int[] array = new int[] {32, 27, 64, 18, 95, 14, 90, 70, 60, 37};
//        System.out.printf("%s%8s%n", "Index", "Value");
//        for (int counter = 0; counter < array.length; counter++){
//            System.out.printf("%5d%8d%n", counter, array[counter]);
//        }
//
//        summing up an array
//        int[] array = new int[] {87, 68, 94, 100, 83, 78, 85, 91, 76, 87};
//        int total = 0;
//        for (int counter = 0; counter < array.length; counter++){
//            total += array[counter];
//        }
//        System.out.printf("Total of: %d%n", total);

//        bar charts
        int[] array = new int[] {0, 0, 0, 0, 0, 0, 1, 2, 4, 2, 1};
        System.out.println("Grade distribution:");

        for (int counter = 0; counter < array.length; counter++){
            if (counter == 10){
                System.out.printf("%5d: ", 100);
            }else {
                System.out.printf("%02d -%02d: ", counter * 10, counter * 10 + 9);
            }
            for (int stars = 0; stars < array[counter]; stars++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}

