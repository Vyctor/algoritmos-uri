#include <stdio.h>
#include <math.h>
#define PI 3.14159

int main()
{
  double a, b, c, areaTrianguloRetangulo, areaCirculo, areaTrapezio, areaQuadrado, areaRetangulo;

  scanf("%lf %lf %lf", &a, &b, &c);

  areaTrianguloRetangulo = (a * c) / 2;
  areaCirculo = PI * pow(c, 2);
  areaTrapezio = (c * (a + b)) / 2;
  areaQuadrado = pow(b, 2);
  areaRetangulo = a * b;

  printf("TRIANGULO: %.3lf\n", areaTrianguloRetangulo);
  printf("CIRCULO: %.3lf\n", areaCirculo);
  printf("TRAPEZIO: %.3lf\n", areaTrapezio);
  printf("QUADRADO: %.3lf\n", areaQuadrado);
  printf("RETANGULO: %.3lf\n", areaRetangulo);

  return 0;
}