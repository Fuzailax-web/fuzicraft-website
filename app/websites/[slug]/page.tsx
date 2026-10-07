'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { CATALOG_PRODUCTS } from '@/lib/data/catalog';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  ShoppingCart, 
  Plus, 
  Trash2, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  Search, 
  Moon, 
  Sun,
  Laptop,
  Coins,
  Cpu,
  BarChart3,
  ExternalLink,
  Code2
} from 'lucide-react';

export default function TemplateLivePreviewPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = CATALOG_PRODUCTS.find((p) => p.slug === slug) || CATALOG_PRODUCTS[0];

  // Router for template types
  if (product.category === 'saas-ai') {
    return <NovaAISaasPreview product={product} />;
  } else if (product.category === 'ecommerce') {
    return <AuraEcommercePreview product={product} />;
  } else if (product.category === 'agency-portfolio') {
    return <VertexAgencyPreview product={product} />;
  } else if (product.category === 'fintech-web3') {
    return <NexusFintechPreview product={product} />;
  }

  return <NovaAISaasPreview product={product} />;
}

/* =========================================================================
   1. SAAS & AI PLATFORM PREVIEW (NovaAI / Zenith)
   ========================================================================= */
function NovaAISaasPreview({ product }: { product: any }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I am the NovaAI Autonomous Agent. Ask me to draft code, summarize metrics, or analyze market opportunities.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Claude 3.5 Sonnet');
  const [activeTab, setActiveTab] = useState<'chat' | 'analytics' | 'deploy'>('chat');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = inputVal;
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `⚡ [${selectedModel} Execution Complete]\n\nProcessed query: "${userMsg}"\nLatency: 0.18s | Tokens: 420 | Output: Fully optimized Next.js 15 Server Action with strict TypeScript schema.`
        }
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F5F7] font-sans flex flex-col antialiased">
      {/* Top Preview App Bar */}
      <header className="h-14 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white text-black font-bold flex items-center justify-center text-xs">
            NA
          </div>
          <span className="font-bold text-sm text-white tracking-tight">{product.title}</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-zinc-300">v2.4 Enterprise</span>
        </div>

        <div className="flex items-center gap-2">
          <select 
            value={selectedModel} 
            onChange={(e) => setSelectedModel(e.target.value)}
            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-200 focus:outline-none cursor-pointer"
          >
            <option value="Claude 3.5 Sonnet" className="bg-zinc-900">Claude 3.5 Sonnet</option>
            <option value="GPT-4o Mini" className="bg-zinc-900">GPT-4o Mini</option>
            <option value="Gemini 2.0 Flash" className="bg-zinc-900">Gemini 2.0 Flash</option>
          </select>

          <div className="flex p-0.5 rounded-lg bg-white/5 border border-white/10">
            <button 
              onClick={() => setActiveTab('chat')} 
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${activeTab === 'chat' ? 'bg-white text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
            >
              Workspace
            </button>
            <button 
              onClick={() => setActiveTab('analytics')} 
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${activeTab === 'analytics' ? 'bg-white text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
            >
              Metrics
            </button>
          </div>
        </div>
      </header>

      {/* Main App Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-56 border-r border-white/10 p-4 hidden md:flex flex-col justify-between bg-zinc-950/40">
          <div className="space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
              Agent Pipelines
            </div>
            <nav className="space-y-1">
              <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 text-white text-xs font-medium flex items-center gap-2">
                <Bot className="w-3.5 h-3.5" />
                <span>Autonomous Assistant</span>
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 text-xs font-medium flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Code Refactor Engine</span>
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 text-xs font-medium flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Vector Embeddings</span>
              </button>
            </nav>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Token Budget</span>
              <span className="text-white font-mono">82%</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-white h-full w-[82%]" />
            </div>
          </div>
        </aside>

        {/* Chat / Canvas Center */}
        {activeTab === 'chat' ? (
          <main className="flex-1 flex flex-col h-[calc(100vh-3.5rem)] overflow-hidden">
            {/* Message Thread */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
              {messages.map((m, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 max-w-2xl ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold ${m.role === 'user' ? 'bg-white text-black' : 'bg-zinc-800 text-white'}`}>
                    {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`p-3.5 rounded-2xl text-xs leading-relaxed ${m.role === 'user' ? 'bg-white text-black font-medium' : 'bg-zinc-900 border border-white/10 text-zinc-200'}`}>
                    <pre className="whitespace-pre-wrap font-sans">{m.content}</pre>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>NovaAI is synthesizing output...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-white/10 bg-zinc-950/80">
              <form onSubmit={handleSend} className="max-w-3xl mx-auto flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask NovaAI to write a Next.js component, generate tests, or analyze data..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Run</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </main>
        ) : (
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            <h3 className="text-xl font-bold text-white">System Analytics & Token Throughput</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-xs text-zinc-400 font-mono">Total API Invocations</span>
                <div className="text-2xl font-bold text-white font-mono mt-1">1,420,890</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-xs text-zinc-400 font-mono">Average Latency</span>
                <div className="text-2xl font-bold text-white font-mono mt-1">142ms</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10">
                <span className="text-xs text-zinc-400 font-mono">Uptime SLA</span>
                <div className="text-2xl font-bold text-white font-mono mt-1">99.99%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   2. LUXURY E-COMMERCE PREVIEW (AURA Store)
   ========================================================================= */
function AuraEcommercePreview({ product }: { product: any }) {
  const [cartCount, setCartCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const mockItems = [
    { id: 1, name: 'Minimalist Architectural Coat', price: '$420', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop' },
    { id: 2, name: 'Precision Ceramic Chrono Watch', price: '$680', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop' },
    { id: 3, name: 'Monochrome Leather Weekender', price: '$350', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F5F5F7] font-sans flex flex-col antialiased">
      {/* E-Com Header */}
      <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-zinc-950/80 sticky top-0 z-20 backdrop-blur-md">
        <div className="font-bold tracking-widest text-base uppercase font-mono text-white">
          AURA • STUDIO
        </div>
        <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-400 uppercase font-mono">
          <span className="text-white hover:text-white cursor-pointer">Apparel</span>
          <span className="hover:text-white cursor-pointer">Objects</span>
          <span className="hover:text-white cursor-pointer">Editorial</span>
        </nav>
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-black font-bold text-xs shadow-md"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>Bag ({cartCount})</span>
        </button>
      </header>

      {/* Hero Product Spotlight */}
      <div className="p-6 sm:p-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
            alt="Hero Product" 
            className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-[10px] font-mono uppercase text-white backdrop-blur-md">
            Autumn Edition
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Limited Release</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
              Monochrome Wool Overcoat
            </h2>
            <div className="text-2xl font-mono font-bold text-white mt-2">$420.00</div>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed">
            Engineered with 100% Japanese virgin wool. Water-repellent nano-coating, magnetic concealed closure, and laser-welded seams.
          </p>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-2">Select Proportions</label>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-10 h-10 rounded-xl text-xs font-mono font-bold border transition-all ${selectedSize === sz ? 'bg-white text-black border-white' : 'bg-white/5 text-zinc-400 border-white/10 hover:text-white'}`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setCartCount((c) => c + 1);
              setIsDrawerOpen(true);
            }}
            className="w-full py-3.5 rounded-2xl bg-white text-black hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart • $420.00</span>
          </button>
        </div>
      </div>

      {/* Cart Drawer Simulation */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-zinc-950 border-l border-white/10 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-sm font-bold text-white uppercase font-mono">Your Shopping Bag ({cartCount})</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="text-zinc-400 hover:text-white text-xs">Close</button>
              </div>
              <div className="py-4 space-y-4">
                <div className="flex gap-3 items-center">
                  <div className="w-14 h-14 rounded-xl bg-zinc-900 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">Monochrome Wool Overcoat</h4>
                    <span className="text-[10px] text-zinc-400 font-mono">Size: {selectedSize} • Qty: {cartCount}</span>
                    <div className="text-xs font-mono font-bold text-white mt-0.5">${420 * cartCount}.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-zinc-400">Estimated Total:</span>
                <span className="text-white font-bold">${420 * cartCount}.00</span>
              </div>
              <button 
                onClick={() => alert('Demo: Integrated Razorpay UPI & Stripe Checkout trigger!')}
                className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase transition-all shadow-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. AGENCY & PORTFOLIO PREVIEW (Vertex Studio OS)
   ========================================================================= */
function VertexAgencyPreview({ product }: { product: any }) {
  const [selectedCase, setSelectedCase] = useState(0);
  const cases = [
    { client: 'Spatial Architecture & Vision', year: '2026', scope: 'Brand & 3D Interactive WebGL', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop' },
    { client: 'Kinetic Sound Systems', year: '2026', scope: 'Next.js App & Headless CMS', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop' },
    { client: 'Hyperion Autonomous Flight', year: '2025', scope: 'Real-Time Flight Dashboard', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-[#F5F5F7] font-sans flex flex-col antialiased">
      <header className="h-16 border-b border-white/10 px-8 flex items-center justify-between bg-zinc-950/80 sticky top-0 z-20 backdrop-blur-md">
        <span className="font-bold text-lg tracking-tighter text-white">VERTEX STUDIO</span>
        <div className="flex gap-4 text-xs font-mono text-zinc-400">
          <span className="text-white hover:text-white cursor-pointer">Works</span>
          <span className="hover:text-white cursor-pointer">Manifesto</span>
          <span className="hover:text-white cursor-pointer">Contact</span>
        </div>
      </header>

      <div className="p-8 sm:p-12 max-w-6xl mx-auto w-full space-y-12">
        <div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Selected Works (2026)</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            We Design Systems for the Digital Avant-Garde.
          </h1>
        </div>

        {/* Interactive Case Studies List */}
        <div className="space-y-4">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCase(idx)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer ${selectedCase === idx ? 'bg-zinc-900 border-white/30 shadow-xl' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{cs.client}</h3>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">{cs.scope}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500">{cs.year}</span>
              </div>

              {selectedCase === idx && (
                <div className="mt-5 rounded-2xl overflow-hidden aspect-[16/9] w-full bg-zinc-950 relative">
                  <img src={cs.image} alt={cs.client} className="w-full h-full object-cover grayscale contrast-125" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. FINTECH & WEB3 PREVIEW (Nexus Capital)
   ========================================================================= */
function NexusFintechPreview({ product }: { product: any }) {
  const [activeAsset, setActiveAsset] = useState('BTC/USD');
  const [orderSide, setOrderSide] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-[#F5F5F7] font-sans flex flex-col antialiased">
      <header className="h-14 border-b border-white/10 px-6 flex items-center justify-between bg-zinc-950">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm text-white font-mono tracking-widest">NEXUS • CAPITAL</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">Live Terminal</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-zinc-400">Gas: 12 Gwei</span>
          <span className="text-white font-bold">● Connected</span>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Chart Screen */}
        <div className="lg:col-span-8 p-5 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-lg text-white">{activeAsset}</span>
                <span className="text-xs font-mono text-white bg-white/10 px-2 py-0.5 rounded">+4.82%</span>
              </div>
              <div className="flex gap-1">
                {['BTC/USD', 'ETH/USD', 'SOL/USD'].map((ast) => (
                  <button 
                    key={ast} 
                    onClick={() => setActiveAsset(ast)} 
                    className={`px-2.5 py-1 rounded text-[10px] font-mono ${activeAsset === ast ? 'bg-white text-black font-bold' : 'bg-white/5 text-zinc-400'}`}
                  >
                    {ast.split('/')[0]}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-3xl font-mono font-bold text-white mt-4">$96,480.50</div>
          </div>

          {/* Chart Graphic Visual */}
          <div className="my-8 h-48 w-full rounded-xl bg-zinc-900/60 border border-white/5 p-4 flex items-end justify-between gap-1">
            {[40, 55, 48, 62, 58, 70, 68, 79, 74, 88, 85, 92, 98, 95, 110, 105, 120].map((h, i) => (
              <div key={i} className="flex-1 bg-white/30 hover:bg-white rounded-t transition-all" style={{ height: `${h}px` }} />
            ))}
          </div>

          <div className="text-[10px] font-mono text-zinc-500 flex justify-between">
            <span>24h Volume: $4.2B</span>
            <span>Liquidity Depth: 99.8%</span>
          </div>
        </div>

        {/* Right Trade Order Form */}
        <div className="lg:col-span-4 p-5 rounded-2xl bg-zinc-950 border border-white/10 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => setOrderSide('buy')} 
              className={`py-2 rounded-xl text-xs font-bold font-mono uppercase ${orderSide === 'buy' ? 'bg-white text-black' : 'bg-white/5 text-zinc-400'}`}
            >
              Buy
            </button>
            <button 
              onClick={() => setOrderSide('sell')} 
              className={`py-2 rounded-xl text-xs font-bold font-mono uppercase ${orderSide === 'sell' ? 'bg-white text-black' : 'bg-white/5 text-zinc-400'}`}
            >
              Sell
            </button>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Limit Price (USD)</label>
            <input type="text" defaultValue="96480.50" className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs" />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">Order Amount ({activeAsset.split('/')[0]})</label>
            <input type="text" defaultValue="0.5" className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs" />
          </div>

          <button 
            onClick={() => alert(`Executed ${orderSide.toUpperCase()} for ${activeAsset}`)}
            className="w-full py-3 rounded-xl bg-white text-black font-bold font-mono text-xs uppercase shadow-md transition-all"
          >
            Execute {orderSide.toUpperCase()} Order
          </button>
        </div>
      </div>
    </div>
  );
}
