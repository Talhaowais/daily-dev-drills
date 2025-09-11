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

// Write a program that counts how many times a character(user input) appears in a string.
    // char a;
    // int count;
    // string str = "Hello how are you, hope you are doing great.";
    // cout << "The string is: " << endl;
    // cout << "Hello how are you, hope you are doing great." << endl;
    // cout << "Now enter a characher you want to find in the above string: ";
    // cin >> a;
    // for(int i=0; i<=str.length()-1;i++)
    // {
    //     cout << str[i] << " ,";
    //     if (str[i] == a) 
    //     {
    //         count++;
    //     }
    // }
    // cout << "\nThe entered character appeared " << count << " times in the above string.";


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


// Write a function that takes a string and counts how many vowels and consonants it contains.
    string str = "talha";
    cout << "The string is: ";
    cout << "talha";
    int counta = 0, counte = 0, counti = 0, counto = 0, countu = 0, countf, cons;
    for(int j=0; j<=str.length()-1;j++)
    {
        if (str[j] == 'a')
        {
            counta++;
        }
        if (str[j] == 'e')
        {
            counte++;
        }
        if (str[j] == 'i')
        {
            counti++;
        }
        if (str[j] == 'o')
        {
            counto++;
        }
        if (str[j] == 'u')
        {
            countu++;
        }  
    }
    countf = counta + counte + counti + counto + countu;
    cons = str.length() - countf;
    cout << "\nThe vowels appeared " << countf << " times in the above string.";
    cout << "\nThe consonants appeared " << cons << " times in the above string." << endl;
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