export interface INoteStorage {
  tags: string[];
  notes: INote[];
}

export interface INote {
  id: string;
  description: string;
  tags: string[];
}
