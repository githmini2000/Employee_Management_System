import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ViewUser.css";

const ViewUser = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/employee/${id}`);
                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return <div>Loading user details...</div>;
    }

    if (!user) {
        return <div>User not found!</div>;
    }

    return (
        <div className="view-user">
            <h1>User Details</h1>
            <div className="user-details">
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Department:</strong> {user.department}</p>
            </div>
            <button className="btnBack" onClick={() => navigate("/")}>
                Back to Dashboard
            </button>
        </div>
    );
};

export default ViewUser;
