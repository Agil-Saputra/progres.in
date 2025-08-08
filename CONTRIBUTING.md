# 🤝 Panduan Kontribusi Progres.in

Terima kasih atas minat Anda untuk berkontribusi pada **Progres.in**! 🎉

Kami menyambut kontribusi dari semua developer Indonesia untuk membantu memajukan ekosistem UMKM digital. 🇮🇩

---

## 📋 Daftar Isi

- [🚀 Memulai Kontribusi](#-memulai-kontribusi)
- [🔧 Setup Development Environment](#-setup-development-environment)
- [📝 Code Style Guidelines](#-code-style-guidelines)
- [🌿 Git Workflow](#-git-workflow)
- [🧪 Testing Guidelines](#-testing-guidelines)
- [📖 Documentation](#-documentation)
- [🐛 Bug Reports](#-bug-reports)
- [💡 Feature Requests](#-feature-requests)

---

## 🚀 Memulai Kontribusi

### **Jenis Kontribusi yang Kami Terima**

- 🐛 **Bug fixes** - Perbaikan bug yang ada
- ✨ **Feature development** - Fitur baru untuk UMKM
- 📚 **Documentation** - Perbaikan atau penambahan dokumentasi
- 🎨 **UI/UX improvements** - Peningkatan antarmuka pengguna
- ⚡ **Performance optimization** - Optimisasi performa aplikasi
- 🧪 **Testing** - Penambahan test coverage
- 🌍 **Localization** - Dukungan bahasa daerah Indonesia

### **Area Kontribusi Prioritas**

1. **UMKM Features** - Fitur khusus untuk kebutuhan UMKM Indonesia
2. **Mobile Experience** - Optimisasi untuk pengguna mobile
3. **Accessibility** - Dukungan untuk pengguna difabel
4. **Performance** - Kecepatan loading dan responsivitas
5. **SEO Optimization** - Peningkatan visibilitas di mesin pencari

---

## 🔧 Setup Development Environment

### **Prerequisites**
- 📦 Node.js (versi 18.0.0+)
- 📦 Git
- 📦 Package manager (npm/yarn/pnpm/bun)
- 💻 Code editor (VS Code recommended)

### **Fork & Clone**
```bash
# 1. Fork repository di GitHub
# 2. Clone fork Anda
git clone https://github.com/your-username/progres.in.git
cd progres.in

# 3. Add upstream remote
git remote add upstream https://github.com/Agil-Saputra/progres.in.git

# 4. Install dependencies
npm install

# 5. Jalankan development server
npm run dev
```

### **VS Code Extensions (Recommended)**
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "bradlc.vscode-tailwindcss",
    "christian-kohler.path-intellisense"
  ]
}
```

---

## 📝 Code Style Guidelines

### **JavaScript/React Standards**

#### **Component Structure**
```javascript
// ✅ Good
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Button from '@/components/button'

export default function FeatureCard({ title, description, className }) {
  return (
    <motion.div 
      className={cn("p-6 rounded-lg", className)}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
```

#### **Naming Conventions**
```javascript
// ✅ Component names: PascalCase
const UserProfileCard = () => {}

// ✅ Variables & functions: camelCase
const userName = "John Doe"
const handleSubmit = () => {}

// ✅ Constants: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.progres.in"

// ✅ File names: kebab-case atau PascalCase
user-profile-card.js
UserProfileCard.js
```

#### **Import Organization**
```javascript
// 1. React & core libraries
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 2. Third-party libraries
import { Swiper, SwiperSlide } from 'swiper/react'

// 3. Internal utilities
import { cn } from '@/lib/utils'

// 4. Internal components
import Button from '@/components/button'
import Card from '@/components/ui/card'

// 5. Data & assets
import coursesData from '@/data/courses.json'
import logo from '@/assets/logo.svg'
```

### **Tailwind CSS Guidelines**

#### **Class Organization**
```javascript
// ✅ Good - Logical grouping
className="
  flex items-center justify-between
  w-full max-w-4xl mx-auto
  p-6 bg-white rounded-lg shadow-lg
  hover:shadow-xl transition-shadow duration-300
"

// ❌ Avoid - Random order
className="p-6 flex w-full hover:shadow-xl bg-white rounded-lg items-center max-w-4xl mx-auto justify-between shadow-lg transition-shadow duration-300"
```

#### **Responsive Design Pattern**
```javascript
// ✅ Mobile-first approach
className="
  text-base md:text-lg lg:text-xl
  p-4 md:p-6 lg:p-8
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
"
```

### **Animation Guidelines**

#### **Framer Motion Best Practices**
```javascript
// ✅ Consistent animation timings
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// ✅ Performance-optimized animations
const optimizedHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300 }
}
```

---

## 🌿 Git Workflow

### **Branch Naming Convention**
```bash
# Features
feature/website-builder-ui
feature/umkm-dashboard
feature/mobile-optimization

# Bug fixes
fix/navbar-mobile-menu
fix/carousel-autoplay

# Documentation
docs/readme-update
docs/api-documentation

# Performance
perf/image-optimization
perf/bundle-size-reduction
```

### **Commit Message Format**
```bash
# Format: type(scope): subject

# Types:
feat: new feature
fix: bug fix
docs: documentation
style: formatting, missing semicolons, etc
refactor: code restructuring
perf: performance improvement
test: adding tests
chore: maintenance

# Examples:
feat(website-builder): add drag and drop components
fix(navbar): resolve mobile menu toggle issue
docs(readme): update installation guide
perf(images): implement next/image optimization
```

### **Pull Request Process**

#### **1. Prepare Your Branch**
```bash
# Update your fork
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

# Create feature branch
git checkout -b feature/amazing-feature
```

#### **2. Development Process**
```bash
# Make your changes
# Test thoroughly
npm run lint
npm run build

# Commit changes
git add .
git commit -m "feat(feature): add amazing feature"
git push origin feature/amazing-feature
```

#### **3. Create Pull Request**
```markdown
## 📝 Description
Brief description of changes and motivation.

## 🔄 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested on different browsers
- [ ] Added new tests

## 📸 Screenshots (if applicable)
Add screenshots for UI changes.

## 📋 Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Changes generate no new warnings
- [ ] Tests pass locally
```

---

## 🧪 Testing Guidelines

### **Manual Testing Checklist**
```markdown
## ✅ Desktop Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## ✅ Mobile Testing
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive breakpoints (320px, 768px, 1024px, 1920px)

## ✅ Functionality Testing
- [ ] Navigation works correctly
- [ ] Forms submit properly
- [ ] Animations are smooth
- [ ] Images load correctly
- [ ] No console errors

## ✅ Performance Testing
- [ ] Lighthouse score > 90
- [ ] Page load time < 3 seconds
- [ ] No layout shifts
- [ ] Proper caching
```

### **Automated Testing (Future)**
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Performance tests
npm run test:performance
```

---

## 📖 Documentation

### **Code Documentation**
```javascript
/**
 * Component untuk menampilkan card success story UMKM
 * @param {Object} story - Data success story
 * @param {string} story.name - Nama UMKM
 * @param {string} story.business - Jenis bisnis
 * @param {string} story.quote - Quote inspiratif
 * @param {Array} story.results - Array hasil yang dicapai
 * @returns {JSX.Element} Success story card component
 */
export default function SuccessStoryCard({ story }) {
  // Component implementation
}
```

### **README Updates**
Saat menambah fitur baru, update:
- 📋 Daftar fitur
- 🛠️ Dependencies (jika ada yang baru)
- 📁 Struktur folder (jika ada perubahan)
- 🚀 Cara menjalankan (jika ada perubahan workflow)

---

## 🐛 Bug Reports

### **Format Bug Report**
```markdown
## 🐛 Bug Description
Clear and concise description of the bug.

## 🔄 Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## 🎯 Expected Behavior
What should happen.

## 📸 Screenshots
Add screenshots if applicable.

## 🖥️ Environment
- OS: [e.g. iOS, Windows, macOS]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]
- Device: [e.g. iPhone 12, Desktop]

## 📋 Additional Context
Any other context about the problem.
```

---

## 💡 Feature Requests

### **Format Feature Request**
```markdown
## 🚀 Feature Description
Clear description of the feature.

## 🎯 Problem Statement
What problem does this solve for UMKM?

## 💡 Proposed Solution
How would you implement this?

## 🌟 Benefits
- Benefit 1 for UMKM users
- Benefit 2 for platform
- Benefit 3 for ecosystem

## 📋 Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

## 🎨 Mockups/Wireframes
Attach designs if available.
```

---

## 🏆 Recognition

### **Contributors Hall of Fame**
Contributors akan diakui dalam:
- 📜 CONTRIBUTORS.md file
- 🌟 Monthly contributor spotlight
- 🎯 Special mentions in releases
- 🏅 Digital badges untuk profile

### **Contribution Levels**
- 🥉 **Bronze**: 1-5 contributions
- 🥈 **Silver**: 6-15 contributions  
- 🥇 **Gold**: 16+ contributions
- 💎 **Diamond**: Core maintainer

---

## 📞 Getting Help

### **Communication Channels**
- 💬 **GitHub Discussions** - Pertanyaan umum
- 🐛 **GitHub Issues** - Bug reports & feature requests
- 📧 **Email**: dev@progres.in - Pertanyaan privat
- 💬 **Discord**: [Join Community](https://discord.gg/progresin)

### **Response Time**
- 🚨 **Critical bugs**: 24 jam
- 🐛 **Regular bugs**: 3-5 hari
- ✨ **Feature requests**: 1-2 minggu
- 📚 **Documentation**: 1 minggu

---

<div align="center">

## 🙏 Terima Kasih!

Setiap kontribusi, sekecil apapun, sangat berarti untuk kemajuan UMKM Indonesia.

**Mari bersama membangun ekosistem digital yang inklusif! 🚀**

</div>
