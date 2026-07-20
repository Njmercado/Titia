import { Message } from "@/interfaces/general.interface";
import { User, Bot } from "lucide-react";

export default function MessageBody(message: Message, icon: React.ReactNode, configs: {
  wrapper: string,
  icon: string,
  message: string
}) {
  return (
    <div key={message.id} className={`flex gap-3 ${configs.wrapper}`}>
      <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 ${configs.icon}`}>
        {icon}
      </div>
      <div className={`border-2 border-black p-4 text-sm leading-relaxed shadow-brutal-sm max-w-[85%] whitespace-pre-wrap bg-brutal-cream rounded-b-xl ${configs.message}`}>
        {message.text}
      </div>
    </div>
  );
}

export function UserMessageBody(message: Message) {
  return MessageBody(message, <User size={16} />, {
    wrapper: 'flex-row-reverse',
    icon: 'bg-black text-white',
    message: 'bg-brutal-cream rounded-tl-xl'
  });
}

export function BotMessageBody(message: Message) {
  return MessageBody(message, <Bot size={16} />, {
    wrapper: '',
    icon: 'bg-brutal-amber text-black',
    message: 'bg-white rounded-tr-xl'
  });
}
