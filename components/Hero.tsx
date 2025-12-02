import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543489822-c49534f3271f?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Sauna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sauna-base/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-sauna-base via-transparent to-sauna-base/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="block text-sauna-primary font-bold tracking-[0.3em] mb-4 animate-fade-in-up">
            Г. ИВАНОВО, УЛ. МОСКОВСКАЯ 16Б
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-tight mb-8 text-white drop-shadow-2xl">
            Искусство <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sauna-muted">
              Вашего Отдыха
            </span>
          </h1>
          <p className="text-sauna-muted text-lg mb-10 max-w-xl leading-relaxed font-medium">
            Погрузитесь в атмосферу полного релакса в залах «Оазис» и «Грот». 
            Мангальная зона, апартаменты и всё необходимое для вашего комфорта.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rooms" className="group bg-sauna-primary text-white px-8 py-4 font-display font-bold text-sm tracking-widest hover:bg-sauna-primaryHover transition-all flex items-center justify-center gap-2 shadow-lg shadow-sauna-primary/30 rounded-lg border border-transparent">
              ВЫБРАТЬ ЗАЛ
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#apartments" className="bg-transparent border border-white/20 text-white px-8 py-4 font-display font-bold text-sm tracking-widest hover:bg-white/10 transition-all text-center rounded-lg backdrop-blur-sm">
              АПАРТАМЕНТЫ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;