import React, { useState } from "react";

const pathsData = [
  {
    id: 1,
    title: "JavaScript Core Language",
    duration: "11 courses",
    description:
      "JavaScript is an interpreted programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. In this path you will learn the basics of JavaScript as well as more advanced topics such as promises, asynchronous programming, proxies and reflection.",
    image:
      "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png?w=70",
  },
  {
    id: 2,
    title: "AngularJS",
    duration: "14 courses",
    description:
      "AngularJS is a complete JavaScript framework for creating dynamic and interactive applications in HTML. Aside from being one of the hottest frameworks on the web, AngularJS is easy to learn yet powerful enough to help you develop complex single-page web applications. This learning path is specific to AngularJS and does not cover Angular 2 topics. For Angular 2 topics, see our Angular path.",
    image:
      "https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png?w=70",
  },
  {
    id: 3,
    title: "Core Python",
    duration: "12 courses",
    description:
      "Python is an interpreted, high-level, general-purpose programming language that emphasizes code readability. It’s a dynamically typed and garbage-collected language that supports structured, object-oriented, and functional programming. It’s often described as a batteries included language due to its comprehensive standard library. In this path you will learn the basics of Python and more advanced topics such as object-oriented design and code organization.",
    image:
      "https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png?w=70",
  },
  {
    id: 4,
    title: "C# Development Fundamentals",
    duration: "19 courses",
    description:
      "C# is the most commonly used language for leveraging the .NET Framework. As such, learning C# is a springboard to creating enterprise systems, desktop applications, websites and mobile applications. The goal of this learning path is to take you from having little to no experience with C# to understanding how to leverage the language's advanced features and how it works on the CLR.",
    image:
      "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png?w=70",
  },
];

const PathsContext = React.createContext();

const PathsProvider = (props) => {
  const [paths, setPaths] = useState(pathsData);

  const [pathIds] = useState(Array.from(paths.keys()));

  return (
    <PathsContext.Provider value={{ paths, setPaths, pathIds }}>
      {props.children}
    </PathsContext.Provider>
  );
};

export { PathsContext, PathsProvider };
