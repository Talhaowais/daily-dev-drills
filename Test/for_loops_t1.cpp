#include <iostream>
using namespace std;
// Q.No.1 Write a program using a for loop to
//  print numbers from 1 to N (input by user).
// Q.No.2 Write a program to print all even numbers between 1 and 100 
// using a for loop.
// Q.No.3 Write a program to calculate the sum of the first 
// N natural numbers using a for loop.
// Q.No.4 Write a program that prints numbers from N to 1 
// in reverse order using a for loop.
int main()
{
    // QS 1
    cout << "Question 1\n";
    int num1;
    cout << "Enter a number: ";
    cin >> num1;
    for (int i = 1; i <=num1; i++)
    {
        cout << i << "\n";
    }

    //QS 2
    cout << "Question 2\n";
    int num2;
    for (int j = 1; j <= 100; j++)
    {
        if(j%2 == 0)
        {
        cout << j << "\n";
        }
    }
    
    //Qs 3
    cout << "Question 3\n";
    int num3;
    int sum = 0;
    cout << "Enter a number: ";
    cin >> num3;
    for (int k = 1; k <= num3; k++)
    {
        sum = sum + k;
    }
    cout << sum << endl;
    
    //Qs 4
    cout << "Question 4\n";
    int num4;
    cout << "Enter a number: ";
    cin >> num4;
    for (int a = num4; a >= 1; a--)
    {
        cout << a << endl;
    }

    return 0;
}