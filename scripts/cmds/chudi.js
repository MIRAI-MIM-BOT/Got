module.exports.config = {
    name: "chudi",
    version: "1.6",
    role: 2,
    author: "Mesbah Bb'e+ xalman",
    description: "Fast tag Banglish list (1-2 seconds gap)",
    category: "nsfw",
    guide: "{pn} @mention ba message-e reply din",
    coolDown: 10
};

module.exports.onStart = async function({ api, event, args }) {
    const { threadID, messageID, mentions, type, messageReply } = event;

    let targetID, name;

    if (type === "message_reply") {
        targetID = messageReply.senderID;
    } 
    else if (Object.keys(mentions).length > 0) {
        targetID = Object.keys(mentions)[0];
    }

    if (!targetID) {
        return api.sendMessage("Bos, jake gali diben take mention din ba tar message-e reply din! 🫂", threadID, messageID);
    }

    const userInfo = await api.getUserInfo(targetID);
    name = userInfo[targetID].name;

    const arraytag = [{ id: targetID, tag: name }];
    const a = (msg) => api.sendMessage(msg, threadID);

    a("Fast chuda shuru hoilo... tui thak ebar!");

    // Fast Banglish List (1-2 seconds interval)
    setTimeout(() => { a({ body: "Vodai jane chodar moja tor make jigges kor kemon dichilam choda. " + name, mentions: arraytag }) }, 1000);
    setTimeout(() => { a({ body: "Khankir pola tor kochi bon re chudi.. " + name, mentions: arraytag }) }, 2200);
    setTimeout(() => { a({ body: "Madarchod tor ammu pom pom khankir po " + name, mentions: arraytag }) }, 3500);
    setTimeout(() => { a({ body: "Tor ammur kochi vuday kamor dimu maderchod! " + name, mentions: arraytag }) }, 4800);
    setTimeout(() => { a({ body: "Khanki magir pola kotha ko kom kom tor ammu re banamu item bomb. " + name, mentions: arraytag }) }, 6000);
    setTimeout(() => { a({ body: "Depression thekeo tor maire chudaye di magir pola. " + name, mentions: arraytag }) }, 7200);
    setTimeout(() => { a({ body: "Tor ammu re acharer lov dekhiye ami chudi nishirate. " + name, mentions: arraytag }) }, 8500);
    setTimeout(() => { a({ body: "Bandir pola tor kochi boner vuda fak kor thutu diye don dukamu. " + name, mentions: arraytag }) }, 9800);
    setTimeout(() => { a({ body: "Bandi magir pola tor ammu re chudi tor dula bhai er kande fele. " + name, mentions: arraytag }) }, 11000);
    setTimeout(() => { a({ body: "Tor ammur kala vuday amar mal out ebar tor kochi boner pala. " + name, mentions: arraytag }) }, 12500);
    setTimeout(() => { a({ body: "Online e gali baj hoye gechos magir pola emon chuda dimu mone rakhbi. " + name, mentions: arraytag }) }, 14000);
    setTimeout(() => { a({ body: "Batiza shun tor ammu re chudle rag koris na tor boner jama khule de. " + name, mentions: arraytag }) }, 15500);
    setTimeout(() => { a({ body: "Hi madarchod tor besha jater ammu ta re ador kore chudi. " + name, mentions: arraytag }) }, 17000);
    setTimeout(() => { a({ body: "Bostir chele tor bon re musolmani dimu ami tor bap. " + name, mentions: arraytag }) }, 18500);
    setTimeout(() => { a({ body: "Tor mukhe haigga dimu vuski magir pola chup thak. " + name, mentions: arraytag }) }, 20000);
    setTimeout(() => { a({ body: "Tor ammur hoga diya train vora dimu magir pola. " + name, mentions: arraytag }) }, 21500);
    setTimeout(() => { a({ body: "DNA test kora dekhbi amar chuda tei tor jonmo hoyeche. " + name, mentions: arraytag }) }, 23000);
    setTimeout(() => { a({ body: "Kuntar baccha tor boner vuday magur mach chash korum. " + name, mentions: arraytag }) }, 24500);
    setTimeout(() => { a({ body: "Tor mayer vuda bombay morich diya chudamu jhal lagbe khub! " + name, mentions: arraytag }) }, 26000);
    setTimeout(() => { a({ body: "Nodi te niye chudi tor maire tui ki rag korbi? " + name, mentions: arraytag }) }, 27500);
    setTimeout(() => { a({ body: "Tor ammur vuday petrol dhele agun dhoraya dimu khankir pola. " + name, mentions: arraytag }) }, 29000);
    setTimeout(() => { a({ body: "Bazarer poisa churi kore tor maire hotel e pathash magir pola. " + name, mentions: arraytag }) }, 30500);
    setTimeout(() => { a({ body: "Tor boner vuda kete kukur ke diye khawamu shayar pola. " + name, mentions: arraytag }) }, 32000);
    setTimeout(() => { a({ body: "Chira kathi diye tor mar voday khuciye khire banamu. " + name, mentions: arraytag }) }, 33500);
    setTimeout(() => { a({ body: "Tor mare Green Line bus er upor shuyaya chudmu nodi par korar shomoy. " + name, mentions: arraytag }) }, 35000);
    setTimeout(() => { a({ body: "Khankir pola kire tor bap ki ekhon o bazar e naki tor mar voday? " + name, mentions: arraytag }) }, 36500);
    setTimeout(() => { a({ body: "Tor maire launch er cabin e niye chudche amar bondhura. " + name, mentions: arraytag }) }, 38000);
    setTimeout(() => { a({ body: "Besha magir pola kotha kom bol tor mar voday amar nam lekha. " + name, mentions: arraytag }) }, 39500);
    setTimeout(() => { a({ body: "Tor ammu re gorur gari te tule chudmu gramer moddhe. " + name, mentions: arraytag }) }, 41000);
    setTimeout(() => { a({ body: "Maderchod tor bon ke mela te n
