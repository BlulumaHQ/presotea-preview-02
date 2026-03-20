import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import TrustBadges from "@/components/TrustBadges";
import mascot from "@/assets/presotea-mascot.png";
import teaLeaves from "@/assets/tea-leaves-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutPage = () => (
  <Layout>
    <section className="gradient-hero section-padding text-center">
      <div className="container-wide">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="heading-xl text-primary-foreground mb-4">About Presotea</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto">
            Fresh Bubble Tea with quality tea leaves from Taiwan using new brewing technology.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src={mascot} alt="Presotea mascot" className="w-64 mx-auto" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="heading-lg text-foreground mb-6">Our Story</h2>
            <p className="text-body text-muted-foreground mb-4">
              Presotea has been established in Taiwan since 2006. It has become one of the well-known tea shops in Taiwan and around the world. With more than 300 franchise stores opened since first launch, Presotea is also now in Canada, China, Indonesia and Australia.
            </p>
            <p className="text-body text-muted-foreground">
              Presotea has invented a new brewing technology by using high-temperature and high-pressure machine to extract the essence of tea.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding section-alt">
      <div className="container-wide">
        <TrustBadges />
      </div>
    </section>

    <section className="relative">
      <img src={teaLeaves} alt="Tea leaves" className="w-full h-[400px] object-cover" />
      <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center px-5">
          <h2 className="heading-lg text-primary-foreground mb-4">Our Quality Tea Leaves from Taiwan</h2>
          <p className="text-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
            After years of research and development, Presotea has an extensive range of unique tea related beverages to offer to our customers.
          </p>
          <Link to="/menu" className="btn-secondary">
            View Our Menu <ArrowRight className="ml-2" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="section-padding gradient-primary text-center">
      <div className="container-wide">
        <h2 className="heading-lg text-primary-foreground mb-4">Freshly Made, Every Cup</h2>
        <p className="text-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
          All Presotea drinks are fresh tea fresh made. Visit us today and taste the difference.
        </p>
        <Link to="/store-locations" className="btn-secondary">
          Find a Store <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </section>

    <div className="h-20 md:h-0" />
  </Layout>
);

export default AboutPage;
