// ATLANTA PLUMBERS - USA
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
<p>I help plumbers never miss another call.</p>
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
  { name: "Superior Plumbing", email: 'customerservice@superiorplumbing.com', city: 'Atlanta', type: 'Plumber', website: 'superiorplumbing.com' },
  { name: "Plumb Works Inc", email: 'info@plumbworksinc.com', city: 'Atlanta', type: 'Plumber', website: 'plumbworksinc.com' },
  { name: "The Original Plumber", email: 'office@theoriginalplumber.com', city: 'Atlanta', type: 'Plumber', website: 'theoriginalplumber.com' },
  { name: "Head's Plumbing", email: 'info@headsplumbing.com', city: 'Atlanta', type: 'Plumber', website: 'headsplumbing.com' },
  { name: "Allgood", email: 'info@callallgood.com', city: 'Atlanta', type: 'Plumber', website: 'callallgood.com' },
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
  console.log('\n📧 Atlanta Plumbers...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
