package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TelevisionTest {

    @Test
    public void ifTelevisionIsOnTest() {
        Television sony = new Television();
        boolean status = sony.getIsOn();
        assertEquals(false, status);

        sony.setIsOn(true);

        boolean newStatus = sony.getIsOn();
        assertEquals(true, newStatus);
    }
    public void ifAirConditionerIsOffTest() {
        AirCondition samsung = new AirCondition();
        samsung.setIsOn(true);
        boolean status = samsung.getIsOn();
        assertEquals(true, status);

        samsung.setIsOn(false);

        boolean newStatus = samsung.getIsOn();
        assertEquals(false, newStatus);
    }

    @Test
    public void ifTelevisionIsOffTest() {
        Television sony = new Television();
        sony.setIsOn(true);
        boolean status = sony.getIsOn();
        assertEquals(true, status);

        sony.setIsOn(false);

        boolean newStatus = sony.getIsOn();
        assertEquals(false, newStatus);
    }

    @Test
    public void canIncreaseVolumeTest() {
        Television sony = new Television();
        sony.setIsOn(true);
        sony.setVolume(45);
        int increase = sony.getVolume();
        assertEquals(45,increase);

        sony.setVolume(46);

        int checkIncrease = sony.getVolume();
        assertEquals(46, checkIncrease);
    }

    @Test
    public void canDecreaseVolumeTest() {
        Television sony = new Television();
        sony.setIsOn(true);
        sony.setVolume(68);
        int decrease = sony.getVolume();
        assertEquals(68, decrease);

        sony.setVolume(67);

        int checkDecrease = sony.getVolume();
        assertEquals(67, checkDecrease);
    }

    @Test
    public void ifChannelCanBeIncreasedTest() {
        Television sony = new Television();
        sony.setIsOn(true);
        sony.setChannel(23);
        int increase = sony.getChannel();
        assertEquals(23, increase);

        sony.setChannel(24);

        int checkChannel = sony.getChannel();
        assertEquals(24, checkChannel);
    }

    @Test
    public void ifChannelCanBeDecreasedTest() {
        Television sony = new Television();
        sony.setIsOn(true);
        sony.setChannel(68);
        int decrease = sony.getChannel();
        assertEquals(68, decrease);

        sony.setChannel(67);

        int checkChannel = sony.getChannel();
        assertEquals(67, checkChannel);
    }


//    @Test
//    public void ifTelevisionIsOnTest() {
//            Television sony = new Television();
//            boolean status = sony.getIsOn();
//            assertEquals(false, status);
//
//            sony.setIsOn(true);
//
//            boolean newStatus = sony.getIsOn();
//            assertEquals(true, newStatus);
  //      }


        // @Test
        //public void canChangeTelevisionChannelPositiveTest() {
        //  Television sony = new Television();
        //sony.setIsOn(true);
        //sony.setChannel(23);
        //int change = sony.getChannel();
        //assertEquals(23, change);

        //sony.setChannel(24);

        //int checkChange = sony.getChannel();
        //  assertEquals(24, checkChange);
        //}

        // @Test
//    public void canChangeTelevisionChannelNegativeTest() {
//        Television sony = new Television();
//        sony.setIsOn(true);
//        sony.setChannel(50);
//        int change = sony.getChannel();
//        assertEquals(50, change);

        //sony.setChannel(49);

        //int checkChange = sony.getChannel();
        //assertEquals(49, checkChange);

        // }

//        @Test
//        public void canIncreaseVolumeTest(){
//            Television sony = new Television();
//            sony.setIsOn(true);
//            sony.setVolume(45);
//            int increase = sony.getVolume();
//            assertEquals(45, increase);
//
//        }
//
//    }
//
}