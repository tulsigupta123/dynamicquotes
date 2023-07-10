let quotes = document.getElementById("quotes");
let authors = document.getElementById("authors");
let clickButton = document.getElementById("clickButton");



        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try{let data = await fetch(api);
            let realData = await data.json();

            let getNewQuotes = () => {
                let randomNumber = Math.floor(Math.random() * 300);
                quotes.innerHTML = `${realData[randomNumber].text}`;
               
               if(realData[randomNumber].author == null){
                authors.innerHTML = "-unknown";
               } else{
                authors.innerHTML = `-By ${realData[randomNumber].author}`;
            }
        }
            getNewQuotes();
        
            }catch(err){
                console.log("Error:" , err);
            }
        }
        getQuotes();
        
        clickButton.addEventListener("click", getQuotes);