package tdd;

public class Television {

    private boolean IsOn;

    private int volume;

    private int channel;

    public boolean getIsOn() {
        return IsOn;
    }

    public void setIsOn(boolean isOn) {this.IsOn = isOn;}

    public int getVolume() {
        return volume;

    }

    public void setVolume(int volume) { this.volume = volume; }

    public int getChannel() {
        return channel;
    }

    public void setChannel(int channel) {
        this.channel = channel;
    }
}
