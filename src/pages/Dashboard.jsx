import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="bg-gray-100 min-h-screen p-4">
            <PageHeader/>
            <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {/* Card 1 - Total Orders */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-green-500 text-white rounded-full p-4">
                        <FaShoppingCart />
                    </div>
                    <div>
                        <span className="text-2xl font-bold block">75</span>
                        <span className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                {/* Card 2 - Total Delivered */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-blue-500 text-white rounded-full p-4">
                        <FaTruck />
                    </div>
                    <div>
                        <span className="text-2xl font-bold block">357</span>
                        <span className="text-gray-400">Total Delivered</span>
                    </div>
                </div>

                {/* Card 3 - Total Canceled */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-red-500 text-white rounded-full p-4">
                        <FaBan />
                    </div>
                    <div>
                        <span className="text-2xl font-bold block">65</span>
                        <span className="text-gray-400">Total Canceled</span>
                    </div>
                </div>

                {/* Card 4 - Total Revenue */}
                <div className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                    <div className="bg-yellow-500 text-white rounded-full p-4">
                        <FaDollarSign />
                    </div>
                    <div>
                        <span className="text-2xl font-bold block">$128</span>
                        <span className="text-gray-400">Total Revenue</span>
                    </div>
                </div>
            </div>
        </div>
    );
}