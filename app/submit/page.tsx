import { SparklesIcon } from "lucide-react";
import SectionHeader from "@/components/section-header";
import SubmitForm from "@/components/products/submit-form";


export default function SubmitPage () {
  
  return (
    <main className="py-20">
      <section className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Submit your project"
            icon={SparklesIcon}
            description="Share your creation with the community. Your submission will be reviewed before going live."
          />
        </div>

        <section className="max-w-2xl mx-auto">
          <SubmitForm />
        </section>
      </section>
    </main>
  )
}