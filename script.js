// Names data for email generation
const firstNames = [
    "rakesh", "mukesh", "suresh", "vijay", "arun", "sanjay", "amit", "rahul", "vikram", "naveen",
    "ajay", "anil", "ashok", "balaji", "chandan", "dinesh", "gopal", "hari", "hemant", "indrajit",
    "jagdish", "jatin", "jayesh", "jiten", "karan", "kishore", "lalit", "manish", "mayank", "mohan",
    "neeraj", "nitin", "pankaj", "prakash", "prashant", "prateek", "pravin", "prem", "rajesh", "ramesh",
    "ranjit", "ravindra", "rohit", "sachin", "sandeep", "sanjeev", "satish", "shankar", "shashank", "siddharth",
    "subhash", "sumit", "sundar", "suraj", "sushant", "tanmay", "umesh", "utkarsh", "varun", "vishal",
    "yogesh", "abhishek", "aditya", "akash", "alok", "aman", "anand", "aniket", "ankit", "anuj",
    "arjun", "ashish", "atul", "avinash", "ayush", "bharat", "bhavesh", "bipin", "chetan", "darshan",
    "deepak", "deependra", "devendra", "dharmendra", "dilip", "dipak", "divyesh", "gaurav", "girish", "gopal",
    "harsh", "himanshu", "hitesh", "ishaan", "ishwar", "jagannath", "jagdish", "jaswant", "jeevan", "kailash",
    "kalpesh", "kamal", "karan", "kartik", "kaushik", "kiran", "kishor", "krishna", "lalit", "lokesh",
    "mahendra", "manoj", "mayur", "milind", "mukul", "narendra", "navin", "neel", "nikhil", "nilesh",
    "niranjan", "nirmal", "nitesh", "omkar", "pankaj", "parth", "pawan", "prabhat", "pradeep", "prakash",
    "pranav", "prashant", "pratik", "pravin", "prem", "prithvi", "raj", "rajat", "rajeev", "rajendra",
    "rajiv", "rakesh", "ram", "raman", "ramesh", "randhir", "ranjit", "ravindra", "rohit", "sachin",
    "sagar", "sahil", "sanjay", "sanjeev", "santosh", "satish", "saurabh", "shailesh", "shankar", "shashank",
    "siddharth", "srikant", "subhash", "sumeet", "sumit", "sundar", "sunil", "suraj", "suresh", "sushant",
    "swapnil", "tanmay", "tarun", "umesh", "utkarsh", "vaibhav", "vijay", "vikas", "vimal", "vinay",
    "vipin", "vishal", "vishnu", "vivek", "yash", "yogesh", "yogendra", "yuvraj", "abhinav", "adarsh",
    "aditya", "ajay", "akash", "alok", "aman", "anand", "aniket", "ankit", "anuj", "arjun",
    "ashish", "atul", "avinash", "ayush", "bharat", "bhavesh", "bipin", "chetan", "darshan", "deepak",
    "deependra", "devendra", "dharmendra", "dilip", "dipak", "divyesh", "gaurav", "girish", "gopal", "harsh",
    "himanshu", "hitesh", "ishaan", "ishwar", "jagannath", "jagdish", "jaswant", "jeevan", "kailash", "kalpesh",
    "kamal", "karan", "kartik", "kaushik", "kiran", "kishor", "krishna", "lalit", "lokesh", "mahendra"
];

