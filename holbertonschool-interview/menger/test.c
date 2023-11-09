#include "menger.h"
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

/**
*
*
*
*/
void print_menger(int posx, int posy, int col, int row, int c1, int r1, int r2, int c2, int r3, int c3) {
   if ((posx == 2 && posy == 2) || (col == 2 && row == 2) || (c1 == 2 && r1 == 2) || (c2 == 2 && r2 == 2) || (c3 == 2 && r3 == 2))
       printf(" ");
   else
       printf(".");
}

void menger(int level)
{
int size = pow(3, level);
int y, x, posx = 1, posy = 1, row = 1, col = 1, c1 = 1, r1 = 1, r2 = 1, c2 = 1, r3 = 1, c3 = 1, r4 = 1, c4 = 1;

for (y = 1; y <= size; y++)
{
    for (x = 1; x <= size; x++)
    {

        if (posx == 4)
        {
            posx = 1;
            col++;
        }
        if (col == 4)
        {
            col = 1;
            c1++;
        }
        if (r1 == 4)
        {
            r1 = 1;
            r2++;
        }
        if (r2 == 4)
        {
            r2 = 1;
            r3++;
        }
        if (r3 == 4)
            r3 = 1;
        if (c1 == 4)
        {
            c1 = 1;
            c2++;
        }
        if (c2 == 4)
        {
            c2 = 1;
            c3++;
        }
        if (c3 == 4)
            c3 = 1;
        print_menger(posx, posy, col, row, c1, r1, r2, c2, r3, c3);
        posx++;
    }
    c3 = 1;
    c2 = 1;
    c1 = 1;
    col = 0;
    if (posy == 3)
        row++;
    if (row == 4)
    {
        row = 1;
        r1++;
    }
    if (posy == 4)
        posy = 1;
    if (c1 == 4)
    {
        c1 = 1;
        c2++;
    }
    if (c2 == 4)
    {
        c2 = 1;
        c3++;
    }
    printf("\n");
    posy++;
}
}