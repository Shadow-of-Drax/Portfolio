import * as openpgp from "openpgp";

export async function encryptMessage(message, publicKeyArmored) {
  const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });
  const encryptedMessage = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: publicKey,
  });
  return encryptedMessage;
}

export async function decryptMessage(
  encryptedMessage,
  privateKeyArmored,
  passphrase
) {
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
    passphrase,
  });
  const message = await openpgp.readMessage({
    armoredMessage: encryptedMessage,
  });
  const { data: decryptedMessage } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKey,
  });
  return decryptedMessage;
}
