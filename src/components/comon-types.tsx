export enum Authors {
  USER = 'USER',
  BOT = 'BOT',
}
export interface Message {
  author: string;
  text: string;
}
export interface Messages {
  [key: string]: Message[];
}

export interface Chat {
  id: string;
  name: string;
}
