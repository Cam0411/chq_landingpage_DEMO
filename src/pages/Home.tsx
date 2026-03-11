import React from 'react';
import Hero from '../components/Hero';
import AgencyIntro from '../components/AgencyIntro';
import ProductArtistic from '../components/ProductArtistic';
import SystemsArtistic from '../components/SystemsArtistic';
import Contact from '../components/Contact';
import CreativeSlider from '../components/CreativeSlider';
import { Page } from '../types';

interface HomeProps {
  setActivePage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <>
      <Hero id="home" />
      <AgencyIntro />
      
      <ProductArtistic 
        id="creative"
        pageId="creative"
        onViewDetails={setActivePage}
        title="CREATIVE"
        subtitle="MEDIA - VIDEO"
        description="Sản xuất hình ảnh và video cao cấp, nâng tầm thương hiệu cá nhân. Quy trình sáng tạo độc bản, tối ưu hóa hình ảnh thương hiệu trên mọi nền tảng."
        image="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000"
        number="01"
        tags={['Personal Branding', 'Creative Concept', 'High-end Video']}
      />

      <CreativeSlider />

      <ProductArtistic 
        id="ads"
        pageId="ads"
        onViewDetails={setActivePage}
        title="ADS"
        subtitle="PERFORMANCE"
        description="Chiến dịch quảng cáo đa nền tảng (Google, Meta, TikTok). Cam kết KPI dựa trên doanh thu thực tế và chi phí tối ưu cho doanh nghiệp."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        number="02"
        tags={['Multi-platform', 'Digital Strategy', 'Revenue Growth']}
      />

      <SystemsArtistic 
        id="systems" 
        pageId="systems"
        onViewDetails={setActivePage}
      />

      <ProductArtistic 
        id="ecommerce"
        pageId="ecommerce"
        onViewDetails={setActivePage}
        title="VẬN HÀNH"
        subtitle="ECOMMERCE"
        description="Ecom onboard & setup chuyên nghiệp cho doanh nghiệp vừa và nhỏ. Quản trị Fanpage, SEO và Booking KOLs để tạo dòng tiền ổn định."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
        number="04"
        tags={['Ecom Setup', 'KOL Booking', 'Fanpage Management']}
      />

      <ProductArtistic 
        id="web"
        pageId="web"
        onViewDetails={setActivePage}
        title="CREATIVE"
        subtitle="WEBSITE"
        description="Thiết kế UI/UX và dựng Landing Page tối ưu chuyển đổi. Xây dựng hệ sinh thái kỹ thuật số mạnh mẽ, không chỉ đẹp mà còn là công cụ kinh doanh hiệu quả."
        image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2000"
        number="05"
        tags={['UI/UX Design', 'Landing Page', 'Conversion Optimization']}
      />

      <Contact id="contact" />
    </>
  );
};

export default Home;
