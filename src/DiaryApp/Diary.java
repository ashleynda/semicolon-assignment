package DiaryApp;


import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Diary {
    private String userName;
    private String password;
    private boolean isLocked;
    private List<Entry> diary = new ArrayList<>();
    private Entry entry;


    public Diary(String username, String password) {
        this.userName = username;
        this.password = password;
    }

    public boolean isLocked() {
        return isLocked;
    }

    public void lockDiary() {
        isLocked = true;
    }

    public void unlockDiary() {
        isLocked = false;
    }

    public Entry findEntryById(String id) {
        for (Entry entry : diary) {
            if (entry.getId().equals(id)) {
                return entry;
            }
        }
        return null;
    }
    public void createEntry( String title, String body) {
        Entry entry = new Entry(generateId(), title, body);
        diary.add(entry);
    }

    private String generateId() {
        return diary.size() + 1 + "";

    }


    public void deleteEntry(String  id) {
        for(Entry entry : diary) {
            if (!Objects.equals(entry.getId(), id)) {
                diary.remove(entry);
            }
        }
    }

    public void updateEntry(String  id, String title, String body) {
        Entry entry = findEntryById(id);
        entry.setId(id);
        entry.setTitle(title);
        entry.setBody(body);
    }

    public String getUsername() {
        return userName;
    }


    public String getPassword() { return password;
    }
}









