        function openTab(tabwrapper, tab){
            console.log(tabwrapper)
            tabwrapperelement =  document.getElementById(tabwrapper);
            tabelement = document.getElementById(tab);
            document.getElementById("past-wrapper").classList.add("hidden");
            document.getElementById("live-shows-wrapper").classList.add("hidden");
            document.getElementById("team-wrapper").classList.add("hidden");
            document.getElementById("schedule-wrapper").classList.add("hidden");
            tabwrapperelement.classList.remove("hidden");
            document.getElementById("past-tab").classList.remove("selected");
            document.getElementById("live-tab").classList.remove("selected");
            document.getElementById("people-tab").classList.remove("selected");
            document.getElementById("schedule-tab").classList.remove("selected");
            tabelement.classList.add("selected")    
        }
        