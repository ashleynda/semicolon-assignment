package practiceself;

public class CommissionEmployee {
    private String firstName;
    private String lastName;
    private String socialSecurityNumber;
    private double commissionRate;
    private double grossSalesAmount;

    public CommissionEmployee(String firstName, String lastName, String socialSecurityNumber, Double commissionRate,
                              Double grossSalesAmount) {
        if (grossSalesAmount < 0.0) {
            throw new IllegalArgumentException("Gross sale amount must be greater than 0");
        }
        if (commissionRate <= 0.0 || commissionRate >= 1.0) {
            throw new IllegalArgumentException("commission rate must be greater than 0 and laess than 1.0");
        }
        this.firstName = firstName;
        this.lastName = lastName;
        this.socialSecurityNumber = socialSecurityNumber;
        this.commissionRate = commissionRate;
        this.grossSalesAmount = grossSalesAmount;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public double getCommissionRate() {
        return commissionRate;
    }

    public void setCommissionRate(double commissionRate) {
        this.commissionRate = commissionRate;
    }

    public double getGrossSalesAmount() {
        return grossSalesAmount;
    }

    public void setGrossSalesAmount(double grossSalesAmount) {
        this.grossSalesAmount = grossSalesAmount;
    }
}
