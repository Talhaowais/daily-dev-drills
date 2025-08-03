#include <iostream>
using namespace std;
int main()
{
    int a,b,num1;
    int fact = 1;

    //1st task
    cout << "Enter a number:\t";
    cin >> a;
    // for (int i = a; i <= 1; i--)
    // {
    //     b = fact * i;
    // }
    for(int i = fact ; i <= a; i++){
        fact *= i;
    }
    cout << "The factorial of number " << a << " is = " << fact;

    //2nd task
    cout << "\nEnter a number:\t";
    cin >> num1;
    for (int j = 1; j == num1; j++)
    {
        if (num1%5 == 0)
        {
            cout << "The entered number is: " << "fizz";
        }
        else if (num1%3 == 0)
        {
            cout << "The entered number is: " << "buzz";
        }
        else if (num1%5 ==0 && j%3 == 0)
        {
            cout << "The entered number is: " << "buzzfizz";
        }
        else
        {
            cout << "The entered number is: " << num1;
        }
    }
    


    return 0;
}