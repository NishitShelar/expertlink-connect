import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AskQuestion from "./pages/AskQuestion";
import MentorDashboard from "./pages/MentorDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                token && user ? (
                  user.role === 'student' ? (
                    <Navigate to="/student/dashboard" replace />
                  ) : (
                    <Navigate to="/mentor/dashboard" replace />
                  )
                ) : (
                  <Landing />
                )
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Student Routes */}
            <Route 
              path="/student/dashboard" 
              element={
                <ProtectedRoute requiredRole="student">
                  <StudentDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/ask-question" 
              element={
                <ProtectedRoute requiredRole="student">
                  <AskQuestion />
                </ProtectedRoute>
              } 
            />
            
            {/* Mentor Routes */}
            <Route 
              path="/mentor/dashboard" 
              element={
                <ProtectedRoute requiredRole="mentor">
                  <MentorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/mentor/questions" 
              element={
                <ProtectedRoute requiredRole="mentor">
                  <MentorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/mentor/earnings" 
              element={
                <ProtectedRoute requiredRole="mentor">
                  <MentorDashboard />
                </ProtectedRoute>
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
