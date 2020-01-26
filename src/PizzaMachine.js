import { Machine } from "xstate";

const pizzaMachine = Machine({
  initial: "crust",
  states: {
    crust: {
      on: {
        SUBMIT: [
          {
            target: "sauce",
            cond: (_, e) => (e.data.crust ? e.data.crust : false),
          },
        ],
      },
    },
    sauce: {
      on: {
        SUBMIT: [
          {
            target: "cheese",
          },
        ],
        RESET: "crust",
        BACK: "crust",
      },
    },
    cheese: {
      on: {
        SUBMIT: [
          {
            target: "toppings",
          },
        ],
        RESET: "crust",
        BACK: "sauce",
      },
    },
    toppings: {
      on: {
        SUBMIT: [
          {
            target: "summary",
          },
        ],
        RESET: "crust",
        BACK: "cheese",
      },
    },
    summary: {
      on: {
        BACK: "toppings",
        RESET: "crust",
      },
    },
  },
});

export default pizzaMachine;
