# 🚀 Progres.in - Platform Digitalisasi UMKM Indonesia

<div align="center">
  <img src="./src/assets/logo.svg" alt="Progres.in Logo" width="100" height="100">
  
  <p align="center">
    <em>Bikin Website untuk Usahamu dalam 5 Menit!</em>
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-FF69B4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
</div>

---

## 📋 Daftar Isi

- [📖 Tentang Project](#-tentang-proyek)
- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [📁 Struktur Project](#-struktur-proyek)
- [🚀 Cara Menjalankan](#-cara-menjalankan)
- [🧪 Testing](#-testing)
- [📦 Build & Deploy](#-build--deploy)
- [🎨 Komponen & Fungsi](#-komponen--fungsi)
- [🤝 Kontribusi](#-kontribusi)

---

## 📖 Tentang Proyek

**Progres.in** adalah platform digital yang dirancang khusus untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia dalam proses digitalisasi bisnis mereka. Platform ini memungkinkan pengguna untuk membuat website profesional dalam waktu 5 menit tanpa perlu coding.

### 🎯 Misi Kami

Mengakselerasi pertumbuhan ekonomi yang adil dan berkelanjutan melalui digitalisasi UMKM Indonesia.

---

## ✨ Fitur Utama

### 🌟 **Website Builder Super Cepat**

- ⚡ **Website siap dalam 5 menit** - Template profesional siap pakai
- 🎨 **Customization mudah** - Tanpa coding, tanpa ribet
- 📱 **Responsive design** - Optimal di semua perangkat

### 🌍 **SEO & Marketing Tools**

- 🔍 **SEO Optimization** - Website mudah ditemukan di Google
- 📈 **Analytics dashboard** - Pantau performa website
- 💬 **Social media integration** - Terhubung dengan semua platform

### 🛒 **E-Commerce Ready**

- 🛍️ **Online store lengkap** - Sistem penjualan terintegrasi
- 💳 **Payment gateway** - Terima pembayaran digital
- 📊 **Inventory management** - Kelola stok dengan mudah

### 📚 **Education Center**

- 🎥 **100+ Video tutorial** - Pelatihan digital marketing gratis
- 📖 **Workshop online** - Belajar bersama expert
- 🎓 **Sertifikasi** - Dapatkan sertifikat keahlian

---

## 🛠️ Teknologi yang Digunakan

### **Frontend Framework**

- **Next.js 15.4.1** - React framework dengan App Router
- **React 19.1.0** - Library UI terdepan
- **Tailwind CSS 4** - Utility-first CSS framework

### **Animation & UI**

- **Framer Motion 12.23.12** - Animasi modern dan smooth
- **Lucide React** - Icon library yang konsisten
- **Radix UI** - Komponen UI primitif berkualitas tinggi

### **Additional Libraries**

- **Swiper.js** - Carousel dan slider interaktif
- **React Fast Marquee** - Animasi teks berjalan
- **Class Variance Authority** - Utility untuk styling kondisional

---

## 📁 Struktur Folder

```
progres.in/
├── 📁 public/                     # Static assets
│   ├── 🖼️ *.svg                   # Icon dan logo
│   └── 🖼️ *.webp                  # Gambar optimized
│
├── 📁 src/
│   ├── 📁 app/                    # App Router (Next.js 13+)
│   │   ├── 📄 layout.js           # Root layout
│   │   ├── 📄 page.js             # Homepage utama
│   │   ├── 📁 create-website/     # Halaman buat website
│   │   ├── 📁 dashboard/          # Dashboard pengguna
│   │   ├── 📁 education-center/   # Pusat edukasi
│   │   ├── 📁 login/              # Authentication
│   │   └── 📁 profile/            # Profil pengguna
│   │
│   ├── 📁 components/             # Reusable components
│   │   ├── 📄 navbar.js           # Navigation header
│   │   ├── 📄 footer.js           # Footer section
│   │   ├── 📄 button.js           # Custom button
│   │   ├── 📄 slider.js           # Swiper component
│   │   ├── 📁 ui/                 # UI primitif
│   │   └── 📁 magicui/            # Custom UI komponen
│   │
│   ├── 📁 data/                   # Static data
│   │   ├── 📄 courses.json        # Data kursus
│   │   ├── 📄 testimonials.json   # Testimoni pelanggan
│   │   └── 📄 success-stories.json # Kisah sukses UMKM
│   │
│   ├── 📁 assets/                 # Media files
│   │   ├── 🖼️ logo.svg            # Logo utama
│   │   └── 🖼️ *.png              # Gambar UI/UX
│   │
│   ├── 📁 hooks/                  # Custom React hooks
│   ├── 📁 layout/                 # Layout components
│   └── 📁 lib/                    # Utility functions
│
├── 📄 package.json                # Dependencies
├── 📄 tailwind.config.js          # Tailwind configuration
├── 📄 next.config.mjs             # Next.js configuration
└── 📄 README.md                   # Dokumentasi ini
```

---

## 🚀 Cara Menjalankan

### **Prerequisites**

Pastikan Anda sudah menginstall:

- 📦 **Node.js** (versi 18.0.0 atau lebih tinggi)
- 📦 **npm**, **yarn**, **pnpm**, atau **bun**

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/Agil-Saputra/progres.in.git
cd progres.in
```

### **2️⃣ Install Dependencies**

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install

# Atau menggunakan pnpm
pnpm install

# Atau menggunakan bun
bun install
```

### **3️⃣ Jalankan Development Server**

```bash
# Menggunakan npm
npm run dev

# Atau menggunakan yarn
yarn dev

# Atau menggunakan pnpm
pnpm dev

# Atau menggunakan bun
bun dev
```

### **4️⃣ Buka Browser**

Kunjungi [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi berjalan.

🎉 **Selamat!** Aplikasi sudah berjalan di local environment Anda.

---

## 🧪 Testing

### **Lint Check**

```bash
npm run lint
```

### **Build Test**

```bash
npm run build
```

### **Manual Testing Checklist**

- ✅ **Responsive Design** - Test di berbagai ukuran layar
- ✅ **Navigation** - Pastikan semua link berfungsi
- ✅ **Animations** - Cek smoothness animasi Framer Motion
- ✅ **Performance** - Gunakan Lighthouse untuk audit
- ✅ **Accessibility** - Test dengan screen reader

---

## 📦 Build & Deploy

### **Production Build**

```bash
npm run build
npm start
```

### **Deploy ke Vercel** (Recommended)

1. Push kode ke GitHub repository
2. Connect repository di [Vercel Dashboard](https://vercel.com)
3. Auto-deploy akan berjalan setiap push ke main branch

### **Environment Variables**

Buat file `.env.local` untuk konfigurasi:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

---

## 🎨 Komponen & Fungsi

### **🏠 Homepage (`src/app/page.js`)**

Halaman utama yang menampilkan:

- **Hero Section** - CTA utama dengan animasi Framer Motion
- **Vertical Marquee** - Showcase website templates
- **About Section** - Penjelasan tentang Progres.in
- **Features Grid** - Bento grid layout fitur unggulan
- **Success Stories** - Slider testimoni pelanggan
- **Testimonial Marquee** - Reviews bergerak horizontal

### **🧩 Komponen Utama**

#### **`components/navbar.js`**

```javascript
// Navigation header dengan:
- Logo branding
- Desktop navigation menu
- Mobile hamburger menu
- CTA buttons
```

#### **`components/slider.js`**

```javascript
// Swiper.js wrapper untuk:
- Success stories carousel
- Responsive breakpoints
- Autoplay & navigation
- Custom pagination
```

#### **`components/success-story-card.js`**

```javascript
// Card component untuk:
- Story testimonials
- Animated hover effects
- Modal integration
- Responsive layout
```

#### **`components/ui/`**

Koleksi UI primitif berbasis Radix UI:

- **Button** - Styled button dengan variants
- **Card** - Container dengan shadow
- **Modal** - Dialog overlay
- **Badge** - Status indicators

### **📊 Data Management**

#### **`data/testimonials.json`**

```json
{
  "id": "unique_id",
  "name": "Customer Name",
  "business": "Business Type",
  "testimonial": "Review text",
  "rating": 5,
  "avatar": "image_url"
}
```

#### **`data/success-stories.json`**

```json
{
  "id": "story_id",
  "name": "UMKM Name",
  "business": "Industry",
  "quote": "Success quote",
  "story": "Full story",
  "results": ["achievement1", "achievement2"]
}
```

### **🎭 Animasi & Interaksi**

#### **Framer Motion Patterns**

```javascript
// Scroll-triggered animations
const isInView = useInView(ref, { once: true, amount: 0.3 });

// Staggered children animation
initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
transition={{ duration: 0.8, delay: 0.2 }}

// Hover interactions
whileHover={{ scale: 1.05, y: -10 }}
whileTap={{ scale: 0.95 }}
```

### **🎨 Styling Strategy**

#### **Tailwind CSS Utilities**

- **Responsive Design** - `sm:`, `md:`, `lg:`, `xl:` breakpoints
- **Color Palette** - Blue primary dengan gray accents
- **Typography** - Geist font family optimization
- **Animations** - Custom CSS animations dengan Tailwind

#### **Design System**

```css
/* Primary Colors */
Blue-600: #2563eb (Primary brand)
Blue-700: #1d4ed8 (Hover states)
Gray-800: #1f2937 (Text primary)
Gray-600: #4b5563 (Text secondary)

/* Spacing Scale */
Sections: py-16 to py-20
Components: p-6 to p-8
Elements: gap-4 to gap-8
```

### **Guidelines**

- 📝 **Code Style** - Gunakan Prettier & ESLint
- 🧪 **Testing** - Test fitur baru sebelum submit PR
- 📚 **Documentation** - Update README jika diperlukan
- 🐛 **Bug Reports** - Gunakan issue template

---

## 📞 Dukungan & Komunitas

- 🌐 **Website**: [progres.in](https://progres-in.vercel.app/)
- 📧 **Email**: support@progres.in
- 🐱 **Github**: [github](https://github.com/Agil-Saputra/progres.in)

---

<div align="center">
  
  ### 🚀 Mari Bersama Memajukan UMKM Indonesia!
  
  **Dibuat dengan ❤️ untuk UMKM Indonesia**
  
  ---
  
  ⭐ **Star repository ini jika membantu!**
  
</div>