const lastNames = [
    "smith", "johnson", "williams", "brown", "jones", "miller", "davis", "garcia", "rodriguez", "wilson",
    "martinez", "anderson", "taylor", "thomas", "hernandez", "moore", "martin", "jackson", "thompson", "white",
    "lopez", "lee", "gonzalez", "harris", "clark", "lewis", "robinson", "walker", "perez", "hall",
    "young", "allen", "sanchez", "wright", "king", "scott", "green", "baker", "adams", "nelson",
    "hill", "ramirez", "campbell", "mitchell", "roberts", "carter", "phillips", "evans", "turner", "torres",
    "parker", "collins", "edwards", "stewart", "flores", "morris", "nguyen", "murphy", "rivera", "cook",
    "rogers", "morgan", "peterson", "cooper", "reed", "bailey", "bell", "gomez", "kelly", "howard",
    "ward", "cox", "diaz", "richardson", "wood", "watson", "brooks", "bennett", "gray", "james",
    "reyes", "cruz", "hughes", "price", "myers", "long", "foster", "sanders", "ross", "morales",
    "powell", "sullivan", "russell", "ortiz", "jenkins", "gutierrez", "perry", "butler", "barnes", "fisher",
    "henderson", "coleman", "simmons", "patterson", "jordan", "reynolds", "hamilton", "graham", "kim", "gonzales",
    "alexander", "ramos", "wallace", "griffin", "west", "cole", "hayes", "chavez", "gibson", "bryant",
    "ellis", "stevens", "murray", "ford", "marshall", "owens", "mcdonald", "harrison", "ruiz", "kennedy",
    "wells", "alvarez", "woods", "mendoza", "castillo", "olson", "webster", "washington", "tucker", "freeman",
    "burns", "henry", "vasquez", "snyder", "simpson", "crawford", "jimenez", "porter", "mason", "shaw",
    "gordon", "wagner", "hunter", "romero", "hicks", "dixon", "hunt", "palmer", "robertson", "black",
    "holmes", "stone", "meyer", "boyd", "mills", "warren", "fox", "rose", "rice", "moreno",
    "schmidt", "patel", "ferguson", "nichols", "herrera", "medina", "ryan", "fernandez", "weaver", "daniels",
    "stephens", "gardner", "payne", "kelley", "dunn", "pierce", "arnold", "tran", "spencer", "peters",
    "hawkins", "grant", "hansen", "castro", "hoffman", "hart", "elliott", "cunningham", "knight", "bradley",
    "carroll", "hudson", "duncan", "armstrong", "berry", "andrews", "johnston", "ray", "lane", "riley",
    "carpenter", "perkins", "aguilar", "silva", "richards", "willis", "matthews", "chapman", "lawrence", "garza",
    "vargas", "watkins", "wheeler", "larson", "carlson", "harper", "george", "greene", "burke", "guzman",
    "morrison", "munoz", "jacobs", "obrien", "lawson", "franklin", "lynch", "bishop", "carr", "salazar",
    "austin", "mendez", "gilbert", "jensen", "williamson", "montgomery", "harvey", "oliver", "howell", "dean",
    "hanson", "weber", "garrett", "sims", "burton", "fuller", "soto", "mccoy", "welch", "chen",
    "schultz", "walters", "reid", "fields", "walsh", "little", "fowler", "bowman", "davidson", "may",
    "day", "schneider", "newman", "brewer", "lucas", "holland", "wong", "banks", "santos", "curtis"
];

// DOM Elements
const domainInput = document.getElementById('domain');
const emailLengthInput = document.getElementById('emailLength');
const digitCountInput = document.getElementById('digitCount');
const emailCountInput = document.getElementById('emailCount');
const generateBtn = document.getElementById('generateBtn');
const emailList = document.getElementById('emailList');
const copyAllBtn = document.getElementById('copyAllBtn');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const toast = document.getElementById('toast');
const customNamesGroup = document.getElementById('customNamesGroup');
const customNamesList = document.getElementById('customNamesList');
const toggleAdvanced = document.getElementById('toggleAdvanced');
const advancedOptions = document.querySelector('.advanced-options');
const exportFormat = document.getElementById('exportFormat');
const defaultNamesRadio = document.getElementById('defaultNames');
const customNamesRadio = document.getElementById('customNames');
const settingsModal = document.getElementById('settingsModal');
const openSettingsBtn = document.getElementById('openSettings');
const closeSettingsBtn = document.querySelector('.close-settings');
const saveSettingsBtn = document.getElementById('saveSettingsBtn');
const clearSettingsBtn = document.getElementById('clearSettingsBtn');

// Store generated emails
let generatedEmails = new Set();

// Constants for storage
const SETTINGS_STORAGE_KEY = 'emailGeneratorSettings';
const EMAIL_HISTORY_KEY = 'emailGeneratorHistory';
const MAX_HISTORY_SIZE = 50000; // Maximum number of emails to store in history

// Load email history from localStorage
let emailHistory = new Set(JSON.parse(localStorage.getItem(EMAIL_HISTORY_KEY) || '[]'));

