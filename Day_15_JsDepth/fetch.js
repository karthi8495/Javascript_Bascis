async function createUser() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/",{
            method: "GET",
            headers:{
                "Content-Type":"application/json",
            },
        });
        const data = await response.json();
        console.log("New User Created:", data.results);
    } catch (error) {
      console.log("Error occured:", error);
    }
}

createUser();
 