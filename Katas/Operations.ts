// Given a string and two integers, return an operation of the two integers based on the string:

const basicOp = (operation: string, n1: number, n2: number): number => {
  switch(operation) {
    case '+': {
      return n1 + n2;
    }
    case '-': {
      return n1 - n2;
    }
    case '*': {
      return n1 * n2;
    }
    case '/': {
      return n1 / n2;
    }
    default: {
      return 0;
    }
  }
};

// Refactored:

const operations = {
  "+": (n1: number, n2: number): number => n1 + n2,
  "-": (n1: number, n2: number): number => n1 - n2,
  "*": (n1: number, n2: number): number => n1 * n2,
  "/": (n1: number, n2: number): number => n1 / n2,
};

const basicOpV2 = (operation: string, n1: number, n2: number): number => operations[operation](n1, n2);