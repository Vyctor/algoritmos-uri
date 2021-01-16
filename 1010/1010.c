#include <stdio.h>
int main()
{
  double total = 0;
  int codigoPeca, qtdPecas;
  double valorPeca;
  int i;

  for (i = 0; i < 2; i++)
  {
    scanf("%d %d", &codigoPeca, &qtdPecas);
    scanf("%lf", &valorPeca);
    total += qtdPecas * valorPeca;
  }

  printf("VALOR A PAGAR: R$ %.2lf\n", total);

  return 0;
}