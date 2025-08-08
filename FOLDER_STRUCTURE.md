# 📁 Panduan Organisasi Folder Progres.in

## 🎯 Prinsip Organisasi

Struktur folder dirancang dengan prinsip:
- **Separation of Concerns** - Setiap folder memiliki tanggung jawab yang jelas
- **Scalability** - Mudah dikembangkan seiring pertumbuhan aplikasi
- **Developer Experience** - Mudah dipahami oleh developer baru
- **Next.js Best Practices** - Mengikuti konvensi Next.js 13+ App Router

---

## 📂 Struktur Detail

### **🏠 Root Level**
```
progres.in/
├── .env.example              # Template environment variables
├── .gitignore               # Git ignore rules
├── README.md                # Dokumentasi utama
├── package.json             # Dependencies & scripts
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.mjs       # PostCSS configuration
├── jsconfig.json            # JavaScript configuration
├── eslint.config.mjs        # ESLint rules
└── components.json          # UI components config
```

### **📁 public/ - Static Assets**
```
public/
├── favicon.ico              # Website favicon
├── *.svg                    # SVG icons & illustrations
├── *.png                    # Raster images
└── *.webp                   # Optimized images
```
**Fungsi**: Menyimpan file statis yang dapat diakses langsung via URL

### **📁 src/app/ - App Router (Next.js 13+)**
```
src/app/
├── layout.js                # Root layout untuk seluruh aplikasi
├── page.js                  # Homepage utama
├── globals.css              # Global CSS styles
├── favicon.ico              # App favicon
│
├── create-website/          # Fitur pembuat website
│   ├── layout.js            # Layout khusus create-website
│   └── page.jsx             # Halaman create website
│
├── dashboard/               # Dashboard pengguna
│   └── page.js              # Halaman dashboard
│
├── edit-website/            # Editor website
│   └── page.jsx             # Halaman edit website
│
├── education-center/        # Pusat edukasi & kursus
│   ├── layout.js            # Layout education center
│   ├── page.jsx             # Halaman utama education
│   └── [slug]/              # Dynamic routes untuk kursus
│       └── page.js          # Detail kursus berdasarkan slug
│
├── login/                   # Authentication
│   └── page.js              # Halaman login
│
├── register/                # Registration
│   └── page.js              # Halaman registrasi
│
├── profile/                 # Profil pengguna
│   ├── layout.js            # Layout profil
│   └── page.jsx             # Halaman profil
│
└── publish/                 # Publikasi website
    ├── layout.js            # Layout publish
    └── page.jsx             # Halaman publish
```

**Fungsi**: Menggunakan App Router Next.js 13+ untuk routing berbasis file system

### **📁 src/components/ - Reusable Components**
```
src/components/
├── breadcrumb.js            # Navigasi breadcrumb
├── button.js                # Custom button component
├── navbar.js                # Header navigation
├── footer.js                # Footer section
├── slider.js                # Swiper.js wrapper
├── course-card.js           # Card untuk kursus
├── course-card-skeleton.js  # Loading skeleton kursus
├── course-detail-skeleton.js # Loading skeleton detail
├── success-story-card.js    # Card untuk success story
├── success-story-modal.jsx  # Modal success story
│
├── magicui/                 # Custom UI components
│   └── marquee.jsx          # Animasi marquee custom
│
└── ui/                      # UI primitive components
    ├── badge.jsx            # Status badge
    ├── button.jsx           # Base button primitive
    ├── card.jsx             # Container card
    ├── input.jsx            # Form input
    ├── modal.jsx            # Modal dialog
    ├── separator.jsx        # Divider line
    ├── sheet.jsx            # Side panel
    ├── sidebar.jsx          # Navigation sidebar
    ├── skeleton.jsx         # Loading skeleton
    ├── tooltip.jsx          # Hover tooltip
    └── shadcn-io/           # External UI library
        └── marquee/         # Marquee components
            └── index.jsx    # Marquee implementation
```

