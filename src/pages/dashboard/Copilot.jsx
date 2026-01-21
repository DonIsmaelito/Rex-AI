import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const Copilot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi John! I\'m your Gana AI Copilot. How can I assist you with your insurance today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: 'I can help with that. Let me access your policy details...' 
      }]);
    }, 1000);
  };

  return (
    <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
      <header className="dashboard-header" style={{ marginBottom: '1rem' }}>
        <h1 className="header-title">AI Co-pilot</h1>
      </header>
      
      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg) => (
            <div key={msg.id} style={{ 
              display: 'flex', 
              gap: '0.8rem', 
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%'
            }}>
              {msg.sender === 'bot' && (
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                  <Bot size={18} />
                </div>
              )}
              <div style={{ 
                background: msg.sender === 'user' ? 'var(--color-primary)' : '#F3F4F6',
                color: msg.sender === 'user' ? 'white' : 'var(--color-text)',
                padding: '1rem',
                borderRadius: '16px',
                borderTopLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                borderTopRightRadius: msg.sender === 'user' ? '4px' : '16px'
              }}>
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                 <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4B5563', flexShrink: 0 }}>
                  <User size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your coverage, claims, or quotes..."
            style={{ 
              flex: 1, 
              padding: '0.8rem 1rem', 
              borderRadius: '50px', 
              border: '1px solid #E5E7EB',
              outline: 'none'
            }}
          />
          <button type="submit" style={{ 
            background: 'var(--color-primary)', 
            color: 'white', 
            width: 48, 
            height: 48, 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Copilot;
