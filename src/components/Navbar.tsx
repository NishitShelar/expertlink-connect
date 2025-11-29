import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, User, LogOut } from 'lucide-react';

export const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
              ExpertLink
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{user?.name}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="btn-gradient">
                  <Link to="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
