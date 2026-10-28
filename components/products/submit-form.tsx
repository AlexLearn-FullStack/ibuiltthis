"use client";

import { useActionState } from "react";
import FormField from "../form-field";
import { Button } from "../ui/button";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { addProductAction } from "@/lib/products/products-actions";
import type { FormState } from "@/types";
import { cn } from '@/lib/utils';


const initialState: FormState = {
  success: false,
  errors: undefined,
  message: ""
}

export default function SubmitForm () {
  const [ state, formAction, isPending ] = useActionState(
    addProductAction,
    initialState
  )

  const { success, message, errors, values } = state;

  return (
    <form className="space-y-6" action={ formAction }>
      {
        message && (
          <div
            className={
              cn(
                "p-4 rounded-lg border",
                success
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-destructive/10 border-destructive text-destructive"
              )
            }
            role="alert"
            aria-live="polite"
          >{ message }</div>
        )
      }

      <FormField
        name="name"
        label="Project Name"
        placeholder="My awesome project"
        required
        defaultValue={ values?.name }
        error={ errors?.name ?? [] }
      />

      <FormField
        name="slug"
        label="Slug"
        placeholder="my-awesome-project"
        required
        defaultValue={ values?.slug }
        helperText="URL-friendly version of your project name. Must only contain letters, numbers, and dashes, and in lowercase."
        error={ errors?.slug ?? [] }
      />

      <FormField
        name="tagline"
        label="Tagline"
        placeholder="A brief catchy description."
        defaultValue={ values?.tagline }
        error={ errors?.tagline ?? [] }
      />

      <FormField
        textarea
        name="description"
        label="Description"
        placeholder="Tell us more about your project..."
        defaultValue={ values?.description }
        required
        error={ errors?.description ?? [] }
      />

      <FormField
        name="websiteUrl"
        label="Website URL"
        placeholder="https://yourproject.com"
        required
        defaultValue={ values?.websiteUrl }
        helperText="Enter your project's website or landing page URL."
        error={ errors?.websiteUrl ?? [] }
      />

      <FormField
        name="tags"
        label="Tags"
        placeholder="AI, SaaS, Productivity"
        defaultValue={ values?.tags }
        required
        helperText="Project tags. One-word comma separated tags."
        error={ errors?.tags ?? [] }
      />

      <Button
        type="submit"
        size="lg"
        disabled={ isPending }
        className="w-full cursor-pointer"
      >
        {
          isPending
            ? (
              <>
                <Loader2Icon className="size-4 animate-spin" />
                Submitting...
              </>
            )
            : (
              <>
                <SparklesIcon className="size-4" />
                Submit Project
              </>
            )
        }
      </Button>
    </form>
  );
}