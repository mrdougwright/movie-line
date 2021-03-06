### Setup
You will need your own TMDB API keys.
You can learn more about that on their [website](https://www.themoviedb.org/documentation/api).

For this project I'm using `dotenv` with a git-ignored `.env` file that holds my two keys:

```
TMDB_API_KEY=your_api_key_here
TMDB_API_TOKEN=your_api_token_here
```

### Running
```
deno run -A entrypoint.ts
```

### Notes
Using embedded javascript templates (EJS)
