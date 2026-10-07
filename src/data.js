// All site content lives here — edit this file to update the site.

export const company = {
  name: 'Desert Iron Technologies',
  headline: 'We build apps that ship.',
  platforms: 'web · iOS · android · macOS',
  pitch:
    'Desert Iron Technologies is an independent Arizona software company building custom web and mobile apps. We design, build and launch our own products, and we can do the same for yours.',
}

export const founder = {
  name: 'Travis Wiley',
  title: 'Founder & Lead Developer · Navy and Army Veteran',
  bio: [
    'I started Desert Iron to build software the way I wanted to use it: fast, clear, and actually finished. I handle every layer of a product, from the database schema and security rules to the apps people tap on every day.',
    'Stryde, FitCrew and IntelliMove are our own products. Each went from idea to working product fast, built on real data and a single shared engine. Client projects get the same approach.',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/tswiley/',
    github: 'https://github.com/tswiley13',
    resume: '', // optional: link to a current résumé PDF
  },
}

// Contact form via FormSubmit (formsubmit.co, no account needed). Put the email that should
// receive messages here; the first submission sends a one-time activation link to that inbox.
// After activating, swap the email for the random alias FormSubmit gives you to keep it private.
// While it's empty the contact section shows direct links instead of a form.
export const CONTACT_FORM_EMAIL = 'hello@desertirontech.com'

export const services = [
  { icon: '▯', title: 'Mobile Apps', text: 'iOS and Android apps from one codebase, including Apple Health, widgets and Live Activities.' },
  { icon: '▣', title: 'Web Apps & Dashboards', text: 'Fast, installable web apps, customer portals and internal tools that work on any screen.' },
  { icon: '⛁', title: 'Backend & Integrations', text: 'Secure databases, user accounts, realtime features, and connections to services like Plaid and AI models.' },
  { icon: '↗', title: 'MVPs for Startups', text: 'Turn an idea into a working product you can put in front of users, then grow it from there.' },
]

// A real sequence, so these are numbered on the page.
export const process = [
  { title: 'Scope', text: 'We talk through the problem, your users and your budget, then agree on a fixed scope and price.' },
  { title: 'Design', text: 'Screen designs you can click through before any code is written.' },
  { title: 'Build', text: 'Working builds every week, so you see progress and can steer early.' },
  { title: 'Launch & Support', text: 'App Store and web launch, then ongoing maintenance and updates if you want them.' },
]

// Answers here are promises to clients — keep them accurate.
export const faq = [
  {
    q: 'How much does an app cost?',
    a: 'It depends on scope. After a free scoping call you get a fixed quote, so the price doesn’t change unless the scope does.',
  },
  {
    q: 'How long does it take?',
    a: 'Our own products went from idea to launch in three to six months. A focused first version is often faster, and you see working builds every week along the way.',
  },
  {
    q: 'Who owns the code?',
    a: 'You do. When the project is paid for, you get the full source code and every account it runs on.',
  },
  {
    q: 'Do you use AI?',
    a: 'Yes. Modern AI coding tools let us build faster and charge less than a traditional agency. Every line is still reviewed, tested and owned by us, and we stand behind it.',
  },
  {
    q: 'What happens after launch?',
    a: 'Apps need updates as phones, browsers and app store rules change. We offer monthly maintenance plans, or we hand everything over to your team.',
  },
]

export const stack = ['TypeScript', 'React', 'React Native', 'Expo', 'Next.js', 'SwiftUI', 'Supabase', 'PostgreSQL', 'Plaid', 'Claude API', 'Vercel']

// Paths in /public resolve relative to the site root.
const img = (f) => `${import.meta.env.BASE_URL}projects/${f}`

