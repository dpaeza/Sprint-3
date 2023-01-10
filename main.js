const url = 'http://localhost:3000/properties';
const cardContainer = document.querySelector('[card-container-data]');
const type = document.getElementById('despleguno');
const holi = document.getElementById('prueba');
const selectType = document.getElementById('selectType');
const house = document.getElementById('house');
const residential = document.getElementById('residential');
const apartment = document.getElementById('apartment');
const tatus = document.getElementById('desplegdos');
const holidos = document.getElementById('pruebados');
const selectTypedos = document.getElementById('selectTypedos');
const forSale = document.getElementById('forSale');
const forRent = document.getElementById('forRent');
const findButton = document.getElementById('findButton');
const principalPage = document.getElementById('principalPage');
const filterCamp = document.getElementById('filterCamp');
const findButtonPage = document.querySelector('[find-button-page]');
const homePage = document.getElementById('homePage');
const logoHomePage = document.getElementById('logoHomePage');
const allPropertiesButton = document.getElementById('allPropertiesButton');
const allPropertiesMenu = document.getElementById('allPropertiesMenu');
const cardDesign = document.getElementById('cardDesign');
const agenciesMenu = document.getElementById('agenciesMenu');
const agenciesPage = document.getElementById('agenciesPage');
const favoritesMenu = document.getElementById('favoritesMenu');







//Functions

//Selection of  type & status
const fselecType = (var1, var2) => { 
    var1.addEventListener('click', () => {
        var2.textContent = var1.textContent;
    });
}



//Menu Select type
type.addEventListener('click', () => {
    holi.classList.toggle('magic');
    type.classList.toggle('change');
    type.classList.toggle('changedos');
    selectType.classList.toggle('change');
});

//Selection of  type
fselecType(commercial, selectType);
fselecType(house, selectType);
fselecType(residential, selectType);
fselecType(apartment, selectType);



//Menu Select status
tatus.addEventListener('click', () => {
    holidos.classList.toggle('magic');
    tatus.classList.toggle('change');
    tatus.classList.toggle('changedos');
    selectTypedos.classList.toggle('change');
});

//Selection of  status
fselecType(forSale, selectTypedos);
fselecType(forRent, selectTypedos);

filterCamp.addEventListener('input', (e) => {
    let valorInputFiltercamp = e.target.value;
    filterCamp.textContent=valorInputFiltercamp
})



//Render Cards Propierties
const renderCards = (propierties) => {
    propierties.forEach(propiertie => {
        cardContainer.innerHTML += ` <div class="card" id="cardDesign">
                 <div class="backCardimg" style="background-image: url(${propiertie.picture})">
                     <div class="divBCKimg">
                         <p class="houseBKimg">${propiertie.type}</p>
                         <p class="statusBKimg">${propiertie.status}</p>
                     </div>
                     <div class="divHeart">
                        <p class="priceCard">${propiertie.price}</p>
                        <p class="fav"><img src="./corazon.svg" alt="fav" class="heart"></p>
                     </div>
                 </div>
                 <div class="locationCard">
                     <p>${propiertie.city},</p>
                     <p>${propiertie.state}</p>
                 </div>
                 <p class="nameCard">${propiertie.address}</p>
                 <div class="divnamesCard">
                     <div class="divdosCardP">
                         <div><img src=${propiertie.owner.img} alt="Agentmini" class="imgOwner"></div>
                         <p class="agencyNameCard">${propiertie.owner.name}</p>
                     </div>
                     <p class="timeCard">${propiertie.time}</p>
                 </div>
                 <hr size="1px" color="#F4F4F4" class="barrita"/>
                 <div class="divfooterCard">
                     <div class="areaCardmini">
                         <div><img src="./Area Icon.svg" alt="areaIcon"></div>
                         <p class="areaLetterCard">${propiertie.area}</p>
                     </div>
                     <div class="ultdiv">
                         <div class="divminimini">
                             <img src="./Garage Icon.svg" alt="garageIcon">
                             <p class="areaLetterCard">${propiertie.garages}</p>
                         </div>
                         <div class="divminimini">
                             <img src="./Bathroom Icon.svg" alt="batroomIcon">
                             <p class="areaLetterCard">${propiertie.baths}</p>
                         </div>
                         <div class="divminimini">
                            <img src="./Bedroom Icon.svg" alt="bedroomIcon">
                             <p class="areaLetterCard">${propiertie.beds}</p>
                         </div>
                     </div>
                 </div>
            </div>`
    });
};

