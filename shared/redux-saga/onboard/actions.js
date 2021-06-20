export const helloSignRequest = callback => ({
  type: 'HELLO_SIGN_REQUEST',
  callback,
});

export const submitKYC = (payload, resolve) => ({
  type: 'SUBMIT_KYC',
  payload,
  resolve,
});

export const saveShuftiproTemp = payload => ({
  type: 'SAVE_SHUFTI',
  payload,
});

export const updateShuftiproTemp = (payload, resolve) => ({
  type: 'UPDATE_SHUFTI',
  payload,
  resolve,
});

export const submitPublicAddress = (payload, callback, isVerifying) => ({
  type: 'SUBMIT_PUBLIC_ADDRESS',
  callback,
  isVerifying,
  payload,
});

export const verifyFileCasperSigner = (payload, callback) => ({
  type: 'VERIFY_FILE_CASPER_SIGNER',
  callback,
  payload,
});

export const handleViewGuide = () => ({
  type: 'HANDLE_VIEW_GUIDE',
});
