package SOLID;

public interface ParkingLot {
    void parkCar();
    void unparkCar();
    void getCapacity();
    double calculateFee(Car car);
    void doPayment(Car car);
}
class Car {

}
