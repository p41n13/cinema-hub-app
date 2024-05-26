export const API_URL = 'http://localhost:3000/';

export const fetchData = async (url: string) => {
  try {
    const fullUrl = `${API_URL}${url}`;

    const response = await fetch(fullUrl, {
      next: {
        revalidate: 1,
      },
    });

    return response.json();
  } catch (error) {
    console.error('Custom Error: ', error);
  }
};
