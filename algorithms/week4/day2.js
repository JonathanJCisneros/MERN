/* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/


const objects = [
    {
        name: "Baby Yoda",
        category: "cute",
    },
    {
        name: "Cricket Protein",
        category: "food",
    },
    {
        name: "Groot",
        category: "Cute",
    },
    {
        name: "Ancient India",
        category: "Cradle of Civilization",
    },
    {
        name: "Wasp Crackers",
        category: "Food",
    },
    {
        name: "The Fertile Crescent",
        category: "Cradle of Civilization",
    },
];

const expected = {
    cute: [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Groot",
            category: "Cute",
        },
    ],
    food: [
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
    ],
    "cradle of civilization": [
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ],
};

/* 
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
  */
function groupObjects(items) {
    const categoryGroups = {}

    for (let i = 0; i < items.length; i++) {
        if (categoryGroups.hasOwnProperty(items[i].category.toLowerCase())) {
        //Check if category already exists in Dictionary
            categoryGroups[items[i].category.toLowerCase()].push(items[i])
        //If the category does exist, push it to the list 
        } else {
            categoryGroups[items[i].category.toLowerCase()] = [items[i]]
        //if it doesn't exist already, establish the category as a list 
        }
    }
    return categoryGroups
}

console.log(groupObjects(objects))



/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.
    i.e., after processing the backspaces, are the two strings equal?
    Bonus: solve in O(n) time
  */

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
  // Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
  // Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
  // Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
  // Explanation: S becomes "c" while T becomes "b".

/**
   * Determines if the given strings are equal after the backspace characters
   * "#" are processed.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} S
   * @param {string} T
   * @returns {boolean} Whether the given strings are equal after backspaces
   *    have been processed.
   */
function backspaceStringCompare(S, T) {
    const arr1 = []
    const arr2 = []
    for (letter of S) {
        if (letter === "#") {
            arr1.pop()
        } else {
            arr1.push(letter)
        }
    }
    for (letter of T) {
        if (letter === "#") {
            arr2.pop()
        } else {
            arr2.push(letter)
        }
    }

    return arr1.join("") === arr2.join("") ? true : false
}

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))

