class CreativityGenerator {
    constructor() {
        // Initialize users from localStorage or create empty object
        const savedUsers = localStorage.getItem('allUsers');
        this.users = savedUsers ? JSON.parse(savedUsers) : {};
        
        this.questions = [
            {
                id: 'mood',
                text: 'How do you feel today?',
                options: [
                    { text: 'Energetic', icon: 'fa-bolt' },
                    { text: 'Calm', icon: 'fa-peace' },
                    { text: 'Tired', icon: 'fa-moon' },
                    { text: 'Inspired', icon: 'fa-lightbulb' },
                    { text: 'Depressed', icon: 'fa-cloud-rain' }
                ]
            },
            {
                id: 'time',
                text: 'How much time do you have?',
                options: [
                    { text: '5-10 minutes', icon: 'fa-clock' },
                    { text: '15-30 minutes', icon: 'fa-hourglass-half' },
                    { text: '30+ minutes', icon: 'fa-hourglass' }
                ]
            },
            {
                id: 'preference',
                text: 'What type of activity would you prefer?',
                options: [
                    { text: 'Creative', icon: 'fa-palette' },
                    { text: 'Physical', icon: 'fa-running' },
                    { text: 'Both', icon: 'fa-paint-brush' }
                ]
            }
        ];

        this.creativeTasks = {
            energetic: {
                '5-10 minutes': {
                    'Creative': [
                        'Write a haiku about your current mood',
                        'Create a short story in exactly 50 words',
                        'Write three alternative endings to your favorite book'
                    ],
                    'Physical': [
                        'Do 20 push-ups',
                        'Run in place for 5 minutes',
                        'Do 30 jumping jacks',
                        'Do 15 burpees',
                        'Do 40 mountain climbers',
                        'Do 25 high knees',
                        'Do 20 squat jumps',
                        'Do 30 seconds plank, 30 seconds rest, repeat 3 times',
                        'Do 20 lunges (10 each leg)',
                        'Do 15 tuck jumps'
                    ],
                    'Both': [
                        'Write a poem while doing squats',
                        'Create a story while walking',
                        'Draw while doing stretches'
                    ]
                },
                '15-30 minutes': {
                    'Creative': [
                        'Write a letter to your future self',
                        'Create a short story about a time traveler',
                        'Write a recipe for happiness'
                    ],
                    'Physical': [
                        'Go for a 15-minute run',
                        'Do a full body workout',
                        'Practice yoga for 20 minutes'
                    ],
                    'Both': [
                        'Create a storyboard while doing cardio',
                        'Design a workout routine',
                        'Write and perform a dance routine'
                    ]
                },
                '30+ minutes': {
                    'Creative': [
                        'Write a short story about a day in the life of your pet',
                        'Create a detailed character profile',
                        'Write a screenplay for a 5-minute film'
                    ],
                    'Physical': [
                        'Go for a 30-minute run',
                        'Do a complete workout session',
                        'Practice martial arts or dance'
                    ],
                    'Both': [
                        'Create a workout playlist and exercise to it',
                        'Design and follow a circuit training routine',
                        'Write a fitness blog post while doing cardio'
                    ]
                }
            },
            calm: {
                '5-10 minutes': {
                    'Creative': [
                        'Write a gratitude list',
                        'Create a mindfulness poem',
                        'Write three positive affirmations'
                    ],
                    'Physical': [
                        'Do 10 minutes of gentle stretching',
                        'Practice deep breathing exercises',
                        'Do 5 minutes of tai chi'
                    ],
                    'Both': [
                        'Write affirmations while stretching',
                        'Create a peaceful meditation space',
                        'Draw while doing yoga poses'
                    ]
                },
                '15-30 minutes': {
                    'Creative': [
                        'Write a meditation script',
                        'Create a nature-inspired poem',
                        'Write about your perfect day'
                    ],
                    'Physical': [
                        'Do a gentle yoga session',
                        'Take a mindful walk',
                        'Practice qigong'
                    ],
                    'Both': [
                        'Create a nature journal while walking',
                        'Design and follow a gentle workout',
                        'Write and practice a meditation routine'
                    ]
                },
                '30+ minutes': {
                    'Creative': [
                        'Write a personal reflection',
                        'Create a collection of haikus',
                        'Write about your life philosophy'
                    ],
                    'Physical': [
                        'Do a complete yoga session',
                        'Take a long mindful walk',
                        'Practice gentle martial arts'
                    ],
                    'Both': [
                        'Create a mindfulness journal while walking',
                        'Design and follow a peaceful workout',
                        'Write and practice a wellness routine'
                    ]
                }
            },
            tired: {
                '5-10 minutes': {
                    'Creative': [
                        'Write three things you\'re grateful for',
                        'Create a simple acrostic poem',
                        'Write a positive note to yourself'
                    ],
                    'Physical': [
                        'Do 5 minutes of gentle stretching',
                        'Take a short walk',
                        'Do light chair exercises'
                    ],
                    'Both': [
                        'Write affirmations while stretching',
                        'Create a gentle movement routine',
                        'Draw while doing light exercises'
                    ]
                },
                '15-30 minutes': {
                    'Creative': [
                        'Write about what makes you smile',
                        'Create a list of your favorite things',
                        'Write a letter to someone you care about'
                    ],
                    'Physical': [
                        'Do a gentle yoga session',
                        'Take a short walk',
                        'Do light stretching exercises'
                    ],
                    'Both': [
                        'Create a comfort journal while walking',
                        'Design and follow a gentle routine',
                        'Write and practice gentle movements'
                    ]
                },
                '30+ minutes': {
                    'Creative': [
                        'Write about your dreams and aspirations',
                        'Create a collection of positive thoughts',
                        'Write about what inspires you'
                    ],
                    'Physical': [
                        'Take a long gentle walk',
                        'Do a complete gentle workout',
                        'Practice restorative yoga'
                    ],
                    'Both': [
                        'Create a gentle movement journal',
                        'Design and follow a restorative routine',
                        'Write and practice gentle exercises'
                    ]
                }
            },
            inspired: {
                '5-10 minutes': {
                    'Creative': [
                        'Write a burst of creative ideas',
                        'Create a quick story prompt',
                        'Write about what excites you'
                    ],
                    'Physical': [
                        'Do 20 high-energy jumping jacks',
                        'Run in place for 5 minutes',
                        'Do a quick dance routine'
                    ],
                    'Both': [
                        'Write and perform a dance',
                        'Create a workout playlist',
                        'Draw while doing cardio'
                    ]
                },
                '15-30 minutes': {
                    'Creative': [
                        'Write a short story about your inspiration',
                        'Create a collection of creative prompts',
                        'Write about your creative journey'
                    ],
                    'Physical': [
                        'Do a high-energy workout',
                        'Go for a run',
                        'Practice energetic dance'
                    ],
                    'Both': [
                        'Create a project proposal while exercising',
                        'Design and follow an energetic routine',
                        'Write and perform a creative workout'
                    ]
                },
                '30+ minutes': {
                    'Creative': [
                        'Write a detailed creative concept',
                        'Create a series of story ideas',
                        'Write about your creative process'
                    ],
                    'Physical': [
                        'Do a complete workout session',
                        'Go for a long run',
                        'Practice intense martial arts'
                    ],
                    'Both': [
                        'Create a creative workout plan',
                        'Design and follow an intense routine',
                        'Write and practice a creative fitness routine'
                    ]
                }
            },
            depressed: {
                '5-10 minutes': {
                    'Creative': [
                        'Write three things you\'re grateful for',
                        'Create a list of your favorite memories',
                        'Write a letter to your future self'
                    ],
                    'Physical': [
                        'Take a short walk outside',
                        'Do gentle stretching exercises',
                        'Practice deep breathing for 5 minutes'
                    ],
                    'Both': [
                        'Write affirmations while walking',
                        'Create a gratitude journal while stretching',
                        'Draw your happy place while doing breathing exercises'
                    ]
                },
                '15-30 minutes': {
                    'Creative': [
                        'Write about what makes you smile',
                        'Create a list of your achievements',
                        'Write a story about overcoming a challenge'
                    ],
                    'Physical': [
                        'Take a longer walk in nature',
                        'Do a gentle yoga session',
                        'Practice mindful movement'
                    ],
                    'Both': [
                        'Create a nature journal while walking',
                        'Write and practice self-care activities',
                        'Design and follow a gentle movement routine'
                    ]
                },
                '30+ minutes': {
                    'Creative': [
                        'Write about your dreams and aspirations',
                        'Create a collection of positive thoughts',
                        'Write about what inspires you'
                    ],
                    'Physical': [
                        'Take a long walk in nature',
                        'Do a complete gentle workout',
                        'Practice restorative yoga'
                    ],
                    'Both': [
                        'Create a gentle movement journal',
                        'Design and follow a restorative routine',
                        'Write and practice gentle exercises'
                    ]
                }
            }
        };

        this.currentQuestion = 0;
        this.answers = {};
        this.history = JSON.parse(localStorage.getItem('creativityHistory')) || [];
        
        // Add new properties for time and weather
        this.timeUpdateInterval = null;
        this.weatherUpdateInterval = null;
        this.userLocation = null;
        
        // Add authentication properties
        this.currentUser = null;
        
        // Initialize time and weather features
        this.initTimeAndWeather();
        
        // Initialize authentication UI
        this.initAuth();
        
        this.init();
    }

