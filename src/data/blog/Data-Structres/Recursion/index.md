---
title: Permutations of a string using recursion.
categories:
    - dsa
    - recursion
    - permutation
image: ./image.webp
imageCredit: 'https://www.techiedelight.com'
date: '2021-07-22T16:22:43.960Z'
time: 5
description: It describes how recursively a problem such like permutations can be solved by dividing the problem into subproblems.
lastmod: '2021-07-22T16:22:45.508Z'
slug: permutations-string-recursion-
---



What is Permutation?
---------------------
It means to take a string and to permute all the characters of the string.

Alogorithm
---------------------

+ First we loop through every character in that string.
+ Then for every character we call the function recursively [Current Character]
+ For every recursion we take the  preceding charactes and procedding characters and put them in a new string. [nextString]
+ Simultaneously we check whether the length of string is 0. If so we print the permutation.

#### Source Code


```cpp    

#include<iostream>
using namespace std;

void permutes(string str,string permute=""){
    if(str.length() == 0 ){
    cout<<permute<<endl;
    return;
    }

    for(int i=0;i<str.length();i++){
        char currentCharacter = str[i];
        nextString = str.substr(0,i) + str.substr(i+1);
        permutation(nextString,permute+currentCharacter);
    }
}

```


