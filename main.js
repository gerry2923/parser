
const url = "https://old.bankrot.fedresurs.ru/TradeList.aspx?attempt=1";

let someResult = fetch(url, 
    {
      method: 'GET',
      credentials: "same-origin",
    })
    .then((response) => {
      if(response.ok) {
        console.log(typeof response);
        return response;
      }
      throw new Error(`Шибка ${response.status} ${response.statusText} `)
    }   
    )
    .catch((error) => {
      console.log(error);
    });


console.log("dkfjsdkfj");    

