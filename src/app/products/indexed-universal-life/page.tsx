import { Header, Footer } from '@/components/layout/header-footer'
import { VoiceAIWidget } from '@/components/voice/voice-ai-widget'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Shield,
  DollarSign,
  PiggyBank,
  Wallet,
} from 'lucide-react'

export const metadata = {
  title: 'Indexed Universal Life Insurance | GetCovered.Life',
  description: 'Build wealth while protecting your family with Indexed Universal Life insurance. Cash value growth tied to market indices with downside protection.',
}

export default function IndexedUniversalLifePage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cash Value Growth',
      description: 'Your cash value grows based on market index performance with a guaranteed floor.',
    },
    {
      icon: Shield,
      title: 'Downside Protection',
      description: 'Your cash value is protected from market losses. Never lose principal to market downturns.',
    },
    {
      icon: DollarSign,
      title: 'Tax Advantages',
      description: 'Cash value grows tax-deferred. Access funds tax-free through policy loans.',
    },
    {
      icon: Wallet,
      title: 'Flexible Premiums',
      description: 'Adjust your premium payments as your financial situation changes.',
    },
  ]

  const features = [
    'Permanent death benefit protection',
    'Cash value accumulation potential',
    'Tax-advantaged growth',
    'Policy loans available',
    'Living benefits riders',
    'Retirement income supplement',
    'Estate planning tool',
    'Flexible premium payments',
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-600 to-brand-navy-700 pt-32 pb-20">
          <div className="absolute inset-0 hero-pattern opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <Badge variant="secondary" className="mb-6">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Indexed Universal Life
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Protection Plus
                  <span className="text-brand-gold block">Wealth Building</span>
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Flexible permanent life insurance with cash value growth potential tied to 
                  market indices. Build wealth while protecting your family.
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
                    <span>Cash value growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    <span>Tax advantages</span>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-white">
                <h3 className="font-heading text-2xl font-bold mb-6 text-brand-navy">IUL Benefits</h3>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                Why Choose Indexed Universal Life?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                IUL combines permanent life insurance protection with cash value growth potential.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-brand-navy">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                How IUL Works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="font-heading text-lg font-bold mb-2 text-brand-navy">Pay Premiums</h3>
                <p className="text-gray-600">Flexible premiums fund your death benefit and cash value.</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="font-heading text-lg font-bold mb-2 text-brand-navy">Grow Cash Value</h3>
                <p className="text-gray-600">Cash value grows based on index performance with downside protection.</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="font-heading text-lg font-bold mb-2 text-brand-navy">Access Your Money</h3>
                <p className="text-gray-600">Take tax-free loans for retirement, emergencies, or opportunities.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Wealth & Protect Your Family?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              IUL is a powerful financial tool. Let our experts help you understand if it&apos;s right for you.
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
