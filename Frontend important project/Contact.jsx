import React, { useState } from 'react';
import { sendContact } from '../api';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [status, setStatus] = useState(null);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});
  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContact(form);
      setStatus('sent');
      setForm({name:'', email:'', message:''});
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <form onSubmit={onSubmit} className="max-w-lg">
        <label className="block mb-2">Name</label>
        <input name="name" value={form.name} onChange={onChange} className="w-full p-2 border rounded mb-4" required />
        <label className="block mb-2">Email</label>
        <input name="email" type="email" value={form.email} onChange={onChange} className="w-full p-2 border rounded mb-4" required />
        <label className="block mb-2">Message</label>
        <textarea name="message" value={form.message} onChange={onChange} className="w-full p-2 border rounded mb-4" required />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        {status === 'sending' && <p className="mt-2">Sending...</p>}
        {status === 'sent' && <p className="mt-2 text-green-600">Message sent — thank you!</p>}
        {status === 'error' && <p className="mt-2 text-red-600">Failed to send. Try again later.</p>}
      </form>
    </section>
  );
}
