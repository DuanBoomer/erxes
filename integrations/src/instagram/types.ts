export interface IMessageData {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  text?: string;
  attachments?: Array<{
    type: string;
    payload: { url: string };
  }>;
  message: {
    mid: string;
    text: string;
  };
}

export interface IAttachment {
  type: string;
  url: string;
}

export interface IAttachmentMessage {
  attachment: {
    type: string;
    payload: {
      url: string;
    };
  };
}
