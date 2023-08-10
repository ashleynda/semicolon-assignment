package PackagePractice;

import java.util.Arrays;
import java.util.Collections;

public class RiteOfPassageArray {
    public static void main(String[] args) {

        int[] arrays = new int[]{5, 18, 32, 3, 4};
        int[] arr = new int[arrays.length];
        int[] num = new int[arrays.length];
        arr = Arrays.copyOf(arrays,arrays.length);
        Arrays.sort(arrays);

        for (int index = 4; index >= 0; index--) {
            int ar = arrays[index];
        }
        for (int index = 0; index < arrays.length; index++) {
            for (int idx = 0; idx < arr.length; idx++) {
                if (arrays[index] == arr[idx]) {
                    num[index] = arrays.length - index;
                }
            }
            System.out.println(num[index]);
        }
//            if (arrays[index] > maximum)
//                maximum = arrays[index];

        }



//        elementPosition(arrays);
    }


//    private static void elementPosition(int[] arrays){
//       int maximum = arrays[0];
//        for (int index = 0; index < arrays.length; index++) {
//            System.out.println(arrays[index]);
//            if (arrays[index] > maximum)
//                maximum = arrays[index];
//        }
//        System.out.printf("the largest no is: %d", maximum);
//



//        System.out.println();




