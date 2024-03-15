export class InfraTeam {
  private static instance: InfraTeam;
  private constructor(){

  }

  public static getInstance(){
    if(!InfraTeam.instance){
    InfraTeam.instance = new InfraTeam();}
    return InfraTeam.instance;

  }

  public gethelp(help: string): void{

    console.log(Helping : ${help});
  }
}
