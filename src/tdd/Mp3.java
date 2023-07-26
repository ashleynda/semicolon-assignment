package tdd;

import static sun.security.ssl.SSLLogger.isOn;

public class Mp3 {

    private boolean isOn;

    private int channel;

    private int volume;

    private boolean mode;
    public boolean getIsOn() {

        return isOn;
    }

    public void setIsOn(boolean isOn) {this.isOn = isOn; }

    public int getChannel() {return channel; }

    public void setChannel(int channel) {this.channel = channel; }

    public void nextChannel() {
        channel++;
    }

    public void previousChannel() { channel--; }

    public void setVolume(int volume) {this.volume = volume; }

    public int getVolume() {return volume; }

    public void setMode() {this.mode = mode;
    }

    public boolean getMode() {
        return false;
    }
}
