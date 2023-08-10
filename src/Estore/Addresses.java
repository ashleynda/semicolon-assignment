package Estore;

public class Addresses {
    private String cityName;
    private String countryName;
    private char houseNumber;
    private String street;
    private  String state;

    public Addresses(String cityName, String countryName, char houseNumber, String street, String state) {
        this.cityName = cityName;
        this.countryName = countryName;
        this.houseNumber = houseNumber;
        this.street = street;
        this.state = state;
    }
}
