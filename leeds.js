// LEEDS ELECTRICIANS
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
<p>I help tradespeople never miss another call.</p>
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
  { name: "Martin Day Electrician", email: 'info@martindayelectrician.co.uk', city: 'Leeds', type: 'Electrician', website: 'martindayelectrician.co.uk' },
  { name: "CRE Electricians", email: 'info@cre-electricians.co.uk', city: 'Leeds', type: 'Electrician', website: 'cre-electricians.co.uk' },
  { name: "Electron Ltd", email: 'info@electronlimited.co.uk', city: 'Leeds', type: 'Electrician', website: 'electronlimited.co.uk' },
  { name: "ElectricalServ", email: 'office@electricalserv.uk', city: 'Leeds', type: 'Electrician', website: 'electricalserv.uk' },
  { name: "R Pearson Electrical", email: 'info@rpearsonelectrical.co.uk', city: 'Leeds', type: 'Electrician', website: 'rpearsonelectrical.co.uk' },
  { name: "SS Electrical Leeds", email: 'info@sselectricalleeds.co.uk', city: 'Leeds', type: 'Electrician', website: 'sselectricalleeds.co.uk' },
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
  console.log('\n📧 Leeds Electricians...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
