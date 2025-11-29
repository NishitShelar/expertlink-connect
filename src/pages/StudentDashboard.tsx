import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MessageSquare, Clock, CheckCircle } from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">Ready to learn something new?</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Questions Asked</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-secondary/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-primary/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Completed</p>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 text-center">
          <MessageSquare className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-2">Ask Your First Question</h2>
          <p className="text-muted-foreground mb-6">
            Get matched with an expert mentor who can help you with your question
          </p>
          <Button 
            onClick={() => navigate('/ask-question')}
            className="btn-gradient"
            size="lg"
          >
            Ask a Question
          </Button>
        </Card>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Questions</h2>
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              No questions yet. Ask your first question to get started!
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
