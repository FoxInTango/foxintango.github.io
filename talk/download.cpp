#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main ()
{
    for(int i = 0;i < 100;i ++){
        char is[8];
        char command[128];
        memset(is, 0, 8);
        memset(is, 0, 128);
        //itoa(i,is,10);
        snprintf(is, 8, "%d", i);
        strcat(command, "curl -o ./圣经/");
        strcat(command, is);
        strcat(command, ".html  http://www.godcom.net/deyu/1_Mose_");
        strcat(command, is);
        strcat(command, ".html");
        printf("command : %s \n", command);
        system(command);
    }
    return(0);
}
