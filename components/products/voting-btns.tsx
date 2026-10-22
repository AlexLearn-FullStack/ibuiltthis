/** biome-ignore-all lint/correctness/noUnusedVariables: todo */
'use client';

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";


export default function VotingBtns ({ voteCount }: { voteCount: number }) {
  const [ hasVoted, setHasVoted ] = useState<boolean>(false);
  
  
  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <Button
        variant="ghost"
        size="icon-sm"
        className={
          cn("h-8 w-8 text-primary",
            hasVoted
              ? "text-primary hover:bg-primary/20 bg-primary/10"
              : "hover:bg-primary/10 hover:text-primary cursor-pointer"
          )
        }
      >
        <ChevronUp className="size-5" />
      </Button>

      <span className="text-sm font-semibold transition-colors text-foreground">
        { voteCount }
      </span>

      <Button
        variant="ghost"
        size="icon-sm"
        className={
          cn("h-8 w-8 text-primary", 
            hasVoted
              ? "hover:text-destructive cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          )
        }
      >
        <ChevronDown className="size-5" />
      </Button>
    </div>
  )
}