//Search whit Find Button
findButton.addEventListener('click', () => {
    if (selectType.textContent == 'Select Type' && selectTypedos.textContent == 'Select Status' && filterCamp.textContent === '') {
        principalPage.style.display = 'none';
        findButtonPage.classList.remove('findButtonPage');
        const renderCardsDos = (propierties) => {
            propierties.forEach(propiertie => {
                findButtonPage.innerHTML += ` <div class="card">
                <div class="backCardimg" style="background-image: url(${propiertie.picture})">
                    <div class="divBCKimg">
                        <p class="houseBKimg">${propiertie.type}</p>
                        <p class="statusBKimg">${propiertie.status}</p>
                    </div>
                    <p class="priceCard">${propiertie.price}</p>
                </div>
                <div class="locationCard">
                     <p>${propiertie.city},</p>
                     <p>${propiertie.state}</p>
                </div>
                <p class="nameCard">${propiertie.address}</p>
                <div class="divnamesCard">
                     <div class="divdosCardP">
                         <div><img src=${propiertie.owner.img} alt="Agentmini" class="imgOwner"></div>
                         <p class="agencyNameCard">${propiertie.owner.name}</p>
                     </div>
                     <p class="timeCard">${propiertie.time}</p>
                 </div>
                 <hr size="1px" color="#F4F4F4" class="barrita"/>
                 <div class="divfooterCard">
                     <div class="areaCardmini">
                         <div><img src="./Area Icon.svg" alt="areaIcon"></div>
                         <p class="areaLetterCard">${propiertie.area}</p>
                     </div>
                     <div class="ultdiv">
                         <div class="divminimini">
                             <img src="./Garage Icon.svg" alt="garageIcon">
                             <p class="areaLetterCard">${propiertie.garages}</p>
                         </div>
                         <div class="divminimini">
                             <img src="./Bathroom Icon.svg" alt="batroomIcon">
                             <p class="areaLetterCard">${propiertie.baths}</p>
                         </div>
                         <div class="divminimini">
                            <img src="./Bedroom Icon.svg" alt="bedroomIcon">
                             <p class="areaLetterCard">${propiertie.beds}</p>
                         </div>
                     </div>
                 </div>
            </div>`
            });
        };
        const fetchData = () => {
            const res = fetch(url);
            res
                .then(result => result.json())
                .then(data => {
                    renderCardsDos(data);
                })
        };
        fetchData();

    } else if (selectType.textContent !== 'Select Type' || selectTypedos.textContent !== 'Select Status' || filterCamp.textContent !== '') {
        principalPage.style.display = 'none';
        findButtonPage.classList.remove('findButtonPage');
        
        if (selectType.textContent !== 'Select Type' && selectTypedos.textContent == 'Select Status' && filterCamp.textContent == '') {
            URLfilter = `http://localhost:3000/properties?type=${selectType.textContent}`;
            
        } else if (selectType.textContent == 'Select Type' && selectTypedos.textContent !== 'Select Status' && filterCamp.textContent == '') {
            URLfilter = `http://localhost:3000/properties?status=${selectTypedos.textContent}`;

        } else if (selectType.textContent == 'Select Type' && selectTypedos.textContent == 'Select Status' && filterCamp.textContent !== '') {
            URLfilter = `http://localhost:3000/properties?q=${filterCamp.textContent}`;
            
        } else if (selectType.textContent !== 'Select Type' && selectTypedos.textContent !== 'Select Status' && filterCamp.textContent == '') {
            URLfilter = `http://localhost:3000/properties?type=${selectType.textContent}&status=${selectTypedos.textContent}`;

        } else if (selectType.textContent !== 'Select Type' && selectTypedos.textContent == 'Select Status' && filterCamp.textContent !== '') {
            URLfilter = `http://localhost:3000/properties?type=${selectType.textContent}&q=${filterCamp.textContent}`;
            
        } else if (selectType.textContent == 'Select Type' && selectTypedos.textContent !== 'Select Status' && filterCamp.textContent !== '') {
            URLfilter = `http://localhost:3000/properties?status=${selectTypedos.textContent}&q=${filterCamp.textContent}`;
            
        } else if (selectType.textContent !== 'Select Type' && selectTypedos.textContent !== 'Select Status' && filterCamp.textContent !== '') {
            URLfilter = `http://localhost:3000/properties?type=${selectType.textContent}&status=${selectTypedos.textContent}&q=${filterCamp.textContent}`;
            
        }
        const renderCardstres = (propierties) => {
                propierties.forEach(propiertie => {
                findButtonPage.innerHTML += ` <div class="card">
                <div class="backCardimg" style="background-image: url(${propiertie.picture})">
                    <div class="divBCKimg">
                        <p class="houseBKimg">${propiertie.type}</p>
                        <p class="statusBKimg">${propiertie.status}</p>
                    </div>
                    <p class="priceCard">${propiertie.price}</p>
                </div>
                <div class="locationCard">
                     <p>${propiertie.city},</p>
                     <p>${propiertie.state}</p>
                </div>
                <p class="nameCard">${propiertie.address}</p>
                <div class="divnamesCard">
                     <div class="divdosCardP">
                         <div><img src=${propiertie.owner.img} alt="Agentmini" class="imgOwner"></div>
                         <p class="agencyNameCard">${propiertie.owner.name}</p>
                     </div>
                     <p class="timeCard">${propiertie.time}</p>
                 </div>
                 <hr size="1px" color="#F4F4F4" class="barrita"/>
                 <div class="divfooterCard">
                     <div class="areaCardmini">
                         <div><img src="./Area Icon.svg" alt="areaIcon"></div>
                         <p class="areaLetterCard">${propiertie.area}</p>
                     </div>
                     <div class="ultdiv">
                         <div class="divminimini">
                             <img src="./Garage Icon.svg" alt="garageIcon">
                             <p class="areaLetterCard">${propiertie.garages}</p>
                         </div>
                         <div class="divminimini">
                             <img src="./Bathroom Icon.svg" alt="batroomIcon">
                             <p class="areaLetterCard">${propiertie.baths}</p>
                         </div>
                         <div class="divminimini">
                            <img src="./Bedroom Icon.svg" alt="bedroomIcon">
                             <p class="areaLetterCard">${propiertie.beds}</p>
                         </div>
                     </div>
                 </div>
            </div>`
            });
        };
            const fetchData = () => {
                const res = fetch(URLfilter);
                res
                .then( result => result.json())
                .then(data => {
                    renderCardstres(data);
                })
            };
        fetchData();
        
    }   
});


