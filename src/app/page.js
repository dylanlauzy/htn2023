import axios from 'axios'



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

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    out = response.data
  })
  .catch(function (error) {
    console.error(error);
});

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        test
        {out}
    </main>
  )
}
