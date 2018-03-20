export class User{
    //field
    private acc_id:number;
    private acc_nom:string;
    private acc_prenom:string;
    private acc_mail:string;
    private acc_registrationDate:Date;
    private acc_token: string;

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

    getRegistrationDate()
    {
        return this.acc_registrationDate;
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
