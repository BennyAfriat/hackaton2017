import { Item, User, Defect } from './shared';

export interface AppStore {
  items: Item[],
  users: User[],
  defects: Defect[],
  defects2: Defect[]
}
