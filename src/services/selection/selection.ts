/* eslint-disable linebreak-style */
export function setSelection(ref: React.MutableRefObject<HTMLDivElement | undefined>) {
  const range = new Range();

  if (ref.current && ref.current.childNodes) {
    range.setStart(ref.current, ref.current.childNodes.length);
    range.setEnd(ref.current, ref.current.childNodes.length);
    document.getSelection()?.removeAllRanges();
    document.getSelection()?.addRange(range);
  }
}
