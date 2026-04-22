export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  category: 'payment' | 'technical' | 'report';
  messages: Array<{
    sender: 'user' | 'admin';
    text: string;
    timestamp: string;
  }>;
  createdAt: string;
}
