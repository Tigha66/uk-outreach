// BOSTON PLUMBERS
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
  { name: "MassPlumbers", email: 'info@massplumbers.com', city: 'Boston', type: 'Plumber', website: 'massplumbers.com' },
  { name: "Boston Plumber", email: 'info@bostonsplumber.com', city: 'Boston', type: 'Plumber', website: 'bostonsplumber.com' },
  { name: "South End Plumbing", email: 'info@south-end-plumbing.com', city: 'Boston', type: 'Plumber', website: 'south-end-plumbing.com' },
  { name: "Winter Home Services", email: 'info@wintershomeservices.com', city: 'Boston', type: 'Plumber', website: 'wintershomeservices.com' },
  { name: "On Call Plumbers", email: 'info@plumbersbostonma.com', city: 'Boston', type: 'Plumber', website: 'plumbersbostonma.com' },
  { name: "Vaughan Plumbing", email: 'info@abostonplumber.com', city: 'Boston', type: 'Plumber', website: 'abostonplumber.com' },
  { name: "Horvitz Plumbing & Heating", email: 'info@horvitzplumbing.com', city: 'Boston', type: 'Plumber', website: 'horvitzplumbing.com' },
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
  console.log('\n📧 Boston Plumbers...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
