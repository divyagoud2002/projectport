
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { SOCIAL_LINKS } from '../data';
import * as Icons from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_y1zyzhj', // Your Service ID
      'template_tywztpa', // Your Template ID
      formData,
      '34WWGKS8bab4MRwqD' // Your Public Key
    )
    .then(() => {
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      setSubmitMessage('Something went wrong. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="border-2 border-blue-600 dark:border-blue-400 rounded-xl p-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll do my best to get back to you!
            </p>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0">
                    <Icons.Mail className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <a href="mailto:gouddivyathimmapuram@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                      gouddivyathimmapuram@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 shrink-0">
                    <Icons.MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Hyderabad, India</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social) => {
                      const LucideIcon = Icons[social.icon as keyof typeof Icons];
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          aria-label={`Visit my ${social.name}`}
                        >
                          {LucideIcon && <LucideIcon size={20} />}
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Looking for opportunities</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm currently available for full-time positions, internships, or freelance projects.
                    Feel free to reach out if you think I'd be a good fit for your team!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
