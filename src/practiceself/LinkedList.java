package practiceself;

public class LinkedList {
    private class Node {
        private int value;
        private Node next;
        public Node(int value){
            this.value = value;
        }
    }
    private Node first;
    private Node last;


    public void addLast(int item){
        var node = new Node(item);
        if (first == null){
            first = node;
            last = node;
        }
        else {
            last.next = node;
            last = node;
        }
    }
    public void addFirst(int item){
        var node = new Node(item);
        if (first == null){
            first = node;
        }
        else {
            node.next = first;
            first = node;
        }
    }
    public int indexOf(int item){
        int index = 0;
        var current = first;
        while (current != null){
            if (current.value == item) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    public boolean contains(int item){
        return indexOf(item) != -1;


    }
}
