import Component71024 from "./component/Component71024";

function App() {
  const name = "Mahmood";
  const fruits = ["apple", "banana", "orange"];
  const studentInfo = {
    id: "1304095",
    name: "Golamt Mahmood",
    dept: "CSE",
  };
  return (
    <>
      <Component71024 studentInfo={studentInfo} fruits={fruits} />
    </>
  );
}

export default App;
