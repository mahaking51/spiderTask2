question=[{
            ques:'Which of the following statement is/are correct about Favipiravir?',
            options:['Favipiravir is an antiviral COVID-19 drug.','Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.',"It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.","All the above are correct"],
            ans:3
        },
        {
            ques:'How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?',
            options:["More than 50","More than 100","More than 150","More than 200"],
            ans:3
        },
        {
            ques:'Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?',
            options:["Monkeys","Lizards","Hens","Kites"],
            ans:0
        },
        {
            ques:" In a study, which cells are found in COVID-19 patients 'bode well' for long term immunit?",
            options:["P-cell","D-cell","T-cell","Endothelial Cells"],
            ans:2
        },
        {
            ques:"Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",
            options:["BNT162","PICOVACC","Both A and B","Neither A nor B"],
            ans:0
        },{
            ques:"Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
            options:["Plasma Therapy","Solidarity","Remdesivir","Hydroxychloroquine"],
            ans:0
        },
        {
            ques:"How does Coronavirus transmit?",
            options:["When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces","If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.","If the distance is less than 1 meter from the infected person.","All the above are correct."],
            ans:3
        },
        {
            ques:"What happens to a person suffering from COVID-19?",
            options:["Around 80% of the people will require no treatment as such and will recover on their own.","Around <20% or a small proportion may need hospitalisation."," A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).","All the above are correct"],
            ans:3
        },
        {
            ques:"In which age group the COVID-19 spreads?",
            options:[" COVID-19 occur in all age groups.","Coronavirus infection is mild in children.","Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.","All the above are correct,"],
            ans:3
        },
        {
            ques:"What is Coronavirus?",
            options:[" It is a large family of viruses.","It belongs to the family of Nidovirus.","Both A and B are correct","Only A is correct."],
            ans:2
        },
        {
            ques:"World Health Organisation on 11 February, 2020 announced an official name for the disease that is causing the 2019 novel coronavirus outbreak? What is the new name of the disease?",
            options:["COVID-19","COVn-19","COnV-20","COnVID-19"],
            ans:0
        },
        {
            ques:"The first case of novel coronavirus was identified in .....",
            options:["Beijing","Shanghai"," Wuhan, Hubei "," Tianjin"],
            ans:2
        },
        {
            ques:"Which of the following diseases are related to coronavirus?",
            options:["MERS","SARS","Both A and B","Neither A nor B"],
            ans:2
        },
        {
            ques:" Mild Symptoms of Novel coronavirus are:",
            options:["Fever","Cough","Shortness of breath","All the above"],
            ans:3
        },
        {
            ques:"From where coronavirus got its name?",
            options:["Due to their crown-like projections.","Due to their leaf-like projections."," Due to their surface structure of bricks.","None of the above"],
            ans:0
        },
        {
            ques:"What are the precautions that need to be taken to protect from the coronavirus?",
            options:[" Cover your nose and mouth when sneezing.","Add more garlic into your diet.","Visit your doctor for antibiotics treatment","Wash your hands after every hour."],
            ans:0
        },
        {
            ques:"How long is average the incubation period for Wuhan coronavirus?",
            options:["12-24 hours","5-6 days","3-4 weeks","1 month"],
            ans:1
        },
        {
            ques:"What other viruses belong to the coronavirus family?",
            options:["SARS and influenza","SARS and MERS","SARS and HIV","SARS and Tuberclosis"],
            ans:1
        },
        {
            ques:"During 1919-20, immediately after the WW1, a deadly pandemic killed millions of people . What was it called?",
            options:["Bird Flu","Swine Flu","Bubonic Plague","Spanish Flu"],
            ans:3
        },
        {
            ques:"A virus is made up of a DNA or RNA genome inside a protein shell known as what?",
            options:["Capsid","Enzymes","Follicles","Membrane"],
            ans:0
        }]
document.getElementById('submitbut').addEventListener('click',function(e){
e.preventDefault();
if(document.getElementById('name').value!=''){
    document.getElementById('userdetails').style.display='none'
    document.getElementById('instruction').style.display='block';
}
else{
    alert('Fill valid name')
}
})
document.getElementById('startbut').disabled=true;

document.getElementById('terms').addEventListener('change',function(){
    console.log(document.getElementById('terms').checked);
    if(document.getElementById('terms').checked){
        document.getElementById('startbut').disabled=false;
    }
    else{
        document.getElementById('startbut').disabled=true;
  
    }
})

document.getElementById('startbut').addEventListener('click',function(){
    document.getElementById('instruction').style.display='none';
})
