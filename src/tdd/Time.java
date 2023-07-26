package tdd;

public class Time {
    private int seconds;
    private int minutes;
    private int years;

   // public void setSeconds(int minutes) {
     //   seconds = minutes * 60;
      //  }



    public int getSeconds() {
        return seconds; }

    public void setMinutes(int minutes) {
        if (minutes >= 0)
        seconds = minutes * 60;
    }
    public int getYears() {
        return years;
    }

    public void convertMinutes(int minutes) {
        if (minutes >= 0){
            years = minutes / 525600;
        }
    }
    }


