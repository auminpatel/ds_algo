**Big O Notation**
The notation used to describe the **time complexity** and **space complexity** of algorithms.

Variables used in Big O notation denote the sizes of inputs to algorithms. For example, O(n) might be the time complexity of an algorithm that traverses through an array of length n; similarly, O(n + m) might be the time complexity of an algorithm that traverses through an array of length n and through a string of length m.

The following are examples of common complexities and their Big O notations, ordered from fastest to slowest:

- Constant: O(1)
- Logarithmic: O(log(n))
- Linear: O(n)
- Log-linear: O(nlog(n))
- Quadratic: O(n<sup>2</sup>)
- Cubic: O(n<sup>3</sup>)
- Exponential: O(2<sup>n</sup>)
- Factorial: O(n!)


- Note that in the context of coding interviews, Big O notation is usually understood to describe the worst-case complexity of an algorithm, even though the worst-case complexity might differ from the average-case complexity.

For example, some sorting algorithms have different time complexities depending on the layout of elements in their input array. In rare cases, their time complexity will be much worse than in more common cases. Similarly, an algorithm that takes in a string and performs special operations on uppercase characters might have a different time complexity when run on an input string of only uppercase characters vs. on an input string with just a few uppercase characters.

Thus, when describing the time complexity of an algorithm, it can sometimes be helpful to specify whether the time complexity refers to the average case or to the worst case (e.g., "this algorithm runs in O(nlog(n)) time on average and in O(n2) time in the worse case").





Algorithms  (Asymtotic Analysis)

a = [....]
     a.size = N

n -> infinity

Eg: f1(a) =>  1 + a[0]   O(1)
    f2(a) => sum(a)      O(n)
    f3(a) => pair(a)     O(n<sup>2</sup>)



The input 1 or n is more ever called has elementary operations!


f4(a) = f3(a) + f2(a) + f1 (a)
      = O(n<sup>2</sup> + n + 1) (since n moves to infinity)
      = O(n<sup>2</sup> )




Big O notation generally refers to the worst case scenarion ! 

there can be three options based on the inputs 
eg: for quick sort 
worst case, average case and best case





### Big O Notation

*Big O notation* is used to classify algorithms according to how their running time or space requirements grow as the input size grows.
On the chart below you may find most common orders of growth of algorithms specified in Big O notation.

![Big O graphs](../../assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Below is the list of some of the most used Big O notations and their performance comparisons against different sizes of the input data.

| Big O Notation | Type        | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ----------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | Constant    | 1                            | 1                             | 1                               |
| **O(log N)**   | Logarithmic | 3                            | 6                             | 9                               |
| **O(N)**       | Linear      | 10                           | 100                           | 1000                            |
| **O(N log N)** | n log(n)    | 30                           | 600                           | 9000                            |
| **O(N^2)**     | Quadratic   | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | Exponential | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | Factorial   | 3628800                      | 9.3e+157                      | 4.02e+2567                      |
