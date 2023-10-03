package period;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;


public class MenstrualCycle {

    private String name;
    private String password;
    private LocalDate startDateOfPeriod;
    private LocalDate EndDateOfPeriod;
    private LocalDate periodDate = LocalDate.now();
    private int LengthOfCycle;
    private int PeriodLength;
    private MenstrualCycle menstrualCycle;

    public MenstrualCycle(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public LocalDate getStartDateOfPeriod() {
        return startDateOfPeriod;
    }

    public void setStartDateOfPeriod(LocalDate startDateOfPeriod) {
        this.startDateOfPeriod = startDateOfPeriod;
    }

    public LocalDate getEndDateOfPeriod() {
        return EndDateOfPeriod;
    }

    public void setEndDateOfPeriod(LocalDate endDateOfPeriod) {
        EndDateOfPeriod = endDateOfPeriod;
    }

    public LocalDate getPeriodDate() {
        return periodDate;
    }

    public void setPeriodDate(LocalDate periodDate) {
        this.periodDate = periodDate;
    }

    public int getLengthOfCycle() {
        return LengthOfCycle;
    }

    public void setLengthOfCycle(int lengthOfCycle) {
        LengthOfCycle = lengthOfCycle;
    }

    public int getPeriodLength() {
        return PeriodLength;
    }

    public void setPeriodLength(int PeriodLength) {
        this.PeriodLength = PeriodLength;

    }

    public void setLengthOfCycle(int firstMonth, int secondMonth, int thirdMonth) {
        this.LengthOfCycle = (firstMonth + secondMonth + thirdMonth) / 3;
        menstrualCycle.setLengthOfCycle(this.LengthOfCycle);

    }

    public String calculateOvulationPeriod() {
        LocalDate dateMenstruationStarted = getStartDateOfPeriod();

        int halfOfCycle = LengthOfCycle / 2;

        LocalDate ovulationDate = dateMenstruationStarted.plusDays(halfOfCycle);

        LocalDate startOvulationPeriod = ovulationDate.minusDays(2);
        LocalDate endOvulationPeriod = ovulationDate.plusDays(2);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd, yyyy");
//        String formattedOvulationDate = ovulationDate.format(formatter);
        String formattedStartDate = startOvulationPeriod.format(formatter);
        String formattedEndDate = endOvulationPeriod.format(formatter);

        return formattedStartDate + " " + formattedEndDate;

    }


    public LocalDate checkNextPeriodDate(String startDateOfPeriod, int menstrualCycle) {
        LocalDate specificDate = LocalDate.parse(startDateOfPeriod);
        return specificDate.plusDays(menstrualCycle);
    }


    public LocalDate safePeriods(String lastPeriod, int lengthOfCycle) {
        String specifiedDate = parseDate(lastPeriod);
        LocalDate specificDate = LocalDate.parse(specifiedDate);
        return specificDate.plusDays(lengthOfCycle - 7);
    }

    private static String parseDate(String date) {
        try{
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            dateFormat.parse(date);

            return date;
        } catch (ParseException error) {
            throw new IllegalArgumentException("-----Invalid date format");
        }
    }
//
//    public String safePeriods ( int averagePeriodLength){
//            this.averagePeriodLength = averagePeriodLength;
//            int ovulationEnd = this.LengthOfCycle / 2;
//            int ovulationBegins = ovulationEnd - 2;
//
//            int firstFlowBegins = ovulationBegins - averagePeriodLength - 1;
//            int firstFlowEnds = ovulationBegins - 1;
//
//            int secondFlowBegins = ovulationEnd + 1;
//            int secondFlowEnds = this.LengthOfCycle - 1;
//            return firstFlowBegins + "-" + firstFlowEnds + " and" + secondFlowBegins + "-" + secondFlowEnds;
//        }
//
//    public String getName() {
//        return name;
//        }
//    public String getPassword() {
//        return password;
//    }

    }

