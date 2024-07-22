import { TGuestDetails } from "../services/guest/types";

export const guestMocks:TGuestDetails[] = [
  {
    id: '1',
    name: 'John Doe',
    type: 'VIP',
    isCheckedIn: true
  },
  {
    id: '2',
    name: 'Jane Doe',
    type: 'Regular',
    isCheckedIn: false
  },
  {
    id: '3',
    name: 'John Smith',
    type: 'VIP',
    isCheckedIn: false
  },
  {
    id: '4',
    name: 'Jane Smith',
    type: 'Regular',
    isCheckedIn: true
  },
];