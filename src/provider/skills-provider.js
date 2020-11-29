import React, { useState } from "react";

const SkillsContext = React.createContext();

const skillsData = [
  { id: 1, title: "Angular", isChecked: false },
  { id: 2, title: "JavaScript", isChecked: true },
  { id: 3, title: "C#", isChecked: false },
  { id: 4, title: "Java", isChecked: false },
  { id: 5, title: "Data Analysis", isChecked: true },
  { id: 6, title: "ASP.NET", isChecked: false },
  { id: 7, title: "Node.js", isChecked: false },
  { id: 8, title: "Design Patterns", isChecked: true },
  { id: 9, title: "Python", isChecked: false },
  { id: 10, title: "React", isChecked: false },
  { id: 11, title: ".NET", isChecked: true },
  { id: 12, title: "SQL Server", isChecked: false },
];

const SkillsProvider = (props) => {
  const [skills, setSkills] = useState(skillsData);

  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export { SkillsContext, SkillsProvider };
