import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Здравствуйте! Я виртуальный консьерж "Бани на Московской". Могу рассчитать стоимость отдыха или рассказать о правилах. Спрашивайте!', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg.text);
    
    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-sauna-primary text-white p-4 rounded-full shadow-xl shadow-sauna-primary/40 hover:scale-110 transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm h-[500px] flex flex-col bg-sauna-base rounded-3xl shadow-2xl overflow-hidden border border-sauna-primary/20">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-sauna-primary to-sauna-primaryHover text-white p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-2 font-bold">
              <Bot size={20} />
              <span>AI Консьерж</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sauna-soft">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-sauna-primary text-white rounded-br-none' 
                    : 'bg-sauna-sage text-white rounded-bl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-sauna-sage/50 p-3 rounded-2xl rounded-bl-none flex items-center gap-2 text-xs text-sauna-muted border border-white/5">
                  <Loader2 size={14} className="animate-spin" /> Печатает...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-sauna-base border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ваш вопрос..."
                className="flex-1 bg-sauna-soft border border-sauna-sage rounded-xl px-4 py-3 text-sm text-white focus:border-sauna-primary outline-none placeholder:text-white/20"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading}
                className="bg-sauna-primary text-white p-3 rounded-xl hover:bg-sauna-primaryHover disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default AIChat;