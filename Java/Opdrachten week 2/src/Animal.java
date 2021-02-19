public class Animal extends Main {
// vars
    String naam;
    int leeftijd;
    static String type = "animal";

// methods
    public static void feed() {
        System.out.println("feed");
    }

    public static void visitVet() {
        System.out.println("visit");
    }



    public Animal(String naam, int leeftijd){

        this.naam = naam;
        this.leeftijd = leeftijd;

    }


//
//    public static void main(String[] args) {
//    feed();
//    visitVet();
//
//
//    }

}
