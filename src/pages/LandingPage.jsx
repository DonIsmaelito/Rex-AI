import Navbar from '../components/Navbar';
import logoIcon from '../assets/gana_logo_icon.png';
import { ArrowRight, Shield, Zap, DollarSign, CheckCircle, TrendingUp, Users, Activity } from 'lucide-react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-forest">
      <Navbar />
      
      {/* Hero Section - Forest/Melon Gradient */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 z-0 bg-forest"
          style={{
            background: 'linear-gradient(135deg, #022c22 0%, #064e3b 40%, #065f46 100%)',
          }}
        >
          {/* Subtle overlay pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        {/* Melon Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-melon-vibrant rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-melon rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold !text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                The future of<br />
                <span className="text-melon-vibrant">insurance</span> is<br />
                infrastructure.
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg !text-melon/90 max-w-lg mb-10 leading-relaxed font-medium"
            >
              Gana replaces legacy paperwork with AI-native infrastructure. 
              Get transparent coverage, instant payouts, and structurally lower costs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-2xl max-w-lg w-full ring-4 ring-white/5">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 text-white placeholder:text-white/50 outline-none bg-transparent font-medium"
                />
                <button className="bg-melon-vibrant text-forest-dark px-8 py-3 rounded-full font-bold hover:bg-melon transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-melon-vibrant/20">
                  Get Started <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
            

          </div>
          
          {/* Right Column - Coded UI (Not Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
             {/* Fake Dashboard Interface Container */}
             <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-forest-light/10 p-6 relative z-10 w-full max-w-lg mx-auto backdrop-blur-sm bg-white/95">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                   <div>
                      <h3 className="text-forest font-bold text-xl">Good morning, Sarah</h3>
                      <p className="text-forest/60 text-sm">Here's your coverage overview</p>
                   </div>
                   <div className="w-10 h-10 rounded-full bg-melon flex items-center justify-center text-forest font-bold">SM</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                   <div className="bg-melon/20 rounded-xl p-4 border border-melon/30">
                      <div className="flex items-center gap-2 mb-2 text-forest/70 text-sm font-medium">
                         <Shield size={16} /> Active Policy
                      </div>
                      <div className="text-2xl font-bold text-forest">Tesla Model 3</div>
                      <div className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                         <CheckCircle size={12} /> Coverage Active
                      </div>
                   </div>
                   <div className="bg-forest/5 rounded-xl p-4 border border-forest/10">
                      <div className="flex items-center gap-2 mb-2 text-forest/70 text-sm font-medium">
                         <DollarSign size={16} /> Monthly Prem.
                      </div>
                      <div className="text-2xl font-bold text-forest">$89.00</div>
                      <div className="text-xs text-melon-vibrant font-semibold mt-1 bg-forest/90 inline-block px-2 py-0.5 rounded-full">
                         -25% vs Avg
                      </div>
                   </div>
                </div>

                {/* Action List */}
                <div className="space-y-3">
                   <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-forest text-white flex items-center justify-center">
                            <Activity size={20} />
                         </div>
                         <div>
                            <div className="font-bold text-forest text-sm">Driving Score</div>
                            <div className="text-xs text-gray-500">Last updated: Today</div>
                         </div>
                      </div>
                      <div className="font-bold text-lg text-forest group-hover:text-melon-vibrant transition-colors">98/100</div>
                   </div>
                   
                   <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-melon-vibrant text-forest flex items-center justify-center">
                            <Zap size={20} />
                         </div>
                         <div>
                            <div className="font-bold text-forest text-sm">Instant Claims</div>
                            <div className="text-xs text-gray-500">AI-powered processing</div>
                         </div>
                      </div>
                      <ArrowRight size={18} className="text-gray-400" />
                   </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-forest text-white px-4 py-2 rounded-lg shadow-xl border border-white/20 flex items-center gap-2 animate-bounce">
                   <Zap size={16} className="text-melon-vibrant" />
                   <span className="font-bold text-sm">Quote in 30s</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-forest mb-6">
              Structurally superior
            </h2>
            <p className="text-xl text-forest/70 max-w-3xl mx-auto leading-relaxed">
              We didn't just digitize old insurance forms. We rebuilt the core infrastructure 
              to maximize transparency and minimize cost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-melon-vibrant" size={32} />,
                title: "Transparent",
                description: "Policies you can actually understand, without hidden exclusions. Built for total clarity and zero ambiguity."
              },
              {
                icon: <Zap className="text-melon-vibrant" size={32} />,
                title: "Faster",
                description: "Instant quotes, automated claims processing, and same-day payouts. Infrastructure that moves at the speed of life."
              },
              {
                icon: <TrendingUp className="text-melon-vibrant" size={32} />,
                title: "Cheaper",
                description: "15-20% more affordable than legacy carriers. We pass structural savings directly to you by leveraging a seamless, AI-native structure."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-melon-vibrant hover:shadow-xl hover:shadow-melon-vibrant/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-forest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-forest/20">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-forest mb-4">{feature.title}</h3>
                <p className="text-forest/70 leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section (Coded) */}
      <section className="py-24 bg-melon/20">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-white text-forest font-bold px-4 py-1 rounded-full text-sm mb-6 border border-forest/10 shadow-sm">
                Control Center
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-forest mb-8 leading-tight">
                Your entire financial life,<br />
                <span className="text-melon-vibrant">demystified.</span>
              </h2>
              <p className="text-lg text-forest/70 mb-10 leading-relaxed">
                Manage policies, file claims, and track your driving score from a single, 
                beautiful dashboard. No phone calls, no fax machines.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Apple Pay & Google Pay Integration",
                  "Real-time coverage adjustments",
                  "24/7 AI Legal Assistant",
                  "Family fleet management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-forest font-semibold">
                    <div className="w-6 h-6 rounded-full bg-melon-vibrant flex items-center justify-center text-forest">
                      <CheckCircle size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/dashboard"
                className="inline-flex items-center gap-2 text-forest font-bold text-lg hover:text-melon-vibrant transition-colors group"
              >
                Launch demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-forest rounded-3xl rotate-3 opacity-10 blur-xl scale-95"></div>
              
              {/* Code-based generic UI preview */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 relative z-10">
                 <div className="border-b border-gray-100 p-4 flex items-center gap-4 bg-gray-50/50">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-white border border-gray-200 rounded-md py-1 px-3 text-center text-xs text-gray-400 font-mono">
                       app.gana.com/dashboard
                    </div>
                 </div>
                 
                 <div className="p-8 bg-gray-50 min-h-[400px]">
                    <div className="flex justify-between items-center mb-8">
                       <h4 className="text-2xl font-extrabold text-forest">Policies</h4>
                       <button className="bg-forest text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                          <Zap size={14} /> Add New
                       </button>
                    </div>
                    
                    <div className="space-y-4">
                       {[1, 2].map((_, i) => (
                          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                             <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-melon/20 flex items-center justify-center text-forest">
                                   <Shield size={24} />
                                </div>
                                <div>
                                   <div className="font-bold text-forest">Tesla Model Y {i === 0 ? 'Performance' : 'Long Range'}</div>
                                   <div className="text-sm text-gray-500">Policy #{83920 + i} • Active</div>
                                </div>
                             </div>
                             <div className="text-right">
                                <div className="font-bold text-forest">$124/mo</div>
                                <div className="text-xs text-melon-vibrant font-bold">Next pt: Aug 1</div>
                             </div>
                          </div>
                       ))}
                       
                       <div className="bg-forest rounded-xl p-6 text-white flex items-center justify-between shadow-lg relative overflow-hidden">
                          <div className="relative z-10">
                             <div className="font-bold mb-1">Safe Driver Discount</div>
                             <div className="text-melon text-sm">You saved $420 this year</div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-melon-vibrant flex items-center justify-center text-forest relative z-10 font-bold">
                             A+
                          </div>
                          <div className="absolute right-0 bottom-0 opacity-10">
                              <Shield size={100} />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#34d399 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="w-full max-w-4xl mx-auto px-8 lg:px-16 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
            Ready to upgrade?
          </h2>
          <p className="text-xl text-melon/80 mb-10 max-w-2xl mx-auto">
            Join the insurance carrier that treats you like a partner, not a policy number.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/login"
              className="bg-melon-vibrant text-forest px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-melon-vibrant/20"
            >
              Get my quote
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="Gana" className="h-10 w-auto" />
              <span className="text-2xl font-extrabold text-forest tracking-tight">Gana</span>
            </div>
            
            <div className="flex gap-8 text-forest/60 font-medium">
               <a href="#" className="hover:text-forest transition-colors">Privacy</a>
               <a href="#" className="hover:text-forest transition-colors">Terms</a>
               <a href="#" className="hover:text-forest transition-colors">Twitter</a>
               <a href="#" className="hover:text-forest transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-400 font-medium">
            &copy; 2026 Gana Insurance Inc. Built for the future.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
