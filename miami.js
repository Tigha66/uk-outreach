// MIAMI HVAC
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
<p>I help HVAC companies never miss another call.</p>
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
  { name: "Panther AC & Electric", email: 'info@panthermiami.com', city: 'Miami', type: 'HVAC', website: 'panthermiami.com' },
  { name: "Advance Cool Air", email: 'myac@advancecoolair.com', city: 'Miami', type: 'HVAC', website: 'advancecoolair.com' },
  { name: "Direct Air Miami", email: 'info@directac123.com', city: 'Miami', type: 'HVAC', website: 'directac123.com' },
  { name: "RCI Air Conditioning", email: 'info@rci-air.com', city: 'Miami', type: 'HVAC', website: 'rci-air.com' },
  { name: "Weathermakers Air Conditioning", email: 'info@weathermakers.net', city: 'Miami', type: 'HVAC', website: 'weathermakers.net' },
  { name: "Emergency AC Corp", email: 'info@emergencyaccorp.com', city: 'Miami', type: 'HVAC', website: 'emergencyaccorp.com' },
  { name: "24 Hr Air Service", email: 'info@24-hr-air-service.com', city: 'Miami', type: 'HVAC', website: '24-hr-air-service.com' },
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
  console.log('\n📧 Miami HVAC...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
