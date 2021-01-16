#include <stdio.h>
int main()
{
  char nomeVendedor[60];
  double salarioFixo;
  double totalVendas;
  double totalSalario;

  scanf("%s", nomeVendedor);
  scanf("%lf %lf", &salarioFixo, &totalVendas);
  totalSalario = (totalVendas * 0.15) + salarioFixo;
  printf("TOTAL = R$ %.2lf\n", totalSalario);
  return 0;
}