import { useState } from "react";
import "./App.css";

function Test() {
  //States ->

  //State for Employees Updated details
  const [UpdName, setUpdName] = useState("");
  const [UpdID, setUpdID] = useState("");
  const [UpdAge, setUpdAge] = useState("");
  const [UpdDepart, setUpdDepart] = useState("");
  const [UpdPos, setUpdPos] = useState("");
  const [UpdSalary, setUpdSalary] = useState("");
  const [UpdCurrency, setUpdCurrency] = useState("");
  const [UpdStartDate, setUpdStartDate] = useState("");
  const [UpdisFullTime, setUpdisFullTime] = useState("");

  //State for New Employees
  const [empName, setEmpName] = useState("");
  const [empID_Code, setEmpID_Code] = useState("");
  const [empDepart, setEmpDepart] = useState("");
  const [empPos, setEmpPos] = useState("");
  const [empSalary, setEmpSalary] = useState("");
  const [empStartDate, setEmpStartDate] = useState("");
  const [empWorkHour, setEmpWorkHour] = useState("");
  const [empIsActive, setEmpIsActive] = useState();
  const [empActiveRole, setEmpActiveRole] = useState("");

  //Checking the updated status
  const [checkUpd, setCheckUpd] = useState(null);
  const [checkConfirmUpd, setCheckConfirmUpd] = useState(false);

  //Checking the Deleted status
  const [checkDel, setCheckDel] = useState(null);
  const [checkConfirmDel, setCheckConfirmDel] = useState(false);

  //Random Code Generator
  const [randGen, setrandGen] = useState("");

  //State Admin Cofirmation Code
  const [AdmConfCode, setAdmConfCode] = useState("");

  //Data ->

  // Array of object
  const [emp, SetEmp] = useState([
    {
      id: `EMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: "Alice Johnson",
      department: "Engineering",
      position: "Senior Developer",
      salary: 115000,
      currency: "USD",
      startDate: "2021-03-15",
      isFullTime: "Full Time",
      isAvailable: true,
    },
    {
      id: `EMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: "Marcus Chen",
      department: "Design",
      position: "UI/UX Designer",
      salary: 82000,
      currency: "USD",
      startDate: "2022-07-01",
      isFullTime: "Full Time",
      isAvailable: false,
    },
    {
      id: `EMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: "Sarah Miller",
      department: "Marketing",
      position: "Content Strategist",
      salary: 65000,
      currency: "USD",
      startDate: "2023-01-10",
      isFullTime: "Full Time",
      isAvailable: true,
    },
    {
      id: `EMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: "David Smith",
      department: "Human Resources",
      position: "Recruiter",
      salary: 72000,
      currency: "USD",
      startDate: "2020-11-20",
      isFullTime: "Full Time",
      isAvailable: true,
    },
  ]);

  //Functions ->

  //Random Number generator for Employee Deletion confirmation
  function randNumGen() {
    const rand = Math.floor(1000 + Math.random() * 9000);
    setrandGen(`${rand}`);
  }

  //Wrapping up functions for Confirming to proceed deletion
  function btnWrap1() {
    randNumGen();
    setCheckConfirmDel(true);
  }

  //Wrapping up functions for Confirming to proceed Updation
  function btnWrap2() {
    randNumGen();
    setCheckConfirmUpd(true);
  }

  //Generate Code for Employee
  const genEmpCode = () => {
    const rand = `EMP-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    setEmpID_Code(rand);
    console.log(empID_Code);
    console.log(rand);
  };

  //Pushing new employee details to list
  const pushEmpList = () => {
    if (
      !empName.trim("") ||
      !empID_Code.trim("") ||
      !empDepart.trim("") ||
      !empPos.trim("") ||
      !empSalary.trim("") ||
      !empStartDate.trim("") ||
      !empWorkHour.trim("")
    )
      return (
        console.log(empName),
        console.log(empID_Code),
        console.log(empDepart),
        console.log(empPos),
        console.log(empSalary),
        console.log(empStartDate),
        console.log(empWorkHour),
        alert("Make sure All Fields are filled!")
      );

    const newObj = {
      id: empID_Code,
      name: empName,
      department: empDepart,
      position: empPos,
      salary: empSalary,
      startDate: empStartDate,
      isFullTime: empWorkHour,
    };
    SetEmp([...emp, newObj]);
    setEmpName("");
    setEmpID_Code("");
    setEmpDepart("");
    setEmpPos("");
    setEmpSalary("");
    setEmpStartDate("");
    setEmpWorkHour("");
  };

  const checkActive = () => {};

  const checkConfirmationUpd = (empToUpdate) => {
    if (AdmConfCode === randGen) {
      const FinalUpd = emp.map((emp) => {
        if (emp.id === empToUpdate) {
          alert("Employee's details Updated...");
          return {
            id: emp.id,
            name: UpdName || emp.name,
            department: UpdDepart || emp.department,
            position: UpdPos || emp.position,
            salary: UpdSalary || emp.salary,
            currency: UpdCurrency || emp.currency,
            startDate: UpdStartDate || emp.startDate,
            isFullTime: UpdisFullTime || emp.isFullTime,
          };
        }
        return (emp, alert("Incorrect Code. Retry Again..."));
      });
      SetEmp(FinalUpd);
      setUpdID();
      setUpdName("");
      setUpdDepart();
      setUpdPos();
      setUpdSalary();
      setUpdCurrency();
      setUpdStartDate();
      setUpdisFullTime();
      setCheckUpd(null);
      setEmpID_Code("");
    }
  };

  //Checks and Confirms The Deletion process
  const checkConfirmationDel = (empToRemove) => {
    if (AdmConfCode === randGen) {
      delEmp(empToRemove);
      alert("Employee's details Deleted...Wish them luck!");
    } else {
      alert("Incorrect Code. Retry Again...");
      randNumGen();
    }
  };

  const delEmp = (id) => {
    SetEmp(emp.filter((e) => e.id !== id));
    setCheckDel(null);
  };

  const changeStatus = (EMP_ID) => {
    const statusChange = emp.map((item) => {
      if (item.id === EMP_ID) {
        return { ...item, isAvailable: !item.isAvailable };
      }
      return item;
    });

    SetEmp(statusChange);
  };

  return (
    <>
    <div className="container">
      <div className="box-container">
        {/* Box-1 */}

        <div className="box-1" style={{height: "350px", overflowY: 'auto'}} >
          <ul>
            {/* Mapping */}
            {emp.map((emp) => (
              <li key={`${emp.id}_box_1`} className="box-1-grid">
                {/* span attempt */}
                {/* <span className="li-spacing">Name: {emp.name}</span>
                <span className="li-spacing">Department: {emp.department}</span>
                <span className="li-spacing">Position:{emp.position}</span> */}


                {/* div grid attempt */}
                <div className="li-name">Name: {emp.name}</div>
                <div className="li-department">
                  Department: {emp.department}
                </div>
                <div className="position">Position:{emp.position}</div>


                {/* p tag attempt */}
                {/* Name: {emp.name}, Department: {emp.department}, Position:
                {emp.position} */}

                {/* Status Signal Box */}
                <div className="li-btn, li-btn-box" style={{ display: "flex", alignItems: "center" }}>
                  {/* Status Signal + Active/Inactive */}
                  <div style={{ display: "flex", alignItems: 'center', border: "2px solid black", backgroundColor: "white", borderRadius: "10px", padding: "2px 0px 2px 0px", marginRight: "5px"}}>
                    {/* Status Signal */}
                    <div
                      className="status_signal, li-btn-box"
                      style={{
                        backgroundColor:
                          emp.isAvailable ? "lightgreen" : "red",
                        width: "10px",
                        height: "10px",
                        borderRadius: "1em",
                        margin: "0px 5px 0px 5px",
                      }}
                    ></div>

                    {emp.isAvailable ? (
                      <p className="li-btn-box">Available</p>
                    ) : (
                      <p className="li-btn-box">Unavailable</p>
                    )}
                  </div>

                  {/* Btn to change status */}
                  <div className="li-btn-box">
                    <button
                      style={{padding: "3px", borderRadius: "5px"}}
                      onClick={() => {
                        changeStatus(emp.id);
                      }}
                    >
                      Change Status
                    </button>
                  </div>

                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Box-2 */}

        <div className="box-2" style={{height: "350px", overflowY: 'auto'}} >
          <ul>
            {/* Mapping */}
            {emp.map((emp) => (
              <li key={`${emp.id}_box_2`} className="box-2-grid" >
                {/* <p className="span-spacing">
                  <span>
                    <span className="Span-obj">Name:</span>
                    {emp.name}
                  </span>
                  <span>Employee ID:{emp.id}</span>
                  <span>Department:{emp.department}</span>
                  <span>Position:{emp.position}</span>
                  <span>Salary:{emp.salary}</span>
                  <span>Start Date:{emp.startDate}</span>
                  <span>Work hour:{emp.isFullTime}</span>
                </p> */}

                <div className="box-name" >
                  <p>Name:</p>
                  <p>{emp.name}</p>
                </div>
                <div className="box-id">
                  <p>Employee ID:</p>
                  <p>{emp.id}</p>
                </div>
                <div className="box-department">
                  <p>Department:</p>
                  <p>{emp.department}</p>
                </div>
                <div className="box-position">
                  <p>Position:</p>
                  <p>{emp.position}</p>
                </div>
                <div className="box-salary">
                  <p>Salary:</p>
                  <p>{emp.salary}</p>
                </div>
                <div className="box-start_date">
                  <p>Start Date:</p>
                  <p>{emp.startDate}</p>
                </div>
                <div className="box-work_hour">
                  <p>Work hour:</p>
                  <p>{emp.isFullTime}</p>
                </div>

                <div className="box-del_upd">
                {/* Update button */}
                <button
                  onClick={() => {
                    setCheckUpd(checkUpd === emp.id ? null : emp.id);
                    setCheckDel(null);
                    setCheckConfirmUpd(false);
                  }}
                >
                  Update
                </button>

                {/* Delete button */}
                <button
                  onClick={() => {
                    setCheckDel(checkDel === emp.id ? null : emp.id); //Select/null to Open/Close a div
                    setCheckUpd(null);
                    setCheckConfirmDel(false);
                  }}
                >
                  Delete
                </button>
                </div>


                {/* Updating btn Div */}
                {checkUpd === emp.id && (
                  <div>
                    <div>
                      <p>*Leave blank if you dont want to change</p>
                      <p>Change Name:</p>
                      <input
                        type="text"
                        value={UpdName}
                        name="Changing name"
                        onChange={(e) => {
                          setUpdName(e.target.value);
                        }}
                        placeholder="Enter Name"
                      />

                      <p>Change Department:</p>
                      <input
                        type="text"
                        value={UpdDepart}
                        name="Change department"
                        onChange={(e) => {
                          setUpdDepart(e.target.value);
                        }}
                        placeholder="Enter Department"
                      />

                      <p>Change Position:</p>
                      <input
                        type="text"
                        value={UpdPos}
                        name="Chang position"
                        onChange={(e) => {
                          setUpdPos(e.target.value);
                        }}
                        placeholder="Enter Position"
                      />

                      <p>Change Salary:</p>
                      <input
                        type="text"
                        value={UpdSalary}
                        name="Change Salary"
                        onChange={(e) => {
                          setUpdSalary(e.target.value);
                        }}
                        placeholder="Enter Salary"
                      />

                      <p>Change Start Date:</p>
                      <input
                        type="text"
                        value={UpdStartDate}
                        name="Change Date"
                        onChange={(e) => {
                          setUpdStartDate(e.target.value);
                        }}
                        placeholder="Enter Start Date"
                      />

                      <p>Work Hour</p>
                      <input
                        type="text"
                        value={UpdisFullTime}
                        name="Change Work Hour"
                        onChange={(e) => {
                          setUpdisFullTime(e.target.value);
                        }}
                        placeholder="Enter Work time"
                      />
                    </div>

                    <p>
                      Are you sure you want to Update, {emp.name} details from
                      the Database?
                    </p>

                    {/* Yes btn for Update*/}
                    <button
                      onClick={() => {
                        btnWrap2();
                      }}
                    >
                      Yes
                    </button>

                    {/* No btn for Update*/}
                    <button
                      onClick={() => {
                        setCheckConfirmUpd(false);
                        setCheckUpd(null);
                      }}
                    >
                      No
                    </button>

                    {/* Updating btn div */}

                    {checkConfirmUpd === true && (
                      <div>
                        <p>Enter the confirmantion code Generated to Update</p>
                        <p>Confirmation code: {randGen}</p>
                        <input
                          type="text"
                          value={AdmConfCode}
                          onChange={(event) => {
                            const newVal = event.target.value;
                            setAdmConfCode(newVal);
                            console.log(newVal);
                          }}
                        />
                        <button
                          onClick={() => {
                            checkConfirmationUpd(emp.id);
                          }}
                        >
                          Enter Code
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Opening a Div if statement true and vice versa for Delete*/}
                {checkDel === emp.id && (
                  <div>
                    <p>
                      Are you sure you want to delete, {emp.name} details from
                      the Database?
                    </p>

                    {/* Yes btn for Delete*/}
                    <button
                      onClick={() => {
                        btnWrap1();
                      }}
                    >
                      Yes
                    </button>

                    {/* No btn for Delete*/}
                    <button
                      onClick={() => {
                        setCheckConfirmDel(false);
                        setCheckDel(null);
                      }}
                    >
                      No
                    </button>

                    {/* Deleting btn div */}

                    {checkConfirmDel === true && (
                      <div>
                        <p>Enter the confirmantion code Generated to delete</p>
                        <p>Confirmation code: {randGen}</p>
                        <input
                          type="text"
                          value={AdmConfCode}
                          name="Deletion confirmation"
                          onChange={(event) => {
                            const newVal = event.target.value;
                            setAdmConfCode(newVal);
                            console.log(AdmConfCode);
                          }}
                        />
                        <button
                          onClick={() => {
                            checkConfirmationDel(emp.id);
                          }}
                        >
                          Enter Code
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Name:{a.name} Employee ID:{a.id} Department:{a.department} Position:{a.position} Salary:{a.salary} Start Date:{a.startDate} Work hour:{a.isFullTime}       */}
              </li>
            ))}
          </ul>
        </div>

        <div className="box-3">

          <div className="box-3-spacing" >
            <p>Employee's Name:</p>
            <input
              type="text"
              value={empName}
              name="NewEmp name"
              onChange={(e) => {
                setEmpName(e.target.value);
              }}
              placeholder="Enter Employee's name"
            />
          </div>
          <div className="box-3-spacing" >    
            <p>Generate ID for Employee:</p>
            <p>{empName}</p>
            <p>{empID_Code}</p>
            <button
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
              value={empDepart}
              name="newEmp department"
              onChange={(e) => {
                setEmpDepart(e.target.value);
              }}
              placeholder="Enter Department"
            />
          </div>
          <div className="box-3-spacing">
            <p>Position:</p>
            <input
              type="text"
              value={empPos}
              name="newEmp position"
              onChange={(e) => {
                setEmpPos(e.target.value);
              }}
              placeholder="Enter position"
            />
          </div>
          <div className="box-3-spacing">
            <p>Salary:</p>
            <input
              type="text"
              value={empSalary}
              name="newEmp salary"
              onChange={(e) => {
                setEmpSalary(e.target.value);
              }}
              placeholder="Enter Salary"
            />
          </div>
          <div className="box-3-spacing">
            <p>Start Date:</p>
            <input
              type="text"
              value={empStartDate}
              name="newEmp start date"
              onChange={(e) => {
                setEmpStartDate(e.target.value);
              }}
              placeholder="Enter Starting date"
            />
          </div>
          <div className="box-3-spacing">
            <p>Work Hour:</p>
            <input
              type="text"
              value={empWorkHour}
              name="newEmp work hour"
              onChange={(e) => {
                setEmpWorkHour(e.target.value);
              }}
              placeholder="Enter working hour"
            />
          </div>
          <div className="box-3-spacing">
            <button onClick={() => pushEmpList()}>Add to List</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Test;
