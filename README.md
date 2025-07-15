# Navsari Heritage Portal | નવસારી Heritage Portal

🏛️ **A beautiful and interactive web application showcasing the rich heritage, vibrant culture, and delicious street food of Navsari, Gujarat.**

જ્ઞાન, સંસ્કૃતિ અને સ્વાદનું કેન્દ્ર - Center of Knowledge, Culture, and Taste

## 🌟 Features

### 🏛️ Heritage & Culture
- **Interactive Heritage Sites**: Explore 25+ historical landmarks, temples, and cultural sites
- **Cultural Events**: Discover festivals, traditions, and celebrations
- **Historical Significance**: Learn about Navsari's rich history and heritage
- **Image Galleries**: Beautiful photo collections of heritage sites

### 🍛 Street Food Discovery
- **Vendor Directory**: 150+ registered street food vendors
- **Food Categories**: Traditional Gujarati dishes, sweets, snacks, and more
- **Location Mapping**: Find vendors by location in Navsari
- **Ratings & Reviews**: Community-driven food reviews

### 👥 Multi-Role System
- **Vendors**: Street food vendors can register and manage their profiles
- **Admins**: Content management and vendor oversight
- **Municipal Corporation**: Full administrative access and system management
- **Visitors**: Explore content and discover Navsari

### 🎨 Beautiful UI/UX
- **Responsive Design**: Works perfectly on all devices
- **Multilingual Support**: English, Hindi, and Gujarati
- **Interactive Animations**: Smooth transitions with Framer Motion
- **Modern Glass Morphism**: Beautiful backdrop blur effects
- **Custom Navsari Theme**: Colors inspired by heritage and culture

## 🚀 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide Icons**: Beautiful SVG icons

### Backend & Database
- **MongoDB**: NoSQL database for storing user and heritage data
- **Mongoose**: MongoDB object modeling
- **NextAuth.js**: Authentication with role-based access
- **bcryptjs**: Password hashing

### Authentication & Security
- **NextAuth.js**: Secure authentication system
- **Role-based Access Control**: Vendors, Admins, Municipal Corporation
- **Protected Routes**: Middleware for route protection
- **Session Management**: JWT-based sessions

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account (or local MongoDB)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/navsari-heritage-portal.git
cd navsari-heritage-portal
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Setup
Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.ruioeme.mongodb.net/navsari-heritage?retryWrites=true&w=majority

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-make-it-long-and-random

# Admin Credentials (for initial setup)
ADMIN_EMAIL=admin@navsari.gov.in
ADMIN_PASSWORD=NavsariAdmin@2024
```

### Step 4: Replace MongoDB Connection
1. Go to your MongoDB Atlas dashboard
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<username>` and `<password>` with your database user credentials
6. Update the `MONGODB_URI` in `.env.local`

### Step 5: Run the Application
```bash
# Development mode
npm run dev

# Build for production
npm run build
npm start
```

The application will be available at `http://localhost:3000`

## 🗄️ Database Schema

### User Collection
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: 'vendor' | 'admin' | 'municipal',
  isActive: Boolean,
  profile: {
    businessName: String,
    businessType: String,
    location: String,
    description: String,
    contact: String,
    avatar: String
  },
  permissions: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Heritage Collection
```javascript
{
  title: String,
  description: String,
  category: 'culture' | 'heritage' | 'street-food' | 'festival' | 'temple' | 'landmark',
  images: [String],
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  historicalSignificance: String,
  visitingHours: String,
  entryFee: String,
  features: [String],
  ratings: {
    average: Number,
    count: Number
  },
  isActive: Boolean,
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 User Roles & Permissions

### 🍛 Vendor
- Register business profile
- Manage food items and menu
- View dashboard with business analytics
- Update contact information

### 👨‍💼 Admin
- Manage heritage sites content
- Moderate vendor registrations
- View analytics and reports
- Content creation and editing

### 🏛️ Municipal Corporation
- Full system access
- Manage all users and vendors
- System configuration
- Data export and import
- Advanced analytics

## 🎨 UI Components

### Color Palette
```css
/* Navsari Theme Colors */
--navsari-50: #fef7ee
--navsari-500: #f0761b
--navsari-600: #e15d11

/* Heritage Theme Colors */
--heritage-50: #f0f9ff
--heritage-500: #0ea5e9
--heritage-600: #0284c7
```

### Key Components
- **Glass Morphism Cards**: Beautiful backdrop blur effects
- **Interactive Buttons**: Hover animations and state changes
- **Responsive Grid Layouts**: Adaptive to all screen sizes
- **Multilingual Text**: Support for English, Hindi, and Gujarati
- **Loading States**: Smooth skeleton loading animations

## 📱 Pages Overview

### 🏠 Homepage (`/`)
- Hero section with call-to-action
- Feature highlights
- Sample heritage sites and street food
- Registration prompts

### 🔐 Authentication
- **Login** (`/login`): Role-based login with beautiful UI
- **Register** (`/register`): Multi-step registration for different user types

### 📊 Dashboard (`/dashboard`)
- Heritage sites gallery
- Street food discovery
- Interactive filtering and search
- User profile management

### 👨‍💼 Admin Panel (`/admin`)
- User management
- Content management
- Analytics dashboard
- System settings

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication
- `POST /api/register` - User registration

### Heritage Sites
- `GET /api/heritage` - Fetch heritage sites
- `POST /api/heritage` - Create heritage site (Admin)
- `PUT /api/heritage/[id]` - Update heritage site (Admin)
- `DELETE /api/heritage/[id]` - Delete heritage site (Admin)

### Users & Vendors
- `GET /api/users` - Fetch users (Admin/Municipal)
- `PUT /api/users/[id]` - Update user (Admin/Municipal)
- `DELETE /api/users/[id]` - Delete user (Admin/Municipal)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
MONGODB_URI=your-production-mongodb-uri
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📧 Contact

- **Project Maintainer**: Navsari Municipal Corporation
- **Email**: admin@navsari.gov.in
- **Website**: https://navsari-heritage.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Navsari Municipal Corporation for heritage information
- Local vendors for street food data
- Community contributors for cultural insights
- Gujarat Tourism for promotional support

---

**Made with ❤️ for Navsari Heritage Preservation**

નવસારીના વારસા અને સંસ્કૃતિને જાળવવા માટે પ્રેમથી બનાવેલ 🏛️ 