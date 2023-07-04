/stack
//============>2.Balenced Brackets <===========================
// public static void main(String[] args)
//     {
//         String exp="[(a+b)+{(c+d)*(e/f)}]";
//         Stack<Character>st=new Stack<>();
//         for(int i=0;i<exp.length();i++)
//         {
//             char ch=exp.charAt(i);
//             if(ch=='('||ch=='{'||ch=='[')
//             {
//                 st.push(ch);
//             }
//             else if (ch==')')
//             {
//                 if(st.size()==0)
//                 {
//                     System.out.println(false);
//                     return;
//                 } else if (st.peek()!='(') {
//                     System.out.println(false);
//                     return;
//                 } else {
//                     st.pop();
//                 }
//             }
//             else if (ch=='}')
//             {
//                 if(st.size()==0)
//                 {
//                     System.out.println(false);
//                     return;
//                 } else if (st.peek()!='{') {
//                     System.out.println(false);
//                     return;
//                 } else {
//                     st.pop();
//                 }
//             }
//             else if (ch==']')
//             {
//                 if(st.size()==0)
//                 {
//                     System.out.println(false);
//                     return;
//                 } else if (st.peek()!='[') {
//                     System.out.println(false);
//                     return;
//                 } else {
//                     st.pop();
//                 }
//             }
//         }
//         if(st.size()!=0){
//             System.out.println(false);
//         }
//         else{
//             System.out.println(true);
//         }
//     }