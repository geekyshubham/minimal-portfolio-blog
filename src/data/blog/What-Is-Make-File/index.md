---
title: What Is Make File ?
categories:
    - linux
image: ./make-file.webp
imageCredit: ''
date: '2021-08-12T13:43:43.517Z'
time: 3
description: If you run or update a repetitive task in your terminal, you will find that it takes a lot of time. That's why we use Make File.
lastmod: '2021-08-12T13:51:26.510Z'
slug: make-file
---

![Make File Terminal](./make-file-terminal.png)

<br>

Do you use terminal and a basic code editor like `VIM` or something and want to automate this process or Do you happen to get annoyed by the process of building/compiling and running multiple programs in a row? 

Then this article is for you. It's a short and simple guide to get you started with the `Make File` and `Make` command.

<br>

**What is a Make File?**
---------------------

Make is a utility for managing projects on the command line. It uses a text file that contains a list of rules that specify how to build a project called as MakeFile.

It is a automation tool that will help you to run and compile your programs efficiently and quickly.

So, In this article, I will talk about what is a Make File and how to use it.

<br>


**How to use Make utility**
---------------------

Let's start with a simple example. Suppose you have a project called as **my-project** . So, Let's Create a directory **my-project** and create a file  **Makefile**.

Now, let's see what's inside `Makefile`.

```
say_hello:
    echo "Hello World"
```

> <div class="note"><div class="note-title">Note</div><div class="note-body">Make Sure You Use <strong> Tab </strong> key to indent the code not spaces else it won't work.</div>

Now, Start by typing `make` in your terminal. The output will be something like this.

```bash
$ make
>> echo "Hello World"
Hello World
```

So, The above syntax is a rule that will be executed when you run `make`.

Speaking of the syntax. It's structured as follows.

```makefile
target: dependencies
<TAB>    command
```

Now, let's see an example with multiple targets where i will compile and run a cpp program.

```makefile
compile:
    g++ program.cpp -o program

run:
    ./program

clean:
    rm program

```

> <div class="tip"><div class="tip-title">Tip</div><div class="tip-body">You can use any target name you want instead of compile/run/clean.</div></div>


Check out how it works. We used the targets `compile` and `run` as arguments to `make`. Which performed the actions assigned to it.

```bash
> ls
makefile  program.cpp

> make compile
g++ program.cpp -o out

> make run
./out
Welcome To GeekyShubham

> make clean
rm out
```


Now here's a bit more complex example with something like variable that can be used at multiple place to make it simple I will use the previous example with a bit of changes.

```makefile
#This is a makefile

CPP = g++
CFLAGS = -o
OP = out

all: compile run clean

compile:
        $(CPP) program.cpp $(CFLAGS) $(OP)

run:
        ./$(OP)

clean:
        rm $(OP)
```

Now In this example we have a variable `CPP` that will be used as the g++ compiler similary `CFLAGS` will be used as the compiler flags and `OP` will be used as the output file name.

Now to run multiple targets we can use the `@` symbol but I have used all and it will run all the targets without any arguments.

```bash
> make
g++ program.cpp -o out
./out
Welcome To GeekyShubham
rm out
```

As you can see I didn't use any arugment to run the targets as the all will run by default.

So,That was all for now. Now you know how to use the `Make File` and `Make` utility.If you find this article useful please share it with your friends and let me know if you have any questions or suggestions.

