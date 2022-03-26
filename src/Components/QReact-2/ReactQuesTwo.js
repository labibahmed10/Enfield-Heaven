import React from "react";
import "./ReactQuesTwo.css";

const ReactQuesTwo = () => {
  return (
    <div className="ques-part2">
      <h1>How useState() Works?</h1>
      <p>
        State is a present situtation of any code.This might change by any action by the user.In react we use
        a Hook call useState to update the state of code.We have to set a initial value first.useState returns
        two things in a array first is the state of the value and the other is function to do a specific work
        to change/update the value.useStae works in a asynchronous way.it doesn't affect other codes until we
        change or add a event handler and use the function of useState.If we call the function to change the
        value of the state it dispatches to inside mechanism of useState that a code has changed and useState
        takes further action.React only triggers for that specific change of state and re-renders only that
        part.We can send this state value to a component using props and shows it in UI.Showing the initial
        value of useState in a HTML tag is known as "intepolation".We can update/change of state anytime
        anywhere in the code.
      </p>
    </div>
  );
};

export default ReactQuesTwo;
