package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class BikeTest {

    @Test
    public void bikeCanTurnOnTest() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        assertTrue(suzuki.turnOn());
    }

    @Test
    public void canAccelerateByGear1Test() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(15);
        int increase = suzuki.getAccelerate();
        assertEquals(15, increase);

        suzuki.setAccelerate(16);

        int checkAccelerate = suzuki.getAccelerate();
        assertEquals(16, checkAccelerate);
    }

    @Test
    public void canAccelerateByGear2Test() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(24);
        int increase = suzuki.getAccelerate();
        assertEquals(24, increase);

        suzuki.setAccelerate(26);

        int checkAccelerate = suzuki.getAccelerate();
        assertEquals(26, checkAccelerate);
    }

    @Test
    public void canAccelerateGearBy3Test() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(35);
        int increase = suzuki.getAccelerate();
        assertEquals(35, increase);

        suzuki.setAccelerate(38);

        int checkAccelerate = suzuki.getAccelerate();
        assertEquals(38, checkAccelerate);
    }

    @Test
    public void canAccelerateGearBy4Test() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(44);
        int increase = suzuki.getAccelerate();
        assertEquals(44, increase);

        suzuki.setAccelerate(48);

        int checkAccelerate = suzuki.getAccelerate();
        assertEquals(48, checkAccelerate);
    }

    @Test
    public void canDecelerateGearBy1() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(15);
        int decrease = suzuki.getAccelerate();
        assertEquals(15, decrease);

        suzuki.setAccelerate(14);

        int checkDeceleration = suzuki.getAccelerate();
        assertEquals(14, checkDeceleration);
    }

    @Test
    public void canDecelerateGearBy2() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(24);
        int decrease = suzuki.getAccelerate();
        assertEquals(24, decrease);

        suzuki.setAccelerate(22);

        int checkDecelerate = suzuki.getAccelerate();
        assertEquals(22, checkDecelerate);
    }

    @Test
    public void canDecelerateGearBy3Test() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(35);
        int decrease = suzuki.getAccelerate();
        assertEquals(35, decrease);

        suzuki.setAccelerate(32);

        int checkDeceleration = suzuki.getAccelerate();
        assertEquals(32, checkDeceleration);
    }

    @Test
    public void canDecelerateGearBy4() {
        Bike suzuki = new Bike();
        suzuki.turnOn();
        suzuki.setAccelerate(44);
        int decrease = suzuki.getAccelerate();
        assertEquals(44, decrease);

        suzuki.setAccelerate(40);

        int checkDeceleration = suzuki.getAccelerate();
        assertEquals(40, checkDeceleration);
    }
//    @Test
//    public void bikeCanAccelerateOnGear1Test() {
//        Bike yamaha = new Bike();
//        yamaha.turnOn();
//        assertTrue(yamaha.turnOn());
//
//        yamaha.accelerate();
//        yamaha.accelerate();
//        assertEquals(2, yamaha.getSpeed());
//    }


//    @Test
//    public void bikeCanAccelerateOnGear2Test() {
//        Bike yamaha = new Bike();
//        yamaha.turnOn();
//        assertTrue(yamaha.turnOn());
//
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        assertEquals(20, yamaha.getSpeed());
  //      yamaha.increaseGear();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
//        yamaha.accelerate();
    //    yamaha.accelerate();
//        assertEquals(29, yamaha.getSpeed());
 //       yamaha.increaseGear();
   //     yamaha.accelerate();
 //       assertEquals(23, yamaha.getSpeed());
//    }
}


