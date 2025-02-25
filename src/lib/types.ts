export interface Paste {
  id: string;
  content: string;
  createdAt: Date;
  validTill: Date;
}

export enum DataBaseKeys {
  PASTES = "pastes",
}
