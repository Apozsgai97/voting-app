import { describe, it } from "node:test";
import { calculateResults } from "./logic";
import { deepEqual } from "node:assert/strict";

describe("calculate result", () => {
  it("Choice1 witch less votes should return lose and choice2 should return win", () => {
    const election = {
      id: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
      issue:
        "Should the country adopt renewable energy as the primary power source?",
      choice_1: {
        name: "Yes",
        votes: 10,
        result: "Pending",
      },
      choice_2: {
        name: "No",
        votes: 50,
        result: "Pending",
      },
      status: "ongoing",
      publish_date: "2024-08-11T09:00:00.000Z",
    };

    const { result1, result2 } = calculateResults(election);
    deepEqual(result1, "Lose");
    deepEqual(result2, "Win");
  });
  it("Choice2 witch less votes should return lose and choice1 should return win", () => {
    const election = {
      id: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
      issue:
        "Should the country adopt renewable energy as the primary power source?",
      choice_1: {
        name: "Yes",
        votes: 10,
        result: "Pending",
      },
      choice_2: {
        name: "No",
        votes: 5,
        result: "Pending",
      },
      status: "ongoing",
      publish_date: "2024-08-11T09:00:00.000Z",
    };

    const { result1, result2 } = calculateResults(election);
    deepEqual(result1, "Win");
    deepEqual(result2, "Lose");
  });
  it("equal score should return tie", () => {
    const election = {
      id: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
      issue:
        "Should the country adopt renewable energy as the primary power source?",
      choice_1: {
        name: "Yes",
        votes: 10,
        result: "Pending",
      },
      choice_2: {
        name: "No",
        votes: 10,
        result: "Pending",
      },
      status: "ongoing",
      publish_date: "2024-08-11T09:00:00.000Z",
    };

    const { result1, result2 } = calculateResults(election);
    deepEqual(result1, "Tie");
    deepEqual(result2, "Tie");
  });
});

