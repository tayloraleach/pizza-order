import { Machine } from "xstate";

const pizzaMachine = Machine({
  initial: "crust",
  states: {
    crust: {
      on: {
        SUBMIT: [
          {
            target: "sauce",
            cond: (_, e) => (e.data.crust ? e.data.crust : false)
          }
        ]
      }
    },
    sauce: {
      on: {
        SUBMIT: [
          {
            target: "toppings",
            cond: (_, e) => (e.data.sauce ? e.data.sauce : false)
          }
        ],
        RESET: "crust",
        BACK: "crust"
      }
    },
    toppings: {
      on: {
        SUBMIT: [
          {
            target: "summary"
          }
        ],
        RESET: "crust",
        BACK: "sauce"
      }
    },
    summary: {
      on: {
        BACK: "toppings"
      }
    }
  }
});

export default pizzaMachine;
