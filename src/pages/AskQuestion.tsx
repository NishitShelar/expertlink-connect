import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { questionsAPI } from '@/lib/api';
import { toast } from 'sonner';
import { ArrowLeft, Sparkles, DollarSign, Users } from 'lucide-react';

const subjects = ['math', 'physics', 'chemistry', 'cs'];

const AskQuestion = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!subject || !text.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await questionsAPI.post({
        student_id: user.id,
        text,
        subject,
      });

      setResult(response.data);
      toast.success('Question posted successfully!');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to post question');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/student/dashboard')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Ask a Question</h1>
            <p className="text-muted-foreground">
              Our AI will match you with the perfect mentor
            </p>
          </div>

          {!result ? (
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Subject
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {subjects.map((subj) => (
                      <button
                        key={subj}
                        type="button"
                        onClick={() => setSubject(subj)}
                        className={`p-4 rounded-lg border-2 transition-all capitalize font-medium ${
                          subject === subj
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Question
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Describe your question in detail..."
                    className="input-field min-h-[200px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-gradient"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Submit Question'}
                </Button>
              </form>
            </Card>
          ) : (
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">AI Analysis Complete</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-muted-foreground">Keywords:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {result.keywords?.map((keyword: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">Estimated Price:</span>
                        <span className="font-bold text-secondary">${result.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Matched Mentors ({result.matched?.length || 0})
                </h3>
                <div className="grid gap-4">
                  {result.matched?.map((mentor: any, idx: number) => (
                    <Card key={idx} className="hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-lg">{mentor.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {mentor.subjects?.join(', ')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Match Score</p>
                          <p className="text-2xl font-bold text-primary">
                            {Math.round(mentor.score * 100)}%
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-accent/5 border-accent/20">
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">⏳ Waiting for Mentor</h3>
                  <p className="text-muted-foreground">
                    Your question has been sent to matched mentors. You'll be notified when a mentor accepts!
                  </p>
                </div>
              </Card>

              <Button
                onClick={() => navigate('/student/dashboard')}
                variant="outline"
                className="w-full"
              >
                Return to Dashboard
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AskQuestion;
