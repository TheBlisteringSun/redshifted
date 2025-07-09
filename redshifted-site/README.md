# Redshifted Website

A mobile-first MVP website for Redshifted, a STEM nonprofit empowering Ottawa's youth through hands-on learning experiences.

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Hosting**: Vercel (ready to deploy)

## 📱 Features

- **Mobile-first design** with responsive layout
- **Clean, accessible UI** with soft colors and large text/buttons
- **Static content** - no CMS required
- **Fast performance** optimized for mobile devices

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navbar.tsx          # Mobile-friendly navigation
│   ├── Footer.tsx          # Site footer with contact info
│   ├── InitiativeCard.tsx  # Initiative display cards
│   ├── EventsList.tsx      # Events and updates list
│   └── ContactSection.tsx  # Contact information section
```

## 🎯 Pages & Sections

1. **Landing Page** (`/`)
   - Mission statement
   - Founder's note
   - Call-to-action: "Explore Our Work"

2. **Initiatives Section**
   - Hardware Workshops
   - Catalyst Hackathon
   - Stacked block layout (inspired by Hack Club)

3. **Events/Updates Section**
   - Static event listings
   - Workshop and hackathon announcements

4. **Contact Section**
   - Email and social media links
   - Simple contact form (future enhancement)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

## 🎨 Design Principles

- **Mobile-first**: All layouts prioritize mobile experience
- **Beginner-friendly**: Simple language, no jargon
- **Accessible**: Large text, high contrast, clear navigation
- **Warm & welcoming**: Soft colors, friendly tone

## 🔧 Customization

### Content Updates
- Edit `src/app/page.tsx` for main content
- Update events in the `events` array
- Modify contact information in `Footer.tsx` and `ContactSection.tsx`

### Styling
- Colors: Primary red (`red-600`) with gray accents
- Typography: Geist font family
- Spacing: Consistent padding and margins using Tailwind classes

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation if needed

## 📞 Contact

For questions about the website or Redshifted:
- Email: hello@redshifted.org
- Instagram: @redshifted

---

Built with ❤️ for Ottawa's youth STEM community
