// DENVER HVAC
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
  { name: "Denver's Best Heating & AC", email: 'info@denversbestheatingandacrepair.com', city: 'Denver', type: 'HVAC', website: 'denversbestheatingandacrepair.com' },
  { name: "Mountain Breeze Heating & Air", email: 'info@mountainbreezeheatingandair.com', city: 'Denver', type: 'HVAC', website: 'mountainbreezeheatingandair.com' },
  { name: "Best Denver HVAC", email: 'info@bestdenverhvac.com', city: 'Denver', type: 'HVAC', website: 'bestdenverhvac.com' },
  { name: "Valiant Air Solutions", email: 'info@valiantairsolutions.com', city: 'Denver', type: 'HVAC', website: 'valiantairsolutions.com' },
  { name: "Rabbit Heating & Air", email: 'info@rabbitheating.com', city: 'Denver', type: 'HVAC', website: 'rabbitheating.com' },
  { name: "Major Heating & Cooling", email: 'info@majorheating.com', city: 'Denver', type: 'HVAC', website: 'majorheating.com' },
  { name: "Roots HVAC", email: 'info@rootshvac.com', city: 'Denver', type: 'HVAC', website: 'rootshvac.com' },
  { name: "UniColorado", email: 'info@unicolorado.com', city: 'Denver', type: 'HVAC', website: 'unicolorado.com' },
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
  console.log('\n📧 Denver HVAC...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
