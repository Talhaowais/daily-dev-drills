/*
Q.No.1 Write a C++ program using loops to print the following pattern for n = 5:
1
12
123
1234
12345

Q.No.2 Write a program that takes an integer and prints its reverse using a loop.
Example:

Input: 12345  
Output: 54321
*/

#include <iostream>
using namespace std;
int main()
{
    // QS 1
    // int n = 5;
    // for (int i = 1; i <= n; i++)
    // {
    //     for (int j = 1; j <= i; j++)
    //     {
    //         cout << j;
    //     }
    //     cout << endl;
    // }

    // qs 2
    int a;
    cout << "Enter a number: ";
    cin >> a;
    for (int i = a; i > 1; i--)
    {
        
        cout << a;
    }
    


    
    return 0;
}