declare type BloxlinkData = {
    status: "ok";
    account: number;
};
declare type BloxlinkRequestOptions = {
    userId: string;
    guildId?: string;
};
declare function retrieveBloxlinkData(options: BloxlinkRequestOptions): Promise<BloxlinkData>;
export = retrieveBloxlinkData;
