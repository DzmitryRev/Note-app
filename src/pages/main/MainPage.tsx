import Note from '../../components/note/Note';
import { INote } from '../../models/NoteModel';

interface IMainPageProps {
  notes: INote[];
  removeNote: (noteId: string) => void;
}

export default function MainPage({ notes, removeNote }: IMainPageProps) {
  return (
    <div>
      {notes
        && notes.map((item) => (
          <Note
            key={item.id}
            description={item.description}
            id={item.id}
            tags={item.tags}
            removeNote={(noteId: string) => {
              removeNote(noteId);
            }}
          />
        ))}
    </div>
  );
}
