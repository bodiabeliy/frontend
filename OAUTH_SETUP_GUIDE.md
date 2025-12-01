# OAuth 2FA Setup Guide

This guide will help you configure Google, Facebook, and Apple OAuth authentication for the Azamaza application.

## Prerequisites

- NextAuth.js v5 installed ✅
- OAuth button components created ✅
- Server actions configured ✅
- AUTH_SECRET generated ✅

## 1. Google OAuth Setup

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to "APIs & Services" → "Credentials"

### Step 2: Configure OAuth Consent Screen
1. Click "OAuth consent screen" in the left sidebar
2. Select "External" user type
3. Fill in the required fields:
   - **App name**: Azamaza
   - **User support email**: Your email
   - **Developer contact**: Your email
4. Add scopes:
   - `userinfo.email`
   - `userinfo.profile`
5. Save and continue

### Step 3: Create OAuth 2.0 Client ID
1. Click "Credentials" → "Create Credentials" → "OAuth client ID"
2. Application type: **Web application**
3. Name: **Azamaza Web Client**
4. Authorized redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/google
   https://your-production-domain.com/api/auth/callback/google
   ```
5. Click "Create"
6. Copy the **Client ID** and **Client Secret**

### Step 4: Update .env File
```env
GOOGLE_CLIENT_ID="your-google-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

---

## 2. Facebook OAuth Setup

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Select "Consumer" as app type
4. Fill in app details:
   - **App name**: Azamaza
   - **App contact email**: Your email

### Step 2: Add Facebook Login Product
1. In your app dashboard, click "Add Product"
2. Find "Facebook Login" and click "Set Up"
3. Select "Web" platform
4. Enter your site URL: `http://localhost:3000`

### Step 3: Configure OAuth Settings
1. Go to "Facebook Login" → "Settings"
2. Add **Valid OAuth Redirect URIs**:
   ```
   http://localhost:3000/api/auth/callback/facebook
   https://your-production-domain.com/api/auth/callback/facebook
   ```
3. Save changes

### Step 4: Get App Credentials
1. Go to "Settings" → "Basic"
2. Copy the **App ID** and **App Secret**
3. (You may need to click "Show" for App Secret)

### Step 5: Update .env File
```env
FACEBOOK_CLIENT_ID="your-facebook-app-id"
FACEBOOK_CLIENT_SECRET="your-facebook-app-secret"
```

### Step 6: App Review (For Production)
- For development: You can test with your account and test users
- For production: Submit app for review to make it public

---

## 3. Apple OAuth Setup

⚠️ **Note**: Apple Sign In requires:
- Apple Developer Program membership ($99/year)
- A verified domain
- More complex setup with certificates

