import { put, takeLatest, all } from 'redux-saga/effects';
import qs from 'qs';
import { get, post, put as putApi } from '../../core/saga-api';
import { saveApiResponseError } from '../api-controller/actions';
import {
  uploadLetterSuccess,
  uploadLetterError,
  getOwnerNodesSuccess,
  getOwnerNodesError,
} from './actions';

export function* helloSignRequest({ callback }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const res = yield post(['users/hellosign-request'], null, { headers });
    callback(res);
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* bypassHelloSignRequest({ callback }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = yield post(['users/verify-bypass'], null, { headers });
    callback(res);
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* bypassOnboardStep({ payload, callback }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const res = yield post(['users/verify-bypass'], payload, { headers });
    callback(res);
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* submitPublicAddress({ payload, callback, isVerifying }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const params = qs.stringify({
      public_address: payload.pubAddress,
    });
    yield post(['users/submit-public-address'], params, { headers });
    callback();
    isVerifying();
  } catch (error) {
    yield put(saveApiResponseError(error));
    isVerifying();
  }
}

export function* verifyFileCasperSigner({ payload, callback }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const formData = new FormData();
    formData.append('file', payload.newFile);
    yield post(['users/verify-file-casper-signer'], formData, { headers });
    callback();
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* handleViewGuide() {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    yield get(['users/message-content'], { headers });
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* submitKYC({ payload, resolve }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    yield post(['users/submit-kyc'], payload, { headers });
    resolve();
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* saveShuftiproTemp({ payload }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    yield post(['users/shuftipro-temp'], payload, { headers });
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* updateShuftiproTemp({ payload, resolve }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    yield putApi(['users/shuftipro-temp'], payload, { headers });
    resolve();
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* updateTypeOwnerNode({ payload, resolve }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    yield putApi(['users/type-owner-node'], payload, { headers });
    resolve();
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* postOwnerNodes({ payload, resolve }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    yield post(['users/owner-node'], payload, { headers });
    resolve();
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* uploadLetter({ payload, callback }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const formData = new FormData();
    formData.append('file', payload.newFile);
    const res = yield post(['users/upload-letter'], formData, { headers });
    yield put(uploadLetterSuccess(res.data));
    callback();
  } catch (error) {
    yield put(uploadLetterError(error));
    yield put(saveApiResponseError(error));
  }
}

export function* getOwnerNodes() {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const res = yield get(['users/owner-node'], { headers });
    yield put(getOwnerNodesSuccess(res.data));
  } catch (error) {
    yield put(getOwnerNodesError(error));
    yield put(saveApiResponseError(error));
  }
}

export function* resendEmailOwnerNodes({ payload }) {
  try {
    const token = localStorage.getItem('ACCESS-TOKEN');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    yield post(['users/resend-invite-owner'], payload, { headers });
  } catch (error) {
    yield put(saveApiResponseError(error));
  }
}

export function* watchOnboard() {
  yield all([takeLatest('HELLO_SIGN_REQUEST', helloSignRequest)]);
  yield all([takeLatest('BYPASS_HELLO_SIGN_REQUEST', bypassHelloSignRequest)]);
  yield all([takeLatest('BYPASS_ONBOARD_STEP', bypassOnboardStep)]);
  yield all([takeLatest('SUBMIT_PUBLIC_ADDRESS', submitPublicAddress)]);
  yield all([takeLatest('VERIFY_FILE_CASPER_SIGNER', verifyFileCasperSigner)]);
  yield all([takeLatest('HANDLE_VIEW_GUIDE', handleViewGuide)]);
  yield all([takeLatest('SUBMIT_KYC', submitKYC)]);
  yield all([takeLatest('SAVE_SHUFTI', saveShuftiproTemp)]);
  yield all([takeLatest('UPDATE_SHUFTI', updateShuftiproTemp)]);
  yield all([takeLatest('UPDATE_TYPE_OWNER_NODE', updateTypeOwnerNode)]);
  yield all([takeLatest('POST_OWNER_NODES', postOwnerNodes)]);
  yield all([takeLatest('UPLOAD_LETTER', uploadLetter)]);
  yield all([takeLatest('GET_OWNER_NODES', getOwnerNodes)]);
  yield all([takeLatest('RESEND_EMAIL_OWNER_NODES', resendEmailOwnerNodes)]);
}
