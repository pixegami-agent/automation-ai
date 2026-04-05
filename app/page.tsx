import { ArrowRight, Zap, Brain, BarChart3, Shield, Rocket } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
            AutoFlow
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition">Benefits</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <button className="bg-gradient-to-r from-pink-600 to-rose-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-pink-100 rounded-full text-sm font-semibold text-pink-700">
            ✨ Powered by Advanced AI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Automate Everything.
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              Effortlessly.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Meet the intelligent automation platform that learns your workflows and executes them flawlessly. Save 20+ hours every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-600 to-rose-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-pink-300 transition">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-100">
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <p className="text-gray-600">Task Completion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10k+</div>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">$2.5M</div>
              <p className="text-gray-600">Time Saved/Year</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Automation</h2>
            <p className="text-xl text-gray-600">Everything you need to automate your business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-Powered Learning",
                desc: "Our AI learns from your workflows and continuously improves execution patterns."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Process thousands of tasks per minute with sub-second response times."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-level encryption and compliance with SOC 2, ISO 27001, and GDPR."
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                desc: "Monitor performance, ROI, and savings with advanced reporting dashboards."
              },
              {
                icon: Rocket,
                title: "No-Code Setup",
                desc: "Build complex automations without writing a single line of code."
              },
              {
                icon: Zap,
                title: "500+ Integrations",
                desc: "Connect with all your favorite tools and platforms instantly."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-lg transition">
                <feature.icon size={32} className="text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Teams Choose AutoFlow</h2>
          
          <div className="space-y-8">
            {[
              { label: "Reduce Operational Costs", desc: "Cut manual work by up to 80% and reinvest savings in growth." },
              { label: "Scale Without Hiring", desc: "Handle 10x more volume with your existing team." },
              { label: "Eliminate Human Error", desc: "Achieve 99.97% accuracy across all automated processes." },
              { label: "Fast Time-to-Value", desc: "Deploy automations in days, not months." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-pink-600 to-rose-500">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.label}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50/50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$99", tasks: "10k tasks/month" },
              { name: "Professional", price: "$499", tasks: "100k tasks/month", featured: true },
              { name: "Enterprise", price: "Custom", tasks: "Unlimited" }
            ].map((plan, i) => (
              <div 
                key={i} 
                className={`rounded-2xl p-8 transition ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-pink-600 to-rose-500 text-white shadow-2xl transform scale-105' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className={plan.featured ? 'text-pink-100' : 'text-gray-600'}>{plan.tasks}</p>
                <button className={`w-full mt-8 py-3 rounded-lg font-semibold transition ${
                  plan.featured 
                    ? 'bg-white text-pink-600 hover:bg-pink-50' 
                    : 'bg-pink-600 text-white hover:bg-pink-700'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Automate?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of teams saving thousands of hours every month.</p>
          <button className="bg-gradient-to-r from-pink-600 to-rose-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-lg mb-4">AutoFlow</div>
              <p className="text-sm">Intelligent automation for modern teams.</p>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Product</div>
              <ul className="space-y-2 text-sm"><li><a href="#">Features</a></li><li><a href="#">Pricing</a></li><li><a href="#">API</a></li></ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-sm"><li><a href="#">About</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li></ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-4">Legal</div>
              <ul className="space-y-2 text-sm"><li><a href="#">Privacy</a></li><li><a href="#">Terms</a></li><li><a href="#">Security</a></li></ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2026 AutoFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
