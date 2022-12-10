import {
  RefObject, useEffect, useRef, useState,
} from 'react';
import {
  getCaretPosition, replaceCaret, replaceTag, setInnerHTML,
} from '../../services/editor/editor';
import './editor.scss';

interface IEditorProps {
  value: string
  setValue: (newValue: string) => void;
}

export default function Editor({ value, setValue }: IEditorProps) {
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const contentEditable = useRef<HTMLDivElement>();

  useEffect(() => {
    if (contentEditable.current) {
      setInnerHTML(contentEditable.current, replaceTag(value));
    }
  }, [value]);

  useEffect(() => {
    if (contentEditable.current) {
      replaceCaret(contentEditable.current, caretPosition);
    }
  }, [caretPosition]);

  return (
    <div
      className="editor"
      ref={contentEditable as RefObject<HTMLDivElement>}
      contentEditable
      onInput={(e) => {
        setValue(e.currentTarget.innerText);
        if (contentEditable.current) {
          setCaretPosition(getCaretPosition(contentEditable.current));
        }
      }}
    />
  );
}
