import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editEmployee, setEditEmployee] = useState(null);
    const [viewEmployee, setViewEmployee] = useState(null); // Holds the employee being viewed
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
    });

    // Fetch all employees on component load
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/employees");
                const data = await response.json();
                setEmployees(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching employees:", error);
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    // Handle Delete
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8080/api/employee/${id}`, {
                method: "DELETE",
            });
            setEmployees((prev) => prev.filter((employee) => employee.id !== id));
        } catch (error) {
            console.error("Error deleting employee:", error);
        }
    };

    // Handle Edit Button Click
    const handleEdit = (employee) => {
        setEditEmployee(employee);
        setFormData({
            name: employee.name,
            email: employee.email,
            phone: employee.phone,
            department: employee.department,
        });
    };

    // Handle Edit Form Submission
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:8080/api/employee/${editEmployee.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const updatedEmployee = await response.json();

            setEmployees((prev) =>
                prev.map((employee) =>
                    employee.id === editEmployee.id ? updatedEmployee : employee
                )
            );

            setEditEmployee(null);
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    // Handle Input Changes in Edit Form
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle View Button Click
    const handleView = (employee) => {
        setViewEmployee(employee);
    };

    if (loading) {
        return <div>Loading employees...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Employee List</h1>
            {employees.length === 0 ? (
                <p>No employees found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <button className="butnEdit" onClick={() => handleEdit(employee)}>Edit</button>
                                    <button className="butnDelete" onClick={() => handleDelete(employee.id)}>Delete</button>
                                    <button className="butnView" onClick={() => handleView(employee)}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {editEmployee && (
                <div className="edit-form">
                    <h2>Edit Employee</h2>
                    <form onSubmit={handleEditSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            placeholder="Phone"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            placeholder="Department"
                            onChange={handleInputChange}
                        />
                        <button className="btnChange" type="submit">Save Changes</button>
                        <button className="btnCancel" type="button" onClick={() => setEditEmployee(null)}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}

            {viewEmployee && (
                <div className="view-employee">
                    <h2>Employee Details</h2>
                    <p>
                        <strong>Name:</strong> {viewEmployee.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {viewEmployee.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {viewEmployee.phone}
                    </p>
                    <p>
                        <strong>Department:</strong> {viewEmployee.department}
                    </p>
                    <button className="btnClose" onClick={() => setViewEmployee(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