//HOMEPAGE Redictioner
homePage.addEventListener('click', () => {
    principalPage.style.display = 'grid';
    findButtonPage.classList.add('findButtonPage');
    selectType.textContent = 'Select Type';
    selectTypedos.textContent = 'Select Status';
    filterCamp.textContent = '';
    findButtonPage.textContent = '';
    cardDetail.classList.add('findButtonPage');
    agenciesPage.classList.add('findButtonPage');

});

//LOGO redictioner
logoHomePage.addEventListener('click', () => {
    principalPage.style.display = 'grid';
    findButtonPage.classList.add('findButtonPage');
    selectType.textContent = 'Select Type';
    selectTypedos.textContent = 'Select Status';
    filterCamp.textContent = '';
    findButtonPage.textContent = '';
    cardDetail.classList.add('findButtonPage');
    agenciesPage.classList.add('findButtonPage');

});

//Button All Properties redictioner
allPropertiesButton.addEventListener('click', () => {
    principalPage.style.display = 'none';
    findButtonPage.classList.remove('findButtonPage');
    agenciesPage.classList.add('findButtonPage');
        const renderCardsDos = (propierties) => {
            propierties.forEach(propiertie => {
                findButtonPage.innerHTML += ` <div class="card">
                <div class="backCardimg" style="background-image: url(${propiertie.picture})">
                    <div class="divBCKimg">
                        <p class="houseBKimg">${propiertie.type}</p>
                        <p class="statusBKimg">${propiertie.status}</p>
                    </div>
                    <p class="priceCard">${propiertie.price}</p>
                </div>
                <div class="locationCard">
                     <p>${propiertie.city},</p>
                     <p>${propiertie.state}</p>
                </div>
                <p class="nameCard">${propiertie.address}</p>
                <div class="divnamesCard">
                     <div class="divdosCardP">
                         <div><img src=${propiertie.owner.img} alt="Agentmini" class="imgOwner"></div>
                         <p class="agencyNameCard">${propiertie.owner.name}</p>
                     </div>
                     <p class="timeCard">${propiertie.time}</p>
                 </div>
                 <hr size="1px" color="#F4F4F4" class="barrita"/>
                 <div class="divfooterCard">
                     <div class="areaCardmini">
                         <div><img src="./Area Icon.svg" alt="areaIcon"></div>
                         <p class="areaLetterCard">${propiertie.area}</p>
                     </div>
                     <div class="ultdiv">
                         <div class="divminimini">
                             <img src="./Garage Icon.svg" alt="garageIcon">
                             <p class="areaLetterCard">${propiertie.garages}</p>
                         </div>
                         <div class="divminimini">
                             <img src="./Bathroom Icon.svg" alt="batroomIcon">
                             <p class="areaLetterCard">${propiertie.baths}</p>
                         </div>
                         <div class="divminimini">
                            <img src="./Bedroom Icon.svg" alt="bedroomIcon">
                             <p class="areaLetterCard">${propiertie.beds}</p>
                         </div>
                     </div>
                 </div>
            </div>`
            });
        };
        const fetchData = () => {
            const res = fetch(url);
            res
                .then(result => result.json())
                .then(data => {
                    renderCardsDos(data);
                })
        };
        fetchData();

});


