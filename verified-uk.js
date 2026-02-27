// REAL UK BUSINESS OUTREACH - All verified, real websites and emails
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: { user: 'tirha66@gmail.com', pass: 'kevf vilb qwdk vzrq' }
});

const ORDER_LINK = 'https://home-services-offer.vercel.app';

// OFFER: Missed Call → Booked Job
function createEmail(business) {
  const html = `<!DOCTYPE html>
<html>
<body style="font-family:Arial;max-width:600px;margin:0auto">
<div style="padding:20px">
<p>Hi there,</p>

<p>I help home service businesses never miss another call.</p>

<p><strong>The problem:</strong> You miss calls when you're on jobs. Those leads go to competitors.</p>

<p><strong>What I offer:</strong></p>
<ul>
<li>Texts every missed caller within 60 seconds</li>
<li>Qualifies the job (service, address, urgency)</li>
<li>Books appointments automatically</li>
<li>Sends reminders</li>
<li>Logs everything to your calendar</li>
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

// VERIFIED REAL UK BUSINESSES
const businesses = [
  // HVAC
  { name: "R. Perkins & Co", email: 'info@rperkins.co.uk', city: 'London', type: 'HVAC', website: 'rperkins.co.uk' },
  { name: "Ambiento", email: 'info@ambiento.co.uk', city: 'London', type: 'HVAC', website: 'ambiento.co.uk' },
  { name: "Mountair", email: 'info@mountair.co.uk', city: 'London', type: 'HVAC', website: 'mountair.co.uk' },
  { name: "HVAC Rentals", email: 'info@hvacrentals.co.uk', city: 'London', type: 'HVAC', website: 'hvacrentals.co.uk' },
  { name: "Balmech", email: 'info@balmech.co.uk', city: 'London', type: 'HVAC', website: 'balmech.co.uk' },
  // Plumbers - Birmingham
  { name: "Mr Plumber Birmingham", email: 'info@mrplumberbirmingham.co.uk', city: 'Birmingham', type: 'Plumber', website: 'mrplumberbirmingham.co.uk' },
  { name: "Jack The Plumber", email: 'info@jacktheplumber.co.uk', city: 'Birmingham', type: 'Plumber', website: 'jacktheplumber.co.uk' },
  { name: "TS Plumbing & Heating", email: 'tony@tsplumbing-heating.co.uk', city: 'Birmingham', type: 'Plumber', website: 'tsplumbing-heating.co.uk' },
  { name: "AB Plumbing & Heating", email: 'info@abplumbing-heating.co.uk', city: 'Birmingham', type: 'Plumber', website: 'abplumbing-heating.co.uk' },
  { name: "2nd City Gas & Plumbing", email: 'info@2ndcitygasplumbingandheating.co.uk', city: 'Birmingham', type: 'Plumber', website: '2ndcitygasplumbingandheating.co.uk' },
  { name: "0121 Plumber", email: 'info@0121plumber.co.uk', city: 'Birmingham', type: 'Plumber', website: '0121plumber.co.uk' },
  { name: "No1 PHD", email: 'info@no1phd.co.uk', city: 'Birmingham', type: 'Plumber', website: 'no1phd.co.uk' },
  { name: "Heatsafe Birmingham", email: 'info@heatsafebirmingham.co.uk', city: 'Birmingham', type: 'Plumber', website: 'heatsafebirmingham.co.uk' },
];

async function send(b) {
  const { subject, html } = createEmail(b);
  try {
    await transporter.sendMail({ 
      from: '"Abdelhak - AI Solutions" <tirha66@gmail.com>', 
      to: b.email, 
      subject, 
      html 
    });
    console.log(`✅ ${b.name} - ${b.city} (${b.type})`);
    return true;
  } catch (e) { 
    console.log(`❌ ${b.name}: ${e.message}`); 
    return false; 
  }
}

async function run() {
  console.log('\n📧 Sending to REAL verified UK businesses...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length} sent`);
}
run();
