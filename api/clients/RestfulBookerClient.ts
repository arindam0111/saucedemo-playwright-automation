import { APIRequestContext } from '@playwright/test';
import { Booking } from '../types/booking';

export class RestfulBookerClient {
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createToken(username: string, password: string) {
    return this.request.post('/auth', {
      data: {
        username,
        password,
      },
    });
  }

  async getBooking(bookingId: number) {
    return this.request.get(`/booking/${bookingId}`);
  }

  async createBooking(booking: Booking) {
    return this.request.post('/booking', {
      data: booking,
    });
  }

  async updateBooking(bookingId: number, booking: Booking, token: string) {
    return this.request.put(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
      data: booking,
    });
  }

  async deleteBooking(bookingId: number, token: string) {
    return this.request.delete(`/booking/${bookingId}`, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
  }
}
