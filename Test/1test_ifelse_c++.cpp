#include <iostream>
using namespace std;
int main()
{
//     Write a C++ program that takes three integers as input: num1, num2, and num3. The program should print:
// "All are equal" if all three numbers are the same
// "Two are equal" if any two of the numbers are equal
// "All are different" if all numbers are different
// Additionally, if the sum of any two numbers equals the third, also print "Sum match found"
    int num1,num2,num3;
    cout << "Enter 1st number: ";
    cin >> num1;
    cout << "Enter 2nd number: ";
    cin >> num2;
    cout << "Enter 3rd number: ";
    cin >> num3;
    if (num1 == num2 && num1 == num3)
    {
        cout << "All are equal";
    }
    else if (num1 == num2 || num2 == num3 || num3 == num1)
    {
        cout << "Two are equal";
    }
    else
    {
        cout << "All are different";
    }
    if ((num1 + num2 == num3) || (num2 + num3 == num1) || (num3 + num1 == num2))
    {
        cout <<"\nSum match found";
    }
    return 0;
}