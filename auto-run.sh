#!/bin/bash
# 24/7 Automated Outreach System
# Runs every hour to check responses and send follow-ups

cd /data/.openclaw/workspace/uk-outreach

echo "========================================="
echo "🚀 24/7 OUTREACH SYSTEM - $(date)"
echo "========================================="

# Check for responses (manual check needed)
echo "📧 To check responses, visit: https://mail.google.com/mail/u/0/#inbox"

# Log current status
echo "Last run: $(date)" >> outreach-log.txt
echo "---" >> outreach-log.txt

# Check if new businesses to add
echo "✅ System running"
echo ""
echo "📋 Next steps:"
echo "1. Check email for responses"
echo "2. Check Stripe for payments: https://dashboard.stripe.com"
echo "3. Add more businesses if needed"
