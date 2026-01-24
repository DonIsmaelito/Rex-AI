import Navbar from '../components/Navbar';
import logoIcon from '../assets/rex_logo.png';
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
              <h1 className="text-[10rem] lg:text-[14rem] font-extrabold !text-white leading-[0.8] tracking-tighter mb-12 drop-shadow-2xl">
                REX
              </h1>
              <p className="text-3xl lg:text-4xl font-extrabold text-melon-vibrant mb-12 leading-tight tracking-tight">
                The only AI insurance <br className="hidden lg:block"/>built for fintech.
              </p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl !text-melon/70 max-w-lg mb-16 leading-relaxed font-medium"
            >
              Rex replaces legacy paperwork with AI-native infrastructure. 
              Get autonomous coverage, instant risk audits, and API-first liability protection.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:row gap-4"
            >
              <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-full p-2 border border-white/10 shadow-2xl max-w-xl w-full ring-1 ring-white/10">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-8 py-4 text-white placeholder:text-white/30 outline-none bg-transparent font-medium text-lg"
                />
                <button className="bg-melon-vibrant text-forest-dark px-10 py-4 rounded-full font-bold hover:bg-melon transition-all hover:scale-105 flex items-center gap-2 whitespace-nowrap shadow-xl shadow-melon-vibrant/20 text-lg">
                  Get Started <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
            

          </div>
          
          {/* Right Column - Coded UI (Not Image) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block scale-[1.1]"
          >
             {/* Fake Dashboard Interface Container */}
             <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/20 p-10 relative z-10 w-full max-w-xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                   <div>
                      <h3 className="text-forest font-black text-2xl tracking-tight">Good morning, Sarah</h3>
                      <p className="text-forest/40 text-sm font-bold uppercase tracking-widest mt-1">Here's your coverage overview</p>
                   </div>
                   <div className="w-14 h-14 rounded-full bg-melon flex items-center justify-center text-forest font-black text-xl shadow-inner">SM</div>
                </div>

                 {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                   <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100/50 shadow-sm">
                      <div className="flex items-center gap-2 mb-4 text-forest/40 text-xs font-black uppercase tracking-widest">
                         <Shield size={14} className="text-forest/20" /> AI Risk Liability
                      </div>
                      <div className="text-2xl font-black text-forest tracking-tight">API Integration A</div>
                      <div className="text-xs text-green-600 font-bold mt-4 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Live Monitoring
                      </div>
                   </div>
                   <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100/50 shadow-sm">
                      <div className="flex items-center gap-2 mb-4 text-forest/40 text-xs font-black uppercase tracking-widest">
                         <DollarSign size={14} className="text-forest/20" /> Risk Premium
                      </div>
                      <div className="text-3xl font-black text-forest tracking-tight">$2,450.00</div>
                      <div className="text-xs text-forest/40 font-bold mt-4 bg-forest/5 inline-block px-3 py-1 rounded-full">
                         Dynamic rate
                      </div>
                   </div>
                </div>

                {/* Action List */}
                <div className="space-y-4">
                   <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-forest text-white flex items-center justify-center">
                            <Activity size={24} />
                         </div>
                         <div>
                            <div className="font-black text-forest text-lg tracking-tight">Safety Rating</div>
                            <div className="text-xs text-forest/40 font-bold">Real-time audit active</div>
                         </div>
                      </div>
                      <div className="font-black text-2xl text-forest">99.2%</div>
                   </div>
                   
                   <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-melon-vibrant text-forest flex items-center justify-center">
                            <Zap size={24} />
                         </div>
                         <div>
                            <div className="font-black text-forest text-lg tracking-tight">Instant Audit</div>
                            <div className="text-xs text-forest/40 font-bold">Autonomous risk assessment</div>
                         </div>
                      </div>
                      <ArrowRight size={20} className="text-forest/20" />
                   </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-8 -right-8 bg-forest text-white px-6 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 animate-bounce shadow-forest/40">
                   <Zap size={18} className="text-melon-vibrant fill-current" />
                   <span className="font-black text-sm tracking-tight">Audit in 15s</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8f3dc_1.5px,transparent_1.5px)] [background-size:40px_40px]"></div>
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-20">
            <div>
              <h2 className="text-6xl lg:text-8xl font-extrabold !text-white mb-8 tracking-tighter">
                The Problem
              </h2>
              <p className="text-2xl !text-melon/80 max-w-xl leading-relaxed">
                Major insurers are excluding AI coverage while fintech deploys AI everywhere.
              </p>
            </div>
            <div className="border-l-4 border-melon-vibrant pl-8 py-2">
              <div className="text-melon-vibrant font-black uppercase text-sm tracking-[0.3em] mb-4">Real Incidents</div>
              <div className="text-white/90 font-medium italic text-lg leading-relaxed">
                "Air Canada liable for chatbot error • Financial advisors sued for AI advice • Banks catching £1M+ fraud weekly"
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: "3", label: "Major carriers filing to exclude AI liabilities" },
              { val: "$500B", label: "Fintech industry with zero clear AI coverage" },
              { val: "85%", label: "Of banks deploying AI for lending & fraud" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-colors">
                <div className="text-7xl font-extrabold text-melon-vibrant mb-4 tracking-tighter">{stat.val}</div>
                <div className="text-white/60 font-bold uppercase tracking-wider text-xs leading-loose">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-32 bg-[#16382a] relative overflow-hidden">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8f3dc_1.5px,transparent_1.5px)] [background-size:40px_40px]"></div>
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-8xl font-extrabold !text-white mb-8 tracking-tighter">
              Our Solution
            </h2>
            <p className="text-2xl !text-melon/70 max-w-3xl mx-auto leading-relaxed">
              First MGA delivering autonomous, API-first AI liability coverage for the modern fintech stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield size={32} />,
                title: "Autonomous",
                description: "AI-driven underwriting that understands code better than legacy brokers ever could."
              },
              {
                icon: <Zap size={32} />,
                title: "API-First",
                description: "Embed liability protection directly into your deployment pipeline. Coverage at the speed of code."
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Risk-Adjusted",
                description: "Dynamically priced premiums based on real-time safety logs and system performance."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:border-melon-vibrant/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-melon-vibrant/5 transition-all duration-500 group"
              >
                <div className="w-20 h-20 rounded-3xl bg-melon-vibrant mb-10 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(74,222,128,0.3)] flex items-center justify-center text-forest">
                  {feature.icon}
                </div>
                <h3 className="text-4xl font-black !text-white mb-6 tracking-tight">{feature.title}</h3>
                <p className="!text-melon/60 leading-relaxed font-medium text-xl">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section (Coded) */}
      <section className="py-32 bg-[#1e4a38] relative overflow-hidden">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d8f3dc_1.5px,transparent_1.5px)] [background-size:40px_40px]"></div>
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-md text-melon font-bold px-4 py-1 rounded-full text-sm mb-6 border border-white/10 shadow-sm">
                Control Center
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold !text-white mb-8 leading-tight">
                Your entire AI risk stack, <br />
                <span className="text-melon-vibrant">automated.</span>
              </h2>
              <p className="text-lg !text-melon/80 mb-10 leading-relaxed font-medium">
                Real-time risk audits, automated liability coverage, and AI risk scoring 
                from a single, beautiful command center. No paperwork, no friction.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Real-time Safety Audit Logs",
                  "API-driven claims processing",
                  "Automated Liability Issuance",
                  "Autonomous Risk Scoring"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 !text-white font-bold">
                    <div className="w-6 h-6 rounded-full bg-melon-vibrant flex items-center justify-center text-forest">
                      <CheckCircle size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/dashboard"
                className="inline-flex items-center gap-2 !text-melon font-bold text-lg hover:text-melon-vibrant transition-colors group"
              >
                Access risk cockpit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
                       app.rex.com/dashboard
                    </div>
                 </div>
                 
                 <div className="p-8 bg-gray-50 min-h-[400px]">
                    <div className="flex justify-between items-center mb-8">
                       <h4 className="text-2xl font-extrabold text-forest">Risk Portfolio</h4>
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
                                   <div className="font-bold text-forest">{i === 0 ? 'Lending Model v4.2' : 'Fraud Engine v1.0'}</div>
                                   <div className="text-sm text-gray-500">Autonomous Liability • Active</div>
                                </div>
                             </div>
                             <div className="text-right">
                                <div className="font-bold text-forest">$2,450/mo</div>
                                <div className="text-xs text-melon-vibrant font-bold">Last Audit: 1h ago</div>
                             </div>
                          </div>
                       ))}
                       
                       <div className="bg-forest rounded-xl p-6 text-white flex items-center justify-between shadow-lg relative overflow-hidden">
                          <div className="relative z-10">
                             <div className="font-bold mb-1">Security Maintenance Credit</div>
                             <div className="text-melon text-sm">Audit compliance: 100%</div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-melon-vibrant flex items-center justify-center text-forest relative z-10">
                              <CheckCircle size={24} className="font-bold" />
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



      {/* Footer */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src={logoIcon} alt="Rex" className="h-10 w-auto" />
              <span className="text-2xl font-extrabold text-forest tracking-tight">Rex</span>
            </div>
            
            <div className="flex gap-8 text-forest/60 font-medium">
               <a href="#" className="hover:text-forest transition-colors">Privacy</a>
               <a href="#" className="hover:text-forest transition-colors">Terms</a>
               <a href="#" className="hover:text-forest transition-colors">Twitter</a>
               <a href="#" className="hover:text-forest transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-400 font-medium">
            &copy; 2026 Rex Insurance Inc. Built for the future.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
