import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/Input';
import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { authAPI } from '@/lib/api';
import { toast } from 'sonner';
import { GraduationCap, User, Users } from 'lucide-react';

const subjects = ['math', 'physics', 'chemistry', 'cs'];

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'student' | 'mentor' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    subjects: [] as string[],
  });
  const [loading, setLoading] = useState(false);

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!role) {
      toast.error('Please select a role');
      return;
    }

    if (role === 'mentor' && formData.subjects.length === 0) {
      toast.error('Please select at least one subject');
      return;
    }

    setLoading(true);

    try {
      const response = await authAPI.register({
        ...formData,
        role,
        subjects: role === 'mentor' ? formData.subjects : undefined,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Account created successfully!');

      if (user.role === 'student') {
        navigate('/student/dashboard');
      } else {
        navigate('/mentor/dashboard');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join ExpertLink today</p>
          </div>

          {!role ? (
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground mb-6">
                Choose how you want to use ExpertLink
              </p>
              
              <button
                onClick={() => setRole('student')}
                className="w-full p-6 card-elevated hover:border-primary border-2 border-transparent transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">I'm a Student</h3>
                    <p className="text-sm text-muted-foreground">Get help from expert mentors</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setRole('mentor')}
                className="w-full p-6 card-elevated hover:border-accent border-2 border-transparent transition-all text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">I'm a Mentor</h3>
                    <p className="text-sm text-muted-foreground">Share knowledge and earn</p>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">
                  Signing up as: <span className="font-medium text-foreground capitalize">{role}</span>
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setRole(null)}
                >
                  Change
                </Button>
              </div>

              <Input
                label="Full Name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <Input
                type="email"
                label="Email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />

              {role === 'mentor' && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Select Your Subjects
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => handleSubjectToggle(subject)}
                        className={`p-3 rounded-lg border-2 transition-all capitalize ${
                          formData.subjects.includes(subject)
                            ? 'border-accent bg-accent/10 text-accent font-medium'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full btn-gradient"
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          )}

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Register;
