import { useState } from "react";

function EmployeeAdminPanel({Employees=[], EmployeeUpd, EmployeeDel}){

const [checkUpd, setCheckUpd] = useState(null);
const [checkConfirmUpd, setCheckConfirmUpd] = useState(false) 
const [checkDel, setCheckDel] = useState(null)
const [checkConfirmDel, setCheckConfirmDel] = useState(false)
const [randGen, setrandGen] = useState('')
const [AdmConfCode, setAdmConfCode] = useState('')
const [newObj, setNewObj] = useState({
  name: '',
  department: '',
  position: '',
  salary:'',
  startDate: '',
  isFullTime:'',
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
    
  setNewObj((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

function randNumGen() {
  const rand = Math.floor(1000 + Math.random() * 9000);
  setrandGen(`${rand}`);
}

  function btnWrap1() {
    randNumGen();
    setCheckConfirmDel(true);
  }

  function btnWrap2() {
    randNumGen();
    setCheckConfirmUpd(true);
  }

  const startUpdating = (emp) => {
    setCheckUpd(emp.id);
    setCheckDel(null);
    setCheckConfirmUpd(false);
    setNewObj({
      name: emp.name,
      department: emp.department,
      position: emp.position,
      salary: emp.salary,
      startDate: emp.startDate,
      isFullTime: emp.isFullTime,
    });
  };
    return(
    <>
        <div className="box-2" style={{height: "350px", overflowY: 'auto', display: Employees.length===0? "flex":"block"}} >
          {Employees.length === 0 && ( <div className="EmptyList">
            <p>Add Employee to display the list! 😁</p></div>)}
          <ul>
            {/* Mapping */}
            {Employees.map((emp) => (
              <li key={`${emp.id}_box_2`} className="box-2-grid" >
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
                    setCheckUpd(checkUpd === emp.id ? null : emp.id)
                    if(checkUpd === emp.id){
                      setCheckDel(null);
                      setCheckConfirmUpd(false);
                    }
                    else {
                      startUpdating(emp); // Pre-fills form data cleanly
                    }
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
                        name="name"
                        value={newObj.name || ""}
                        onChange={handleInputChange}
                        placeholder="Enter Name"
                      />

                      <p>Change Department:</p>
                      <input
                        type="text"
                        name="department"
                        value={newObj.department || ""}
                        onChange={handleInputChange}
                        placeholder="Enter Department"
                      />

                      <p>Change Position:</p>
                      <input
                        type="text"
                        name="position"
                        value={newObj.position || ""}
                        onChange={handleInputChange}
                        placeholder="Enter Position"
                      />

                      <p>Change Salary:</p>
                      <input
                        type="text"
                        name="salary"
                        value={newObj.salary || ""}
                        onChange={handleInputChange}
                        placeholder="Enter Salary"
                      />

                      <p>Change Start Date:</p>
                      <input
                        type="text"
                        name="startDate"
                        value={newObj.startDate || ""}
                        onChange={handleInputChange}
                        placeholder="Enter Start Date"
                      />

                      <p>Work Hour</p>
                      <input
                        type="text"
                        name="isFullTime"
                        value={newObj.isFullTime || ""}
                        onChange={handleInputChange}
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
                            const AdmCode = AdmConfCode;
                            EmployeeUpd(emp.id, AdmCode, randGen, newObj);
                            setAdmConfCode('');
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
                            console.log(newVal);
                          }}
                        />
                        <button
                          onClick={() => {
                            const AdmCode = AdmConfCode;
                            EmployeeDel(emp.id, AdmCode, randGen);
                            setAdmConfCode('');
                          }}
                        >
                          Enter Code
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
    </>
)
}

export default EmployeeAdminPanel