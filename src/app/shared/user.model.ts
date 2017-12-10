
export interface User {
  firstName: string;
  lastName: string;
  employeeId: string;
  qcProject: string;
  qcDomain: string;
  imgLink: string;
  rank: number;
  credentials: {
    userName: string;
    password: string;
  }
}
