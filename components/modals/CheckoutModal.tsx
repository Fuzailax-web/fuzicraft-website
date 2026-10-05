'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';
import { CatalogItem, Currency } from '@/lib/types';
import { 
  X, 
  CreditCard, 
  QrCode, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  Copy, 
  Check,
  Smartphone,
  Building2,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CheckoutModalProps {
  product: CatalogItem | null;
  currency: Currency;
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = 'razorpay-upi' | 'stripe-card' | 'razorpay-netbanking';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  product,
  currency,
  isOpen,
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('razorpay-upi');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [upiId, setUpiId] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [licenseKey, setLicenseKey] = useState('');
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen || !product) return null;

  const basePrice = currency === 'USD' ? product.priceUSD : product.priceINR;
  const discountAmount = Math.round(basePrice * (appliedDiscount / 100));
  const finalPrice = basePrice - discountAmount;
  const formattedFinalPrice = currency === 'USD' 
    ? `$${finalPrice}` 
    : `₹${finalPrice.toLocaleString('en-IN')}`;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');

    const cleanCode = couponCode.trim().toUpperCase();
    if (cleanCode === 'FUZI10' || cleanCode === 'FUZICRAFT') {
      setAppliedDiscount(10);
      setCouponSuccess('10% VIP Discount Applied');
    } else if (cleanCode === 'APPLE') {
      setAppliedDiscount(15);
      setCouponSuccess('15% Minimalist Discount Applied');
    } else {
      setCouponError('Invalid coupon code. Try FUZI10');
    }
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment transaction with Stripe / Razorpay gateway
    setTimeout(() => {
      const generatedOrderId = `FC-${Math.floor(100000 + Math.random() * 900000)}`;
      const generatedLicense = `FUZI-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      
      setOrderId(generatedOrderId);
      setLicenseKey(generatedLicense);
      setIsProcessing(false);
      setIsCompleted(true);

      // Trigger Monochrome Confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ffffff', '#e5e5ea', '#d4d4d8', '#a1a1aa', '#71717a'],
        });
      } catch (err) {
        console.warn('Confetti trigger error:', err);
      }
    }, 1800);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const resetAndClose = () => {
    setIsCompleted(false);
    setIsProcessing(false);
    setAppliedDiscount(0);
    setCouponCode('');
    setCouponError('');
    setCouponSuccess('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl glass-modal overflow-hidden border border-white/15 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-950/80 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white tracking-tight">
              {isCompleted ? 'Order Confirmed' : 'Secure Unified Checkout'}
            </span>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!isCompleted ? (
            <>
              {/* Product Summary Header */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-900 border border-white/10">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white truncate font-sans">
                      {product.title}
                    </h4>
                    <span className="text-base font-mono font-bold text-white">
                      {formattedFinalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                    {product.tagline}
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-zinc-500">
                    <span>Full Source Code</span>
                    <span>•</span>
                    <span>Commercial License</span>
                    <span>•</span>
                    <span>Sanity CMS</span>
                  </div>
                </div>
              </div>

              {/* Payment Gateway Switcher Tabs - Monochrome */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-medium">
                  Select Payment Rail
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('razorpay-upi')}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'razorpay-upi'
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <QrCode className={`w-4 h-4 ${paymentMethod === 'razorpay-upi' ? 'text-black' : 'text-zinc-300'}`} />
                    <span>UPI & QR</span>
                    <span className={`text-[9px] font-mono ${paymentMethod === 'razorpay-upi' ? 'text-zinc-700' : 'text-zinc-500'}`}>GPay, PhonePe, Paytm</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('stripe-card')}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'stripe-card'
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <CreditCard className={`w-4 h-4 ${paymentMethod === 'stripe-card' ? 'text-black' : 'text-zinc-300'}`} />
                    <span>Card / Apple Pay</span>
                    <span className={`text-[9px] font-mono ${paymentMethod === 'stripe-card' ? 'text-zinc-700' : 'text-zinc-500'}`}>Stripe Secure</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('razorpay-netbanking')}
                    className={`p-3 rounded-2xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMethod === 'razorpay-netbanking'
                        ? 'bg-white text-black font-bold shadow-md'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Building2 className={`w-4 h-4 ${paymentMethod === 'razorpay-netbanking' ? 'text-black' : 'text-zinc-300'}`} />
                    <span>NetBanking</span>
                    <span className={`text-[9px] font-mono ${paymentMethod === 'razorpay-netbanking' ? 'text-zinc-700' : 'text-zinc-500'}`}>Top 50+ Banks</span>
                  </button>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleProcessPayment} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alexander Vance"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-400 mb-1">Email (For License & GitHub Access)</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40"
                    />
                  </div>
                </div>

                {/* UPI Flow */}
                {paymentMethod === 'razorpay-upi' && (
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Smartphone className="w-4 h-4 text-zinc-300" />
                        <span>Instant UPI Payment</span>
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">
                        Zero Gateway Fees
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                      {/* Simulated QR Code */}
                      <div className="p-3 bg-white rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg">
                        <div className="w-24 h-24 bg-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                          <QrCode className="w-20 h-20 text-white" />
                          <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                            <span className="px-1.5 py-0.5 bg-black text-white text-[8px] font-bold rounded">
                              FC UPI
                            </span>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-zinc-900 font-bold mt-1">
                          SCAN TO PAY
                        </span>
                      </div>

                      <div className="flex-1 w-full space-y-2">
                        <label className="block text-xs text-zinc-400">Or Enter Your UPI ID (VPA)</label>
                        <input
                          type="text"
                          placeholder="yourname@okhdfcbank"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40 font-mono"
                        />
                        <p className="text-[10px] text-zinc-500">
                          Collect request will be dispatched to your UPI app. Works with Google Pay, PhonePe, Paytm & CRED.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stripe Card Flow */}
                {paymentMethod === 'stripe-card' && (
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-3">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Card Number</label>
                      <input
                        type="text"
                        placeholder="4242 •••• •••• 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40 font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-zinc-400 mb-1">Expiry (MM/YY)</label>
                        <input
                          type="text"
                          placeholder="08/28"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-zinc-400 mb-1">CVC / CVV</label>
                        <input
                          type="password"
                          placeholder="•••"
                          maxLength={4}
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-white/40 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* NetBanking Flow */}
                {paymentMethod === 'razorpay-netbanking' && (
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 space-y-2">
                    <label className="block text-xs text-zinc-400">Select Bank</label>
                    <select aria-label="Select your bank for NetBanking" className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-white/40 cursor-pointer">
                      <option value="hdfc" className="bg-zinc-900 text-white">HDFC Bank</option>
                      <option value="icici" className="bg-zinc-900 text-white">ICICI Bank</option>
                      <option value="sbi" className="bg-zinc-900 text-white">State Bank of India (SBI)</option>
                      <option value="axis" className="bg-zinc-900 text-white">Axis Bank</option>
                      <option value="kotak" className="bg-zinc-900 text-white">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                {/* Promo Code Strip */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code (e.g. FUZI10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs uppercase placeholder-zinc-500 font-mono focus:outline-none focus:border-white/40"
                  />
                  <button
                    type="button"
                    onClick={handleApplyCoupon}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all"
                  >
                    Apply
                  </button>
                </div>
                {couponSuccess && (
                  <p className="text-[11px] text-white font-mono">{couponSuccess}</p>
                )}
                {couponError && (
                  <p className="text-[11px] text-zinc-400 font-mono">{couponError}</p>
                )}

                {/* Action Button - High Contrast White */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-black text-sm font-bold shadow-xl shadow-white/5 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      <span>Authorizing Payment Rail...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-black" />
                      <span>Complete Purchase • {formattedFinalPrice}</span>
                    </span>
                  )}
                </button>
              </form>

              {/* Security Badges */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-500 pt-2 border-t border-white/[0.06]">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-zinc-400" />
                  <span>256-Bit SSL Encrypted</span>
                </span>
                <span>•</span>
                <span>Instant GitHub Repository Access</span>
                <span>•</span>
                <span>Lifetime Updates</span>
              </div>
            </>
          ) : (
            /* Order Success State */
            <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white mx-auto flex items-center justify-center shadow-xl">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                  Thank You for Your Order
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Your purchase of <strong className="text-white">{product.title}</strong> has been processed successfully.
                </p>
              </div>

              {/* Order Credentials Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left space-y-4 max-w-lg mx-auto">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs text-zinc-400">Order Reference:</span>
                  <span className="text-xs font-mono font-bold text-white">{orderId}</span>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1">
                    Commercial License Key:
                  </label>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-white">
                    <span className="flex-1 truncate">{licenseKey}</span>
                    <button
                      onClick={handleCopyKey}
                      className="p-1 rounded bg-white/10 hover:bg-white/20 text-white transition-all"
                    >
                      {copiedKey ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="text-xs text-zinc-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Source code repo access sent to: {email || 'your email'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Sanity.io Studio setup instructions attached</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-white" />
                  <span>Download License PDF</span>
                </button>

                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold shadow-lg transition-all"
                >
                  Return to Studio Marketplace
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
