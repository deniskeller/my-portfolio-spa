const URI: string = 'http://localhost:3000';

export const createDataForm = async (obj: any) => {
  try {
    const request = async () => {
      const res = await fetch(`${URI}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data);
      }
    };
    if (obj) {
      request();
    }
  } catch (e) {
    return e;
  }
};
