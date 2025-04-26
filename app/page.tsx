'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const faqs = [
    {
      question: "Question?",
      answer: "Answer",
    },
    {
      question: "Question?",
      answer: "Answer",
    },
    {
      question: "Question?",
      answer: "Answer",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-32 text-center"
      >
        <motion.h1 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-yellow-600"
        >
          Welcome to Himalayan Yield
        </motion.h1>

        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl mb-12 max-w-2xl mx-auto text-gray-600"
        >
          Shop, Trek, Cab — All in one place.
        </motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/shop">Get Started</Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="container mx-auto pb-32 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          { title: "Shop", desc: "Discover products", href: "/shop/products", color: "bg-amber-100" },
          { title: "Trek", desc: "Book adventures", href: "/trek", color: "bg-green-100" },
          { title: "Cab", desc: "Ride anywhere", href: "/cab", color: "bg-blue-100" },
        ].map((service, index) => (
          <motion.div
          key={index}
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
          className={`${service.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
          >
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className="mb-4 text-gray-600">{service.desc}</p>
            <Button variant="outline" asChild>
              <Link href={service.href}>Explore →</Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
      id="about" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, neque.
            </p>
          </div>

          <div className="space-y-16">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
            >
              <div className="flex justify-center">
                <Image
                src="/assets/ourstory.jpg"
                alt="Our Story" 
                width={260} 
                height={260} 
                className="shadow-sm hover:shadow-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">About 1</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi suscipit earum, fugit officiis cum dignissimos asperiores quaerat labore minima ipsam.
                </p>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
            >
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-3">About 2</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur sapiente reiciendis quisquam distinctio et fuga voluptate? Totam, accusamus? Ipsa.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <Image
                src="/assets/ourstory.jpg" 
                alt="Our Story" 
                width={260} 
                height={260} 
                className="shadow-sm hover:shadow-lg object-cover" 
                />
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8"
            >
              <div className="flex justify-center">
                <Image
                src="/assets/ourstory.jpg" 
                alt="Our Story" 
                width={260} 
                height={260} 
                className="shadow-sm hover:shadow-lg object-cover" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">About 3</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nesciunt autem ex excepturi dolorem molestias sapiente libero totam voluptatibus quod.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
      id="blog" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, eum?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Blog 1</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, consequuntur?
              </p>
              <Link href="/blog/top-5-treks" className="text-gray-600 font-medium hover:underline">
                Read More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Blog 2</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iure.
              </p>
              <Link href="/blog/travel-tips" className="text-gray-600 font-medium hover:underline">
                Read More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Blog 3</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, quod?
              </p>
              <Link href="/blog/local-guides" className="text-gray-600 font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, aut!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-700 mb-4">&rdquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, nihil.&rdquo;</p>
              <h4 className="font-semibold">- Person 1</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-700 mb-4">&rdquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, nihil.&rdquo;</p>
              <h4 className="font-semibold">- Person 2</h4>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-700 mb-4">&rdquo;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, nihil.&rdquo;</p>
              <h4 className="font-semibold">- Person 3</h4>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <summary className="cursor-pointer px-6 py-4 flex justify-between items-center font-medium text-lg">
                  {faq.question}
                  <span className="group-open:rotate-180 transition-transform"><ChevronDown className="h-5 w-5" /></span>
                </summary>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="px-6 pb-4 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              </details>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
