package ClassesObjects;

public enum GeoPolitical {
    SOUTHSOUTH("Akwa-ibom", "bayelsa", "cross-rivers", "delta", "edo", "rivers", "Plateau"),
    NORTHEAST("Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe", "Plateau"),
    NORTHCENTRAL("Benue", "FCT", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"),
    SOUTHEAST("Abia", "Anambra", "Ebonyi", "Enugu", "Imo"),
    SOUTHWEST("Ekiti", "Lagos", "Osun", "Ondo", "Ogun", "Oyo", "Plateau"),
    NORTHWEST("Kaduna", "Katsina", "Kano", "Kebbi", "Sokoto", "Jigawa", "Zamfara"),
    ;

    private String[] state;



    GeoPolitical(String... state) {
        this.state = state;
    }

    public String[] getState() {
        return state;
    }

    public void setState(String[] state) {
        this.state = state;
    }

    public static GeoPolitical getStatesZone(String states) {
        for (GeoPolitical zone : GeoPolitical.values()) {
            for(String name: zone.state)
                if (states.equalsIgnoreCase(String.valueOf(name))) return zone;
        }

        return null;
    }
}

//Arrays.asList(GeoPolitical.values()).forEach(geoPolitical -> System.out.println(states));