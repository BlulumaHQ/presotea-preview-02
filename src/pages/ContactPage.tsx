import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="gradient-hero section-padding text-center">
        <div className="container-wide">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="heading-xl text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-body text-primary-foreground/80 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question about our menu, franchise opportunities, or anything else.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="heading-md text-foreground mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a href="mailto:presoteabc@gmail.com" className="text-body text-primary hover:underline">
                      presoteabc@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Locations</h3>
                    <p className="text-body text-muted-foreground">British Columbia, Canada</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent p-6 rounded-2xl">
                <h3 className="font-bold text-foreground mb-2">Franchise Inquiries</h3>
                <p className="text-body-sm text-muted-foreground">
                  We are currently looking for potential franchisees to become part of our "fresh tea people". If you are interested, please contact us by sending an email to{" "}
                  <a href="mailto:presoteabc@gmail.com" className="text-primary font-bold">presoteabc@gmail.com</a>{" "}
                  or use the form here.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              {submitted ? (
                <div className="bg-primary-light rounded-2xl p-12 text-center">
                  <Send className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="heading-sm text-foreground mb-2">Thank You!</h3>
                  <p className="text-body text-muted-foreground">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message <Send className="ml-2" size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="h-20 md:h-0" />
    </Layout>
  );
};

export default ContactPage;
