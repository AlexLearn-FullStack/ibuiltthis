"use client";

import FormField from "../form-field";
import { Button } from "../ui/button";
import { SparklesIcon } from "lucide-react";


export default function SubmitForm () {

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual logic
    console.log("Form submitted")
  }
  
  return (
    <form className="space-y-6" onSubmit={ handleSubmit }>
      <FormField
        name="name"
        label="Project Name"
        placeholder="My awesome project"
        required
        onChange={
          () => {}
        }
        error=""
      />

      <FormField
        name="slug"
        label="Slug"
        placeholder="my-awesome-project"
        required
        onChange={
          () => {}
        }
        helperText="URL-friendly version of your project name. Must only be letters"
        error=""
      />

      <FormField
        name="tagline"
        label="Tagline"
        placeholder="A brief catchy description."
        onChange={
          () => {}
        }
        error=""
      />

      <FormField
        textarea
        name="description"
        label="Description"
        placeholder="Tell us more about your project..."
        onChange={
          () => {}
        }
        error=""
      />

      <FormField
        name="websiteUrl"
        label="Website URL"
        placeholder="https://yourproject.com"
        required
        onChange={
          () => {}
        }
        helperText="Enter your project's website or landing page URL."
        error=""
      />

      <FormField
        name="tags"
        label="Tags"
        placeholder="AI, SaaS, Productivity"
        onChange={
          () => {}
        }
        helperText="Project tags. One-word comma separated tags."
        error=""
      />

      <Button
        type="submit"
        size="lg"
        className="w-full cursor-pointer"
      >
        <SparklesIcon className="size-4" />
        Submit Project
      </Button>
    </form>
  );
}