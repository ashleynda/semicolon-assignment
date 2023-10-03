package ArraySnacks;

public class KissDry {
    public static void main(String[] args) {

        String word = "kissdry";
        int[] num = new int[]{6, 2, 3, 4, 1, 0, 5};

        for (int i = 0; i < word.length(); i++ ){
            for (int j = 0; j < num.length; j++ ){
                if (num[i] == j){
                    System.out.print(word.charAt(j));
                }
            }
        }

    }
}
