public class animal {
//    public animal() {
//
//    }

    public static void feed() {
        System.out.println("feed");
    }

    public static void visitVet() {
        System.out.println("visit");
    }

    String naam;
    int leeftijd;

    public animal(String naam, int leeftijd){

        this.naam = naam;
        this.leeftijd = leeftijd;

    }

    static String type = "animal";

    public static void main(String[] args) {
    feed();
    visitVet();


    }

}
