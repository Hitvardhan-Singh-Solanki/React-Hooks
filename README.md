# React Hooks
## React 16.8

- Hooks are a new addition to the React Library 
- They are mainly used for converting the class based cmponents to functional components
- as the [official documentation](https://reactjs.org/docs/hooks-intro.html) says *'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.'*


**In this repo I have added all the important hooks with a very trival todo app**

The main hooks covered are:
1. useState: 
    Example: ```const [count, setCount] = useState(0);```
    **What does calling useState do?** It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

    **What do we pass to useState as an argument?** The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

    **What does useState return?** It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used,
    
2. useEffect:
    Example 
    ```javascript 
        useEffect(
            anyFunctionCallToMakeSideEffects, 
            [...variablesToWatchForThisHookToRun]
        );
    ```
    
    *One important thing to note here is the first argument should always be a function and not anything else*
    
    **if you want to use async await syntax in the ```anyFunctionCallToMakeSideEffects``` you create a wrapper function which is created in the app and then return the promise**
    
    if the second argument is set to empty array then this hook will only run on the component mounting thus giving us the functionality of **```ComponentDidMount()```** function call.
    
    **What does useEffect do?** By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

    **Why is useEffect called inside a component?** Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

    **Does useEffect run after every render?** Yes! By default, it runs both after the first render and after every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

    2.1 Running hooks with clean up effect:
        As we know we have a very important lifecycle method in the render cycle of react 
        **```ComponentWillUnMount()```**.
        To Achive such functionality we can call a cleanup function and return that from the function called on first argument of the useEffect hook.
3. useRef
4. useMemo
5. useContext
6. useReducer
7. Creating custom hooks

*Updating the readme, stay tuned...*
