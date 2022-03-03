/////////////////////Home Page Elements /////////////////////////////////

//document.getElementById('homeName').innerHTML = 'Mvuleni Kekana';

//document.getElementById('homeVideo').src="./asset/video/video.mp4";

//document.getElementById('selfimage').src = "./asset/image/image1.jpg";

//document.getElementById('homebtn').innerHTML = 'Know me more';

//document.getElementById("homepara").innerHTML = ' I am an aspiring electrical engineer still building a career in the technical field. my current career is built on freelance consulting,  technical investigations and design  work and industrial installations in the field of electrical building service electrical  engineering. I have been given a few opportunities to participate in varying degrees of engineering design to construction  (concept through detail) of parts of electrical reticulation and other freelance projects. I have experience operating within';



/////////////////////About Me Page Elements /////////////////////////////////


//document.getElementById("deepbio").innerHTML = 'I am an aspiring electrical engineer still building a career in the technical field. my current career is built on freelance consulting,  technical investigations and design  work and industrial installations in the field of electrical building service electrical engineering. I have been given a few opportunities to participate in varying degrees of engineering design to construction  (concept through detail) of parts of electrical reticulation and other freelance projects. I have experience operating within ';

// Paragraphs for main body
let username = {
        username:'I am an aspiring electrical engineer still building a career in the technical field.my current career is built on freelance consulting,technical investigations and design  work and industrial installations in the field of electrical building service electrical,engineering. I have been given a few opportunities to participate in varying degrees of engineering design to construction  (concept through detail), of parts of electrical reticulation and other freelance projects. I have experience operating within <br> <br> sometimes tight and ambitious budgets and methodical administration to deadlines. Currently,  I am venturing in the domain of computer & software engineering and technology freelancing through the deeds of trial and error. As of writing , I am enjoying learning about various technologies of software development and data science.',
    }
    document.getElementById("aboutPara").innerHTML = username.username;





// Technical Skills Base
                
//document.getElementById("test1").innerHTML = "TEST TEST TEST Header";

const techSkill = []

techSkill[3] = {item: "<strong>Technical Skills Base:</strong>"};
techSkill[1] = {item: " <strong>Technical Skills Base:</strong> <br><br> Familiarity with research and design environments in electric engineering and industrial context. <br><br> Ability to work on my own or as part of a team. <br><br> Good analytical skills. <br><br> Time-efficient, systematic working methodology.<br><br> I can still manage a steep workload for extended periods. <br><br> Adaptability to new challenges presented. <br><br> Languages: English & IsiZulu <br><br> Computer literacy - General: Word, Excel, Power Point, Dynamics, LINUX <br><br> Computer literacy - Specialised: MATLAB SIMULINK, MPLAB, MS Visio, NI Multisim, PLEXIM Plecs, POWERSIMTECH Psim, EAGLECAD, PVSYT, ETAP, KICAD, OPENMODELICA, network administration. <br><br> Computer programming: HTML, CSS, ASM, JavaScript, Python & C++ <br><br> Basic Analytics: PowerBI & IBM Watson AutoML"};
techSkill[2] = {item: " "};
techSkill[0] = {item: "Time-efficient, systematic working methodology"};
techSkill[4] = {item: " "};
console.log(techSkill);


 //document.getElementById("techBase").innerHTML = techSkill[3].item;
document.getElementById("techBase").innerHTML = techSkill[1].item;


// Technical Skills Base


const techProjects = []

techProjects[0] = {item: " <strong>Tertiary qualifications:</strong> "};
techProjects[1] = {item: " National Diploma(Electrical Engineering): completed "};
techProjects[2] = {item: " Bachelor of Technology/Advanced Diploma(Electronic Engineering): pending "};
techProjects[3] = {item: " <strong>Electrical & Industrial projects:</strong> "};
techProjects[4] = {item: " →	Lufhereng development Phase 5 & 6 LV aerial electrical network"};
techProjects[5] = {item: " →	Lufhereng development Phase 5 & 6 MV underground electrical network"};
techProjects[15] = {item: " <strong>Computer & Software projects:</strong> "};
techProjects[16] = {item: "Python projects : Electrical Units Convertor, MSFT Price Prediction with ML, Stock Price Prediction With LSTM"};
techProjects[17] = {item: "MS PowerBI : telecom churn "};
techProjects[6] = {item: " <strong>Freelance & Academic consulting:</strong>"};
techProjects[7] = {item: " →	Design and Simulation of Single Phase PWM 2.5 kW Inverter : Converter design & MATLAB SIMULINK simulation"};
techProjects[8] = {item: " →	Investigative study of Hybrid Energy systems of Wind and Solar stand alone and grid tied systems  : Renewable energy devices investigation &  Psim Simulation "};
techProjects[9] = {item: " →	Impact of Distributed generation on power system stability "};
techProjects[10] = {item: "→	Load Forecasting On Power System Demand "};
techProjects[11] = {item: "→	Partial discharge Detection Device by means of Radiometric Instrumentation: Investigation , radio component calculation , MATLAB SIMULINK simulation "};
techProjects[12] = {item: "→	Electrification of village using Photovoltaic System: investigation & design, PVsyst & MATLAB simulation"};
techProjects[13] = {item: "<strong>Current Activties:</strong>"};
techProjects[14] = {item: "Freelancing and venturing into the field of computer engineering "};

for (let i = 0 ; i < techProjects.length;i++){
    console.log(techProjects[i]);
}


let listUi = "<ul>"

for (let i = 0; i < techProjects.length;i++){
    listUi +="<li>" + techProjects[i].item + "</li>"
}

listUi += "</ul>"


document.getElementById("techWork").innerHTML = listUi;