//Properties menu redictioner
allPropertiesMenu.addEventListener('click', () => {
    principalPage.style.display = 'none';
    findButtonPage.classList.remove('findButtonPage');
    agenciesPage.classList.add('findButtonPage');
        const renderCardsDos = (propierties) => {
            propierties.forEach(propiertie => {
                findButtonPage.innerHTML += ` <div class="card">
                <div class="backCardimg" style="background-image: url(${propiertie.picture})">
                    <div class="divBCKimg">
                        <p class="houseBKimg">${propiertie.type}</p>
                        <p class="statusBKimg">${propiertie.status}</p>
                    </div>
                    <p class="priceCard">${propiertie.price}</p>
                </div>
                <div class="locationCard">
                     <p>${propiertie.city},</p>
                     <p>${propiertie.state}</p>
                </div>
                <p class="nameCard">${propiertie.address}</p>
                <div class="divnamesCard">
                     <div class="divdosCardP">
                         <div><img src=${propiertie.owner.img} alt="Agentmini" class="imgOwner"></div>
                         <p class="agencyNameCard">${propiertie.owner.name}</p>
                     </div>
                     <p class="timeCard">${propiertie.time}</p>
                 </div>
                 <hr size="1px" color="#F4F4F4" class="barrita"/>
                 <div class="divfooterCard">
                     <div class="areaCardmini">
                         <div><img src="./Area Icon.svg" alt="areaIcon"></div>
                         <p class="areaLetterCard">${propiertie.area}</p>
                     </div>
                     <div class="ultdiv">
                         <div class="divminimini">
                             <img src="./Garage Icon.svg" alt="garageIcon">
                             <p class="areaLetterCard">${propiertie.garages}</p>
                         </div>
                         <div class="divminimini">
                             <img src="./Bathroom Icon.svg" alt="batroomIcon">
                             <p class="areaLetterCard">${propiertie.baths}</p>
                         </div>
                         <div class="divminimini">
                            <img src="./Bedroom Icon.svg" alt="bedroomIcon">
                             <p class="areaLetterCard">${propiertie.beds}</p>
                         </div>
                     </div>
                 </div>
            </div>`
            });
        };
        const fetchData = () => {
            const res = fetch(url);
            res
                .then(result => result.json())
                .then(data => {
                    renderCardsDos(data);
                })
        };
        fetchData();

});

