package Chapter5;

public class For {
    public static void main(String[] args) {

        for (int i = 1; i <= 20; i++) {
            System.out.print(i);

            if (i % 5 == 0) {
                System.out.println();
            }
           else {
                System.out.print('\t');
            }
        }

        int n =1;
        while(n <= 10) {
            System.out.println(n++);
        }
    }
}
