package Diaries;


import java.util.ArrayList;
import java.util.List;

public class Diary {
    private String userName;
    private String password;
    private boolean isLocked;
    private List<Entry> diary = new ArrayList<>();

    public boolean isLocked() {
        return isLocked;
    }

    public void lockDiary() {
        isLocked = true;
    }

    public void unlockDiary() {
        isLocked = false;
    }

    public Entry findEntryById(int id) {
        for (Entry entry : diary) {
            if (entry.getId() == id) {
                return entry;
            }
        }
        return null;
    }
    public void createEntry(int id, String title, String body) {
        Entry entry = new Entry(id, title, body);
        diary.add(entry);
    }

    public void deleteEntry(int id) {
        for(Entry entry : diary) {
            if (findEntryById(1) != id) {
                return id;
            }
        }

    }
}







