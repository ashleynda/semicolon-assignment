package period;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

public class MenstrualCycleTest {

    @Test
    public void validCycleLength() {
        MenstrualCycle menstrualCycle = new MenstrualCycle("user", "password");
        menstrualCycle.setLengthOfCycle(30);


    }
    @Test
    public void calculateOvulationPeriodTest() {
        MenstrualCycle menstrualCycle = new MenstrualCycle("name", "password");
        menstrualCycle.setLengthOfCycle(28);

        LocalDate startDateOfPeriod = LocalDate.of(2023, 9, 2);
        LocalDate endDateOfPeriod = LocalDate.of(2023, 9, 7);

        menstrualCycle.setStartDateOfPeriod(startDateOfPeriod);
        menstrualCycle.setEndDateOfPeriod(endDateOfPeriod);

        menstrualCycle.setLengthOfCycle(28);
        String ovulationPeriod = menstrualCycle.calculateOvulationPeriod();

        String expectedOvulationPeriod = "Sept 14, 2023 Sept 18, 2023";
        assertEquals(expectedOvulationPeriod, ovulationPeriod);
    }

    @Test
    public void calculateLengthOfCycleTest() {
        MenstrualCycle menstrualCycle = new MenstrualCycle("user", "password");
        menstrualCycle.setLengthOfCycle(6, 10, 11);

        assertEquals(9, menstrualCycle.getLengthOfCycle());
    }

    @Test
    public void canPredictNextPeriod() {
        MenstrualCycle menstrualCycle = new MenstrualCycle("user", "password");
        String nextPeriod = String.valueOf(menstrualCycle.checkNextPeriodDate("2023-09-20", 28));
        assertEquals("2023-10-18", nextPeriod);
    }

    @Test
    public void canPredictSafePeriod() {
        MenstrualCycle menstrualCycle = new MenstrualCycle("user", "password");
        String currentPeriod = String.valueOf(menstrualCycle.safePeriods("2023-09-20", 28));
        String beginningOfNextSaveDate = "2023-10-11";
        assertEquals(beginningOfNextSaveDate, currentPeriod);
    }

}