# Project Overview

This project delivers a modern, fully functional calculator designed to mimic the appearance and behavior of a mobile phone application. It features a sleek phone frame, a 20-button layout, real-time calculation previews, and an auto-scaling display to accommodate long inputs. The calculator is built using standard web technologies: HTML for structure, CSS for styling, and JavaScript for interactivity.

# Features
• Realistic Mobile Phone Interface: Encased within a simulated phone frame, complete with a   notch and a home bar, providing an authentic smartphone app experience on any screen size.

• 20-Button Layout: Includes standard numeric inputs (0-9), basic arithmetic operators (+, -, ×, /), percentage (%), square root (√), clear (C), and backspace (⌫) functionalities.

• Real-time Calculation Preview: Displays the calculated result in a smaller font below the main input as the user types, offering immediate feedback without needing to press the equals button.

• Auto-Scaling Display: The font size of the main display automatically adjusts (shrinks) to fit longer numerical inputs, ensuring visibility of up to 10 or more digits.

• Mobile-Responsive Design: Adapts seamlessly to different screen sizes, appearing as a full-screen application on mobile devices and a centered, mobile-like interface on larger screens (laptops/desktops).

• Clear and Backspace Functions: Dedicated buttons for clearing the entire display (C) and deleting the last entered character (⌫).

• Error Handling: Gracefully manages invalid mathematical expressions, displaying an "Error" message.

# Technologies Used
• HTML5: Provides the fundamental structure and content of the calculator interface.

• CSS3: Styles the calculator, implementing the mobile phone frame, button layouts, visual effects, and responsive design.

• JavaScript (ES6+): Powers the calculator's logic, handling user input, performing calculations, managing the display, and implementing real-time features.

# HTML 
The HTML sets up the main phone-frame container, which includes the notch, the calculator body, and the home-bar. Inside the calculator, there's a display-container holding the main input field (#display) and the preview area (#preview), followed by the buttons grid.

# CSS 
The CSS is responsible for the visual presentation, including:

•body: Centers the phone frame on the screen.

• .phone-frame: Defines the mobile phone's physical appearance (dimensions, borders, shadow, rounded corners).

• .notch & .home-bar: Creates the top notch and bottom home indicator for realism.

• .calculator: Styles the internal calculator area.

• .display-container: Manages the layout of the main display and the preview area.

# display:
 Styles the primary input/output field, including auto-scaling font size with transition.
# preview:
 Styles the real-time calculation result, typically in a smaller, distinct color.

• .buttons: Implements a grid layout for the 20 buttons (4 columns, 5 rows).

• button: Styles individual buttons, including circular shapes, hover/active effects, and specific colors for operators and special functions.

• @media (max-width: 480px): Ensures full-screen responsiveness on actual mobile devices.

# JavaScript 
The JavaScript provides all the interactive functionality:

• display & preview: References to the HTML elements.

• appendToDisplay(input): Appends numbers/operators to the main display and triggers adjustFontSize() and updatePreview().

• clearDisplay(): Resets both the main display and the preview to '0' and clears the preview.

• backspace(): Removes the last character from the display and triggers adjustFontSize() and updatePreview().

• calculateSquareRoot(): Computes the square root of the current display value and updates the display.

• calculateResult(): Evaluates the expression in the preview and moves it to the main display when the '=' button is pressed.

• updatePreview(): (New function) Attempts to evaluate the current expression in display.value and shows the result in #preview in real-time. It handles percentage conversion and error states.

• adjustFontSize(): (New function) Dynamically changes the font size of #display based on the length of the input string to ensure all digits are visible.



