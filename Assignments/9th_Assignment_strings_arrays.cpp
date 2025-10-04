// Merge Two Arrays -> Write a program to merge two arrays into one.
// Count Words in a Sentence -> Write a program to count the number of words in a given string.
#include <iostream>
#include <cctype>
using namespace std;
int main()
{

// Qs1 -> Count Words in a Sentence -> Write a program to count the number of words in a given string.
    // string str = "Lets go to work"; //agr mai yha yeh commas na dalo to first word ni show hota.
    // int count = 0;
    // cout << "Enter the string: ";
    // //cin >> str;
    // getline(cin, str); 
    // cout << "String inputted is " << str << endl;
    // for(int j=0; j<=str.length()-1;j++)
    // {
    //     if ((str[j] >= 65 && str[j] <= 90) ||(str[j] >= 97 && str[j] <= 122)) {
    //     cout << str[j] << endl;
    //         count++;
    //     }
    // }
    // cout << "Total words in a Sentence are : " << count << endl;


// QS -> 2 Merge Two Arrays -> Write a program to merge two arrays into one.
    int sizea = 0;
    int sizeb = 0;
    int sizec = 0;
    cout << "Enter the size of 1st array: ";
    cin >> sizea;
    int arr[sizea]={};
    //Enter the number for 1st array
    for(int i=0; i<sizea; i++)
    {
        cout << "Enter the number for 1st array " << i+1 <<" : " << endl;
        cin >> arr[i]; 
    }
    cout << "Enter the size of 2nd array: ";
    cin >> sizeb;
    int ar[sizeb]={};
    //Enter the number for 2nd array
    for(int j=0; j<sizeb; j++)
    {
        cout << "Enter the number for 2nd array " << j+1 <<" : \n";
        cin >> ar[j]; 
    }
    sizec = sizea + sizeb;
    int a[sizec]={};
    a[sizec]= arr[sizea] + ar[sizeb];
    cout << "The combined size of array is: " << sizec << endl;
    cout << "The combine result of both array is: " << a[sizec] << endl; // yeh garbage value return kr rha 
    return 0;
}