//Agencies menu redictioner
agenciesMenu.addEventListener('click', () => {
    principalPage.style.display = 'none';
    findButtonPage.classList.add('findButtonPage');
    agenciesPage.classList.remove('findButtonPage');
    findButtonPage.textContent = '';
    agenciesPage.innerHTML = ` <section class="agentCards" style="margin-top: 30px">
            <div class="agencieCard">
                <div class="veri">
                    <div class="vericontent">
                        <div>
                            <img src="./Verified Icon.svg" alt="Verified Logo">
                        </div>
                        <p class="verified">Verified</p>
                    </div>
                    <p>4.5</p>
                </div>
                <div>
                    <img src="./Logo.svg" alt="Agncy1" class="imgAgency">
                </div>
                <div class="aja">
                    <div class="divflag">
                        <div>
                            <img src="./Flag.svg" alt="USAFlag">
                        </div>
                        <p class="agencyL gapi">San Francisco, USA</p>
                    </div>
                    <p class="nameA">ProHouse</p>
                    <p class="agencyL ">123 456 7890</p>
                    <p class="agencyL ">agency@gmail.com</p>
                </div>
                <button class="propertiesButtonAgency"> 3 Propierties</button>
            </div>
            <div class="agencieCard">
                <div class="veri">
                    <div class="vericontent">
                        <div>
                            <img src="./Verified Icon.svg" alt="Verified Logo">
                        </div>
                        <p class="verified">Verified</p>
                    </div>
                    <p>4.5</p>
                </div>
                <div>
                    <img src="./Logo (1).svg" alt="Agncy2" class="imgAgency">
                </div>
                <div class="aja">
                    <div class="divflag">
                        <div>
                            <img src="./Flag.svg" alt="USAFlag">
                        </div>
                        <p class="agencyL gapi">Los Angeles, USA</p>
                    </div>
                    <p class="nameA">beHome</p>
                    <p class="agencyL ">123 456 7890</p>
                    <p class="agencyL ">agency@gmail.com</p>
                </div>
                <button class="propertiesButtonAgency"> 3 Propierties</button>
            </div>
            <div class="agencieCard">
                <div class="veri">
                    <div class="vericontent">
                        <div>
                            <img src="./Verified Icon.svg" alt="Verified Logo">
                        </div>
                        <p class="verified">Verified</p>
                    </div>
                    <p>4.5</p>
                </div>
                <div>
                    <img src="./Logo (2).svg" alt="Agncy3" class="imgAgency">
                </div>
                <div class="aja">
                    <div class="divflag">
                        <div>
                            <img src="./Flag.svg" alt="USAFlag">
                        </div>
                        <p class="agencyL gapi">Seattle, USA</p>
                    </div>
                    <p class="nameA">Alain Doe</p>
                    <p class="agencyL ">123 456 7890</p>
                    <p class="agencyL ">agency@gmail.com</p>
                </div>
                <button class="propertiesButtonAgency"> 3 Propierties</button>
            </div>
        </section>`
});


