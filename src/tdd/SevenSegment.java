package tdd;

public class SevenSegment {


    public String[][] display;


    public String lightDisplay(String lightNumber) {


        display = new String[][]{
                {"#", "#", "#", "#"},
                {"#", " ", " ", "#"},
                {"#", "#", "#", "#"},
                {"#", " ", " ", "#"},
                {"#", "#", "#", "#"},};

        String output = new String();


        if (lightNumber.length() == 8 && (lightNumber.charAt(0) == '0' || lightNumber.charAt(0) == '1') &&
                (lightNumber.charAt(1) == '0' || lightNumber.charAt(1) == '1') &&
                (lightNumber.charAt(2) == '0' || lightNumber.charAt(2) == '1') &&
                (lightNumber.charAt(3) == '0' || lightNumber.charAt(3) == '1') &&
                (lightNumber.charAt(4) == '0' || lightNumber.charAt(4) == '1') &&
                (lightNumber.charAt(5) == '0' || lightNumber.charAt(5) == '1') &&
                (lightNumber.charAt(6) == '0' || lightNumber.charAt(6) == '1') &&
                (lightNumber.charAt(7) == '0' || lightNumber.charAt(7) == '1')) {


            for (int counter = 0; counter < display.length; counter++) {
                for (int seven = 0; seven < display[counter].length; seven++) {


                    if (lightNumber.charAt(7) == '1') {
                        if (lightNumber.charAt(0) == '0') {
                            display[0][1] = " ";
                            display[0][2] = " ";
                        }
                        if (lightNumber.charAt(1) == '0') {
                            display[1][3] = " ";
                        }
                        if (lightNumber.charAt(2) == '0') {
                            display[3][3] = " ";
                        }
                        if (lightNumber.charAt(3) == '0') {
                            display[4][0] = " ";
                            display[4][1] = " ";
                            display[4][2] = " ";
                        }
                        if (lightNumber.charAt(4) == '0') {
                            display[3][0] = " ";
                        }
                        if (lightNumber.charAt(5) == '0') {
                            display[1][0] = " ";
                        }
                        if (lightNumber.charAt(6) == '0') {
                            display[2][0] = " ";
                            display[2][1] = " ";
                            display[2][2] = " ";
                        }
                        String element = display[counter][seven];
                        if (seven == display[counter].length -1) output += element;
                        else {
                            output += element + " ";
                    }
                    }
                }
                output += "\n";
            }
                return output.trim();
        }
        return " ";
    }


    public void getLightDisplay() {
        for (int i = 0; i < display.length; i++) {
            for (int j = 0; j < display[i].length; j++) {
                System.out.print(display[i][j] + " ");
            }
            System.out.println();
        }
    }
}