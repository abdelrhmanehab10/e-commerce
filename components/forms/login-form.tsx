import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      }
    ),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Your Password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-[#23A6F0]">
          Login
        </Button>
        <p className="text-center text-xs">
          doesn&apos;t has an account?{" "}
          <span className="transition hover:underline cursor-pointer">
            Create new account..
          </span>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
