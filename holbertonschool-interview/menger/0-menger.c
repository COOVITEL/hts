#include "menger.h"
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

/**
*
*
*
*/
void menger(int level)
{
int size = pow(3, level);
int y, x;

for (y = 1; y <= size; y++)
{
    for (x = 1; x <= size; x++)
    {
        printf("%d", x);
    }
    printf("\n");
}
}