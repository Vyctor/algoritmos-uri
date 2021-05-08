#include <stdio.h>
#include <math.h>

#define PI 3.14159
int main()
{
  double raio, volumeEsfera;

  scanf("%lf", &raio);

  volumeEsfera = (4.0 / 3) * PI * pow(raio, 3);

  printf("VOLUME = %.3lf\n", volumeEsfera);

  return 0;
}