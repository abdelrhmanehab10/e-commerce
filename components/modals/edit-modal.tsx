import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import { Separator } from "../ui/separator";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import UploadButton from "../upload-button";
import { Label } from "../ui/label";

const formSchema = z.object({
  name: z.string().min(8),
  description: z.string().min(20).max(200),
  price: z.number().min(1),
  sale: z.number().min(1).optional(),
});

const EditModal = () => {
  const { isOpen, onClose, data } = useModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      sale: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black">
        <DialogHeader className="pt-8">
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <Separator className="bg-foreground" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label>Product Name</Label>
                  <FormControl>
                    <Input
                      placeholder="Product name"
                      {...field}
                      value={data?.name}
                    />
                  </FormControl>
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
                    <Textarea
                      placeholder="Product Description"
                      {...field}
                      value={data?.description}
                    />
                  </FormControl>
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
                      <Input type="number" {...field} value={data?.price} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sale"
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Form Sale <span className="text-xs ml-2">(optional)</span>
                    </Label>
                    <FormControl>
                      <Input type="number" {...field} value={data?.sale} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#23A6F0] hover:bg-[#23A6F0]/80 mt-3"
            >
              Edit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
