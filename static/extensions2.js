export const ext_get_pricing = {
  name: 'ext_get_pricing', // Extension name
  type: 'response', // Extension type indicating it handles responses
  match: ({ trace }) => trace.payload.name === 'ext_get_pricing', // Condition for when this extension is triggered
  render: ({ trace, element }) => {
    // Create a light grey background overlay
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Light grey background with transparency
    overlay.style.zIndex = '10000'; // Ensure it's above the chatbot and everything else
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.id = 'popup-container';
    popupContainer.style.width = '80%'; // Desktop width
    popupContainer.style.maxWidth = '600px';
    popupContainer.style.height = '80%'; // Desktop height
    popupContainer.style.maxHeight = '80vh'; // Ensure it doesn't overflow the viewport height
    popupContainer.style.backgroundColor = '#fff'; 
    popupContainer.style.borderRadius = '10px';
    popupContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; 
    popupContainer.style.zIndex = '10001'; // Ensure it's above everything else, including the overlay
    popupContainer.style.position = 'relative';
    popupContainer.style.overflow = 'hidden'; // Hide overflow to avoid any scrolling issues

    // Create the header
    const header = document.createElement('div');
    header.id = 'popup-header';
    header.style.backgroundColor = '#F4F3EE'; // Light grey background
    header.style.padding = '20px';

    const headerTitle = document.createElement('h2');
    headerTitle.textContent = 'Digital Pricing Guide'; // Title similar to the screenshot
    headerTitle.style.fontFamily = 'Arial, sans-serif';
    headerTitle.style.fontSize = '24px';
    headerTitle.style.margin = '0';
    headerTitle.style.textAlign = 'center';

    // Append the title to the header
    header.appendChild(headerTitle);

    // Long-form text section
    const contentSection = document.createElement('div');
    contentSection.style.padding = '15px'; // Add padding to the content area
    contentSection.style.backgroundColor = '#fff'; // White background for the long-form text

    const subtext = document.createElement('p');
    subtext.textContent = "We get it. You're busy. Fill out your information and you'll receive our digital pricing guide to make your decision making process super easy.";
    subtext.style.fontFamily = 'Arial, sans-serif';
    subtext.style.fontSize = '14px';
    subtext.style.textAlign = 'center';
    subtext.style.margin = '0';

    // Append the subtext to the content section
    contentSection.appendChild(subtext);

    // Close button for the popup
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.border = 'none';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.fontSize = '18px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function () {
      document.body.removeChild(overlay); // Remove the popup and overlay
    };

    // Embed the iframe into the popup container
    const iframe = document.createElement('iframe');
    iframe.src = 'https://api.leadconnectorhq.com/widget/form/TZsYznKT6TK2M7ZuD3tz'; // Your form URL
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.id = 'popup-TZsYznKT6TK2M7ZuD3tz';

    // Create a form container with proper padding and background color
    const formContainer = document.createElement('div');
    formContainer.style.padding = '0'; // Remove padding around iframe
    formContainer.style.flex = '1'; // Ensure form takes up available space
    formContainer.style.backgroundColor = '#fff'; // White background to match the rest of the popup
    formContainer.style.height = 'calc(100% - 160px)'; // Make sure the form container takes up remaining height minus header and text

    // Append the iframe to the form container
    formContainer.appendChild(iframe);

    // Append the close button, header, content section, and form container to the popup container
    popupContainer.appendChild(closeButton);
    popupContainer.appendChild(header);
    popupContainer.appendChild(contentSection);
    popupContainer.appendChild(formContainer);

    // Append the popup container to the overlay
    overlay.appendChild(popupContainer);

    // Append the overlay to the body
    document.body.appendChild(overlay);

    // Add responsive mobile styles
    const style = document.createElement('style');
    style.innerHTML = `
      @media screen and (max-width: 768px) {
        #popup-container {
          width: 95%; /* Full width on mobile */
          height: 95%; /* Full height on mobile */
          max-width: none; /* Remove max-width constraint */
          max-height: none; /* Remove max-height constraint */
          border-radius: 0; /* Remove border radius on mobile */
        }

        #form-container {
          height: calc(100% - 160px); /* Adjust height for mobile */
        }
      }
    `;
    document.head.appendChild(style);

    // Add event listener to close the popup when clicking outside
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        document.body.removeChild(overlay); // Remove the popup and overlay if clicked outside
      }
    });
  },
};export const ext_person_tour = {
  name: 'ext_person_tour',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_person_tour' || trace.payload.name === 'ext_person_tour',
  render: ({ trace, element }) => {
    console.log('Render function called for ext_person_tour_link');

    // Open the scheduling link in a new window or tab
    window.open(
      'https://api.leadconnectorhq.com/widget/booking/LAVqfS0J6UgdjsVwN5ij',
      '_blank' // Opens in a new tab or window
    );

    // Optionally, display a message in the chatbot
    const message = document.createElement('p');
    message.textContent = 'A new tab has been opened for you to schedule your appointment.';
    element.appendChild(message);

    console.log('Scheduling link opened in a new tab');
  },
};





