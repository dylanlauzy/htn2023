"use client"
import axios from 'axios'
import { useState } from 'react';


const options = {
  method: 'POST',
  url: 'https://api.cohere.ai/v1/generate',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: 'Bearer pfEcNtJIIktaZmCEcnlbKBSAnadP6MAfPHrvQ9eM'
    
  },
  data: {
    max_tokens: 20,
    truncate: 'END',
    return_likelihoods: 'NONE',
    prompt: 'write about about weather',
    temperature: 1.0
  }
};


export default function Home() {
  const [out, setOut] = useState("")

  axios
  .request(options)
  .then(function (response) {
    setOut(response.data.generations[0].text)
  })
  .catch(function (error) {
    console.error(error);
});

  console.log(out)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  )
}
