import { ReactNode } from "react";

export interface IGeneral {
  value?: string | number | boolean | ReactNode;
  className?: string;
}

export class Message {
  private _id: string;
  private _role: 'user' | 'bot';
  private _text: string;
  private _date: number;

  constructor(id: string, role: 'user' | 'bot', text: string) {
    this._id = id;
    this._role = role;
    this._text = text;
    this._date = Date.now();
  }

  get id() {
    return this._id;
  }

  get role() {
    return this._role;
  }

  get text() {
    return this._text;
  }

  get date() {
    return this._date;
  }
}