// ______________________ FORM EXTENSIONS _______________________________ //
// export const FormExtension = {
//     name: 'ext_form', // Extension name
//     type: 'response', // Extension type indicating it handles responses
//     match: ({ trace }) => trace.payload.name === 'ext_form', // Condition for when this extension is triggered
//     render: ({ trace, element }) => {
//       // Function to render the form
//       const formContainer = document.createElement('form'); // Create a form element dynamically
      
//       // Set the inner HTML of the form, including a title, input fields, and a submit button
//       formContainer.innerHTML = `
//         <style>
//           label {
//             font-size: 0.8em;
//             color: #888;
//           }
//           input[type="text"], input[type="email"], input[type="tel"] {
//             width: 100%;
//             border: none;
//             border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
//             background: transparent;
//             margin: 5px 0;
//             outline: none;
//           }
//           .phone {
//             width: 150px;
//           }
//           .invalid {
//             border-color: red;
//           }
//           .submit {
//             background-color: #832E31;
//             border: none;
//             color: white;
//             padding: 10px;
//             border-radius: 5px;
//             width: 100%;
//             cursor: pointer;
//           }
//           textarea {
//             width: 100%;
//             border: 0.5px solid rgba(0, 0, 0, 0.1);
//             background: transparent;
//             margin: 5px 0;
//             outline: none;
//             resize: none;
//           }
//           h3 {
//             4
//             font-size: 1.2em;
//             margin-bottom: 10px;
//             text-align: left;
//             color: #832E31;
//           }
//           label {
//             color: black;
//             font-weight: bold;
//           }
//           input.name {
//             border: 1px solid lightgrey;
//             border-radius: 4px;
//             padding: 12px;
//             box-sizing: border-box;
//             background: white;
//           }
//           input.email {
//             border: 1px solid lightgrey;
//             border-radius: 4px;
//             padding: 12px;
//             box-sizing: border-box;
//             background: white;
//           }
//           input.phone {
//             border: 1px solid lightgrey;
//             border-radius: 4px;
//             padding: 12px;
//             box-sizing: border-box;
//             background: white;
//           }
//           input.moreInfo {
//             border: 1px solid lightgrey;
//             border-radius: 4px;
//             padding: 12px;
//             box-sizing: border-box;
//             background: white;
//           }
        
//         </style>
  
//         <h3>Get In Touch</h3>
//         <p>To get leasing information and details, download our lease request form and submit it along with your request using the form.</p>
        
//         <label for="name">Name</label>
//         <input type="text" class="name" placeholder="Enter Name" name="name" required><br><br>
        
//         <label for="email">Email</label>
//         <input type="email" class="email" placeholder="Enter Email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" title="Invalid email address"><br><br>
  
//         <label for="phone">Phone Number</label>
//         <input type="tel" class="phone"  placeholder="Enter Phone" name="phone" required pattern="\\d+" title="Invalid phone number, please enter only numbers"><br><br>
  
