//create manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h3>${manager.name}</h3>
                                    <h4>Manager</h4>                            
                                </div>
                                <div class="card-body">
                                    <p class="id">ID: ${manager.id}</p>
                                    <p class="email">Email: ${manager.email}</a>${manager.email}</p>
                                    <p class="office"> Office Number:${manager.officeNumber}</p>
                                </div>
                            </div>
                        </div>
    `;
}
//create engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h3>${engineer.name}</h3>
                                    <h4>Engineer</h4>                            
                                </div>
                                <div class="card-body">
                                    <p class="id">ID: ${engineer.name}</p>
                                    <p class="email">Email: <a href=mailto:${engineer.email}>${engineer.email}}</a></p>
                                    <p class="github">Github<a href="${engineer.github}">Github</a></p>
                                </div>
                            </div>
                        </div>
    `
}
//create intern card

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
                            <div class="card h-100">
                                <div class="card-header">
                                    <h3>${intern.name}</h3>
                                    <h4>Intern</h4>                            
                                </div>
                                <div class="card-body">
                                    <p class="id">ID: ${intern.id}</p>
                                    <p class="email">Email: <a href=mailto:${intern.email}>${intern.email}</a></p>
                                    <p class="school">School: ${intern.school}</p>
                                </div>
                            </div>
                        </div>
    `
};

//push to page

generateHTML = (data) => {
    pageArray = []

    for (let i=o; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        //functions to call specific roles

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }


    }

    //join strings and return to page

    const employeeCards = pageArray.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}


//html gen

const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link href="./style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script> 
    </body>
    `;
}

module.exports = generateHTML;