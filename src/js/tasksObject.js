const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function (obj) {
    const {
      age
    } = obj;
    const {
      languages
    } = obj.skills;
    const languagesString = languages.join(' ').toUpperCase();
    let str = `Мне ${age} и я владею языками: ${languagesString}`;
    return str;
  }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);



// console.log(Object.keys(personalPlanPeter.skills.programmingLangs).length);


function showProgrammingLangs(plan) {
  let str = '';
  const {
    programmingLangs
  } = plan.skills;
  for (const key in programmingLangs) {
    str += `Язык ${programmingLangs[key]} изучен на ${key} \n`;
    console.log(1);
    return str.trim();
  }
  console.log(0);
  return str;
}

showProgrammingLangs(personalPlanPeter);