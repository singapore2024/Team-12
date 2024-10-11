'use client';

import { useState } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FileInput } from "@/components/ui/file-input";

import { clientPatch } from "@/api/base";

import type { FormInputProps } from "./form-types";
import { useToast } from "@/hooks/use-toast";

type FormFileUploadProps = FormInputProps & {
  acceptedFileTypes: string;
  fileUploadEndpoint: string;
  isImage: boolean;
  limit?: number;
};

export function FormImageUpload(props: FormFileUploadProps) {
  const { form, name, label, fileUploadEndpoint, acceptedFileTypes, limit } =
    props;

  const [isUploading, setIsUploading] = useState<boolean>(false);
  const {toast} = useToast();
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const files = e.target.files;
    const currFiles = form.getValues()["images"]
    if (limit && currFiles.length + files.length > limit) {
      toast({
        variant: "destructive",
        title: `You can upload only a maximum of ${limit} images`
      })
      return;
    }

    setIsUploading(true);


    form.setValue(name, files[0])
    setIsUploading(false);
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ }) => {
        return (
          <FormItem>
            <FormControl>
              <div className="relative h-full">
                <div className="space-y-2 h-full">
                  <FileInput
                    multiple
                    loading={isUploading}
                    accept={acceptedFileTypes}
                    id="image"
                    type="file"
                    label={label?.toString() ?? ""}
                    description="Select an image"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
