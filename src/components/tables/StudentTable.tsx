import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { api } from "@/trpc/server";

const HomeTable = async () =>{
    const students = await api.student.findMany.query();
    return (
        <div>
            <Table className="mt-3 border">
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>department</TableHead>
            <TableHead>gender</TableHead>
            <TableHead>category</TableHead>
            <TableHead>batch</TableHead>
            <TableHead>Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {students?.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.department}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.category}</TableCell>
              <TableCell>{student.batch}</TableCell>
              <TableCell>{student.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </div>

    )
}

export default HomeTable;