favoritesMenu.addEventListener('click', () => {
    principalPage.style.display = 'none';
    findButtonPage.classList.add('findButtonPage');
    agenciesPage.classList.add('findButtonPage');
    findButtonPage.textContent = '';
    agenciesPage.innerHTML = ` <section class="agentCards" style="margin-top: 30px">
            <div class="agencieCard">
                <div class="veri">
                    <div class="vericontent">
                        <div>
                            <img src="./Verified Icon.svg" alt="Verified Logo">
                        </div>
                        <p class="verified">Verified</p>
                    </div>
                    <p>4.5</p>
                </div>
                <div>
                    <img src="./Logo.svg" alt="Agncy1" class="imgAgency">
                </div>
                <div class="aja">
                    <div class="divflag">
                        <div>
                            <img src="./Flag.svg" alt="USAFlag">
                        </div>
                        <p class="agencyL gapi">San Francisco, USA</p>
                    </div>
                    <p class="nameA">ProHouse</p>
                    <p class="agencyL ">123 456 7890</p>
                    <p class="agencyL ">agency@gmail.com</p>
                </div>
                <button class="propertiesButtonAgency"> 3 Propierties</button>
            </div>
            <div class="agencieCard">
                <div class="veri">
                    <div class="vericontent">
                        <div>
                            <img src="./Verified Icon.svg" alt="Verified Logo">
                        </div>
                        <p class="verified">Verified</p>
                    </div>
                    <p>4.5</p>
                </div>
                <div>
                    <img src="./Logo (1).svg" alt="Agncy2" class="imgAgency">
                </div>
                <div class="aja">
                    <div class="divflag">
                        <div>
                            <img src="./Flag.svg" alt="USAFlag">
                        </div>
                        <p class="agencyL gapi">Los Angeles, USA</p>
                    </div>
                    <p class="nameA">beHome</p>
                    <p class="agencyL ">123 456 7890</p>
                    <p class="agencyL ">agency@gmail.com</p>
                </div>
                <button class="propertiesButtonAgency"> 3 Propierties</button>
            </div>
            <div class="agencieCard">
                <div class="veri">
                    <div class="vericontent">
                        <div>
                            <img src="./Verified Icon.svg" alt="Verified Logo">
                        </div>
                        <p class="verified">Verified</p>
                    </div>
                    <p>4.5</p>
                </div>
                <div>
                    <img src="./Logo (2).svg" alt="Agncy3" class="imgAgency">
                </div>
                <div class="aja">
                    <div class="divflag">
                        <div>
                            <img src="./Flag.svg" alt="USAFlag">
                        </div>
                        <p class="agencyL gapi">Seattle, USA</p>
                    </div>
                    <p class="nameA">Alain Doe</p>
                    <p class="agencyL ">123 456 7890</p>
                    <p class="agencyL ">agency@gmail.com</p>
                </div>
                <button class="propertiesButtonAgency"> 3 Propierties</button>
            </div>
        </section>`
});




//Peticion cards propierties
const fetchData = () => {
    const res = fetch(url);
    res
    .then( result => result.json())
    .then(data => {
        renderCards(data);
        
    })
};
fetchData();

