import React from "react";

function UserForm({
    name,
    membershipId,
    role,
    setName,
    setMembershipId,
    setRole,
    handleSubmit
}) {
    return (
        <div className="form-panel">
            <h2>Add User</h2>

            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                    <label>Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Membership ID</label>

                    <input
                        type="text"
                        value={membershipId}
                        onChange={e =>
                            setMembershipId(e.target.value)
                        }
                    />
                </div>

                <div className="form-group">
                    <label>Role</label>

                    <select
                        value={role}
                        onChange={e => setRole(e.target.value)}
                    >
                        <option value="">
                            Select Role
                        </option>

                        <option value="Librarian">
                            Librarian
                        </option>

                        <option value="User">
                            User
                        </option>
                    </select>
                </div>

                <div className="form-button">
                    <button
                        className="primary-btn"
                        type="submit"
                    >
                        Add User
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;