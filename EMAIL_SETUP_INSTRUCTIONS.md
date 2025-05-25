# Email Setup Instructions for QuickQ Contact Form

## 🚀 Quick Setup with Web3Forms (Recommended - FREE)

### Step 1: Get Your Access Key
1. Go to [web3forms.com](https://web3forms.com)
2. Click "Get Started for Free"
3. Enter your email: `shourya.gupta.quickq@gmail.com`
4. Verify your email
5. Copy the Access Key provided

### Step 2: Update the Code
In `src/components/contact.jsx`, find this line:
```javascript
formDataToSend.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY')
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Web3Forms.

### Step 3: Test the Form
- Fill out the contact form on your website
- Click "Send Message"
- Check your email inbox for the formatted message

---

## 📧 Email Format You'll Receive

When someone submits the form, you'll receive an email like this:

```
Subject: QuickQ Contact Form Submission from [Name]

Hello QuickQ Team,

I am interested in learning more about QuickQ and would like to get in touch.

📋 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: [User's Name]
📧 Email: [User's Email]
📱 Phone: [User's Phone]

💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[User's Message]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Form Details:
• Sent from: QuickQ Landing Page
• Website: [Your Website URL]
• Submission Time: [Date and Time in IST]
• User Agent: [Browser Info]

This is an automated message from the QuickQ contact form.

Best regards,
[User's Name]
```

---

## 🔧 Alternative Options (If Web3Forms doesn't work)

### Option 1: Formspree
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Get your form endpoint
5. Replace the fetch URL in the code

### Option 2: EmailJS
1. Go to [emailjs.com](https://emailjs.com)
2. Create account and set up email service
3. Create email template
4. Get service ID, template ID, and public key
5. Update the code with EmailJS implementation

### Option 3: Netlify Forms (if hosting on Netlify)
1. Add `netlify` attribute to the form
2. Netlify will automatically handle form submissions

---

## 🎯 Features of Current Implementation

✅ **Professional Email Formatting**: Clean, organized email layout  
✅ **Form Validation**: Required fields are validated  
✅ **Loading States**: Shows "SENDING..." while submitting  
✅ **Success/Error Messages**: User feedback after submission  
✅ **Form Reset**: Clears form after successful submission  
✅ **Detailed Metadata**: Includes timestamp, website, browser info  
✅ **Indian Time Zone**: Shows submission time in IST  
✅ **Mobile Friendly**: Works on all devices  

---

## 🛠️ Troubleshooting

### If emails aren't being received:
1. Check spam/junk folder
2. Verify the access key is correct
3. Ensure email address is verified with Web3Forms
4. Check browser console for error messages

### If form shows error:
1. Check internet connection
2. Verify the access key is valid
3. Try submitting a test form
4. Check browser developer tools for network errors

---

## 📱 Ready to Test!

Your contact form is now ready! The current setup will:
1. Validate all required fields
2. Format the message professionally
3. Send it directly to your email
4. Show success/error messages to users
5. Reset the form for the next user

Just update the access key and you're good to go! 🚀
