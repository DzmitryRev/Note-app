export interface INoteStorage {
  tags: string[];
  notes: INote[];
}

export interface INote {
  id: number;
  description: string;
  tags: string[];
}
