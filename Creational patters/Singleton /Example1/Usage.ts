import {InfraTeam} from './InfraTeam';

const help1 = InfraTeam.getInstance();
help1.gethelp("Require new laptop");

const help2 = InfraTeam.getInstance();
help2.gethelp("Admin credentials required");


console.log(help1===help2);
