'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ExternalLink } from 'lucide-react';

// Custom Telegram Icon Component
const TelegramIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'ایمیل',
      titleEn: 'Email',
      value: 'kiana.farahani@example.com',
      href: 'mailto:kiana.farahani@example.com'
    },
    {
      icon: Phone,
      title: 'تلفن',
      titleEn: 'Phone',
      value: '+98 912 345 6789',
      href: 'tel:+989123456789'
    },
    {
      icon: MapPin,
      title: 'موقعیت',
      titleEn: 'Location',
      value: 'تهران، ایران',
      valueEn: 'Tehran, Iran',
      href: '#'
    }
  ];

  const socialLinks = [
    { 
      icon: TelegramIcon, 
      href: 'https://t.me/kianafarahani', 
      label: 'تلگرام',
      labelEn: 'Telegram',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/kianafarahani', 
      label: 'اینستاگرام',
      labelEn: 'Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/kianafarahani', 
      label: 'لینکدین',
      labelEn: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
          dir="rtl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-siavash font-bold text-gray-900 mb-4">
            تماس با من
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-slate-500 mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-editorial-pro">
            آماده همکاری هستم
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
            dir="rtl"
          >
            <h3 className="text-3xl font-siavash font-bold text-gray-900 mb-8 text-center">
              اطلاعات تماس
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Column */}
              <div className="space-y-4">
                <h4 className="text-xl font-siavash font-bold text-gray-800 mb-4 text-center">
                  تماس مستقیم
                </h4>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3, scale: 1.01 }}
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-all duration-300 group p-4 rounded-xl hover:bg-gray-50"
                  >
                    <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                      <info.icon size={20} className="text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-siavash font-bold text-gray-900 text-lg">{info.title}</div>
                      <div className="font-editorial-pro text-sm text-gray-600">{info.value}</div>
                      {info.valueEn && (
                        <div className="font-editorial-pro text-xs text-gray-500 mt-1">{info.valueEn}</div>
                      )}
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Social Media Column */}
              <div className="space-y-4">
                <h4 className="text-xl font-siavash font-bold text-gray-800 mb-4 text-center">
                  شبکه‌های اجتماعی
                </h4>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 3, scale: 1.01 }}
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-all duration-300 group p-4 rounded-xl hover:bg-gray-50"
                  >
                    <div className={`p-3 ${social.color} rounded-lg group-hover:opacity-90 transition-all duration-300`}>
                      <social.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-siavash font-bold text-gray-900 text-lg">{social.label}</div>
                      <div className="font-editorial-pro text-sm text-gray-600">{social.labelEn}</div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
