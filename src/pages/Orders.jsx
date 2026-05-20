import { useState } from "react";
import PageHeader from "../components/PageHeader";

// DATA 30 ORDERS
const initialOrders = Array.from({ length: 30 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customerName: `Customer ${i + 1}`,
  status: ["Pending", "Completed", "Cancelled"][i % 3],
  totalPrice: (Math.random() * 500 + 50).toFixed(2),
  orderDate: `2025-04-${(i % 30) + 1}`
}));

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: `ORD-${Date.now()}`,
      ...form
    };

    setOrders([newOrder, ...orders]);
    setShowForm(false);
  };

  return (
    <div className="space-y-4">

      <PageHeader
        title="Orders"
        breadcrumb={[
          { label: "Dashboard", link: "/" },
          { label: "Orders" }
        ]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          + Add Order
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow space-y-2">
          <input
            placeholder="Customer Name"
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, customerName: e.target.value })}
          />
          <select
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <input
            placeholder="Total Price"
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, totalPrice: e.target.value })}
          />
          <input
            type="date"
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, orderDate: e.target.value })}
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Save
          </button>
        </form>
      )}

      {/* TABLE */}
      <div className="bg-white p-4 rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b">
                <td>{o.id}</td>
                <td>{o.customerName}</td>
                <td>{o.status}</td>
                <td>${o.totalPrice}</td>
                <td>{o.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}