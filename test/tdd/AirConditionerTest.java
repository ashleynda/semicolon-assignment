package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class AirConditionerTest {

    @Test
    public void ifAirConditionerIsOnTest() {
        AirCondition samsung = new AirCondition();
        boolean status = samsung.getIsOn();
        assertEquals(false, status);

        samsung.setIsOn(true);

        boolean newStatus = samsung.getIsOn();
        assertEquals(true, newStatus);
    }

    @Test
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
    public void ifIncreaseTemperature() {
        AirCondition samsung = new AirCondition();
        samsung.setIsOn(true);
        samsung.setTemperature(17);
        int increase = samsung.getTemperature();
        assertEquals(17, increase);

        samsung.setTemperature(18);

        int checkIncrease = samsung.getTemperature();
        assertEquals(18, checkIncrease);
    }

    @Test
    public void ifDecreaseTemperature() {
        AirCondition samsung = new AirCondition();
        samsung.setIsOn(true);
        samsung.setTemperature(25);
        int Decrease = samsung.getTemperature();
        assertEquals(25, Decrease);

        samsung.setTemperature(24);

        int checkDecrease = samsung.getTemperature();
        assertEquals(24, checkDecrease);
    }

    @Test
    public void ifTemperatureCanBeIncreased() {
        AirCondition samsung = new AirCondition();
        samsung.setIsOn(true);
        samsung.setTemperature(30);
        int increase = samsung.getTemperature();
        assertEquals(30, increase);

        samsung.setTemperature(30);

        int checkIncrease = samsung.getTemperature();
        assertEquals(30, checkIncrease);
    }

    @Test
    public void ifTemperatureCanBeDecreased() {
        AirCondition samsung = new AirCondition();
        samsung.setIsOn(true);
        samsung.setTemperature(16);
        int decrease = samsung.getTemperature();
        assertEquals(16, decrease);

        samsung.setTemperature(16);

        int checkDecrease = samsung.getTemperature();
        assertEquals(16,checkDecrease);
    }


}

