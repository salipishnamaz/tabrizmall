import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="hero-only">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>💎</span>
            فرصت استثنایی سرمایه‌گذاری | الگوی ملی اقتصاد هوشمند
          </div>

          <h1 className="hero-title">
            <span className="primary">تبریزمال</span>
            <br />
            <span className="sub">آیندهٔ تجارت شهری ایران</span>
          </h1>

          <p className="hero-desc">
            اولین اکوسیستم <strong>فیزیکی-دیجیتال (Phygital)</strong> ایران مبتنی بر <strong>هوش مصنوعی</strong> و <strong>XRP Ledger</strong>،  
            طراحی‌شده در تبریز برای گسترش به <strong>۵۰ شهر</strong> و <strong>صادرات فناوری</strong> به جهان اسلام.
          </p>

          <div className="hero-cta">
            <a
              href="mailto:ali.pishnamazi@gmail.com?subject=همکاری سرمایه‌گذاری در تبریزمال"
              className="btn primary"
            >
              📩 جلسه همکاری با بنیان‌گذار
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat"><strong>€۱–۱۵M</strong> دامنه سرمایه‌گذاری</div>
            <div className="stat"><strong>۱۰۰%</strong> مالکیت فکری ایرانی</div>
            <div className="stat"><strong>۱۰–۲۰x</strong> بازدهی پیش‌بینی‌شده</div>
          </div>
        </div>
      </section>

      <footer className="minimal-footer">
        <p>© ۱۴۰۴ تبریزمال — <a href="mailto:ali.pishnamazi@gmail.com">ali.pishnamazi@gmail.com</a></p>
      </footer>
    </div>
  );
}