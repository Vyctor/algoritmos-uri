/**
 * Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um
 * triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a
 * mensagem:
 * 
 * Perimetro = XX.X
 * 
 * Em caso negativo, calcule a área do trapézio que tem A e B como base e C
 * como altura, mostrando a mensagem
 * 
 * Area = XX.X
 * 
 * Entrada
 * 
 * A entrada contém três valores reais.
 * 
 * Saída
 * 
 * O resultado deve ser apresentado com uma casa decimal.
*/
#include <stdio.h>
int main()
{
  float a, b, c;

  scanf("%f %f %f", &a, &b, &c);

  int formaUmTriangulo = (b - c) < a && a < (b + c) && (a - c) < b && b < (a + c) && (a - b) < c && c < (a + b);

  if (formaUmTriangulo)
  {
    printf("Perimetro = %.1f\n", a + b + c);
  }
  else
  {
    printf("Area = %.1f\n", ((a + b) * c) / 2);
  }

  return 0;
}