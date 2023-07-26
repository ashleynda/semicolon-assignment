package Chapter4;

import java.util.Scanner;

public class GasMileage {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double totalMilesDriven = 0;
        double totalGallonsUsed = 0;
        double totalMilesPerGallon=0;

        System.out.println("Enter miles driven:  ");
        int miles = input.nextInt();

        while(miles != -1){

            System.out.println("Enter gallons used:  ");
            int gallons = input.nextInt();

            double milesPerGallon = (double) miles / gallons;
            totalMilesDriven += miles;
            totalGallonsUsed += gallons;

            System.out.printf("The miles per gallon: %f\n  ", milesPerGallon);

            System.out.println("Enter miles driven:  ");
            miles = input.nextInt();
        }
        totalMilesPerGallon = totalMilesDriven/totalGallonsUsed;
        System.out.printf("The total miles per gallon: %f  ", totalMilesPerGallon);
    }
}
