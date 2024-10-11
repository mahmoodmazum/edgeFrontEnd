import React from "react";

// const name = "Mahmood";

// function text() {
//   return "hello from ";
// }
function Component71024(props) {
  //props.name="self"
  //   const { name, roll, emoji, fruits } = props;
  const { studentInfo, fruits } = props;
  return (
    <div>
      {/* {text()} {name} */}

      {/* {name}
      {roll}
      {emoji}
      {fruits} */}

      {fruits.map((fruit) => (
        <p>{fruit}</p>
      ))}
      {studentInfo.id}
      {studentInfo.name}
      {studentInfo.dept}
    </div>
  );
}

export default Component71024;
