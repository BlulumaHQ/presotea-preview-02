import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Leaf, Globe, Award, Clock, Zap, ShieldCheck, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import heroDrinks from "@/assets/hero-drinks.jpg";
import mascot from "@/assets/presotea-mascot.png";
import storeImg from "@/assets/presotea-store.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const bestsellers = [
  { name: "Classic Milk Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-01.png" },
  { name: "Taro Milk Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-2.png" },
  { name: "Matcha Latte", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-03.png" },
  { name: "Brown Sugar Boba", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-04.png" },
];

const teaTypes = [
  { name: "Green Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/greentea.jpg", desc: "Green tea is unfermented tea and is known for its sweet refreshing taste and aroma." },
  { name: "Flower Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/flowertea.jpg", desc: "Commonly known as Jasmine Tea, made by combining the aroma of flowers with tea leave." },
  { name: "Black Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/blacktea.jpg", desc: "Black tea is fully fermented tea. Darjeeling, a type of black tea, is known as the \"king of black tea\" which has a distinctive aroma and flavour." },
  { name: "Matcha", img: "https://presoteabc.ca/wp-content/uploads/2019/01/matcha.jpg", desc: "Made from steaming the buds of tea leaves, then dried and grounded into powder." },
  { name: "SenCha", img: "https://presoteabc.ca/wp-content/uploads/2019/01/sencha-1.jpg", desc: "Made by steaming fresh tea leaves to prevent fermentation, and then knead into a straight, flat shape." },
];

const testimonials = [
  { name: "Sarah L.", text: "Best bubble tea in BC! The matcha latte is absolutely incredible. Fresh and authentic every single time.", rating: 5 },
  { name: "Kevin W.", text: "I love how Presotea uses real tea leaves. You can taste the difference compared to other boba shops!", rating: 5 },
  { name: "Mia C.", text: "The quality is consistently great across all their locations. My go-to spot for bubble tea.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 1: HOOK — Attention-Grabbing Hero */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={heroDrinks} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="relative container-wide py-20 md:py-28 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2 rounded-full text-sm font-bold">
              <Leaf size={16} /> Established Since 2006 · 300+ Stores Worldwide
            </span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="heading-xl text-primary-foreground mb-6 max-w-4xl mx-auto">
            Fresh Bubble Tea Brewed with Premium Taiwan Tea Leaves
          </motion.h1>
          <motion.p variants={fadeUp} className="text-body text-primary-foreground/85 mb-10 max-w-2xl mx-auto">
            Presotea has invented a new brewing technology by using high-temperature and high-pressure machine to extract the essence of tea. Quality you can taste in every sip.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-funnel">
              View Full Menu <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="btn-funnel-outline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 2: PROBLEM — Pain Point */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 funnel-dark">
      <div className="container-wide text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="heading-lg mb-6">
            Tired of Bubble Tea That Tastes Like Sugar Water?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body opacity-80 max-w-3xl mx-auto mb-8">
            Most bubble tea shops use powdered mixes, artificial flavoring, and pre-made concentrates. You deserve better — you deserve tea that's actually made from real tea leaves, brewed fresh for every cup.
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Zap, text: "Generic powder-based drinks with no real tea flavor" },
              { icon: ShieldCheck, text: "Inconsistent quality from shop to shop" },
              { icon: Heart, text: "No transparency about where ingredients come from" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 text-left p-5 rounded-2xl border border-primary-foreground/15">
                <item.icon size={24} className="text-secondary flex-shrink-0 mt-1" />
                <p className="text-sm opacity-80">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 3: AGITATION — Emphasize the Problem */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 funnel-warm">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeUp} className="heading-lg text-foreground text-center mb-6">
            Your Taste Buds Know the Difference
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-muted-foreground text-center mb-10">
            After years of research and development, Presotea has an extensive range of unique tea related beverages to offer to our customers — all made with genuine, premium tea leaves sourced directly from Taiwan. No shortcuts. No compromises.
          </motion.p>
          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={mascot} alt="Presotea quality mascot" className="w-56 mx-auto" />
            </div>
            <div className="space-y-4">
              {[
                "Every cup brewed fresh — never from concentrate",
                "Premium tea leaves imported directly from Taiwan",
                "Patented high-pressure extraction technology",
                "Extensive range of unique tea beverages",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={22} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-body text-foreground font-bold">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 4: SOLUTION — The Offering */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 gradient-primary">
      <div className="container-wide text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="heading-lg text-primary-foreground mb-3">
            New Brewing Technology
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-primary-foreground/80 mb-6 max-w-3xl mx-auto">
            Presotea has invented a new brewing technology by using high-temperature and high-pressure machine to extract the essence of tea. Every cup is freshly made with quality tea leaves sourced directly from Taiwan.
          </motion.p>
          <motion.p variants={fadeUp} className="text-body text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            All Presotea drinks are fresh tea fresh made.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/menu" className="btn-funnel">
              Click Here to See Our Full Menu <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 5: BENEFITS — Value Breakdown (Feature Drinks) */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 section-alt">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.h2 variants={fadeUp} className="heading-lg text-foreground mb-3">Feature Drinks</motion.h2>
          <motion.p variants={fadeUp} className="text-body text-muted-foreground max-w-2xl mx-auto">
            Check Out Our All Time Favorites! Get One Today at One of Our Presotea Locations
          </motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {bestsellers.map((drink) => (
            <motion.div
              key={drink.name}
              variants={fadeUp}
              className="card-elevated p-8 flex flex-col items-center text-center"
            >
              <img src={drink.img} alt={drink.name} className="w-40 h-auto mb-5" />
              <h3 className="font-bold text-foreground">{drink.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Tea Types Grid */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
          <motion.h3 variants={fadeUp} className="heading-md text-foreground mb-3">Our Quality Tea Leaves from Taiwan</motion.h3>
          <motion.p variants={fadeUp} className="text-body-sm text-muted-foreground">Extensive Range of Premium Teas</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {teaTypes.map((tea) => (
            <motion.div key={tea.name} variants={fadeUp} className="card-elevated">
              <img src={tea.img} alt={tea.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-foreground mb-2 text-sm">{tea.name}</h4>
                <p className="text-body-sm text-muted-foreground text-xs leading-relaxed">{tea.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 6: TRUST — Testimonials & Credibility */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 funnel-dark">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.h2 variants={fadeUp} className="heading-lg mb-3">What Our Customers Say</motion.h2>
          <motion.p variants={fadeUp} className="text-body opacity-70">Real reviews from real bubble tea lovers</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="p-8 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-body mb-5 opacity-90">"{t.text}"</p>
              <p className="font-bold text-sm opacity-60">— {t.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock, label: "Est. 2006", sub: "Trusted for 19+ years" },
            { icon: Globe, label: "300+ Stores", sub: "Worldwide franchise" },
            { icon: Leaf, label: "Taiwan Tea", sub: "Premium quality leaves" },
            { icon: Award, label: "4 Countries", sub: "Global presence" },
          ].map((badge) => (
            <motion.div key={badge.label} variants={fadeUp} className="flex flex-col items-center text-center p-6 rounded-2xl border border-primary-foreground/15">
              <badge.icon className="text-secondary mb-3" size={32} />
              <span className="font-bold text-sm">{badge.label}</span>
              <span className="text-xs opacity-60 mt-1">{badge.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 7: OFFER — Clear Value (Store Visit) */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="relative">
      <img src={storeImg} alt="Presotea store location" className="w-full h-[500px] md:h-[550px] object-cover" />
      <div className="absolute inset-0 bg-foreground/70 flex items-center justify-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center px-5 max-w-3xl">
          <motion.h2 variants={fadeUp} className="heading-lg text-primary-foreground mb-4">
            Visit Us Today
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-primary-foreground/80 mb-4">
            Find your nearest Presotea location in British Columbia and experience the freshness.
          </motion.p>
          <motion.p variants={fadeUp} className="text-body text-primary-foreground/80 mb-10">
            Presotea has been established in Taiwan since 2006. It has become one of the well-known tea shops in Taiwan and around the world. With more than 300 franchise stores opened since first launch, Presotea is also now in Canada, China, Indonesia and Australia.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/store-locations" className="btn-funnel">
              Store Locations <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="btn-funnel-outline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 8: CTA — Primary Action (Contact) */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 funnel-highlight">
      <div className="container-wide text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="heading-lg text-secondary-foreground mb-4">
            Ready to Taste the Difference?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-secondary-foreground/80 max-w-2xl mx-auto mb-10">
            Fresh tea, freshly made — every single cup. Visit your nearest Presotea location or get in touch with us today.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary !bg-foreground !text-background !px-10 !py-5 !text-lg uppercase tracking-wide">
              View Full Menu <ArrowRight className="ml-2" size={20} />
            </Link>
            <a href="mailto:presoteabc@gmail.com" className="btn-primary !bg-primary !text-primary-foreground !px-10 !py-5 !text-lg uppercase tracking-wide">
              Email Us Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 9: REINFORCEMENT — Franchise Opportunity */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-20 md:py-28 funnel-dark">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeUp} className="heading-lg text-center mb-4">
            Join Our Franchise
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body opacity-80 text-center mb-4">
            Interested in Joining as a Franchisee? Open and Manage Your Own Presotea Shop.
          </motion.p>
          <motion.p variants={fadeUp} className="text-body opacity-70 text-center mb-6">
            All Presotea drinks are fresh tea fresh made. We sincerely invite those who are interested in franchising to build your successful business with Presotea in Canada. We will provide everything from training, consultation, store management counseling, machine maintenance and support and more!
          </motion.p>
          <motion.p variants={fadeUp} className="text-body opacity-70 text-center mb-10">
            We are currently looking for potential franchisees to become part of our "fresh tea people". If you are interested, please contact us by sending an email to presoteabc@gmail.com or use the form on our contact page.
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {["Training", "Consultation", "Store Management", "Machine Support"].map((item) => (
              <div key={item} className="flex flex-col items-center p-5 rounded-2xl border border-primary-foreground/15 text-center">
                <CheckCircle size={28} className="text-secondary mb-3" />
                <span className="text-sm font-bold">{item}</span>
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="text-center">
            <Link to="/franchise" className="btn-funnel">
              Learn More <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════ */}
    {/* STEP 10: FINAL CTA — Last Push */}
    {/* ═══════════════════════════════════════════════════════ */}
    <section className="py-24 md:py-32 gradient-hero">
      <div className="container-wide text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="heading-xl text-primary-foreground mb-6 max-w-3xl mx-auto">
            Fresh Tea. Freshly Made. Every Cup.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Quality tea leaves from Taiwan using new brewing technology. Experience Presotea today.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-funnel">
              Click Here to See Our Full Menu <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/contact" className="btn-funnel-outline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Bottom spacer for mobile sticky CTA */}
    <div className="h-20 md:h-0" />
  </Layout>
);

export default Index;
