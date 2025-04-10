export async function filmDetail(filmId) {
    const res = await fetch(
        `https://api-gate2.movieglu.com/filmDetails/?film_id=${filmId}`,
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
        })

        const data = await res.json()
        return data;
}
export async function filmCommingSoon() {
  const res = await fetch(
    `https://api-gate2.movieglu.com/filmsComingSoon/?n=15`,
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
    })

    const data = await res.json()
    return data;
}

export async function cinemasNearby({lat=-22.0,lng=14.0}) {
  
  
 
  const res = await fetch(
    `https://api-gate2.movieglu.com/cinemasNearby/?n=5`,
    {
      headers: {
        "api-version": "v201",
        "territory": "IN",
        "x-api-key": "D3T1y46VQX2A8uMt60okA8CKFsb8f8wR9nJpR8sC",
        "client": "PORT_2",
        "authorization": "Basic UE9SVF8yOklaOVQyUk5YRjY1aQ==",
        "content-type":"application/json",
        "device-datetime":new Date().toISOString(),
         "geolocation":`${lat};${lng}`
         
        },
      })
      
      const data = await res.json()
      return data;
    }
export async function searchMovie(movieName) {
      const movie = movieName.replaceAll(" ","+")
      
      const res = await fetch(
        `https://api-gate2.movieglu.com/filmLiveSearch/?query=${movieName}&n=6`,
        {
          headers: {
            "api-version": "v201",
            "territory": "IN",
            "x-api-key": "D3T1y46VQX2A8uMt60okA8CKFsb8f8wR9nJpR8sC",
            "client": "PORT_2",
            "authorization": "Basic UE9SVF8yOklaOVQyUk5YRjY1aQ==",
            "content-type":"application/json",
            "device-datetime":new Date().toISOString(),
            
        
        
      },
    })
    if(res.status !== 200) return {message :"No Results Found"}
    if(res.status === 200){

      const data = await res.json()
      return data;
    }
}
// export async function searchletterBox() {
//   const res = await fetch("https://letterboxd.com/tmdb/27205")
//   const data= await res.json()
//   console.log(res)
// }



