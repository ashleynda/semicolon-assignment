package tdd;

import Diaries.Diary;
import Diaries.Entry;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class DiaryTest {
    @Test
    public void thatDiaryExistTest(){
        Diary diary = new Diary();
        assertNotNull(diary);
    }
    @Test
    public void thatDiaryIsNotLockedTest(){
        Diary diary = new Diary();
        assertFalse(diary.isLocked());
    }
    @Test
    public void thatDiaryCanBeLockedTest(){
        Diary diary = new Diary();
        diary.lockDiary();
        assertTrue(diary.isLocked());
    }
    @Test
    public void thatDiaryCanBeUnlockedTest(){
        Diary diary = new Diary();

        diary.lockDiary();
        assertTrue(diary.isLocked());

        diary.unlockDiary();
        assertFalse(diary.isLocked());
    }
    @Test
    public void thatEntryCanBeCreated(){
        Diary diary = new Diary();
        diary.isLocked();
        diary.unlockDiary();
        diary.createEntry(1, "Life lately", "These are the happenings");
        diary.findEntryById(1);
        assertEquals("Life lately",diary.findEntryById(1).getTitle());
        assertEquals("These are the happenings",diary.findEntryById(1).getBody());
    }
    @Test
    public void thatEntryCanBeDeleted(){
        Diary diary = new Diary();
        diary.isLocked();
        diary.unlockDiary();
        diary.createEntry(1, "Life lately", "These are the happening");
        diary.findEntryById(1);
        assertEquals("Life lately",diary.findEntryById(1).getTitle());
        diary.deleteEntry(1);



    }
}
