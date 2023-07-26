package PackagePractice;

import java.util.Scanner;

public class Display {

        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);

            String[][] display = new String[][] {
                    {"1", "1", "1", "1", },
                    {"0", "0", "0", "0", },
                    {"1", "1", "1", "1", },
                    {"1", "0", "0", "0", },
                    {"1", "1", "1", "1", },};



            for (int counter = 0; counter < display.length; counter++){
                for (int seven = 0; seven < display[counter].length; seven++){


                    if (display[counter][seven].equals("1")){
                        display[counter][seven] = "#";
                    }
                    if (display[counter][seven].equals("0")){
                        display[counter][seven] = "#";
                    }
                    System.out.print(display[counter][seven] + " ");

                }
                System.out.println(" ");

            }
        }
    }


