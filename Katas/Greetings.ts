const greeting = (name: string) => console.log(`Hello, ${name}!`);

greeting("Dana");

// Refactored:

const greetingV2 = (name: string = ''): string => `Hello, ${!name ? 'World': name[0].toUpperCase() + name.slice(0).toLowerCase()}!`;