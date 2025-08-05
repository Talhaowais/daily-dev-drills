// Q.No.1 Write a program that calculates
// the sum of even and odd numbers from 1 to N separately
// Q.No.2 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// ***
// ***
// Q.No.3  Use a for loop to print the following pattern for N rows:
// Example N=4
// *
// **
// ***
// ****
// Q.No.4 Write a program that counts how many digits are
// in a number using a for loop or controlled loop.
// Example Input: 12345 
// Output: 5

// num = 123
// num = num/10 (12)
// Q.No.5 Write a program using a for loop to 
// print the first N terms of the Fibonacci series.
// Example N=5
// Fibonacci Series
// 1 1 2 3 5 8 13 21 34 55 
// Q.No.6 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// * *
// ***
#include <iostream>
using namespace std;
int main()
{
// Q.No.1 Write a program that calculates
// the sum of even and odd numbers from 1 to N separately
    cout << "Question No 1" << endl;
    int a, sum1;
    int sum, sum2 = 0;
    cout << "Enter a number: ";
    cin >> a;
    //The sum of all even numbers
    for (int i = 1; i <= a; i++)
    {
        if (i%2==0)
        {
            sum = sum + i;
        }
    }
    cout << "The sum of all even numbers up to " << a << " is = " << sum << endl;
    //The sum of all odd numbers
    for (int j = 1; j <= a; j++)
    {
        if (j%2!=0)
        {
            sum2 = sum2 + j;
        }
    }
    cout << "The sum of all odd numbers up to " << a << " is = " << sum2 << endl;


// Q.No.2 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// ***
// ***
    cout << "Question No 2" << endl;
    int b;
    cout << "Enter a number: ";
    cin >> b;
    for (int i = 0; i < b; i++)
    {
        for (int j = 0; j < b; j++)
        {
            cout << "* ";
        }
        cout << endl;
    }
    
// Q.No.3  Use a for loop to print the following pattern for N rows:
// Example N=4
// *
// **
// ***
// ****

cout << "Question No 3" << endl;
    int c;
    cout << "Enter a number: ";
    cin >> c;
    for (int i = 0; i < c; i++)
    {
        cout << "* ";
        cout << endl;
    }
    return 0;
}