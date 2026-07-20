'use client'

import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { fetchRagAnswer } from '@/utils/ragApi';
import { Message } from '@/interfaces/general.interface';
import { UserMessageBody, BotMessageBody } from '@/components/MessageBody';

export default function Chat() {

  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    new Message(
      'msg-0',
      'bot',
      `
      **Hello!** I am the portfolio's RAG assistant. I am connected to the knowledge base on the left.
      Ask me a question about Nino's experience, for example about **"NLP"**, **"EdTech"**, or his **"education"**, and you'll see how the system retrieves relevant information in real time.
      `
    )
  ]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setQuery(text);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage: Message = new Message(`msg-${Date.now()}`, 'user', query);
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    try {
      const answer = await fetchRagAnswer(userMessage.text as string);
      setMessages(prev => [...prev, new Message(`msg-${Date.now()}`, 'bot', answer)]);
    } catch (error) {
      setMessages(prev => [...prev, new Message(`msg-${Date.now()}`, 'bot', "Error: Could not retrieve an answer.")]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:flex-1 flex flex-col bg-white border-[3px] border-black shadow-brutal-offset overflow-hidden h-[450px] lg:h-[600px]">
      {/* Chat Header */}
      <div className="bg-brutal-cream border-b-[3px] border-black p-4 flex items-center gap-3">
        <Bot size={28} />
        <div>
          <h3 className="font-headings font-bold text-lg leading-tight">Titia Assistant (RAG)</h3>
          <p className="text-xs text-gray-500 font-bold uppercase">Status: Connected</p>
        </div>
      </div>

      {/* Chat Body */}
      <div ref={chatContainerRef} className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto bg-gray-50">
        {
          messages.map((msg) => msg.role == 'user' ? UserMessageBody(msg) : BotMessageBody(msg))
        }

        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-brutal-amber border-2 border-black flex items-center justify-center shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-white border-2 border-black p-4 text-sm leading-relaxed shadow-brutal-sm rounded-tr-xl rounded-b-xl max-w-[85%] flex items-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-white border-t-[3px] border-black">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <div className="relative flex-1">
            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              disabled={isLoading}
              placeholder="Ask me about Nino's experience in databases or NLP..."
              className="w-full border-2 border-black p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-brutal-amber text-sm font-medium disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="bg-black text-white px-4 flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>);
}
