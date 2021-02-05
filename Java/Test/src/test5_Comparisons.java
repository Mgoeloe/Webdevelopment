public class test5_Comparisons {
    public static void main(String[] args){
        String a = "Hallo";
        String b = "Hi";
        int c = 12;
        double d = 12.00;
        double f = 15;

        boolean test1 = c==d;
        boolean test2 = f==d;
        boolean test3 = a==b && d<f;
        boolean test4 = a==b || d<f;


        System.out.println(test1);
        System.out.println(test2);
        System.out.println(test3);
        System.out.println(test4);
    }
}