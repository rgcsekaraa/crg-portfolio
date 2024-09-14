'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ToastContainer, toast } from 'react-toastify';
import { z } from "zod"

const reasonSchema = z.object({
  reason: z.enum(['Job Opportunity', 'Project Collaboration', 'Feedback', 'Just Saying Hi']),
})

const jobOpportunitySchema = z.object({
  jobLink: z.string().url('Please provide a valid job post link'),
  companyName: z.string().min(1, 'Please provide a company name'),
})

const projectCollaborationSchema = z.object({
  projectDescription: z.string().min(1, 'Please provide a project description'),
  timeline: z.string().min(1, 'Please provide a timeline'),
})

const feedbackSchema = z.object({
  message: z.string().min(1, 'Please provide a message'),
})

const personalInfoSchema = z.object({
  name: z.string().min(1, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
})

export default function Component() {
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    reason: '',
    jobLink: '',
    companyName: '',
    projectDescription: '',
    timeline: '',
    message: '',
    name: '',
    email: ''
  })

  const [isSending, setIsSending] = useState(false);

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
    
    if (validateStep()) {
    setIsSending(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),  // Send form data to API
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Email sent successfully:', result);
        toast.success("Email sent successfully!");
      } else {
        console.error('Failed to send email:', result.error);
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.error("Failed to submit the form. Please try again later.");
      }
    finally {
      setIsSending(false);
    }
  }
};

  const validateStep = () => {
    const stepErrors: Record<string, string> = {}

    try {
      switch (step) {
        case 1:
          if (!formData.reason) {
          stepErrors.reason = "Please select a reason"
        } else {
          reasonSchema.parse({ reason: formData.reason })
        }
        break
        case 2:
          if (formData.reason === 'Job Opportunity') {
            jobOpportunitySchema.parse({
              jobLink: formData.jobLink,
              companyName: formData.companyName,
            })
          } else if (formData.reason === 'Project Collaboration') {
            projectCollaborationSchema.parse({
              projectDescription: formData.projectDescription,
              timeline: formData.timeline,
            })
          } else if (['Feedback', 'Just Saying Hi'].includes(formData.reason)) {
            feedbackSchema.parse({ message: formData.message })
          }
          break
        case 3:
          personalInfoSchema.parse({
            name: formData.name,
            email: formData.email,
          })
          break
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          const field = error.path[0] as string
          stepErrors[field] = error.message
        })
      }
    }

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-between mt-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1/3 text-center font-semibold ${
                  i === step ? 'text-slate-600 dark:text-slate-100' : 'text-gray-300 dark:text-slate-600'
                }`}
              >
                Step {i}
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 && (
              <div className="space-y-2">
                <Label htmlFor="reason">How can I assist you?</Label>
                <Select
                  value={formData.reason}
                  onValueChange={(value) => handleChange('reason', value)}
                >
                  <SelectTrigger id="reason">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Job Opportunity">Job Opportunity</SelectItem>
                    <SelectItem value="Project Collaboration">Project Collaboration</SelectItem>
                    <SelectItem value="Feedback">Feedback</SelectItem>
                    <SelectItem value="Just Saying Hi">Just Saying Hi</SelectItem>
                  </SelectContent>
                </Select>
                {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                {formData.reason === 'Job Opportunity' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="jobLink">Job Post Link</Label>
                      <Input
                        id="jobLink"
                        value={formData.jobLink}
                        onChange={(e) => handleChange('jobLink', e.target.value)}
                        placeholder="https://example.com/job-post"
                      />
                      {errors.jobLink && <p className="text-red-500 text-sm">{errors.jobLink}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="Enter company name"
                      />
                      {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                    </div>
                  </>
                )}
                {formData.reason === 'Project Collaboration' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="projectDescription">Project Description</Label>
                      <Textarea
                        id="projectDescription"
                        value={formData.projectDescription}
                        onChange={(e) => handleChange('projectDescription', e.target.value)}
                        placeholder="Describe your project"
                        className="h-32"
                      />
                      {errors.projectDescription && <p className="text-red-500 text-sm">{errors.projectDescription}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Input
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleChange('timeline', e.target.value)}
                        placeholder="e.g., 3 months, 6 weeks"
                      />
                      {errors.timeline && <p className="text-red-500 text-sm">{errors.timeline}</p>}
                    </div>
                  </>
                )}
                {['Feedback', 'Just Saying Hi'].includes(formData.reason) && (
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Type your message here"
                      className="h-32"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  </div>
                )}
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="Your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button variant="outline" onClick={handleBack}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          )}
          {step < 3 ? (
            <Button className="ml-auto" onClick={handleNext} disabled={isSending}>
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button className="ml-auto" onClick={handleSubmit} disabled={isSending}>
              {isSending ? 'Sending...' : 'Submit'} <Send className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
        <ToastContainer />
      </Card>
    </div>
  )
}
