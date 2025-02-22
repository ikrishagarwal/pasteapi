export interface Paste {
  id: string;
  content: string;
  createdAt: Date;
}

export enum DataBaseKeys {
  PASTES = "pastes",
}