//         <label for="Anything We Should Know">More Info</label>
//         <input type="text" class="moreInfo" placeholder= "Anything We Should Know?"name="moreInfo" required><br><br>
  
//         <input type="submit" class="submit" value="Submit">
      
//       `;
//       // Attach an event listener to the form for handling the submit event
//       formContainer.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent default form submission behavior
//         // Extract values from the form fields
//         const name = formContainer.querySelector('.name').value;
//         const email = formContainer.querySelector('.email').value;
//         const phone = formContainer.querySelector('.phone').value;
//         const moreInfo = formContainer.querySelector('.moreInfo').value;
        
//         // Simplify the logic: Remove the submit button after submission without validation checks
//         formContainer.querySelector('.submit').remove();
//         // Programmatically submit the form data
//         window.voiceflow.chat.interact({ type: 'complete', payload: { name, email, phone, moreInfo } });
//       });
  
//       element.appendChild(formContainer); // Append the form to the specified DOM element
//     },
//   };
  
  
//   // __________________ POP FORM _________________________________________ //
//   export const popform = {
//     name: 'Forms',
//     type: 'response',
//     match: ({ trace }) =>
//       trace.type === 'ext_capture_pop_up' || trace.payload.name === 'ext_capture_pop_up',
//     render: ({ trace, element }) => {
//       createFormPopup();
//       showPopup();
//     },
//   };
  
//   function createFormPopup() {
//     // Check if popup already exists
//     if (document.getElementById('overlay')) {
//       return;
//     }
  
//     // Create overlay
//     const overlay = document.createElement('div');
//     overlay.id = 'overlay';
//     overlay.style.position = 'fixed';
//     overlay.style.top = '0';
//     overlay.style.left = '0';
//     overlay.style.width = '100%';
//     overlay.style.height = '100%';
//     overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//     overlay.style.zIndex = '10000'; // Ensure overlay is on top
//     overlay.style.display = 'flex';
//     overlay.style.justifyContent = 'center';
//     overlay.style.alignItems = 'center';
//     document.body.appendChild(overlay);
  
//     // Create popup
//     const popup = document.createElement('div');
//     popup.id = 'popup';
//     popup.className = 'form-container'; // Add class for styling
//     popup.style.zIndex = '10001'; // Ensure popup is above overlay
//     overlay.appendChild(popup);
  
//     // Create popup content
//     const popupContent = `
//       <h1>Get Connected <span style="color: #5200FF;">Today</span></h1>
//       <p>By Submitting Your Information You're Taking Great Steps!</p>
//       <form id="inquiry-form">
//           <label for="full-name">Full Name</label>
//           <input type="text" id="full-name" name="fullName" placeholder="Full Name" required>
          
//           <label for="email">Email</label>
//           <input type="email" id="email" name="email" placeholder="Email" required>
          
//           <label for="phone">Phone</label>
//           <input type="tel" id="phone" name="phone" placeholder="Phone" required>
          
//           <label for="delivery-note">More Info</label>
//           <textarea id="delivery-note" name="deliveryNote" placeholder="Delivery note" rows="4" required></textarea>
          
//           <div class="button-container">
//             <button type="submit">Submit Inquiry</button>
//           </div>
//       </form>
//     `;
//     popup.innerHTML += popupContent;
  
//     // Add event listeners
//     overlay.addEventListener('click', function(event) {
//       if (event.target === overlay) {
//         hidePopup();
//       }
//     });
  
//     // Add form submission listener
//     document.getElementById('inquiry-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       const fullName = document.getElementById('full-name').value;
//       const email = document.getElementById('email').value;
//       const phone = document.getElementById('phone').value;
//       const deliveryNote = document.getElementById('delivery-note').value;
  
//       console.log('Form Submitted:', { fullName, email, phone, deliveryNote });
  
//       // Here you can handle form submission, e.g., sending data to a server
//       hidePopup();
//       alert('Thank you for your inquiry!');
//     });
  
