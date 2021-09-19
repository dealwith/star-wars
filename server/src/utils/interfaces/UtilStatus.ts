enum EUtilStatus {
  success = 'success',
  error = 'error',
}

export type TUtilStatus = keyof typeof EUtilStatus;
