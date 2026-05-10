import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Send, X, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export default function AIChatbot() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'bot', 
      text: locale === 'ar' 
        ? 'مرحباً! أنا مساعد الوعد الذكي 🤖. كيف يمكنني مساعدتك في خدمات الصيانة اليوم؟' 
        : 'Hello! I am Alwaad AI Assistant 🤖. How can I help you with maintenance services today?' 
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const systemInstruction = `
        Role: Senior Technical Assistant at Alwaad Maintenance Qatar.
        Expertise: Mechanical Engineering, HVAC systems, Home Appliance Technology.
        Tone: Empathetic, Extremely Professional, Detail-Oriented, Qatar-Centric.
        
        Key Trust Factors to Mention:
        - We use 100% Genuine Spare Parts for LG, Samsung, Gree, Midea, carrier, and Daikin.
        - All repairs come with a 12-Month Structural Warranty.
        - Emergency AC repair available 24/7 across Qatar (West Bay, Lusail, Pearl, Al Wakrah, Al Rayyan).
        - Deep Chemical Cleaning for ACs using industrial-grade non-toxic disinfectants.
        
        Guidelines:
        - Respond in the language used by the user (Arabic or English).
        - If the user asks about price, provide a range based on packages (Bronze: 299, Silver: 599, Gold: 999) but emphasize that a site visit is best for precision.
        - Always encourage contacting technical support via WhatsApp (+974 50042274) for urgent issues.
        - Keep responses concise but information-rich.
        - Mention Alwaad's location in Qatar to build local trust.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: userMessage,
        config: {
          systemInstruction,
          temperature: 0.3,
        },
      });

      const botText = response.text || (locale === 'ar' ? 'عذراً، حدث خطأ ما.' : 'Sorry, something went wrong.');
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: locale === 'ar' ? 'خطأ في الاتصال. يرجى مراسلتنا عبر واتساب.' : 'Connection error. Please contact us via WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start translate-x-0">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom left' }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : '550px'
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={cn(
              "w-[350px] sm:w-[400px] bg-white rounded-[32px] shadow-[0_20px_60px_-15px_rgba(2,62,138,0.3)] border border-gray-100 flex flex-col overflow-hidden mb-4 transition-all duration-300",
              locale === 'ar' ? 'font-arabic-body' : 'font-sans'
            )}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-brand-blue-deep text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center border border-white/10">
                  <Bot className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="font-black text-sm tracking-tight">{locale === 'ar' ? 'مساعد الوعد الذكي' : 'Alwaad AI Assistant'}</h3>
                  <p className="text-[10px] text-brand-cyan font-bold uppercase tracking-widest">{locale === 'ar' ? 'متصل الآن' : 'Online Now'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-6 space-y-4 bg-section-gray"
                >
                  {messages.map((m, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "flex gap-3 max-w-[85%]",
                        m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}
                    >
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                        m.role === 'user' ? "bg-brand-blue-deep text-white" : "bg-white shadow-sm border border-gray-100"
                      )}>
                        {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-brand-cyan" />}
                      </div>
                      <div className={cn(
                        "p-4 rounded-2xl text-sm leading-relaxed",
                        m.role === 'user' 
                          ? "bg-brand-blue-deep text-white rounded-tr-none shadow-md" 
                          : "bg-white text-gray-700 rounded-tl-none shadow-sm border border-gray-100"
                      )}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                        <Loader2 className="w-4 h-4 text-brand-cyan animate-spin" />
                      </div>
                      <div className="p-4 bg-white rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="relative">
                    <input 
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder={locale === 'ar' ? 'اكتب سؤالك هنا...' : 'Type your question...'}
                      className="w-full pl-4 pr-12 py-3 bg-section-gray rounded-2xl border border-gray-100 focus:outline-none focus:border-brand-cyan text-sm"
                    />
                    <button 
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-blue-deep text-white rounded-xl flex items-center justify-center hover:bg-brand-cyan hover:text-brand-blue-deep transition-all disabled:opacity-50 disabled:grayscale"
                    >
                      <Send className={cn("w-4 h-4", locale === 'ar' && "rotate-180")} />
                    </button>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-3 text-center font-bold tracking-widest uppercase">
                    Powered by Alwaad Engineering AI
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full bg-brand-blue-deep shadow-2xl flex items-center justify-center group relative overflow-hidden",
          isOpen && "bg-brand-cyan"
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <X className="w-8 h-8 text-white relative z-10" />
        ) : (
          <div className="flex flex-col items-center justify-center relative z-10">
            <span className="text-2xl mb-[-4px]">🤖</span>
            <MessageCircle className="w-5 h-5 text-brand-cyan group-hover:text-white transition-colors animate-pulse" />
          </div>
        )}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-white">
            1
          </div>
        )}
      </motion.button>
    </div>
  );
}
