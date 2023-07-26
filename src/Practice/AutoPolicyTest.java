package Practice;

public class AutoPolicyTest {
    public static void main(String[] args) {
        AutoPolicy autoPolicy = new AutoPolicy(11111111, "Toyota Camary", "NJ");
        AutoPolicy autoPolicy1 = new AutoPolicy(22222222, "Ford Fusion", "ME");

        policyInNoFaultState(autoPolicy);
        policyInNoFaultState(autoPolicy1);
    }
    public static void policyInNoFaultState(AutoPolicy policy) {
        System.out.println("The auto policy:  ");
        System.out.printf("Account #: %d; Car: %s;%nState %s %s a no-fault state%n%n",
                            policy.getAccountNumber(),policy.getMakeAndModel(),
                            policy.getState(),(policy.isNoFaultState() ? "is": "is not"));
    }
}
