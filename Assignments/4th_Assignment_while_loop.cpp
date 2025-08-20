// all the programs that are done using for loops should be completed using while loop.
#include <iostream>
using namespace std;
int main()
{
//fact of a number.
//     int a;
//     int fact = 1;
//     cout << "Enter a number:\t";
//     cin >> a;
//     int i = a;
//     while (i > 1)
//     {
//         fact = fact * i;
//         i--;
//     }
//     cout << "The factorial of number " << a << " is = " << fact;


// //buzz, fizz
//     int num1;
//     cout << "\nEnter a number:\t";
//     cin >> num1;
//     int j = 1;
//     while (j <= num1)
//     {
//         if (j%5 == 0 && j%3 == 0)
//         {
//             cout << "buzzfizz" << endl;
//         }
//         else if (j%5 == 0)
//         {
//             cout << "fizz" << endl;
//         }
//         else if (j%3 == 0)
//         {
//             cout << "buzz" << endl;
//         }
//         else
//         {
//             cout << j << endl;
//         }
//         j++;
//     }

// Q.No.1 Write a program that calculates
// // the sum of even and odd numbers from 1 to N separately
//     cout << "Question No 1" << endl;
//     int b, sum1;
//     int sum, sum2 = 0;
//     cout << "Enter a number: ";
//     cin >> b;
//     int i = 1;
//     while (i <= b)
//     {
//         if (i%2==0)
//         {
//             sum = sum + i;
//         }
//         if (i%2!=0)
//         {
//             sum2 = sum2 + i;
//         }
//         i++;
//     }
//     cout << "The sum of all even numbers up to " << b << " is = " << sum << endl;
//     cout << "The sum of all odd numbers up to " << b << " is = " << sum2 << endl;

// Q.No.2 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// ***
// ***
    // cout << "Question No 2" << endl;
    // int c;
    // cout << "Enter a number: ";
    // cin >> c;
    // int i = 0;
    // while (i < c)
    // {
    //     int j = 0;
    //     while (j < c)
    //     {
    //         cout << "* ";
    //         j++;
    //     }
    //     cout << endl;
    //     i++;
    // }

// Q.No.3  Use a for loop to print the following pattern for N rows:
// Example N=4
// *
// **
// ***
// ****
//   cout << "Question No 3" << endl;
//     int c;
//     cout << "Enter a number: ";
//     cin >> c;
//     int i = 0;
//     while (i < c)
//     {
//         int j = 0;
//         while (j <= i)
//         {
//             cout << "* ";
//             j++;
//         }
//         cout << endl;
//         i++;
//     }

// Q.No.4 Write a program that counts how many digits are
// in a number using a for loop or controlled loop.
// Example Input: 12345 
// Output: 5
// already done in a loops lesson
// num = 123
// num = num/10 (12)


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
    // int i = 2;
    // while (i < num)
    // { 
    //     third = first + second;
    //     first = second;
    //     second = third;
    //     cout << third << ", ";
    //     i++;
    // }
    // cout << endl;

// Q.No.6 Write a program that prints a square of * of size N.
// Example N = 3
// ***
// * *
// ***
//    cout << "Question No 6" << endl;
//     int b;
//     cout << "Enter a number: ";
//     cin >> b;
//     int i = 0;
//     while (i < b)
//     {
//         int j = 0;
//         while (j < b)
//         {
//             if(i==0 || i==b-1 || j==0 || j==b-1)
//             {
//                 cout << "*";
//                 // yha pa issue yeh a rha tha k layout kharab ho jta agr space do after staric
//             }
//             else{
//                 cout << " ";
//             }
//             j++;
//         }
//         i++;
//         cout << endl;
//     }

// Q.No.1 Write a program using a for loop to
//  print numbers from 1 to N (input by user).
//    cout << "Question 1\n";
//     int num1;
//     cout << "Enter a number: ";
//     cin >> num1;
//     int i = 1;
//     while (i <=num1)
//     {
//         cout << i << "\n";
//         i++;
//     }
    

// Q.No.2 Write a program to print all even numbers between 1 and 100 
// using a for loop.
    // cout << "Question 2\n";
    // int num2;
    // int j = 1;
    // while (j <= 100)
    // {
    //     if(j%2 == 0)
    //     {
    //     cout << j << "\n";
    //     }
    //     j++;
    // }

// Q.No.3 Write a program to calculate the sum of the first 
// N natural numbers using a for loop.
//    cout << "Question 3\n";
//     int num3;
//     int sum = 0;
//     cout << "Enter a number: ";
//     cin >> num3;
//     int k = 1;
//     while (k <= num3)
//     {
//         sum = sum + k;
//         k++;
//     }
//     cout << sum << endl;
   
// Q.No.4 Write a program that prints numbers from N to 1 
// in reverse order using a for loop.
    // cout << "Question 4\n";
    // int num4;
    // cout << "Enter a number: ";
    // cin >> num4;
    // int a = num4;
    // while (a >= 1)
    // {
    //     cout << a << endl;
    //     a--;
    // }

    return 0;
}
