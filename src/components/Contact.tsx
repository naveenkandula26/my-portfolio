import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface ContactProps {
  user: any;
}

const Contact = ({ user }: ContactProps) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        ...form,
        userId: user?.uid || 'anonymous',
        timestamp: new Date(),
      });
      setForm({ name: '', email: '', message: '' });
      setSubmitted(true);
      setError(null);
    } catch (err) {
      setError('Failed to send message');
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="min-h-screen bg-dark-gray text-white p-8 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p>Your message has been sent successfully.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
          >
            Send Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen bg-dark-gray text-white p-8">
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white h-32"
          />
          <button
            onClick={handleSubmit}
            className="bg-orange-accent text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
