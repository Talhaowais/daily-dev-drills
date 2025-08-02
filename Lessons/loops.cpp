#include <iostream>
using namespace std;
int main()
{
    // 3! = 3*2*1
    
    // for (int i = 1; i <= 10; i++)
    // {
    //     cout << "5 x " << i << " = " << 5*i << endl;
    // }
    int sum = 0;
    for (int i = 1; i <= 10; i++)// i++ = i+1
    {
        sum=sum+i;
    }
    cout << "Sum is " << sum << endl;
    
    return 0;   
}
