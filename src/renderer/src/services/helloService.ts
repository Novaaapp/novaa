/* eslint-disable prettier/prettier */
export default async function getMessage(): Promise<string> {
    try {
      const res = await fetch('http://localhost:3001/api/hello');
      const data = await res.json();
      return data.user;
    } catch (error) {
      console.error('Erreur:', error);
      return 'Erreur lors de la récupération du message';
    }
  }
