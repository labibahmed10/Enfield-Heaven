import React from "react";
import "./ReactQuesThree.css";

const ReactQuesThree = () => {
  return (
    <div className="ques-part3">
      <h1>Props vs State</h1>
      <p>
        In React props and state are two very different thing but they depends on each other.In React state is
        the situation of the code of a certain part.It might change through some User activites using useState
        hooks.State has a initial value which actually changes later.On the other hand props is the short name
        of properties.In React we used send lots of values and properties to give a different data to
        different components.We might send these datas by our own or might get some data from API,mapping it
        and sends it to components.So the difference is one is read only and other is not.Props is read only
        we can not change it after sending through a component but state can.State change their value
        asynchronously depending on situation and by user Interference.
      </p>
    </div>
  );
};

export default ReactQuesThree;
