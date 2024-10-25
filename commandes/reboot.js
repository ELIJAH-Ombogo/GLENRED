const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"☔"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or GLEN TEACH");
  }

  const {exec}=require("child_process")

    repondre("GLEN-MD  bot Restarting ⏳");

  exec("pm2 restart all");
  

  



})
