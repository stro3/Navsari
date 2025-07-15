# Gmail App Password Troubleshooting

## 🚨 **"App passwords not available" Error**

If you see "The setting you are looking for is not available for your account", here are the solutions:

### **Step 1: Enable 2-Factor Authentication**

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on **"2-Step Verification"**
3. Click **"Get Started"** and follow the setup process
4. Choose your verification method:
   - **Text message** (easiest)
   - **Authenticator app** (more secure)
   - **Phone call**

### **Step 2: Wait and Retry**
- After enabling 2FA, wait 5-10 minutes
- Go back to [App Passwords](https://myaccount.google.com/apppasswords)
- The option should now be available

### **Step 3: Generate App Password**
1. Select **"Mail"** from the dropdown
2. Select **"Other (Custom name)"**
3. Enter: **"Navsari Heritage Portal"**
4. Click **"Generate"**
5. Copy the 16-character password

---

## 🔄 **Alternative Email Solutions**

If Gmail still doesn't work, try these alternatives:

### **Option A: Use SendGrid (Recommended)**
```env
# Free account: 100 emails/day
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

**Setup:**
1. Go to [SendGrid.com](https://sendgrid.com)
2. Sign up for free account
3. Go to Settings → API Keys
4. Create new API key with "Mail Send" permissions
5. Copy the API key

### **Option B: Use Outlook/Hotmail**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

**Note:** Outlook may require app passwords too if 2FA is enabled.

### **Option C: Use Gmail with "Less Secure Apps" (Not Recommended)**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-regular-password
```

**Setup:**
1. Go to [Less Secure Apps](https://myaccount.google.com/lesssecureapps)
2. Turn on "Allow less secure apps"
3. Use your regular Gmail password

⚠️ **Warning:** This is less secure and Google may disable it.

---

## 🧪 **Quick Test Solutions**

### **Temporary Solution: Use Mailtrap (Development Only)**
```env
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=your-mailtrap-username
SMTP_PASS=your-mailtrap-password
```

**Setup:**
1. Go to [Mailtrap.io](https://mailtrap.io)
2. Sign up for free account
3. Create new inbox
4. Copy SMTP credentials
5. All emails will be captured in Mailtrap (won't reach real users)

### **Local Development: Console Logging**
If you just want to test the system, the current setup will log reset URLs to the console when email fails.

---

## ✅ **Verification Steps**

After setting up any email provider:

1. **Test the configuration:**
   ```bash
   # Go to test page
   http://localhost:3000/test-email
   ```

2. **Enter your email and click "Send Test Email"**

3. **Check results:**
   - ✅ Success: Email provider is working
   - ❌ Error: Check credentials and try different provider

---

## 🔧 **Complete .env.local Examples**

### **SendGrid (Recommended):**
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri

SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.your-sendgrid-api-key
```

### **Outlook:**
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri

SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password-or-app-password
```

### **Mailtrap (Development):**
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-uri

SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=your-mailtrap-username
SMTP_PASS=your-mailtrap-password
```

---

## 🚀 **Recommended Next Steps**

1. **For Development:** Use **SendGrid** (free 100 emails/day)
2. **For Testing:** Use **Mailtrap** (captures all emails)
3. **For Production:** Use **SendGrid** or professional email service

---

## 📞 **Still Having Issues?**

1. **Check your Google account type:**
   - Personal Gmail: Should work with 2FA
   - Google Workspace: May have restrictions
   - School/Organization: Often blocked

2. **Try different browser/incognito mode**

3. **Contact your IT admin** if using work/school account

4. **Use alternative email provider** (SendGrid is very reliable) 