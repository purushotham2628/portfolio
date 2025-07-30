import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_6w1zf11', // your service ID
        'template_pksj1rr', // your template ID
        formRef.current!,
        'V2XDPZMX7ma6XZdNB' // your public key
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'purushotham2628@gmail.com',
      href: 'mailto:purushotham2628@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 7022002842',
      href: 'tel:+917022002842',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Let's discuss opportunities and collaborations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div
                        className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                        <p className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Let's Connect!</h4>
                <p className="text-gray-300 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on exciting projects,
                  or just having a conversation about technology. Feel free to reach out!
                </p>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/20 text-green-400 rounded-lg mb-6 border border-green-500/30"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/20 text-red-400 rounded-lg mb-6 border border-red-500/30"
                  >
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again later.</span>
                  </motion.div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
