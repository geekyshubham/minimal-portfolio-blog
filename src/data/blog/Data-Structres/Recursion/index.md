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


### Permutation of a String

#### To start with I would like to say that it works something like this

- First we loop through every character in that string.
- Then for every character we call the function recursively to eliminating the selected character and permuting through the remaining string.



#### Source Code:


```cpp
#include<iostream>
using namespace std;

#include <bits/stdc++.h>
#include <string>

void permutes(string str,string ans=""){
    if (str.length()==0){
        cout<<ans<<" ";
        return ;
    }

   for(int i=0;i<str.length();i++){
       char ch = str[i];
       string nxt = str.substr(0,i) + str.substr(1+i);
       permutes(nxt,ans+ch);

   }
}

int main(){
    string str = "abc";
    permutes(str);
return 0;
}

```
##### this is it

