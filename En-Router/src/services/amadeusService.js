const Base_Url = "https://test.api.amadeus.com/";

let accessToken = null;

  export const getAccessToken = async () => {
    const response = await fetch(`${Base_Url}v1/security/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${btoa(`${process.env.REACT_APP_AMADEUS_API_KEY}:${process.env.REACT_APP_AMADEUS_API_SECRET}`)}`
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id :import.meta.env.VITE_AMADEUS_API_KEY,
        client_secret :import.meta.env.VITE_AMADEUS_API_SECRET  
      })
    });

    const data = await response.json();
    accessToken = data.access_token;
  };