try {
  const invalidJsonString = "{'name': 'John', 'age': 30}";
  const parsedObject = JSON.parse(invalidJsonString);
  console.log(parsedObject); // This won't be executed due to the error
} catch (error) {
  console.error("Error: Invalid JSON string!");
}
