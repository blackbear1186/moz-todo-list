
import React from 'react';
import Form from './components/ui/Form';


/*
We want our handleSubmit() function to ultimately help us create a new task, so we need 
a way to pass information from <Form /> to <App />. We can't pass data from child to parent 
in the same way as we pass data from parent to child using standard props. Instead, we can 
write a function in <App /> that will expect some data from our form as an input, then pass 
that function to <Form /> as a prop. This function-as-a-prop is called a callback prop. Once
 we have our callback prop, we can call it inside <Form /> to send the right data to <App />
 */
function App() {
  // 1. Create addTask function and pass addTask function into Form as a prop; callback prop
  // 2. The name can be anything just chose addTask
  // 3. Go to Form and use addTask as a prop in handleSubmit function
  const addTask = name => {alert(name)}
  return (
    <div className='it'>
      <Form addTask={addTask}/>
    </div>
  );
}

export default App;
