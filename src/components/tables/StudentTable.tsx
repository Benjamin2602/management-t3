"use client";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { api } from "@/trpc/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { number } from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const HomeTable = () => {
  const utils = api.useUtils();
  const { data: students } = api.student.findMany.useQuery();
  const router = useRouter();
  const { mutate: deleteStudents } = api.student.deleteStudent.useMutation({
    onSuccess: async () => {
      await utils.student.invalidate();
      toast.success("Student detail successfully deleted!");
      router.refresh();
    },
  });
  function onClicks(id: number) {
    deleteStudents({ id });
    // router.push("/detail");
  }

  return (
    <div>
      <Table className="mx-auto mt-3 w-1/2 border">
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>department</TableHead>
            <TableHead>gender</TableHead>
            <TableHead>category</TableHead>
            <TableHead>batch</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
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
              <TableCell>
                <Button>
                  <Link href={`/edit/${student.id}`}>update</Link>
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => onClicks(student.id)}>delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default HomeTable;
