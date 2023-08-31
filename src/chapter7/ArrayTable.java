package chapter7;

public class ArrayTable {
    public static void main(String[] args) {
        final int ARRAY_LENGTH = 3;
        int[][] table = new int[ARRAY_LENGTH][ARRAY_LENGTH];

        System.out.println(table.length);
        for (int x = 0; x< table.length; x++){
            for (int y = 0; y < table[x].length; y++){
                table[x][y] = x + y;
                System.out.println(table + " ");
            }
        }

    }
}
