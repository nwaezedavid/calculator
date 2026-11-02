import React, { useState, useEffect } from 'react';
import { Share2, RefreshCw, Terminal, TrendingUp, Sparkles } from 'lucide-react';

export default function SocialWorthCalculator() {
  const [step, setStep] = useState('input'); 
  const [formData, setFormData] = useState({ platform: 'Instagram', username: '', followers: '', views: '' });
  const [loadingText, setLoadingText] = useState('');
  const [isBlurred, setIsBlurred] = useState(true);
  const [valuation, setValuation] = useState({ min: 0, max: 0 });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const setPlatform = (platformName) => {
    setFormData({ ...formData, platform: platformName });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setStep('loading');
  };

  useEffect(() => {
    if (step === 'loading') {
      const messages = [
        `> Initializing secure connection to ${formData.platform}...`,
        '> Fetching profile metrics...',
        '> Analyzing engagement rate...',
        '> Checking current sponsor CPMs...',
        '> Finalizing proprietary valuation...'
      ];
      let i = 0;
      setLoadingText(messages[0]);
      
      const interval = setInterval(() => {
        i++;
        if (i < messages.length) {
          setLoadingText(messages[i]);
        } else {
          clearInterval(interval);
          generateValuation();
          setStep('result');
        }
      }, 1200);
      
      return () => clearInterval(interval);
    }
  }, [step, formData.platform]);

  const generateValuation = () => {
    const baseValuation = Math.floor(Math.random() * (4500 - 1500 + 1) + 1500);
    setValuation({ 
      min: baseValuation, 
      max: baseValuation + Math.floor(Math.random() * (2000 - 500 + 1) + 500) 
    });
    setIsBlurred(true);
  };

  const handleReveal = () => {
    // 1st Arbitrage Click: Curiosity gap
    window.open('https://uplcm.com/4/12177088', '_blank', 'noopener,noreferrer');
    setIsBlurred(false);
  };

  const handleUpsell = () => {
    // 2nd Arbitrage Click: Value-add up-sell
    window.open('https://uplcm.com/4/12177088', '_blank', 'noopener,noreferrer');
  };

  const handleShare = async () => {
    const shareText = `Just checked my creator net worth. My ${formData.platform} account is valued at $${valuation.min.toLocaleString()} - $${valuation.max.toLocaleString()} per post! Calculate yours:`;
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Account Valuation', text: shareText, url });
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(`${shareText} ${url}`);
      alert('Result copied to clipboard! Share it on your socials.');
    }
  };

  const resetCalculator = () => {
    setStep('input');
    setFormData({ platform: 'Instagram', username: '', followers: '', views: '' });
    setIsBlurred(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 font-sans text-gray-100 selection:bg-pink-500 selection:text-white">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.1)] overflow-hidden relative">
        
        {/* Neon Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="text-pink-500 w-8 h-8 mr-3" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 text-center">
              Account Worth Calculator
            </h1>
          </div>

          {step === 'input' && (
            <form onSubmit={handleCalculate} className="space-y-5 animate-in fade-in zoom-in duration-500">
              
              {/* NEW: Platform Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Select Platform</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPlatform('Instagram')}
                    className={`py-3 px-4 rounded-xl border font-bold transition-all duration-300 ${
                      formData.platform === 'Instagram'
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 border-transparent text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                        : 'bg-gray-950 border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    Instagram
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlatform('TikTok')}
                    className={`py-3 px-4 rounded-xl border font-bold transition-all duration-300 ${
                      formData.platform === 'TikTok'
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-transparent text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                        : 'bg-gray-950 border-gray-800 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    TikTok
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{formData.platform} Handle</label>
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="@username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Total Followers</label>
                <input
                  type="number"
                  name="followers"
                  required
                  placeholder="e.g. 50000"
                  value={formData.followers}
                  onChange={handleInputChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Avg. Views Per Post</label>
                <input
                  type="number"
                  name="views"
                  required
                  placeholder="e.g. 15000"
                  value={formData.views}
                  onChange={handleInputChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transform hover:-translate-y-1 transition-all duration-300"
              >
                Calculate My Net Worth
              </button>
            </form>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center justify-center py-12 animate-in fade-in duration-500">
              <Terminal className="text-cyan-400 w-12 h-12 mb-6 animate-pulse" />
              <div className="bg-gray-950 border border-gray-800 w-full rounded-lg p-4 font-mono text-sm text-green-400 min-h-[100px] flex items-center shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                <p className="typing-animation">{loadingText}</p>
              </div>
            </div>
          )}

          {step === 'result' && (
            <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-700">
              <p className="text-gray-400 mb-2">Estimated {formData.platform} Value for <span className="font-bold text-white">{formData.username}</span></p>
              
              <div className="my-8 relative group">
                <div 
                  className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-1000 ease-in-out ${
                    isBlurred ? 'blur-xl select-none opacity-80' : 'blur-0 select-auto opacity-100'
                  }`}
                >
                  ${valuation.min.toLocaleString()} - ${valuation.max.toLocaleString()}
                </div>
                {isBlurred && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-2xl text-white font-bold drop-shadow-lg">???</span>
                  </div>
                )}
              </div>

              {isBlurred ? (
                <button
                  onClick={handleReveal}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-pulse transition-all duration-300 mb-4"
                >
                  Reveal My Account Valuation
                </button>
              ) : (
                <div className="mb-6 space-y-4 animate-in fade-in duration-700">
                  <p className="text-sm text-gray-400 font-medium">Estimated payout per sponsored post</p>
                  
                  {/* NEW: Upsell Button leading to Monetag SmartLink */}
                  <button
                    onClick={handleUpsell}
                    className="w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 px-2 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    How to Double Your Account Worth
                  </button>
                </div>
              )}

              <div className={`grid grid-cols-2 gap-3 transition-opacity duration-500 ${isBlurred ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-700 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg border border-gray-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Recalculate
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}