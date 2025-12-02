import React from 'react';
import { Users, Clock, PlusCircle } from 'lucide-react';
import { SAUNA_ROOMS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-sauna-base">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-l-4 border-sauna-primary pl-6">
          <span className="text-sauna-primary font-bold tracking-widest text-sm uppercase">Наши Залы</span>
          <h2 className="font-display text-4xl font-bold mt-2 text-white">ВЫБЕРИТЕ СВОЙ ОТДЫХ</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {SAUNA_ROOMS.map((room) => (
            <div key={room.id} className="group relative rounded-[2rem] overflow-hidden bg-sauna-sage transition-all hover:shadow-2xl hover:shadow-black/50 border border-white/5">
              {/* Image */}
              <div className="h-80 overflow-hidden relative">
                 {/* Discount Badge */}
                 <div className="absolute top-4 left-4 bg-sauna-primary text-white font-bold px-4 py-2 rounded-lg text-xs z-20 tracking-widest shadow-lg">
                   СКИДКА 20% В БУДНИ
                 </div>

                 <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white font-bold px-4 py-2 rounded-lg text-sm z-10 border border-white/10">
                   {room.price} ₽ / {room.durationLabel}
                 </div>
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sauna-sage to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-10 relative -mt-10">
                <h3 className="font-display text-3xl font-bold mb-4 text-white">{room.name}</h3>
                <p className="text-sauna-muted mb-6 h-12">{room.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8 bg-sauna-base/30 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 text-sm text-sauna-text font-medium">
                    <Users className="text-sauna-primary" size={20} />
                    <span>До {room.capacity} человек</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-sauna-text font-medium">
                    <Clock className="text-sauna-primary" size={20} />
                    <span>Сеанс {room.durationLabel}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-sauna-text font-medium col-span-2 pt-2 border-t border-white/5">
                    <PlusCircle className="text-sauna-primary" size={20} />
                    <span>Доп. гость: +{room.extraPersonPrice} ₽ / сеанс</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                   {room.features.map((feat, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-sm text-sauna-muted">
                       <span className="w-1.5 h-1.5 rounded-full bg-sauna-primary shrink-0"></span>
                       {feat}
                     </li>
                   ))}
                </ul>

                <a href="#contacts" className="block w-full text-center bg-sauna-primary text-white py-4 font-bold tracking-widest hover:bg-sauna-primaryHover transition-colors rounded-xl shadow-lg shadow-sauna-primary/20 uppercase text-sm">
                  ЗАБРОНИРОВАТЬ
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;