package tdd;

import DiaryApp.Diaries;
import DiaryApp.Diary;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class DiariesTest {
    @Test
    public void thatWeCanAddToDiary() {
        Diaries diaries = new Diaries();
        diaries.addDiary("Ashley", "House");
        assertEquals(new Diary("Ashley", "House").getUsername(),diaries.findByUsername("Ashley").getUsername());
    }

    @Test
    public void findByUsername() {
        Diaries diaries = new Diaries();
        diaries.addDiary("Ashley", "House");
        diaries.findByUsername("Ashley");
        assertEquals("Ashley", diaries.findByUsername("Ashley").getUsername());
    }
    @Test
    public void thatWeCanDelete() {
        Diaries diaries = new Diaries();
        diaries.addDiary("Ashley", "House");
        diaries.delete("Ashley");
        assertThrows(IllegalArgumentException.class, ()->{diaries.findByUsername("Ashley");});
    }
}

