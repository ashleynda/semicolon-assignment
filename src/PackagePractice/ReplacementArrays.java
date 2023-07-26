package PackagePractice;

import java.util.Arrays;

public class ReplacementArrays {
    public static void main(String[] args) {
        String[][] letters =  {{"x","o","x"},{"o","o","x"},{"o","x","x"}};

        for (int counter = 0; counter < letters.length; counter++) {
            for (int array = 0; array < letters[counter].length; array++) {

                if(letters[counter][array].equals("x")){
                    letters[counter][array] = "1";
                }
                if (letters[counter][array].equals("o")){
                    letters[counter][array] = "0";
                }
                System.out.print(letters[counter][array] + " ");
            }



            System.out.println();
        }

    }
}

