
// 数据转换: 转换为数组
export function toArr(data) {
  let obj = {};
  for (const key in data) {
    if (key === 'properties') {
      const element = data[key];
      obj.children = Object.entries(element).map(v => {
        toArr(v[1]);
        return { name: v[0], ...v[1] };
      })
    } else {
      obj[key] = data[key];
    }
  }
  return obj;
};

// 转换数据: 双向转换
export function transformer(data, type = 'array') {
  const transformData = toArr(data);
  return transformData;
};
