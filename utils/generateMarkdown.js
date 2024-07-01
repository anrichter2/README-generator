// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else {
    return `![Static Badge](https://img.shields.io/badge/License%3A-${license.split(' ').join('_')}-blue)`
  }
}

// Function that returns the license link in the table of contents
// If there is no license it still returns the license link because I believe that the license link and section should still be generated even if there is no license being used
function renderLicenseLink(license) {
  return '- [License](#license)'
}

// Function that returns the license section of README
// If there is no license, returns that there is no license
function renderLicenseSection(license) {
  if (license === 'None') {
    return `## License

None`
  } else {
    return `## License

The license being used is: ${license}`
  }
}

// Function to generate markdown for README
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
