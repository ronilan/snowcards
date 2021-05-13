# Snow Card Generator

Snow Card Generator is a simple web app for Ski and Snowboard instructors. It allows them to quickly generate an achievements card for their guests.

Data about the guest's progress is entered into a single form. The generator outputs a single JPEG Image that is 1080 pixels wide and 1350 pixels long (Instagram post vertical dimensions). This image can then be shared with the guest via text message or email.

The app is designed for mobile phone usage. Loading it requires an Internet connection but it works locally. For privacy **all data stays on the instructor's device**. 

# Example Cards

* [Frank Freestyle](examples/frank-freestyle.jpeg) ⛷️
* [Paul Park](examples/frank-freestyle.jpeg) 🏂

# Usage

- Open the generator. Demo at (https://snowcards.netlify.app/)
- Fill the data. Required fields are marked with *.
- Press the *Generate Card* button.
- Wait a sec as image is generated.
- Tap and hold generated image to open the share/save menu.
- Use browser back button to generate the card again.
- Use *Reset* button on form to clear guest data for a new card.
- All form data persists page loads. You may navigate away from the generator and come back at a later time.

# Troubleshooting

If the card is generated with an empty white header where the snowy images should be - just hit the reload button or go back to the form and press the generate button again.

# Progression & Achievements

Guest progression for both Ski and Snowboard is defined by 6 ability levels as common in Canada: 
1. First Time
2. Beginner
3. Novice
4. Intermediate
5. Advanced
6. Expert

Achievements for each level follow (roughly) the Canadian Ski Instructors Alliance (CSIA) and Canadian Association of Snowboard Instructors (CASI) progressions. Level 6 achievements at the Expert level are meant to match the skiing/riding ability of a Certified Level 1 instructor.

Naturally those are debatable (sometimes passionately), thus achievements.js contains all data in an easy to edit format.

# Developing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
All text below came from that bootstrapper. I'm sure you've seen it before...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Branding

To brand the cards for a specific resort replace the content of the `src/data` directory and the `public/favicon` directory with matching branded content.

# Authors

(c) [Ron Ilan](https://www.ronilan.com)

# License
[UNLICENSED](./LICENSE.md)

###### Fabriqué au Canada : Made in Canada 🇨🇦
