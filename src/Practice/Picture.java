package Practice;

public class Picture {
    public static void main(String[] args) {

        int[][]picture = {
                {0, 0, 0, 1, 0, 0, 0},
                {0, 0, 1, 1, 1, 0, 0},
                {0, 1, 1, 1, 1, 1, 0},
                {1, 1, 1, 1, 1, 1, 1},
                {0, 0, 0, 1, 0, 0, 0},
                {0, 0, 0, 1, 0, 0, 0},
                {0, 0, 0, 1, 0, 0, 0},
                {0, 0, 0, 1, 0, 0, 0}
        };
        for(int i = 0; i < picture.length; i++){
            System.out.println(' ');
            for(int h = 0; h < picture[i].length; h++){
                if(picture [i][h] == 1) {
                    System.out.println("*");
                }
            }
        }



    }

}
