"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_fetch_1 = __importDefault(require("node-fetch"));
function retrieveBloxlinkData(options) {
    return new Promise((resolve, reject) => {
        const url = `https://api.blox.link/v1/user/${options.userId}${options.guildId ? `?guildId=${options.guildId}` : ""}`;
        node_fetch_1.default(url)
            .then((response) => response.json())
            .then((json) => {
            if (json.status === "error")
                return reject(json);
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
module.exports = retrieveBloxlinkData;
