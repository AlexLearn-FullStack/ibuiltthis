import type { LucideIcon } from "lucide-react";

export interface Stats {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}

export interface SectionHeaderProps {
  title: string,
  icon: LucideIcon,
  description: string
}

export interface ProductDemo {
  id: number,
  name: string,
  description: string,
  tags: string[],
  votes: number,
  isFeatured: boolean
}

export interface FieldProps {
  label: string,
  name: string,
  required?: boolean,
  placeholder?: string,
  helperText?: string,
  onChange?: (
    e: 
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void,
  textarea?: boolean,
  error?: string[],
  defaultValue?: string,
}

export interface FormState {
  success: boolean;
  errors?: Record<string, string[] | undefined>;
  message: string;
  values?: Record<string, string>;
}