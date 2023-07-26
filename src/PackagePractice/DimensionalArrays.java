package PackagePractice;

public class DimensionalArrays {
    public static void main(String[] args) {
        String[][] letters =  {{"x","o","x"},{"o","o","x"},{"o","x","x"}};

        for (int counter = 0; counter < letters.length; counter++) {
            for (int array = 0; array < letters[counter].length; array++) {
                System.out.print(letters[counter][array] + " ");

            }
            System.out.println();

        }



    }
}
