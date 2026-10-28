/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: auto */
"use server";

import z from "zod";
import { NeonDbError } from "@neondatabase/serverless";
import { auth, currentUser } from "@clerk/nextjs/server";
import type { FormState } from "@/types";
import { productSchema } from "../utils";
import { db } from "@/db";
import { products } from "@/db/schema";


export const addProductAction = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    const { userId, orgId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Unauthorized. Please log in to start submitting projects."
      }
    }

    if(!orgId) {
      return {
        success: false,
        message: "You need an active organization to submit a project."
      }
    }

    const user = await currentUser();
    const submittedBy = user?.primaryEmailAddress?.emailAddress
      || user?.fullName

    const rawFormdata = Object.fromEntries(formData.entries());
    const validatedData = productSchema.safeParse(rawFormdata);

    if(!validatedData.success) {
      return {
        success: false,
        errors: z.flattenError(validatedData.error).fieldErrors,
        message: "Invalid form data",
        values: Object.fromEntries(formData) as Record<string, string>
      }
    }

    const data = validatedData.data;

    await db
      .insert(products)
      .values({
        ...data,
        submittedBy,
        userId,
        organizationId: orgId,
      });
    
    return {
      success: true,
      message: "Project submitted successfully. It will be reviewed shortly!"
    }
  
  }
  catch (e) {
    console.error(e)

    const databaseError =
      e instanceof Error && "cause" in e ? e.cause : e;

    if (
      databaseError instanceof NeonDbError
      && databaseError.code === "23505"
      && databaseError.constraint === "products_slug_idx"
    ) {
      return {
        success: false,
        errors: {
          slug: ["This slug is already in use. Please choose another slug."]
        },
        message: "This slug is already in use. Please choose another slug.",
        values: Object.fromEntries(formData.entries()) as Record<string, string>
      }
    }

    if (e instanceof z.ZodError) {
      return {
        success: false,
        errors: z.flattenError(e).fieldErrors,
        message: "Validation failed. Please check your inputs."
      }
    }

    return {
      success: false,
      message: "Failed to submit project",
    };
  }
}