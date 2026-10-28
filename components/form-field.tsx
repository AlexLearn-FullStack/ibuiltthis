"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import type { FieldProps } from "@/types";


export default function FormField ({
  label,
  name,
  placeholder,
  required,
  onChange,
  helperText,
  error,
  textarea,
  defaultValue
}: FieldProps) {
  
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>
        { label }
        {
          required && <span className="text-destructive text-sm -ml-1.5">*</span>
        }
      </Label>

      {
        textarea 
          ? (
            <Textarea
              id={ name }
              name={ name }
              placeholder={ placeholder }
              required={ required }
              defaultValue={ defaultValue }
              onChange={
                onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
              }
              aria-invalid={!!error?.length}
              aria-describedby={ error?.length ? `${name}-error` : undefined }
            />
          ) 
          : (
            <Input
              type="text"
              id={ name }
              name={ name }
              placeholder={ placeholder }
              required={ required }
              defaultValue={ defaultValue }
              onChange={
                onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
              }
              aria-invalid={!!error?.length}
              aria-describedby={ error?.length ? `${name}-error` : undefined }
            />
          )
      }

      {
        helperText 
          && (
            <p className="text-sm text-muted-foreground">{helperText}</p>
          )
      }

      {
        error?.length
          ? (
            <p className="text-xs text-destructive" id={`${name}-error`}>
              {
                error.join(', ')
              }
            </p>
          )
          : null
      }
    </div>
  );
}