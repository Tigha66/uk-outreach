// SEATTLE PLUMBERS
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
<li>Qualifies the job</li>
<li>Books appointments automatically</li>
</ul>
<p><strong>Pricing:</strong> $1,250 setup + $499/mo</p>
<p>Want a demo?</p>
<p>Cheers,<br>Abdelhak</p>
</div>
</body>
</html>`;
  return { subject: `Never miss another call - ${business.name}`, html };
}

const businesses = [
  { name: "Bees Plumbing & Heating", email: 'info@beesplumbingandheating.com', city: 'Seattle', type: 'Plumber', website: 'beesplumbingandheating.com' },
  { name: "Best Plumbing Seattle", email: 'info@bestplumbing.com', city: 'Seattle', type: 'Plumber', website: 'bestplumbing.com' },
  { name: "Jafco Plumbing", email: 'info@jafcocompany.com', city: 'Seattle', type: 'Plumber', website: 'jafcocompany.com' },
  { name: "Beacon Plumbing", email: 'info@beaconplumbing.net', city: 'Seattle', type: 'Plumber', website: 'beaconplumbing.net' },
  { name: "2 Sons Plumbing", email: 'info@2sonsplumbing.com', city: 'Seattle', type: 'Plumber', website: '2sonsplumbing.com' },
  { name: "Simple Plumber", email: 'simpleplumberservice@gmail.com', city: 'Seattle', type: 'Plumber', website: 'simpleplumber.biz' },
  { name: "Plumbing Seattle WA", email: 'info@plumbingseattlewa.com', city: 'Seattle', type: 'Plumber', website: 'plumbingseattlewa.com' },
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
  console.log('\n📧 Seattle Plumbers...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
