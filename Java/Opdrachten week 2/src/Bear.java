public class Bear extends Animal {
    String type;

    public Bear(String naam, int leeftijd, String type){
        super(naam, leeftijd);

        this.type = type;
    }

    public void showType() {
        System.out.println(type);
//        System.out.println(bear2.type);
        System.out.println(Animal.type);

    }

    public static void main(String[] args) {

        Bear bear2 = new Bear("Henk", 17, "Polar Bear");
        Bear bear1 = new Bear("Piet", 43, "Brown Bear");
        Animal pinguïn = new Animal("Bob", 18);
//        bear1.showType();
//        bear2.showType();

        Bear bears[] = new Bear[2];
        bears[0] = bear1;
        bears[1] = bear2;
        Animal animals[] = {bear1, bear2, pinguïn};



        System.out.println(animals[2].naam);

    }



}
