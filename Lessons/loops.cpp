#include <iostream>
using namespace std;
int main()
{
    // 3! = 3*2*1
    
    // for (int i = 1; i <= 10; i++)
    // {
    //     cout << "5 x " << i << " = " << 5*i << endl;
    // }
    // int sum = 0;
    // for (int i = 1; i <= 10; i++)// i++ = i+1
    // {
    //     sum=sum+i;
    // }
    // cout << "Sum is " << sum << endl;

    // int num=123;
    // for(;num>0;){
    //     cout << num << endl;
    //     num = num/10;
    // }
    // cout << num << endl;

    // for (int i = 0; i < 3; i++) // row
    // {
    //     for (int j = 0; j < 3; j++) // column
    //     {
    //         if(i==0){
    //             cout << "1 ";
    //         }
    //         else if(i==1){
    //             cout << "2 ";
    //         }
    //         else if(i==2){
    //             cout << "3 ";
    //         }
    //     }
    //     cout << endl;
        
    // }

    // int i = 123;
    // int count=0;
    // while(i>0){
    //     count++;
    //     i = i/10;
    //     cout << i << endl;
    //     // i++;
    // }
    // cout << count << endl;


    int i=0;
    while(i<5){
        int j=0;
        while(j<=i){
            cout << "*";
            j++;
        }
        cout << endl;
        i++;
    }
    
    return 0;   
}
