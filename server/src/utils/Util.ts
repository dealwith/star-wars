import { Response } from 'express';
import { TUtilStatus } from './interfaces/UtilStatus';

class Util {
  statusCode: null | number;
  type: null | TUtilStatus;
  data: null | unknown;
  message: null | string;

  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode: number, message: string, data?: unknown) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';
  }

  setError(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.type = 'error';
  }

  send(res: Response) {
    const result = {
      status: this.type,
      message: this.message,
      data: this.data,
    };

    if (this.type === 'success') {
      return res.status(this.statusCode as number).json(result);
    }

    return res.status(this.statusCode as number).json({
      status: this.type,
      message: this.message,
    });
  }
}

export default Util;
