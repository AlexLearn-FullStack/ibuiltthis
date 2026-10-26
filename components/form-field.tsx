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
  textarea
}: FieldProps) {
  
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{ label }</Label>

      {
        textarea 
          ? (
            <Textarea
              id={ name }
              name={ name }
              placeholder={ placeholder }
              required
              onChange={
                onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
              }
            />
          ) 
          : (
            <Input
              type="text"
              id={ name }
              name={ name }
              placeholder={ placeholder }
              required={ required }
              onChange={
                onChange as (e: React.ChangeEvent<HTMLInputElement>) => void
              }
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
        error && <p className="text-xs text-destructive">{error}</p>
      }
    </div>
  );
}