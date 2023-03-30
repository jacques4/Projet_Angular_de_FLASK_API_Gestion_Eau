import { Utilisateur } from "./utilisateur";
import {Commande} from "./commande"

export class Livrer {

    id: number | undefined;
    quantite: string | undefined;
    date: string | undefined;
    status: boolean | undefined;
    id_utilisateur: number | undefined;
    id_commande: number | undefined;
    commande: Commande| undefined;
    utilisateur: Utilisateur | undefined;
    
}