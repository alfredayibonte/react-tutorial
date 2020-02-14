import { BOOKLIST_URL } from '../../layout/Contants';
export const bookList = async () => {
  try {
    const res = await fetch(BOOKLIST_URL);
    return await res.json();
  } catch (err) {
    throw new Error(err);
  }
};