// Products. Media layout: 'browser' shows one wide screenshot, 'phones' shows up to 3 phone shots.
export const projects = [
  {
    name: 'Stryde',
    icon: img('stryde-icon.png'),
    tagline: 'Stop hoping. Start knowing.',
    description:
      'A household cash-flow planner. Most budget apps look backward at what you spent; Stryde plans forward. It splits each month into pay periods, assigns every bill to the paycheck that covers it, and shows what you can actually spend today.',
    highlights: [
      'Bank sync through Plaid with live balances',
      'Pay-period planning: every bill locked to the paycheck that pays it',
      'What-If Tool to test scenarios and see the monthly and yearly impact',
      'Shared households with invite codes and QR invites',
      'Debt payoff tracking and budget categories',
      'One shared finance engine (with tests) behind the web, mobile and macOS apps',
    ],
    stack: ['React 19', 'Vite', 'React Native', 'Expo', 'SwiftUI', 'Supabase', 'Plaid'],
    platforms: ['Web (PWA)', 'iOS', 'Android', 'macOS'],
    stats: [['381', 'commits'], ['3', 'apps, 1 backend'], ['6 mo', 'idea to launch']],
    url: 'https://www.stryde.money/',
    status: 'Web app live',
    media: { layout: 'browser', images: [{ src: img('stryde-dashboard.jpg'), alt: 'Stryde dashboard showing the monthly projection and pay periods' }] },
  },
  {
    name: 'FitCrew',
    icon: img('fitcrew-icon.png'),
    tagline: 'Train with your crew.',
    description:
      'A social fitness app for people who would rather train with friends than alone. It combines a full workout tracker, a social feed, group “Crews” with realtime chat, nutrition logging and a habit game with streaks, XP and leaderboards.',
    highlights: [
      'Workout logger with live sessions, automatic PR detection and XP',
      'Program builder for EMOM, AMRAP, circuits and intervals',
      'AI program generator built on the Claude API',
      'Crews: group pages, invites and realtime chat',
      'Nutrition logging with barcode scanning (USDA and Open Food Facts data)',
      'Native iOS extras: Apple Health sync, Live Activity and a home-screen widget',
    ],
    stack: ['TypeScript', 'React Native', 'Expo', 'Next.js 14', 'Tailwind', 'Supabase', 'Swift'],
    platforms: ['iOS', 'Android', 'Web'],
    stats: [['343', 'commits'], ['96', 'DB migrations'], ['3 mo', 'to v1.0']],
    url: 'https://www.fitcrew.fit/',
    status: 'Web live · mobile in beta',
    media: {
      layout: 'phones',
      images: [
        { src: img('fitcrew-01-sim25.jpg'), alt: 'FitCrew social feed' },
        { src: img('fitcrew-04-sim16.jpg'), alt: 'FitCrew workout screen with a Push Pull Legs program' },
        { src: img('fitcrew-03-sim20.jpg'), alt: 'FitCrew nutrition tracker' },
      ],
    },
  },
  {
    name: 'IntelliMove',
    icon: img('intellimove-icon.png'),
    tagline: 'Your best life has an address.',
    description:
      'A “where should we move?” quiz that actually listens. Instead of handing everyone the same famous cities, IntelliMove scores every U.S. place, from big cities to 100-person towns and the countryside between them, on each of your answers, then explains why each match fits and what the trade-offs are.',
    highlights: [
      'Scores 34,600 U.S. places on every answer, including small towns and rural areas',
      '87 questions across 19 categories: pick what matters, skip the rest, mark real must-haves',
      'Live “front-runner” that changes as you answer, then ranked results with a map',
      'Data pipeline merging 20+ public sources: Census, NOAA, NASA, FEMA, FBI, BLS, EPA',
      'Results in milliseconds, computed right in the browser from a compact columnar dataset',
      '34,000+ search-friendly town pages, rendered on demand and cached at the edge',
    ],
    stack: ['TypeScript', 'React', 'Vite', 'Node.js', 'Leaflet', 'Supabase', 'Vercel'],
    platforms: ['Web', 'iOS & Android planned'],
    stats: [['34,600', 'places scored'], ['87', 'quiz questions'], ['3 days', 'idea to beta']],
    url: '', // add https://intellimoveus.com once it's out of private beta
    status: 'Private beta · launching soon',
    media: {
      layout: 'phones',
      images: [
        { src: img('intellimove-01-landing.jpg'), alt: 'IntelliMove home screen: Your best life has an address' },
        { src: img('intellimove-02-quiz.jpg'), alt: 'IntelliMove quiz question with the live front-runner town' },
        { src: img('intellimove-03-results.jpg'), alt: 'IntelliMove results: top spots with a map' },
      ],
    },
  },
]
