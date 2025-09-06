#include <iostream>
#include <math.h> 
using namespace std;
//int maxOfThree(int a, int b, int c);
bool isPrime(int num);
// bool isPalindrome(int n);

// 1. Maximum of Three Numbers

// Write a function int maxOfThree(int a, int b, int c) that returns the largest of three numbers.
// Use this function in main() to find the maximum of three integers entered by the user.

// 2. Check Prime Number

// Write a function bool isPrime(int n) that checks if a number is prime or not.
// Use it to print all prime numbers between 1 and 100.

// 3. Palindrome Number

// Write a function bool isPalindrome(int n) that returns true if the number is a palindrome (reads the same forward and backward).
// Example:

// Input: 121 → Palindrome  
// Input: 123 → Not Palindrome

int main()
{
    //qs1
    // int a,b,c,i;
    // cout << "Enter 1st number: ";
    // cin >> a ;
    // cout << "Enter 2nd number: ";
    // cin >> b;
    // cout << "Enter 3rd number: ";
    // cin >> c;
    // cout << "The greatest number is = " << maxOfThree(a,b,c) << endl;

    //qs2
    //int i;

    cout << "2 is a prime number.\n";
    for (int i = 3; i <= 100; i=i+2)
    {
       if(isPrime(i)){
        cout << i << " is a prime number.\n";
       }
    }
    


    //qs3
    // int num;
    // cout << "Sarghoda: " << false << endl;
    // cout << "Enter the number: ";
    // cin >> num;
    // bool check=isPalindrome(num);
    // cout << "Check " << check << endl;
    // return 0;
}
// QS 1
// int maxOfThree(int a, int b, int c)
// {
//     if (a > b && a > c)
//     {
//         return a;
//     }
//     else if (b > a && b > c)
//     {
//         return b;
//     }
//     else
//     {
//        return c; 
//     }
// }

// // QS 2
bool isPrime(int num)
{
   int upperBound=sqrt(num);
    for (int j = 2; j <= upperBound; j++)
    {
        if (num%j == 0)
        {
            //cout << "Not prime numbers: " << j << endl; 
            return false;
        }
        //cout << "Prime number is: " << j << endl;
        
    }
    return true;
}

//QS 3
// bool isPalindrome(int n)
// {
//     int num=n;
//     int  revnum= 0;
//     // using do_while loop
//     do
//     {
//         cout << "num: " << num << ", revnum: " << revnum << endl;
//         revnum = (revnum*10)+(num%10);
//         num = num/10;     
//     } while (num > 0);
//     if (revnum == n)
//     {
//         return true;
//     }
//     return false;
// }