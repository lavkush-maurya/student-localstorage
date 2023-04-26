import React, { useState } from "react";

const students = [
  { id: 1, name: "Ravi kumar", age: 22, grade: "A", fees: 21000 },
  { id: 2, name: "Gaurang kumar", age: 21, grade: "B", fees: 25000 },
  { id: 3, name: "Sonam gupta", age: 23, grade: "C", fees: 21000 },
  { id: 4, name: "Lavkush Maurya", age: 20, grade: "A", fees: 24000 },
  { id: 5, name: "Hema Singh", age: 21, grade: "B", fees: 21000 },
  { id: 6, name: "Samantha gupta", age: 22, grade: "C", fees: 26000 },
  { id: 7, name: "Nitesh kumar", age: 24, grade: "A", fees: 21000 },
  { id: 8, name: "Rahul Gandhi", age: 20, grade: "B", fees: 27000 },
  { id: 9, name: "Prem kumar", age: 23, grade: "C", fees: 30000 },
  { id: 10, name: "Pratik kumar", age: 21, grade: "A", fees: 35000 },
];

const StudentList = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [fees, setFees] = useState("");
  const handleInput = () => {
    const updatedStudents = students.map((student) => {
      if (student.id === selectedStudent.id) {
        return {
          ...student,
          fees: fees,
        };
      } else {
        return student;
      }
    });
    localStorage.setItem("Students", JSON.stringify(updatedStudents));
  };
  const remove = () => {
    localStorage.removeItem("Students");
  };
  const handleClick = (student) => {
    setSelectedStudent(student);
    setFees(student.fees);
  };

  return (
    <div>
      <h2>List of Students</h2>
      <ul>
        {students.map((student) => (
          <p key={student.id} onClick={() => handleClick(student)}>
            {student.name} ({student.grade})
          </p>
        ))}
      </ul>
      {selectedStudent && (
        <div>
          <h2>{selectedStudent.name}'s Details</h2>
          <p>Age: {selectedStudent.age}</p>
          <p>Grade: {selectedStudent.grade}</p>
          <p>
            Fees:{" "}
            <input
              placeholder="Fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </p>

          <div>
            <button onClick={handleInput}>SAVE</button>
            <button onClick={remove}>Remove</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default StudentList;
