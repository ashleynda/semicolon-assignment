package PackagePractice;

public class SpecialCharacter {
    public static void main(String[] args) {
        characters("thereeeq");

    }


    public static boolean characters(String  characters) {
        char[] charac = {'$', '#', '_', '-', ':', ';', '='};
        boolean check = false;
        char[] change = new char[characters.length()];
        for (int special = 0; special < change.length; special++) {
            change[special] = characters.charAt(special);
        }
        for (int i = 0; i < charac.length; i++) {
            for (int j = 0; j < change.length; j++) {
                if (charac[i] == change[j]) {
                    check = true;
                }
            }
            System.out.println(check);
        }
        return check;
    }
}
