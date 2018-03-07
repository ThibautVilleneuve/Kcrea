export class User{
    //field 
    private acc_id:number; 
    private acc_nom:string;
    private acc_prenom:string;
    private acc_mail:string;
    private acc_registrationDate:Date;
    private acc_token: string;
   //constructor 
   constructor(acc_id:number, acc_nom:string, acc_prenom:string, acc_mail:string, acc_registrationDate:Date) { 
      this.acc_id =  acc_id,
      this.acc_nom = acc_nom,
      this.acc_prenom = acc_prenom,
      this.acc_mail = acc_mail,
      this.acc_registrationDate = acc_registrationDate;
   }  

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
       return this.acc_id;
    }

   getPrenom()
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