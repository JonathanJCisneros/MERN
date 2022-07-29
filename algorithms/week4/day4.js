// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb"; // abc, bca, cab
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew"; // pw, wke, 
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf"; // dva, vadf
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    const arr = []
    let subLength = 0
    for(let i = 0; i<str.length; i++){
        let position = arr.indexOf(str[i])
        if(position !== -1){
            arr.splice(0,position+1)
        }
        arr.push(str[i])
        if(subLength < arr.length){ 
            subLength = arr.length
        }
    }
    return subLength
}

console.log(lengthOfLongestSubString(str1))
console.log(lengthOfLongestSubString(str2))
console.log(lengthOfLongestSubString(str3))
console.log(lengthOfLongestSubString(str4))
/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
// const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
// const expected3 = 16;

const heights4 = [1, 2, 1];
// const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    let max = 0;

    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            const length = j - i;
            const height = Math.min(heights[i], heights[j]);
            const area = length * height;
            area > max && (max = area);
        }
    }
    return max;
}

console.log(containerWithMostWater(heights1))
console.log(containerWithMostWater(heights2))
console.log(containerWithMostWater(heights3))
console.log(containerWithMostWater(heights4))
