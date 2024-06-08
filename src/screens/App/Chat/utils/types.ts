export enum ERole {
  user = 'user',
  gpt = 'gpt',
}

export type TMessage = {
  message: string;
  role: ERole;
};

export type TMessages = TMessage[] | [];

export type TChat = {
  id: string;
  title: string;
  messages: TMessages;
};
