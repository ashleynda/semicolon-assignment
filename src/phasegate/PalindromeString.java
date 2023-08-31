package phasegate;

import java.util.Collections;

public class PalindromeString {
    public static void main(String[] args) {
    }


        public static boolean palindrome (String word){
            boolean isWord = false;
            String newList = " ";
            for (int counter = 0; counter < word.length(); counter++) {
                char character = word.charAt((word.length() - 1) - counter);
                newList += character;
                if (word.equalsIgnoreCase(newList)) {
                    isWord = true;
                }
            }
            return isWord;
        }
    }


//            if (madam){
//                System.out.println("true");
//            }
//            else {
//                System.out.println("false");
//            }
//        }


//    boolean hourIsNotValid = hour < 0 || hour > 23;
//        if (hourIsNotValid){
//                throw new IllegalArgumentException("Hour is not valid");
//                }