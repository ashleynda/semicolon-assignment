package Chapter5;

public class DiamondPrinting {
    public static void main(String[] args) {
        
        for (int row = 0; row<9; row++){
            for (int column = 0; column<9-row-1; column++){
                System.out.print(" ");
            }
            for (int column = 0; column<=row; column++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for (int row = 0; row<9-1; row++){
            for (int column = 0; column<=row; column++){
                System.out.print(" ");
            }
            for (int column = 0; column<9-row-1; column++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
