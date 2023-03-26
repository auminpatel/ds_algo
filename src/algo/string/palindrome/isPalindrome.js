export function isPalindrome( string) {

  let left = 0;
  let right = string.length -1 
  
  while(left<right) {
    if(string[left]!==string[right]) {
      return false;
    }

    left = left+1;
    right = right-1
  }
  return true
}