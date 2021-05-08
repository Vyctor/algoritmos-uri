#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
  int maior = -99999999, num, i;

  for (i = 0; i < 3; i++)
  {
    scanf("%d", &num);
    if (num > maior)
    {
      maior = num;
    }
  }

  printf("%d eh o maior\n", maior);

  return 0;
}