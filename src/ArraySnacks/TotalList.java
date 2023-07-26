package ArraySnacks;

public class TotalList {
    public static void main(String[] args) {


//        int[] numbers = new int[] {100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
//        int runningTotal = 0;
//        for (int num : numbers) {
//            runningTotal += num;
//            System.out.println("Running Total: " + runningTotal);
//        }
        int[] numbers = new int[]{100, 20, 2, 70, 23, 50, 9, 71, 33, 1};
        totalList(numbers);
    }

    private static void totalList(int[] numbers){

        int total = 0;
        int counter = 0;

        do {
            System.out.println(total + " ");
            total += numbers[counter];
            counter ++;
        }  while (counter <= numbers.length);
        System.out.println();
    }
}




