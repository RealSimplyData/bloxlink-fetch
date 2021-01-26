import fetch from "node-fetch";

type BloxlinkResponse =
  | {
      status: "ok";
      primaryAccount: string;
      matchingAccount?: string;
    }
  | {
      status: "error";
      error: string;
    };

type BloxlinkData = {
  status: "ok";
  account: number;
};

type BloxlinkRequestOptions = {
  userId: string;
  guildId?: string;
};

function retrieveBloxlinkData(
  options: BloxlinkRequestOptions
): Promise<BloxlinkData> {
  return new Promise((resolve, reject) => {
    const url = `https://api.blox.link/v1/user/${options.userId}${
      options.guildId ? `?guildId=${options.guildId}` : ""
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((json: BloxlinkResponse) => {
        if (json.status === "error") return reject(json);
        const userId = json.matchingAccount
          ? Number(json.matchingAccount)
          : Number(json.primaryAccount);
        resolve({ status: "ok", account: userId });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export = retrieveBloxlinkData;
