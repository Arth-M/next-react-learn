# Using Next.js and React

1. To use next.js you should add a **package.json** file with an empty object **{}** in the same directory as the index.html file.

Then in the **terminal**, in the root the project, run the following **command**:

## npm install react@latest react-dom@latest next@latest

This will install all the depencies in the package-lock.json

2. The packages that should be seen in package.json are
  1. Next
  2. React
  3. React-dom

3. Next automatically uses Telemetry to see wich usagenis made of Next, to opt-out add
**NEXT_TELEMETRY_DISABLED=1** in your .env file.

Next recommends to have your **gitignore** file pointing to
## .env.*.local
for your **secrets**

4. Add

"scripts": {
  "dev": "next dev"
},

in your package.json object to enable next server.
package.json should look like this:
{
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}

5. Run **npm run dev** in your terminal

6. The new **layout.js** file is now the main layout of the app. You can add metadata, and UI elements
that will be shared across all the pages (e.g. navigation, footer and so on).

7. ## Add your **.gitignore** file with the following before any git init and add :

node_modules/
.next/
.swc/
.*.env

## if you forgot and didn't do any git commit, use **git reset** and check the files using **git status**

8. In the terminal : **git init git add . and git commit -m 'first commit'** then use github to create your remote origin and push
