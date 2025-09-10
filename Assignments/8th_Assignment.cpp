// Character Frequency
// Write a program that counts how many times a character(user input) appears in a string.
// Count Vowels and Consonants
// Write a function that takes a string and counts how many vowels and consonants it contains.
// Maximum and Minimum
// Write a program to find the largest and smallest elements in an array.
// Sum of Elements
// Write a program to find the sum of all elements in an array.

#include <iostream>
using namespace std;
string vowelsandconsonants();
int main()
{
//Write a program to find the sum of all elements in an array.
    // int arr[5]={1,2,3,4,5};
    // int c;
    // for(int i=arr[5]; i<=5; i++)
    // {
    //     c = i + c;
    // }
    // cout << "The sum of all number in an arry is: " << c << endl;

// Write a program to find the largest and smallest elements in an array.
//NOT COMPlete
    // int arr[5]={1,2,3,4,5};
    // int c;
    // for(int i=arr[5]; i!='\0'; i++)
    // {
    //     if (i < arr[5])
    //     {
    //         cout << "The smamlest number is: " << i << endl;
    //     }
    //     else if (i > arr[5])
    //     {
    //         cout << "The largest number is: " << i << endl;
    //     }  
    // }


    string str;
    cout << "Enter a string: ";
    cin >> str;
    // string vowelsandconsonants(strn);

    // string str;
        int count = 0;
        for(int i=0; i<=str.length()-1;i++)
        {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            {
                cout << "\nThe digit is: " << str[i];
            }
            cout << str[i];
            while(str[count]!='\0')
            {
            count++;
            } 
        }
        cout << "\nThe length of string is " << count << endl;
        
        
    return 0;
}

// Write a function that takes a string and counts how many vowels and consonants it contains.
// string vowelsandconsonants()
// {
    // string str;
    // int count = 0;
    // for(int i=0; i<=str.length()+1;i++)
    // {
    //     cout << str[i] << " ,";
    //     while(str[count]!='\0')
    //     {
    //     count++;
    //     }

    // }
// }