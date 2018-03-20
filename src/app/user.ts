export class User{
    //field 
    id_utilisateur:number; 
    nom_utilisateur:string;
    prenom_utilisateur:string;
    email_utilisateur:string;
    acc_token: string;
   //constructor 
   constructor(acc_id:number, acc_nom:string, acc_prenom:string, acc_mail:string, acc_registrationDate:Date) { 
      this.id_utilisateur =  acc_id,
      this.nom_utilisateur = acc_nom,
      this.prenom_utilisateur = acc_prenom,
      this.email_utilisateur = acc_mail

  }

   /*
   getID()
    {
       return this.acc_id;
    }

    getMail()
    {
       return this.acc_mail;
    }

   getNom()
    {
       return this.acc_nom;
    }

   getPrenom() : string
    {
       return this.acc_prenom;
    }

    /*setMail()
    {
        this.acc_mail = ;
    }*/
  
   //function 
   /*disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } */
  }