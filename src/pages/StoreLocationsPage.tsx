import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import storeImg from "@/assets/presotea-store.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const locations = [
  { name: "Presotea Metrotown", address: "Burnaby, BC" },
  { name: "Presotea Richmond", address: "Richmond, BC" },
  { name: "Presotea Coquitlam", address: "Coquitlam, BC" },
];

const StoreLocationsPage = () => (
  <Layout>
    <section className="gradient-hero section-padding text-center">
      <div className="container-wide">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="heading-xl text-primary-foreground mb-4">Store Locations</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto">
            Find your nearest Presotea location in British Columbia, Canada.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-md text-foreground mb-8">Our Locations</h2>
            <div className="space-y-4">
              {locations.map((loc) => (
                <motion.div
                  key={loc.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card-elevated p-6 flex items-start gap-4"
                >
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{loc.name}</h3>
                    <p className="text-body-sm text-muted-foreground">{loc.address}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-body-sm text-muted-foreground mt-6">
              For the most up-to-date location information, please contact us at{" "}
              <a href="mailto:presoteabc@gmail.com" className="text-primary font-bold hover:underline">
                presoteabc@gmail.com
              </a>
            </p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <img src={storeImg} alt="Presotea store interior" className="rounded-2xl w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding gradient-primary text-center">
      <div className="container-wide">
        <h2 className="heading-lg text-primary-foreground mb-4">Can't Find a Location Near You?</h2>
        <p className="text-body text-primary-foreground/80 max-w-xl mx-auto mb-8">
          Contact us to learn about upcoming locations or franchise opportunities.
        </p>
        <Link to="/contact" className="btn-secondary">
          Contact Us <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </section>

    <div className="h-20 md:h-0" />
  </Layout>
);

export default StoreLocationsPage;
