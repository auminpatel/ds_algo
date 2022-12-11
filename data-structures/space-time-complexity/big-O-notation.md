**Big O Notation**
The notation used to describe the **time complexity** and **space complexity** of algorithms.

Variables used in Big O notation denote the sizes of inputs to algorithms. For example, O(n) might be the time complexity of an algorithm that traverses through an array of length n; similarly, O(n + m) might be the time complexity of an algorithm that traverses through an array of length n and through a string of length m.

The following are examples of common complexities and their Big O notations, ordered from fastest to slowest:

- Constant: O(1)
- Logarithmic: O(log(n))
- Linear: O(n)
- Log-linear: O(nlog(n))
- Quadratic: O(n2)
- Cubic: O(n3)
- Exponential: O(2n)
- Factorial: O(n!)


- Note that in the context of coding interviews, Big O notation is usually understood to describe the worst-case complexity of an algorithm, even though the worst-case complexity might differ from the average-case complexity.

For example, some sorting algorithms have different time complexities depending on the layout of elements in their input array. In rare cases, their time complexity will be much worse than in more common cases. Similarly, an algorithm that takes in a string and performs special operations on uppercase characters might have a different time complexity when run on an input string of only uppercase characters vs. on an input string with just a few uppercase characters.

Thus, when describing the time complexity of an algorithm, it can sometimes be helpful to specify whether the time complexity refers to the average case or to the worst case (e.g., "this algorithm runs in O(nlog(n)) time on average and in O(n2) time in the worse case").
