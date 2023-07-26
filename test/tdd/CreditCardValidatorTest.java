package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CreditCardValidatorTest {

    @Test
    public void thatCreditCardIsBetween13And16Test() {
        CreditCard validator = new CreditCard();
        String validate = validator.getCardType("3773653456125456");
        assertEquals("American Express Card", validate);
    }

    @Test
    public void thatVisaCardStartsWithA4Test() {
        CreditCard validator = new CreditCard();
        String card = validator.getCardType("4388576018402");
        assertEquals("Visa Card", card);
    }

    @Test
    public void canIterateRightToLeft() {
        CreditCard validator = new CreditCard();
        String card = validator.getValidateStatus("4388576018402626");
        assertEquals("Valid", card);
    }
}
