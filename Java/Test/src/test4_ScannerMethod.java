import java.util.Scanner;

public class test4_ScannerMethod {
    public static void main(String[] args){
        String hi = "hello ";
        Scanner scan = new Scanner(System.in);
        String txt = scan.next();

        System.out.println(hi + txt);
    }

}
