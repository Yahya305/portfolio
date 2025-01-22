"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import Wrapper from "@components/Wrapper";
import { toast } from "@lib/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email("Invalid Email"),
    phone: z.string().min(5, {
        message: "Please Enter a valid phone number",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    comment: z.string().min(15, {
        message: "Comment must be at least 15 characters.",
    }),
});

export default function ContactMeForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            comment: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        // Show loading toast
        const loadingToast = toast({
            title: "Sending...",
            description: "Hang tight. Almost there...",
        });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                console.log("Message sent successfully!");
                loadingToast.dismiss();
                toast({
                    title: "Success!",
                    description: "We will get back to you shortly.",
                });
            } else {
                console.error("Failed to send message.");
                loadingToast.dismiss(); // Dismiss the loading toast
                toast({
                    variant: "destructive",
                    title: "Oops!",
                    description:
                        "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            loadingToast.dismiss(); // Dismiss the loading toast
            toast({
                variant: "destructive",
                title: "Error!",
                description: "An unexpected error occurred. Please try again.",
            });
        }
    }
    return (
        <Wrapper className="bg-secondary py-20">
            <h4 className="mb-5 mx-2">
                If you have any project or need help. Contact me
            </h4>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    {/* Row for Name and Email */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl className="p-6">
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl className="p-6">
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Row for Phone and Subject */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl className="p-6">
                                        <Input placeholder="Phone" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormControl className="p-6">
                                        <Input
                                            placeholder="Subject"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Comment Field */}
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className="p-6">
                                    <Input placeholder="Comment" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full md:w-auto">
                        Submit
                    </Button>
                </form>
            </Form>
        </Wrapper>
    );
}
