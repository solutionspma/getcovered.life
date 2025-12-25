import { Header, Footer } from '@/components/layout/header-footer'
import { VoiceAIWidget } from '@/components/voice/voice-ai-widget'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Clock,
  DollarSign,
  Users,
  Calendar,
} from 'lucide-react'

export const metadata = {
  title: 'Term Life Insurance | GetCovered.Life',
  description: 'Get affordable term life insurance with coverage up to $1M+. Compare rates from top carriers. 10, 20, and 30 year terms available.',
}

export default function TermLifePage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Lowest Cost Coverage',
      description: 'Term life offers the most coverage for your premium dollar. Protect your family affordably.',
    },
    {
      icon: Calendar,
      title: 'Flexible Terms',
      description: 'Choose 10, 20, or 30 year terms to match your needs - mortgage, kids in college, retirement.',
    },
    {
      icon: Shield,
      title: 'Level Premiums',
      description: 'Your rate stays the same for the entire term. No surprises, easy budgeting.',
    },
    {
      icon: Clock,
      title: 'Convertible Options',
      description: 'Many policies can be converted to permanent coverage without a new medical exam.',
    },
  ]

  const coverageOptions = [
    { amount: '$100,000', monthlyFrom: '$12', description: 'Basic family protection' },
    { amount: '$250,000', monthlyFrom: '$18', description: 'Mortgage and income replacement' },
    { amount: '$500,000', monthlyFrom: '$28', description: 'Comprehensive family coverage' },
    { amount: '$750,000', monthlyFrom: '$38', description: 'Extended income protection' },
    { amount: '$1,000,000', monthlyFrom: '$48', description: 'Maximum family security' },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative hero-gradient hero-pattern pt-32 pb-20">
          <div className="absolute inset-0 hero-pattern opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge variant="secondary" className="mb-6">
                  <Shield className="w-4 h-4 mr-2" />
                  Term Life Insurance
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Maximum Protection
                  <span className="text-brand-gold block">Minimum Cost</span>
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Straightforward life insurance for a specific period. Get the highest 
                  coverage amounts at rates that fit your budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button variant="secondary" size="xl" asChild>
                    <Link href="/quote">
                      Get Your Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="glass" size="xl" asChild>
                    <a href="tel:+18668116525">
                      <Phone className="w-5 h-5 mr-2" />
                      1-866-811-6525
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    <span>10-30 year terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    <span>Coverage up to $1M+</span>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-white">
                <h3 className="font-heading text-2xl font-bold mb-6 text-brand-navy">Why Families Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Families Protected</span>
                    <span className="font-bold text-brand-navy">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Starting Premium</span>
                    <span className="font-bold text-brand-navy">$12/mo</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Average Approval Time</span>
                    <span className="font-bold text-brand-navy">24-48 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Customer Rating</span>
                    <span className="font-bold text-brand-navy">4.9/5</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                Why Choose Term Life Insurance?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Term life is the most affordable way to protect your family during your working years.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-brand-navy">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                Coverage Options
              </h2>
              <p className="text-xl text-gray-600">
                Sample rates for healthy 35-year-old, 20-year term
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {coverageOptions.map((option) => (
                <Card key={option.amount} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-brand-navy mb-2">{option.amount}</div>
                  <div className="text-brand-gold font-semibold mb-2">From {option.monthlyFrom}/mo</div>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </Card>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8 text-sm">
              *Rates vary based on age, health, and coverage amount. Get your personalized quote.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Protect Your Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free quote in minutes. Our licensed agents are standing by to help you find the perfect coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" asChild>
                <Link href="/quote">
                  Get Your Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="tel:+18668116525">
                  <Phone className="w-5 h-5 mr-2" />
                  1-866-811-6525
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <VoiceAIWidget />
    </>
  )
}
