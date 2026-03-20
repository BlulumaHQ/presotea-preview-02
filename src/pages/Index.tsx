import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Layout from "@/components/Layout";
import TrustBadges from "@/components/TrustBadges";
import heroDrinks from "@/assets/hero-drinks.jpg";
import mascot from "@/assets/presotea-mascot.png";
import storeImg from "@/assets/presotea-store.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  { name: "Black Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/blacktea.jpg", desc: "Black tea is fully fermented tea. Darjeeling, a type of black tea, is known as the \"king of black tea\"." },
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
    {/* Hero Section */}
    <section className="relative gradient-hero overflow-hidden">
      <div className="container-wide py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} /> Fresh Tea, Freshly Made
            </span>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Fresh Bubble Tea Brewed with Premium Taiwan Tea
            </h1>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-lg">
              Presotea has invented a new brewing technology by using high-temperature and high-pressure machine to extract the essence of tea. Quality you can taste in every sip.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="btn-secondary">
                View Full Menu <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img src={heroDrinks} alt="Fresh bubble tea drinks" className="rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <TrustBadges />
      </div>
    </section>

    {/* Bestsellers / Feature Drinks */}
    <section className="section-padding">
      <div className="container-wide text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="heading-lg text-foreground mb-3">Feature Drinks</h2>
          <p className="text-body text-muted-foreground mb-12 max-w-2xl mx-auto">
            Check Out Our All Time Favorites! Get One Today at One of Our Presotea Locations
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              className="card-elevated p-6 flex flex-col items-center"
            >
              <img src={drink.img} alt={drink.name} className="w-36 h-auto mb-4" />
              <h3 className="font-bold text-foreground text-sm">{drink.name}</h3>
            </motion.div>
          ))}
        </div>
        <Link to="/menu" className="btn-primary mt-10 inline-flex">
          Click Here to See Our Full Menu <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </section>

    {/* Problem → Solution: Why Presotea */}
    <section className="section-padding gradient-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={mascot} alt="Presotea mascot" className="w-64 mx-auto lg:mx-0" />
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="heading-lg text-primary-foreground mb-6">New Brewing Technology</h2>
            <p className="text-body text-primary-foreground/80 mb-4">
              Presotea has invented a new brewing technology by using high-temperature and high-pressure machine to extract the essence of tea. Every cup is freshly made with quality tea leaves sourced directly from Taiwan.
            </p>
            <p className="text-body text-primary-foreground/80 mb-8">
              After years of research and development, Presotea has an extensive range of unique tea related beverages to offer to our customers.
            </p>
            <Link to="/about" className="btn-secondary">
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Tea Types */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-3">Our Quality Tea Leaves from Taiwan</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">Extensive Range of Premium Teas</p>
        </motion.div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teaTypes.map((tea, i) => (
            <motion.div
              key={tea.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
              className="card-elevated"
            >
              <img src={tea.img} alt={tea.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-2">{tea.name}</h3>
                <p className="text-body-sm text-muted-foreground">{tea.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials / Social Proof */}
    <section className="section-padding">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-3">What Our Customers Say</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.15 } } }}
              className="bg-accent p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-body text-foreground mb-4">"{t.text}"</p>
              <p className="font-bold text-sm text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Store Image + CTA */}
    <section className="relative">
      <img src={storeImg} alt="Presotea store" className="w-full h-[400px] md:h-[500px] object-cover" />
      <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center px-5">
          <h2 className="heading-lg text-primary-foreground mb-4">Visit Us Today</h2>
          <p className="text-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Find your nearest Presotea location in British Columbia and experience the freshness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/store-locations" className="btn-secondary">
              Store Locations <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Franchise CTA */}
    <section className="section-padding section-alt">
      <div className="container-wide text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="heading-lg text-foreground mb-4">Join Our Franchise</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-4">
            Interested in Joining as a Franchisee? Open and Manage Your Own Presotea Shop.
          </p>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
            All Presotea drinks are fresh tea fresh made. We sincerely invite those who are interested in franchising to build your successful business with Presotea in Canada. We will provide everything from training, consultation, store management counseling, machine maintenance and support and more!
          </p>
          <Link to="/franchise" className="btn-primary">
            Learn More <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Bottom spacer for mobile sticky CTA */}
    <div className="h-20 md:h-0" />
  </Layout>
);

export default Index;
