import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Scanner;


public class ageCalculator {

    public static void main(String[] args) {
        System.out.println("Wat is je naam?");
        Scanner scan = new Scanner(System.in);
        String naam = scan.next();

        System.out.println("Hallo " + naam + ". Wat is jouw geboortedatum? dd/mm/jjjj");
        String geboortedatum = scan.next();

        LocalDate datum = LocalDate.now();
//        System.out.println(datum);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.println(datum.format(formatter));



        

//        SimpleDateFormat simple = new SimpleDateFormat("dd/MM/yyyy");
////        Date date = simple.parse(datum);
//        long millis = datum.getTime();


    }
}