// Card Details pages
cardContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('nameCard')) {
            let direc = e.target.textContent;
            filterDirec = direc;
            URLfilter = `http://localhost:3000/properties?address=${filterDirec}`;
            const renderCardstres = (propierties) => {
                    propierties.forEach(propiertie => {
                    cardDetail.innerHTML = `<section class="cardDetailsDivUno">
            <div style="background-image: url('${propiertie.picture}');" class="imgCardDetailS">
            </div>
            <div class="apartmentsType2">
                <p class="p4">${propiertie.type} ${propiertie.status}</p>
                <p class="pcinco">Beautiful ${propiertie.type}</p>
                <p class="p4">${propiertie.city}, ${propiertie.state}</p>
                <p class="price">From ${propiertie.price}</p>
            </div>
        </section>
        <section class="cardDetailsDivDos">
            <div class="divdodos">
                <p class="p4">H${propiertie.type} ${propiertie.status}</p>
                <p class="pseis">Beautiful ${propiertie.type}</p>
                <p class="p4">${propiertie.city}, ${propiertie.state}</p>
                <p class="money">From ${propiertie.price}</p>
                <div class="divdosCardP">
                    <p class="agencyNameCard">Owner: </p>
                    <div><img src="${propiertie.owner.img}" class="imgOwner"></div>
                    <p class="agencyNameCard">${propiertie.owner.name}</p>
                </div>
                <div class="ultdivDos">
                    <div class="divminiminiDos">
                        <img src="./Area Icon.svg" alt="areaIcon" class="scale">
                        <p class="dos">${propiertie.area}</p>
                    </div>
                    <div class="divminiminiDos">
                        <img src="./Garage Icon.svg" alt="garageIcon" class="scale">
                        <p class="dos">${propiertie.garages}</p>
                    </div>
                    <div class="divminiminiDos">
                        <img src="./Bathroom Icon.svg" alt="batroomIcon" class="scale">
                        <p class="dos">${propiertie.baths}</p>
                    </div>
                    <div class="divminiminiDos">
                        <img src="./Bedroom Icon.svg" alt="bedroomIcon" class="scale">
                        <p class="dos">${propiertie.beds}</p>
                    </div>
                </div>
            </div>
            <div class="divdotres">
                <p>${propiertie.description}</p>
            </div>
        </section>
        <section class="divult">
            <p class="pseis uscc">PROPERTY GALERY</p>
            <div>
                <img src="${propiertie.imgExtras.one}" alt="imgone" class="imdDCM">
                <img src="${propiertie.imgExtras.two}" class="imdDCM">
                <img src="${propiertie.imgExtras.three}" class="imdDCM">
                <img src="${propiertie.imgExtras.four}" class="imdDCM">
            </div>
        </section>`
                });
        };
            const fetchData = () => {
                const res = fetch(URLfilter);
                res
                .then( result => result.json())
                .then(data => {
                    renderCardstres(data);
                })
            };
            fetchData();
            
            principalPage.style.display = 'none';
        cardDetail.classList.remove('findButtonPage');
    }
});

cardContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('heart')) {
        console.log('hice click');
        e.target.classList.toggle('favdos');
        if (e.target.classList.contains('favdos')) {
            findButtonPage.innerHTML += ` <div class="card">
                <div class="backCardimg" style="background-image: url(${propiertie.picture})">
                    <div class="divBCKimg">
                        <p class="houseBKimg">${propiertie.type}</p>
                        <p class="statusBKimg">${propiertie.status}</p>
                    </div>
                    <p class="priceCard">${propiertie.price}</p>
                </div>
                <div class="locationCard">
                     <p>${propiertie.city},</p>
                     <p>${propiertie.state}</p>
                </div>
                <p class="nameCard">${propiertie.address}</p>
                <div class="divnamesCard">
                     <div class="divdosCardP">
                         <div><img src=${propiertie.owner.img} alt="Agentmini" class="imgOwner"></div>
                         <p class="agencyNameCard">${propiertie.owner.name}</p>
                     </div>
                     <p class="timeCard">${propiertie.time}</p>
                 </div>
                 <hr size="1px" color="#F4F4F4" class="barrita"/>
                 <div class="divfooterCard">
                     <div class="areaCardmini">
                         <div><img src="./Area Icon.svg" alt="areaIcon"></div>
                         <p class="areaLetterCard">${propiertie.area}</p>
                     </div>
                     <div class="ultdiv">
                         <div class="divminimini">
                             <img src="./Garage Icon.svg" alt="garageIcon">
                             <p class="areaLetterCard">${propiertie.garages}</p>
                         </div>
                         <div class="divminimini">
                             <img src="./Bathroom Icon.svg" alt="batroomIcon">
                             <p class="areaLetterCard">${propiertie.baths}</p>
                         </div>
                         <div class="divminimini">
                            <img src="./Bedroom Icon.svg" alt="bedroomIcon">
                             <p class="areaLetterCard">${propiertie.beds}</p>
                         </div>
                     </div>
                 </div>
            </div>`
        };
    }   
});
