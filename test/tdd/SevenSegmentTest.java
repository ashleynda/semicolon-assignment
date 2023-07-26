package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class SevenSegmentTest {

    @Test
    public void canTurnOnOrOffDisplayTest() {
        SevenSegment displayLight = new SevenSegment();
        displayLight.lightDisplay("11111111");
    }


    @Test
    public void thatLightsCanOffTest() {
        SevenSegment displayLight = new SevenSegment();
        displayLight.lightDisplay("11111110");
        displayLight.getLightDisplay();
    }

    @Test
    public void thatLightsCanDisplayOneTest() {
        SevenSegment displayLight = new SevenSegment();
        displayLight.lightDisplay("10111111");
        displayLight.getLightDisplay();
    }
}

//    @Test
//    public void
//}
