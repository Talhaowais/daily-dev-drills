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
    // cout << "Question No 1" << endl;
    // int a, sum1;
    // int sum, sum2 = 0;
    // cout << "Enter a number: ";
    // cin >> a;
    // //The sum of all even numbers
    // for (int i = 1; i <= a; i++)
    // {
    //     if (i%2==0)
    //     {
    //         sum = sum + i;
    //     }
    //     if (i%2!=0)
    //     {
    //         sum2 = sum2 + i;
    //     }
    // }
    // cout << "The sum of all even numbers up to " << a << " is = " << sum << endl;
    // cout << "The sum of all odd numbers up to " << a << " is = " << sum2 << endl;
    //The sum of all odd numbers
    // for (int j = 1; j <= a; j++)
    // {
    //     if (j%2!=0)
    //     {
    //         sum2 = sum2 + j;
    //     }
    // }
    // cout << "The sum of all odd numbers up to " << a << " is = " << sum2 << endl;


// Q.No.2 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// ***
// ***
    // cout << "Question No 2" << endl;
    // int b;
    // cout << "Enter a number: ";
    // cin >> b;
    // for (int i = 0; i < b; i++)
    // {
    //     for (int j = 0; j < b; j++)
    //     {
    //         cout << "* ";
    //     }
    //     cout << endl;
    // }
    
// Q.No.3  Use a for loop to print the following pattern for N rows:
// Example N=4
// *
// **
// ***
// ****

// cout << "Question No 3" << endl;
//     int c;
//     cout << "Enter a number: ";
//     cin >> c;
//     for (int i = 0; i < c; i++)
//     {
//         for (int j = 0; j <= i; j++)
//         {
//             cout << "* ";
//         }
//         cout << endl;
//     }

// Q.No.4 Write a program that counts how many digits are
// in a number using a for loop or controlled loop.
// Example Input: 12345 
// Output: 5

    // cout << "Question No 4" << endl;
    // int d;
    // int count=0;
    // cout << "Enter a number: ";
    // cin >> d;
    // for (; d > 0;)
    // {
    //     count++;

    //     d=d/10;
    // }
    // cout << "Total digit count: " << count << endl;

// Q.No.5 Write a program using a for loop to 
// print the first N terms of the Fibonacci series.
// Example N=5
// Fibonacci Series
// 1 1 2 3 5 8 13 21 34 55 

    // int first = 1;
    // int second = 1;
    // int third;
    // int num = 10;
    // cout  << first << ", " << second << ", ";

    // for (int i=2; i < num; i++){
        
    //     third = first + second;
        
    //     first = second;
    //     second = third;
        
    //     cout << third << ", ";
    // }
    // cout << endl;

// Q.No.6 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// * *
// ***
    //  cout << "Question No 6" << endl;
    // int b;
    // cout << "Enter a number: ";
    // cin >> b;
    // for (int i = 0; i < b; i++)
    // {
    //     for (int j = 0; j < b; j++)
    //     {
    //         // if(i==0 || i==b-1 || j==0 || j==b-1){
    //         if(i==b/2 && j==b/2){

    //             cout << "  ";
    //         }
    //         else{
    //             cout << "* ";
    //         }
    //     }
    //     cout << endl;
    // }

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

    return 0;
}