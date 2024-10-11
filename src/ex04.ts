// Create a generic function `mergeObjects` that takes two objects and merges them.
// - The objects should have a mandatory `id` field.
// - Allow partial updates to one of the objects using `Partial`.
// - Use constraints to enforce the `id` field.
// - Return type: merged object with both original and updated fields.

interface Identifiable {
  id: number;
}

function mergeObjects(obj1, obj2) {
  
}

// Expected output:
mergeObjects({ id: 1, name: "Alice" }, { name: "Bob" })
// { id: 1, name: "Bob" }