const elections = [
  {
    id: "88b9c1b8-abe6-4b93-8197-bf25bf84364f",
    issue: "Should we implement universal basic income (UBI)?",
    choice_1: "Yes",
    choice_2: "No",
    status: "ongoing",
    publish_date: "2024-11-20",
  },
  {
    id: "3165d5b5-91fc-45df-97f0-6a9e02a3daaa",
    issue:
      "Should the country adopt renewable energy as the primary power source?",
    choice_1: "Yes",
    choice_2: "No",
    status: "closed",
    publish_date: "2024-08-11",
  },
  {
    id: "ad931316-554e-4075-89e9-e0ce6b40f6eb",
    issue: "Should we ban single-use plastics?",
    choice_1: "Yes",
    choice_2: "No",
    status: "closed",
    publish_date: "2024-04-29",
  },
  {
    id: "a9985f84-bb9e-44f9-bd08-d87d70567e10",
    issue: "Should we extend paid family leave to 2 years?",
    choice_1: "Yes",
    choice_2: "No",
    status: "closed",
    publish_date: "2023-07-02",
  },
  {
    id: "e5c5fa2f-071b-46f8-baf8-3306f585c6fa",
    issue: "Should we increase the legal smoking age to 21?",
    choice_1: "Yes",
    choice_2: "No",
    status: "closed",
    publish_date: "2022-03-28",
  },
  {
    id: "df14c7c8-6a8b-4bb2-bf9a-6acfd13a2929",
    issue: "Should we provide free public transportation in all major cities?",
    choice_1: "Yes",
    choice_2: "No",
    status: "closed",
    publish_date: "2021-08-19",
  },
  {
    id: "dc4b1c79-2337-4f68-b6cf-35ea61f7a89d",
    issue: "Should we implement mandatory voting?",
    choice_1: "Yes",
    choice_2: "No",
    status: "closed",
    publish_date: "2020-11-05",
  },
];

export function createElectionRepository() {
  return {
    async getAllElections() {
      return await elections;
    },
  };
}
export type Repository = ReturnType<typeof createElectionRepository>;