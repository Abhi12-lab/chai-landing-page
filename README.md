# Royal Chai - Coming Soon Landing Page

A premium, elegantly designed coming soon landing page for Royal Chai, featuring royal Indian aesthetics with sophisticated animations and mobile responsiveness.

## 🎨 Design Choices

**Aesthetic Direction:** I chose a luxurious, regal design inspired by traditional Indian royal courts. The color palette combines deep browns (reminiscent of rich chai), warm golds (representing royalty and premium quality), and cream tones (evoking warmth and comfort). The typography pairs Cinzel (a refined serif for headings) with Cormorant Garamond (an elegant body font), avoiding generic choices while maintaining readability.

**Visual Elements:** The custom SVG logo features a chai cup with decorative elements and animated steam wisps, establishing brand identity immediately. Subtle animations throughout (floating logo, shimmering text, ornamental borders) create an immersive, premium experience without overwhelming the user.

**User Experience:** The layout prioritizes clear information hierarchy - logo/brand → tagline → description → launch announcement → email capture → social links. The design is fully responsive with mobile-first considerations, ensuring the royal experience translates beautifully across all devices.

## 🚀 Features

- **Custom Royal Logo** with animated steam wisps
- **Premium Typography** (Cinzel + Cormorant Garamond)
- **Animated Background** with shimmer effects
- **Decorative Gold Borders** at top/bottom
- **Live Countdown Timer** to launch date
- **Feature Highlight Cards** showcasing product benefits
- **Email Signup Form** with validation and loading states
- **Social Media Icons** (Instagram, Facebook, Twitter, Pinterest)
- **Smooth Animations** throughout the entire page
- **Fully Responsive** design for all devices
- **Accessibility** features (ARIA labels, reduced motion support)
- **Interactive Hover Effects** on all interactive elements

## 📱 Mobile Responsive

The page adapts seamlessly across all screen sizes:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (up to 767px)

## 📂 File Structure

```
royal-chai/
├── index.html          # Main HTML structure
├── style.css           # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎨 Page Components

### Header Section
- Animated royal logo with floating animation
- Brand name with shimmering gold gradient text
- Decorative gold borders (top and bottom)

### Main Content
1. **Tagline** - "Brew the Royal Tradition" with decorative diamond separator
2. **Description** - Compelling brand story highlighting royal heritage
3. **Feature Cards** - Three highlight cards:
   - Royal Heritage (star icon)
   - Premium Quality (checkmark icon)
   - Instant Bliss (clock icon)
4. **Launch Banner** - Contains:
   - "Launching Soon" headline
   - Subtitle message
   - Live countdown timer (days, hours, minutes, seconds)
5. **Email Signup** - Form with:
   - Label and input field
   - Submit button with hover effects
   - Success message display
6. **Social Links** - Four social media icons with hover animations

### Footer
- Copyright notice with brand tagline

## 🔧 Technical Details

### HTML (index.html)
- Semantic HTML5 structure
- Custom SVG logo with animated steam
- Three feature cards with custom icons
- Countdown timer with separate elements for each time unit
- Accessibility attributes (ARIA labels)
- SEO-friendly meta tags
- Google Fonts integration (Cinzel + Cormorant Garamond)
- Linked external CSS and JS files

### CSS (style.css)
- CSS custom properties (variables) for consistent theming
- Responsive design with multiple media queries
- Advanced CSS animations:
  - Floating logo
  - Shimmering text gradients
  - Sliding borders
  - Card hover effects with gradient shimmer
  - Pulsing decorative elements
  - Blinking countdown separators
- Flexbox and CSS Grid layouts
- Mobile-first responsive approach
- Accessibility considerations (reduced motion support)
- Smooth transitions on all interactive elements

### JavaScript (script.js)
- **Countdown Timer** - Live countdown to launch date (customizable)
- **Email Validation** - Client-side regex validation
- **Form Submission** - Handles form submission with loading states
- **Parallax Effects** - Subtle background movement on scroll
- **Intersection Observer** - For fade-in animations on scroll
- **Smooth Scrolling** - Enhanced navigation experience
- Clean, well-commented, maintainable code

## 🎨 Color Palette

- Gold: `#D4AF37`
- Deep Gold: `#B8941E`
- Brown: `#3E2723`
- Deep Brown: `#2C1810`
- Cream: `#FFF8E7`
- Light Cream: `#FFFBF0`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance & Best Practices

- **Lightweight** - No external dependencies except Google Fonts
- **Fast Loading** - Optimized CSS and JavaScript
- **SEO Friendly** - Semantic HTML and meta tags
- **Accessible** - ARIA labels and keyboard navigation support
- **Progressive Enhancement** - Works even with JavaScript disabled (except countdown)
- **Cross-browser Compatible** - Tested across major browsers
- **Mobile Optimized** - Touch-friendly interactive elements

## 📊 What Makes This Design Stand Out

✨ **Distinctive Aesthetic** - Avoids generic AI/template looks with:
- Custom serif font pairing (Cinzel + Cormorant Garamond)
- Rich royal color palette inspired by traditional Indian aesthetics
- Hand-crafted SVG logo with animated elements
- Sophisticated gradient and animation combinations

🎨 **Attention to Detail**:
- Multiple animation delays for staggered reveals
- Subtle parallax effects
- Smooth micro-interactions on all hover states
- Consistent spacing and visual rhythm

💼 **Professional Quality**:
- Clean, maintainable code structure
- Comprehensive comments throughout
- Responsive design tested at all breakpoints
- Accessibility considerations baked in

## 🛠️ Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --gold: #D4AF37;
    --brown: #3E2723;
    /* ... modify as needed */
}
```

### Setting the Launch Date
Edit the countdown timer in `script.js`:
```javascript
// Change this to your actual launch date
const launchDate = new Date('2025-03-01T00:00:00'); // Format: YYYY-MM-DDTHH:MM:SS
```

Or set it relative to current date:
```javascript
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30); // 30 days from now
```

### Updating Social Links
Edit the `href` attributes in `index.html`:
```html
<a href="https://instagram.com/yourhandle" class="social-icon">
```

### Customizing Feature Cards
In `index.html`, modify the feature cards:
```html
<h3 class="feature-title">Your Feature Title</h3>
<p class="feature-text">Your feature description</p>
```

### Adding API Integration
In `script.js`, replace the console.log with your API endpoint:
```javascript
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email })
});
```

## 🎬 Animations & Effects

The page includes several sophisticated animations:

1. **Logo Float** - Gentle floating motion with slight rotation
2. **Text Shimmer** - Gradient text with brightness animation
3. **Border Slide-in** - Top and bottom borders slide into view
4. **Feature Card Hover** - Cards lift and glow on hover with shimmer effect
5. **Countdown Timer** - Blinking separators between time units
6. **Button Hover** - Buttons lift and enhance shadow on hover
7. **Social Icons** - Icons rotate and fill with gold on hover
8. **Parallax Background** - Subtle background movement on scroll
9. **Fade-in on Scroll** - Content fades in as you scroll down

All animations respect `prefers-reduced-motion` for accessibility.

## 📄 License

© 2025 Royal Chai. All rights reserved.

---

**Made with ☕ and ❤️ for Royal Chai**
