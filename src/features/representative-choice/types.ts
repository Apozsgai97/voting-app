export type Representative = {
  id: string;
  name: string;
  email: string;
  publicVotes: number;
};

export type RepresentativeData = {
  name: string;
  email: string;
  publicVotes: number;
};

export type ElectionVote = {
  id: string;
  representativeId: string;
  electionId: string;
  choice1Votes: number;
  choice2Votes: number;
  currentPublicVotes: number;
  choice: string;
  agreementRate: number;
};
export type Election = {
  id: string;
  issue: string;
  choice1_name: string;
  choice1_votes: number | null;
  choice1_result: string;
  choice2_name: string;
  choice2_votes: number | null;
  choice2_result: string;
  status: string;
  publish_date: string;
};
export type ElectionVoteData = {
  representativeId: string;
  electionId: string;
  choice1Votes: number;
  choice2Votes: number;
  currentPublicVotes: number;
  choice: string;
  agreementRate: number;
};
