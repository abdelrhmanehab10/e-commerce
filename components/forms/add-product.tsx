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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  categoryId: z.string({
    required_error: "Please select a category",
  }),
  imageUrl: z.string().min(1),
  name: z.string().min(8),
  description: z.string().min(20).max(200),
  price: z.string().min(1),
  sale: z.optional(z.string()),
});

const AddProductForm = ({ categories }: { categories: Category[] }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryId: "",
      imageUrl: "",
      name: "",
      description: "",
      price: "",
      sale: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/product", values);
      router.back();
      form.reset();
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
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <Label>Category</Label>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category, idx) => (
                    <SelectItem key={idx} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <Label>Product Name</Label>
              <FormControl>
                <Input placeholder="Product name" {...field} />
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
              <Label>Product Description</Label>
              <FormControl>
                <Textarea placeholder="Product Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-5">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <Label>Product Price</Label>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sale"
            render={({ field }) => (
              <FormItem>
                <Label>
                  Product Sale <span className="text-xs ml-2">(optional)</span>
                </Label>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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

export default AddProductForm;
