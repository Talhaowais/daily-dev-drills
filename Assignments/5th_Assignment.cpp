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
    int a,b;
    int count = 0;
    cout <<"Enter a number: ";
    cin >> a;
    do
    {

       b = (b*10^count)+(a%10);
       b = (a%10)*;

    } while (a<=0);
    
    
    return 0;
}