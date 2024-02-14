import StudentTable from "@/components/tables/StudentTable";
import Link from "next/link";
import React from "react";

const Display = () => {
  return (
    <div>
      <StudentTable />
      <div className="mt-4 flex items-center justify-center">
        <Link
          href="/form"
          className=" rounded bg-black px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Add Student
        </Link>
      </div>
    </div>
  );
};

export default Display;
