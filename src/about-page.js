function showAbout() {
    const mainSection = document.querySelector(".content");
    mainSection.classList.add("menu-normal");
    mainSection.textContent = "";

    const updateAboutUs = (function () {
        const aboutUs = document.createElement("div");
        aboutUs.classList.add("about-us");
        
        (function createHeader () {
            const aboutUsHeader = document.createElement("h2");
            aboutUsHeader.textContent = "About Us";
            aboutUs.appendChild(aboutUsHeader);
        })();

        (function createParagraphs () {
            const firstPara = document.createElement("p");
            firstPara.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in congue lectus, a tincidunt metus. Mauris aliquam nec tortor id mollis. Nulla aliquet dignissim eleifend. Fusce lacinia turpis velit, vitae feugiat nulla semper at. Nullam at aliquet odio. Cras imperdiet velit ligula, vitae tempor purus dapibus sit amet. Duis vulputate ac sapien in consectetur. Aliquam erat volutpat.";
            aboutUs.appendChild(firstPara);
    
            const secondPara = document.createElement("p");
            secondPara.textContent = "Aenean nec nulla magna. Donec in ipsum sed nisl ultricies tristique feugiat vel ipsum. Aenean nibh nunc, tempus lacinia pulvinar ut, viverra vel magna. Donec accumsan arcu non ullamcorper porta. Proin luctus posuere sapien, dictum molestie metus egestas et. Aliquam rutrum faucibus ipsum ac maximus.";
            aboutUs.appendChild(secondPara);

            const thirdPara = document.createElement("p");
            thirdPara.textContent = "Happy Eating!";
            aboutUs.appendChild(thirdPara);
        })();

        mainSection.appendChild(aboutUs);
    })();

    const updateCredits = (function () {
        const credits = document.createElement("div");
        credits.classList.add("design-credits");

        (function createHeader () {
            const creditsHeader = document.createElement("h2");
            creditsHeader.textContent = "Credits";
            credits.appendChild(creditsHeader);
        })();

        (function createList () {
            const creditsList = document.createElement("ol");

            (function createFries () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/top-view-of-food-1640772/";
                creditsListItemDesc.textContent = "Sweet Potato Fries";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@ella-olsson-572949/";
                creditsListItemAuthor.textContent = "Ella Olsson";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();

            (function createPancake () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/pancake-with-sliced-strawberry-376464/";
                creditsListItemDesc.textContent = "Pancake";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@ash-craig-122861/";
                creditsListItemAuthor.textContent = "Ash Craig";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();

            (function createBurger () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/fries-and-burger-on-plate-70497/";
                creditsListItemDesc.textContent = "Burger and Fries";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@robinstickel/";
                creditsListItemAuthor.textContent = "Robin Stickel";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();

            (function createSpaghetti () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330/";
                creditsListItemDesc.textContent = "Spaghetti";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@fotios-photos/";
                creditsListItemAuthor.textContent = "Lisa from Pexels";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();

            (function createFish () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/fish-salad-dish-262959/";
                creditsListItemDesc.textContent = "Fish Salad";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@dana-tentis-118658/";
                creditsListItemAuthor.textContent = "Dana Tentis";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();
            
            (function createSteak () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/close-up-of-steak-meal-served-in-plate-323682/";
                creditsListItemDesc.textContent = "Steak";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@chevanon/";
                creditsListItemAuthor.textContent = "Chevanon Photography";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();


            (function createDumplings () {
                const creditsListItem = document.createElement("li");

                const creditsListItemDesc = document.createElement("a");
                creditsListItemDesc.href = "https://www.pexels.com/photo/round-white-and-blue-ceramic-bowl-with-cooked-ball-soup-and-brown-wooden-chopsticks-955137/";
                creditsListItemDesc.textContent = "Dumplings";
                creditsListItem.appendChild(creditsListItemDesc);

                const creditsListItemBy = document.createElement("span");
                creditsListItemBy.textContent = " by ";
                creditsListItem.appendChild(creditsListItemBy);

                const creditsListItemAuthor = document.createElement("a");
                creditsListItemAuthor.href = "https://www.pexels.com/@catscoming/";
                creditsListItemAuthor.textContent = "Cats Coming";
                creditsListItem.appendChild(creditsListItemAuthor);

                creditsList.appendChild(creditsListItem);
            })();

            credits.appendChild(creditsList);
        })();

        mainSection.appendChild(credits);
    })();
}

export { showAbout };