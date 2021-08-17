---
lastmod: '2021-08-17T12:28:50.178Z'
title: Endianness
categories:
    - Computer Science
image: ./endianness.webp
imageCredit: 'https://thebittheories.com/'
date: '2021-08-17T12:11:58.552Z'
time: 5
description: Endianness order of bytes is formatting at byte level of data stored in memory of 8-bit memory locations.
slug: big-little-endian
---

## Little Endian Big Endian



![Big-Little-Endianness](big-little-endianness.png)



Endianness Is how you computer stores the values bigger than One Byte memory where each of the memory location is made up of 8-bit locations.

So, How do we map such 16 bit value or 32 bit value and so on into memory locations made up of 8-bit.

Endianness is expressed as **big-endian** (**BE**) or **little-endian** (**LE**)

Did you know that Intel Chips happen to store the nos. in reverse order it's because Intel designed the processor before the 8086 and 80286 and so on they made some decisions to do with 8-bit values and even before that even with processing bits of numbers that meant they wanted to process the least significant bit first and as a result now all these years Intel is still using the small endian where numbers are actually stored backward.


<br>
<br>




## Little Endian 

**Least Significant Part Comes First [The Little End]**

e.g. 298 in binary is  `0000 0001 0010 1010`

in Little Endian It will be 

`0010 1010 0000 0001`



Advantages:

- A bit faster in some operations like addition.
- Hardware Is simpler to design.

Disadvantages:

- Hard Readability/Debugging.
- Harder to build CPU Instructions as of reverse ordering makes it difficult in visualization.

Manufactures Who Use Little Endian:  Intel x86 | AMD x86 | ARM 




<br>
<br>


## Big Endian 

**Most Significant Part Comes First [The Big End]**

e.g. 298 in binary is  `0000 0001 0010 1010`

in Big Endian It will be 

`0000 0001 0010 1010`

Manufactures Who Use Big Endian: Macintosh System | IBM PC's  | Atari

Advantages:

- RIGHT/LEFT Shifting can be easily achieved. 
- No translation required in case of Bytes sent across Internet (Network Byte Order). When multiple computers are communicating they use Big Endian So, Little Endian might need a software level translation in order to communicate effectively.



There is also Middle Endian also know *mixed-endian* , for more on that refer [Wiki](https://en.wikipedia.org/wiki/Endianness#PDP-endian)




<br>
<br>


## Why do we even have these two systems?

Well It actually doesn't matter unless the software / hardware  is working just as good with what endianness It supports as Intel was using using it since long back they continued with it and also modern CPU's have become so powerful that difference is negligible even if we consider translation is required for special cases like on communication channels.

<br>
<br>
