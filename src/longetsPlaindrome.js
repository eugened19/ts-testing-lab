function expandAroundCenter(text, left, right) {
    while (
        left >= 0 &&
        right < text.length &&
        text[left] === text[right]
    ) {
        left--;
        right++;
    }

    return text.slice(left + 1, right);
}

function findLongestPalindrome(text) {
    let longestPalindrome = "";

    for (let i = 0; i < text.length; i++) {
        let currentPalindrome = expandAroundCenter(text, i, i);

        if (currentPalindrome.length > longestPalindrome.length) {
            longestPalindrome = currentPalindrome;
        }

        currentPalindrome = expandAroundCenter(text, i, i + 1);

        if (currentPalindrome.length > longestPalindrome.length) {
            longestPalindrome = currentPalindrome;
        }
    }

    return longestPalindrome;
}

// Tests
console.log(findLongestPalindrome("racecar")); // "racecar"
console.log(findLongestPalindrome("abba"));    // "abba"
console.log(findLongestPalindrome("babad"));   // "bab" or "aba"
console.log(findLongestPalindrome("cbbd"));    // "bb"
console.log(findLongestPalindrome("abc"));     // "a"
console.log(findLongestPalindrome("a"));       // "a"
console.log(findLongestPalindrome(""));        // ""