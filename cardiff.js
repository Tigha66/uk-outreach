// CARDIFF ELECTRICIANS
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
  { name: "Phillips Services", email: 'info@phillips-services.co.uk', city: 'Cardiff', type: 'Electrician', website: 'phillips-services.co.uk' },
  { name: "Next Generation Electrical", email: 'info@nextgenerationelectrical.co.uk', city: 'Cardiff', type: 'Electrician', website: 'nextgenerationelectrical.co.uk' },
  { name: "Electrx", email: 'info@electrx.uk', city: 'Cardiff', type: 'Electrician', website: 'electrx.uk' },
  { name: "GJPWired", email: 'info@gjpwired.co.uk', city: 'Cardiff', type: 'Electrician', website: 'gjpwired.co.uk' },
  { name: "Coad Electrical", email: 'cpelectricalenquiries@hotmail.com', city: 'Cardiff', type: 'Electrician', website: 'coadelectrical.co.uk' },
  { name: "Electrician Cardiff", email: 'info@electriciancardiff.com', city: 'Cardiff', type: 'Electrician', website: 'electriciancardiff.com' },
  { name: "TJP Electrical", email: 'enquiries@tjpelectrical.co.uk', city: 'Cardiff', type: 'Electrician', website: 'tjpelectrical.co.uk' },
  { name: "CAG Electrical", email: 'info@cagelectricalltd.com', city: 'Cardiff', type: 'Electrician', website: 'cagelectricalltd.com' },
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
  console.log('\n📧 Cardiff Electricians...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
