# 📧 Email Setup Guide for Navsari Heritage Portal

## 🚀 **Quick Setup Options**

### **Option 1: Gmail SMTP (Easiest for Testing)**

#### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → Turn on

#### Step 2: Generate App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Enter "Navsari Heritage Portal"
4. Copy the 16-character password

#### Step 3: Add to .env.local
Create a `.env.local` file in your project root:

```env
# Required for NextAuth
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

---

### **Option 2: SendGrid (Recommended for Production)**

#### Step 1: Create SendGrid Account
1. Go to [SendGrid](https://sendgrid.com/)
2. Sign up for free account (100 emails/day free)

#### Step 2: Create API Key
1. Go to Settings → API Keys
2. Create API Key with "Mail Send" permissions
3. Copy the API key

#### Step 3: Add to .env.local
```env
# SendGrid Configuration
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

---

### **Option 3: Outlook/Hotmail**

#### Step 1: Enable 2-Factor Authentication
1. Go to [Microsoft Account](https://account.microsoft.com/)
2. Security → Advanced security options → Turn on 2-factor authentication

#### Step 2: Generate App Password
1. Go to Security → App passwords
2. Create new app password for "Mail"
3. Copy the password

#### Step 3: Add to .env.local
```env
# Outlook SMTP Configuration
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-app-password
```

---

## 🔧 **Complete .env.local Example**

Create `.env.local` in your project root:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/navsari-heritage

# NextAuth.js
NEXTAUTH_SECRET=your-super-secret-key-generate-new-one
NEXTAUTH_URL=http://localhost:3000

# Email Configuration (Choose one)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## 🧪 **Testing Email Setup**

### Step 1: Restart Your Development Server
```bash
npm run dev
```

### Step 2: Test Forgot Password
1. Go to `http://localhost:3000/login`
2. Click "Forgot your password?"
3. Enter your email address
4. Check your email inbox

### Step 3: Check for Errors
- Look at your terminal for any SMTP errors
- Check spam folder if email doesn't arrive
- Verify all environment variables are correct

---

## 🚨 **Common Issues & Solutions**

### **"Authentication failed" Error**
```
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```
**Solution**: 
- Make sure 2FA is enabled
- Use App Password, not your regular password
- Double-check SMTP_USER email is correct

### **"Connection timeout" Error**
```
Error: Connection timeout
```
**Solution**:
- Check your internet connection
- Verify SMTP_HOST and SMTP_PORT
- Some ISPs block port 587, try port 465 with `secure: true`

### **"Emails going to spam"**
**Solution**:
- Use a verified sender domain
- Add your domain to SPF/DKIM records
- Use SendGrid or similar service for production

### **Environment variables not loading**
**Solution**:
- Restart your development server after changing .env.local
- Make sure file is named `.env.local` exactly
- Check for typos in variable names

---

## 🔒 **Security Best Practices**

### **Never commit credentials**
```bash
# Add to .gitignore (already included)
.env.local
.env
```

### **Use App Passwords**
- Never use your main account password
- Generate unique app passwords for each application
- Revoke unused app passwords regularly

### **Production Environment**
```env
# Production .env
NEXTAUTH_URL=https://your-domain.com
SMTP_HOST=smtp.sendgrid.net
SMTP_USER=apikey
SMTP_PASS=SG.your-production-api-key
```

---

## 📱 **Email Template Preview**

The reset email includes:
- 🏛️ Navsari Heritage Portal branding
- Beautiful HTML template
- Clear call-to-action button
- Security warnings
- 1-hour expiry notice
- Both HTML and plain text versions

---

## ✅ **Verification Checklist**

- [ ] Created `.env.local` file
- [ ] Added all required environment variables
- [ ] Enabled 2FA on email account
- [ ] Generated app password
- [ ] Restarted development server
- [ ] Tested forgot password flow
- [ ] Received email successfully
- [ ] Reset password works end-to-end

---

## 🚀 **Next Steps**

1. **For Development**: Use Gmail SMTP with app password
2. **For Production**: Switch to SendGrid or dedicated email service
3. **Custom Domain**: Set up SPF/DKIM records for better deliverability
4. **Monitoring**: Add email delivery tracking and error logging

---

## 📞 **Need Help?**

If you're still having issues:

1. **Check the logs**: Look at your terminal for detailed error messages
2. **Test SMTP settings**: Use an online SMTP tester
3. **Firewall**: Make sure ports 587/465 are not blocked
4. **Gmail users**: Try generating a new app password

**Sample debugging log:**
```bash
# You should see this in your terminal:
Password reset email sent to: user@example.com

# Or error messages like:
Failed to send password reset email: Error: Invalid login
``` 