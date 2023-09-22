package DiaryApp;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

public class Diaries {
    private String userName;
    private String password;
    private List<Diary> diaries = new ArrayList<>();


    public void addDiary(String username, String password) {
        Diary diary = new Diary(username, password);
        diaries.add(diary);
    }

    public void delete(String userName) throws IllegalArgumentException {
        Diary user = findByUsername(userName);
        diaries.remove(user);
    }

    public Diary findByUsername(String userName) {
        for (Diary diary : diaries) {
            if (diary.getUsername().equals(userName)) {
                return diary;
            }
        }throw new IllegalArgumentException("USER NOT FOUND");
    }

    public void validatePassword(String userName, String password) {
        if (!findByUsername(userName).getPassword().equals(password)){
            throw new IllegalArgumentException("Password no correct");
        }
    }

}
