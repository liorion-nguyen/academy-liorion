export interface BoxMessage {
    messages: Message[];
    author: Contact;
    audiences: Contact;
}

export interface Message {
    id?: string;
    content?: string,
    createAt?: string,
    emoji?: Emotional[],
    creator?: boolean,
}

interface Contact {
    id: string,
    name: string,
    avt: string,
}

interface Emotional {
    creator?: boolean,
    type: string,
}