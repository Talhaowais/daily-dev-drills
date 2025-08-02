#include <iostream>
using namespace std;
int main()
{
   int age;
    string name;
    cout << "Enter your Name ";
    cin >> name;
    cout << "Enter your age ";
    cin >> age;
    if (age < 11)
    {
        cout << name << " is child";
    }
    else if (age >= 12 && age <= 17)
    {
        cout << name << " is teenager";
    }
    else if (age >= 18 && age <= 29)
    {
        cout << name << " is boy";
    }
    else
    {
        cout << name << " is man";
    }


return 0;
}