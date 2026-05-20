import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <PageHeader />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-2 text-gray-600 text-center max-w-md">
          Maaf, halaman yang kamu cari tidak tersedia atau mungkin sudah dipindahkan.
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition duration-300"
        >
          Kembali ke Home
        </Link>
      </div>
    </>
  );
}