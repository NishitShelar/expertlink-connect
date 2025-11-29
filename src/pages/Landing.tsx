import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { GraduationCap, Users, Zap, DollarSign, Clock, Shield } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Connect. Learn. Grow.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-dark via-accent to-secondary bg-clip-text text-transparent">
            Expert Mentorship<br />On Demand
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with expert mentors instantly. Get personalized help with your questions in math, physics, chemistry, and computer science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient text-lg px-8">
              <Link to="/register">Get Started Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose ExpertLink?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Matching</h3>
              <p className="text-muted-foreground">
                Our AI matches you with the perfect mentor based on your question and needs in seconds.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Mentors</h3>
              <p className="text-muted-foreground">
                Learn from verified experts with proven track records in their fields.
              </p>
            </div>
            
            <div className="card-elevated p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-muted-foreground">
                Get help whenever you need it. Our mentors are available around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Students Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                For Students
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get instant help with your questions. Our platform uses advanced AI to understand your needs and connect you with the best mentor.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Ask questions in any subject</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>AI-powered mentor matching</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Transparent pricing</span>
                </li>
              </ul>
            </div>
            <div className="card-elevated p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <GraduationCap className="w-20 h-20 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Start Learning Today</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of students getting expert help with their studies.
              </p>
              <Button asChild className="btn-gradient w-full">
                <Link to="/register">Join as Student</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Mentors Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="card-elevated p-8 bg-gradient-to-br from-accent/5 to-secondary/5 order-2 md:order-1">
              <DollarSign className="w-20 h-20 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Earn While Teaching</h3>
              <p className="text-muted-foreground mb-6">
                Share your expertise and earn money helping students succeed.
              </p>
              <Button asChild className="btn-gradient w-full">
                <Link to="/register">Join as Mentor</Link>
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                For Mentors
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Build your reputation as an expert and earn money on your schedule. Help students while growing your professional network.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Set your own schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Choose your subjects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span>Secure payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="card-elevated p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join ExpertLink today and experience a new way of learning and teaching.
            </p>
            <Button asChild size="lg" className="btn-gradient text-lg px-8">
              <Link to="/register">Create Your Account</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
