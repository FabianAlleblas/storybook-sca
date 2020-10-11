import "./button.css";

import buttonJournal from "./journal-button.html";
import buttonJournalFormCancel from "./journal-form-cancel-button.html";
import buttonJournalFormSave from "./journal-form-save-button.html";

export default { title: "Button" };

export const journal = () => buttonJournal;
export const cancel = () => buttonJournalFormCancel;
export const save = () => buttonJournalFormSave;