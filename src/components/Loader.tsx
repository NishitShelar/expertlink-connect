import { Loader2 } from 'lucide-react';

export const Loader = ({ text = 'Loading...' }: { text?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <Loader2 className="w-10 h-10 text-primary animate-spin" />
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};
