package tdd;

public class Calculator {

    private boolean isOn;

    private int result;
    
    public void power() { isOn = ! this.isOn; }

    public boolean isOn() {return isOn; }


    public int getAdd() {
        return result;
    }

    public void add(int firstnumber, int secondnumber) {result = firstnumber + secondnumber;
    }

    public int getResult() {
        return result;
    }

    public int getSubtract() {
        return result;
    }

    public void subtract(int firstnumber, int secondnumber) {result = firstnumber - secondnumber;
    }

    public int getDivision() {
        return result;
    }

    public void division(int firstnumber, int secondnumber) {result = firstnumber / secondnumber;}
}
