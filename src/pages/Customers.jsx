import { useState } from "react";
import PageHeader from "../components/PageHeader";

// DATA 30 CUSTOMER
const initialCustomers = Array.from({ length: 30 }, (_, i) => ({
  id: `CUST-${1000 + i}`,
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@mail.com`,
  phone: `08123${Math.floor(100000 + Math.random() * 900000)}`,
  loyalty: ["Bronze", "Silver", "Gold"][i % 3]
}));

export default function Customers() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCustomer = {
      id: `CUST-${Date.now()}`,
      ...form
    };

    setCustomers([newCustomer, ...customers]);
    setShowForm(false);
  };

  return (
    <div className="space-y-4">

      <PageHeader
        title="Customers"
        breadcrumb={[
          { label: "Dashboard", link: "/" },
          { label: "Customers" }
        ]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          + Tambah Customer
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl shadow space-y-2">
          <input
            placeholder="Nama Customer"
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Phone"
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <select
            className="border p-2 w-full rounded"
            onChange={(e) => setForm({ ...form, loyalty: e.target.value })}
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b">
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}