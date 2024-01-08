
export const fetchData = async (url: string) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  