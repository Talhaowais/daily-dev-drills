<!-- // https://react.dev/ -->

<!-- For creating web projects -->
react (with/and) react-dom

<!-- For creating mobile application we will use  -->
react (with/and) react-native

<!-- First method for creating react project -->

<!-- Basic method for creating react project -->
npx create-react-app 01basicreact
npx => Node Package Executer
create-react-app => utility
01basicreact => is k bad us project ka name

<!-- Jab project ban jay ga tab - terminal sa cd kr k apny project main a jay like-->
cd 01basicreact
<!-- To start the project always go into package.json file and there we can see all the details -->
<!-- To start that project go to the terminal and type "dir" to see if package.json is showing -->
<!-- To run the start/build/test or any script use -->
npm run start
npm run build
build => jab hum production main app daly gy to yehi folder hota ha jo k agy use hota ha


<!-- Creating a project using vite(yeh 1 bundler/library ha ) -->
<!-- hum yeh use krty hain ku k yeh light w8 ha -->
<!-- In terminal go to the root folder do dir to see if folders are showing -->
npm create vite@latest
<!-- click enter then it will ask for the project name enter the name -->
<!-- Then it will ask for the framework => choose react by using arrows-->
<!-- Then it will ask for variant choose simple javascript -->
<!-- and BOOM the prject will be created -->
<!-- In vite we dont have the folder of node_modules -->
<!-- Us ko lany k liy go into apckage.json file -->
<!-- type npm i OR npm install  -->
npm install
<!-- Then same as above to run the project/scripts use --> See what scripts we have under package.json
npm run dev

<!-- To inject the tailwind in any project do these steps -->
FIrst create a project then go into that folder from cdm terminal
<!-- Then run this command -->
npm install tailwindcss @tailwindcss/vite
<!-- A file will be added into the project, then go into the file of vite.config.ts and add these -->
The two commented lines in the below code
import { defineConfig } from 'vite'
<!-- import tailwindcss from '@tailwindcss/vite' -->

export default defineConfig({
  plugins: [
    <!-- tailwindcss(), -->
  ],
})

<!-- Then in the main.css add this -->
@import "tailwindcss";