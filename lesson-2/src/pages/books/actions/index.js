export const bookList = async () => {
  try {
    const res = await fetch('http://www.mocky.io/v2/5e3d13222d00005100d95a98');
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
};
