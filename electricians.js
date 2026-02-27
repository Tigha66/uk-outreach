// MORE UK ELECTRICIANS - Verified
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: { user: 'tirha66@gmail.com', pass: 'kevf vilb qwdk vzrq' }
});

function createEmail(business) {
  const html = `<!DOCTYPE html>
<html>
<body style="font-family:Arial;max-width:600px;margin:0auto">
<div style="padding:20px">
<p>Hi there,</p>
<p>I help electricians never miss another call.</p>
<p><strong>The problem:</strong> You miss calls when you're on jobs. Those leads go to competitors.</p>
<p><strong>What I offer:</strong></p>
<ul>
<li>Texts every missed caller within 60 seconds</li>
<li>Qualifies the job (service, address, urgency)</li>
<li>Books appointments automatically</li>
<li>Sends reminders</li>
</ul>
<p><strong>Pricing:</strong></p>
<ul>
<li>Setup: $1,250 (one-time)</li>
<li>Monthly: $499/mo</li>
</ul>
<p>Most clients recover 3-10 bookings/month from missed calls.</p>
<p>Want a 2-minute demo?</p>
<p>Cheers,<br>Abdelhak</p>
</div>
</body>
</html>`;
  return { subject: `Never miss another call - ${business.name}`, html };
}

const businesses = [
  { name: "Manchester Electric", email: 'info@manchesterelectric.co.uk', city: 'Manchester', type: 'Electrician', website: 'manchesterelectric.co.uk' },
  { name: "AMP Electrical Manchester", email: 'info@ampmanchester.co.uk', city: 'Manchester', type: 'Electrician', website: 'ampmanchester.co.uk' },
  { name: "Central Electrical", email: 'info@celectrical.com', city: 'Manchester', type: 'Electrician', website: 'celectrical.com' },
  { name: "Manchester Electrical Services", email: 'enquiries@manchesterelectricalservices.co.uk', city: 'Manchester', type: 'Electrician', website: 'manchesterelectricalservices.co.uk' },
  { name: "Manchester Electrician", email: 'info@manchester-electrician.co.uk', city: 'Manchester', type: 'Electrician', website: 'manchester-electrician.co.uk' },
  { name: "DC Electrical Services", email: 'info@dcelectricalservices.co.uk', city: 'Manchester', type: 'Electrician', website: 'dcelectricalservices.co.uk' },
  { name: "Manchester Domestic Electricians", email: 'info@manchester-domestic-electricians.co.uk', city: 'Manchester', type: 'Electrician', website: 'manchester-domestic-electricians.co.uk' },
  { name: "AES Electricians", email: 'info@aeselectricians.co.uk', city: 'Manchester', type: 'Electrician', website: 'aeselectricians.co.uk' },
];

async function send(b) {
  const { subject, html } = createEmail(b);
  try {
    await transporter.sendMail({ from: '"Abdelhak - AI Solutions" <tirha66@gmail.com>', to: b.email, subject, html });
    console.log(`✅ ${b.name} - ${b.city}`);
    return true;
  } catch (e) { console.log(`❌ ${b.name}`); return false; }
}

async function run() {
  console.log('\n📧 Sending to Manchester Electricians...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
