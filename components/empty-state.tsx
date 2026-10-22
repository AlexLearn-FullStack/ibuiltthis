import type { LucideIcon } from "lucide-react";


interface EmptyStateProps {
  message: string,
  icon?: LucideIcon
}

export default function EmptyState ({
  message,
  icon: Icon
}: EmptyStateProps) {

  return (
    <div className="empty-state">
      {
        Icon
          && (
            <Icon className="size-9 text-muted-foreground/50 mx-auto mb-4" />
          )
      }

      <p className="text-lg text-muted-foreground">{ message }</p>
    </div>
  )
}