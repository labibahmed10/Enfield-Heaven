import React from "react";
import "./ReactQues_One.css";

const ReactQuesOne = () => {
  return (
    <div className="ques-part">
      <h1>How React Works?</h1>
      <p>
        React is a declarative,flexible,efficeient open source Javascript Library which is one of the most
        popular library in the world.We can use it to build SPA and mobile apps or to build complex apps if we
        utilise with other libraries. React works in a very efficeient way.What we write in (dot).js file they
        are nothing but a syntactic sugar of plain HTML.These codes are coverted to jsx through babel.In a
        component what we write React keeps tracks of these component by creating a virtual DOM from top to
        bottom of the code.If there is any change in components state or props, virtual DOM compares its tree
        nodes with the real DOM nodes and re-render that specific change of the code and all these operations
        are done in diffing algorithm.When we have a list of child elements react provides a unique key to
        each of it's child through which diffing algorithm compares very easily with the real DOM and
        manipulates the code changes and then renders it.Rendering is handled by packages called renderers.
      </p>
    </div>
  );
};

export default ReactQuesOne;
