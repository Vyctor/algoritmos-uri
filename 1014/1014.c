#include <stdio.h>

int main()
{
  int distanciaPercorrida;
  double totalCombustivelGasto;
  double consumo;

  scanf("%d %lf", &distanciaPercorrida, &totalCombustivelGasto);

  consumo = distanciaPercorrida / totalCombustivelGasto;

  printf("%.3lf km/l\n", consumo);

  return 0;
}