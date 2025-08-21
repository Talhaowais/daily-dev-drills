#include <iostream>
using namespace std;
// void print();
// int square(int num);
// void shapePrint(int row, int col);
int maxOfThree(int a, int b, int c);

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
    // int s = square(13);
    // print();
    // cout << square(6) << endl;
    // cout << s << endl;
    // shapePrint(5,4);
    cout << maxOfThree(1,2,3) << endl;
    return 0;
}

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

// void shapePrint(int row, int col){
//     for (int i = 0; i < row; i++)
//     {
//         for (int j = 0; j < col; j++)
//         {
//             cout << "$";
//         }
//         cout <<endl;
        
//     }
    
// }

// int square(int num){
//     return num*num;
// }
// void print(){
//     cout << "Hello Balwal\n";
//}