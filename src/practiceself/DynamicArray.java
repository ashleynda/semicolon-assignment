package practiceself;

import java.util.ArrayList;

public class DynamicArray {
    public static void main(String[] args) {
// vector: would grow by 100% everytime it gets full.
// ArrayList: would grow by 50% of its size everytime it gets full.
        ArrayList<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        list.remove(0);
        System.out.println(list);

    }
}
