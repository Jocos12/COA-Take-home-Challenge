# COA-Take-home-Challenge
# 4.1 UI Challenge: Interactive Photo Gallery

This project is an interactive photo gallery displaying four images with hover effects. When a user hovers over an image, it turns black and white with a blur effect. Additionally, text appears with the names and locations of the animals depicted in the photos, and the text animates upwards on hover.

## Features

- Four images displayed side by side.
- Images turn black and white with a blur effect on hover.
- Text describing each image appears below the images and animates upwards on hover.
- "Know more →" link appears on hover for each image.

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You need a modern web browser to view the project.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/interactive-photo-gallery.git
    ```

2. Navigate to the project directory:

    ```bash
    cd interactive-photo-gallery
    ```

3. Open the `index.html` file in your web browser to view the photo gallery.

## File Structure
==================================================================================================================================================================================================================


4.2 Coding Challenge 1: Array Manipulation
# Subarray Sum Challenge

This project contains a solution to the problem of determining whether a contiguous subarray within a given array sums up to a specified target. The solution is implemented in JavaScript and allows user interaction to input custom arrays and target sums.

## Project Structure

The project folder `challenges` contains the following file:
- `arrayMap.js`: This is the main JavaScript file that contains the function to check for the subarray sum and code to handle user inputs.

## How to Run

To run this project, you need to have Node.js installed on your machine. Follow the steps below to execute the code:

### 1. Install Node.js

If you haven't already installed Node.js, download and install it from [nodejs.org](https://nodejs.org/). Node.js includes `npm` (Node Package Manager), which you will use to install the necessary packages.

### 2. Install `readline-sync` Package

The `readline-sync` package is required to read user input from the command line. To install this package:

- Open your terminal.
- Navigate to the `challenges` folder where `arrayMap.js` is located.
- Run the following command:
  ```sh
  npm install readline-sync
===================================================================================================================================================================================================================

4.3 Coding Challenge 2: String Transformation
# String Transform Project

This project transforms a given string based on specific rules. The rules are as follows:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

## Examples

- Input: "Hamburger"
  - Output: "regrubmaH"
  - Explanation: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed.

- Input: "Pizza"
  - Output: "80 105 122 122 97"
  - Explanation: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code.

- Input: "Chocolate Chip Cookie"
  - Output: "eikooCpihCetalocohC"
  - Explanation: The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed.

## Project Structure

The project contains a single JavaScript file:
- `stringTransform.js`: Contains the logic for transforming the string based on the specified rules.

## How to Run

To run this project, follow these steps:

1. Make sure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

2. Clone this repository or download the `stringTransform.js` file and place it in a folder named `challenges`.

3. Open a terminal (command prompt or shell) and navigate to the `challenges` folder where the `stringTransform.js` file is located.

4. Run the following command to start the script:

   ```bash
   node stringTransform.js


   Example Usage
$ node stringTransform.js
Enter a string: Hamburger
Transformed string: regrubmaH

$ node stringTransform.js
Enter a string: Pizza
Transformed string: 80 105 122 122 97

$ node stringTransform.js
Enter a string: Chocolate Chip Cookie
Transformed string: eikooCpihCetalocohC

