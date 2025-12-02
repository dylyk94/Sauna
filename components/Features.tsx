import React from 'react';
import { Flame, Shirt, Footprints, BedDouble, Baby, Wifi, Percent, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const amenities = [
    {
      icon: <Clock className="w-8 h-8 text-sauna-primary" />,
      title: "Круглосуточно",
      desc: "Работаем круглосуточно и без выходных, чтобы вы могли отдохнуть в любое время."
    },
    {
      icon: <Flame className="w-8 h-8 text-sauna-primary" />,
      title: "Мангальная зона",
      desc: "Бесплатно для всех гостей. Приготовьте шашлык на свежем воздухе."
    },
    {
      icon: <Footprints className="w-8 h-8 text-sauna-primary" />,
      title: "Тапочки",
      desc: "Индивидуальные тапочки предоставляются бесплатно для каждого гостя."
    },
    {
      icon: <Shirt className="w-8 h-8 text-sauna-primary" />,
      title: "Полотенца",
      desc: "Мягкие свежие полотенца включены в стоимость посещения."
    },
    {
      icon: <BedDouble className="w-8 h-8 text-sauna-primary" />,
      title: "Простыни",
      desc: "Чистые простыни для парения также предоставляются бесплатно."
    },
    {
      icon: <Baby className="w-8 h-8 text-sauna-primary" />,
      title: "Дети бесплатно",
      desc: "Дети до 10 лет отдыхают бесплатно и не требуют доплаты."
    },
    {
      icon: <Wifi className="w-8 h-8 text-sauna-primary" />,
      title: "Бесплатный WI-FI",
      desc: "Высокоскоростной интернет доступен на всей территории комплекса."
    },
    {
      icon: <Percent className="w-8 h-8 text-sauna-primary" />,
      title: "Скидка в будни",
      desc: "В будни с 09:00 до 17:00 скидка 20% на сеанс."
    }
  ];

  return (
    <section className="py-20 bg-sauna-soft relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sauna-sage to-transparent opacity-30"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-widest mb-4 text-white">ВСЕ ВКЛЮЧЕНО</h2>
          <div className="w-20 h-1 bg-sauna-primary mx-auto mb-6"></div>
          <p className="text-sauna-muted max-w-2xl mx-auto">
            Мы заботимся о деталях, чтобы вы думали только об отдыхе. 
            Никаких скрытых доплат за базовый комфорт.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <div key={index} className="bg-sauna-sage/30 backdrop-blur-sm p-8 text-center rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-sauna-primary/30 group">
              <div className="bg-sauna-base w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/5 group-hover:border-sauna-primary/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-3 text-sauna-text group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-sm text-sauna-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;