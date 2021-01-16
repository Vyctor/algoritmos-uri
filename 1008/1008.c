#include <stdio.h>
int main()
{
  int numeroFuncionario;
  double horasTrabalhadas;
  double salarioPorHora;
  double salarioMes;

  scanf("%d %lf %lf", &numeroFuncionario, &horasTrabalhadas, &salarioPorHora);
  salarioMes = horasTrabalhadas * salarioPorHora;

  printf("NUMBER = %d\n", numeroFuncionario);
  printf("SALARY = U$ %.2lf\n", salarioMes);

  return 0;
}
