import React, { useState } from "react";

const coursesData = [
  {
    id: 1,
    title: "JavaScript: Getting Started",
    author: "Mark Zamoyta",
    level: "Beginer",
    released: "Jan 21, 2020",
    duration: "3h 56m",
    rate: 4.5,
    rateCount: 1084,
    description:
      "If you’re learning to program for the first time, or if you’re coming from a different language, this course, JavaScript: Getting Started, will give you the basics for coding in JavaScript.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-getting-started-v1.png?w=1078",
    favourite: true,
  },
  {
    id: 2,
    title: "JavaScript Syntax and Operators",
    author: "Paul D. Sheriff",
    level: "Beginer",
    released: "Nov 12, 2019 ",
    duration: "1h 41m",
    rate: 4.8,
    rateCount: 105,
    description:
      "Are you a JavaScript programmer that needs to learn more about the syntax, exception handling, and the wide array of operators JavaScript has to offer? In this course, JavaScript Syntax and Operators, you will expand your knowledge of the JavaScript language. First, you will learn all about the switch statement and the difference between for/in and for/of. Next, you will discover the various math, comparison, and logical operators, in addition to handling exceptions and determining the data type of variables. Finally, you will explore the 'this' keyword and the spread operator. When you are finished with this course, you will have gained the skills and knowledge of JavaScript syntax and operators needed to propel your JavaScript applications to the next level.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-syntax-operators-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 3,
    title: "JavaScript Variables and Types",
    author: "Barry Luijbregts",
    level: "Intermediate",
    released: "Aug 19, 2019 ",
    duration: "43m",
    rate: 4,
    rateCount: 97,
    description:
      "At the core of working with variables and types in JavaScript is a thorough knowledge of employing variables, literals and assignments, and applying primitive types. In this course, JavaScript Variables and Types, you’ll learn how to work with variables and types in JavaScript. First, you’ll learn how to employ variables. Next, you’ll explore employing literals and assignments. Finally, you’ll discover how to apply primitive types. When you’re finished with this course, you’ll have a foundational knowledge of employing variables, literals and assignments, and applying primitive types that will help you as you move forward to work with variables and types in JavaScript.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-variables-types-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 4,
    title: "JavaScript Arrays and Collections",
    author: " Jeff Batt",
    level: "Beginer",
    released: "Dec 31, 2019",
    duration: "1h 57m",
    rate: 4,
    rateCount: 114,
    description:
      "At the core of using data collections within JavaScript is a thorough knowledge of sets, maps, and typed arrays. In this course, JavaScript Arrays and Collections, you will learn how to create and apply data collections to your web applications. First, you will understand how to apply more advanced array methods to your current arrays. Next, you will explore how to store unique data using sets. Then you will learn how to store data using key and value pairs with maps. Finally, you will discover how to work directly with binary data using typed arrays. When you are finished with this course, you will have a foundational knowledge of data collections within the JavaScript language that will help you as you move forward to building more efficient web apps.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-arrays-collections-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 5,
    title: "Javascript Generators and Iterators",
    author: "Marques Woodson",
    level: "Intermediate",
    released: "Dec 31, 2019",
    duration: "1h 25m",
    rate: 3.9,
    rateCount: 92,
    description:
      "Understanding iterators, iterables, and generator functions can be difficult. In this course, JavaScript Generators and Iterators, you will learn foundational knowledge of these constructs so that you feel comfortable using them every day. First, you will understand what iterators are and a few of the available built-in iterables. Next, you will discover generator functions and the yield keyword. Finally, you will explore how to use Cancelable Async Flows to help treat your generator functions like async functions. When you are finished with this course, you will have the skills and knowledge of iterators and generator functions needed to start using them today.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-generators-iterators-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 6,
    title: "Working with JavaScript Modules",
    author: "Jonathan Mills",
    level: "Beginner",
    released: "Oct 8, 2019",
    duration: "45m",
    rate: 4.6,
    rateCount: 105,
    description:
      "At the core of JavaScript is a thorough knowledge of Modules. In this course, Working with JavaScript Modules, you’ll learn how to break your code out into modules in a logical way and use those modules in your application. First, you’ll learn what modules are and why you should use them. Next, you’ll explore how to import and export code from modules. Finally, you’ll discover how to use those modules in a real-world application. When you’re finished with this course, you’ll have a foundational knowledge of modules that will help you as you move forward to build easier to maintain JavaScript applications. Software required: JavaScript.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/working-javascript-modules-v1.jpg?w=1078",
    favourite: false,
  },
  {
    id: 7,
    title: "JavaScript Objects, Prototypes, and Classes",
    author: " Jim Cooper",
    level: "Advanced",
    released: "Oct 30, 2019",
    duration: "1h 48m",
    rate: 5,
    rateCount: 130,
    description:
      "Objects, prototypes, and classes are extensively used in JavaScript programming. Understanding each of them beyond a surface level will help you more deeply understand the foundations of JavaScript. In this course, JavaScript Objects, Prototypes, and Classes, you will learn the foundations of creating and working with objects including a deeper understanding of how JavaScript works with regards to objects and inheritance. First, you will see different ways to create objects and properties and how to work with them, including modifying property descriptors, using constructor functions, working with getters and setters, and more. Next, you will discover what prototypes are, how prototypes and prototypal inheritance work in JavaScript, and some of the hidden complexities of prototypes. Finally, you will explore how to create objects and handle inheritance using classes. When you’re finished with this course, you will have the skills and knowledge of JavaScript Objects, Prototypes and Classes needed to create powerful and well structured applications that take advantage of the dynamic power of JavaScript.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-objects-prototypes-classes-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 8,
    title: "JavaScript: Functions",
    author: "Prateek Parekh",
    level: "Beginer",
    released: "Nov 15, 2019",
    duration: "48m",
    rate: 4,
    rateCount: 116,
    description:
      "Code is hard to maintain, especially when you keep adding new features to your project over several months and years. If you are not careful, you can end up with spaghetti code where several parts of the project are essentially doing the same task and any change in one feature can cause changes in several other parts of the code. In this course, JavaScript: Functions, you’ll learn the foundational knowledge to write modular code that not only prevents duplication, but also increases code readability and maintainability. First, you’ll explore what Functions are and how to write them. Next, you’ll discover the power of Arrow Functions in improving readability. Finally, you’ll gain the ability to use additional language features that come with JavaScript out-of-the-box to write applications with multiple functions interacting with each other. When you’re finished with this course, you’ll have the skills and knowledge of Functions needed to write modular, re-usable, and concise code in JavaScript.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-functions-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 9,
    title: "JavaScript Promises and Async Programming",
    author: " Nate Taylor",
    level: "Intermediate",
    released: "Nov 26, 2019",
    duration: "1h 21m",
    rate: 4.9,
    rateCount: 263,
    description:
      "Asynchronous programming is often new and confusing when first learning JavaScript. In this course, JavaScript Promises and Async Programming, you’ll gain the ability to handle async programming in JavaScript. First, you’ll explore consuming promises. Next, you’ll discover creating your own promises. Finally, you’ll learn how to use async/await to handle asynchronous programming. When you’re finished with this course, you’ll have the skills and knowledge of JavaScript promises needed to handle asynchronous code.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-promises-async-programming-v1.png?w=1078",
    favourite: false,
  },
  {
    id: 10,
    title: "JavaScript Security: Best Practices",
    author: " Marcin Hoppe",
    level: "Intermediate",
    released: "Aug 20, 2020",
    duration: "1h 31m",
    rate: 4.6,
    rateCount: 19,
    description:
      "Learn how to write more secure JavaScript code. This course will teach you how to find, fix, and prevent vulnerabilities caused by unique JavaScript issues such as prototype pollution, dynamic typing bugs, and code injection attacks.",
    category: "JavaScript Core Language",
    image:
      "https://pluralsight.imgix.net/course-images/javascript-security-best-practices-v1.jpg?w=1078",
    favourite: false,
  },
];

const CoursesContext = React.createContext();

const CoursesProvider = (props) => {
  const [courses, setCourses] = useState(coursesData);
  const [coursesId, setCoursesId] = useState([]);
  const [learningCoursesId, setLearningCoursesId] = useState([]);
  const [newReleaseCoursesId, setNewReleaseCoursesId] = useState([]);
  const [recommendedCoursesId, setRecommendedCoursesId] = useState([]);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
