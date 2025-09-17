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
    string str = "talha!!!!????? SarFaraz";
    cout << "The string is: ";
    // cin >> str;
    getline(cin, str); 
    cout << "String inputted is " << str << endl;
    int counta = 0, counte = 0, counti = 0, counto = 0, countu = 0, countf, cons, alphCount=0;

    for(int j=0; j<=str.length()-1;j++)
    {
        if ((str[j] >= 65 && str[j] <= 90) ||(str[j] >= 97 && str[j] <= 122)) {
        cout << str[j] << endl;
            alphCount++;
        }

        if (str[j] == 'a' || str[j] == 'A')
        {
            counta++;
        }
        if (str[j] == 'e' || str[j] == 'E')
        {
            counte++;
        }
        if (str[j] == 'i' || str[j] == 'I')
        {
            counti++;
        }
        if (str[j] == 'o' || str[j] == 'O')
        {
            counto++;
        }
        if (str[j] == 'u' || str[j] == 'U')
        {
            countu++;
        }  
    }
    countf = counta + counte + counti + counto + countu;
    cons = alphCount - countf;
    cout << "\nThe vowels appeared " << countf << " times in the above string.";
    cout << "\nThe consonants appeared " << cons << " times in the above string." << endl;
    // A = 65 , Z = 90, a=97, z=122
    cout << toupper('A') << endl;
    cout << toupper('Z') << endl;
    cout << tolower('a') << endl;
    cout << toupper('z') << endl;

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




// Merge Two Arrays
// Write a program to merge two arrays into one.


// Count Words in a Sentence
// Write a program to count the number of words in a given string.