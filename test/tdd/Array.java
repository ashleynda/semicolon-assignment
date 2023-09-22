package tdd;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Array {



    public int[] swapIndex(int firstIndex, int secondIndex, int[] array) {
        array[firstIndex] += array[secondIndex];
        array[secondIndex] = array[firstIndex] - array[secondIndex];
        array[firstIndex] = array[firstIndex] - array[secondIndex];
        return array;
    }

    public boolean checkThatTextBodyIsAnIsogram(String text){
//        Pattern pattern = Pattern.compile("[a-zA-Z]");
//        if (pattern.matcher(text).find() ) return true;
//        else return false;
        boolean isCondition = false;
        text = text.toLowerCase();
        int length = text.length();

        for (int i = 0; i < length - 1; i++){
            for (int j = 1 + 1; j < length; j++){
                if (text.charAt(i) == text.charAt(j)){
                    isCondition = false;
                }
                isCondition = true;
            }
        }


        return isCondition;
    }


}
