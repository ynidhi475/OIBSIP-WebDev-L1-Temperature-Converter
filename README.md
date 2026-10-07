# 🌡️ Temperature Converter Website

## 📌 Project Description

The Temperature Converter is a simple and responsive web application that allows users to convert temperature values between Celsius, Fahrenheit, and Kelvin.

The project provides a clean and user-friendly interface where users can enter a temperature, select the input unit, and convert the value into all three temperature units.

## 🎯 Objective

The objective of this project is to create an interactive temperature conversion tool using HTML5, CSS3, and Vanilla JavaScript.

## ✨ Features

- Convert Celsius to Fahrenheit and Kelvin
- Convert Fahrenheit to Celsius and Kelvin
- Convert Kelvin to Celsius and Fahrenheit
- User-friendly temperature input
- Input validation for empty or invalid values
- Absolute zero validation
- Displays all converted values simultaneously
- Clean and responsive design
- Works on desktop and mobile devices

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)

## 📐 Conversion Formulas

### Celsius to Fahrenheit

°F = (°C × 9/5) + 32

### Fahrenheit to Celsius

°C = (°F − 32) × 5/9

### Celsius to Kelvin

K = °C + 273.15

### Kelvin to Celsius

°C = K − 273.15

### Fahrenheit to Kelvin

K = (°F − 32) × 5/9 + 273.15

### Kelvin to Fahrenheit

°F = (K − 273.15) × 9/5 + 32

## ⚠️ Validation

The application checks whether the entered temperature is valid.

It also prevents temperatures below absolute zero:

- Celsius: -273.15°C
- Fahrenheit: -459.67°F
- Kelvin: 0 K

If the user enters a temperature below absolute zero, a user-friendly error message is displayed.

## 📂 Project Structure

```text
Temperature-Converter/
│
├── index.html
├── style.css
├── script.js
└── README.md
