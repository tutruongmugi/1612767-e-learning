import React from "react";
import { useState } from "react";

const authorsData = [
  {
    id: 1,
    name: "Mark Zamoyta",
    course: "14 courses",
    image: "https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 2,
    name: "Paul D. Sheriff",
    course: "24 courses",
    image:
      "https://pluralsight.imgix.net/author/lg/a4d1169c-fd62-46ea-9e46-e7ae41428f04.jpeg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 3,
    name: "Barry Luijbregts",
    course: "22 courses",
    image:
      "https://pluralsight.imgix.net/author/lg/92b122b0-4503-43f2-8544-daeb17d023cd.png?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 4,
    name: "Jeff Batt",
    course: "7 courses",
    image:
      "https://pluralsight.imgix.net/author/lg/aef1f7b5-64b9-4115-acfb-910a6dba9ae9.jpg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 5,
    name: "Marques",
    course: "3 courses",
    image:
      "https://pluralsight.imgix.net/author/lg/7265d297-53d8-44a1-a49c-8f99d777b866.jpeg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 6,
    name: "Jonathan Mills",
    course: "13 courses",
    image:
      "https://pluralsight.imgix.net/author/lg/jonathan-mills-v2.jpg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 7,
    name: "Jim Cooper",
    course: "11 courses",
    image: "https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 8,
    name: "Marques",
    course: "3 courses",
    image: "https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 9,
    name: "Prateek Parekh",
    course: "3 courses",
    image:
      "https://pluralsight.imgix.net/author/lg/b740e395-5b77-4b8a-bd35-781a7788a5ba.jpeg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
  {
    id: 10,
    name: "Nate Taylor",
    course: "17 courses",
    image: "https://pluralsight.imgix.net/author/lg/nate-taylor-v2.jpg?w=200",
    about:
      "Paul loves teaching and technology, and has been teaching tech and business topics for over 30 years. Paul helps clients develop applications, and instructs them on the best use of technology.",
  },
];

const AuthorsContext = React.createContext();

const AuthorsProvider = (props) => {
  const [authors, setAuthors] = useState(authorsData);

  const [authorIds] = useState(Array.from(authors.keys()));

  return (
    <AuthorsContext.Provider value={{ authors, setAuthors, authorIds }}>
      {props.children}
    </AuthorsContext.Provider>
  );
};

export { AuthorsContext, AuthorsProvider };
