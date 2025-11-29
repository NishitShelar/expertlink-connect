import { GraduationCap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
              ExpertLink
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 ExpertLink. Connecting students with expert mentors.
          </p>
        </div>
      </div>
    </footer>
  );
};