// Function to open settings modal
function openSettings() {
    settingsModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close settings modal
function closeSettings() {
    settingsModal.classList.remove('show');
    document.body.style.overflow = '';
}

// Function to save current settings
function saveSettings() {
    const settings = {
        domain: domainInput.value,
        emailLength: emailLengthInput.value,
        digitCount: digitCountInput.value,
        emailCount: emailCountInput.value,
        exportFormat: exportFormat.value,
        nameSource: defaultNamesRadio.checked ? 'default' : 'custom',
        customNames: customNamesList.value,
        advancedOptionsVisible: advancedOptions.style.display === 'block'
    };
    
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    showToast('Settings saved successfully!');
    closeSettings(); // Close the modal after saving
}

// Function to load saved settings
function loadSettings() {
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        domainInput.value = settings.domain || '';
        emailLengthInput.value = settings.emailLength || '12';
        digitCountInput.value = settings.digitCount || '3';
        emailCountInput.value = settings.emailCount || '5';
        exportFormat.value = settings.exportFormat || 'text';
        
        if (settings.nameSource === 'custom') {
            customNamesRadio.checked = true;
            customNamesGroup.style.display = 'block';
            customNamesList.value = settings.customNames || '';
        } else {
            defaultNamesRadio.checked = true;
            customNamesGroup.style.display = 'none';
        }
        
        if (settings.advancedOptionsVisible) {
            advancedOptions.style.display = 'block';
            toggleAdvanced.classList.add('active');
        }
    }
}

// Function to add email to history
function addToEmailHistory(email) {
    emailHistory.add(email);
    // Convert Set to Array for storage
    const historyArray = Array.from(emailHistory);
    // If history exceeds max size, remove oldest entries
    if (historyArray.length > MAX_HISTORY_SIZE) {
        historyArray.splice(0, historyArray.length - MAX_HISTORY_SIZE);
    }
    localStorage.setItem(EMAIL_HISTORY_KEY, JSON.stringify(historyArray));
}

// Function to clear email history
function clearEmailHistory() {
    emailHistory.clear();
    localStorage.removeItem(EMAIL_HISTORY_KEY);
    showToast('Email history cleared');
}

// Update clear settings function to include email history
function clearSettings() {
    localStorage.removeItem(SETTINGS_STORAGE_KEY);
    localStorage.removeItem(EMAIL_HISTORY_KEY);
    emailHistory.clear();
    location.reload();
}

// Event Listeners for settings modal
openSettingsBtn.addEventListener('click', openSettings);
closeSettingsBtn.addEventListener('click', closeSettings);
saveSettingsBtn.addEventListener('click', saveSettings);
clearSettingsBtn.addEventListener('click', clearSettings);

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        closeSettings();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsModal.classList.contains('show')) {
        closeSettings();
    }
});

// Event Listeners for new features
document.querySelector('input[name="nameSource"]').addEventListener('change', (e) => {
    customNamesGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
});

toggleAdvanced.addEventListener('click', () => {
    advancedOptions.style.display = advancedOptions.style.display === 'none' ? 'block' : 'none';
    toggleAdvanced.classList.toggle('active');
});

// Parse custom names list
function parseCustomNames() {
    if (document.querySelector('input[name="nameSource"]:checked').value !== 'custom') {
        return null;
    }

    const names = customNamesList.value.trim().split('\n')
        .map(line => {
            const parts = line.trim().split(/\s+/);
            return parts.length >= 2 ? {
                firstName: parts[0].toLowerCase(),
                lastName: parts[parts.length - 1].toLowerCase()
            } : null;
        })
        .filter(name => name !== null);

    return names.length > 0 ? names : null;
}

// Generate a single email address with duplicate check
function generateEmail(domain, maxLength, digitCount) {
    let attempts = 0;
    const maxAttempts = 50; // Maximum attempts to generate a unique email
    
    while (attempts < maxAttempts) {
        const customNames = parseCustomNames();
        let firstName, lastName;

        if (customNames) {
            const randomName = customNames[Math.floor(Math.random() * customNames.length)];
            firstName = randomName.firstName;
            lastName = randomName.lastName;
        } else {
            firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        }

        let username = firstName + lastName;
        const baseLength = username.length;
        const randomLength = maxLength - baseLength - digitCount;

        if (randomLength < 0) {
            username = username.slice(0, maxLength - digitCount);
        } else if (randomLength > 0) {
            username += generateRandomString(randomLength);
        }

        if (digitCount > 0) {
            username += generateRandomDigits(digitCount);
        }

        const email = `${username}@${domain}`;
        
        // Check if email exists in history
        if (!emailHistory.has(email)) {
            addToEmailHistory(email);
            return email;
        }
        
        attempts++;
    }
    
    // If we couldn't generate a unique email after max attempts
    showToast('Could not generate a unique email. Try different parameters.');
    return null;
}

