# Silent Crash in Express.js Application

This repository demonstrates a common yet subtle issue in Express.js applications: silent crashes due to unhandled exceptions or promise rejections.  The application runs, but without any informative error messages in the console when an error occurs, making debugging significantly harder.

The `bug.js` file contains the problematic code, and `bugSolution.js` provides a solution demonstrating proper error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Observe that the server starts but crashes without any meaningful error messages when the unhandled exception is triggered (currently commented out). Uncomment the error-causing line in `bug.js` to reproduce the silent crash.

## Solution

The `bugSolution.js` file shows how to implement proper error handling using a centralized error handler middleware. This middleware catches unhandled exceptions and rejections, providing informative error messages to the console and potentially sending appropriate error responses to the client.  This makes debugging easier and leads to more robust application behavior.
