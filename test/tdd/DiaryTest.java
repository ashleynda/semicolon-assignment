package tdd;

import DiaryApp.Diary;
import DiaryApp.Entry;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class DiaryTest {
    @Test
    public void thatDiaryExistTest(){
        Diary diary = new Diary("Ashley", "1234");
        assertNotNull(diary);
    }
    @Test
    public void thatDiaryIsNotLockedTest(){
        Diary diary = new Diary("Ashley", "1234");
        assertFalse(diary.isLocked());
    }
    @Test
    public void thatDiaryCanBeLockedTest(){
        Diary diary = new Diary("Ashley", "1234");
        diary.lockDiary();
        assertTrue(diary.isLocked());
    }
    @Test
    public void thatDiaryCanBeUnlockedTest(){
        Diary diary = new Diary("Ashley", "1234");

        diary.lockDiary();
        assertTrue(diary.isLocked());

        diary.unlockDiary();
        assertFalse(diary.isLocked());
    }
    @Test
    public void thatEntryCanBeCreated(){
        Diary diary = new Diary("Ashley", "1234");
        diary.isLocked();
        diary.unlockDiary();
        diary.createEntry("Life lately", "These are the happenings");
        diary.findEntryById("1");
        assertEquals("Life lately",diary.findEntryById("1").getTitle());
        assertEquals("These are the happenings",diary.findEntryById("1").getBody());
    }
    @Test
    public void thatEntryCanBeDeleted(){
        Diary diary = new Diary("Ashley", "1234");
        diary.isLocked();
        diary.unlockDiary();
        diary.createEntry( "Life lately", "These are the happenings");
        diary.findEntryById("1");
        assertEquals("Life lately",diary.findEntryById("1").getTitle());
        diary.deleteEntry("1");
    }

    @Test
    public void thatEntryCanBeCreatedAndFoundById(){
        Diary diary = new Diary("Ashley", "1234");
        diary.isLocked();
        diary.unlockDiary();
        diary.createEntry("Life lately", "These are the happenings");
        diary.findEntryById("1");
        assertEquals("Life lately", diary.findEntryById("1").getTitle());
        assertEquals("These are the happenings", diary.findEntryById("1").getBody());

    }
    @Test
    public void thatEntryCanBeUpdated(){
        Diary diary = new Diary("Ashley", "1234");
        diary.isLocked();
        diary.unlockDiary();
        diary.createEntry("Life lately", "These are the happening");
        diary.updateEntry("1", "success and failures", "Journey so far");
        assertEquals(new Entry("1","success and failures","Journey so far").getEntry(),diary.findEntryById("1").getEntry());
    }




}
