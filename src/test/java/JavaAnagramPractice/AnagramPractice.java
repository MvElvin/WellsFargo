package JavaAnagramPractice;
import org.apache.commons.lang3.ArrayUtils;
import java.util.*;

public class AnagramPractice {
    /**
     * Will evaluate if given 2 string variable are anagram or not.
     * The method will eliminate all spaces and will check
     * if all characters are presented in the 2nd string literal.
     * @param str1
     * @param str2
     * @return true or false depending on if given 2 words are anagram or not
     */
    static boolean anagramChecker(String str1, String str2){
        boolean flag;
        str1= str1.replaceAll(" ", "");
        str2= str2.replaceAll(" ", "");
        if (str1.length()!=str2.length()) flag=false;
        else{

            char arr1[] = str1.toLowerCase().toCharArray();
            char arr2[] = str2.toLowerCase().toCharArray();

            Arrays.sort(arr1);
            Arrays.sort(arr2);

            flag= Arrays.equals(arr1, arr2);
        }


        return flag;
    }

    /**
     * designed during an interview and modified after
     * @param str1
     * @param str2
     * @return true or false depending on if given 2 words are anagram or not
     */
        public static boolean anagramCheck(String str1, String str2) {

        boolean flag = true;
        if (str1.length()!=str2.length()) {
            flag = false;
        }
        else{
            char [] characters = str1.toLowerCase().toCharArray();
            /**
             *  the problem was in conversion of char[] to Character []
             *  we need to treat char [] as an object
             */
            ArrayList<Character> arrList = new ArrayList(
                    Arrays.asList(ArrayUtils.toObject(characters)));
            for (int i = 0; i < str2.length() ; i++) {
                if (arrList.contains(str2.charAt(i))) {
                    arrList.remove((Character) str2.charAt(i));
                } else flag = false;
            }
        }
        return flag;
    }

    public static void main(String[] args) {
            Scanner scan = new Scanner(System.in);
        System.out.println("Please enter first string literal");
        String str1 = scan.nextLine();
        System.out.println("Please enter second string literal");
        String str2 = scan.nextLine();
        // the method that we constructed during interview
        System.out.println("Given literals are anagram > "+anagramCheck(str1, str2));
        // more efficient method that designed later
        System.out.println("Given literals are anagram > "+anagramChecker(str1, str2));

    }
}
