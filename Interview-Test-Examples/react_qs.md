## 1st: What is React, and why do we use it instead of plain JavaScript?
```javascript 
React is a JavaScript library used for building user interfaces, especially single-page applications. It allows developers to create reusable UI components, which makes code more maintainable and scalable.

One of the key reasons we use React instead of plain JavaScript is its Virtual DOM, which improves performance by updating only the necessary parts of the UI instead of reloading the whole page. React also promotes a component-based architecture and unidirectional data flow, making applications easier to manage and debug.
```

## 2nd: What is the Virtual DOM, and how does it work?
```javascript 
The Virtual DOM is a lightweight copy of the real DOM maintained by React. When the state or props of a component change, React creates a new Virtual DOM tree and compares it with the previous one using a process called diffing(its an algorith)

React then calculates the minimal changes required and updates only those parts in the real DOM. This process is called reconciliation and it improves performance by avoiding unnecessary full DOM updates.
```

## 3rd: What is the difference between state and props in React?
```javascript 
Props are used to pass data from a parent component to a child component and are read-only. State, on the other hand, is managed within a component and can be updated to make the UI dynamic. Props are immutable, while state is mutable.
``` 

## 4th: What is a functional component? How is it different from a class component?
```javascript 
Functional components are simple JavaScript functions used to build UI, and they can use hooks to manage state and lifecycle. Class components are ES6 classes that use this.state and lifecycle methods. Nowadays, functional components are preferred because they are simpler and more readable.
```

## 5th: What is a Hook in React? Can you name a few commonly used hooks?
```javascript 
Hooks are functions in React that allow us to use state and other React features inside functional components. Before hooks, these features were only available in class components.

Commonly used hooks include:

useState → for managing state
useEffect → for side effects (API calls, lifecycle behavior)
useRef → for accessing DOM elements or persisting values
useContext → for global state management
```

## 6th: What is useState and how does it work? Explain with an example.
```javascript 
useState is a hook used to manage state in functional components. It returns a state variable and a function to update it. When the state updates, the component re-renders automatically.
```
```javascript 
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

## 7th: What is useEffect and when do we use it?
```javascript 
useEffect is used to handle side effects like API calls, event listeners, or timers in functional components. It runs after the component renders and can be controlled using a dependency array.
```
```javascript
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <div>{users.length}</div>;
}

1. No Dependency Array
useEffect(() => {
  console.log("Runs on every render");
});
👉 Runs on every render

2. Empty Dependency Array
useEffect(() => {
  console.log("Runs only once");
}, []);
👉 Runs only on mount (like componentDidMount)

3. With Dependencies
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
👉 Runs:
On mount
When count changes

4. Cleanup Function (VERY IMPORTANT 🔥)
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
👉 Cleanup runs:
Before unmount
Before next effect runs
```

## 8th: What is the difference between useEffect and useLayoutEffect?
```javascript 
useEffect runs after the component is rendered and painted to the screen, while useLayoutEffect runs before the browser paints. useLayoutEffect is used for DOM measurements or layout changes to avoid visual glitches.
```

## 9th: What is lifting state up in React?
```javascript 
Lifting state up is moving the state to a common parent so that multiple components can share and update the same data. It ensures a single source of truth.
```

## 10th: What is the difference between controlled and uncontrolled components in React?
```javascript 
Controlled components use React state to manage form data, while uncontrolled components rely on the DOM using refs. Controlled components are preferred because they provide better control and validation.
```

## 11th: What is React Router and why do we use it?
```javascript 
React Router is a library used for handling navigation in React applications. It allows us to create different routes (pages) in a single-page application without reloading the page. It enables dynamic routing and improves user experience.
```

## 12th: What is a Single Page Application (SPA)?
```javascript 
A Single Page Application is a web application that loads a single HTML page and dynamically updates the content without reloading the entire page. React is commonly used to build SPAs.
```

## 13th: What is useContext?
```javascript 
useContext is a React Hook used to access global data without passing props manually through every level (prop drilling). It works with the Context API.
```

## 14th: What is Prop Drilling?
```javascript 
Prop drilling is the process of passing data from a parent component to deeply nested child components through multiple layers, even if intermediate components do not need the data.
```

## 15th: How do you prevent unnecessary re-renders in React?
```javascript 
We can prevent unnecessary re-renders using techniques like:

React.memo
useMemo
useCallback
Proper state management
```

## 16th: What is React.memo?
```javascript 
React.memo is a higher-order component that prevents re-rendering of a component if its props have not changed.
```

## 17th: What is useMemo?
```javascript 
useMemo is a hook used to memoize a computed value so it is not recalculated on every render unless its dependencies change.
```

## 18th: What is useCallback?
```javascript 
useCallback is a hook that memoizes a function so it is not recreated on every render unless its dependencies change.
```

## 19th: What is the difference between useMemo and useCallback?
```javascript 
useMemo memoizes a value, while useCallback memoizes a function.
```

## 20th: What is key prop in React?
```javascript 
The key prop is a unique identifier used in lists to help React identify which items have changed, been added, or removed. It improves performance during re-rendering.
```

## 21st:
```javascript 

```

## 22nd:
```javascript 

```