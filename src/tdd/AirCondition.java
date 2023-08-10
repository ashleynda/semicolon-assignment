package tdd;

//import static sun.security.ssl.SSLLogger.isOn;

public class AirCondition {
    private boolean isOn;

    private int temperature;

    public boolean getIsOn() {

        return isOn;
    }


    public void setIsOn(boolean isOn) {
        this.isOn = isOn;
    }


    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }


}
