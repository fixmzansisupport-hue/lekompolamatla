import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ReactNode } from "react";

export function ImageLightbox({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="block w-full text-left">
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl border-border bg-background p-2 sm:p-4">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <img src={src} alt={alt} className="h-auto max-h-[85vh] w-full rounded-lg object-contain" />
      </DialogContent>
    </Dialog>
  );
}