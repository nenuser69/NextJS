'use client';
import { useState } from 'react';

export default function StudentInfo() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    course: '',
    year: ''
  });
  const [submitted, setSubmitted] = useState<null | typeof form>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Student Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="course">Course</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            type="text"
            id="course"
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="year">Year</label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            type="text"
            id="year"
            name="year"
            value={form.year}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
        >
          Submit
        </button>
      </form>
      {submitted && (
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-indigo-800 mb-2">Submitted Info:</h3>
          <ul className="text-indigo-900 space-y-1">
            <li><span className="font-medium">Name:</span> {submitted.name}</li>
            <li><span className="font-medium">Email:</span> {submitted.email}</li>
            <li><span className="font-medium">Course:</span> {submitted.course}</li>
            <li><span className="font-medium">Year:</span> {submitted.year}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
