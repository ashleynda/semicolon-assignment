package Chapter4;

public class CheckerBoardAsterisks {
    public static void main(String[] args) {

        for (int row = 0; row <= 8; row++){
            for (int column = 0; column <= row; column--){
                System.out.print("* ");
            }
            for (int column = 0; column <= row; column++){
                System.out.println(" ");
            }
            System.out.println();

        }
    }
}
