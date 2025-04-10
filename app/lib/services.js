import axios from "axios";

export async function filmsNowShowing() {
  const res = await fetch(
    "https://api-gate2.movieglu.com/filmsNowShowing/?n=20",
    {
      headers: {
        "api-version": "v201",
        "territory": "IN",
        "x-api-key": "D3T1y46VQX2A8uMt60okA8CKFsb8f8wR9nJpR8sC",
        "client": "PORT_2",
        "authorization": "Basic UE9SVF8yOklaOVQyUk5YRjY1aQ==",
        "content-type":"application/json",
        "device-datetime":new Date().toISOString()
      },
    }
  );
  const data = await res.json();
  return data
}
export async function playMovie(tmdbId){
  const res =  await fetch(`https://vidlink.pro/movie/${tmdbId}`)
  const data = await res.json()

  return data
}

