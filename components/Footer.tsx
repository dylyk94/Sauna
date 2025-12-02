import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-sauna-base pt-24 pb-10 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-sauna-primary"></span>
              КОНТАКТЫ
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-sauna-sage p-3 rounded-lg text-sauna-primary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Адрес</h4>
                  <p className="text-sauna-muted">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-sauna-sage p-3 rounded-lg text-sauna-primary group-hover:text-white transition-colors">
                   <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Телефон</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sauna-muted hover:text-sauna-primary transition-colors text-lg">{BUSINESS_INFO.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="bg-sauna-sage p-3 rounded-lg text-sauna-primary group-hover:text-white transition-colors">
                   <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">Email</h4>
                  <p className="text-sauna-muted">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-1 bg-sauna-sage/30 rounded-2xl border border-white/5">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.123456789!2d40.976!3d57.000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNfKwMDAnMDAuMCJOIDQwwrA1OCczMy42IkU!5e0!3m2!1sen!2sru!4v1600000000000!5m2!1sen!2sru" 
                 width="100%" 
                 height="250" 
                 style={{ border: 0, borderRadius: '12px', filter: 'grayscale(100%) invert(90%) contrast(85%)' }} 
                 loading="lazy"
                 title="Map"
               ></iframe>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-sauna-soft p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/5">
            <h3 className="font-display text-2xl font-bold mb-3 text-white">ЗАБРОНИРОВАТЬ</h3>
            <p className="text-sm text-sauna-muted mb-8">Оставьте заявку, и мы перезвоним вам в течение 10 минут для уточнения деталей.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-sauna-muted mb-2 ml-1 tracking-wider uppercase">Ваше имя</label>
                <input type="text" className="w-full bg-sauna-base border border-sauna-sage rounded-xl p-4 text-white focus:border-sauna-primary outline-none transition-colors placeholder:text-white/10" placeholder="Иван" />
              </div>
              <div>
                <label className="block text-xs font-bold text-sauna-muted mb-2 ml-1 tracking-wider uppercase">Телефон</label>
                <input type="tel" className="w-full bg-sauna-base border border-sauna-sage rounded-xl p-4 text-white focus:border-sauna-primary outline-none transition-colors placeholder:text-white/10" placeholder={BUSINESS_INFO.phone} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-sauna-muted mb-2 ml-1 tracking-wider uppercase">Дата</label>
                    <input type="date" className="w-full bg-sauna-base border border-sauna-sage rounded-xl p-4 text-white focus:border-sauna-primary outline-none transition-colors [color-scheme:dark]" />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-sauna-muted mb-2 ml-1 tracking-wider uppercase">Гости</label>
                    <select className="w-full bg-sauna-base border border-sauna-sage rounded-xl p-4 text-white focus:border-sauna-primary outline-none transition-colors appearance-none">
                      <option>2-4 чел.</option>
                      <option>5-7 чел.</option>
                      <option>8+ чел.</option>
                    </select>
                 </div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-sauna-primary text-white font-bold py-4 hover:bg-sauna-primaryHover transition-colors uppercase tracking-widest text-sm rounded-xl shadow-lg shadow-sauna-primary/20">
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </div>
              <p className="text-[10px] text-center text-sauna-muted/60">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sauna-muted">
          <p>© 2025 БАНИ НА МОСКОВСКОЙ. Все права защищены.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {BUSINESS_INFO.vk && (
              <a href={BUSINESS_INFO.vk} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 group">
                <div className="w-8 h-8 rounded bg-sauna-sage flex items-center justify-center group-hover:bg-sauna-primary transition-colors text-white">
                   <span className="font-bold text-[10px]">VK</span>
                </div>
              </a>
            )}
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded bg-sauna-sage text-white hover:bg-sauna-primary transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;