**Fungsi**: 
- **Top Level**: Komponen bisnis spesifik untuk Progres.in
- **ui/**: Komponen UI primitif yang reusable
- **magicui/**: Komponen UI custom dengan animasi khusus

### **📁 src/data/ - Static Data**
```
src/data/
├── courses.json             # Data kursus & pembelajaran
├── success-stories.json     # Kisah sukses UMKM
└── testimonials.json        # Testimoni pelanggan
```

**Fungsi**: Menyimpan data statis dalam format JSON untuk mock data atau content management

### **📁 src/assets/ - Media Files**
```
src/assets/
├── logo.svg                 # Logo utama Progres.in
├── grid.webp               # Background pattern
├── HIFI-Dashboard.png       # UI/UX mockup dashboard
├── lanPageMarque (1).png    # Template landing page 1
├── lanPageMarque (2).png    # Template landing page 2
└── womanWorking.png         # Ilustrasi orang bekerja
```

**Fungsi**: Asset media yang digunakan dalam aplikasi (import sebagai module)

### **📁 src/hooks/ - Custom React Hooks**
```
src/hooks/
├── use-course.js            # Hook untuk mengelola data kursus
└── use-mobile.js            # Hook untuk deteksi mobile device
```

**Fungsi**: Custom hooks untuk logic yang dapat digunakan ulang

### **📁 src/layout/ - Layout Components**
```
src/layout/
└── dashboardLayout.js       # Layout khusus untuk dashboard
```

**Fungsi**: Komponen layout yang kompleks dan dapat digunakan ulang

### **📁 src/lib/ - Utility Functions**
```
src/lib/
└── utils.js                 # Utility functions & helpers
```

**Fungsi**: Fungsi utility, helpers, dan konfigurasi yang digunakan di berbagai tempat

---

## 🗂️ Konvensi Penamaan

### **File Naming**
- **Pages**: `page.js` atau `page.jsx`
- **Layouts**: `layout.js`
- **Components**: `PascalCase.js` atau `kebab-case.js`
- **Hooks**: `use-nama-hook.js`
- **Utils**: `nama-util.js`

### **Folder Naming**
- **App Routes**: `kebab-case` (create-website, education-center)
- **Components**: `kebab-case` atau `PascalCase`
- **Dynamic Routes**: `[parameter]`

### **Import/Export Patterns**
```javascript
// Default export untuk pages dan main components
export default function HomePage() {}

// Named exports untuk utilities
export { cn, formatDate } from './utils'

// Barrel exports untuk UI components
export * from './button'
export * from './card'
```

---

## 🔄 Data Flow Architecture

### **State Management**
```
User Interaction
      ↓
React Component
      ↓
Custom Hooks (jika ada)
      ↓
Local State / Context
      ↓
UI Update
```

### **Asset Loading**
```
Static Assets (public/) → Direct URL access
Media Assets (src/assets/) → Import as modules
Data (src/data/) → Import JSON files
```

### **Styling Architecture**
```
Tailwind Utilities
      ↓
Component Variants (CVA)
      ↓
Global Styles (globals.css)
      ↓
Custom CSS Classes
```

---

## 📏 Best Practices

### **Folder Organization**
1. **Satu tanggung jawab per folder**
2. **Maksimal 3 level nesting**
3. **Konsisten dengan naming convention**
4. **Pisahkan concerns (UI, data, logic)**

### **Component Structure**
1. **Import eksternal dulu**
2. **Import internal berdasarkan proximity**
3. **Definisi types/interfaces (jika TypeScript)**
4. **Component function**
5. **Export statement**

### **File Organization dalam Component**
```javascript
// 1. External imports
import React from 'react'
import { motion } from 'framer-motion'

// 2. Internal imports - utils
import { cn } from '@/lib/utils'

// 3. Internal imports - components
import Button from '@/components/button'

// 4. Internal imports - data
import coursesData from '@/data/courses.json'

// 5. Component definition
export default function CourseCard() {
  // Component logic
}
```

---

## 🚀 Skalabilitas

### **Menambah Fitur Baru**
1. Buat folder di `src/app/` untuk routing
2. Tambah components di `src/components/`
3. Buat custom hooks jika diperlukan
4. Update data structures di `src/data/`

### **Refactoring Guidelines**
1. **Extract components** yang digunakan berulang
2. **Create custom hooks** untuk logic yang kompleks
3. **Optimize imports** dengan barrel exports
4. **Split large files** jadi beberapa modules

### **Performance Considerations**
1. **Code splitting** dengan dynamic imports
2. **Image optimization** dengan Next.js Image
3. **Bundle analysis** dengan `@next/bundle-analyzer`
4. **Lazy loading** untuk components yang besar

---

Struktur ini dirancang untuk mendukung pertumbuhan aplikasi dari MVP hingga platform yang kompleks sambil menjaga code quality dan developer experience. 🚀
