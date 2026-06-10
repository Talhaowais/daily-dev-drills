## 1st Question
<!-- Reverse a string
Input: "hello"
Output: "olleh" -->
```javascript
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
```
## 2nd Question
<!-- Check if a string is a palindrome
Input: "madam"
Output: true -->
```javascript
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
```
## 3rd Question
<!-- Count total characters in a string (without using .length)
Input: "Talha"
Output: 5 -->
```javascript
function countChars(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}
```
## 4th Question
<!-- Count number of vowels in a string
Input: "javascript"
Output: 3 -->
```javascript
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
```
## 5th Question
<!-- Count number of consonants in a string -->
```javascript
function countConsonants(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (
      char.toLowerCase() >= 'a' &&
      char.toLowerCase() <= 'z' &&
      !vowels.includes(char)
    ) {
      count++;
    }
  }
  return count;
}
```
## 6th Question
<!-- Convert a string to uppercase without using .toUpperCase() -->
```javascript
function toUpper(str) {
  let result = "";

  for (let char of str) {
    let code = char.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += char;
    }
  }
  return result;
}
```
## 7th Question
<!-- Convert a string to lowercase without using .toLowerCase() -->
```javascript
function toLower(str) {
  let result = "";

  for (let char of str) {
    let code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else {
      result += char;
    }
  }
  return result;
}
```
## 8th Question
<!-- Remove all spaces from a string
Input: "hello world"
Output: "helloworld" -->
```javascript
function removeSpaces(str) {
  let result = "";

  for (let char of str) {
    if (char !== " ") {
      result += char;
    }
  }
  return result;
}
```
## 9th Question
<!-- Find the first non-repeating character
Input: "aabbcdd"
Output: "c" -->
```javascript
function firstNonRepeating(str) {
  let freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}
```
## 10th Question
<!-- Check if two strings are anagrams
Input: "listen", "silent"
Output: true     -->
```javascript
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freq = {};

  for (let char of str1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}
```
//............................................................................................//
## 11th Question
```javascript

```
## 12th Question
```javascript

```
## 13th Question
```javascript

```
## 14th Question
```javascript

```
## 15th Question
```javascript

```
## 16th Question
```javascript

```
## 17th Question
```javascript

```
## 18th Question
```javascript

```
## 19th Question
```javascript

```
## 20th Question
```javascript

```