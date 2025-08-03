#include <iostream>
using namespace std;
int main()
{
    //1st task
    // int a;
    // int fact = 1;
    
    // cout << "Enter a number:\t";
    // cin >> a;
    
    // for (int i = a; i > 1; i--)
    // {
    //     fact = fact * i;
    //     // 1*3 = 3
    // }
    // // for(int i = fact ; i <= a; i++){
    // //     // fact  = fact *i
    // //     fact *= i;
    // // }
    
    // cout << "The factorial of number " << a << " is = " << fact;
        
    
    //2nd task
    int num1;
    cout << "\nEnter a number:\t";
    cin >> num1;
    for (int j = 1; j <= num1; j++)
    {
        if (j%5 ==0 && j%3 == 0)
        {
            cout << "buzzfizz" << endl;
        }
        else if (j%5 == 0)
        {
            cout << "fizz" << endl;
        }
        else if (j%3 == 0)
        {
            cout << "buzz" << endl;
        }
        else
        {
            cout << j << endl;
        }
    }
    return 0;
}