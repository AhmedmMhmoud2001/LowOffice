import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from "../assets/WhatsApp_Image_2026-01-14_at_5.01.35_PM-removebg-preview.png"
export function Footer() {
  return (
    <footer className="bg-[var(--navy-blue)] text-white" dir="rtl">
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 2xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1 mb-4">

              <img alt="AMR SAIED KOTB Logo" className="w-20 h-20 object-contain" src={logo} />
              {/* <div className="w-10 h-10 2xl:w-12 2xl:h-12 bg-[var(--gold)] rounded-lg flex items-center justify-center">
                            <Scale className="w-6 h-6 2xl:w-7 2xl:h-7 text-[var(--navy-blue)]" />
                          </div> */}
              <span className=" hidden sm:flex text-md xl:text-lg font-bold text-white">عمرو قطب للمحاماة</span>

            </div>
            <p className="text-gray-300 mb-4 2xl:text-lg">
              مكتب قانوني متخصص في تقديم الاستشارات والخدمات القانونية الاحترافية لتحقيق العدالة وحماية حقوقكم.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg 2xl:text-xl mb-4 text-[var(--gold)] font-semibold">روابط سريعة</h3>
            <ul className="space-y-2 2xl:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[var(--gold)] transition-colors 2xl:text-lg">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-[var(--gold)] transition-colors 2xl:text-lg">
                  الاستشارات القانونية
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[var(--gold)] transition-colors 2xl:text-lg">
                  الخدمات القانونية
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-gray-300 hover:text-[var(--gold)] transition-colors 2xl:text-lg">
                  الفرنشايز
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg 2xl:text-xl mb-4 text-[var(--gold)] font-semibold">تواصل معنا</h3>
            <ul className="space-y-3 2xl:space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] mt-0.5" />
                <span className="text-gray-300 2xl:text-lg">+966 50 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] mt-0.5" />
                <span className="text-gray-300 2xl:text-lg">info@lawfirm.sa</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 2xl:w-6 2xl:h-6 text-[var(--gold)] mt-0.5" />
                <span className="text-gray-300 2xl:text-lg">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg 2xl:text-xl mb-4 text-[var(--gold)] font-semibold">تابعنا</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-[var(--charcoal-black)] rounded-lg flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy-blue)] transition-all">
                <Facebook className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </a>
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-[var(--charcoal-black)] rounded-lg flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy-blue)] transition-all">
                <Twitter className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </a>
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-[var(--charcoal-black)] rounded-lg flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy-blue)] transition-all">
                <Linkedin className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </a>
              <a href="#" className="w-10 h-10 2xl:w-12 2xl:h-12 bg-[var(--charcoal-black)] rounded-lg flex items-center justify-center hover:bg-[var(--gold)] hover:text-[var(--navy-blue)] transition-all">
                <Instagram className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 2xl:mt-12 2xl:pt-10 text-center text-gray-400">
          <p className="2xl:text-lg">&copy; 2026 المكتب القانوني. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
