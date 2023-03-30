import { TypeClient } from "./typeclient";
import { Utilisateur } from "./utilisateur";

export class Client
{
  id: number | undefined ;
  nom: string | undefined ;
  prenom: string | undefined;
  email: string | undefined ;
  tel: string | undefined ;
  adresse: string | undefined;
  nif: string | undefined;
  date: Date | undefined;
  numrccm: string | undefined;
  typeclient: TypeClient | undefined;
  id_typeclient: number | undefined;
  utilisateur: Utilisateur | undefined;
  id_utilisateur: number | undefined;

}