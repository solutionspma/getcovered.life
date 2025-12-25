import { Header, Footer } from '@/components/layout/header-footer'
import { VoiceAIWidget } from '@/components/voice/voice-ai-widget'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Heart, 
  Shield,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react'

export const metadata = {
  title: 'Our Products | GetCovered.Life',
  description: 'Explore our life insurance products: Final Expense, Term Life, Indexed Universal Life, and Return of Premium. Find the right coverage for your family.',
}

const products = [
  {
    icon: Heart,
    title: 'Final Expense Insurance',
    description: 'Affordable whole life coverage designed to cover funeral expenses, medical bills, and other end-of-life costs.',
    features: ['No medical exam required', 'Coverage $5K-$50K', 'Fast 24-48 hour approval', 'Guaranteed acceptance options'],
    href: '/products/final-expense',
    color: 'bg-rose-500',
  },
  {
    icon: Shield,
    title: 'Term Life Insurance',
    description: 'Straightforward protection for a specific period. Get the highest coverage amounts at the lowest cost.',
    features: ['10, 20, or 30 year terms', 'Coverage up to $1M+', 'Level premiums', 'Convertible to permanent'],
    href: '/products/term-life',
    color: 'bg-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Indexed Universal Life',
    description: 'Flexible permanent coverage with cash value growth tied to market indices. Build wealth while protecting your family.',
    features: ['Cash value growth potential', 'Tax-advantaged savings', 'Flexible premiums', 'Living benefits available'],
    href: '/products/indexed-universal-life',
    color: 'bg-emerald-500',
  },
  {
    icon: RotateCcw,
    title: 'Return of Premium',
    description: 'Get your premiums back if you outlive your policy. Protection with a money-back guarantee.',
    features: ['100% premium return', 'Level rates guaranteed', 'Death benefit protection', 'Best of both worlds'],
    href: '/products/return-of-premium',
    color: 'bg-amber-500',
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy-600 to-brand-navy-700 pt-32 pb-20">
          <div className="absolute inset-0 hero-pattern opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="secondary" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Our Products
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Coverage Options For
              <span className="text-brand-gold block">Every Stage of Life</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Whether you&apos;re looking for affordable final expense coverage or comprehensive 
              wealth-building life insurance, we have the right solution for you.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product) => (
                <Card key={product.title} className="p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${product.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-brand-navy">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href={product.href}>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Not Sure Which Product Is Right For You?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our licensed agents can help you find the perfect coverage for your needs and budget.
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
