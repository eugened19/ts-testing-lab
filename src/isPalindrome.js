function isPalindrome(text) {
    let left = 0;
    let right = text.length - 1;

    while (left < right) {
        if (!/[a-z0-9]/i.test(text[left])) {
            left++;
            continue;
        }

        if (!/[a-z0-9]/i.test(text[right])) {
            right--;
            continue;
        }

        if (text[left].toLowerCase() !== text[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Tests
console.log(isPalindrome("racecar"));                       // true
console.log(isPalindrome("Racecar"));                       // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                    // false
console.log(isPalindrome(""));                              // true
console.log(isPalindrome("!!!"));                           // true
console.log(isPalindrome("0P"));                            // false