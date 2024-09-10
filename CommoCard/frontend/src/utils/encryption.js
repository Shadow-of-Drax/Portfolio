import * as openpgp from "openpgp";

export const encryptMessage = async (message, publicKey) => {
  const publicKeyObj = await openpgp.readKey({ armoredKey: publicKey });
  const encryptedMessage = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: publicKeyObj,
  });
  return encryptedMessage;
};

export const decryptMessage = async (
  encryptedMessage,
  privateKey,
  passphrase
) => {
  const privateKeyObj = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKey }),
    passphrase,
  });
  const message = await openpgp.readMessage({
    armoredMessage: encryptedMessage,
  });
  const { data: decryptedMessage } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKeyObj,
  });
  return decryptedMessage;
};
