export const site = {
  name: 'HestiaHire',
  domain: 'hestiahire.com',
  url: 'https://hestiahire.com',
  tagline: 'A remote hire that actually feels like a hire.',
  description:
    'HestiaHire places dedicated, full-time remote assistants with SMBs and small agencies across marketing, executive support, operations, and customer support, backed by a success manager and a real replacement guarantee.',
  eyebrow: 'Remote Staffing for Growing Teams',
  contactEmail: 'hello@hestiahire.com',
} as const;

export const heroStats = [
  { value: '5–7 days', label: 'from brief to matched candidates' },
  { value: '92%', label: 'of placements still active past one year' },
  { value: '1:1', label: 'dedicated success manager, every client' },
] as const;

export const fitCriteria = {
  good: [
    'SMB or small agency drowning in repeatable marketing, admin, or support work',
    'You want one dedicated person, not a revolving door of freelancers',
    'You can delegate a full role, not just scattered one-off tasks',
    "You're ready for a teammate who gets onboarded properly and sticks around",
  ],
  bad: [
    'Looking for a single one-off task with no ongoing relationship',
    'Need specialized engineering or technical development talent',
    "Not ready to manage a direct report, even a remote one",
    'Already have full in-house capacity for this role',
  ],
} as const;

export const services = [
  {
    number: '01',
    title: 'Marketing Assistant',
    desc: 'Content calendars, social posting, email campaigns, and basic design, so marketing keeps moving between hires.',
  },
  {
    number: '02',
    title: 'Executive Assistant',
    desc: 'Inbox, calendar, travel, and meeting prep, so your day runs without you having to manage it yourself.',
  },
  {
    number: '03',
    title: 'Operations & Admin Assistant',
    desc: 'Data entry, reporting, and vendor coordination, the recurring admin that quietly eats a founder’s week.',
  },
  {
    number: '04',
    title: 'Customer Support Assistant',
    desc: 'Tickets, live chat, and order support, so customers hear back the same day, not three days later.',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Tell us the role',
    desc: 'Share what’s eating your week. We scope the exact skills, hours, and personality fit you actually need.',
  },
  {
    number: '02',
    title: 'Meet your matches',
    desc: 'We hand-screen candidates and send you 2–3 vetted profiles within about a week, not a folder of fifty resumes.',
  },
  {
    number: '03',
    title: 'Hire and onboard',
    desc: 'Interview, pick your favorite, and we handle onboarding, paperwork, and their first two weeks of ramp-up.',
  },
  {
    number: '04',
    title: 'Stay backed',
    desc: 'A dedicated success manager checks in monthly, handles hiccups, and replaces your hire at no cost if it’s not a fit.',
  },
] as const;

export const projectTypeOptions = [
  { value: '', label: 'Select one' },
  { value: 'marketing', label: 'Marketing Assistant' },
  { value: 'ea', label: 'Executive Assistant' },
  { value: 'ops', label: 'Operations & Admin Assistant' },
  { value: 'support', label: 'Customer Support Assistant' },
  { value: 'other', label: "Not sure yet" },
] as const;
