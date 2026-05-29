function EmployeeRoster({ Employees = [], OnStatusChange }) {

  const AvailableEmp = Employees.filter(Employee => Employee.isAvailable===true).length
  const UnavailableEmp = Employees.filter(Employee => Employee.isAvailable===false).length

  return (
    <>
      <div
        className="box-1"
        style={{
          height: "350px",
          overflowY: "auto",
          display: Employees.length === 0 ? "flex" : "block",
        }}
      >
        {Employees.length === 0 && (
          <div className="EmptyList">
            <p>Add Employee to display the list! 😁</p>
          </div>
        )}

        <div>
          <p>Avaiable Employee: {AvailableEmp}</p>
          <p>Unavaiable Employee: {UnavailableEmp}</p>
        </div>

        <ul>
          {/* Mapping */}
          {Employees.map((Employee) => (
            <li key={`${Employee.id}_box_1`} className="box-1-grid">
              {/* div grid attempt */}
              <div className="li-name">Name: {Employee.name}</div>
              <div className="li-department">
                Department: {Employee.department}
              </div>
              <div className="position">Position:{Employee.position}</div>

              {/* Status Signal Box */}
              <div
                className="li-btn li-btn-box"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* Status Signal + Active/Inactive */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "2px solid black",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "2px 0px 2px 0px",
                    marginRight: "5px",
                  }}
                >
                  {/* Status Signal */}
                  <div
                    className="status_signal li-btn-box"
                    style={{
                      backgroundColor: Employee.isAvailable
                        ? "lightgreen"
                        : "red",
                      width: "10px",
                      height: "10px",
                      borderRadius: "1em",
                      margin: "0px 5px 0px 5px",
                    }}
                  ></div>

                  {Employee.isAvailable ? (
                    <p className="li-btn-box">Available</p>
                  ) : (
                    <p className="li-btn-box">Unavailable</p>
                  )}
                </div>

                {/* Btn to change status */}
                <div className="li-btn-box">
                  <button
                    style={{ padding: "3px", borderRadius: "5px" }}
                    onClick={() => OnStatusChange(Employee.id)}
                  >
                    Change Status
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default EmployeeRoster;
