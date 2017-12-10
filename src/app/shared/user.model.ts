
export interface User {
  firstName: string;
  lastName: string;
  employeeId: number;
  qcProject: string;
  qcDomain: string;
  imgLink: string;
  rank: number;
  credentials: {
    userName: string;
    password: string;
  }
}
