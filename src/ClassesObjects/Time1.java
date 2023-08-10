package ClassesObjects;

public class Time1 {
    private int hour;
    private int minute;
    private int second;

    public void setTime(int hour, int minute, int second){
        boolean hourIsNotValid = hour < 0 || hour > 23;
        if (hourIsNotValid){
            throw new IllegalArgumentException("Hour is not valid");
        }
        boolean minuteIsNotValid = minute < 0 || hour > 23;
        if (minuteIsNotValid) {
            throw new IllegalArgumentException("Minute is not valid");
        }
        boolean secondIsNotValid = second < 0 || hour > 23;
        if (secondIsNotValid) {
            throw new IllegalArgumentException("Second is not valid");
        }
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    public String toUniversalString(){
        return String.format("%02d:%02d:02d", hour, minute, second);
    }
    public String toString(){
        return String.format("%d:%02d:%02d %s", ((hour == 0 || hour == 12)
                        ? 12 : hour % 12), minute, second, (hour < 12 ? "AM" : "PM"));
    }
}
