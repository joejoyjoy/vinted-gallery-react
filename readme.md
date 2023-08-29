maximun files to like before localstorage gets full: 8325 photos
Furder impleemetacions: add IndexedDB to no limist

`#homework-assignment` `#react` `#typescript` `#sass` `#pexels-api`

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-) <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" /> [![Netlify Status](https://api.netlify.com/api/v1/badges/a9cf8967-ebc5-4f69-b1cb-ce6065c97793/deploy-status)](https://app.netlify.com/sites/vinted-gallery/deploys)

# Vinted Web Engineer Homework Assignment

> This is a web application built with React and TypeScript that provides the latest Pexels images from their API. This project is made by Joe Alt to fulfill the homework assignment for Vinted Web Engineering Academic.

## Index

- [Installation](#installation)
- [About the project](#about-the-project)
- [Deploy version](#deploy-version)
- [Contributors](#contributors-)

## Installation

- ```
   git clone https://github.com/joejoyjoy/vinted-gallery-react
  ```
- ```
    cd vinted-gallery-react
  ```

- ```
    npm install
  ```

- Create and configure your .env file according to the .env.example file to specify the different environment variables needed to be authorized to use the Pexels API freely.

- ```
    npm run dev
  ```

## About the project

The web application offers an infinite-scrolling effect, loading new images as you scroll. All images feature lazy loading and a low-resolution background to speed up loading times. You can add your favorite photos to your liked collection by hovering over them. If you prefer a dark theme, you can easily switch between dark and light modes using the header. Additionally, you can browse through images endlessly by hovering and selecting the "See More" button. This allows you to find similar images more easily. You can also download freely a image of choice. The application is also mobile-friendly and has been tested on the Chrome browser.

<img src="./src/assets/readmeGIFs/infinite-scrolling.gif" alt="Showcase of infinite scrolling" width="345x">
<img src="./src/assets/readmeGIFs/like-feature.gif" alt="Showcase of liking photos" width="345x">
<br />
<img src="./src/assets/readmeGIFs/modal-browsing.gif" alt="Showcase of browsing trough modals" width="345x">
<img src="./src/assets/readmeGIFs/dark-mode.gif" alt="Showcase of use in dark mode" width="345x">

### Future Improvements 📕

Here are some potential areas for improvement in the application:

1. Creating Unit, Integration, and End-to-End testing to ensure stability.
2. Use Storybook to isolate reusable components for better scalability.
3. Implementing responsive image features to improve loading time.
4. Add support for different browsers to ensure compatibility and accessibility.
5. Implement more comprehensive error handling and error messages to guide users effectively.
6. As for now all liked photos are saved in LocalStorage with a maximum storage space. To prevent this, in further implementations I will use IndexedDB instead

## Deploy version

#### Just want to see the project in action?

Good news! There is a deployed version available for everyone.
Go to [vinted-gallery.netlify.app](https://vinted-gallery.netlify.app) and see the project in action!
[![Netlify Status](https://api.netlify.com/api/v1/badges/a9cf8967-ebc5-4f69-b1cb-ce6065c97793/deploy-status)](https://app.netlify.com/sites/vinted-gallery/deploys)

## Creator ✨

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/joejoyjoy">
          <img src="https://avatars.githubusercontent.com/u/73751755" width="100px" alt="Joe Alt"/>
          <br />
          <sub>
          <b>Joe Alt</b>
          </sub>
        </a>
        <br />
        <a href="#developer-joe" title="code-tools-maintenance-design">💻🔧🚧🎨</a>
      </td>
    </tr>
  </tbody>
</table>

## Credits 📌

- Photos provided by [Pexels](https://www.pexels.com)
- Icons provided by [Font Awesome](https://fontawesome.com)

## License

This project is licensed under the MIT License
