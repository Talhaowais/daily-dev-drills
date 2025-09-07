// 1. Write a function int factorial(int n) that returns the factorial of a given number.
// 2. Write a function int power(int base, int exp) that calculates base^exp (without using pow from <cmath>).
// 3. Write a function double celsiusToFahrenheit(double c) that converts Celsius to Fahrenheit.
// 4. Write a function int calculator(int a, int b, char op) that takes two numbers and an operator (+, -, *, /) and returns the result.
#include <iostream>
#include <math.h>
using namespace std;
//int factorial(int a);
//int calculator(int a, int b, char op);
//double celsiusToFahrenheit(double c);

int main()
{
    //1st qs
    // int fact;
    // int a;
    // cout << "Enter a number:\t";
    // cin >> a;
    // factorial(a);

    //4th qs
    // int a,b;
    // char op;
    // cout << "Enter 1st number: ";
    // cin >> a;
    // cout << "Enter 2nd number: ";
    // cin >> b;
    // cout << "Enter an operator (+, -, *, /): ";
    // cin >> op;
    // calculator(a , b , op);

    //3rd qs
    // double celsius;
    // cout << "Enter temperature in Celsius: ";
    // cin >> celsius;
    // celsiusToFahrenheit(celsius);

    //2nd qs
    int base, exp;
    cout << "Enter the base number: ";
    cin >> base;
    cout << "Enter the exponent number: ";
    cin >> exp;
    power(base, exp);
}

// 1. Write a function int factorial(int n) that returns the factorial of a given number.
int factorial(int a)
{
    int fact = 1;
    for (int i = a; i > 1; i--)
    {
        fact = fact * i;
    }
    cout << "The factorial of number " << a << " is = " << fact;
    return fact;
}

// 4. Write a function int calculator(int a, int b, char op) that takes two numbers and an operator (+, -, *, /) and returns the result.
int calculator(int a, int b, char op)
{
    int c,d,e,f;
    if(op == '+')
    {
        c = a+b;
        cout << "The result is " << c;
        return c;
    }
    else if (op == '-')
    {
        d = a-b;
        cout << "The result is " << d;
        return d;
    }
    else if (op == '*')
    {
        e = a*b;
        cout << "The result is " << e;
        return e;
    }
    else if (op == '/')
    {
        f == a/b;
        cout << "The result is " << f;
        return f;
    }  
}

// 3. Write a function double celsiusToFahrenheit(double c) that converts Celsius to Fahrenheit.
double celsiusToFahrenheit(double celsius)
{
    double fahrenheit;
    fahrenheit = (celsius * 9.0 / 5.0) + 32;
    cout << "Temperature in fahrenheit is: " << fahrenheit << endl;
    return fahrenheit;
}

// 2. Write a function int power(int base, int exp) that calculates base^exp (without using pow from <cmath>).
int power(int base, int exp)
{
    int c;
    for (int i = 0; i <= base; i++)
    {
        c = base * exp;
        /* code */
        //ni smaj a rhai k exponent ko ksy utni dafa ksy multiple krwana ha
    }
    cout << "The power of a given number is: " << c << endl;
}