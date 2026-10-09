import React from "react";

function UserList({
    users,
    updateUser,
    deleteUser
}) {
    return (
        <div className="content-card" id="userListPanel">
            <h2>User List</h2>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Membership ID</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan="4">
                                    No users found.
                                </td>
                            </tr>
                        ) : (
                            users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.membershipId}</td>
                                    <td>{user.role}</td>

                                    <td>
                                        <button
                                            className="update-btn"
                                            onClick={() =>
                                                updateUser(user.id)
                                            }
                                        >
                                            Update
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                deleteUser(user.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;