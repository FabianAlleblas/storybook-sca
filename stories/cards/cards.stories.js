import "./students.css";
import "./journal.css";

import buddy from "./buddy-card.html";
import teams from "./teams-card.html";
import journal from "./journal-card.html";

export default { title: "Cards" };

export const buddyCard = () => buddy;
export const teamsCard = () => teams;
export const journalCard = () => journal;