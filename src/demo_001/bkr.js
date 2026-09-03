// a function that takes an array as a parameter and return all consecutive triplets formed by prime numbers in a new array of arrays
function findConsecutivePrimeTriplets(arr) {
    const isPrime = (num) => {
        if (!Number.isInteger(num) || num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        const limit = Math.sqrt(num);
        for (let i = 3; i <= limit; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const primes = arr.filter(isPrime);
    const triplets = [];

    for (let i = 0; i < primes.length - 2; i++) {
        triplets.push([primes[i], primes[i + 1], primes[i + 2]]);
    }

    return triplets;
}

// Unit tests
function runTests() {
    function assert(condition, message) {
        if (!condition) {
            console.error(`❌ FAILED: ${message}`);
        } else {
            console.log(`✓ PASSED: ${message}`);
        }
    }

    function arraysEqual(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    // Test 1: Example case with mixed numbers
    const test1 = findConsecutivePrimeTriplets([11, 5, 4, 154, 2, 3, 22, 12, 176, 5, 7, 11, 13, 17, 19]);
    assert(arraysEqual(test1, [[2, 3, 5], [3, 5, 7], [5, 7, 11], [7, 11, 13], [11, 13, 17], [13, 17, 19]]), 'Example case with mixed numbers');
    console.log(test1);
    // Test 2: Empty array
    const test2 = findConsecutivePrimeTriplets([]);
    assert(arraysEqual(test2, []), 'Empty array returns empty result');

    // Test 3: Array with less than 3 elements
    const test3 = findConsecutivePrimeTriplets([2, 3]);
    assert(arraysEqual(test3, []), 'Array with less than 3 elements returns empty result');

    // Test 4: No prime triplets
    const test4 = findConsecutivePrimeTriplets([1, 4, 6, 8, 9, 10]);
    assert(arraysEqual(test4, []), 'No prime triplets returns empty result');

    // Test 5: All primes
    const test5 = findConsecutivePrimeTriplets([2, 3, 5, 7, 11]);
    assert(arraysEqual(test5, [[2, 3, 5], [3, 5, 7], [5, 7, 11]]), 'All prime numbers');

    // Test 6: Single prime triplet
    const test6 = findConsecutivePrimeTriplets([1, 2, 3, 5, 4]);
    assert(arraysEqual(test6, [[2, 3, 5]]), 'Single prime triplet');
}

runTests();

// Example usage:
const inputArray = [11, 5, 4, 154, 2, 3, 22, 12, 176, 5, 7, 11, 13, 17, 19];
const result = findConsecutivePrimeTriplets(inputArray);
console.log(result); // Output: [[2, 3, 5], [3, 5, 7], [5, 7, 11], [7, 11, 13], [11, 13, 17], [13, 17, 19]]  

// apply findConsecutivePrimeTriplets() to the form submission event listener
document
    .getElementById("prime-triplets-form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        const numbersInput = document.getElementById("numbers").value;
        const numbersArray = numbersInput.split(",").map(Number);
        const triplets = findConsecutivePrimeTriplets(numbersArray);
        document.getElementById("prime-triplets-result").textContent = JSON.stringify(triplets);
    }); 