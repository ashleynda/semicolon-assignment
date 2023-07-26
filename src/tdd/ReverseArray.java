package tdd;

import java.util.Arrays;
import java.util.Collections;

public class ReverseArray {
    public int reverse(int numbers) {
        String num = numbers + "";
        String ash = "";
        for (int counter = num.length()-1; counter >= 0; counter--) {
            char ley = num.charAt(counter);
            ash += ley;
        }

        return Integer.parseInt(ash);
    }
}


