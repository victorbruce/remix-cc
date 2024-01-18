# Remix Crash Course

Followed a resource to build a notes app to grab the basics of the Remix framework.

## Lessons Learnt
- Understanding the remix project structure and it's components.
- Understanding how routing works in Remix.
- Data Fetching and Mutations.
- Handling form submissions.
- Handling errors gracefully.
- Applying styles using Regular CSS.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

## Reference

I got up and running quickly with remix using:

- a Youtube resource from **Academind**
- [Remix Docs](https://remix.run/docs)
