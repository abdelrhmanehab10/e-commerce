"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import UploadButton from "../upload-button";
import axios from "axios";
import { Category } from "@prisma/client";
import React from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  imageUrl: z.string().min(1),
  name: z.string().min(3),
  description: z.string().min(20).max(200),
});

const AddCategoryForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
      name: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/category", values);
      form.reset();
      router.back();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label>Category Name</Label>
              <FormControl>
                <Input placeholder="Category name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <Label>Category Description</Label>
              <FormControl>
                <Textarea placeholder="Category Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <UploadButton onChange={field.onChange} />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-[#23A6F0] hover:bg-[#23A6F0]/80 mt-3"
        >
          Add
        </Button>
      </form>
    </Form>
  );
};

export default AddCategoryForm;
