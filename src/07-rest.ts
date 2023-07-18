import {User,ROLES} from "./01-enum"

const currentUser: User = {
  username: 'Alejo',
  role:ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

console.log(checkAdminRole());

export const checkRole = (role1: string,role2:string,role3:string) => {
  if(currentUser.role === ROLES.ADMIN) {
    return true;
  }
  if(currentUser.role === ROLES.CUSTOMER) {
    return true;
  }
  if(currentUser.role === ROLES.SELLER) {
    return true;
  }
  return false;
}

console.log(checkRole('admin',ROLES.CUSTOMER,ROLES.SELLER));

export const checkRoleV2 = (roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log(checkRoleV2(['admin',ROLES.CUSTOMER,"asesor"]));
console.log(checkRoleV2(["asesor"]));

export const checkRoleV3 = (...roles: string[]) => { //rest parameter
  if(roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

console.log(checkRoleV3('admin',ROLES.CUSTOMER,"asesor"));
console.log(checkRoleV3("asesor"));
