#include <stdio.h>
#include "lists.h"

/**
* is_palindrome: This function check id f the linked list is palindrome
* @head: This is the head of the linked list
* Return: 0 is not is aplindrome or 1 if is palindrome
*/
int is_palindrome(listint_t **head)
{
    listint_t **copy = head;
    int palin[100];
    int count = 0;

    while (*copy != NULL) {
        palin[count] = (*copy)->n;
        copy = &(*copy)->next;
        count++;
    }
    printf("%d\n", palin[1]);
    // Rest of your code
    return 0; // Return a value to indicate the result of the palindrome check
}
