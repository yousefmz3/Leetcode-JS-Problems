# Leetcode-JS-Problems
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=30&duration=3000&pause=1000&color=00FF00&background=FFFFF00&center=true&vCenter=true&width=1245&lines=leetcode+problems+solustion)](https://git.io/typing-svg)
----
## 🎯Problems 
### 1 - Given an integer n, return the decimal value of 
### the binary string formed by concatenating the binary 
### representations of 1 to n in order, modulo ( 10^9 + 7 ).
#### Source => [Link](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/7613775/efficient-binary-concatenation-using-bit-3fc1/?envType=daily-question&envId=2026-02-28)
-------
### 2 - Write a function that checks if a given value is an
### instance of a given class or superclass. For this problem, 
### an object is considered an instance of a given class if that 
### object has access to that class's methods.

#### => There are no constraints on the data types that can be passed 
#### to the function. For example, the value or the class could be undefined.
#### Source => [Link](https://leetcode.com/problems/check-if-object-instance-of-class/description/)
-------
### 3 -You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.
### In one operation, select any index i such that 0 < i < words.length and words[i - 1] and 
### words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as 
### you can select an index that satisfies the conditions.

#### Return words after performing all operations. 
#### It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.
#### An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all 
#### the original letters exactly once. For example, "dacb" is an anagram of "abdc".
#### Source => [Link](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/?envType=daily-question&envId=2026-02-28)
-------
### 4 - Reverse Linked List
### Given the head of a singly linked list, reverse the list, and return the reversed list.
#### Source => [Link](https://leetcode.com/problems/reverse-linked-list/description/)
-------
### 5 - Split Linked List in Parts
### Given the head of a singly linked list and an integer k,
### split the linked list into k consecutive linked list parts.
### The length of each part should be as equal as possible: no
### two parts should have a size differing by more than one. This may lead to some parts being null.
### The parts should be in the order of occurrence in the input list, 
### and parts occurring earlier should always have a size greater than or equal to parts occurring later.
#### Return an array of the k parts.
#### Source => [Link](https://leetcode.com/problems/split-linked-list-in-parts/description/)
-------
### 6 - Reverse String
### Write a function that reverses a string. The input string is given as an array of characters s.
### You must do this by modifying the input array in-place with O(1) extra memory.
#### Source => [Link](https://leetcode.com/problems/reverse-string/description/)
-------
### 7 - Reverse String II
### Given a string s and an integer k, reverse the first k characters for every 2k characters 
### counting from the start of the string.
### If there are fewer than k characters left, reverse all of them. 
### If there are less than 2k but greater than or equal to k characters,
### then reverse the first k characters and leave the other as original.
#### Source => [Link](https://leetcode.com/problems/reverse-string-ii/description/)
-------
### 8 - Valid Palindrome
### A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
### and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric 
### characters include letters and numbers.
### Given a string s, return true if it is a palindrome, or false otherwise.
#### Source => [Link](https://leetcode.com/problems/valid-palindrome/description/)
-------
### 9 - Valid Palindrome II
### Given a string s, return true if the s can be palindrome after deleting at most one character from it.
#### Source => [Link](https://leetcode.com/problems/valid-palindrome-ii/description/)
-------
### 10 - Valid Parenthesis String
### Given a string s containing only three types of characters: '(', ')' and '*', return ### true if s is valid.
### The following rules define a valid string:

### Any left parenthesis '(' must have a corresponding right parenthesis ')'.
### Any right parenthesis ')' must have a corresponding left parenthesis '('.
### Left parenthesis '(' must go before the corresponding right parenthesis ')'.
### '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' ### or an empty string "".

#### Source => [Link](https://leetcode.com/problems/valid-parenthesis-string/description/)
-------
### 11 - Sqrt(x)

### Given a non-negative integer x, return the square root of x rounded down to
### the nearest integer. The returned integer should be non-negative as well.
### You must not use any built-in exponent function or operator.
### For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

#### Source => [Link](https://leetcode.com/problems/sqrtx/description/)
-------
### 12 - Event Emitter
### Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target ### interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

### Your EventEmitter class should have the following two methods:

### subscribe - This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.
### An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to subscribe are referentially identical.
### The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.

### emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.

#### Source => [Link](https://leetcode.com/problems/event-emitter/description/)
-------
### 13 - Two Sum 
#### Source => [Link](https://leetcode.com/problems/two-sum/)
-------
### 14 - Contains Duplicate
#### Source => [Link](https://leetcode.com/problems/contains-duplicate/submissions/1974195164/)
-------
### 15 - Valid Anagram
#### Source => [Link](https://leetcode.com/problems/valid-anagram/)
-------
### 16 - Min Stack
#### Source => [Link](https://leetcode.com/problems/min-stack/)
-------
### 17 - Min Stack
#### Source => [Link](https://leetcode.com/problems/implement-queue-using-stacks/description/)
-------
### 18 - Number of Recent Calls
#### Source => [Link](https://leetcode.com/problems/number-of-recent-calls/)
-------
### 19 - Merge Two Sorted Lists
#### Source => [Link](https://leetcode.com/problems/merge-two-sorted-lists/description/)
-------
### 20 - LRU Cache
#### Source => [Link](https://leetcode.com/problems/lru-cache/)
-------
### 21 - Clumsy Factorial
#### Source => [Link](https://leetcode.com/problems/clumsy-factorial/)
-------
### 22 - Fibonacci Number
#### Source => [Link](https://leetcode.com/problems/fibonacci-number/description/)
-------
### 23 - Subsets
#### Source => [Link](https://leetcode.com/problems/subsets/description/)
-------