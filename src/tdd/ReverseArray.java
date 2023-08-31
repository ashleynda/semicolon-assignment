package tdd;

public class ReverseArray {
    public static void main(String[] args) {
        reverse(12321);

    }
    public static int reverse(int numbers) {
        String num = numbers + "";
        String ash = "";
        for (int counter = num.length()-1; counter >= 0; counter--) {
            char ley = num.charAt(counter);
            ash += ley;
        }

        return Integer.parseInt(ash);
    }


}


