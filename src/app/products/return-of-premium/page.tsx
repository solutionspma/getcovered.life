import { Header, Footer } from '@/components/layout/header-footer'
import { VoiceAIWidget } from '@/components/voice/voice-ai-widget'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Shield,
  DollarSign,
  Clock,
  Sparkles,
} from 'lucide-react'

export const metadata = {
  title: 'Return of Premium Life Insurance | GetCovered.Life',
  description: 'Get your premiums back if you outlive your policy. Return of Premium life insurance offers protection with a money-back guarantee.',
}

export default function ReturnOfPremiumPage() {
  const benefits = [
    {
      icon: RotateCcw,
      title: '100% Premium Return',
      description: 'If you outlive your policy, you get back every penny you paid in premiums.',
    },
    {
      icon: Shield,
      title: 'Full Death Benefit',
      description: 'Your family receives the full death benefit if you pass away during the term.',
    },
    {
      icon: DollarSign,
      title: 'Level Premiums',
      description: 'Your rate stays the same for the entire term. Predictable payments guaranteed.',
    },
    {
      icon: Sparkles,
      title: 'Best of Both Worlds',
      description: 'Get life insurance protection without "losing" money if you don&apos;t use it.',
    },
  ]

  const comparison = [
    { feature: 'Death Benefit', rop: '✓', term: '✓' },
    { feature: 'Level Premiums', rop: '✓', term: '✓' },
    { feature: 'Premium Refund', rop: '✓', term: '✗' },
    { feature: 'Lower Premium', rop: '✗', term: '✓' },
    { feature: 'Forced Savings', rop: '✓', term: '✗' },
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
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Return of Premium
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                  Protection With A
                  <span className="text-brand-gold block">Money-Back Guarantee</span>
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Get your premiums back if you outlive your policy. Return of Premium 
                  life insurance means you never &quot;lose&quot; your investment.
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
                    <span>100% premium return</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                    <span>Guaranteed rates</span>
                  </div>
                </div>
              </div>

              <Card className="p-8 bg-white">
                <h3 className="font-heading text-2xl font-bold mb-6 text-brand-navy">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Pay Level Premiums</h4>
                      <p className="text-gray-600">Same payment every month for the entire term</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Family Is Protected</h4>
                      <p className="text-gray-600">Full death benefit if something happens to you</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Get Your Money Back</h4>
                      <p className="text-gray-600">Outlive the policy? 100% of premiums returned!</p>
                    </div>
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
                Why Choose Return of Premium?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perfect for people who want life insurance but don&apos;t want to &quot;waste&quot; money on premiums.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-brand-navy">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                ROP vs. Traditional Term
              </h2>
            </div>
            <Card className="max-w-2xl mx-auto overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-navy text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Return of Premium</th>
                    <th className="p-4 text-center">Traditional Term</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 font-medium text-brand-navy">{row.feature}</td>
                      <td className="p-4 text-center text-2xl">{row.rop}</td>
                      <td className="p-4 text-center text-2xl">{row.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready for Protection With No Regrets?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get your free quote and see how affordable Return of Premium coverage can be.
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
