export interface INoteStorage {
  tags: string[];
  notes: INote[];
}

export interface INote {
  id: number;
  title: string;
  description: string;
  tags: string[];
}
