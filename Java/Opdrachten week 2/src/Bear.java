public class Bear extends Animal {
    private String type;

    public Bear(String naam, int leeftijd, String type){
        super(naam, leeftijd);

        this.type = type;
    }

    public static void showType(Bear bear1, Bear bear2) {
        System.out.println(type);
//        System.out.println(bear2.type);
        System.out.println(Animal.type);

    }

    public static void main(String[] args) {

        Bear bear2 = new Bear("Henk", 17, "Polar Bear");
        Bear bear1 = new Bear("piet", 43, "Brown Bear");
        showType(bear1, bear2);

    }



}
