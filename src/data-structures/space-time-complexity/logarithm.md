**Logarithm**
A mathematical concept that's widely used in Computer Science and that's defined by the following equation:

log<sub>b</sub>(x) = y if and only if b<sup>y</sup> = x

In the context of coding interviews, the logarithm is used to describe the complexity analysis of algorithms, and its usage always implies a logarithm of base 2. In other words, the logarithm used in the context of coding interviews is defined by the following equation:

log(n) = y if and only if 2<sup>y</sup> = n

In plain English, if an algorithm has a logarithmic time complexity (O(log(n)), where n is the size of the input), then whenever the algorithm's input doubles in size (i.e., whenever n doubles), the number of operations needed to complete the algorithm only increases by one unit. Conversely, an algorithm with a linear time complexity would see its number of operations double if its input size doubled.

As an example, a linear-time-complexity algorithm with an input of size 1,000 might take roughly 1,000 operations to complete, whereas a logarithmic-time-complexity algorithm with the same input would take roughly 10 operations to complete, since 210 ~= 1,000.



log(1) = 0 => 2<sup>0</sup> = 1

log(4) = 2 => 2<sup>2</sup> = 4


log(N) => ? => 2<sup>?</sup> = N



Eg : binary tree  a perfect node tree , where each node has the same number of child nodes , so when moving down the tree, 
we are elimating the half of the nodes at each step





[0, 1, 2, 3, 4, 5, 6,7]


finding  number in a sorted array using binary search !