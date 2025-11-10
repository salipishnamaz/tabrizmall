import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // اسکرول نرم
    const handleSmoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(e.target.hash.slice(1));
        }
      }
    };

    // افکت تایپ برای عنوان
    const typeEffect = () => {
      const title = document.querySelector('.hero-title');
      if (title) {
        const text = 'تبریزمال';
        let index = 0;
        
        const typeInterval = setInterval(() => {
          title.textContent = text.slice(0, index);
          index++;
          if (index > text.length) clearInterval(typeInterval);
        }, 150);
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    typeEffect();

    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const products = [
    {
      id: 1,
      name: "فرش ابریشم دستباف",
      price: "۲,۸۰۰,۰۰۰ تومان",
      image: "🧵",
      category: "صنایع دستی"
    },
    {
      id: 2,
      name: "عسل طبیعی کوهستان",
      price: "۱۵۰,۰۰۰ تومان", 
      image: "🍯",
      category: "خوراکی"
    },
    {
      id: 3,
      name: "آجیل ممتاز تبریزی",
      price: "۹۵,۰۰۰ تومان",
      image: "🥜",
      category: "خوراکی"
    },
    {
      id: 4,
      name: "نقره‌کاری باروقی",
      price: "۴۵۰,۰۰۰ تومان",
      image: "💎",
      category: "صنایع دستی"
    }
  ];

  const features = [
    { icon: "🚀", title: "پرداخت سریع", desc: "تراکنش‌های آنی با XRP" },
    { icon: "🔒", title: "امنیت بالا", desc: "حفاظت پیشرفته از داده‌ها" },
    { icon: "🌐", title: "دسترسی جهانی", desc: "صادرات به بازارهای بین‌المللی" },
    { icon: "💡", title: "هوش مصنوعی", desc: "تحلیل هوشمند بازار" }
  ];

  return (
    <div className="App">
      {/* Navigation - راست‌چین */}
      <nav className={`navbar ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏪</span>
            <span className="logo-text">تبریزمال</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
            >صفحه اصلی</a>
            <a 
              href="#features" 
              className={activeSection === 'features' ? 'active' : ''}
            >ویژگی‌ها</a>
            <a 
              href="#products" 
              className={activeSection === 'products' ? 'active' : ''}
            >محصولات</a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
            >تماس</a>
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* بقیه کد بدون تغییر */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="floating-element el1">🏪</div>
            <div className="floating-element el2">💰</div>
            <div className="floating-element el3">🌐</div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              اولین پلتفرم تجارت فیزیکی-دیجیتال
            </div>
            
            <h1 className="hero-title"></h1>
            
            <p className="hero-description">
              تبریزمال با ترکیب <strong>هوش مصنوعی پیشرفته</strong> و 
              <strong> فناوری بلاک‌چین</strong>، انقلابی در تجارت شهری ایجاد کرده است.
              از تولید تا صادرات، در کنار شما هستیم.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">۵۰+</div>
                <div className="stat-label">شهر ایران</div>
              </div>
              <div className="stat">
                <div className="stat-number">۵۰۰</div>
                <div className="stat-label">تولیدکننده</div>
              </div>
              <div className="stat">
                <div className="stat-number">۰.۰۰۱٪</div>
                <div className="stat-label">کارمزد XRP</div>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">
                <span>مشاهده محصولات</span>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="mailto:ali.pishnamazi@gmail.com" className="btn btn-secondary">
                <span>همکاری با ما</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">چرا تبریزمال؟</h2>
            <p className="section-subtitle">همه چیزی که برای رشد کسب‌وکار نیاز دارید</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">محصولات منتخب</h2>
            <p className="section-subtitle">برترین محصولات تولیدی تبریز</p>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                  <div className="product-category">{product.category}</div>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                  <button className="btn btn-product">
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>آماده شروع همکاری هستید؟</h2>
            <p>همین امروز به خانواده تبریزمال بپیوندید و کسب‌وکار خود را متحول کنید</p>
            <div className="cta-actions">
              <a href="mailto:ali.pishnamazi@gmail.com" className="btn btn-primary btn-large">
                <span>📧</span>
                تماس با ما
              </a>
              <a href="tel:+989104000467" className="btn btn-secondary btn-large">
                <span>📱</span>
                ۰۹۱۰۴۰۰۰۴۶۷
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-icon">🏪</span>
                <span className="logo-text">تبریزمال</span>
              </div>
              <p>الگوی ملی اقتصاد هوشمند محلی</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>دسترسی سریع</h4>
                <a href="#home">صفحه اصلی</a>
                <a href="#features">ویژگی‌ها</a>
                <a href="#products">محصولات</a>
                <a href="#contact">تماس</a>
              </div>
              
              <div className="footer-section">
                <h4>تماس با ما</h4>
                <a href="mailto:ali.pishnamazi@gmail.com">ایمیل: ali.pishnamazi@gmail.com</a>
                <a href="tel:+989104000467">تلفن: ۰۹۱۰۴۰۰۰۴۶۷</a>
                <span>آدرس: تبریز، ایران</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© ۱۴۰۳ تبریزمال - تمامی حقوق محفوظ است | شماره ثبت: ۱۴۰۳۵۰۱۴۰۰۰۳۰۰۷۸۸۸</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;