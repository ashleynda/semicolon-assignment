package Estore;

public class CreditCardInformation {
    private String cardCvv;
    private String CardExpiryYearAndMonth;
    private String creditCardNumber;
    private String cardName;
    private Enum cardType;

    public CreditCardInformation(String cardCvv, String cardExpiryYearAndMonth, String creditCardNumber, String cardName, Enum cardType) {
        this.cardCvv = cardCvv;
        CardExpiryYearAndMonth = cardExpiryYearAndMonth;
        this.creditCardNumber = creditCardNumber;
        this.cardName = cardName;
        this.cardType = cardType;
    }
}
