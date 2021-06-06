# librairie-cookie-consent
This easy-to-use library allows you to ask your users for feedback on various parameters that can be set directly in the code. For more information, see the README documentation. IMPORTANT NOTE: for use with jQuery.


<details>
  <summary><b>Exemple</b></summary>
  If you want to see the result directly, download the latest <a href="https://github.com/clement-gaudiniere/librairie-cookie-consent/releases">release</a>, and go to the Example folder. Then run the index.html file.
</details>

```
In development
```

### How to use it?

Once the popupConsent.min.js or popupConsent.js file has been inserted into the page, you can create a popup using the `popupConsent();` function.
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
