package Estore;

public class BillingInformation {
    private String receiverPhoneNumber;
    private String receiverName;
    private String deliveryAddress;
    private String creditCardInformation;

    public BillingInformation(String receiverPhoneNumber, String receiverName, String deliveryAddress, String creditCardInformation){
        this.receiverPhoneNumber = receiverPhoneNumber;
        this.receiverName = receiverName;
        this.deliveryAddress = deliveryAddress;
        this.creditCardInformation = creditCardInformation;
    }
}