//     // Inject custom styles for the form popup
//     const style = document.createElement('style');
//     style.innerHTML = `
//       body {
//         background-color: #F6F7FA;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         margin: 0;
//         font-family: Arial, sans-serif;
//       }
//       .form-container {
//         background-color: white;
//         border-radius: 10px;
//         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         padding: 30px;
//         width: 400px;
//         max-width: 100%;
//         text-align: center;
//         position: relative;
//         z-index: 10001; /* Ensure the form is always on top 
//       }
//       .form-container h1 {
//         margin-bottom: 10px;
//         font-size: 24px;
//       }
//       .form-container h1 span {
//         color: #5200FF; 
//       }
//       .form-container p {
//         margin-bottom: 20px;
//         color: gray;
//       }
//       .form-container label {
//         display: block;
//         text-align: left;
//         margin: 10px 0 5px 0;
//         color: black;
//         font-weight: normal;
//       }
//       .form-container input, .form-container textarea {
//         width: 100%;
//         padding: 10px;
//         margin: 10px 0;
//         border: 1px solid #ccc;
//         border-radius: 5px;
//       }
//       .button-container {
//         display: flex;
//         justify-content: center;
//       }
//       .form-container button {
//         width: 100%;
//         padding: 10px;
//         color: white;
//         border: none;
//         border-radius: 5px;
//         cursor: pointer;
//         font-size: 16px;
//       }
//       .form-container button[type="submit"] {
//         background-color: #5200FF;
//       }
//       .form-container button[type="submit"]:hover {
//         background-color: #3e00cc; 
//       }
//     `;
//     document.head.appendChild(style);
//   }
  
//   function showPopup() {
//     document.getElementById('overlay').style.display = 'flex';
//   }
  
//   function hidePopup() {
//     document.getElementById('overlay').style.display = 'none';
//   }
//  // extensions.js

// Define ext_call_button globally
export const ext_call_button = {
  name: 'ext_call_button', // Extension name
  type: 'response', // Extension type indicating it handles responses
  match: ({ trace }) => trace.payload.name === 'ext_call_button', // Condition for when this extension is triggered
  render: ({ trace, element }) => {
    // Function to render the call button
    const callContainer = document.createElement('div'); // Create a container element dynamically

    // Set the inner HTML of the container to include a button
    callContainer.innerHTML = `
      <style>
        .call-button {
          border: none;
          color: black;
          padding: 10px;
          border-radius: 5px;
          width: 100%;
          cursor: pointer;
          font-size: 16px;
          border-radius: 10px 10px 10px 10px;
          background: white;
        }
      </style>

      <button class="call-button">Call Us Now</button>
    `;

    // Add an event listener to the button for handling the click event
    callContainer.querySelector('.call-button').addEventListener('click', function() {
      // Trigger the phone call using the tel: protocol
      window.location.href = "tel:+18187407094";
    });

    element.appendChild(callContainer); // Append the button to the specified DOM element
  },
};
  // Ensure the script is loaded
console.log('extensions.js loaded');

