// Character Frequency
// Write a program that counts how many times a character(user input) appears in a string.
// Count Vowels and Consonants
// Write a function that takes a string and counts how many vowels and consonants it contains.
// Maximum and Minimum
// Write a program to find the largest and smallest elements in an array.
// Sum of Elements
// Write a program to find the sum of all elements in an array.

#include <iostream>
#include <cctype>
using namespace std;
string vowelsandconsonants();
int main()
{
//Write a program to find the sum of all elements in an array.
    // int size = 0;
    // cout << "Talha beta size enter akro:";
    // cin >> size;
    // int arr[size]={};
    // int sum;
    // for(int i=0; i<size; i++)
    // {
    //     cout << "Enter the number " << i+1 <<" : \n";
    //     cin >> arr[i]; 
    //     sum = arr[i] + sum;
    // }
    // cout << "The sum of all number in an array is: " << sum << endl;

// Write a program that counts how many times a character(user input) appears in a string.
    // char a;
    // int count=0;
    // string str = "Hello how are you, hope you are doing great.";
    // cout << "The string is: " << endl;
    // cout << "Hello how are you, hope you are doing great." << endl;
    // cout << "Now enter a character you want to find in the above string: ";
    // cin >> a;
    // cout << (char)toupper(a) << endl;
    // cout << (char)tolower(a) << endl;
    // for(int i=0; i<str.length();i++)
    // {
    //     // cout << str[i] << " ,";x
    //     if (str[i] == (char)toupper(a) || str[i]== (char)tolower(a)) 
    //     {
    //         count++;
    //     }
    // }
    // cout << "\nThe entered character appeared " << count << " times in the above string.";


// Write a program to find the largest and smallest elements in an array.
//NOT COMPlete
    // int arr[5]={1,2,3,4,-5};
    // int min=arr[0];
    // int max=arr[0];
    // for(int i=1; i<5; i++)
    // {
    //     if (min > arr[i])
    //     {
    //         min = arr[i];
    //     }
    //     if (max < arr[i])
    //     {
    //         max = arr[i];
    //     } 
    // }
    // // find second highest and smallest number code is sae agae likhi peche code mein koi chwal na marein.
    // cout << "The smallest number is " << min << endl;
    // cout << "The Largest number is " << max << endl;

// Write a function that takes a string and counts how many vowels and consonants it contains.
    string str = "talha";
    cout << "The string is: ";
    cout << str;
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