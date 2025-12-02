import React from 'react';
import { Key, Wifi, Tv, Coffee } from 'lucide-react';
import { APARTMENT_PRICE } from '../constants';

const Apartments: React.FC = () => {
  return (
    <section id="apartments" className="py-24 relative overflow-hidden bg-sauna-sage">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-sauna-primary/20 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-panel p-8 md:p-16 rounded-[2.5rem] border-white/10 flex flex-col md:flex-row items-center gap-12 bg-sauna-base/80 shadow-2xl">
          
          <div className="md:w-1/2">
            <span className="text-sauna-primary font-bold tracking-widest text-sm uppercase">Проживание</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-6 text-white">
              УЮТНЫЕ АПАРТАМЕНТЫ
            </h2>
            <p className="text-sauna-muted text-lg mb-8 leading-relaxed border-l-2 border-sauna-primary/30 pl-4">
              Продлите свой отдых. Комфортабельные апартаменты со всеми удобствами доступны для суточной аренды. 
              Идеально после банных процедур.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
               <div className="flex items-center gap-3 text-sm text-sauna-text font-medium">
                 <Wifi size={18} className="text-sauna-primary" /> Wi-Fi
               </div>
               <div className="flex items-center gap-3 text-sm text-sauna-text font-medium">
                 <Tv size={18} className="text-sauna-primary" /> TV
               </div>
               <div className="flex items-center gap-3 text-sm text-sauna-text font-medium">
                 <Key size={18} className="text-sauna-primary" /> Отдельный вход
               </div>
               <div className="flex items-center gap-3 text-sm text-sauna-text font-medium">
                 <Coffee size={18} className="text-sauna-primary" /> Мини-кухня
               </div>
            </div>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-display font-bold text-sauna-primary">{APARTMENT_PRICE} ₽</span>
              <span className="text-sm font-normal text-sauna-muted">/ сутки</span>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute inset-0 bg-sauna-primary rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop" 
                className="relative w-full h-80 object-cover rounded-3xl shadow-xl border border-white/10"
                alt="Apartment Interior" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Apartments;