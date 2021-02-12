import java.util.Scanner;

public class test7_Oefenopdracht_CarSelector {
    public static void main(String[] args) {
        System.out.println("Wilt u een auto kopen? ja/nee?");
        Scanner scan = new Scanner(System.in);
        String antwoord1 = scan.next();

        if (antwoord1.equals("ja")) {
            System.out.println("Goed, welke kleur zoekt u? rood/geel/blauw?");
            String antwoord2 = scan.next();
            if (antwoord2.equals("rood")) {
                System.out.println("Die hebben wij op voorraad, wilt u een proefrit?");
                String antwoord3 = scan.next();
                if (antwoord3.equals("ja")) {
                    System.out.println("Yay!");
                }
                else {
                    System.out.println("Aww");
                }
            }

            else if (antwoord2.equals("blauw")) {
                System.out.println("Deze kan besteld worden");
            }

            else {
                System.out.println("Niet op voorraad");

            }
        }

        else {
            System.out.println("Fijne dag verder");
        }


    }

}
