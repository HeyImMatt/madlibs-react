### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
	* React is a front-end framework (developed by Facebook) to make reusable view components. You use it to build modular, single-page apps. 

- What is Babel?
	* Babel is JavaScript compiler that can transform your syntax to be backwards compatible with older browsers or environments.

- What is JSX?
	* A Syntax extension for JavaScript that allows you to have html in your JavaScript

- How is a Component created in React?
	* By making a function and returning html

- What are some difference between state and props?
	* Props are variables passed down to child components from a parent component. Child components cannot change props. State is still variables, but managed locally by a component.

- What does "downward data flow" refer to in React?
	* Components are intended to be "dumb" in that they receive data passed down by parent components and cannot change that data.

- What is a controlled component?
	* Referring to forms, controlled components allow React to control the form data.

- What is an uncontrolled component?
	* Referring to forms, an uncontrolled component has form data that is not handled by React, but by the DOM itself.

- What is the purpose of the `key` prop when rendering a list of components?
	* Keys give list items a stable identifier that let React keep track of change.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	* Since item order can change in an array it could cause a mismatch between the index as a key referring to the actual item it's supposed to be.

- Describe useEffect.  What use cases is it used for in React components?
	* useEffect is a hook that lets you pass in a callback function to run when a component render or re-render happens. It can be used for API calls to fetch data or if you need to perform an action when a piece of state changes.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	* It returns a mutable object whose valuie is equal to the intial value passed into the hook. It persists across renders.  A change to a ref value does not cause a re-render of a component.

- When would you use a ref? When wouldn't you use one?
	* It is commonly used for accessing underlying DOM elements, and setting up/clearing timers. You don't use it to access/update DOM elements that can be be controlled by React or if the data does not need to persist across renders.

- What is a custom hook in React? When would you want to write one?
	* A custom hook is a wrapper function you define that surrounds existing hook. You would write one  to reuse stateful logic between components.