// Export emails in selected format
function exportEmails() {
    if (generatedEmails.size === 0) {
        showToast('No emails to export');
        return;
    }

    const emails = Array.from(generatedEmails);
    let content = '';
    let filename = 'generated-emails';
    let type = 'text/plain';

    switch(exportFormat.value) {
        case 'csv':
            content = 'Email Address\n' + emails.join('\n');
            filename += '.csv';
            type = 'text/csv';
            break;
        case 'json':
            content = JSON.stringify({ emails }, null, 2);
            filename += '.json';
            type = 'application/json';
            break;
        default:
            content = emails.join('\n');
            filename += '.txt';
    }

    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Emails exported successfully!');
}

// Utility functions
function isValidDomain(domain) {
    const domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return domainPattern.test(domain);
}

function generateRandomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function generateRandomDigits(count) {
    return Array.from({ length: count }, () => Math.floor(Math.random() * 10)).join('');
}

function showToast(message, duration = 3000) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Update generate emails function
function generateEmails() {
    const domain = domainInput.value.trim();
    const emailLength = parseInt(emailLengthInput.value);
    const digitCount = parseInt(digitCountInput.value);
    const emailCount = parseInt(emailCountInput.value);
    
    // Validation
    if (!domain) {
        showToast('Please enter a domain name');
        return;
    }
    
    if (!isValidDomain(domain)) {
        showToast('Please enter a valid domain name');
        return;
    }
    
    // Clear previous results
    emailList.innerHTML = '';
    generatedEmails.clear();
    
    // Generate new emails
    let attempts = 0;
    const maxAttempts = emailCount * 3; // Increased attempts for unique generation
    
    while (generatedEmails.size < emailCount && attempts < maxAttempts) {
        const email = generateEmail(domain, emailLength, digitCount);
        if (email && !generatedEmails.has(email)) {
            generatedEmails.add(email);
            emailList.appendChild(createEmailItem(email));
        }
        attempts++;
    }
    
    if (generatedEmails.size < emailCount) {
        showToast('Could not generate all unique emails. Try different parameters or clear email history.');
    }
}

// Create email item element
function createEmailItem(email) {
    const div = document.createElement('div');
    div.className = 'email-item';
    
    const emailText = document.createElement('span');
    emailText.textContent = email;
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
    copyBtn.title = 'Copy to clipboard';
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(email)
            .then(() => showToast('Email copied to clipboard!'))
            .catch(() => showToast('Failed to copy email'));
    };
    
    div.appendChild(emailText);
    div.appendChild(copyBtn);
    return div;
}

// Copy all emails
function copyAllEmails() {
    if (generatedEmails.size === 0) {
        showToast('No emails to copy');
        return;
    }
    
    const emailText = Array.from(generatedEmails).join('\n');
    navigator.clipboard.writeText(emailText)
        .then(() => showToast('All emails copied to clipboard!'))
        .catch(() => showToast('Failed to copy emails'));
}

// Event Listeners
generateBtn.addEventListener('click', generateEmails);
copyAllBtn.addEventListener('click', copyAllEmails);
clearBtn.addEventListener('click', clearEmails);
exportBtn.addEventListener('click', exportEmails);

// Input validation
emailLengthInput.addEventListener('input', () => {
    let value = parseInt(emailLengthInput.value);
    
    // Allow empty input while typing
    if (emailLengthInput.value === '') {
        return;
    }
    
    // Only validate on valid numbers
    if (!isNaN(value)) {
        // Store the cursor position
        const cursorPos = emailLengthInput.selectionStart;
        
        // Apply limits only when the input loses focus or on Enter key
        emailLengthInput.addEventListener('blur', function validateOnBlur() {
            value = parseInt(emailLengthInput.value);
            if (value < 8) {
                emailLengthInput.value = '8';
            } else if (value > 30) {
                emailLengthInput.value = '18';
            }
            // Remove the blur event listener after it's been triggered
            emailLengthInput.removeEventListener('blur', validateOnBlur);
        });

        emailLengthInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (value < 8) {
                    emailLengthInput.value = '8';
                } else if (value > 18) {
                    emailLengthInput.value = '18';
                }
                emailLengthInput.blur();
            }
        });

        // Restore cursor position
        emailLengthInput.setSelectionRange(cursorPos, cursorPos);
    }
});

