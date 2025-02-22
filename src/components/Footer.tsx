
import { Coffee, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-coffee text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="h-6 w-6" />
              <span className="font-semibold text-xl">Bean & Brew</span>
            </Link>
            <p className="text-coffee-cream/80 text-sm">
              专注于提供优质咖啡体验，从农场到您的杯中，每一步都精心把控。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-coffee-cream/80">
              <li><Link to="/shop" className="hover:text-coffee-gold transition-colors">购物</Link></li>
              <li><Link to="/about" className="hover:text-coffee-gold transition-colors">关于我们</Link></li>
              <li><Link to="/contact" className="hover:text-coffee-gold transition-colors">联系我们</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-coffee-cream/80">
              <li>电话: +1 (555) 123-4567</li>
              <li>邮箱: info@beanandbrew.com</li>
              <li>地址: 123 咖啡街, 咖啡市</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-coffee-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-coffee-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-coffee-gold transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-coffee-cream/60">
          <p>&copy; {new Date().getFullYear()} Bean & Brew. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
