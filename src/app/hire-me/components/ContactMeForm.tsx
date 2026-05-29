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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import { Textarea } from "@components/ui/textarea";
import Wrapper from "@components/Wrapper";
import { toast } from "@lib/hooks/use-toast";

const formSchema = z.object({
    name: z.string().trim().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().trim().email("Invalid Email"),
    phone: z.string().trim().min(5, {
        message: "Please Enter a valid phone number",
    }),
    subject: z.string().trim().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    projectType: z.string().min(1, {
        message: "Please select a project type.",
    }),
    budgetRange: z.string().min(1, {
        message: "Please select a budget range.",
    }),
    timeline: z.string().min(1, {
        message: "Please select a timeline.",
    }),
    comment: z.string().trim().min(20, {
        message: "Please share a bit more detail about your project.",
    }),
});

const projectTypeOptions = [
    "New product build",
    "Existing product improvement",
    "AI automation solution",
    "Technical consulting",
    "Mobile app development",
];

const budgetRangeOptions = [
    "Less than $1,000",
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000+",
    "Let's discuss",
];

const timelineOptions = [
    "ASAP",
    "Within 2 weeks",
    "Within 1 month",
    "1-3 months",
    "Flexible timeline",
];

export default function ContactMeForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            projectType: "",
            budgetRange: "",
            timeline: "",
            comment: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
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
                loadingToast.dismiss();
                form.reset();
                toast({
                    title: "Success!",
                    description: "Your inquiry has been sent. I'll get back to you shortly.",
                });
            } else {
                loadingToast.dismiss();
                toast({
                    variant: "destructive",
                    title: "Oops!",
                    description:
                        "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
            loadingToast.dismiss();
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
                Tell me about your project
            </h4>
            <p className="mb-8 mx-2 text-secondary-foreground">
                Share a few details about what you're building, where you need
                help, and your expected timeline so I can respond with the
                right next steps.
            </p>
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
                                    <FormLabel>Name</FormLabel>
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
                                    <FormLabel>Email</FormLabel>
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
                                    <FormLabel>Phone</FormLabel>
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
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl className="p-6">
                                        <Input
                                            placeholder="e.g. Need help shipping an AI feature"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Type</FormLabel>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select project type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {projectTypeOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option}
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
                            name="budgetRange"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Budget Range</FormLabel>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {budgetRangeOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option}
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
                            name="timeline"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Timeline</FormLabel>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select timeline" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {timelineOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Details</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell me about the problem, your goals, your current setup, and the kind of support you're looking for."
                                        className="min-h-[160px] resize-y"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Include any useful context like the current
                                    stack, business goals, blockers, or expected
                                    deliverables.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full md:w-auto"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
                    </Button>
                </form>
            </Form>
        </Wrapper>
    );
}