function show_pricing_form() {
  console.log('show_pricing_form called');

  // Check if the iframe already exists
  if (!document.getElementById("popup-6f72EvDPauC57dEtxrFi")) {
    console.log('Creating the iframe');
    
    // Create a new overlay element (gray background)
    const overlay = document.createElement("div");
    overlay.id = "popup-overlay";
    overlay.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.5);z-index:9998;";
    document.body.appendChild(overlay);

    // Create a new iframe element
    const formIframe = document.createElement("iframe");

    // Set iframe attributes
    formIframe.src = "https://api.leadconnectorhq.com/widget/form/6f72EvDPauC57dEtxrFi";
    formIframe.style = "display:block;width:500px;height:1000px;border:none;border-radius:20px;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:9999;";  // Center iframe and round borders
    formIframe.id = "popup-6f72EvDPauC57dEtxrFi";
    formIframe.setAttribute("data-layout", '{"id":"POPUP"}');
    formIframe.setAttribute("data-trigger-type", "alwaysShow");
    formIframe.setAttribute("data-activation-type", "alwaysActivated");
    formIframe.setAttribute("data-deactivation-type", "neverDeactivate");
    formIframe.setAttribute("data-form-name", "Pricing Pamphlet Capture Form");
    formIframe.title = "Pricing Pamphlet Capture Form";

    // Append the iframe to the body
    document.body.appendChild(formIframe);

    // Close the iframe and overlay when clicking outside the iframe
    overlay.addEventListener('click', function() {
      document.body.removeChild(formIframe); // Remove iframe
      document.body.removeChild(overlay);    // Remove overlay
    });

    console.log('Iframe and overlay appended to the body');
  } else {
    console.log('Iframe already exists, just displaying it');
    
    // If iframe already exists, just display it
    const formIframe = document.getElementById("popup-6f72EvDPauC57dEtxrFi");
    formIframe.style.display = "block";
  }
}








export const CalendlyExtension = {
  name: "Calendly",
  type: "effect",
  match: ({ trace }) => {
    // Ensure proper trace type or name is passed
    return (
      trace.type === "ext_calendly" || trace.payload.name === "ext_calendly"
    );
  },
  effect: ({ trace }) => {
    const url = trace.payload.url || 'https://calendly.com/stefanos-clearstack/clearstackai-discovery-call'; // Default URL fallback

    // Ensure Calendly widget is loaded before calling the popup
    if (window.Calendly && url) {
      // Inject custom style to ensure Calendly popup is always on top
      const style = document.createElement('style');
      style.innerHTML = `
        .calendly-popup, .calendly-overlay {
          z-index: 10000 !important;
        }
      `;
      document.head.appendChild(style);

      // Initialize Calendly popup
      Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly widget is not loaded or URL is missing.');
    }
  },
};
// __________________ POP FORM _________________________________________ //
export const t = {
  name: 'Forms',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_get_pricing' || trace.payload.name === 'ext_get_pricing',
  render: ({ trace, element }) => {
    createFormPopup();
    showPopup();
  },
};function createFormPopup() {
  // Check if popup already exists
  if (document.getElementById('overlay')) {
    return;
  }

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '10000'; // Ensure overlay is on top
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  document.body.appendChild(overlay);

  // Create popup
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.className = 'form-container'; // Add class for styling
  popup.style.zIndex = '10001'; // Ensure popup is above overlay
  popup.style.width = '400px'; // Set the container width as needed
  popup.style.backgroundColor = 'white'; // Ensure the container has a white background
  popup.style.borderRadius = '10px'; // Same rounded corner style as before
  popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  popup.style.padding = '30px';
  popup.style.height = '500px';
  overlay.appendChild(popup);

  // Embed the new form inside the popup
  const iframe = document.createElement('iframe');
  iframe.src = "https://api.leadconnectorhq.com/widget/form/6f72EvDPauC57dEtxrFi";
  iframe.style.width = '100%';
  iframe.style.height = '100%'; // Set iframe to take full popup height
  iframe.style.border = 'none';
  iframe.style.borderRadius = '0px';
  iframe.id = 'inline-6f72EvDPauC57dEtxrFi';
  iframe.setAttribute('data-layout', '{"id":"INLINE"}');
  iframe.setAttribute('data-trigger-type', 'alwaysShow');
  iframe.setAttribute('data-activation-type', 'alwaysActivated');
  iframe.setAttribute('data-deactivation-type', 'neverDeactivate');
  iframe.title = 'Pricing Pamphlet Capture Form -';

  popup.appendChild(iframe);

  // Add event listeners
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      hidePopup();
    }
  });

  // Inject custom styles for the form popup
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      background-color: #F6F7FA;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
    }
    .form-container {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      padding: 30px;
      width: 400px;
      max-width: 100%;
      text-align: center;
      position: relative;
      z-index: 10001; /* Ensure the form is always on top */
    }
  `;
  document.head.appendChild(style);
}
