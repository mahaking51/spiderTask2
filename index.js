// question Set
//reload prevention
// window.onbeforeunload = function() {
//     return "Are you sure you want to leave? ";
// }

let question=[{
            ques:'Which of the following statement is/are correct about Favipiravir?',
            options:['Favipiravir is an antiviral COVID-19 drug.','Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.',"It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.","All the above are correct"],
            ans:3,
            status:"un",
            choose:-1
        },
        {
            ques:'How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?',
            options:["More than 50","More than 100","More than 150","More than 200"],
            ans:3,
            status:"un",
            choose:-1

        },
        {
            ques:'Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?',
            options:["Monkeys","Lizards","Hens","Kites"],
            ans:0,
            status:"un",
            choose:-1


        },
        {
            ques:" In a study, which cells are found in COVID-19 patients 'bode well' for long term immunit?",
            options:["P-cell","D-cell","T-cell","Endothelial Cells"],
            ans:2,
            status:"un",
            choose:-1


        },
        {
            ques:"Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",
            options:["BNT162","PICOVACC","Both A and B","Neither A nor B"],
            ans:0,
            status:"un",
            choose:-1


        },{
            ques:"Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
            options:["Plasma Therapy","Solidarity","Remdesivir","Hydroxychloroquine"],
            ans:0,
            status:"un",
            choose:-1

            
        },
        {
            ques:"How does Coronavirus transmit?",
            options:["When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces","If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.","If the distance is less than 1 meter from the infected person.","All the above are correct."],
            ans:3,
            status:"un",
            choose:-1


        },
        {
            ques:"What happens to a person suffering from COVID-19?",
            options:["Around 80% of the people will require no treatment as such and will recover on their own.","Around <20% or a small proportion may need hospitalisation."," A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).","All the above are correct"],
            ans:3,
            status:"un",
            choose:-1


        },
        {
            ques:"In which age group the COVID-19 spreads?",
            options:[" COVID-19 occur in all age groups.","Coronavirus infection is mild in children.","Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.","All the above are correct,"],
            ans:3,
            status:"un",
            choose:-1


        },
        {
            ques:"What is Coronavirus?",
            options:[" It is a large family of viruses.","It belongs to the family of Nidovirus.","Both A and B are correct","Only A is correct."],
            ans:2,
            status:"un",
            choose:-1


        },
        {
            ques:"World Health Organisation on 11 February, 2020 announced an official name for the disease that is causing the 2019 novel coronavirus outbreak? What is the new name of the disease?",
            options:["COVID-19","COVn-19","COnV-20","COnVID-19"],
            ans:0,
            status:"un",
            choose:-1


        },
        {
            ques:"The first case of novel coronavirus was identified in .....",
            options:["Beijing","Shanghai"," Wuhan, Hubei "," Tianjin"],
            ans:2,
            status:"un",
            choose:-1

        },
        {
            ques:"Which of the following diseases are related to coronavirus?",
            options:["MERS","SARS","Both A and B","Neither A nor B"],
            ans:2,
            status:"un",
            choose:-1


        },
        {
            ques:" Mild Symptoms of Novel coronavirus are:",
            options:["Fever","Cough","Shortness of breath","All the above"],
            ans:3,
            status:"un",
            choose:-1


        },
        {
            ques:"From where coronavirus got its name?",
            options:["Due to their crown-like projections.","Due to their leaf-like projections."," Due to their surface structure of bricks.","None of the above"],
            ans:0,
            status:"un",
            choose:-1


        },
        {
            ques:"What are the precautions that need to be taken to protect from the coronavirus?",
            options:[" Cover your nose and mouth when sneezing.","Add more garlic into your diet.","Visit your doctor for antibiotics treatment","Wash your hands after every hour."],
            ans:0,
            status:"un",
            choose:-1


        },
        {
            ques:"How long is average the incubation period for Wuhan coronavirus?",
            options:["12-24 hours","5-6 days","3-4 weeks","1 month"],
            ans:1,
            status:"un",
            choose:-1


        },
        {
            ques:"What other viruses belong to the coronavirus family?",
            options:["SARS and influenza","SARS and MERS","SARS and HIV","SARS and Tuberclosis"],
            ans:1,
            status:"un",
            choose:-1


        },
        {
            ques:"During 1919-20, immediately after the WW1, a deadly pandemic killed millions of people . What was it called?",
            options:["Bird Flu","Swine Flu","Bubonic Plague","Spanish Flu"],
            ans:3,
            status:"un",
            choose:-1


        },
        {
            ques:"A virus is made up of a DNA or RNA genome inside a protein shell known as what?",
            options:["Capsid","Enzymes","Follicles","Membrane"],
            ans:0,
            status:"un",
            choose:-1


        }]
