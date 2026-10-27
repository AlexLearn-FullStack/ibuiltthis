"use server";

import z from "zod";
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
        message: "You must be a member of an organization to submit a project"
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
        errors: validatedData.error.flatten().fieldErrors,
        message: "Invalid form data"
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

    if (e instanceof z.ZodError) {
      return {
        success: false,
        errors: e.flatten().fieldErrors,
        message: "Validation failed. Please check your inputs."
      }
    }

    return {
      success: false,
      message: "Failed to submit project",
    };
  }
}