package tdd;

import static sun.security.ssl.SSLLogger.isOn;

public class Bike {

    private boolean isOn;

    private int accelerate;
    //private int speed;
    //private int gear;

    public boolean turnOn() {
            return true;
    }

    public int getAccelerate() {return accelerate; }

    public void setAccelerate(int accelerate) {this.accelerate = accelerate;
    }


//    public void accelerate() {
//        if (speed >= 0 && speed <= 20) {
//            speed += 1;
//            if (speed > 20 && gear == 1) {
//                speed = 20;
//            }
//        }
//         else if(speed>=21 && speed <=30) {
//            speed+=2;
//         }
//            if (speed >31 && gear != 2)
//                speed = 30;
//        } else if (speed >=31 && speed <=40) {
//            speed+=3;
//            if(speed > 41 && gear !=3);
//            speed = 40;
//        } else if (speed >=41){
//            speed+=4;
//        }
    }

//    public int getGear() {
//        return gear;
//    }
//
//    public int getSpeed() {
//        return speed;
//    }
//
//    public void increaseGear() {
//        gear += 1;
//    }

