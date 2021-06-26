<p align="center">
	<img alt="Logo de la librairie" src="https://raw.githubusercontent.com/clement-gaudiniere/librairie-cookie-consent/main/img/logo.png" width="200" />
</p>


<p align="center">
  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="cc by-nc-sa 4.0" src="https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-525252.svg?labelColor=292929&logo=creative%20commons&style=for-the-badge" /></a>
  <a href="https://github.com/clement-gaudiniere/librairie-cookie-consent/issues"><img alt="Issues" src="https://img.shields.io/github/issues/Omega-Numworks/Omega.svg?labelColor=292929&logo=git&style=for-the-badge" /></a>
</p>

# librairie-cookie-consent
This easy-to-use library allows you to ask your users for feedback on various parameters that can be set directly in the code. For more information, see the README documentation. IMPORTANT NOTE: for use with jQuery.

[Demo](https://clement-gaudiniere.github.io/librairie-cookie-consent/)



```
In development, your contributions are welcome
```

<details>
  <summary><b>Exemple</b></summary>
	<p>If you want to see the result directly, download the latest <a href="https://github.com/clement-gaudiniere/librairie-cookie-consent/releases">release</a>, and go to the Example folder. Then run the index.html file. You can see below the popup of the library, below, of course, the style is fully configurable in the CSS document.
	</p>
	<p align="center">
		<img alt="Popup" src="https://raw.githubusercontent.com/clement-gaudiniere/librairie-cookie-consent/main/img/popup.png" width="400" />
	</p>
	<p align="center">
		<img alt="Popup" src="https://raw.githubusercontent.com/clement-gaudiniere/librairie-cookie-consent/main/img/popup-confi-section.png" width="400" />
	</p>
</details>

### How to install it ?

You can download the entire library in three different ways:
- via the library-cookie-consent <a href="https://github.com/clement-gaudiniere/librairie-cookie-consent/releases">release page</a>. 
- via NPM : `npm install librairie-cookie-consent`
- via Bower : <em>Not yet available</em>


### How to use it ?

Before starting any manipulation with the library, the CSS file `popupConsent.css`, the file `popupConsent.js` or `popupConsent.min.js`, and the jQuery framework must be included. For example, our `<head>` could look like this:
``` html
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="css/popupConsent.css">
  <script src="js/popupConsent.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <title></title>
</head>
```

You don't have to include jQuery and `popupConsent.js`/`popupConsent.min.js` between the `<head>` tags, but you must include jquery before `popupConsent.js`/`popupConsent.min.js` and before calling the `popupConsent()` function.

Once these three files are included in our page, , you can create a popup using the `popupConsent();` function.
The question now is how does this function work ? It's actually quite simple, just create a `cookieConsentOptions` variable with an array, like the example below.

``` js
var cookieConsentOptions = {
  // Cookie usage prevention text
  'textPopup': 'We use cookies/targeted advertising to ensure you have the best experience on our site. If you continue to use our site, we will assume that you agree to their use. For more information, please see our <a href="#">privacy policy</a>.',
  // The text of the accept button
  'textButtonAccept': 'Accept all',
  // The text of the configure my options button
  'textButtonConfigure': 'Configuring choices',
  // The text of the save my options button
  'textButtonSave': 'Save choices',
  // The text of the first parameter that the user can define in the "configuration" section.
  'textAuthorization1': 'Allow access to geolocation data',
  // The cookie name of the first authorization 
  'nameCookieAuthorization1': 'autoriseGeolocation',
  // The text of the second parameter that the user can define in the "configuration" section.
  'textAuthorization2': 'Allow personalised ads and content, ad measurement and audience analysis.',
  // The cookie name of the second authorization 
  'nameCookieAuthorization2': 'targetedAdvertising',
  // The text of the third parameter that the user can define in the "configuration" section.
  'textAuthorization3': 'Storing and/or accessing information on a device',
  // The cookie name of the third authorization 
  'nameCookieAuthorization3': 'cookieConsent'
}
popupConsent(cookieConsentOptions);
```


