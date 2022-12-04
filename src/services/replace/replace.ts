export function replaceTag(data: string) {
  const result = data.split(' ').map((item) => {
    if (item.trim().match(/\B(#[a-zA-Z]+\b)(?!;)/)) {
      return `<b style="color: #3523f3">${item}</b>`;
    }

    return item;
  });
  return result;
}

export function getTags(data: string) {
  const result: string[] = [];
  data.split(' ').forEach((item) => {
    if (item.trim().match(/\B(#[a-zA-Z]+\b)(?!;)/)) {
      if (!result.includes(item)) {
        result.push(item);
      }
    }

    return item;
  });
  return result;
}
