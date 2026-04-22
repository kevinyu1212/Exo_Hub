import apiClient from './apiClient';

export const supportApi = {
  createTicket: (ticketData) => apiClient.post('/support/tickets', ticketData),
  getTickets: (status) => apiClient.get(\/support/tickets?status=\\),
  replyToTicket: (ticketId, message) => apiClient.patch(\/support/tickets/\\, { message }),
  getFaqs: () => apiClient.get('/support/faqs')
};
