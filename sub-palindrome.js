function palindrome(str){
  // aabaa
  // a
  //aa
  // b
  //aba
  //aabaa
var count = 0;
if(str.length === 0 || str === null) return 0;
if(str.length === 1) return 1;
var variations = [];
for(var i = 0; i < str.length -1; i++){
  for(var j = 1; j < str.length; j++){

  }
}

}


// public class Solution {
//     public String longestPalindrome(String s) {
//     // dynamic programming
//     if(s.length()==0 || s.length()==1).
//        return s;
//     boolean[][] dp  = new boolean[s.length()][s.length()];
//     String res = "";
//     int maxlen =0;
//     for(int i=s.length()-1; i>=0;i--)
//         for(int j=i;j<s.length();j++)
//         {
//             if(s.charAt(i)==s.charAt(j) && (j-i<=2 || dp[i+1][j-1]))
//               {
//                   dp[j]=true;
//                   if(j-i+1>maxlen)
//                   {
//                       maxlen = j-i+1;
//                       res = s.substring(i,j+1);
//                   }
//               }
//         }
//    return res;
// }
// }
