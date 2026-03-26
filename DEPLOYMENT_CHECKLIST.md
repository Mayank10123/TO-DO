# ✅ Vercel Deployment Checklist

Use this checklist before deploying to Vercel.

## Pre-Deployment

### Code Quality
- [ ] Run `npm run build` locally - no errors ✓
- [ ] Run `npm run lint` - no critical issues
- [ ] All TypeScript types are correct ✓
- [ ] No `console.log()` left for sensitive data

### Git Setup
- [ ] Code committed to GitHub main branch
- [ ] `.env.local` is in `.gitignore` (never committed)
- [ ] `dist/` folder is in `.gitignore`
- [ ] `node_modules/` is in `.gitignore`

### Environment Variables
- [ ] Have Firebase public credentials ready
- [ ] Have Firebase service account private key ready
- [ ] Know your project ID, client email, and private key

### Firebase Setup
- [ ] Firebase project created
- [ ] Email/Password authentication enabled
- [ ] API key restricted to your domain
- [ ] Service account created with private key downloaded

## Deployment Steps

### 1. Connect to Vercel
- [ ] GitHub account connected
- [ ] Repository pushed to GitHub
- [ ] Ready to import to Vercel

### 2. Vercel Dashboard Configuration
- [ ] Added all VITE_* environment variables
- [ ] Added all FIREBASE_* private variables
- [ ] VERCEL_ENV set correctly
- [ ] Domain configured (if custom domain)

### 3. Build & Deploy
- [ ] Initial build successful
- [ ] All functions deployed
- [ ] Frontend assets uploaded
- [ ] No build errors in dashboard

## Post-Deployment

### Testing
- [ ] Frontend loads at https://your-domain.com
- [ ] Sign up works with new email
- [ ] Login works with registered user
- [ ] Tasks can be created and managed
- [ ] Dark mode toggle works
- [ ] Responsive design on mobile

### Security
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] CORS headers are correct
- [ ] No sensitive data in browser console
- [ ] Backend logs don't expose secrets

### Monitoring
- [ ] Set up analytics in Firebase
- [ ] Monitor function invocations
- [ ] Check error logs regularly
- [ ] Set up alerts for high error rates

## Troubleshooting

### If Build Fails
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Fix TypeScript/ESLint errors
4. Commit and push changes

### If Functions Don't Load
1. Check that all environment variables are set
2. Verify Firebase credentials are correct
3. Check function logs in Vercel dashboard
4. Ensure API folder is at root level

### If Auth Fails
1. Verify CORS is working (check browser Network tab)
2. Check Firebase console for authentication logs
3. Ensure email/password auth is enabled in Firebase
4. Verify service account has correct permissions

### If Cannot Deploy
1. Ensure Node version is 18+
2. Clear Vercel cache and redeploy
3. Check git has all necessary files
4. Verify no syntax errors in package.json

## File Structure for Vercel

```
project-root/
├── api/                    # Vercel functions
│   ├── auth.ts
│   ├── verify-token.ts
│   └── firebase-admin.ts
├── src/                    # React app
│   ├── components/
│   ├── contexts/
│   └── config/
├── public/                 # Static assets
├── dist/                   # Build output (created by npm run build)
├── package.json           # Dependencies & scripts
├── vercel.json            # Vercel configuration ✓
├── vite.config.ts         # Vite configuration ✓
├── tsconfig.json          # TypeScript configuration
├── .env.example           # Example env variables ✓
├── .gitignore             # Git exclusions ✓
├── README.md              # Documentation ✓
└── VERCEL_DEPLOYMENT.md   # Deployment guide ✓
```

## Performance Optimization

Current optimizations:
- ✅ Vite build with minification
- ✅ Tailwind CSS purging unused styles
- ✅ React lazy loading for routes
- ✅ Firebase connectivity pooling

Optional future improvements:
- Code splitting for large components
- Image optimization
- Service worker caching
- Database query optimization

## Next Steps After Deployment

1. **Add Custom Domain**
   - Go to Vercel dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as directed

2. **Set Up Monitoring**
   - Enable Vercel Analytics
   - Set up error tracking
   - Monitor Firebase usage

3. **Continuous Improvement**
   - Gather user feedback
   - Monitor performance metrics
   - Plan feature releases

---

**Ready to deploy?** Head to [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed steps!
