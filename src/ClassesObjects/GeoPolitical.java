package ClassesObjects;

public enum GeoPolitical {
    SOUTHSOUTH(new String[]{"Akwa-ibom", "bayelsa", "cross-rivers", "delta", "edo", "rivers", "Plateau"}),
    NORTHEAST(new String[]{"Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe", "Plateau"}),
    NORTHCENTRAL(new String[]{"Benue", "FCT", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"}),
    SOUTHEAST(new String[]{"Abia", "Anambra", "Ebonyi", "Enugu", "Imo"}),
    SOUTHWEST(new String[]{"Ekiti", "Lagos", "Osun", "Ondo", "Ogun", "Oyo", "Plateau"}),
    NORTHWEST(new String[]{"Kaduna", "Katsina", "Kano", "Kebbi", "Sokoto", "Jigawa", "Zamfara"}),
    ;

    private String[] state;



    GeoPolitical(String[] state) {
        this.state = state;
    }

    public GeoPolitical getSouthSouth() {
        return SOUTHSOUTH;
    }

    public GeoPolitical getNortheast() {
        return NORTHEAST;
    }

    public GeoPolitical getNorthCentral() {
        return NORTHCENTRAL;
    }

    public GeoPolitical getSouthEast() {return SOUTHEAST; }

    public GeoPolitical getSouthWest() {
        return SOUTHWEST;
    }

    public GeoPolitical getNorthWest() {
        return NORTHWEST;
    }

    public static GeoPolitical getStatesZone(String states) {
        for (GeoPolitical zone : GeoPolitical.values()) {
                if (states.equalsIgnoreCase(String.valueOf(zone))) return zone;
        }

        return null;
    }
}

//Arrays.asList(GeoPolitical.values()).forEach(geoPolitical -> System.out.println(states));