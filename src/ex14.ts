// Create an interface `UserProfile` with properties `username`, `email`, and an optional `lastLogin` date.
// Write a function `getLastLoginMessage` that returns the last login date if available, otherwise a "No login recorded" message using nullish coalescing.
// Return type: string.

interface UserProfile {
  
}

function getLastLoginMessage(user) {
  
}

// Expected output:
getLastLoginMessage({ username: "user1", email: "user1@example.com", lastLogin: new Date() })
// logs the date as a string
getLastLoginMessage({ username: "user2", email: "user2@example.com" })
// "No login recorded"