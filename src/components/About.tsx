'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { customFont, editorialPro } from '@/lib/fonts';

const About = () => {
  const skills = [
    'هنر دیجیتال',
    'نقاشی سنتی',
    'عکاسی',
    'مدل‌سازی سه‌بعدی',
    'طراحی گرافیک',
    'انیمیشن'
  ];

  const achievements = [
    { number: '50+', label: 'اثر هنری خلق شده' },
    { number: '3', label: 'سال تجربه' },
    { number: '15+', label: 'نمایشگاه' },
    { number: '100%', label: 'رضایت مشتری' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/profile/kiana.jpeg"
                alt="کیانا - پرتره هنرمند"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-20"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl sm:text-5xl ${customFont.className} font-bold text-gray-900 mb-6 text-right`}>
              درباره هنرمند
            </h2>
            
            <div className={`space-y-6 text-gray-600 leading-relaxed ${editorialPro.className} text-right`}>
              <p className="text-lg">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، 
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
              </p>
              
              <p>
                و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد، 
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌طلبد.
              </p>
              
              <p>
                تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، 
                در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold text-gray-900 mb-4 ${customFont.className} text-right`}>مهارت‌ها و تخصص</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
