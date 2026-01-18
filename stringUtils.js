// Function to reverse a string [cite: 95]
function reverseString(str) {
    return str.split('').reverse().join('');
}
// Function to capitalize the first letter [cite: 96]
function capitalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Export the functions using module.exports [cite: 71]
module.exports = {
    reverseString,
    capitalize
};