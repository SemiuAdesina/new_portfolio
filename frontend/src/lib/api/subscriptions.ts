import apiClient from './client';

export interface SubscribeRequest {
  email: string;
  name?: string;
  source?: string;
}

export interface SubscribeResponse {
  message: string;
  subscribed: boolean;
}

export const subscriptionsAPI = {
  /**
   * Subscribe to newsletter
   */
  subscribe: async (data: SubscribeRequest): Promise<SubscribeResponse> => {
    const response = await apiClient.post<SubscribeResponse>(
      '/api/subscribe',
      data
    );
    return response.data;
  },

  /**
   * Unsubscribe from newsletter
   */
  unsubscribe: async (email: string): Promise<{ message: string }> => {
    const response = await apiClient.post<{ message: string }>(
      '/api/unsubscribe',
      { email }
    );
    return response.data;
  },
};

