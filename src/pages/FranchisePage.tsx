import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import TrustBadges from "@/components/TrustBadges";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const benefits = [
  "Comprehensive training program",
  "Consultation and ongoing support",
  "Store management counseling",
  "Machine maintenance and support",
  "Proven business model since 2006",
  "300+ franchise stores worldwide",
];

const FranchisePage = () => (
  <Layout>
    <section className="gradient-hero section-padding">
      <div className="container-wide">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl">
          <h1 className="heading-xl text-primary-foreground mb-6">Join Our Franchise</h1>
          <p className="text-body text-primary-foreground/80 mb-4">
            Interested in Joining as a Franchisee? Open and Manage Your Own Presotea Shop.
          </p>
          <p className="text-body text-primary-foreground/80 mb-8">
            All Presotea drinks are fresh tea fresh made. We sincerely invite those who are interested in franchising to build your successful business with Presotea in Canada.
          </p>
          <Link to="/contact" className="btn-secondary">
            Contact Us <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <TrustBadges />
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img
              src="https://presoteabc.ca/wp-content/uploads/2019/01/presotea-franchise.jpg"
              alt="Presotea franchise"
              className="rounded-2xl w-full"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="heading-lg text-foreground mb-6">What We Provide</h2>
            <p className="text-body text-muted-foreground mb-6">
              We will provide everything from training, consultation, store management counseling, machine maintenance and support and more!
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-body text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding gradient-primary text-center">
      <div className="container-wide">
        <h2 className="heading-lg text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          We are currently looking for potential franchisees to become part of our "fresh tea people". If you are interested, please contact us.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:presoteabc@gmail.com" className="btn-secondary">
            Email Us <ArrowRight className="ml-2" size={18} />
          </a>
          <Link to="/contact" className="btn-outline-light">
            Contact Form
          </Link>
        </div>
      </div>
    </section>

    <div className="h-20 md:h-0" />
  </Layout>
);

export default FranchisePage;
