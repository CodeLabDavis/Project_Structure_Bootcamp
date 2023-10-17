// Use client to enable client interactions / state changes (Button Presses, State Changes, Etc.)
'use client';
import React, { useState } from 'react';

// Import Components and Constants utilizing Import Aliases
import RoleDropdown from '@/components/RoleDropdown';
import { rolesList } from '@/lib/constants';

// Import toast method and Toast Container from external node package
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

// Make a functional component that represents the demo page by exporting it
export default function Demo() {
    const [currentRole, setCurrentRole] = useState<typeof rolesList[number]>("Developer");

    // Comparmentalize function for specific toast
    function welcomeToast() {
        toast(`Welcome to CodeLab, ${currentRole}!`);
    }

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="flex-col text-center">
                <ToastContainer/>
                <RoleDropdown setRole={setCurrentRole} />
                <h1 onClick={welcomeToast} className="text-5xl">Welcome to CodeLab Demo</h1>
                {/* Backlink component imported from React */}
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    );
}