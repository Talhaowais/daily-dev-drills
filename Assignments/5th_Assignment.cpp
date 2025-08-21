#include <iostream>
using namespace std;
int main()
{
      // 54321

    // revnum = 5*10^0=5*1 = 5

    // revnum = (revnum*10^count)+(num%10)

    // revnum           num           count
    // 0                12345          0
    // 5                1234           1
    // 54               123            2
    // 543              12 

    // num = 12345
    
    // revnum = (num%10)* = 5

    // num=num/10 => 1234
    // revnum = 54321
   int a;
   int count, b= 0;
   cout <<"Enter a number: ";
   cin >> a;
   // using do_while loop
   do
   {
      // b = (b*10^count)+(a%10);
      b = a%10;
      count = count * 10 + b;
      b = b/10;
   } while (a > 0);
   cout << b << endl;

   // using while loop
   // while (a <= 0)
   // {
   //    b = a%10;
   //    cout << b;
   // }

   // using for loop
   // for (int i = 0; i <= a; i++)
   // {
   //    b = a%10;
   //    cout << b;
   // }
   
     
   return 0;
}