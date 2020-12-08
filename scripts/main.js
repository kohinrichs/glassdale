import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { ShowNotesButton } from "./notes./ShowNotesButton"

// Allows us to tie in module to main.js without having to calling anything. Almost like  script tag -> browser will go get and evalute the file. Tells browser it exists, so it should show up in your sources.

import "./notes/NoteList.js"

CriminalList();
ConvictionSelect();
OfficerSelect();

ShowNotesButton();



// What features are we implementing?
// Filter list of criminals by the crime committed

// What tasks do we need to complete to implent the feature?
// Filter through the criminal data by matching the crime that has been slected and update the DOM with the focused collection of criminals. 
//      1. Listen for the selection of a crime (Set up event listener) and capture the chosen value. 
//      2. Use the selected value to filter the criminal data.
//      3. Update the DOM with the filtered criminal data.

// Which modules are involved?
    // CriminalList
    // ConvictionSelect
