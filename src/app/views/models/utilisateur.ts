import { Localite } from "./localite";
import { Personne } from "./personne";
import { Profile } from "./profile";

export class Utilisateur
{
id:number | undefined;
matricule: string | undefined;
nom: string | undefined;
prenom: string | undefined;
email: string | undefined;
tel: string | undefined;
login: string | undefined;
mdp: string | undefined;
status:boolean | undefined;
adresse: string | undefined;
id_profile: number | undefined;
profile: Profile | undefined;
localite:Localite | undefined;
id_localite:number | undefined;
personne:Personne | undefined;
id_personne:number | undefined;
id_utilisateur:number | undefined;
utilisateurs:Utilisateur | undefined


}