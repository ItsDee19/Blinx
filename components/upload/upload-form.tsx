'use client';

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState, useRef } from "react";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { useToast } from "@/components/ui/use-toast";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Valid file is required" })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size must be less than 20MB",
    })
    .refine(
      (file) => file.type === "application/pdf",
      {
        message: "File must be a PDF",
      }
    ),
});

export default function UploadForm() {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const {startUpload} = useUploadThing("pdfUploader",
    {
      onClientUploadComplete: (data) => {
        console.log('file url', data?.[0]?.url);
      },
      onUploadError: (error: Error) => {
        console.log('error', error);
      },
    }
  );

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validatedFields = schema.safeParse({ file });
      if (validatedFields.success) {
        const resp = await startUpload([validatedFields.data.file]);
        if (!resp) return;
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const validatedFields = schema.safeParse({ file });
      
      if (!validatedFields.success) { 
        toast({
          title: "Something went wrong",
          variant: "destructive",
          description: validatedFields.error
            .flatten()
            .fieldErrors.file?.[0] ?? "Invalid file type",
        });
        return;
      }

      toast({
        title: "Uploading your PDF",
        description: "Getting your PDF ready for analysis...",
      });

      const resp = await startUpload([validatedFields.data.file]);
      if (!resp) {
        toast({
          title: "Something went wrong",
          variant: "destructive",
          description: "Please try again.",
        });
        return;
      }

      toast({
        title: "Processing your PDF",
        description: "Hang tight! Our AI is working its magic.",
      });
    }
  };

  return (
    <div className="w-full max-w-xl">
      <div 
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200
          ${isDragging 
            ? 'border-rose-500 bg-rose-50/50' 
            : 'border-gray-300 hover:border-rose-300 hover:bg-rose-50/30'
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="relative z-10">
          <div className="mx-auto h-16 w-16 rounded-full bg-rose-100/50 flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 text-rose-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Drop your PDF here
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            or click to browse
          </p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf"
            onChange={handleFileSelect}
          />
          <Button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-gradient-to-r from-slate-700 to-rose-600 hover:from-slate-800 hover:to-rose-700 
              shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Select PDF
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-rose-100/20 to-transparent rotate-12"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-100/20 to-transparent -rotate-12"></div>
        </div>
      </div>
    </div>
  );
}