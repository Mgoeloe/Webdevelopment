import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;


public class loops_8c {

    public static void main(String[] args) {
        String[] eastcars = {"Kia", "Honda"};
        String[] cars = {"Kia", "Volkswagen", "Renault", "Honda", "BMW"};
	    ArrayList<String> westcars = new ArrayList<>();

//        for (String i : cars) {
////            System.out.println(i);
//            if (i )
//        }

        for (String a : cars){
            if (a == eastcars[0] || a == eastcars[1]){
                System.out.println("ok");
            }
            else {
                System.out.println("not ok");
                westcars.add(a);
            }

        }
        Collections.sort(westcars);
        System.out.println(westcars);


    }
}
