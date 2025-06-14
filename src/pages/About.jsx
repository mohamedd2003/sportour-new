import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { translations } from '../data/translations';
import { useLanguage } from '../contexts/LanguageContext';
import img from "../assets/2.jpg"
const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      icon: Users,
      value: '300+',
      label: t.aboutPage.happyCustomers
    },
    {
      icon: Award,
      value: '1+',
      label: t.aboutPage.yearsExperience
    },
    {
      icon: Globe,
      value: '50+',
      label: t.aboutPage.destinations
    },
    {
      icon: Heart,
      value: '98%',
      label: t.aboutPage.satisfaction
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-light">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-primary">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative flex items-center justify-center h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl px-4"
          >
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {t.aboutPage.title}
            </h1>
            <p className="text-xl text-white/90">
              {t.aboutPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 text-center bg-white shadow-lg hover-lift rounded-2xl"
              >
                <stat.icon className="w-12 h-12 text-[#9e8e78] mx-auto mb-4" />
                <div className="text-3xl font-bold text-[#456161] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#9e8e78]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#456161]">
                {t.aboutPage.ourStory}
              </h2>
              <p className="text-[#9e8e78]">
                {t.aboutPage.storyContent}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover-lift"
            >
              <img
                src={img}
                alt={t.aboutPage.ourStory}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl p-8 mx-auto text-center bg-white shadow-lg rounded-2xl hover-lift"
          >
            <h2 className="text-3xl font-bold text-[#456161] mb-6">
              {t.aboutPage.ourMission}
            </h2>
            <p className="text-xl text-[#9e8e78]">
              {t.aboutPage.missionContent}
            </p>
          </motion.div>
        </div>
      </section>

   
    </div>
  );
};

export default About; 
   {/* Team Section */}
   <section className="py-16 bg-white">
   <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       className="mb-12 text-center"
     >
       <h2 className="text-3xl font-bold text-[#456161] mb-4">
         {t.aboutPage.ourTeam}
       </h2>
       <p className="text-xl text-[#9e8e78]">
         {t.aboutPage.teamSubtitle}
       </p>
     </motion.div>

     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
       {[
         {
           name: t.aboutPage.teamMember1Name,
           role: t.aboutPage.teamMember1Role,
           bio: t.aboutPage.teamMember1Bio,
           image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
         },
         {
           name: t.aboutPage.teamMember2Name,
           role: t.aboutPage.teamMember2Role,
           bio: t.aboutPage.teamMember2Bio,
           image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
         },
         {
           name: t.aboutPage.teamMember3Name,
           role: t.aboutPage.teamMember3Role,
           bio: t.aboutPage.teamMember3Bio,
           image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
         }
       ].map((member, index) => (
         <motion.div
           key={index}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.1 }}
           className="p-6 text-center shadow-lg bg-gradient-light rounded-2xl hover-lift"
         >
           <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#9e8e78]">
             <img
               src={member.image}
               alt={member.name}
               className="object-cover w-full h-full"
             />
           </div>
           <h3 className="text-xl font-bold text-[#456161] mb-2">
             {member.name}
           </h3>
           <p className="text-[#9e8e78] mb-4">
             {member.role}
           </p>
           <p className="text-[#9e8e78]">
             {member.bio}
           </p>
         </motion.div>
       ))}
     </div>
   </div>
 </section>