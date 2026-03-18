'use client';

import { useState, useRef, useEffect } from 'react';
import Button from './Button';

const responses: { keywords: string[]; response: string }[] = [
  { keywords: ['quantum', 'computing'], response: 'Our quantum research focuses on algorithms for optimization and materials science.' },
  { keywords: ['doctrinal', 'governance', 'ai safety'], response: 'Doctrinal systems ensure AI aligns with human values. Learn more on our Doctry page.' },
  { keywords: ['graphene', 'materials'], response: 'We’ve developed graphene oxide membranes for water filtration – a breakthrough in materials science.' },
  { keywords: ['collaborate', 'partner', 'join'], response: 'Visit our Collaborate page to propose joint research.' },
  { keywords: ['contact', 'email'], response: 'You can reach us at research@frex.org.' },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; fromUser: boolean }[]>([
    { text: 'Hi! Ask me anything about FREX research.', fromUser: false },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, fromUser: true }]);

    // Find response
    let botReply = "I'm not sure about that. Please email research@frex.org for detailed inquiries.";
    for (const r of responses) {
      if (r.keywords.some(k => userMsg.toLowerCase().includes(k))) {
        botReply = r.response;
        break;
      }
    }
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, fromUser: false }]);
    }, 500);

    setInput('');
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-cyan-500 text-black p-4 rounded-full shadow-lg hover:bg-cyan-600 transition z-50"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 bg-gray-900 border border-cyan-500/20 rounded-lg shadow-xl z-50">
      <div className="flex justify-between items-center p-4 border-b border-cyan-500/20">
        <h3 className="font-bold">FREX Assistant</h3>
        <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">✕</button>
      </div>
      <div className="h-96 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.fromUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${msg.fromUser ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-cyan-500/20 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about FREX..."
          className="flex-1 px-3 py-2 bg-black border border-cyan-500/20 rounded focus:outline-none focus:border-cyan-500 text-white"
        />
        <Button variant="primary" size="sm" onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
        }
