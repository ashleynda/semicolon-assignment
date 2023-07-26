package Practice;

public class TabularOutput {
        public static void main(String[] args) {

            int N;
            int N2;
            int N3;
            int N4;

            System.out.println("N\t\tN2\t\tN3\t\tN4");

            for (N=1; N<=5; N++) {
                N2 = N * N;
                N3 = N * N2;
                N4 = N * N3;
                System.out.println(N+"\t\t"+N2+"\t\t"+N3+"\t\t"+N4);
            }

        }
    }


