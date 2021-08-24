#include <iostream>
using namespace std;

struct persona
{
    char name[25];
    int age;
    float money;
};

int main(){
    persona Rosalio;
    
    Rosalio.name = "Rosalio Monterrosa";
    Rosalio.age = 21;
    Rosalio.money = 0.00;

    cout << "Nombre de la persona 0: " << Rosalio.name << \n << << " Edad de la persona 0: " << Rosalio.age << \n << "Dinero de la persona 0" << Rosalio.money << \n; 
}