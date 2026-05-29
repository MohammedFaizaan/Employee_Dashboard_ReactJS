import { useState } from "react";

function EmployeeForm({pushNewEmp}) {
  const [newEmp, setNewEmp] = useState({
    name: "",
    id: "",
    department: "",
    position: "",
    salary: "",
    startDate: "",
    isFullTime: "",
    isAvailable: false,
  });
  const [empID_Code, setEmpID_Code] = useState("");

  const addEmp = (e) => {
    const { name, value } = e.target;
    setNewEmp((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const genEmpCode = () => {
    const rand = `EMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setNewEmp((prev) => ({
      ...prev,
      id: rand,
    }));
    setEmpID_Code(rand);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    pushNewEmp(newEmp);
    console.log('List has been pushed!');
    console.log(newEmp);
    
    setNewEmp({
      name: "",
      id: "",
      department: "",
      position: "",
      salary: "",
      startDate: "",
      isFullTime: "",
      isAvailable: false,
    });
    setEmpID_Code('');
  }

  return (
    <>
      <div className="box-3">
        <form onSubmit={handleSubmit}>
          <div className="box-3-spacing">
            <label>Employee's Name:</label><br />
            <input
              type="text"
              name="name"
              value={newEmp.name}
              onChange={addEmp}
              placeholder="Enter Employee's name"
            />
          </div>

          <div className="box-3-spacing">
            <label>Generate ID for Employee:</label><br />
            <label>{newEmp.name}</label><br />
            <label>{empID_Code}</label><br />
            <button
              type="button"
              onClick={() => {
                genEmpCode();
              }}
            >
              Generate ID
            </button>
          </div>

          <div className="box-3-spacing">
            <p>Department:</p>
            <input
              type="text"
              name="department"
              value={newEmp.department}
              onChange={addEmp}
              placeholder="Enter Department"
            />
          </div>

          <div className="box-3-spacing">
            <p>Position:</p>
            <input
              type="text"
              name="position"
              value={newEmp.position}
              onChange={addEmp}
              placeholder="Enter position"
            />
          </div>
          <div className="box-3-spacing">
            <p>Salary:</p>
            <input
              type="text"
              name="salary"
              value={newEmp.salary}
              onChange={addEmp}
              placeholder="Enter Salary"
            />
          </div>

          <div className="box-3-spacing">
            <p>Start Date:</p>
            <input
              type="text"
              name="startDate"
              value={newEmp.startDate}
              onChange={addEmp}
              placeholder="Enter Starting date"
            />
          </div>
          <div className="box-3-spacing">
            <p>Work Hour:</p>
            <input
              type="text"
              value={newEmp.isFullTime}
              name="isFullTime"
              onChange={addEmp}
              placeholder="Enter working hour"
            />
          </div>

          <div className="box-3-spacing">
              <button type="submit">Add to list</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default EmployeeForm;
