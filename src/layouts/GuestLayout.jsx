import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <div className="min-h-screen bg-[#f9f9ff] overflow-x-hidden">
            <Outlet />
        </div>
    );
}