    init() {
        this.renderQuestion();
        this.renderHistory();
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        const root = document.getElementById('root');
        
        let html = `
            <div class="container">
                <h1>Daily Creativity Generator</h1>
                <div class="card">
                    <div class="question">
                        <h2>${question.text}</h2>
                        <div class="options">
                            ${question.options.map(option => `
                                <button onclick="app.selectOption('${question.id}', '${option.text}')" class="option-button">
                                    <i class="fas ${option.icon}"></i>
                                    <span>${option.text}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        root.innerHTML = html;
    }

    selectOption(questionId, option) {
        this.answers[questionId] = option;
        
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.renderQuestion();
        } else {
            this.generateCreativeTask();
        }
    }

    generateCreativeTask() {
        const mood = this.answers.mood.toLowerCase();
        const time = this.answers.time;
        const preference = this.answers.preference;
        
        // Generate task dynamically based on mood, time, and preference
        const task = this.generateDynamicTask(mood, time, preference);
        
        const taskData = {
            date: new Date().toLocaleDateString(),
            mood,
            time,
            preference,
            task: task
        };
        
        // Update user history if logged in
        if (this.currentUser) {
            this.users[this.currentUser].history.unshift(taskData);
            localStorage.setItem('allUsers', JSON.stringify(this.users));
        }
        
        // Update local history
        this.history.unshift(taskData);
        localStorage.setItem('creativityHistory', JSON.stringify(this.history));
        
        this.renderTask(taskData);
    }

    generateDynamicTask(mood, time, preference) {
        // Base exercises and modifiers
        const exercises = {
            cardio: ['run', 'jog', 'walk', 'dance', 'jump', 'swim', 'bike', 'skip'],
            strength: ['push-ups', 'squats', 'lunges', 'plank', 'crunches', 'burpees', 'mountain climbers'],
            flexibility: ['stretch', 'yoga', 'tai chi', 'pilates', 'dance moves', 'mobility exercises'],
            creative: ['write', 'draw', 'paint', 'compose', 'design', 'create', 'sketch', 'craft']
        };

        // Intensity modifiers based on mood
        const intensityModifiers = {
            energetic: ['high-intensity', 'energetic', 'powerful', 'dynamic', 'vigorous'],
            calm: ['gentle', 'mindful', 'peaceful', 'relaxed', 'smooth'],
            tired: ['light', 'easy', 'gentle', 'simple', 'relaxed'],
            inspired: ['creative', 'expressive', 'dynamic', 'energetic', 'innovative'],
            depressed: ['gentle', 'mindful', 'supportive', 'nurturing', 'calm']
        };

        // Time-based modifiers
        const timeModifiers = {
            '5-10 minutes': {
                duration: '5-10 minutes',
                reps: ['10-15', '15-20', '20-25', '25-30', '30-45 seconds']
            },
            '15-30 minutes': {
                duration: '15-30 minutes',
                reps: ['30-40', '40-50', '50-60', '1-2 sets', '2-3 sets']
            },
            '30+ minutes': {
                duration: '30+ minutes',
                reps: ['45-60', '60-90', '2-3 sets', '3-4 sets', 'complete session']
            }
        };

        // Generate task based on preference
        if (preference === 'Physical') {
            const exerciseType = Object.keys(exercises)[Math.floor(Math.random() * Object.keys(exercises).length)];
            const exercise = exercises[exerciseType][Math.floor(Math.random() * exercises[exerciseType].length)];
            const intensity = intensityModifiers[mood][Math.floor(Math.random() * intensityModifiers[mood].length)];
            const reps = timeModifiers[time].reps[Math.floor(Math.random() * timeModifiers[time].reps.length)];
            
            return `Do ${reps} ${intensity} ${exercise}`;
        } else if (preference === 'Creative') {
            const creativeAction = exercises.creative[Math.floor(Math.random() * exercises.creative.length)];
            const intensity = intensityModifiers[mood][Math.floor(Math.random() * intensityModifiers[mood].length)];
            
            return `${intensity} ${creativeAction} for ${timeModifiers[time].duration}`;
        } else { // Both
            const exerciseType = Object.keys(exercises)[Math.floor(Math.random() * Object.keys(exercises).length)];
            const exercise = exercises[exerciseType][Math.floor(Math.random() * exercises[exerciseType].length)];
            const creativeAction = exercises.creative[Math.floor(Math.random() * exercises.creative.length)];
            const intensity = intensityModifiers[mood][Math.floor(Math.random() * intensityModifiers[mood].length)];
            
            return `While doing ${intensity} ${exercise}, ${creativeAction} for ${timeModifiers[time].duration}`;
        }
    }

    renderTask(taskData) {
        const root = document.getElementById('root');
        
        let html = `
            <div class="container">
                <h1>Your Creative Task</h1>
                <div class="card">
                    <div class="creative-task">
                        <h2>${taskData.task}</h2>
                        <p>Based on your mood: ${taskData.mood}</p>
                        <p>Time available: ${taskData.time}</p>
                        <p>Preference: ${taskData.preference}</p>
                    </div>
                    <button onclick="app.startOver()" style="margin-top: 1rem;">Start Over</button>
                </div>
                <div class="history">
                    <h2>Previous Tasks</h2>
                    ${this.history.slice(1).map(item => `
                        <div class="history-item">
                            <p><strong>${item.date}</strong></p>
                            <p>${item.task}</p>
                            <p>Mood: ${item.mood} | Time: ${item.time} | Preference: ${item.preference}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        root.innerHTML = html;
    }

    renderHistory() {
        const historyContainer = document.querySelector('.history');
        if (historyContainer) {
            historyContainer.innerHTML = `
                <h2>Previous Tasks</h2>
                ${this.history.map(item => `
                    <div class="history-item">
                        <p><strong>${item.date}</strong></p>
                        <p>${item.task}</p>
                        <p>Mood: ${item.mood} | Time: ${item.time} | Preference: ${item.preference}</p>
                    </div>
                `).join('')}
            `;
        }
    }

    startOver() {
        this.currentQuestion = 0;
        this.answers = {};
        this.renderQuestion();
    }

    initTimeAndWeather() {
        // Get user's location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    this.updateWeather();
                    this.startWeatherUpdates();
                },
                error => {
                    console.error("Error getting location:", error);
                    this.updateWeatherWithError();
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            this.updateWeatherWithError();
        }

        // Start time updates immediately
        this.updateTime();
        this.startTimeUpdates();
    }

    updateTime() {
        const now = new Date();
        const timeElement = document.getElementById('current-time');
        
        if (timeElement) {
            const timeString = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            timeElement.textContent = timeString;
        }
    }

    startTimeUpdates() {
        this.timeUpdateInterval = setInterval(() => this.updateTime(), 1000);
    }

    async updateWeather() {
        if (!this.userLocation) {
            console.log('No location data available');
            return;
        }

        const weatherElement = document.getElementById('weather');
        if (!weatherElement) {
            console.log('Weather element not found');
            return;
        }

        try {
            console.log('Fetching weather for location:', this.userLocation);
            // Using OpenWeatherMap API with provided API key
            const API_KEY = '2a09b68b474a63901243b3099b10cebf';
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.userLocation.latitude}&lon=${this.userLocation.longitude}&appid=${API_KEY}&units=metric`;
            console.log('API URL:', url);

            const response = await fetch(url);
            console.log('API Response status:', response.status);

            if (!response.ok) {
                throw new Error(`Weather data not available: ${response.status}`);
            }

            const data = await response.json();
            console.log('Weather data received:', data);
            
            // Format weather information
            const weatherHTML = `
                <div class="weather-info">
                    <div class="temperature">${Math.round(data.main.temp)}°C</div>
                    <div class="conditions">${data.weather[0].description}</div>
                    <div class="details">
                        <span>Humidity: ${data.main.humidity}%</span>
                        <span>Wind: ${Math.round(data.wind.speed)} m/s</span>
                    </div>
                </div>
            `;

            weatherElement.innerHTML = weatherHTML;
        } catch (error) {
            console.error('Error fetching weather:', error);
            this.updateWeatherWithError();
        }
    }

    updateWeatherWithError() {
        const weatherElement = document.getElementById('weather');
        if (weatherElement) {
            weatherElement.innerHTML = `
                <div class="weather-error">
                    <p>Weather information is currently unavailable.</p>
                    <button onclick="app.requestLocation()">Enable Location</button>
                </div>
            `;
        }
    }

    startWeatherUpdates() {
        // Update weather every 30 minutes
        this.weatherUpdateInterval = setInterval(() => this.updateWeather(), 30 * 60 * 1000);
    }

    initAuth() {
        // Get DOM elements
        const modal = document.getElementById('authModal');
        const signInBtn = document.getElementById('signInBtn');
        const signUpBtn = document.getElementById('signUpBtn');
        const historyBtn = document.getElementById('historyBtn');
        const signOutBtn = document.getElementById('signOutBtn');
        const closeBtn = document.querySelector('.close');
        const signInForm = document.getElementById('signInForm');
        const signUpForm = document.getElementById('signUpForm');

        // Event listeners
        signInBtn.addEventListener('click', () => this.showAuthModal('signIn'));
        signUpBtn.addEventListener('click', () => this.showAuthModal('signUp'));
        signOutBtn.addEventListener('click', () => this.handleSignOut());
        closeBtn.addEventListener('click', () => this.hideAuthModal());
        window.addEventListener('click', (e) => {
            if (e.target === modal) this.hideAuthModal();
        });

        // Form submission handlers
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignIn(e);
        });

        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignUp(e);
        });

        historyBtn.addEventListener('click', () => this.showUserHistory());

        // Check if user is already logged in
        this.checkAuthStatus();
    }

    showAuthModal(type) {
        const modal = document.getElementById('authModal');
        const signInForm = document.getElementById('signInForm');
        const signUpForm = document.getElementById('signUpForm');

        modal.style.display = 'block';
        if (type === 'signIn') {
            signInForm.style.display = 'flex';
            signUpForm.style.display = 'none';
        } else {
            signInForm.style.display = 'none';
            signUpForm.style.display = 'flex';
        }
    }

    hideAuthModal() {
        const modal = document.getElementById('authModal');
        modal.style.display = 'none';
    }

    handleSignIn(e) {
        const email = e.target[0].value;
        const password = e.target[1].value;

        // Get the latest users data
        const savedUsers = localStorage.getItem('allUsers');
        if (savedUsers) {
            this.users = JSON.parse(savedUsers);
        }

        console.log('Attempting login with:', email); // Debug log
        console.log('Available users:', this.users); // Debug log

        if (this.users[email] && this.users[email].password === password) {
            this.currentUser = email;
            localStorage.setItem('currentUser', email);
            localStorage.setItem('allUsers', JSON.stringify(this.users));
            this.updateAuthUI();
            this.hideAuthModal();
            alert('Successfully signed in!');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    }

    handleSignUp(e) {
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const confirmPassword = e.target[3].value;

        // Get the latest users data
        const savedUsers = localStorage.getItem('allUsers');
        if (savedUsers) {
            this.users = JSON.parse(savedUsers);
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (this.users[email]) {
            alert('Email already registered');
            return;
        }

        // Create new user
        this.users[email] = {
            username,
            password,
            history: [],
            createdAt: new Date().toISOString()
        };

        // Save everything
        localStorage.setItem('allUsers', JSON.stringify(this.users));
        localStorage.setItem('currentUser', email);
        this.currentUser = email;

        console.log('New user created:', email); // Debug log
        console.log('All users:', this.users); // Debug log

        this.updateAuthUI();
        this.hideAuthModal();
        alert('Successfully signed up!');
    }

    handleSignOut() {
        if (this.currentUser) {
            // Save current state before logging out
            localStorage.setItem('allUsers', JSON.stringify(this.users));
        }
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.updateAuthUI();
        this.startOver();
        
        console.log('User signed out'); // Debug log
        console.log('Saved users:', localStorage.getItem('allUsers')); // Debug log
    }

    checkAuthStatus() {
        // Get the latest users data
        const savedUsers = localStorage.getItem('allUsers');
        if (savedUsers) {
            this.users = JSON.parse(savedUsers);
        }
        
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser && this.users[savedUser]) {
            this.currentUser = savedUser;
            this.updateAuthUI();
            console.log('User session restored:', savedUser); // Debug log
        } else {
            this.currentUser = null;
            this.updateAuthUI();
            console.log('No valid session found'); // Debug log
        }
    }

    updateAuthUI() {
        const signInBtn = document.getElementById('signInBtn');
        const signUpBtn = document.getElementById('signUpBtn');
        const historyBtn = document.getElementById('historyBtn');
        const signOutBtn = document.getElementById('signOutBtn');

        if (this.currentUser) {
            signInBtn.style.display = 'none';
            signUpBtn.style.display = 'none';
            historyBtn.style.display = 'flex';
            signOutBtn.style.display = 'flex';
        } else {
            signInBtn.style.display = 'flex';
            signUpBtn.style.display = 'flex';
            historyBtn.style.display = 'none';
            signOutBtn.style.display = 'none';
        }
    }

    showUserHistory() {
        if (!this.currentUser) return;

        const userHistory = this.users[this.currentUser].history;
        const root = document.getElementById('root');
        
        let html = `
            <div class="container">
                <h1>Your History</h1>
                <div class="card">
                    <div class="history-list">
                        ${userHistory.map(item => `
                            <div class="history-item">
                                <p><strong>${item.date}</strong></p>
                                <p>${item.task}</p>
                                <p>Mood: ${item.mood} | Time: ${item.time} | Preference: ${item.preference}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button onclick="app.startOver()" style="margin-top: 1rem;">Back to Generator</button>
                </div>
            </div>
        `;
        
        root.innerHTML = html;
    }
}

const app = new CreativityGenerator(); 