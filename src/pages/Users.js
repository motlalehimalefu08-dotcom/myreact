import React, { useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

function Users({
    users,
    setUsers,
    transactions,
    loggedInUser,
    updateLoggedInUser
}) {
    const [name, setName] = useState("");
    const [membershipId, setMembershipId] = useState("");
    const [role, setRole] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !membershipId || !role) {
            alert("Please fill in all fields.");
            return;
        }

        if (
            users.some(
                user =>
                    user.membershipId.toLowerCase() ===
                    membershipId.trim().toLowerCase()
            )
        ) {
            alert("A user with this Membership ID already exists.");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: name.trim(),
            membershipId: membershipId.trim(),
            role
        };

        setUsers([...users, newUser]);

        setName("");
        setMembershipId("");
        setRole("");
    }

    function updateUser(id) {
        const user = users.find(item => item.id === id);

        if (!user) return;

        const newName = prompt("Enter name:", user.name);

        if (newName === null) return;

        const newMembershipId = prompt(
            "Enter Membership ID:",
            user.membershipId
        );

        if (newMembershipId === null) return;

        const newRole = prompt(
            "Enter role (Librarian or User):",
            user.role
        );

        if (newRole === null) return;

        if (newRole !== "Librarian" && newRole !== "User") {
            alert("Role must be Librarian or User.");
            return;
        }

        if (
            users.some(
                item =>
                    item.id !== id &&
                    item.membershipId.toLowerCase() ===
                        newMembershipId.trim().toLowerCase()
            )
        ) {
            alert("Another user already uses this Membership ID.");
            return;
        }

        const updatedUser = {
            ...user,
            name: newName.trim(),
            membershipId: newMembershipId.trim(),
            role: newRole
        };

        setUsers(
            users.map(item =>
                item.id === id ? updatedUser : item
            )
        );

        if (user.id === loggedInUser.id) {
            updateLoggedInUser(updatedUser);
        }
    }

    function deleteUser(id) {
        if (id === loggedInUser.id) {
            alert("You cannot delete the currently logged-in Librarian.");
            return;
        }

        const activeBorrow = transactions.some(
            transaction =>
                transaction.userId === id &&
                transaction.type === "borrow" &&
                transaction.status === "Borrowed"
        );

        if (activeBorrow) {
            alert(
                "This user cannot be deleted because they have a borrowed book."
            );
            return;
        }

        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter(user => user.id !== id));
        }
    }

    return (
        <main className="main-content">
            <div className="page-title">
                <h2>User Management</h2>
                <p>Add, update and delete library users.</p>
            </div>

            <UserForm
                name={name}
                membershipId={membershipId}
                role={role}
                setName={setName}
                setMembershipId={setMembershipId}
                setRole={setRole}
                handleSubmit={handleSubmit}
            />

            <UserList
                users={users}
                updateUser={updateUser}
                deleteUser={deleteUser}
            />
        </main>
    );
}

export default Users;