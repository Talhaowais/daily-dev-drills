#include <iostream>
using namespace std;

int main(){
    // int x = 8;
    // int y = 10;

    // cout << "Before Swap\n";
    // cout << "The value of X = " << x << endl; 
    // cout << "The value of Y = " << y << endl; 

    // int temp = x;
    // x = y;
    // y = temp;
    
    // cout << "After Swap\n";
    // cout << "The value of X = " << x << endl; 
    // cout << "The value of Y = " << y << endl; 

    // Strings 
    string str = "Talha is a good boy.";
    // for(int i=0; i<=str.length()+1;i++){
    //     cout << str[i] << " ,";
    // }

    int count = 0;
    while(str[count]!='\0'){
        count++;
    }
    cout << "The length of string is " << count << endl;
    cout << "The length of string is " << str.length() << endl;
    // [T ,a ,l ,h ,a ,  ,i ,s ,  ,a ,  ,g ,o ,o ,d ,  ,b ,o ,y ,. ,'\n']
    // int arr[5]={};
    // for(int i=0; i<5; i++){
    //     cout << "Enter the number " << i << ": " << endl;
    //     cin >> arr[i];
    // }
    // cout << "[ ";
    // for(int i=0; i<5; i++){
    //     cout << arr[i] << ", ";
    // }
    // cout << "]\n";
    return 0;
}
// Hint: Addition + Subtraction, Multiplication + Division