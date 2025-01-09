# Express.js Asynchronous Operation Handling

This repository demonstrates a common issue in Express.js applications: blocking the main thread with long-running synchronous operations within request handlers.  This can lead to unresponsive applications and poor performance.

## The Problem

The `bug.js` file contains an Express.js application with a request handler that simulates a long-running operation using `setTimeout`.  Because `setTimeout` is asynchronous, this code doesn't immediately block.  However, a real-world scenario, such as database queries or file I/O, can block the thread until the operation is completed, creating an unresponsive application.

## The Solution

The `bugSolution.js` file provides the corrected version, demonstrating how to handle asynchronous operations properly to prevent blocking.