### Step 1: Configure Sign in with Apple
1. Go to [Apple Developer](https://developer.apple.com/)
2. Navigate to "Certificates, Identifiers & Profiles"
3. Click "Identifiers" → "+" to create new identifier

### Step 2: Create App ID
1. Select "App IDs" → Continue
2. Select "App" → Continue
3. Fill in details:
   - **Description**: Azamaza Web App
   - **Bundle ID**: com.azamaza.web (reverse domain)
4. Enable "Sign in with Apple" capability
5. Click "Continue" → "Register"

### Step 3: Create Services ID
1. Click "Identifiers" → "+" again
2. Select "Services IDs" → Continue
3. Fill in details:
   - **Description**: Azamaza Web Service
   - **Identifier**: com.azamaza.web.service
4. Enable "Sign in with Apple"
5. Click "Configure" next to Sign in with Apple:
   - **Primary App ID**: Select the App ID from Step 2
   - **Web Domain**: your-production-domain.com
   - **Return URLs**: 
     ```
     https://your-production-domain.com/api/auth/callback/apple
     ```
6. Save and Continue

### Step 4: Create Private Key
1. Go to "Keys" → "+"
2. Fill in:
   - **Key Name**: Azamaza Sign in with Apple Key
3. Enable "Sign in with Apple"
4. Click "Configure":
   - Select your Primary App ID
5. Click "Continue" → "Register"
6. **Download the .p8 key file** (you can only download once!)
7. Note the **Key ID**

### Step 5: Generate Client Secret
Apple requires generating a JWT client secret. Create a script:

```javascript
// generate-apple-secret.js
const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('path/to/AuthKey_XXXXXX.p8', 'utf8');

const clientSecret = jwt.sign(
  {},
  privateKey,
  {
    algorithm: 'ES256',
    expiresIn: '180d',
    audience: 'https://appleid.apple.com',
    issuer: 'YOUR_TEAM_ID', // Found in Apple Developer membership
    subject: 'com.azamaza.web.service', // Your Services ID
    keyid: 'YOUR_KEY_ID' // From Step 4
  }
);

console.log(clientSecret);
```

Run: `node generate-apple-secret.js`

### Step 6: Update .env File
```env
APPLE_CLIENT_ID="com.azamaza.web.service"
APPLE_CLIENT_SECRET="eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9..." # Generated JWT
```

---

## 4. Testing the Setup

### Local Development
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to:
   - `/create-account` - Test OAuth registration
   - `/login` - Test OAuth login

3. Click on each provider button:
   - **Google**: Should redirect to Google consent screen
   - **Facebook**: Should redirect to Facebook login
   - **Apple**: Should redirect to Apple ID login

4. After successful authentication:
   - User should be redirected back to your app
   - Session should be created
   - User data should be stored in MongoDB

### Verify Session
Check if user is logged in by inspecting cookies:
- Cookie name: `next-auth.session-token` (development)
- Cookie name: `__Secure-next-auth.session-token` (production with HTTPS)

---

## 5. Production Deployment

### Update NEXTAUTH_URL
In `.env` for production:
```env
NEXTAUTH_URL="https://your-production-domain.com"
```

### Update OAuth Redirect URIs
For each provider, add production redirect URIs:
- Google: `https://your-domain.com/api/auth/callback/google`
- Facebook: `https://your-domain.com/api/auth/callback/facebook`
- Apple: `https://your-domain.com/api/auth/callback/apple`

### Security Checklist
- ✅ Generate new AUTH_SECRET for production
- ✅ Use HTTPS (required for Apple, recommended for all)
- ✅ Add all OAuth secrets to production environment variables
- ✅ Don't commit .env file to version control
- ✅ Enable CORS only for your domain
- ✅ Set secure cookie options in NextAuth config

---

## 6. Backend API Integration

Your backend API needs to handle OAuth users. Ensure the following endpoint exists:

### POST /api/auth/oauth-signup
**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "provider": "google",
  "providerId": "1234567890",
  "image": "https://lh3.googleusercontent.com/..."
}
```

**Response:**
```json
{
  "user": {
    "id": "...",
    "email": "user@example.com",
    "name": "John Doe",
    "provider": "google"
  },
  "token": "jwt-token"
}
```

### Modify auth.config.ts (if needed)
If your backend requires different data structure, update the JWT callback in `src/lib/auth.config.ts`:

```typescript
async jwt({ token, user, account }) {
  if (account?.provider && user) {
    // Call your backend to create/link OAuth user
    const response = await fetch(`${process.env.AZAMAZA_API}api/auth/oauth-signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        name: user.name,
        provider: account.provider,
        providerId: account.providerAccountId,
        image: user.image
      })
    });
    
    const data = await response.json();
    token.accessToken = data.token;
  }
  return token;
}
```

---

## 7. Troubleshooting

### Common Issues

**"Redirect URI mismatch"**
- Verify redirect URIs in provider console exactly match NextAuth callback URLs
- Include both http://localhost:3000 (dev) and https://your-domain.com (prod)

**"Invalid client_secret"**
- For Apple: Regenerate JWT secret (expires every 6 months)
- For Google/Facebook: Check if you copied the full secret

**Session not persisting**
- Check if cookies are being set (browser DevTools → Application → Cookies)
- Verify AUTH_SECRET is set in .env
- Ensure NEXTAUTH_URL matches your current domain

**Facebook "App Not Set Up" error**
- Add test users in Facebook App dashboard
- Submit app for review before going public

**Apple "invalid_client" error**
- Verify Team ID, Key ID, and Services ID are correct
- Regenerate client secret JWT
- Check .p8 private key is valid

### Debug Mode
Enable NextAuth debug mode in `src/lib/auth.config.ts`:

```typescript
export const authConfig: NextAuthConfig = {
  debug: process.env.NODE_ENV === 'development',
  // ... rest of config
}
```

Check logs in terminal for detailed error messages.

---

## 8. Next Steps

After OAuth setup is complete:

1. **Add session UI**: Display logged-in user info
2. **Protected routes**: Redirect unauthenticated users
3. **Account linking**: Allow users to link multiple providers
4. **Profile management**: Let users update their info
5. **Email verification**: Optional for OAuth users
6. **Analytics**: Track OAuth sign-up conversion rates

---

## Resources

- [NextAuth.js Documentation](https://authjs.dev/)
- [Google OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- [Facebook Login Docs](https://developers.facebook.com/docs/facebook-login/)
- [Apple Sign In Guide](https://developer.apple.com/sign-in-with-apple/)
