export interface Defect {
  id: number;
  severity: string;
  description: string;
  assignedId: number;
  award: string;
  solvingId: number;
  eta: string;
}
