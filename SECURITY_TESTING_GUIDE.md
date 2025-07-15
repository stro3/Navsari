# Security Features Testing Guide

## ✅ **Implemented Security Features**

### 1. **Admin-Only Municipal Registration**
- ✅ Municipal role only visible to admin users in registration
- ✅ API validation prevents non-admin municipal account creation
- ✅ UI properly filters role options based on current user

### 2. **Forgot Password System**
- ✅ Forgot password page with proper validation
- ✅ Token generation and database storage
- ✅ Reset password page with token validation
- ✅ Secure password reset with token expiry (1 hour)
- ✅ Link added to login page

### 3. **Comprehensive Error Handling**
- ✅ Input validation on all forms
- ✅ Secure error messages (no information leakage)
- ✅ Database connection error handling
- ✅ Authentication error logging
- ✅ Proper HTTP status codes

## 🧪 **Testing Instructions**

### **Test 1: Municipal Role Restriction**

#### As Non-Admin User:
1. Register/Login as `vendor` role
2. Navigate to `/register`
3. **Expected**: Municipal Corporation option should NOT be visible
4. **Expected**: Only "Vendor" and "Admin" options should appear

#### As Admin User:
1. Register/Login as `admin` role  
2. Navigate to `/register`
3. **Expected**: All three role options should be visible
4. **Expected**: Can successfully create municipal accounts

#### API Protection Test:
1. Try to POST to `/api/register` with:
   ```json
   {
     "role": "municipal",
     "createdBy": "vendor",
     "name": "Test User",
     "email": "test@example.com", 
     "password": "password123"
   }
   ```
2. **Expected**: Should return 403 error with message about admin-only access

### **Test 2: Forgot Password Flow**

#### Step 1: Request Reset
1. Go to `/login`
2. Click "Forgot your password?"
3. Enter valid email address
4. **Expected**: Success message appears
5. **Expected**: Check server console for reset URL (since email isn't configured)

#### Step 2: Invalid Token
1. Go to `/reset-password?token=invalid`
2. **Expected**: "Invalid Reset Link" page appears
3. **Expected**: Button to request new reset link

#### Step 3: Valid Reset
1. Use valid token from console logs
2. Go to `/reset-password?token=VALID_TOKEN`
3. Enter new password
4. **Expected**: Success message and redirect to login
5. **Expected**: Can login with new password

#### Step 4: Expired Token
1. Wait for token to expire (1 hour) OR manually set `resetPasswordExpires` to past date in database
2. Try to use expired token
3. **Expected**: "Invalid or expired reset token" error

### **Test 3: Error Handling**

#### Registration Errors:
1. Try duplicate email registration
2. Try weak passwords
3. Try missing required fields
4. **Expected**: Clear, helpful error messages

#### Login Errors:
1. Try wrong email/password combination
2. Try non-existent user
3. Try wrong role for existing user
4. **Expected**: Generic "Invalid credentials" message (security)

#### Password Reset Errors:
1. Try non-existent email for reset
2. Try malformed email
3. Try empty password in reset
4. Try mismatched passwords
5. **Expected**: Appropriate error messages

## 🔒 **Security Checklist**

### ✅ **Authentication & Authorization**
- [x] Role-based access control implemented
- [x] Municipal role restricted to admin creation only
- [x] Session management working correctly
- [x] Protected routes checking user permissions

### ✅ **Password Security**
- [x] Passwords hashed with bcrypt (12 rounds)
- [x] Password strength validation (min 6 chars)
- [x] Secure password reset flow
- [x] Reset tokens expire in 1 hour
- [x] Tokens are cryptographically secure (32 bytes)

### ✅ **Input Validation**
- [x] Email format validation
- [x] Required field validation
- [x] Role validation on server side
- [x] SQL injection protection (using Mongoose)

### ✅ **Error Handling**
- [x] No sensitive information in error messages
- [x] Consistent error responses
- [x] Proper HTTP status codes
- [x] Server-side logging for debugging

### ✅ **Data Protection**
- [x] Sensitive data not logged to console (in production)
- [x] Database queries properly escaped
- [x] User passwords never returned in API responses
- [x] Reset tokens stored securely

## 🚀 **Production Deployment Notes**

### **Environment Variables Needed:**
```env
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
MONGODB_URI=your-mongodb-connection-string
```

### **Email Configuration (TODO):**
```javascript
// Add to forgot-password API route
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com', // or your SMTP provider
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

### **Security Headers (Recommended):**
```javascript
// Add to next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];
```

## 📝 **Database Changes Required**

The User model now includes:
```javascript
resetPasswordToken?: string;
resetPasswordExpires?: Date;
```

**Migration needed**: No automatic migration required. New fields will be added automatically when users request password resets.

## 🎯 **Success Criteria**

All tests above should pass with:
- ✅ No console errors
- ✅ Proper user feedback messages
- ✅ Secure token handling
- ✅ Role restrictions enforced
- ✅ Password reset flow working end-to-end

## 🐛 **Common Issues & Solutions**

### **Issue**: "Municipal role not hidden for non-admin"
**Solution**: Check session data in browser dev tools, ensure user role is properly set

### **Issue**: "Reset token not working"  
**Solution**: Check server console logs for the actual reset URL, ensure token hasn't expired

### **Issue**: "Registration still allows municipal for non-admin"
**Solution**: Ensure `createdBy` field is being sent in the API request body

### **Issue**: "Email not being sent"
**Solution**: Email functionality is not implemented yet - check server console for reset URLs during testing 