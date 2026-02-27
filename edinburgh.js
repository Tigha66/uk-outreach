// EDINBURGH PLUMBERS
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
  { name: "Cummings Plumbing", email: 'info@cummingsplumbing.co.uk', city: 'Edinburgh', type: 'Plumber', website: 'cummingsplumbing.co.uk' },
  { name: "Albion Plumbing", email: 'info@albionplumbing.co.uk', city: 'Edinburgh', type: 'Plumber', website: 'albionplumbing.co.uk' },
  { name: "William's Plumbing Edinburgh", email: 'info@williamsplumbingedinburgh.co.uk', city: 'Edinburgh', type: 'Plumber', website: 'williamsplumbingedinburgh.co.uk' },
  { name: "Alexander Ritchie Plumbers", email: 'info@alexanderritchie.co.uk', city: 'Edinburgh', type: 'Plumber', website: 'alexanderritchie.co.uk' },
  { name: "Scott Findlay Plumbing", email: 'info@scottfindlay.co.uk', city: 'Edinburgh', type: 'Plumber', website: 'scottfindlay.co.uk' },
  { name: "Able Girl Plumbing", email: 'info@ablegirlplumbing.co.uk', city: 'Edinburgh', type: 'Plumber', website: 'ablegirlplumbing.co.uk' },
  { name: "Celsius Plumbers", email: 'info@celsiusplumbers.com', city: 'Edinburgh', type: 'Plumber', website: 'celsiusplumbers.com' },
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
  console.log('\n📧 Edinburgh Plumbers...\n');
  let sent = 0;
  for (const b of businesses) {
    if (await send(b)) sent++;
    await new Promise(r => setTimeout(r, 3000));
  }
  console.log(`\n✅ DONE: ${sent}/${businesses.length}`);
}
run();
