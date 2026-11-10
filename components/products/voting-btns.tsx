/** biome-ignore-all lint/a11y/noStaticElementInteractions: isolate click */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: isolate click */
'use client';

import { useState, useOptimistic, useTransition } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { downVoteProductAction, upVoteProductAction } from "@/lib/products/products-actions";


export default function VotingBtns ({
  voteCount: initialVoteCount,
  productId,
}: {
  voteCount: number;
  productId: number;
}) {
  const [ hasVoted, setHasVoted ] = useState<boolean>(false)
  const [ optimisticVoteCount, setOptimisticVoteCount ] = useOptimistic(
    initialVoteCount,
    (currentCount, change: number) => Math.max(
      0, currentCount + change
    )
  );
  const [ isPending, startTransition ] = useTransition();
  
  const handleUpvote = async () => {
    startTransition(async () => {
      setOptimisticVoteCount(1);
      setHasVoted(true)
      const result = await upVoteProductAction(productId);
      if (!result.success) {
        console.error(result.message)
      }
    })
  }
  
  const handleDownVote = async () => {
    startTransition(async () => {
      setOptimisticVoteCount(-1);
      setHasVoted(false)
      const result = await downVoteProductAction(productId);
      if (!result.success) {
        console.error(result.message)
      }
    })
  }
  
  return (
    <div
      className="flex flex-col items-center gap-1 shrink-0"
      onClick={
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    >
      <Button
        variant="ghost"
        size="icon-sm"
        className={
          cn("h-8 w-8 text-primary",
            hasVoted
              ? "text-primary hover:bg-primary/20 bg-primary/10 cursor-not-allowed"
              : "hover:bg-primary/10 hover:text-primary cursor-pointer"
          )
        }
        onClick={ handleUpvote }
        disabled={ isPending }
      >
        <ChevronUp className="size-5" />
      </Button>

      <span className="text-sm font-semibold transition-colors text-foreground">
        { optimisticVoteCount }
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
        onClick={ handleDownVote }
        disabled={ isPending }
      >
        <ChevronDown className="size-5" />
      </Button>
    </div>
  )
}