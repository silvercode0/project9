// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2209-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;



export const fetchAllPlayers = async () => {
    try {
      const getResponse = await fetch(`${APIURL}/players`);
      //getting all the players 
      const result = await getResponse.json();
      if (result.error) {
          throw result.error;
          // throw creates a custom error that you can use 
      }
      return result.data.players;
    } catch (error) {
      //define an error to play when it does not work
      console.error('Can not get all players, sorry', error);
    }
  };

export const fetchSinglePlayer = async (playerId) => {
try { 
  const getResponse1 = await fetch(`${APIURL}/players/${playerId}`);
  const theResult = await getResponse1.json();
  console.log('result',theResult);
      if (theResult.error) throw theResult.error;
          // throw creates a custom error that you can use 
      return theResult.data.player;
    } catch (error) {
  console.error("can not get player id.", error)
}
};

export const addNewPlayer = async (playerObj) => {
  try { 
  //  const getResponse2 = await fetch(`${APIURL}/players`)
  const getResponse2 = await fetch(`${APIURL}/players`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(playerObj),
});
   const result1 = await getResponse2.json();
  //  console.log("result", result1);
   if (result1.error) throw result1.error
    return;
    // return result1.data.player;
  } catch (error) {
    console.error("can not add player.", error)
  }

};

export const removePlayer = async (playerId) => {
  try {
  const response = await fetch(`${APIURL}/players/${playerId}`, {
       method: 'DELETE',
     });
  const result = await response.json();
    if (result.error) throw result.error;
     return;
  } catch (err) {
     console.error(
       `Whoops, trouble removing player from the roster!`,
       err);
    }
    
};


