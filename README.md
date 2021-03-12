## #19-employee-information-directory-react
![Project license](https://img.shields.io/badge/license-MIT,https://choosealicense.com/licenses/mit/-brightgreen)

<h3>Random generated employee registry searchable via full/partial last name or in ascending/descending alphabetical order.</h3>

<p>Github Repository Page: https://github.com/palowenstein/employee-information-directory-react</p>
<p>Heroku Deployment Page: https://employee-info-retriever-react.herokuapp.com/</p>

# Table of Contents
  * [GIF](#GIF)
  * [Overview](#Overview)
  * [Details](#Details)
  * [Instructions](#Instructions)
  * [Screenshots](#Screenshots)
  * [Video](#Video)
  * [References](#References)
  * [License](#License)
  * [Contributions](#Contributions)  
  * [Contact](#Contact)

## GIF
![Randomized Employee Directory filtered by name or alphabetical order (React) — Application Demo (GIF)](./demo_assets/19-1-employee-information-directory-react-application-demo.gif "Randomized Employee Directory filtered by name or alphabetical order (React) — Application Demo (GIF)")
<p>Fig. 1. Randomized Employee Directory filtered by name or alphabetical order (React) — Application Demo (GIF)</p>

## Overview
<ul>
<li>The React powered Employee Registry allows for the following actions:
  <ul>
    <li>Search for an employee or a group of employees based on a partial or full last name.</li>
    <li>Reorder the employee registry in either ascending or descending alphabetical order.</li>
  </ul> 
</ul>

## Details
<ul>
<li>The randomized employee list is generated via API from <code>https://randomuser.me/</code>.</li>
<li>The application responds to the input field by managing React component state.</li>
<li>Because it's a one page application, there are only 2 components: SearchForm (includes header), SearchResults (includes footer).</li>
<li>If the application is to be scaled up, the 2 components will be broken in 4.</li>
<li>A .gitignore file is present at the root level to prevent the upload of node_modules, Macintosh .DS_Store files and raw assets.</li>
<li>The end user must first execute the package.json file located in the root folder of the application. This can be done in Apple's Terminal via the <kbd>npm install</kbd> command and will install the required dependencies (antd design, axios, react and its extensions) needed for the program to run.</li>
<li>For the application to run in an heroku environment, a <strong>Procfile</strong> file with the startup instruction <kbd>npm start</kbd> is included in the root directory.</li>
</ul>

## Instructions
<ul>
<li>In Terminal, locate the application's root directory and enter it via the <kbd>cd</kbd> command: <kbd>cd oemployee-information-directory-react</kbd>.
<li>In the root directory, run the <kbd>npm install</kbd> command to install the necessary node modules (antd design, axios, react, react dom / router / scripts, web-vitals) from the package.json.</li>
<li>In the root directory, run the <kbd>npm start</kbd> command to launch the application.</li>
<li>This will automatically generate a new browser window containing the application.</li>
<li>If not loaded automatically, the application can be browser accessed via <code>localhost:3000</code> in the browser's address bar.</li>
<li>Employees can be filtered via partial or full last name. Partial selections will display names containing the character consecutive selection no matter where they are located in the last name.</li>
<li>Employees can be sorted in either ascending or descending alphabetical order.</li>
<li>Non western names are listed at the end of the list and will show first if the list is reordered in descending alphabetical order.</li>
</ul>

## Screenshots
![Randomized Employee Directory filtered by name or alphabetical order (React) — Browser Interface (JPG)](./demo_assets/19-2-employee-information-directory-react-application-browser-interface-reduced-size.jpg "Randomized Employee Directory filtered by name or alphabetical order (React) — Browser Interface (JPG)")
<p>Fig. 2. Randomized employee registry filtered by last name or ascending/descending alphabetical order.</p>

## Video
![Randomized Employee Directory filtered by name or alphabetical order (React) — Application Demo (MP4)](./demo_assets/19-1-employee-information-directory-react-application-demo.mp4 "Randomized Employee Directory filtered by name or alphabetical order (React) — Application Demo (MP4)")
<br />

## References
<ul>
	<li>React, React State / Props / Classes / Hooks</li>
	<li>React Extensions: React Router, Dom, Scripts.</li>
  <li>Service-Worker (legacy) / WebVitals (current).</li>
	<li>AXIOS for API requests.</li>
	<li>ANTD Design for application layout.</li>
	<li>Node / Package.JSON / NPM for installing dependencies.</li>
</ul>

## License
<p>
<a href="./MITlicense.txt">MIT License</a> | Copyright © [2021] Pierre André Lowenstein
</p>

## Contributions
<ul>
<li>Pull/Fork from master.</li>
<li>Create your own branch.</li>
<li>Add your own code (must be tested).</li>
<li>Push your branch.</li>
<li>Request a pull.</li>
</ul>

<p>Please use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)</p>
<p>For major changes, please open an issue beforehand to discuss the changes.</p>

## Contact
<p>
<a href="https://pierreandrelowenstein.com" title="[www] Pierre Andr&eacute; Lowenstein" target="_blank">[www] pierreandrelowenstein.com</a>
&nbsp;|&nbsp;
<a href="mailto:coder@pierreandrelowenstein.com" title="Courriel / E-Mail">[e-mail] Send me a 'courriel'</a>
</p>