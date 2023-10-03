# Plotgen
## Inspiration
Plotgen drew inspiration from the storytellers and artists who excite, move and thrill us with the magic that can be found in their work. We wanted to empower others with the same kind of magic that is now realizable with AI developments like LLMs and Diffusion Models. Seeing how new tools from companies like BentoML and Cohere make it easy for developers to build products from these developments, we knew we had to do something in the space of generative AI.

## What it does
That short story or comic you've always wanted to make? Plotgen can make that dream come true. Given a prompt of a story of interest and several descriptive words, Plotgen generates an entire story with both text and images.

## How we built it
Our frontend was ideated and designed in Figma, and implemented with Next.js and Tailwind CSS. The backend utilizes Cohere's LLM Generate API and a BentoML-powered Stable Diffusion API.

## Challenges we ran into
- Working with inconsistent data from various API sources and building a well-performing pipeline for our use case
- Not being able to access a single GPU strong enough for our image generation models on any of the cloud platforms

## Accomplishments that we're proud of
- Improving the performance of our image model output from unrecognizable faces and subjects to high-quality character art through testing different base models and leveraging LoRAs
- Designers: Successfully implementing new design tools (Spline) & learning CSS to implement the frontend

## What we learned
It was really empowering for us to see how generative AI is super accessible thanks to the development of easy-to-use AI platforms and open-source, but also humbling to experience all the trial and error, bug squashing and uncertainty associated with exploring new technologies.

## What's next for Plotgen
While we accomplished a lot (and far more than what seemed possible at many points in the last 48 hours), there's a lot that we still have to do to deliver on our promise of bringing out the stories that lie within all of us. While our image generation models bring words and characters to life, we would love to do more with them and build multi-panel storylines full of dialogue, rich world-building details and consistent characters fine-tuned to our users' vision for the worlds they're creating.
