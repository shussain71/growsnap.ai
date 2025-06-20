
import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  currentChallenges: string;
  desiredOutcome: string;
  timeline: string;
  budget: string;
}

const ExpandableContactForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    currentChallenges: '',
    desiredOutcome: '',
    timeline: '',
    budget: ''
  });

  const questions = [
    { key: 'name', label: 'What\'s your name?', type: 'text', placeholder: 'Enter your full name' },
    { key: 'email', label: 'What\'s your email address?', type: 'email', placeholder: 'Enter your email' },
    { key: 'phone', label: 'What\'s your phone number?', type: 'tel', placeholder: 'Enter your phone number' },
    { key: 'company', label: 'What\'s your company name?', type: 'text', placeholder: 'Enter your company name' },
    { key: 'industry', label: 'What industry are you in?', type: 'text', placeholder: 'e.g., Healthcare, Education, Retail' },
    { key: 'currentChallenges', label: 'What are your current business challenges?', type: 'textarea', placeholder: 'Describe your main challenges' },
    { key: 'desiredOutcome', label: 'What outcome are you hoping to achieve?', type: 'textarea', placeholder: 'Describe your desired outcome' },
    { key: 'timeline', label: 'What\'s your timeline for implementation?', type: 'text', placeholder: 'e.g., Within 3 months, ASAP' },
    { key: 'budget', label: 'What\'s your budget range?', type: 'text', placeholder: 'e.g., $5,000-$10,000' }
  ];

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    
    // Auto-advance to next question when current one is filled
    if (value.trim() && currentStep < questions.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you! Your message has been sent. We\'ll get back to you soon.');
  };

  const isStepComplete = (stepIndex: number) => {
    const question = questions[stepIndex];
    return formData[question.key as keyof FormData].trim() !== '';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {questions.map((question, index) => {
        const isVisible = index <= currentStep;
        const isComplete = isStepComplete(index);
        
        if (!isVisible) return null;
        
        return (
          <div
            key={question.key}
            className={cn(
              "transition-all duration-500 ease-in-out space-y-3",
              isComplete ? "opacity-70" : "opacity-100"
            )}
          >
            <Label htmlFor={question.key} className="text-base font-medium text-foreground">
              {question.label}
            </Label>
            {question.type === 'textarea' ? (
              <textarea
                id={question.key}
                value={formData[question.key as keyof FormData]}
                onChange={(e) => handleInputChange(question.key as keyof FormData, e.target.value)}
                placeholder={question.placeholder}
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
              />
            ) : (
              <Input
                id={question.key}
                type={question.type}
                value={formData[question.key as keyof FormData]}
                onChange={(e) => handleInputChange(question.key as keyof FormData, e.target.value)}
                placeholder={question.placeholder}
                className="text-base md:text-sm"
              />
            )}
            {isComplete && (
              <div className="text-sm text-[#2ecc71] font-medium">✓ Completed</div>
            )}
          </div>
        );
      })}
      
      {currentStep === questions.length - 1 && isStepComplete(questions.length - 1) && (
        <div className="pt-4 transition-all duration-500 ease-in-out">
          <Button 
            type="submit" 
            className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white py-3 text-base font-medium"
          >
            Send Message
          </Button>
        </div>
      )}
      
      <div className="flex justify-center mt-4">
        <div className="text-sm text-muted-foreground">
          Question {Math.min(currentStep + 1, questions.length)} of {questions.length}
        </div>
      </div>
    </form>
  );
};

export default ExpandableContactForm;
