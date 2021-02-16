# AITA
AITA stands for "An Introduction to APIs". This website aims to give a basic understand how an API work and letting users try out various APIs on the site as well.
 
## Design Process
As an informative website giving informative about APIs on an introductory level, as such, animations will be an essential part of the design implementation for users understand the content visually. AITA also provides ready to use APIs for users to have a more experential learning.

**Example Scenario (May not be the most accurate)**
> 1. Students like Lester or Keng Shion, as IT students coming across a new topic like API.<br>
> 2. Feeling blur like sotong after lesson and even googling does not help.
> 3. Stumbled across this website after seeing the beautiful landing page filled with animations, the students suddenly got a better understanding.
> 4. Finally after playing the games these students have finally grasp the basic concept of API!

View the wireframe:
https://xd.adobe.com/view/01023a2c-5511-4685-937a-656d35b09470-5451/

## Features
### [Homepage - index.html](https://s10208233.github.io/ID_Assg3_website/index.html)
The homepage displays an banner of 'AITA' followed by a simple infographic style explaination of how API requests works layed out from top to bottom.

### [Play - Games.html](https://s10208233.github.io/ID_Assg3_website/play.html)
The Play page in AITA allows users to test or play with working public APIs made into mini-games. Various minigames are stated below.

#### Blackjack API
Features a playable Blackjack game for players/users to play against an opponent which makes moves based on the random function in javascript.

#### NASA API
Retrieves daily posts from the official NASA website and has pictures from various rovers on the planet Mars.

#### Trivia API
A game quiz on general knowledge, mostly based in American context.

#### Dogs API
Fetches images of dogs.

#### Advice + Affirmation API
Using two different APIs with similar results, these two retrieves supportive phrases.

#### Baguette Anime API
This API retreives anime girls baguette, and only will be revealed if singed in at appropriate age

### [About - about.html](https://s10208233.github.io/ID_Assg3_website/about.html)
A short paragraph describing the purpose of this website.

### [Contact - contact.html](https://s10208233.github.io/ID_Assg3_website/contact.html)
For futher enquiries users can use the contact form to contact us or leave a feedback. Number of feedbacks are shown under the form.
 
### Existing Features
- Sign In/Sign Out: Reveals and hides a certain API based if user is signed in or not.
   
- Dynamic Update Contact Form: Contact page shows number of sent forms and sender, feedback details of form are still hidden.

- Back to Top button: Easy for access to navigation bar. (Decided to kept non-sticky to give full view of page content when browsing.)

### Features Left to Implement
- Merchandise page

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [restDB](https://restdb.io/)
    - Used for creation of custom APIs to store and collect data such as user sign in information and contact forms.

- [LottieFiles](https://lottiefiles.com/)
    - Animations from lottiefiles are used to give a better user experience on the website as well as a visual form of            explanation for the educational contents on the homepage.

## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
