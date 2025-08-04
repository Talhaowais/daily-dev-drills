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
    int a, sum;
    cout << "Enter a number: " << endl;
    cin >> a;
    for (int i = 1; i <= a; i++)
    {
        if (i%2==0)
        {
            sum = sum + i;
        }
        cout << "The sum of even number is =\t" << sum;
        
    }
    
    return 0;
}