import { electionService, representativeService } from "./features";
import { ElectionData } from "./features/elections/types";
import { ElectionVoteData } from "./features/representative-choice/types";

async function seedData() {
  const representatives = [
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      publicVotes: 10,
    },
    {
      name: "Taylor Smith",
      email: "taylor.smith@example.com",
      publicVotes: 10,
    },
    { name: "Jordan Lee", email: "jordan.lee@example.com", publicVotes: 12 },
  ];

  try {
    await Promise.all(
      representatives.map((representative) =>
        representativeService.seedRepresentative(
          representative.name,
          representative.email,
          representative.publicVotes
        )
      )
    );
    console.log("Seeding of Representatives complete!");
  } catch (error) {
    console.log("Error seeding Representatives", error);
  }

  const elections: ElectionData[] = [
    {
      issue: "Should we implement universal basic income (UBI)?",
      choice1_name: "Yes",
      choice1_votes: 0,
      choice1_result: "Pending",
      choice2_name: "No",
      choice2_votes: 0,
      choice2_result: "Pending",
      status: "ongoing",
      publish_date: new Date().toISOString(),
    },
    {
      issue:
        "Should the country adopt renewable energy as the primary power source?",
      choice1_name: "Yes",
      choice1_votes: 10,
      choice1_result: "Lose",
      choice2_name: "No",
      choice2_votes: 22,
      choice2_result: "Win",
      status: "closed",
      publish_date: "2024-08-11T09:00:00.000Z",
    },
    {
      issue: "Should we ban single-use plastics?",
      choice1_name: "Yes",
      choice1_votes: 22,
      choice1_result: "Win",
      choice2_name: "No",
      choice2_votes: 10,
      choice2_result: "Lose",
      status: "closed",
      publish_date: "2024-04-29T17:00:00.000Z",
    },
  ];

  try {
    await Promise.all(
      elections.map((election) => electionService.seedElection(election))
    );
    console.log("Seeding of elections complete!");
  } catch (error) {
    console.log("Error seeding elections", error);
  }

  const allRepresentatives =
    await representativeService.getAllRepresentatives();

  const allElections = await electionService.getAllElections();

  const electionVotes: ElectionVoteData[] = [
    {
      representativeId: allRepresentatives[0].id,
      electionId: allElections[1].id,
      choice1Votes: 4,
      choice2Votes: 6,
      currentPublicVotes: 10,
      choice: "No",
      agreementRate: 60,
    },
    {
      representativeId: allRepresentatives[1].id,
      electionId: allElections[1].id,
      choice1Votes: 6,
      choice2Votes: 4,
      currentPublicVotes: 10,
      choice: "Yes",
      agreementRate: 60,
    },
    {
      representativeId: allRepresentatives[2].id,
      electionId: allElections[1].id,
      choice1Votes: 0,
      choice2Votes: 12,
      currentPublicVotes: 12,
      choice: "No",
      agreementRate: 100,
    },

    {
      representativeId: allRepresentatives[0].id,
      electionId: allElections[2].id,
      choice1Votes: 8,
      choice2Votes: 2,
      currentPublicVotes: 10,
      choice: "Yes",
      agreementRate: 80,
    },
    {
      representativeId: allRepresentatives[1].id,
      electionId: allElections[2].id,
      choice1Votes: 4,
      choice2Votes: 6,
      currentPublicVotes: 10,
      choice: "No",
      agreementRate: 60,
    },
    {
      representativeId: allRepresentatives[2].id,
      electionId: allElections[2].id,
      choice1Votes: 9,
      choice2Votes: 3,
      currentPublicVotes: 12,
      choice: "Yes",
      agreementRate: 75,
    },
  ];

  try {
    await Promise.all(
      electionVotes.map((electionVote) =>
        representativeService.seedPublicVotes(electionVote)
      )
    );
    console.log("Seeding of election votes complete!");
  } catch (error) {
    console.log("Error seeding election votes", error);
  }
}

seedData();
