import { useState } from "react";
import "./App.css";
import EmployeeRoster from "./EmployeeRoster";
import EmployeeAdminPanel from "./EmployeeAdminPanel";
import EmployeeForm from "./EmployeeForm";

function EmployeeDashboard() {
  //Data ->

  // Array of object
  const [emp, setEmp] = useState([
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

  //Pushing new employee details to list
  const pushEmpList = (newEmployee) => {
    if (
      !newEmployee.name.trim() ||
      !newEmployee.id.trim() ||
      !newEmployee.department.trim() ||
      !newEmployee.position.trim() ||
      !newEmployee.salary.toString().trim() ||
      !newEmployee.startDate.trim() ||
      !newEmployee.isFullTime.trim()
    )
      return (
        console.log(newEmployee.name),
        console.log(newEmployee.id),
        console.log(newEmployee.department),
        console.log(newEmployee.position),
        console.log(newEmployee.salary),
        console.log(newEmployee.startDate),
        console.log(newEmployee.isFullTime),
        console.log(newEmployee.isAvailable),
        alert("Make sure All Fields are filled!")
      );
    setEmp([...emp, newEmployee]);
  };

  const checkConfirmationUpd = (
    empToUpdate,
    AdminCode,
    randGen,
    newObjlist,
  ) => {
    if (
      !newObjlist.name.trim() ||
      !newObjlist.department.trim() ||
      !newObjlist.position.trim() ||
      !newObjlist.salary.toString().trim() ||
      !newObjlist.startDate.trim() ||
      !newObjlist.isFullTime.trim()
    ) {
      return alert("Make sure All Fields are filled!");
    } else {
      if (AdminCode === randGen) {
        const FinalUpd = emp.map((employeeList) => {
          if (employeeList.id === empToUpdate) {
            return { ...employeeList, ...newObjlist };
          }
          return employeeList;
        });
        setEmp(FinalUpd);
        alert("Employee's details Updated...");
      } else {
        alert("Incorrect Code. Retry Again...");
      }
    }
  };

  //Checks and Confirms The Deletion process
  const checkConfirmationDel = (empToRemove, AdminCode, randGen) => {
    if (AdminCode === randGen) {
      delEmp(empToRemove);
      alert("Employee's details Deleted...Wish them luck!");
    } else {
      alert("Incorrect Code. Retry Again...");
      randNumGen();
    }
  };

  const delEmp = (empToRemove) => {
    setEmp(emp.filter((e) => e.id !== empToRemove));
  };

  const changeStatus = (EMP_ID) => {
    const statusChange = emp.map((item) => {
      if (item.id === EMP_ID) {
        return { ...item, isAvailable: !item.isAvailable };
      }
      return item;
    });

    setEmp(statusChange);
  };

  return (
    <>
      <div className="container">
        <div className="box-container">
          {/* Box-1 */}

          {/* <Test2 Employees={emp} OnStatusChange={changeStatus} /> */}
          <EmployeeRoster Employees={emp} OnStatusChange={changeStatus} />

          {/* Box-2 */}

          <EmployeeAdminPanel
            Employees={emp}
            EmployeeUpd={checkConfirmationUpd}
            EmployeeDel={checkConfirmationDel}
          />

          {/* Box-3 */}

          <EmployeeForm pushNewEmp={pushEmpList} />
        </div>
      </div>
    </>
  );
}

export default EmployeeDashboard;