let index;
let qlimit;
let correct=0;
let wrong=0;
let unansw;
let marked=0;

// window.onload=function () {
//     // document.getElementById('showPop').addEventListener('click',function(){
//     //     document.getElementById('popup').style.display='block';
//     // })
//     // document.getElementById('popup').addEventListener('click',function(){
//     //     document.getElementById('popup').style.display='none';
//     // })
//     // document.getElementById('popupclose').addEventListener('click',function(){
//     //     document.getElementById('popup').style.display='none';
//     // })
    
// };

// timer
// function timer(time){

//     document.getElementById('')
// }
document.getElementById('submitbut').addEventListener('click',function(e){
e.preventDefault();
if(document.getElementById('name').value!=''){
    document.getElementById('userdetails').style.display='none'
    document.getElementById('instruction').style.display='block';
    level=document.getElementById('difficulty').value;
    if(level==='easy'){
        qlimit=10
    }
    if(level==='medium'){
        qlimit=15
    }
    if(level==='hard'){
        qlimit=20
    }
    unansw=qlimit;
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
    document.getElementById('test').style.display='block';
    index=0;
    document.getElementById('qno').innerHTML="Question "+(index+1)
    document.getElementById('ques').innerHTML=question[index].ques;
    document.getElementById('viewscore').addEventListener('click',function(){
        if(unansw!=0){
        document.getElementById('popupScore').style.display='block';
        document.getElementById('finalsubmit').addEventListener('click',function(){
            // score page 
            document.getElementById('score').style.display='block';
            document.getElementById('test').style.display='none';
            document.getElementById('popupScore').style.display='none';

            console.log('finalsumbmit');
        })
        document.getElementById('popupcloseScore').addEventListener('click',function(){
            document.getElementById('popupScore').style.display='none';
        })
        }
        else{
            document.getElementById('score').style.display='block';
            document.getElementById('test').style.display='none';
        }
    })
    for(let j =0;j<4;j++){
        document.getElementById('op'+j).innerHTML=question[index].options[j];
    }
    document.getElementById('quesNav').innerHTML=''
    for(let k=0;k<qlimit;k++){
        document.getElementById('quesNav').innerHTML+='<div class="grid-item" id="nav'+k+'">'+(k+1)+'</div>'
    }
    document.getElementById('corans').innerHTML=correct;
    document.getElementById('wronans').innerHTML=wrong;
    document.getElementById('unanswered').innerHTML=unansw;
    document.getElementById('markans').innerHTML=marked;
    document.getElementById('nav'+index).style.backgroundColor='#bbe1fa';
    for(let h=0;h<4;h++){
        clicked=0
        document.getElementById('op'+h).addEventListener('click',function(){
            clicked++;
            if(h===question[index].ans && question[index].status==='un'){
                if(clicked==1){
                question[index].status='correct'
                question[index].choose=h
                document.getElementById('op'+h).style.backgroundColor='#d4edda';
                correct++;
                unansw--;
                document.getElementById('corans').innerHTML=correct;
                document.getElementById('unanswered').innerHTML=unansw;
                if(unansw==0){
                    document.getElementById('popup').style.display='block';
                    document.getElementById('popup').addEventListener('click',function(){
                        document.getElementById('popup').style.display='none';
                    })
                    document.getElementById('popupclose').addEventListener('click',function(){
                        document.getElementById('popup').style.display='none';
                    })
                }
                }
            }
            else{
                if(clicked==1 && question[index].status==='un'){
                question[index].status='wrong';
                question[index].choose=h
                document.getElementById('op'+h).style.backgroundColor='#f8d7da';
                wrong++;
                unansw--;
                document.getElementById('wronans').innerHTML=wrong;
                document.getElementById('unanswered').innerHTML=unansw;
                if(unansw==0){
                    document.getElementById('popup').style.display='block';
                    document.getElementById('popup').addEventListener('click',function(){
                        document.getElementById('popup').style.display='none';
                    })
                    document.getElementById('popupclose').addEventListener('click',function(){
                        document.getElementById('popup').style.display='none';
                    })
                }
                }
            }
        })
    }
    //nav to question randomly
    for(let k=0;k<qlimit;k++){
        document.getElementById('nav'+k).addEventListener('click',function(){
            index=k
            document.getElementById('qno').innerHTML="Question "+(k+1);
            document.getElementById('ques').innerHTML=question[k].ques;
            for(let j =0;j<4;j++){
                document.getElementById('op'+j).innerHTML=question[k].options[j];
            }    
            for(let i=0;i<qlimit;i++){
                if(i==k){
                    document.getElementById('nav'+i).style.backgroundColor='#bbe1fa'
                }
                if(question[i].status==='correct'){
                    document.getElementById('nav'+i).style.backgroundColor='#d4edda'
    
                }
                if(question[i].status==='wrong'){
                    document.getElementById('nav'+i).style.backgroundColor='#f8d7da'
                }
            }
            if(question[index].status==='un'){
                console.log('not answe');
            for(let i=0;i<4;i++){
                clicked=0;
                document.getElementById('op'+i).style.backgroundColor='white';
                document.getElementById('op'+i).addEventListener('click',function(){
                    clicked++;
                    if(i===question[index].ans && question[index].status==='un'){
                        if(clicked==1 && question[index].status==='un'){
                            question[index].status='correct'
                            question[index].choose=i;
                            document.getElementById('nav'+index).style.backgroundColor='#d4edda';
                            document.getElementById('op'+h).style.backgroundColor='#d4edda';
                            correct++;
                            unansw--;
                            document.getElementById('corans').innerHTML=correct;
                            document.getElementById('unanswered').innerHTML=unansw;
                            if(unansw==0){
                                document.getElementById('popup').style.display='block';
                                document.getElementById('popup').addEventListener('click',function(){
                                    document.getElementById('popup').style.display='none';
                                })
                                document.getElementById('popupclose').addEventListener('click',function(){
                                    document.getElementById('popup').style.display='none';
                                })
                            }
                        }
                    }
                    else{
                        if(clicked==1 && question[index].status==='un'){
                            question[index].status='wrong';
                            question[index].choose=i
                            document.getElementById('op'+h).style.backgroundColor='#f8d7da';
                            document.getElementById('nav'+index).style.backgroundColor='#f8d7da';
                            wrong++;
                            unansw--;
                            document.getElementById('wronans').innerHTML=wrong
                            if(unansw==0){
                                document.getElementById('popup').style.display='block';
                                document.getElementById('popup').addEventListener('click',function(){
                                    document.getElementById('popup').style.display='none';
                                })
                                document.getElementById('popupclose').addEventListener('click',function(){
                                    document.getElementById('popup').style.display='none';
                                })
                            }
                        }
                    }
                })
            }
        }
        if(question[index].status==='correct'){
            console.log('corre');
            for(let i=0;i<4;i++){
                document.getElementById('op'+i).style.backgroundColor='white';
            }
            document.getElementById('op'+question[index].choose).style.backgroundColor='#d4edda';
            document.getElementById('nav'+index).style.backgroundColor='#d4edda';

        }
        if(question[index].status==='wrong'){
            console.log("wron");
            for(let i=0;i<4;i++){
                document.getElementById('op'+i).style.backgroundColor='white';
            }
            document.getElementById('op'+question[index].choose).style.backgroundColor='#f8d7da';
            document.getElementById('nav'+index).style.backgroundColor='#f8d7da';

    
        }
        })
    }

})
document.getElementById('nextq').addEventListener('click',function(){
    console.log(question);
    if(index<(qlimit-1)){
        index++;
        document.getElementById('qno').innerHTML="Question "+(index+1)
        document.getElementById('ques').innerHTML=question[index].ques;
        for(let j =0;j<4;j++){
            document.getElementById('op'+j).innerHTML=question[index].options[j];
        }
        for(let i=0;i<qlimit;i++){
            if(i==index){
                document.getElementById('nav'+i).style.backgroundColor='#bbe1fa'
            }
            if(question[i].status==='correct'){
                document.getElementById('nav'+i).style.backgroundColor='#d4edda'

            }
            if(question[i].status==='wrong'){
                document.getElementById('nav'+i).style.backgroundColor='#f8d7da'
            }
        }
        if(question[index].status==='un'){
        for(let h=0;h<4;h++){
            clicked=0;
            document.getElementById('op'+h).style.backgroundColor='white';
            document.getElementById('op'+h).addEventListener('click',function(){
                clicked++;
                if(h===question[index].ans && question[index].status==='un'){
                    if(clicked==1){
                    question[index].status='correct'
                    question[index].choose=h;
                    document.getElementById('op'+h).style.backgroundColor='#d4edda';
                    correct++;
                    unansw--;

                    document.getElementById('corans').innerHTML=correct;
                    document.getElementById('unanswered').innerHTML=unansw;
                    if(unansw==0){
                        document.getElementById('popup').style.display='block';
                        document.getElementById('popup').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                        document.getElementById('popupclose').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                    }
                    }
                }
                else{
                    if(clicked==1 && question[index].status==='un'){
                        question[index].status='wrong';
                        question[index].choose=h;
                    document.getElementById('op'+h).style.backgroundColor='#f8d7da';
                    wrong++;
                    unansw--;

                    document.getElementById('wronans').innerHTML=wrong;
                    document.getElementById('unanswered').innerHTML=unansw;
                    if(unansw==0){
                        document.getElementById('popup').style.display='block';
                        document.getElementById('popup').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                        document.getElementById('popupclose').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                    }

                    }
                }
            })
        }
    }
    if(question[index].status==='correct'){
        for(let i=0;i<4;i++){
            document.getElementById('op'+i).style.backgroundColor='white';
        }
        document.getElementById('op'+question[index].choose).style.backgroundColor='#d4edda';
        document.getElementById('nav'+index).style.backgroundColor='#d4edda';

    }
    if(question[index].status==='wrong'){
        for(let i=0;i<4;i++){
            document.getElementById('op'+i).style.backgroundColor='white';
        }
        document.getElementById('op'+question[index].choose).style.backgroundColor='#f8d7da';
        document.getElementById('nav'+index).style.backgroundColor='#f8d7da';


    }
    }
    if(index==(qlimit-1)){
        document.getElementById('qno').innerHTML="Question "+(index+1)
        for(let i=0;i<qlimit;i++){
            if(i==index){
                document.getElementById('nav'+i).style.backgroundColor='#bbe1fa'
            }
            if(question[i].status==='correct'){
                document.getElementById('nav'+i).style.backgroundColor='#d4edda'

            }
            if(question[i].status==='wrong'){
                document.getElementById('nav'+i).style.backgroundColor='#f8d7da'
            }
            
        }
        document.getElementById('ques').innerHTML=question[index].ques;
        for(let j =0;j<4;j++){
            document.getElementById('op'+j).innerHTML=question[index].options[j];
        }
        if(question[index].status==='un'){
        for(let h=0;h<4;h++){
            clicked=0;
            document.getElementById('op'+h).style.backgroundColor='white';

            document.getElementById('op'+h).addEventListener('click',function(){
                clicked++;
                if(h===question[index].ans){
                    if(clicked==1 && question[index].status==='un'){
                        question[index].status='correct'
                        question[index].choose=h;

                    document.getElementById('op'+h).style.backgroundColor='#d4edda';
                    correct++
                    unansw--;

                    document.getElementById('corans').innerHTML=correct;
                    document.getElementById('unanswered').innerHTML=unansw;
                    if(unansw==0){
                        document.getElementById('popup').style.display='block';
                        document.getElementById('popup').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                        document.getElementById('popupclose').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                    }
                    }
                }
                else{
                    if(clicked==1 && question[index].status==='un'){
                        question[index].status='wrong';
                        question[index].choose=h;
                        console.log(question[index].status);
                    document.getElementById('op'+h).style.backgroundColor='#f8d7da';
                    wrong++;
                    unansw--;

                    document.getElementById('wronans').innerHTML=wrong
                    document.getElementById('unanswered').innerHTML=unansw;
                    if(unansw==0){
                        document.getElementById('popup').style.display='block';
                        document.getElementById('popup').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                        document.getElementById('popupclose').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                    }
                    }
                }
            })
        }
    }
    }
    console.log(correct,wrong);
})
document.getElementById('prevq').addEventListener('click',function(){
    console.log(correct,wrong);

    if(index>0){
        index--;
        document.getElementById('qno').innerHTML="Question "+(index+1)
        for(let i=0;i<qlimit;i++){
            if(i==index){
                document.getElementById('nav'+i).style.backgroundColor='#bbe1fa'
            }
            if(question[i].status==='correct'){
                document.getElementById('nav'+i).style.backgroundColor='#d4edda'

            }
            if(question[i].status==='wrong'){
                document.getElementById('nav'+i).style.backgroundColor='#f8d7da'
            }
            
        }

        document.getElementById('ques').innerHTML=question[index].ques;
        for(let j =0;j<4;j++){
            document.getElementById('op'+j).innerHTML=question[index].options[j];
        }
        if(question[index].status==='un'){
        for(let h=0;h<4;h++){
            clicked=0;
            document.getElementById('op'+h).style.backgroundColor='white';

            document.getElementById('op'+h).addEventListener('click',function(){
                clicked++;
                if(h===question[index].ans && question[index].status==='un'){
                    if(clicked==1){
                        question[index].status='correct'
                        question[index].choose=h;

                    document.getElementById('op'+h).style.backgroundColor='#d4edda';
                    document.getElementById('nav'+index).style.backgroundColor='#d4edda';
                    correct++
                    unansw--;

                    document.getElementById('corans').innerHTML=correct;
                    document.getElementById('unanswered').innerHTML=unansw;
                    if(unansw==0){
                        document.getElementById('popup').style.display='block';
                        document.getElementById('popup').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                        document.getElementById('popupclose').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                    }
                    }
                }
                else{
                    if(clicked==1 && question[index].status==='un'){
                        question[index].status='wrong';
                        question[index].choose=h;

                    document.getElementById('op'+h).style.backgroundColor='#f8d7da';
                    document.getElementById('nav'+index).style.backgroundColor='#f8d7da';
                    wrong++;
                    unansw--;

                    document.getElementById('wronans').innerHTML=wrong
                    document.getElementById('unanswered').innerHTML=unansw;
                    if(unansw==0){
                        document.getElementById('popup').style.display='block';
                        document.getElementById('popup').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                        document.getElementById('popupclose').addEventListener('click',function(){
                            document.getElementById('popup').style.display='none';
                        })
                    }
                    }
                }
            })
        }
    }
    if(question[index].status==='correct'){
        for(let i=0;i<4;i++){
            document.getElementById('op'+i).style.backgroundColor='white';
        }
        document.getElementById('op'+question[index].choose).style.backgroundColor='#d4edda';
        document.getElementById('nav'+index).style.backgroundColor='#d4edda';

    }
    if(question[index].status==='wrong'){
        for(let i=0;i<4;i++){
            document.getElementById('op'+i).style.backgroundColor='white';
        }
        document.getElementById('op'+question[index].choose).style.backgroundColor='#f8d7da';
        document.getElementById('nav'+index).style.backgroundColor='#f8d7da';

    }

    }
})
