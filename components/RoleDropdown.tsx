import React from "react";
import { rolesList } from "../lib/constants";

interface RoleDropdownProps {
    setRole: (role: typeof rolesList[number]) => void
};


// Creating Reusable Component in components folder
export default function RoleDropdown({ setRole }: RoleDropdownProps) {
    return (
        <select className="border-solid border-2" onChange={e => setRole(e.target.value as typeof rolesList[number])}>
            {rolesList.map((role) => {
                return <option value={role}>{role}</option>
            })}
        </select>
    );
}