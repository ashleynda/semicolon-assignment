package ArraySnacks;
import java.util.Scanner;
public class Grades {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of students: ");
        int numOfStudents = scanner.nextInt();

        System.out.print("Enter the number of subjects: ");
        int numOfSubjects = scanner.nextInt();

        String[] studentNames = new String[numOfStudents];
        double[][] studentScores = new double[numOfStudents][numOfSubjects];

        for (int index = 0; index < numOfStudents; index++) {
            System.out.print("Enter the name of student " + (index + 1) + ": ");
            scanner.nextLine();
            studentNames[index] = scanner.nextLine();

            for (int num = 0; num < numOfSubjects; num++) {
                do {
                    System.out.print("Enter the score for subject " + (num + 1) + " for student " + studentNames[index] + ": ");
                    studentScores[index][num] = scanner.nextDouble();
                } while (studentScores[index][num] < 0 || studentScores[index][num] > 100);
            }
        }

        System.out.println("\nClass Summary:");
        for (int index2 = 0; index2 < numOfStudents; index2++) {
            System.out.print(studentNames[index2] + ": ");
            for (int num2 = 0; num2 < numOfSubjects; num2++) {
                System.out.print("Subject " + (num2 + 1) + ": " + studentScores[index2][num2] + " | ");
            }
            System.out.println();
        }

        System.out.println("\nClass Averages per Subject:");
        for (int num3 = 0; num3 < numOfSubjects; num3++) {
            double subjectSum = 0;
            for (int index3 = 0; index3 < numOfStudents; index3++) {
                subjectSum += studentScores[index3][num3];
            }
            double subjectAverage = subjectSum / numOfStudents;
            System.out.println("Subject " + (num3 + 1) + " Average: " + subjectAverage);
        }

        double overallSum = 0;
        for (int index4 = 0; index4 < numOfStudents; index4++) {
            for (int num4 = 0; num4 < numOfSubjects; num4++) {
                overallSum += studentScores[index4][num4];
            }
        }
        double overallAverage = overallSum / (numOfStudents * numOfSubjects);
        System.out.println("\nOverall Class Average: " + overallAverage);
    }
}