digitCountInput.addEventListener('input', () => {
    let value = parseInt(digitCountInput.value);
    
    // Allow empty input while typing
    if (digitCountInput.value === '') {
        return;
    }
    
    // Only validate on valid numbers
    if (!isNaN(value)) {
        // Store the cursor position
        const cursorPos = digitCountInput.selectionStart;
        
        // Apply limits only when the input loses focus or on Enter key
        digitCountInput.addEventListener('blur', function validateOnBlur() {
            value = parseInt(digitCountInput.value);
            if (value < 0) {
                digitCountInput.value = '0';
            } else if (value > 5) {
                digitCountInput.value = '5';
            }
            // Remove the blur event listener after it's been triggered
            digitCountInput.removeEventListener('blur', validateOnBlur);
        });

        digitCountInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (value < 0) {
                    digitCountInput.value = '0';
                } else if (value > 5) {
                    digitCountInput.value = '5';
                }
                digitCountInput.blur();
            }
        });

        // Restore cursor position
        digitCountInput.setSelectionRange(cursorPos, cursorPos);
    }
});

emailCountInput.addEventListener('input', () => {
    let value = parseInt(emailCountInput.value);
    
    // Allow empty input while typing
    if (emailCountInput.value === '') {
        return;
    }
    
    // Only validate on valid numbers
    if (!isNaN(value)) {
        // Store the cursor position
        const cursorPos = emailCountInput.selectionStart;
        
        // Apply limits only when the input loses focus or on Enter key
        emailCountInput.addEventListener('blur', function validateOnBlur() {
            value = parseInt(emailCountInput.value);
            if (value < 1) {
                emailCountInput.value = '1';
            } else if (value > 50) {
                emailCountInput.value = '50';
            }
            // Remove the blur event listener after it's been triggered
            emailCountInput.removeEventListener('blur', validateOnBlur);
        });

        emailCountInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (value < 1) {
                    emailCountInput.value = '1';
                } else if (value > 50) {
                    emailCountInput.value = '50';
                }
                emailCountInput.blur();
            }
        });

        // Restore cursor position
        emailCountInput.setSelectionRange(cursorPos, cursorPos);
    }
});

// Mobile-specific functionality
function handleMobileKeyboard() {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            // Add class when keyboard is likely to be shown
            settingsModal.classList.add('keyboard-open');
            // Scroll the input into view with a delay
            setTimeout(() => input.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
        });
        
        input.addEventListener('blur', () => {
            // Remove class when keyboard is likely to be hidden
            settingsModal.classList.remove('keyboard-open');
        });
    });
}

// Detect if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Handle mobile-specific setup
function setupMobileEnvironment() {
    if (isMobileDevice()) {
        handleMobileKeyboard();
        
        // Prevent double-tap zoom on buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                button.click();
            });
        });
        
        // Add touch feedback
        document.querySelectorAll('.primary-btn, .secondary-btn, .copy-btn').forEach(button => {
            button.addEventListener('touchstart', () => {
                button.style.opacity = '0.7';
            });
            
            button.addEventListener('touchend', () => {
                button.style.opacity = '1';
            });
        });
        
        // Improve scrolling experience
        document.querySelectorAll('.email-list, .settings-body').forEach(element => {
            element.style.WebkitOverflowScrolling = 'touch';
        });
    }
}

// Add clear history button to the UI
function addClearHistoryButton() {
    const clearHistoryBtn = document.createElement('button');
    clearHistoryBtn.className = 'secondary-btn';
    clearHistoryBtn.innerHTML = '<i class="fas fa-history"></i> Clear History';
    clearHistoryBtn.onclick = clearEmailHistory;
    
    // Add to settings buttons
    const settingsButtons = document.querySelector('.settings-buttons');
    if (settingsButtons) {
        settingsButtons.appendChild(clearHistoryBtn);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupMobileEnvironment();
    addClearHistoryButton();
}); 