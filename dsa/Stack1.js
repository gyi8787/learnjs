stack
============>2.Balenced Brackets <===========================
public static void main(String[] args)
    {
        String exp="[(a+b)+{(c+d)*(e/f)}]";
        Stack<Character>st=new Stack<>();
        for(int i=0;i<exp.length();i++)
        {
            char ch=exp.charAt(i);
            if(ch=='('||ch=='{'||ch=='[')
            {
                st.push(ch);
            }
            else if (ch==')')
            {
                if(st.size()==0)
                {
                    System.out.println(false);
                    return;
                } else if (st.peek()!='(') {
                    System.out.println(false);
                    return;
                } else {
                    st.pop();
                }
            }
            else if (ch=='}')
            {
                if(st.size()==0)
                {
                    System.out.println(false);
                    return;
                } else if (st.peek()!='{') {
                    System.out.println(false);
                    return;
                } else {
                    st.pop();
                }
            }
            else if (ch==']')
            {
                if(st.size()==0)
                {
                    System.out.println(false);
                    return;
                } else if (st.peek()!='[') {
                    System.out.println(false);
                    return;
                } else {
                    st.pop();
                }
            }
        }
        if(st.size()!=0){
            System.out.println(false);
        }
        else{
            System.out.println(true);
        }
    }
 ===============>function ka use ker liye<============


 public static boolean check( Stack<Character>st,char bracket)
 {
        if(st.size()==0)
            return false;
         else if (st.peek()!=bracket)
        {
            return false;
        }
        else
        {
             st.pop();
             return true;
        }
 }
 public static void main(String[] args)
 {
     String exp="[(a+b)+{(c+d)*(e/f)}]";
     Stack<Character>st=new Stack<>();
     for(int i=0;i<exp.length();i++)
     {
         char ch=exp.charAt(i);
         if(ch=='('||ch=='{'||ch=='[')
         {
             st.push(ch);
         }
         else if (ch==')')
         {
             boolean ans=check(st,'(');
             if(ans==false){
                 System.out.println(false);
                 return;
             }
         }
         else if (ch=='}')
         {
             boolean ans=check(st,'{');
             if(ans==false){
                 System.out.println(false);
                 return;
             }
         }
         else if (ch==']')
         {
             boolean ans=check(st,'[');
             if(ans==false){
                 System.out.println(false);
                 return;
             }
         }
     }
     if(st.size()!=0){
         System.out.println(false);
     }
     else{
         System.out.println(true);
     }
 }