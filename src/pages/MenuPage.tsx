import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const categories = [
  {
    name: "Green Tea",
    img: "https://presoteabc.ca/wp-content/uploads/2019/01/greentea.jpg",
    desc: "Green tea is unfermented tea and is known for its sweet refreshing taste and aroma.",
  },
  {
    name: "Flower Tea",
    img: "https://presoteabc.ca/wp-content/uploads/2019/01/flowertea.jpg",
    desc: "Commonly known as Jasmine Tea, made by combining the aroma of flowers with tea leave.",
  },
  {
    name: "Black Tea",
    img: "https://presoteabc.ca/wp-content/uploads/2019/01/blacktea.jpg",
    desc: "Black tea is fully fermented tea. Darjeeling, a type of black tea, is known as the \"king of black tea\" which has a distinctive aroma and flavour.",
  },
  {
    name: "Matcha",
    img: "https://presoteabc.ca/wp-content/uploads/2019/01/matcha.jpg",
    desc: "Made from steaming the buds of tea leaves, then dried and grounded into powder.",
  },
  {
    name: "SenCha",
    img: "https://presoteabc.ca/wp-content/uploads/2019/01/sencha-1.jpg",
    desc: "Made by steaming fresh tea leaves to prevent fermentation, and then knead into a straight, flat shape.",
  },
];

const bestsellers = [
  { name: "Classic Milk Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-01.png" },
  { name: "Taro Milk Tea", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-2.png" },
  { name: "Matcha Latte", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-03.png" },
  { name: "Brown Sugar Boba", img: "https://presoteabc.ca/wp-content/uploads/2019/01/Presotea-bestsellers-04.png" },
];

const MenuPage = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-hero section-padding text-center">
      <div className="container-wide">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="heading-xl text-primary-foreground mb-4">Our Menu</h1>
          <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto">
            After years of research and development, Presotea has an extensive range of unique tea related beverages to offer to our customers.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Bestsellers */}
    <section className="section-padding">
      <div className="container-wide text-center">
        <h2 className="heading-lg text-foreground mb-3">Feature Drinks</h2>
        <p className="text-body text-muted-foreground mb-12">Check Out Our All Time Favorites!</p>
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
              <h3 className="font-bold text-foreground">{drink.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tea Categories */}
    <section className="section-padding section-alt">
      <div className="container-wide">
        <h2 className="heading-lg text-foreground text-center mb-12">Our Tea Categories</h2>
        <div className="space-y-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img src={cat.img} alt={cat.name} className="rounded-2xl w-full h-64 object-cover" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="heading-md text-foreground mb-4">{cat.name}</h3>
                <p className="text-body text-muted-foreground">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding gradient-primary text-center">
      <div className="container-wide">
        <h2 className="heading-lg text-primary-foreground mb-4">Ready to Try?</h2>
        <p className="text-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Visit one of our locations and taste the difference that fresh brewing makes.
        </p>
        <Link to="/store-locations" className="btn-secondary">
          Find a Store <ArrowRight className="ml-2" size={18} />
        </Link>
      </div>
    </section>

    <div className="h-20 md:h-0" />
  </Layout>
);

export default MenuPage;
