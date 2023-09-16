"use client"
import axios from "axios"
import { useState } from "react"

// const options = {
//     method: "POST",
//     url: "https://api.cohere.ai/v1/generate",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/json",
//       authorization: "Bearer w2DD7JIkLyxtvA0zDcIgq5X9sM2HJoAWSxQAkre0",
//     },
//     data: {
//       max_tokens: 20,
//       truncate: "END",
//       return_likelihoods: "NONE",
//       prompt: "hello",
//       temperature: 3.0,
//     },
//   };

const CohereGenerate = ({prompt}) => {
   const [story, setStory] = useState("") 
    

// axios
//     .request(options)
//     .then(function (response) {
//       setStory(response.data.generations[0].text);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });

    return (
        //  <div>{story}</div>
        <div></div>
    )
}

export default CohereGenerate;