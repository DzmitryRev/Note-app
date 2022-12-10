export function replaceTag(data: string): string {
  return data.replace(/#\S+/gi, '<b style="color: #3523f3">$&</b>');
}
export function getTags(data: string) {
  return data.match(/#\S+/gi) || [];
}

export function getCaretPosition(contentEditable: Node): number {
  let position = 0;
  const selection = window.getSelection();
  if (selection && selection.rangeCount) {
    const range = selection.getRangeAt(0);
    const clone = range.cloneRange();
    clone.selectNode(contentEditable);
    clone.setEnd(range.endContainer, range.endOffset);
    position = clone.toString().length;
  }
  return position;
}

export function setInnerHTML(el: HTMLElement, value: string) {
  const node = el;
  node.innerHTML = value;
}

export function replaceCaret(node: Node, offset: number) {
  let offsetIndex = offset;
  if (node.childNodes) {
    for (let i = 0; i <= node.childNodes.length; i++) {
      if (node.childNodes[i]) {
        if ((node.childNodes[i].textContent?.length || 0) < offsetIndex) {
          offsetIndex -= node?.childNodes[i]?.textContent?.length || 0;
        } else {
          let currentNode: Node;
          if (node.childNodes[i].nodeType === 3) {
            currentNode = node.childNodes[i];
          } else {
            currentNode = node.childNodes[i].childNodes[0];
          }
          const range = new Range();
          range.setStart(currentNode, offsetIndex);
          range.setEnd(currentNode, offsetIndex);
          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
          return;
        }
      }
    }
  }
}
