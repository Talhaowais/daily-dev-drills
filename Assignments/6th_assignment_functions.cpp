#include <iostream>
using namespace std;
int maxOfThree(int a, int b, int c);
bool isPrime(int n);

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
    int a,b,c,i;
    // cout << "Enter 1st number: ";
    // cin >> a ;
    // cout << "Enter 2nd number: ";
    // cin >> b;
    // cout << "Enter 3rd number: ";
    // cin >> c;
    // cout << "The greatest number is = " << maxOfThree(a,b,c) << endl;
    cout << "The prime numbers from 1 - 100 are /n" << isPrime(i);
    return 0;
}
// QS 1
int maxOfThree(int a, int b, int c)
{
    if (a > b && a > c)
    {
        return a;
    }
    else if (b > a && b > c)
    {
        return b;
    }
    else
    {
       return c; 
    }
}

// QS 2
bool isPrime(int i)
{
    for (int i = 1; i >= 100; i++)
    {
        if (i/i==1)
        {
            
        }
    
    }
    return true;
}

