import { CriminalList } from "./criminals/CriminalList.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNotesButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"

// Allows us to tie in module to main.js without having to calling anything. Almost like  script tag -> browser will go get and evalute the file. Tells browser it exists, so it should show up in your sources.




CriminalList();
ConvictionSelect();
OfficerSelect();

NoteForm();


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


    // Alibis Chapter 8
    // - Add a button to each criminal representation in Criminal.js
    // Add new component to display known associates: AssociatesDisplay
        // job: creat HTML rep of associates and alibis

    // API coming from criminals 

    // Dispatch custn event from Criinals.js to alert other modules that the associates btn has been clcked
    // CRIMINAL HTML converter comp - listening for click and emitting event (known associates clicked)
    //list for knownAssocialtedCloicked Event on AssociateDisplay
    // associates display listening for event 
    // need to send criminal ID with it
    // Associates Display componet needs to FIND the criminal with the matching Id
    // Loop over the found criminal's known_associautes and display them 