'use client';

import { FormSelect } from "@/components/form-inputs/form-select"
import { FormTextInput } from "@/components/form-inputs/form-text-input"
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { categories } from "./categories"
import { Button } from "@/components/ui/button";
import { FormImageUpload } from "@/components/form-inputs/form-image-upload";
import FormSection from "@/components/form/form-section";
import Image from 'next/image'
import { Input } from "@/components/ui/input";
import ImageUpload from "./image-input";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const listingFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().default(""),
    price: z.coerce.number().min(0, "Price must be non-negative"),
    quantity: z.coerce.number().min(1, "Minimum quantity is 1"),
    image: z.string().optional(),
    category: z.string().min(1, "Category is required"),
})

export type ListingFormValues = z.infer<typeof listingFormSchema>;

export default function ListingForm() {
    const form = useForm<ListingFormValues>({
        resolver: zodResolver(listingFormSchema),
    })

    const {toast} = useToast();
    const router = useRouter();
    const handleSubmit = (values: ListingFormValues) => {

        toast({
            variant: "success",
            title: "Listing created successfully"
        })
        router.push("/admin/listings");
    }

    const imageUrl = form.watch("image")
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col space-y-4">
                <FormSection header="">
                    <ImageUpload
                        onImageUpload={() => console.log("hi")}/>
                </FormSection>
                <FormTextInput
                    form={form}
                    name="name"
                    label="Name"/>
                <FormTextInput
                    form={form}
                    name="description"
                    multiline
                    label="Description"/>
                <FormTextInput
                    form={form}
                    name="description"
                    multiline
                    label="Description"/>
                <FormSelect
                    form={form}
                    name="category"
                    label="Category"
                    options={categories}
                    optionLabelKey="label"
                    optionValueKey="value"/>
                <FormTextInput
                    form={form}
                    name="price"
                    label="Price"
                    inputProps={{
                        type: "number"
                    }} />
                <FormTextInput
                    form={form}
                    name="quantity"
                    label="Quantity"
                    inputProps={{
                        type: "number"
                    }} />
                <Button type="submit">Create Listing</Button>
            </form> 
        </Form>
    )
}
