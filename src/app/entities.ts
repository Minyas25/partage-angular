export interface Person {
    id?:number;
    name:string;
    adress:string;
    password:string;
}

export interface Annonce {
    id?:number;
    title:string;
    description:string;
    date:Date;
    item:string;
    id_person:Person[];
    id_emprunt: Emprunt[];
}

export interface Emprunt {
    id:number;
    message:Text;
    date:Date;
    status:string;
    id_person:Person[];
    id_annonce:Annonce[];

}

