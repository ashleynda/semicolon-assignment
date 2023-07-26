package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Mp3Test {

    @Test
    public void mp3PlayerIsOnTest() {
        Mp3 zealot = new Mp3();
        boolean status = zealot.getIsOn();
        assertEquals(false, status);

        zealot.setIsOn(true);

        boolean newStatus = zealot.getIsOn();
        assertEquals(true, newStatus);
    }

    @Test
    public void mp3PlayerIsOffTest() {
        Mp3 zealot = new Mp3();
        zealot.setIsOn(true);
        boolean status = zealot.getIsOn();
        assertEquals(true, status);

        zealot.setIsOn(false);

        boolean newStatus = zealot.getIsOn();
        assertEquals(false, newStatus);
    }

    @Test
    public void canSongIncreaseTest() {
        Mp3 zealot = new Mp3();
        zealot.setIsOn(true);
        zealot.setChannel(12);
        int increase  = zealot.getChannel();
        assertEquals(12, increase);

        zealot.nextChannel();

        int checkChannel = zealot.getChannel();
        assertEquals(13, checkChannel);
    }

//    @Test
//    public void canSongDecreaseTest() {
//        Mp3 zealot = new Mp3();
//        zealot.setIsOn();
//        zealot.setChannel();
//
//    }
}
