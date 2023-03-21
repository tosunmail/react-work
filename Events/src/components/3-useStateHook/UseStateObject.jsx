import { useState } from "react";

const UseStateObject = () => {
    const [person, setperson] = useState({name:"Ahmet" , surname:"Can" , salary:10000})
    
const handleSalaryInc = () =>{
  setperson({...person , salary: person.salary + 500})
}
const handleSalaryDec = () =>{
  setperson({...person , salary: person.salary - 500})
}
    const handleClearName = () =>{
      setperson({...person, name:"noname" , surname:"noname" })
    }

  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Object</h2>
      <h3 className="display-4">{person.name}  {person.surname}</h3>
      <h3 className="display-6">Salary:{person.salary}</h3>
      <button onClick={handleSalaryInc} className="btn btn-success"> Salary INC</button>
      <button onClick={handleClearName}  className="btn btn-danger">CLR</button>
      <button onClick={handleSalaryDec} className="btn btn-warning">Salary DEC</button>
      
 
    </div>
  );
};

export default UseStateObject;
