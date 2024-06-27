// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// npm install badge-maker
// https://img.shields.io/badge/License:-${license}-blue
function renderLicenseBadge(license) {
  if (license === 'N/A') {
    return ''
  } else {
    return `![Static Badge](https://img.shields.io/badge/License%3A-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return '- [License](#license)'
  } else {
    return `- [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'N/A') {
    return `## License
    N/A`
  } else {
    return `## License
    The license being used is ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.instillation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contribute

${data.contribution}

## Tests

${data.test}

## Questions

My gitHub account can be found at ${data.gitHubURL}

If you have further questions about the application feel free to contact me at ${data.emailAddress}`;
};

module.exports = generateMarkdown;
