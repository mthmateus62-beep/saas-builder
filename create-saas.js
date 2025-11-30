// Simple placeholder API for demonstration.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, template } = req.body;
  // In real use, implement GitHub + Vercel logic server-side.
  return res.status(200).json({ ok: true, message: `Request received to create ${name} with template ${template}` });
}
