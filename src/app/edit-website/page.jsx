'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardSidebar } from '@/layout/dashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowLeft, Globe, Palette, Type, Image as ImageIcon, Sparkles, Send, X, MessageCircle, Monitor, Tablet, Smartphone } from 'lucide-react'

export default function MakeWebsite() {
  // WhatsApp Button Component (already moved above)

  // EditableText Component
  const EditableText = ({ field, className, style, placeholder }) => (
    <div className="group relative">
      <input
        type="text"
        value={websiteData[field]}
        onChange={(e) => handleInputChange(field, e.target.value)}
        className={`${className} bg-transparent border-2 border-transparent hover:border-blue-300 focus:border-blue-500 focus:outline-none transition-all duration-200 w-full resize-none`}
        style={style}
        placeholder={placeholder}
      />
      <Button
        size="sm"
        onClick={() => openAiModal(field)}
        className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 hover:bg-blue-700 w-6 h-6 p-0 rounded-full"
      >
        <Sparkles className="w-3 h-3" />
      </Button>
    </div>
  );

  // EditableImage Component
  const EditableImage = ({ field, className, alt }) => (
    <div className="group relative">
      <img
        src={websiteData[field]}
        alt={alt}
        className={`${className} transition-all duration-200`}
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-[99]">
        <Button
          size="sm"
          onClick={() => handleImageUpload(field)}
          className="bg-white text-black hover:bg-gray-100"
        >
          <ImageIcon className="w-4 h-4 mr-2" />
          Ubah Gambar
        </Button>
      </div>
    </div>
  );
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [websiteData, setWebsiteData] = useState({
    title: 'Website Saya',
    description: 'Deskripsi website saya',
    primaryColor: '#3B82F6',
    secondaryColor: '#10B981',
    whatsappNumber: '628123456789',
    heroTitle: 'Website Bagus',
    heroSubtitle: 'Kami menyediakan solusi terbaik untuk anda',
    ctaText: 'Mulai Sekarang',
    aboutTitle: 'Tentang Kami',
    aboutText: 'Kami adalah perusahaan yang berkomitmen memberikan layanan terbaik kepada pelanggan dengan pengalaman bertahun-tahun di bidangnya.',
    servicesTitle: 'Layanan Kami',
    contactTitle: 'Hubungi Kami',
    contactText: 'Dapatkan konsultasi gratis sekarang juga!',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    aboutImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    serviceImage1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    serviceImage2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    serviceImage3: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    logoImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  });
  const [aiModal, setAiModal] = useState({ isOpen: false, field: '', prompt: '' });
  const [isGenerating, setIsGenerating] = useState(false);
  const [devicePreview, setDevicePreview] = useState('desktop'); // desktop, tablet, mobile
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishProgress, setPublishProgress] = useState(0);
  // Fix: menuOpen state for mobile hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Get selected template from localStorage
    const template = localStorage.getItem('selectedTemplate');
    if (template) {
      setSelectedTemplate(JSON.parse(template));
    } else {
      // If no template selected, redirect back to create-website
      router.push('/create-website');
    }
  }, [router]);

  const handleInputChange = (field, value) => {
    setWebsiteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const openAiModal = (field) => {
    setAiModal({ isOpen: true, field, prompt: '' });
  };

  const closeAiModal = () => {
    setAiModal({ isOpen: false, field: '', prompt: '' });
  };

  const generateWithAI = async () => {
    setIsGenerating(true);
    
    // Simulate AI generation (replace with actual AI API call)
    setTimeout(() => {
      const suggestions = {
        title: ['Solusi Digital Terdepan', 'Inovasi Teknologi Modern', 'Platform Bisnis Digital'],
        description: ['Transformasi digital untuk masa depan yang lebih baik', 'Solusi teknologi inovatif untuk bisnis modern', 'Platform terpercaya untuk kemajuan bisnis Anda'],
        heroTitle: ['Wujudkan Impian Bisnis Anda', 'Solusi Terbaik untuk Kesuksesan', 'Bergabunglah dengan Revolusi Digital'],
        heroSubtitle: ['Dengan teknologi terdepan dan tim ahli berpengalaman', 'Raih kesuksesan dengan strategi yang tepat', 'Tingkatkan bisnis Anda ke level selanjutnya'],
        ctaText: ['Konsultasi Gratis', 'Mulai Sekarang', 'Dapatkan Penawaran'],
        aboutTitle: ['Mengapa Memilih Kami?', 'Cerita Kami', 'Visi & Misi'],
        aboutText: ['Dengan pengalaman lebih dari 10 tahun, kami telah membantu ribuan klien mencapai target bisnis mereka melalui solusi digital yang inovatif dan terpercaya.', 'Tim profesional kami berkomitmen memberikan layanan berkualitas tinggi dengan pendekatan personal untuk setiap klien.'],
        servicesTitle: ['Layanan Unggulan', 'Solusi Komprehensif', 'Produk & Layanan'],
        contactTitle: ['Mari Berdiskusi', 'Hubungi Tim Kami', 'Konsultasi Gratis'],
        contactText: ['Tim ahli kami siap membantu mewujudkan visi bisnis Anda. Hubungi sekarang!', 'Dapatkan konsultasi gratis dan solusi terbaik untuk kebutuhan Anda.']
      };

      const fieldSuggestions = suggestions[aiModal.field] || ['Konten yang dihasilkan AI'];
      const randomSuggestion = fieldSuggestions[Math.floor(Math.random() * fieldSuggestions.length)];
      
      handleInputChange(aiModal.field, randomSuggestion);
      setIsGenerating(false);
      closeAiModal();
    }, 2000);
  };

  const getPremadePrompts = (field) => {
    const prompts = {
      title: [
        'Buatkan nama brand yang profesional untuk perusahaan teknologi',
        'Nama bisnis yang mudah diingat untuk startup digital',
        'Brand name yang modern untuk agency kreatif',
        'Nama perusahaan yang elegan untuk layanan konsultasi'
      ],
      description: [
        'Deskripsi singkat untuk perusahaan yang bergerak di bidang teknologi dan inovasi',
        'Tagline yang menarik untuk startup yang fokus pada solusi digital',
        'Deskripsi profesional untuk agency yang memberikan layanan komprehensif',
        'Penjelasan ringkas tentang perusahaan konsultan bisnis yang berpengalaman'
      ],
      heroTitle: [
        'Judul hero yang powerful untuk perusahaan teknologi yang mengutamakan inovasi',
        'Headline yang menarik perhatian untuk startup yang ingin mengubah industri',
        'Judul utama yang inspiring untuk agency kreatif dengan solusi out-of-the-box',
        'Hero title yang professional untuk konsultan bisnis dengan track record terbaik'
      ],
      heroSubtitle: [
        'Subtitle yang menjelaskan value proposition perusahaan teknologi modern',
        'Deskripsi supporting yang menggambarkan keunggulan startup digital',
        'Penjelasan singkat tentang pendekatan unik agency kreatif',
        'Subtitle yang menekankan pengalaman dan keahlian konsultan profesional'
      ],
      ctaText: [
        'Teks tombol yang mengajak action untuk konsultasi gratis',
        'Call-to-action yang persuasif untuk demo produk',
        'Button text yang menarik untuk memulai kerjasama',
        'CTA yang efektif untuk mendapatkan penawaran khusus'
      ],
      aboutTitle: [
        'Judul section about yang menunjukkan keunggulan kompetitif perusahaan',
        'Heading yang menekankan mengapa klien harus memilih layanan kami',
        'Judul tentang visi misi perusahaan yang inspiring',
        'Title yang menggambarkan journey dan pencapaian perusahaan'
      ],
      aboutText: [
        'Cerita perusahaan yang menunjukkan expertise dan pengalaman bertahun-tahun',
        'Deskripsi tentang tim professional yang berdedikasi memberikan hasil terbaik',
        'Penjelasan tentang pendekatan inovatif dan solusi yang customer-centric',
        'Narasi tentang komitmen perusahaan terhadap kualitas dan kepuasan klien'
      ],
      servicesTitle: [
        'Judul section layanan yang menggambarkan solusi komprehensif',
        'Heading untuk showcase produk dan service unggulan',
        'Title yang menekankan keahlian di berbagai bidang',
        'Judul untuk portofolio layanan yang beragam dan berkualitas'
      ],
      contactTitle: [
        'Judul section kontak yang mengajak untuk memulai diskusi',
        'Heading yang persuasif untuk mendorong klien menghubungi',
        'Title yang menekankan kesediaan untuk konsultasi',
        'Judul yang menunjukkan keterbukaan untuk kerjasama'
      ],
      contactText: [
        'Teks ajakan yang menunjukkan antusiasme untuk membantu klien mencapai tujuan',
        'Deskripsi tentang proses konsultasi yang mudah dan tidak mengikat',
        'Penjelasan tentang komitmen untuk memberikan solusi terbaik',
        'Text yang menekankan bahwa tim siap membantu kapan saja'
      ]
    };
    
    return prompts[field] || [
      'Buatkan konten yang menarik dan profesional',
      'Generate teks yang engaging dan sesuai target audience',
      'Buat content yang memorable dan impactful'
    ];
  };

  const handleImageUpload = (field) => {
    // Simulate image upload (in real app, you'd implement actual file upload)
    const imageUrls = [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ];
    
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    handleInputChange(field, randomImage);
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    setPublishProgress(0);

    try {
      // Simulate publishing process with progress updates
      const steps = [
        { message: 'Memproses template...', progress: 20 },
        { message: 'Mengoptimalkan gambar...', progress: 40 },
        { message: 'Menyiapkan hosting...', progress: 60 },
        { message: 'Mengonfigurasi domain...', progress: 80 },
        { message: 'Finalisasi website...', progress: 100 }
      ];

      for (let i = 0; i < steps.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate processing time
        setPublishProgress(steps[i].progress);
      }

      // Store website data for publish page
      const websiteToPublish = {
        ...websiteData,
        template: selectedTemplate,
        createdAt: new Date().toISOString(),
        url: `${websiteData.title.toLowerCase().replace(/\s+/g, '-')}.progres.in`
      };
      localStorage.setItem('websiteToPublish', JSON.stringify(websiteToPublish));
      
      // Navigate to publish page
      router.push('/publish');
    } catch (error) {
      console.error('Publishing failed:', error);
      setIsPublishing(false);
      setPublishProgress(0);
    }
  };

  const getDeviceStyles = () => {
    switch (devicePreview) {
      case 'mobile':
        return {
          width: '375px',
          height: '667px',
          maxWidth: '375px',
          margin: '0 auto',
          transform: 'scale(0.8)',
          transformOrigin: 'top center'
        };
      case 'tablet':
        return {
          width: '768px',
          height: '1024px',
          maxWidth: '768px',
          margin: '0 auto',
          transform: 'scale(0.7)',
          transformOrigin: 'top center'
        };
      case 'desktop':
      default:
        return {
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
          margin: '0 auto',
          transform: 'scale(1)',
          transformOrigin: 'top center'
        };
    }
  };

  // WhatsApp Button Component (move outside so it's always defined)
  const WhatsAppButton = () => (
    <div className="fixed bottom-4 lg:bottom-6 right-4 lg:right-6 z-50">
      <a
        href={`https://wa.me/${websiteData.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );

  const renderFullWebsitePreview = () => {
    if (!selectedTemplate) return null;

    // Device-specific layouts
    const device = devicePreview;
    // Responsive layout for all templates
    if ([1,2,3,4].includes(selectedTemplate.id)) {
      // ...copy the entire minimalist responsive layout here...
      if (device === 'mobile') {
        // ...mobile layout (same as minimalist, but can be customized per template if needed)...
        return (
          <div className="w-full bg-white border-0 overflow-hidden shadow-lg" style={{ minHeight: '800px', maxWidth: '375px', margin: '0 auto', borderRadius: '16px' }}>
            <WhatsAppButton />
            {/* Mobile Header with Hamburger */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <EditableImage field="logoImage" className="w-8 h-8 rounded-lg object-cover" alt="Logo" />
                <EditableText field="title" className="text-lg font-bold text-gray-900 truncate" placeholder="Brand Name" />
              </div>
              {/* Hamburger menu (interactive) */}
              <div className="relative">
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                  onClick={() => setMenuOpen((open) => !open)}
                  aria-label="Open menu"
                >
                  {/* SVG Hamburger Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="7" width="16" height="2" rx="1" fill="#374151" />
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="#374151" />
                    <rect x="4" y="15" width="16" height="2" rx="1" fill="#374151" />
                  </svg>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                    <div className="flex flex-col">
                      <span className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Home</span>
                      <span className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">About</span>
                      <span className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Services</span>
                      <span className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Contact</span>
                    </div>
                  </div>
                )}
              </div>
            </header>
            {/* Stacked Hero Section */}
            <section className="py-6 px-4">
              <EditableText field="heroTitle" className="text-xl font-bold mb-2 text-gray-900" placeholder="Transform Your Business" />
              <EditableText field="heroSubtitle" className="text-base text-gray-600 mb-4" placeholder="We help businesses grow with cutting-edge solutions" />
              <EditableText field="ctaText" className="px-4 py-2 rounded-full font-semibold text-white shadow-lg transition-all cursor-pointer text-center text-sm" style={{ backgroundColor: websiteData.secondaryColor }} placeholder="Start Now" />
              <EditableImage field="heroImage" className="w-full h-40 object-cover rounded-xl mt-4" alt="Hero" />
            </section>
            {/* About Section */}
            <section className="py-6 px-4 bg-gray-50">
              <EditableImage field="aboutImage" className="w-full h-32 object-cover rounded-xl mb-2" alt="About Us" />
              <EditableText field="aboutTitle" className="text-lg font-bold mb-2 text-gray-900" placeholder="Why Choose Us?" />
              <EditableText field="aboutText" className="text-sm text-gray-600 mb-2" placeholder="We are a forward-thinking company dedicated to delivering exceptional results..." />
              <div className="flex justify-between mt-2">
                <div className="text-center">
                  <div className="text-lg font-bold" style={{ color: websiteData.primaryColor }}>10+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold" style={{ color: websiteData.secondaryColor }}>500+</div>
                  <div className="text-xs text-gray-600">Clients</div>
                </div>
              </div>
            </section>
            {/* Services Section */}
            <section className="py-6 px-4">
              <EditableText field="servicesTitle" className="text-lg font-bold mb-2 text-gray-900" placeholder="Our Services" />
              <div className="flex flex-col gap-3">
                {[{ field: 'serviceImage1', title: 'Digital Strategy', desc: 'Digital transformation strategies' }, { field: 'serviceImage2', title: 'Design & Development', desc: 'Beautiful digital experiences' }, { field: 'serviceImage3', title: 'Marketing Solutions', desc: 'Marketing campaigns' }].map((service, i) => (
                  <div key={i} className="bg-white rounded-xl shadow p-2 flex gap-2 items-center">
                    <EditableImage field={service.field} className="w-16 h-16 object-cover rounded-lg" alt={service.title} />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-xs text-gray-600">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Contact Section */}
            <section className="py-6 px-4 bg-gray-900 text-white">
              <EditableText field="contactTitle" className="text-lg font-bold mb-2 text-white" placeholder="Ready to Get Started?" />
              <EditableText field="contactText" className="text-sm text-gray-300 mb-2" placeholder="Let's discuss how we can help transform your business" />
              <button className="px-4 py-2 rounded-full font-semibold text-white shadow-lg transition-all text-sm" style={{ backgroundColor: websiteData.primaryColor }}>Contact Us</button>
            </section>
            {/* Footer */}
            <footer className="py-4 px-4 bg-black text-white text-center rounded-b-xl">
              <span className="text-xs">&copy; 2025 {websiteData.title}. All rights reserved.</span>
            </footer>
          </div>
        );
      } else if (device === 'tablet') {
        // ...tablet layout (same as minimalist, but can be customized per template if needed)...
        return (
          <div className="w-full bg-white border-0 overflow-hidden shadow-lg" style={{ minHeight: '800px', maxWidth: '768px', margin: '0 auto', borderRadius: '20px' }}>
            <WhatsAppButton />
            {/* Tablet Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <EditableImage field="logoImage" className="w-10 h-10 rounded-xl object-cover" alt="Logo" />
                <EditableText field="title" className="text-xl font-bold text-gray-900 truncate" placeholder="Brand Name" />
              </div>
              <nav className="flex gap-4 flex-1 justify-center">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium text-base">Home</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium text-base">About</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium text-base">Services</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium text-base">Contact</span>
              </nav>
              <button className="px-6 py-2 rounded-full font-medium text-white transition-all hover:shadow-lg text-base ml-4" style={{ backgroundColor: websiteData.primaryColor }}>Get Started</button>
            </header>
            {/* ...sections: hero, about, services, contact, footer... */}
            <section className="py-8 px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <EditableText field="heroTitle" className="text-3xl font-bold mb-3 text-gray-900" placeholder="Transform Your Business" />
                  <EditableText field="heroSubtitle" className="text-lg text-gray-600 mb-4" placeholder="We help businesses grow with cutting-edge solutions" />
                  <EditableText field="ctaText" className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all cursor-pointer text-center text-base" style={{ backgroundColor: websiteData.secondaryColor }} placeholder="Start Now" />
                </div>
                <EditableImage field="heroImage" className="w-full h-64 object-cover rounded-xl" alt="Hero" />
              </div>
            </section>
            <section className="py-8 px-6 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <EditableImage field="aboutImage" className="w-full h-48 object-cover rounded-xl" alt="About Us" />
                <div>
                  <EditableText field="aboutTitle" className="text-2xl font-bold mb-2 text-gray-900" placeholder="Why Choose Us?" />
                  <EditableText field="aboutText" className="text-base text-gray-600 mb-2" placeholder="We are a forward-thinking company dedicated to delivering exceptional results..." />
                  <div className="flex gap-6 mt-2">
                    <div className="text-center">
                      <div className="text-xl font-bold" style={{ color: websiteData.primaryColor }}>10+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold" style={{ color: websiteData.secondaryColor }}>500+</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="py-8 px-6">
              <EditableText field="servicesTitle" className="text-2xl font-bold mb-2 text-gray-900" placeholder="Our Services" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[{ field: 'serviceImage1', title: 'Digital Strategy', desc: 'Digital transformation strategies' }, { field: 'serviceImage2', title: 'Design & Development', desc: 'Beautiful digital experiences' }, { field: 'serviceImage3', title: 'Marketing Solutions', desc: 'Marketing campaigns' }].map((service, i) => (
                  <div key={i} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
                    <EditableImage field={service.field} className="w-24 h-24 object-cover rounded-lg mb-2" alt={service.title} />
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="py-8 px-6 bg-gray-900 text-white">
              <EditableText field="contactTitle" className="text-2xl font-bold mb-2 text-white" placeholder="Ready to Get Started?" />
              <EditableText field="contactText" className="text-base text-gray-300 mb-2" placeholder="Let's discuss how we can help transform your business" />
              <button className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all text-base" style={{ backgroundColor: websiteData.primaryColor }}>Contact Us</button>
            </section>
            <footer className="py-6 px-6 bg-black text-white text-center rounded-b-xl">
              <span className="text-base">&copy; 2025 {websiteData.title}. All rights reserved.</span>
            </footer>
          </div>
        );
      }
      // Desktop (default) layout
      return (
        <div className="w-full bg-white border-0 overflow-hidden shadow-lg" style={{ minHeight: '800px' }}>
          <WhatsAppButton />
          {/* Modern Header with Glass Effect */}
          <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50">
            <div className="flex items-center justify-between px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-6 max-w-7xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <EditableImage
                  field="logoImage"
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl object-cover flex-shrink-0"
                  alt="Logo"
                />
                <EditableText
                  field="title"
                  className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 truncate"
                  placeholder="Brand Name"
                />
              </div>
              <nav className="hidden md:flex flex-1 justify-center space-x-3 lg:space-x-6 xl:space-x-8">
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium transition-colors text-sm lg:text-base whitespace-nowrap">Home</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium transition-colors text-sm lg:text-base whitespace-nowrap">About</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium transition-colors text-sm lg:text-base whitespace-nowrap">Services</span>
                <span className="text-gray-600 hover:text-gray-900 cursor-pointer font-medium transition-colors text-sm lg:text-base whitespace-nowrap">Contact</span>
              </nav>
              <button 
                className="px-6 py-2 rounded-full font-medium text-white transition-all hover:shadow-lg text-base ml-4"
                style={{ backgroundColor: websiteData.primaryColor }}
              >
                Get Started
              </button>
            </div>
          </header>
          {/* Modern Hero Section with Gradient */}
          <section className="relative py-8 sm:py-12 lg:py-24 px-3 sm:px-4 lg:px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <EditableText
                  field="heroTitle"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900 leading-tight"
                  placeholder="Transform Your Business"
                />
                <EditableText
                  field="heroSubtitle"
                  className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  placeholder="We help businesses grow with cutting-edge solutions"
                />
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                  <EditableText
                    field="ctaText"
                    className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all cursor-pointer text-center text-sm sm:text-base"
                    style={{ backgroundColor: websiteData.secondaryColor }}
                    placeholder="Start Now"
                  />
                  <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-all text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <EditableImage
                  field="heroImage"
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl"
                  alt="Hero"
                />
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-6 -left-2 sm:-left-3 lg:-left-6 w-8 sm:w-12 lg:w-24 h-8 sm:h-12 lg:h-24 rounded-xl lg:rounded-2xl shadow-lg" style={{ backgroundColor: websiteData.primaryColor, opacity: 0.1 }}></div>
                <div className="absolute -top-2 sm:-top-3 lg:-top-6 -right-2 sm:-right-3 lg:-right-6 w-6 sm:w-8 lg:w-16 h-6 sm:h-8 lg:h-16 rounded-lg lg:rounded-xl shadow-lg" style={{ backgroundColor: websiteData.secondaryColor, opacity: 0.1 }}></div>
              </div>
            </div>
          </section>
          {/* Modern About Section */}
          <section className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <EditableImage
                  field="aboutImage"
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl"
                  alt="About Us"
                />
                <div className="absolute inset-0 rounded-xl lg:rounded-2xl ring-1 ring-black/5"></div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <EditableText
                  field="aboutTitle"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900"
                  placeholder="Why Choose Us?"
                />
                <EditableText
                  field="aboutText"
                  className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0"
                  placeholder="We are a forward-thinking company dedicated to delivering exceptional results..."
                />
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto lg:mx-0">
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: websiteData.primaryColor }}>10+</div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: websiteData.secondaryColor }}>500+</div>
                    <div className="text-xs sm:text-sm lg:text-base text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Modern Services Section */}
          <section className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-6 sm:mb-8 lg:mb-16">
                <EditableText
                  field="servicesTitle"
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
                  placeholder="Our Services"
                />
                <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions for your business needs</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[
                  { field: 'serviceImage1', title: 'Digital Strategy', desc: 'Comprehensive digital transformation strategies' },
                  { field: 'serviceImage2', title: 'Design & Development', desc: 'Beautiful and functional digital experiences' },
                  { field: 'serviceImage3', title: 'Marketing Solutions', desc: 'Data-driven marketing campaigns' }
                ].map((service, i) => (
                  <div key={i} className="group bg-white rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl lg:hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <EditableImage
                      field={service.field}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={service.title}
                    />
                    <div className="p-3 sm:p-4 lg:p-6">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 lg:mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{service.desc}</p>
                      <button 
                        className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm font-semibold hover:underline transition-all"
                        style={{ color: websiteData.primaryColor }}
                      >
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Modern Contact Section */}
          <section className="py-8 sm:py-12 lg:py-20 px-3 sm:px-4 lg:px-6 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <EditableText
                field="contactTitle"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-white"
                placeholder="Ready to Get Started?"
              />
              <EditableText
                field="contactText"
                className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto"
                placeholder="Let's discuss how we can help transform your business"
              />
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
                <button 
                  className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  style={{ backgroundColor: websiteData.primaryColor }}
                >
                  Contact Us
                </button>
                <button className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold text-white border-2 border-white/20 hover:border-white/40 transition-all text-sm sm:text-base">
                  Schedule a Call
                </button>
              </div>
            </div>
          </section>
          {/* Modern Footer */}
          <footer className="py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <img src={websiteData.logoImage} alt="Logo" className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 rounded-md lg:rounded-lg" />
                    <span className="text-base sm:text-lg lg:text-xl font-bold">{websiteData.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-400 pr-0 sm:pr-4">{websiteData.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm lg:text-base">Services</h4>
                  <div className="space-y-1 lg:space-y-2 text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div>Digital Strategy</div>
                    <div>Web Development</div>
                    <div>Marketing</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm lg:text-base">Company</h4>
                  <div className="space-y-1 lg:space-y-2 text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div>About Us</div>
                    <div>Careers</div>
                    <div>Contact</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 sm:mb-3 lg:mb-4 text-sm lg:text-base">Connect</h4>
                  <div className="space-y-1 lg:space-y-2 text-gray-400 text-xs sm:text-sm lg:text-base">
                    <div>LinkedIn</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 text-center text-gray-400">
                <p className="text-xs sm:text-sm lg:text-base">&copy; 2025 {websiteData.title}. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  };

  // Skeleton Loading Component
  const SkeletonLoader = () => (
    <div>
      <DashboardSidebar>
        <div className="p-6">
          {/* Back Button Skeleton */}
          <Skeleton className="h-10 w-24 mb-6" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Panel Skeleton */}
            <div className="lg:col-span-1 space-y-6">
              {/* Settings Card Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Colors Card Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-20" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Card Skeleton */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-28" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-8 w-full" />
                  </div>
                </CardContent>
              </Card>

              {/* Publish Button Skeleton */}
              <Skeleton className="h-12 w-full" />
            </div>

            {/* Right Panel Skeleton */}
            <div className="lg:col-span-3">
              <Card>
                {/* Header Skeleton */}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-40" />
                    <div className="flex gap-2">
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                      <Skeleton className="h-8 w-8" />
                    </div>
                  </div>
                </CardHeader>

                {/* Preview Content Skeleton */}
                <CardContent className="space-y-6">
                  {/* Hero Section Skeleton */}
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-64 w-full" />
                  </div>

                  {/* Content Section Skeleton */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-3">
                        <Skeleton className="h-32 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    ))}
                  </div>

                  {/* Additional Content Skeletons */}
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DashboardSidebar>
    </div>
  );

  if (!selectedTemplate) {
    return <SkeletonLoader />;
  }

  return (
    <div className="relative">
      <DashboardSidebar>
        <div className="p-6">
          {/* Back Button */}
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Website Editor Panel - Smaller */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Type className="w-4 h-4" />
                    Pengaturan
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nama Website
                    </label>
                    <div className="flex items-center gap-1">
                      <Input
                        value={websiteData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="Nama website"
                        className="text-xs"
                      />
                      <Button
                        size="sm"
                        onClick={() => openAiModal('title')}
                        className="bg-blue-600 hover:bg-blue-700 p-1 h-7 w-7"
                      >
                        <Sparkles className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Deskripsi
                    </label>
                    <div className="flex items-center gap-1">
                      <Input
                        value={websiteData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Deskripsi website"
                        className="text-xs"
                      />
                      <Button
                        size="sm"
                        onClick={() => openAiModal('description')}
                        className="bg-blue-600 hover:bg-blue-700 p-1 h-7 w-7"
                      >
                        <Sparkles className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    <Palette className="w-4 h-4" />
                    Warna
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Warna Utama
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={websiteData.primaryColor}
                        onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={websiteData.primaryColor}
                        onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                        className="flex-1 text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Warna Sekunder
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={websiteData.secondaryColor}
                        onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                      />
                      <Input
                        value={websiteData.secondaryColor}
                        onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                        className="flex-1 text-xs"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm flex gap-2 items-enter">
				   <MessageCircle className="w-4 h-4" />
				  No Whatsapp
				  </CardTitle>
                </CardHeader>
                <CardContent>
                                    <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nomor WhatsApp
                    </label>
                    <Input
                      value={websiteData.whatsappNumber}
                      onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                      placeholder="628123456789"
                      className="text-xs"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Format: 628123456789 (tanpa +)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Publish Button */}
              <div className="space-y-3">
                <Button
                  onClick={handlePublish}
                  disabled={isPublishing}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 text-md font-semibold transition-all"
                >
                  {isPublishing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Mempublikasikan...
                    </div>
                  ) : (
                    'Publikasikan Website'
                  )}
                </Button>
                
                {/* Progress Bar */}
                {isPublishing && (
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${publishProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-center text-gray-600">
                      {publishProgress}% selesai
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Full Website Preview - Larger */}
            <div className="lg:col-span-3">
              <Card className="pb-0 rounded-b-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Preview Website (Klik untuk Edit)
                      </CardTitle>
                      <p className="text-sm text-gray-600">Klik pada teks di preview untuk mengeditnya langsung</p>
                    </div>
                    
                    {/* Device Preview Buttons */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <Button
                        variant={devicePreview === 'desktop' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setDevicePreview('desktop')}
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        <Monitor className="w-4 h-4" />
                        <span className="hidden sm:inline">Desktop</span>
                      </Button>
                      <Button
                        variant={devicePreview === 'tablet' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setDevicePreview('tablet')}
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        <Tablet className="w-4 h-4" />
                        <span className="hidden sm:inline">Tablet</span>
                      </Button>
                      <Button
                        variant={devicePreview === 'mobile' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setDevicePreview('mobile')}
                        className="flex items-center gap-1 px-3 py-1"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span className="hidden sm:inline">Mobile</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="border overflow-hidden max-h-[800px] overflow-y-auto bg-gray-50">
                    <div style={getDeviceStyles()} className="transition-all duration-300 ease-in-out">
                      {renderFullWebsitePreview()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* AI Modal */}
        {aiModal.isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  AI Assistant - {aiModal.field}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={closeAiModal}
                  className="p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prompt Kustom (Opsional)
                  </label>
                  <Input
                    value={aiModal.prompt}
                    onChange={(e) => setAiModal(prev => ({ ...prev, prompt: e.target.value }))}
                    placeholder={`Contoh: Buatkan ${aiModal.field} untuk bisnis teknologi yang modern`}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Atau Pilih Prompt Siap Pakai:
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                    {getPremadePrompts(aiModal.field).map((prompt, index) => (
                      <button
                        key={index}
                        onClick={() => setAiModal(prev => ({ ...prev, prompt }))}
                        className={`text-left p-3 rounded-lg border transition-all hover:border-blue-300 hover:bg-blue-50 ${
                          aiModal.prompt === prompt 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 leading-relaxed">{prompt}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Tips:</strong> AI akan menghasilkan konten untuk <strong>{aiModal.field}</strong> berdasarkan prompt yang Anda pilih atau tulis. Semakin spesifik prompt Anda, semakin baik hasilnya.
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={generateWithAI}
                    disabled={isGenerating}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        Generate dengan AI
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={closeAiModal}
                    className="px-6"
                  >
                    Batal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </DashboardSidebar>

      {/* Publishing Overlay Modal */}
      {isPublishing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center space-y-6">
              {/* Publishing Icon */}
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-600 animate-pulse" />
              </div>

              {/* Title */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mempublikasikan Website
                </h3>
                <p className="text-gray-600 text-sm">
                  Mohon tunggu, website Anda sedang dipublikasikan...
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-3">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${publishProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-blue-600 font-medium">{publishProgress}%</span>
                </div>
              </div>

              {/* Current Step Indicator */}
              <div className="text-sm text-gray-600">
                {publishProgress <= 20 && "Memproses template..."}
                {publishProgress > 20 && publishProgress <= 40 && "Mengoptimalkan gambar..."}
                {publishProgress > 40 && publishProgress <= 60 && "Menyiapkan hosting..."}
                {publishProgress > 60 && publishProgress <= 80 && "Mengonfigurasi domain..."}
                {publishProgress > 80 && "Finalisasi website..."}
              </div>

              {/* Loading Animation */}
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
