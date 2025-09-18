// Merge Two Arrays -> Write a program to merge two arrays into one.
// Count Words in a Sentence -> Write a program to count the number of words in a given string.
#include <iostream>
using namespace std;
int main()
{
// Qs1 -> Count Words in a Sentence -> Write a program to count the number of words in a given string.
    string str = "Lets go to work"; //agr mai yha yeh commas na dalo to first word ni show hota.
    int count = 0;
    cout << "Enter the string: ";
    //cin >> str;
    getline(cin, str); 
    cout << "String inputted is " << str << endl;
    for(int j=0; j<=str.length()-1;j++)
    {
        if ((str[j] >= 65 && str[j] <= 90) ||(str[j] >= 97 && str[j] <= 122)) {
        cout << str[j] << endl;
            count++;
        }
    }
    cout << "Total words in a Sentence are : " << count << endl;
    return 0;
}