package Chapter5;

public class TrianglePrintingProgram {
    public static void main(String[] args) {

        for(int row = 1; row <= 10; row++){
            for (int column = 1; column <= row; column++){
                System.out.print('*');
            }
            System.out.println();
        }
        for (int row = 1; row <= 10; row--){
            for (int column = 0; column < row; column++){
                System.out.print('*');
            }
            System.out.println();
        }
    }
}
