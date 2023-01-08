<div class="UTt8LAiI0KNbH5fGn8ZQ"><h3 class="EYF_x0Pt41wTZf6sAmlH">Key Terms</h3><ul class="SBwpVU5vqBpXi9qa50lp"><li><h4 class="MeFGWxW4GIK5soMCM_Qe">Array</h4><div class="wER9hC6Ayr8OWkXr4hrQ default"><div class="html">
<p>
  A linear collection of data values that are accessible at numbered indices,
  starting at index 0.
</p>
<p>
  The following are an array's standard operations and their corresponding time
  complexities:
</p>
<ul>
  <li><b>Accessing a value at a given index</b>: O(1)</li>
  <li><b>Updating a value at a given index</b>: O(1)</li>
  <li><b>Inserting a value at the beginning</b>: O(n)</li>
  <li><b>Inserting a value in the middle</b>: O(n)</li>
  <li>
    <b>Inserting a value at the end</b>:
    <ul>
      <li>amortized O(1) when dealing with a <b>dynamic array</b></li>
      <li>O(n) when dealing with a <b>static array</b></li>
    </ul>
  </li>
  <li><b>Removing a value at the beginning</b>: O(n)</li>
  <li><b>Removing a value in the middle</b>: O(n)</li>
  <li><b>Removing a value at the end</b>: O(1)</li>
  <li><b>Copying the array</b>: O(n)</li>
</ul>
<p>
  A static array is an implementation of an array that allocates a fixed amount
  of memory to be used for storing the array's values. Appending values to the
  array therefore involves copying the entire array and allocating new memory
  for it, accounting for the extra space needed for the newly appended value.
  This is a linear-time operation.
</p>
<p>
  A dynamic array is an implementation of an array that preemptively allocates
  double the amount of memory needed to store the array's values. Appending
  values to the array is a constant-time operation until the allocated memory is
  filled up, at which point the array is copied and double the memory is once
  again allocated for it. This implementation leads to an amortized
  constant-time insertion-at-end operation.
</p>
<p>
  A lot of popular programming languages like JavaScript and Python implement
  arrays as dynamic arrays.
</p>
</div></div></li></ul></div>
