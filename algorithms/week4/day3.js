/* 
Given by Riot games.
*/
// b: 70
// a:184
// c:42
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let rt_dict = {};
    let key = "";
    let num = "";
    let rt_str = "";

    for (let i = 0; i < s.length; i++) {
        let currentChar = s.substring(i, i + 1);
        if (isNaN(currentChar)) {
            if (num.length > 1) {
                if (rt_dict.hasOwnProperty(key)) {
                    rt_dict[key] += parseInt(num);
                    num = "";
                } else {
                    rt_dict[key] = parseInt(num);
                    num = "";
                }
            }
                key = currentChar;
        }
        else {
            num += currentChar;
        }
    }
    if (num.length > 1) {
        if (rt_dict.hasOwnProperty(key)) {
            rt_dict[key] += parseInt(num);
            num = "";
        } else {
            rt_dict[key] = parseInt(num);
            num = "";
        }
    }
    
    let orderedKeys = Object.keys(rt_dict).sort();
    for (k of orderedKeys) {
        rt_str += k + rt_dict[k];
    }
    return rt_str;
}

console.log("Expected: ", expected1);
console.log("Acutal:   ", rehash(str1));
console.log("");



/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/
// 1 h, 1 e, 3 l, 2 o, 1 r, 1 d
const strA1 = "Hello World";
const strB1 = "lloeh wordl";
//const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    if (s1.length > s2.length){
        return false
    }

    for(i of s1.toLowerCase()){
        if (!s2.toLowerCase().includes(i)){
            return false
        }
        s2 = s2.replace(i,'')
    }
    return true
}

console.log(canBuildS1FromS2(strA1, strB1))
console.log(canBuildS1FromS2(strA2, strB2))
console.log(canBuildS1FromS2(strA3, strB3))
console.log(canBuildS1FromS2(strA4, strB4))
console.log(canBuildS1FromS2(strA5, strB5))