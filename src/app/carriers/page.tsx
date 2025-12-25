import { Header, Footer } from '@/components/layout/header-footer'
import { VoiceAIWidget } from '@/components/voice/voice-ai-widget'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Shield,
  Star,
  Award,
} from 'lucide-react'

export const metadata = {
  title: 'Our Carriers | GetCovered.Life',
  description: 'We work with America\'s most trusted insurance companies including Americo, Mutual of Omaha, Foresters, AIG, Transamerica, and more.',
}

const carriers = [
  {
    name: 'Americo',
    description: 'Leading provider of final expense and whole life insurance with simplified underwriting.',
    rating: 'A (Excellent)',
    specialties: ['Final Expense', 'Whole Life', 'Simplified Issue'],
  },
  {
    name: 'Mutual of Omaha',
    description: 'One of America\'s most recognized insurance brands with over 100 years of experience.',
    rating: 'A+ (Superior)',
    specialties: ['Term Life', 'Final Expense', 'Medicare Supplements'],
  },
  {
    name: 'Foresters Financial',
    description: 'Unique fraternal benefit society offering competitive rates and member benefits.',
    rating: 'A (Excellent)',
    specialties: ['Final Expense', 'Term Life', 'Critical Illness'],
  },
  {
    name: 'AIG',
    description: 'Global insurance leader with comprehensive life insurance solutions.',
    rating: 'A (Excellent)',
    specialties: ['Term Life', 'Universal Life', 'High Coverage Amounts'],
  },
  {
    name: 'Transamerica',
    description: 'Trusted name in life insurance for over 100 years with flexible options.',
    rating: 'A (Excellent)',
    specialties: ['Term Life', 'IUL', 'Return of Premium'],
  },
  {
    name: 'National Life Group',
    description: 'Innovative carrier known for living benefits and IUL products.',
    rating: 'A (Excellent)',
    specialties: ['IUL', 'Living Benefits', 'Term Life'],
  },
  {
    name: 'Prosperity Life',
    description: 'Specialist in final expense and simplified issue products.',
    rating: 'A- (Excellent)',
    specialties: ['Final Expense', 'Guaranteed Issue', 'Simplified Issue'],
  },
  {
    name: 'KSKJ Life',
    description: 'Fraternal carrier with competitive rates and simplified underwriting.',
    rating: 'A- (Excellent)',
    specialties: ['Final Expense', 'Term Life', 'Annuities'],
  },
]

export default function CarriersPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative hero-gradient hero-pattern pt-32 pb-20">
          <div className="absolute inset-0 hero-pattern opacity-30" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge variant="secondary" className="mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Our Carriers
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Trusted By
              <span className="text-brand-gold block">America&apos;s Best</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We partner with top-rated insurance companies to bring you the best coverage 
              options at competitive prices. All our carriers are A-rated for financial strength.
            </p>
          </div>
        </section>

        {/* Why Our Carriers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-brand-navy">A-Rated Companies</h3>
                <p className="text-gray-600">All our carriers are rated A or higher for financial stability</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-brand-navy">Proven Track Record</h3>
                <p className="text-gray-600">Decades of experience paying claims and serving families</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2 text-brand-navy">Best-in-Class Products</h3>
                <p className="text-gray-600">Competitive rates and flexible coverage options</p>
              </div>
            </div>
          </div>
        </section>

        {/* Carriers Grid */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
                Our Partner Carriers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We shop multiple carriers to find you the best coverage at the best price.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {carriers.map((carrier) => (
                <Card key={carrier.name} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="font-heading text-xl font-bold text-brand-navy">{carrier.name}</h3>
                    <span className="text-sm text-brand-gold font-semibold">{carrier.rating}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{carrier.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {carrier.specialties.map((specialty) => (
                      <span key={specialty} className="text-xs bg-brand-navy/10 text-brand-navy px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-navy">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
              Let Us Find the Best Carrier for You
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We compare rates from multiple carriers to find the perfect coverage for your needs and budget.
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
